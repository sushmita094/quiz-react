import { useEffect, useState } from "react";

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
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-center text-3xl font-bold">Welcome!</h1>

      <div className="flex flex-col items-center gap-y-8 mt-10">
        {categories && <ListBox title="Select Category" data={categories} />}
        <ListBox title="Select Difficulty" data={difficulties} />
        <ListBox title="Select Type" data={types} />
      </div>
    </div>
  );
}

export default Welcome;

/*

*/
