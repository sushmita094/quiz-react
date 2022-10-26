import { useEffect, useState } from "react";

const answerStates = {
  CORRECT: "CORRECT",
  WRONG: "WRONG",
  UNATTEMPTED: "UNATTEMPTED",
};

const ResultQuesCard = ({ data, userAnswer }) => {
  const [state, setState] = useState("");

  const answers = [...data.incorrect_answers, data.correct_answer];

  useEffect(() => {
    if (userAnswer.length === 0) {
      setState(answerStates.UNATTEMPTED);
    } else if (data.correct_answer === userAnswer[0]) {
      setState(answerStates.CORRECT);
    } else {
      setState(answerStates.WRONG);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="pt-10 first:pt-4 w-full">
      <div className="rounded-md p-6 bg-white shadow-md shadow-slate-200">
        <div className="flex justify-between items-start gap-x-4">
          <p
            className="text-md text-slate-900 font-semibold"
            dangerouslySetInnerHTML={{ __html: data.question }}
          />

          <span
            className={`text-xs leading-3 border rounded p-1 font-semibold ${
              state === answerStates.CORRECT
                ? "border-emerald-500 text-emerald-600"
                : state === answerStates.WRONG
                ? "border-red-400 text-red-600"
                : "border-amber-400 text-amber-600"
            }`}
          >
            {state}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-4 font-medium">
          {answers.map((answer, i) => (
            <div
              className={`flex justify-between items-center border border-slate-200 rounded p-2 text-sm ${
                answer === data.correct_answer
                  ? "border-emerald-500 bg-emerald-100 text-emerald-600 font-semibold"
                  : state === "WRONG" && answer === userAnswer[0]
                  ? "border-red-400 bg-red-100 text-red-600"
                  : "text-slate-400"
              }`}
              key={i}
            >
              <span dangerouslySetInnerHTML={{ __html: answer }} />
              {state === answerStates.WRONG && answer === userAnswer[0] && (
                <div className="border rounded-full border-red-600 w-6 h-6 flex justify-center items-center">
                  <img
                    src="/icons/close.svg"
                    alt="wrong answer"
                    width={16}
                    height={16}
                  />
                </div>
              )}
              {state === answerStates.CORRECT && answer === userAnswer[0] && (
                <div className="border rounded-full border-emerald-600 w-6 h-6 flex justify-center items-center">
                  <img
                    src="/icons/check.svg"
                    alt="correct answer"
                    width={16}
                    height={16}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultQuesCard;
