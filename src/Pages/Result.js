import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Result = () => {
  const score = useSelector((state) => state.quiz.score);
  const options = useSelector((state) => state.quiz.options);

  return (
    <div className="p-6 bg-slate-50 min-h-screen flex justify-center">
      <div className="md:w-4/5 lg:w-3/5 2xl:w-1/2">
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

          {/* <div className="pt-10">
            <div className="rounded-md p-4 bg-white shadow-md shadow-slate-200">
              <p className="text-sm text-slate-600">Question 1</p>
              <p className="text-md text-slate-900 font-semibold">
                What was the original name of the search engine "Google"?
              </p>

              <div className="grid grid-cols-2 gap-2 mt-2 font-medium">
                <div className="border border-red-400 rounded p-2 text-sm">
                  Answer 1
                </div>
                <div className="border border-emerald-500 bg-emerald-100 rounded p-2 text-sm">
                  Answer 2
                </div>
                <div className="border border-slate-200 rounded p-2 text-sm">
                  Answer 3
                </div>
                <div className="border border-slate-200 rounded p-2 text-sm">
                  Answer 4
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Result;
