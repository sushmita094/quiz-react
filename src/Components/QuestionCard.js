import React from "react";

function QuestionCard({ data }) {
  const answers = [...data.incorrect_answers, data.correct_answer];

  return (
    <div>
      <p className="font-semibold text-3xl text-slate-900">{data.question}</p>

      <div className="mt-10 flex flex-col gap-y-4">
        {answers.map((answer) => (
          <React.Fragment key={answer}>
            <label
              htmlFor={answer}
              className="border-2 border-slate-300 rounded p-4 text-lg font-medium leading-6"
            >
              {answer}
            </label>
            <input
              className="hidden"
              type="checkbox"
              value={answer}
              id={answer}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
