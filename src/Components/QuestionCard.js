const QuestionCard = ({ question, answer, handleRecordAnswers }) => {
  const answers = [...question.incorrect_answers, question.correct_answer];

  const handleCheckboxChange = (e) => {
    let currentAnswer = [...answer];
    if (e.target.checked) {
      currentAnswer.push(e.target.value);
    } else {
      currentAnswer = currentAnswer.filter((item) => item !== e.target.value);
    }

    handleRecordAnswers(currentAnswer);
  };

  const handleRadioChange = () => {
    let currentAnswer = [...answer];
    if (currentAnswer[0] === "True") {
      currentAnswer = ["False"];
    } else {
      currentAnswer = ["True"];
    }

    handleRecordAnswers(currentAnswer);
  };

  return (
    <div>
      <p
        className="font-semibold text-3xl text-slate-900 break-words"
        dangerouslySetInnerHTML={{ __html: question.question }}
      />

      <div className="mt-10 flex flex-col gap-y-4">
        {question.type === "multiple" ? (
          answers.map((answer) => (
            <div key={answer}>
              <input
                className="hidden checkbox"
                type="checkbox"
                value={answer}
                id={answer}
                onChange={handleCheckboxChange}
              />
              <label
                htmlFor={answer}
                className="block rounded-md p-4 text-lg font-medium leading-6 bg-white border border-slate-200 text-slate-700 label cursor-pointer"
                dangerouslySetInnerHTML={{ __html: answer }}
              />
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
                checked={answer && answer[0] === "True"}
                onChange={handleRadioChange}
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
                checked={answer && answer[0] === "False"}
                onChange={handleRadioChange}
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
