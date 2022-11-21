import React from "react";
import Adding from "../Working/Adding";
import Remove from "../Working/Removing";
function Show() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Adding />
        <Remove></Remove>
      </div>
    </div>
  );
}

export default Show;
