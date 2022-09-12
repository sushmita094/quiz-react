import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ListBox from "../Components/ListBox";

const difficulties = [
  { name: "Any Difficulty" },
  { name: "Easy" },
  { name: "Medium" },
  { name: "Hard" },
];

const types = [
  { name: "Any Type" },
  { name: "Multiple Choice" },
  { name: "True/False" },
];

function Welcome() {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    fetch("https://opentdb.com/api_category.php")
      .then((data) => data.json())
      .then((json) => {
        let categories = [
          { id: 9999, name: "Any Category" },
          ...json.trivia_categories,
        ];
        setCategories([...categories]);
        // console.log(json);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="p-6 bg-slate-50 min-h-screen flex justify-center">
      <div className="md:w-4/5 lg:w-3/5 2xl:w-1/2">
        <h1 className="text-center text-3xl font-semibold text-slate-900">
          Welcome!
        </h1>

        <div className="flex flex-col items-center gap-y-8 mt-10">
          {categories && <ListBox title="Select Category" data={categories} />}
          <ListBox title="Select Difficulty" data={difficulties} />
          <ListBox title="Select Type" data={types} />

          <Link
            to="quiz"
            className="text-lg leading-6 bg-sky-800 text-white w-full py-3 font-semibold rounded-md shadow-lg hover:shadow-xl transition-shadow shadow-slate-300 hover:shadow-slate-300 text-center"
          >
            Start Quiz
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
