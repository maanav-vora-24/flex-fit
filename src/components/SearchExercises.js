import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchData, exerciseOptions } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setBodyPart, bodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);
  const [allExercises, setAllExercises] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
  const fetchInitialData = async () => {
    const bodyPartsData = await fetchData(
      'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
      exerciseOptions
    );
    const exercisesData = await fetchData(
      'https://exercisedb.p.rapidapi.com/exercises',
      exerciseOptions
    );

    console.log('Exercise count:', exercisesData.length); // 👈 Add this

    setBodyParts(['all', ...bodyPartsData]);
    setAllExercises(exercisesData);
  };

  fetchInitialData();
}, []);


  // Live update suggestions
  useEffect(() => {
    const input = search.trim().toLowerCase();
    if (!input) {
      setSuggestions([]);
      return;
    }

    const sorted = allExercises
      .filter((ex) => ex.name.toLowerCase().includes(input))
      .sort((a, b) => {
        const aName = a.name.toLowerCase();
        const bName = b.name.toLowerCase();

        const aScore = aName === input ? 3 : aName.startsWith(input) ? 2 : 1;
        const bScore = bName === input ? 3 : bName.startsWith(input) ? 2 : 1;

        return bScore - aScore;
      });

    setSuggestions(sorted.slice(0, 5)); // show top 5
  }, [search, allExercises]);

  const handleSearch = () => {
    if (!search.trim()) return;

    if (suggestions.length > 0) {
      navigate(`/exercise/${suggestions[0].id}`);
      setSearch('');
      setSuggestions([]);
    } else {
      alert('No matching exercise found.');
    }
  };

  const handleSuggestionClick = (exercise) => {
    navigate(`/exercise/${exercise.id}`);
    setSearch('');
    setSuggestions([]);
  };

  return (
    <div className="flex flex-col items-center justify-center px-5 py-8 relative">
      <h1 className="text-[30px] lg:text-[44px] font-bold text-center mb-12">
        Awesome Exercises You <br /> Should Know
      </h1>

      <div className="relative mb-20 w-full max-w-[1170px]">
        <input
          type="text"
          placeholder="Search Exercises"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          className="w-full h-[56px] lg:h-[76px] px-4 pr-[180px] rounded-full border border-gray-300 text-lg font-semibold focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="absolute right-0 top-0 h-[56px] lg:h-[76px] w-[80px] lg:w-[173px] bg-blue-600 text-white text-sm lg:text-lg rounded-r-full hover:bg-blue-700"
        >
          Search
        </button>

        {/* 🔽 Dropdown Suggestions */}
        {suggestions.length > 0 && (
          <ul className="absolute z-50 w-full bg-white border border-gray-200 mt-2 rounded-xl max-h-60 overflow-y-auto shadow-lg">
            {suggestions.map((exercise) => (
              <li
                key={exercise.id}
                className="px-4 py-3 cursor-pointer hover:bg-blue-100 transition"
                onClick={() => handleSuggestionClick(exercise)}
              >
                {exercise.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="w-full px-5">
        <HorizontalScrollbar
          data={bodyParts}
          bodyParts
          setBodyPart={setBodyPart}
          bodyPart={bodyPart}
        />
      </div>
    </div>
  );
};

export default SearchExercises;
