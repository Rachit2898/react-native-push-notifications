import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUrls, createUrls } from "./../redux/features/urlSlice";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import ToastService from "react-material-toast";
import { Link } from "react-router-dom";
import "./index.css";

function Home() {
  const { loading, urls, body, edit } = useSelector((state) => ({
    ...state.app,
  }));
  


  var websiteFormat =
    /^((https?|ftp|smtp):\/\/)?(www.)?[a-zA-Z0-9-]+(\.[a-z]+)+(\/[a-zA-Z0-9-#]+\/?)*$/;

  const toast = ToastService.new({
    place: "topRight",
    duration: 3,
    maxCount: 5,
  });
  const reload = () => {
    window.location.reload();
  };

  const apiFailureToast = (message) => {
    toast.error(message);
  };

  const apiSuccessToast = (msg) => {
    toast.success(msg);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [response, setResponse] = useState();
  const [click, setClick] = useState();
  const [showUrls] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      url: value,
    };
    if (!value) {
      apiFailureToast("Please enter required field");

      return;
    } else if (!value.match(websiteFormat)) {
      apiFailureToast("Enter valid Url");

      return;
    }
    setResponse(dispatch(createUrls(data)));
    apiSuccessToast("Short link Created");
    console.log(response);
  };
  

  useEffect(() => {
    console.log("rendering");
    dispatch(getUrls());
  }, [response]);

  const showUrl = () => {
    return (
      <>
        <table>
          <tr>
            <th>Original URL</th>
            <th>Shortened URL</th>
            <th>Clicks</th>
          </tr>

          {urls[0]?.response.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.original_url}</td>
                <a
                 
                  href={`http://localhost:3001/api/v1/shortUrl/${val.short_url}`}
                  target="_blank"
                  id="click"
                >
                  shorten/{val.short_url}
                </a>

                <td>{val.clicks}</td>
              </tr>
            );
          })}
        </table>
      </>
    );
  };

  return (
    <div className="home-screen">
      <div className="Div-1">
        <h1>Url Shortener</h1>
        <div>
          <div className="div-Input">
            <input
              type="text"
              onChange={(e) => setValue(e.target.value)}
              placeholder="Enter Post Title"
            ></input>
            <button onClick={handleSubmit} type="button">
              Short Link
            </button>
          </div>
          <div>{showUrls && <div>{showUrl()}</div>}</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
