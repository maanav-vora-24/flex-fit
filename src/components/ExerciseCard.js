import React from 'react';
import { Link } from 'react-router-dom';

const ExerciseCard = ({ exercise }) => (
  <Link
    to={`/exercise/${exercise.id}`}
    className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 w-full max-w-[400px] mx-auto p-6 flex flex-col items-center text-center"
  >
    <h2 className="text-2xl font-black text-gray-900 mb-4 leading-snug uppercase">
      {exercise.name}
    </h2>

    <img
      src={exercise.gifUrl}
      alt={exercise.name}
      loading="lazy"
      className="w-full h-[300px] object-contain rounded-md mb-6"
    />

    <span className="px-4 py-1 bg-blue-600 text-white text-sm rounded-full capitalize mb-4">
      {exercise.target}
    </span>

    <p className="text-gray-600 text-sm leading-relaxed">
      This exercise targets your <span className="font-semibold capitalize">{exercise.target}</span> using <span className="font-semibold capitalize">{exercise.equipment}</span>. Helps improve strength and endurance.
    </p>
  </Link>
);

export default ExerciseCard;

