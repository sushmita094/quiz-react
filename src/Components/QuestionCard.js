const QuestionCard = ({ question, answer, handleRecordAnswers }) => {
  const answers = [...question.incorrect_answers, question.correct_answer];

  const handleChange = (e) => {
    let currentAnswer = [...answer];
    if (e.target.checked) {
      currentAnswer.push(e.target.value);
    } else {
      currentAnswer = currentAnswer.filter((item) => item !== e.target.value);
    }

    handleRecordAnswers(currentAnswer);
  };

  return (
    <div>
      <p className="font-semibold text-3xl text-slate-900">
        {question.question}
      </p>

      <div className="mt-10 flex flex-col gap-y-4">
        {question.type === "multiple" ? (
          answers.map((answer) => (
            <div key={answer}>
              <input
                className="hidden checkbox"
                type="checkbox"
                value={answer}
                id={answer}
                onChange={handleChange}
              />
              <label
                htmlFor={answer}
                className="block rounded-md p-4 text-lg font-medium leading-6 bg-white border border-slate-200 text-slate-700 label cursor-pointer"
              >
                {answer}
              </label>
            </div>
          ))
        ) : (
          <>
            <div>
              <input
                className="hidden radio"
                type="radio"
                value="true"
                id="true"
                name="trueorfalse"
                onChange={handleChange}
              />
              <label
                htmlFor="true"
                className="block rounded-md p-4 text-lg font-medium leading-6 bg-white border border-slate-200 text-slate-700 label cursor-pointer"
              >
                True
              </label>
            </div>
            <div>
              <input
                className="hidden radio"
                type="radio"
                value="false"
                id="false"
                name="trueorfalse"
                onChange={handleChange}
              />
              <label
                htmlFor="false"
                className="block rounded-md p-4 text-lg font-medium leading-6 bg-white border border-slate-200 text-slate-700 label cursor-pointer"
              >
                False
              </label>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default QuestionCard;
