import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import QuestionCard from "../Components/QuestionCard";

import { setScore, setUserAnswers } from "./../features/quiz/quizSlice";

const Quiz = () => {
  const questions = useSelector((state) => state.quiz.questions);
  const options = useSelector((state) => state.quiz.options);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [currentQues, setCurrentQues] = useState(0);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    let arr = [];
    for (let i = 0; i < options.amount; i++) {
      arr[i] = [];
    }
    setAnswers([...arr]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNextButton = () => {
    if (currentQues === options.amount - 1) {
      computeResult();
    } else {
      setCurrentQues((prevQues) => prevQues + 1);
    }
  };

  const handleRecordAnswers = (answer) => {
    let currentAnswers = [...answers];
    currentAnswers[currentQues] = answer;
    setAnswers([...currentAnswers]);
  };

  const computeResult = () => {
    dispatch(setUserAnswers(answers));

    let score = 0;
    for (let i = 0; i < questions.length; i++) {
      if (typeof questions[i].correct_answer === "string") {
        if (questions[i].correct_answer === answers[i][0]) {
          score++;
        }
      }
    }

    dispatch(setScore(score));
    navigate("/result");
  };

  return (
    <div className="p-6 bg-slate-50 min-h-screen flex justify-center">
      <div className="w-full sm:w-4/5 lg:w-3/5 2xl:w-1/2">
        <div className="bg-white mb-6 flex items-center px-4 py-2 shadow-xl rounded-full shadow-slate-200 gap-x-2 md:mb-14">
          <div className="bg-slate-100 grow rounded-full h-3">
            <div
              className="bg-sky-700 rounded-full w-3/5 h-3"
              style={{
                width: `${((currentQues + 1) / options.amount) * 100}%`,
              }}
            ></div>
          </div>
          <div className="shrink-0 text-xs font-bold text-slate-600">
            {`${((currentQues + 1) / options.amount) * 100}%`}
          </div>
        </div>

        {currentQues < options.amount && (
          <QuestionCard
            question={questions[currentQues]}
            answer={answers[currentQues]}
            handleRecordAnswers={handleRecordAnswers}
          />
        )}

        <button
          onClick={handleNextButton}
          className="text-lg leading-6 bg-sky-800 text-white w-full py-3 font-semibold rounded-md shadow-lg hover:shadow-xl transition-shadow shadow-slate-300 hover:shadow-slate-300 mt-8"
        >
          {currentQues === options.amount - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Quiz;
