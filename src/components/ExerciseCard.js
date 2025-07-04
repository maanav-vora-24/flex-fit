import React from 'react';
import { Link } from 'react-router-dom';

const ExerciseCard = ({ exercise }) => (
  <Link
    to={`/exercise/${exercise.id}`}
    className="w-[400px] h-[445px] bg-white border-t-[4px] border-red-600 rounded-bl-[20px] no-underline flex flex-col justify-between pb-[10px] transform transition-transform duration-300 hover:scale-105"
  >
    <img
      src={exercise.gifUrl}
      alt={exercise.name}
      loading="lazy"
      className="h-[326px] w-full object-cover"
    />
    <div className="flex flex-row px-5 mt-2 gap-3">
      <span className="px-4 py-1 text-white bg-red-300 text-sm rounded-full capitalize">{exercise.bodyPart}</span>
      <span className="px-4 py-1 text-white bg-yellow-300 text-sm rounded-full capitalize">{exercise.target}</span>
    </div>
    <p className="ml-5 text-black font-bold text-[20px] lg:text-[24px] mt-3 pb-2 capitalize">
      {exercise.name}
    </p>
  </Link>
);

export default ExerciseCard;
