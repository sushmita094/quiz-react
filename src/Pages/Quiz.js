// import { useEffect } from "react";

import QuestionCard from "../Components/QuestionCard";

const data = {
  category: "General Knowledge",
  correct_answer: "BackRub",
  difficulty: "medium",
  incorrect_answers: ["CatMassage", "SearchPro", "Netscape Navigator"],
  question: 'What was the original name of the search engine "Google"?',
  type: "multiple",
};

function Quiz() {
  // useEffect(() => {
  //   fetch("https://opentdb.com/api.php?amount=10")
  //     .then((data) => data.json())
  //     .then((json) => console.log(json))
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <div className="p-6 bg-slate-50 min-h-screen flex justify-center">
      <div className="md:w-4/5 lg:w-3/5 2xl:w-1/2">
        <div className="bg-white mb-6 flex items-center px-4 py-2 shadow-xl rounded-full shadow-slate-200 gap-x-2 md:mb-14">
          <div className="bg-slate-100 grow rounded-full h-3">
            <div className="bg-sky-700 rounded-full w-3/5 h-3"></div>
          </div>
          <div className="shrink-0 text-xs font-bold text-slate-600">60%</div>
        </div>

        <QuestionCard data={data} />

        <button className="text-lg leading-6 bg-sky-800 text-white w-full py-3 font-semibold rounded-md shadow-lg hover:shadow-xl transition-shadow shadow-slate-300 hover:shadow-slate-300 mt-8">
          Next
        </button>
      </div>
    </div>
  );
}

export default Quiz;
