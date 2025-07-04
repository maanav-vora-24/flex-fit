import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentExercises, setCurrentExercises] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData(
          'https://exercisedb.p.rapidapi.com/exercises',
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }

      setExercises(exercisesData);
      setCurrentExercises(exercisesData.slice(0, 20)); // Limit for performance
    };

    fetchExercisesData();
  }, [bodyPart, setExercises]);

  if (!currentExercises.length) return <Loader />;

  return (
    <div id="exercises" className="mt-[50px] lg:mt-[109px] px-5">
      <h2 className="text-[30px] lg:text-[44px] font-bold mb-[46px] text-black">
        Showing Results
      </h2>

      <ScrollMenu>
        {currentExercises.map((exercise) => (
          <div
            key={exercise.id}
            itemId={exercise.id}
            title={exercise.name}
            className="mx-5 inline-block"
          >
            <ExerciseCard exercise={exercise} />
          </div>
        ))}
      </ScrollMenu>
    </div>
  );
};

export default Exercises;
