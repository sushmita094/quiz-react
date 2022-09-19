import { createSlice } from "@reduxjs/toolkit";

export const quizSlice = createSlice({
  name: "quiz",

  initialState: {
    questions: [],
    options: {
      amount: 2,
      difficulty: "",
      type: "",
      category: "",
    },
    score: null,
  },

  reducers: {
    setQuestions: (state, action) => {
      state.questions = [...action.payload];
    },
    setOptions: (state, action) => {
      state.options = { ...state.options, ...action.payload };
    },
    setScore: (state, action) => {
      state.score = action.payload;
    },
  },
});

export const { setQuestions, setOptions, setScore } = quizSlice.actions;

export default quizSlice.reducer;
