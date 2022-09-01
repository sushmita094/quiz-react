import { useEffect } from "react";

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
            <div className="bg-slate-400 rounded-full w-3/5 h-3"></div>
          </div>
          <div className="shrink-0 text-xs font-bold text-slate-600">60%</div>
        </div>

        <QuestionCard data={data} />
        <button className="bg-slate-300 w-full mt-8 p-4 text-xl leading-6 font-bold rounded text-slate-800">
          Next
        </button>
      </div>
    </div>
  );
}

export default Quiz;
