import React from 'react';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <div className="mt-0 lg:mt-[100px] px-5">
    {/* Target Muscle Section */}
    <h2 className="text-[25px] lg:text-[44px] font-bold mb-8 text-black text-center">
      Similar <span className="text-[#1E90FF] capitalize">Target Muscle</span> exercises
    </h2>
    {targetMuscleExercises.length !== 0 ? (
      <ScrollMenu>
        <div className="flex gap-6 px-6">
          {targetMuscleExercises.slice(0, 15).map((exercise) => (
            <div key={exercise.id} itemId={exercise.id} className="flex-shrink-0 w-[400px]">
              <ExerciseCard exercise={exercise} />
            </div>
          ))}
        </div>
      </ScrollMenu>
    ) : (
      <Loader />
    )}

    {/* Equipment Section */}
    <h2 className="text-[25px] lg:text-[44px] font-bold mb-8 mt-[60px] lg:mt-[100px] text-black text-center">
      Similar <span className="text-[#1E90FF] capitalize">Equipment</span> exercises
    </h2>
    {equipmentExercises.length !== 0 ? (
      <ScrollMenu>
        <div className="flex gap-6 px-6">
          {equipmentExercises.slice(0, 15).map((exercise) => (
            <div key={exercise.id} itemId={exercise.id} className="flex-shrink-0 w-[400px]">
              <ExerciseCard exercise={exercise} />
            </div>
          ))}
        </div>
      </ScrollMenu>
    ) : (
      <Loader />
    )}
  </div>
);

export default SimilarExercises;


