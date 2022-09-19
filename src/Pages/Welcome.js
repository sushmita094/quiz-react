import { useEffect, useState } from "react";
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

const Welcome = () => {
  const [categories, setCategories] = useState(null);
  const [difficulty, setDifficulty] = useState(difficulties[0]);
  const [type, setType] = useState(types[0]);
  const [category, setCategory] = useState(categories ? categories[0] : null);

  const options = useSelector((state) => state.quiz.options);
  const dispatch = useDispatch();

  let navigate = useNavigate();

  useEffect(() => {
    fetch("https://opentdb.com/api_category.php")
      .then((data) => data.json())
      .then((json) => {
        let categories = [
          { id: "", name: "Any Category" },
          ...json.trivia_categories,
        ];
        setCategories([...categories]);
        setCategory(categories[0]);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleCta = () => {
    dispatch(
      setOptions({
        difficulty: difficulty.value,
        type: type.value,
        category: category.id,
      })
    );

    fetch(
      `https://opentdb.com/api.php?amount=${options.amount}&category=${category.id}&difficulty=${difficulty.value}&type=${type.value}`
    )
      .then((data) => data.json())
      .then((json) => {
        dispatch(setQuestions(json.results));
        navigate("/quiz");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="p-6 bg-slate-50 min-h-screen flex justify-center">
      <div className="md:w-4/5 lg:w-3/5 2xl:w-1/2">
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
            onClick={handleCta}
            className="text-lg leading-6 bg-sky-800 text-white w-full py-3 font-semibold rounded-md shadow-lg hover:shadow-xl transition-shadow shadow-slate-300 hover:shadow-slate-300 text-center"
          >
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
