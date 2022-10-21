import { createSlice } from "@reduxjs/toolkit";

export const quizSlice = createSlice({
  name: "quiz",

  initialState: {
    options: {
      amount: 10,
      difficulty: "",
      type: "",
      category: "",
    },
    questions: [],
    userAnswers: [],
    score: null,
  },

  reducers: {
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
    setOptions: (state, action) => {
      state.options = { ...state.options, ...action.payload };
    },
    setScore: (state, action) => {
      state.score = action.payload;
    },
    setUserAnswers: (state, action) => {
      state.userAnswers = [...action.payload];
    },
  },
});

export const { setQuestions, setOptions, setScore, setUserAnswers } =
  quizSlice.actions;

export default quizSlice.reducer;
