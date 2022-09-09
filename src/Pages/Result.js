import { Link } from "react-router-dom";

function Result() {
  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-lg text-slate-800">Result</h1>
        <p className="text-5xl py-8 text-slate-900">75%</p>

        <Link
          to="quiz"
          className="bg-slate-500 text-white w-40 py-2 text-center rounded-lg shadow-lg font-semibold"
        >
          Play Again
        </Link>

        <div className="pt-10">
          <div className="border border-slate-200 rounded-lg p-4 shadow-sm">
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
        </div>
      </div>
    </div>
  );
}

export default Result;
