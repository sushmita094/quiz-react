import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { setOptions, setQuestions } from "./../features/quiz/quizSlice";

import ListBox from "../Components/ListBox";

const difficulties = [
  { name: "Any Difficulty", value: "" },
  { name: "Easy", value: "easy" },
  { name: "Medium", value: "medium" },
  { name: "Hard", value: "hard" },
];

const types = [
  { name: "Any Type", value: "" },
  { name: "Multiple Choice", value: "multiple" },
  { name: "True/False", value: "boolean" },
];

const categories = [
  { id: "", name: "Any Category" },
  { id: 9, name: "General Knowledge" },
  { id: 10, name: "Entertainment: Books" },
  { id: 11, name: "Entertainment: Film" },
  { id: 12, name: "Entertainment: Music" },
  { id: 13, name: "Entertainment: Musicals & Theatres" },
  { id: 14, name: "Entertainment: Television" },
  { id: 15, name: "Entertainment: Video Games" },
  { id: 16, name: "Entertainment: Board Games" },
  { id: 17, name: "Science & Nature" },
  { id: 18, name: "Science: Computers" },
  { id: 19, name: "Science: Mathematics" },
  { id: 20, name: "Mythology" },
  { id: 21, name: "Sports" },
  { id: 22, name: "Geography" },
  { id: 23, name: "History" },
  { id: 24, name: "Politics" },
  { id: 25, name: "Art" },
  { id: 26, name: "Celebrities" },
  { id: 27, name: "Animals" },
  { id: 28, name: "Vehicles" },
  { id: 29, name: "Entertainment: Comics" },
  { id: 30, name: "Science: Gadgets" },
  { id: 31, name: "Entertainment: Japanese Anime & Manga" },
  { id: 32, name: "Entertainment: Cartoon & Animations" },
];

const Welcome = () => {
  const [difficulty, setDifficulty] = useState(difficulties[0]);
  const [type, setType] = useState(types[0]);
  const [category, setCategory] = useState(categories ? categories[0] : null);
  const [loader, setLoader] = useState(false);

  const options = useSelector((state) => state.quiz.options);
  const dispatch = useDispatch();

  let navigate = useNavigate();

  const handleStartQuiz = () => {
    dispatch(
      setOptions({
        difficulty: difficulty.value,
        type: type.value,
        category: category.id,
      })
    );

    setLoader(true);
    fetch(
      `https://opentdb.com/api.php?amount=${options.amount}&category=${category.id}&difficulty=${difficulty.value}&type=${type.value}`
    )
      .then((data) => data.json())
      .then((json) => {
        dispatch(setQuestions(json.results));
        navigate("/quiz");
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoader(false);
      });
  };

  return (
    <div className="p-6 bg-slate-50 min-h-screen flex justify-center">
      <div className="w-full sm:w-4/5 lg:w-3/5 2xl:w-1/2">
        <h1 className="text-center text-3xl font-semibold text-slate-900">
          Welcome!
        </h1>

        <div className="flex flex-col items-center gap-y-8 mt-10">
          {categories && (
            <ListBox
              title="Select Category"
              data={categories}
              selected={category}
              setSelected={setCategory}
            />
          )}
          <ListBox
            title="Select Difficulty"
            data={difficulties}
            selected={difficulty}
            setSelected={setDifficulty}
          />
          <ListBox
            title="Select Type"
            data={types}
            selected={type}
            setSelected={setType}
          />

          <button
            onClick={handleStartQuiz}
            className="text-lg leading-6 bg-sky-800 text-white w-full py-3 font-semibold rounded-md shadow-lg hover:shadow-xl transition-shadow shadow-slate-300 hover:shadow-slate-300 text-center"
            disabled={loader}
          >
            {loader ? "Starting..." : "Start Quiz"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
