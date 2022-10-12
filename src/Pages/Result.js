import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import ResultQuesCard from "../Components/ResultQuesCard";

const Result = () => {
  const score = useSelector((state) => state.quiz.score);
  const options = useSelector((state) => state.quiz.options);
  const questions = useSelector((state) => state.quiz.questions);
  const userAnswers = useSelector((state) => state.quiz.userAnswers);

  return (
    <div className="p-6 bg-slate-50 min-h-screen flex justify-center">
      <div className="w-full sm:w-4/5 lg:w-3/5 2xl:w-1/2">
        <div className="flex flex-col items-center">
          <h1 className="font-semibold text-lg text-slate-500">RESULTS</h1>
          <p className="text-5xl py-8 text-slate-900">
            {score}/{options.amount}
          </p>

          <Link
            to="/"
            className="text-md leading-6 bg-sky-800 text-white w-40 py-2 text-center rounded-md font-semibold shadow-lg hover:shadow-xl transition-shadow shadow-slate-300 hover:shadow-slate-300"
          >
            Play Again
          </Link>

          <p className="mt-12 self-start text-lg font-bold">
            Detailed Results:
          </p>
          <div>
            {questions.map((item, i) => (
              <ResultQuesCard key={i} data={item} userAnswer={userAnswers[i]} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
