import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// export const fetchData = createAsyncThunk(
//   'users/fetchData',
//   async (_, { dispatch }) => {
//     const data = await fetch('http://localhost:3001/users').then((res) =>
//       res.json()
//     )
//     const users = data.map(({ articles, comments, ...user }) => ({ ...user }))
//     dispatch(setUsers(users))

//     const articles = data
//       .map((user) =>
//         user.articles.map((article) => ({ ...article, userId: user.id }))
//       )
//       .flat()

//     dispatch(setArticles(articles))

//     const comments = data
//       .map((user) =>
//         user.comments.map((comment) => ({ ...comment, userId: user.id }))
//       )
//       .flat()

//     dispatch(setComments(comments))
//   }
// )

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
