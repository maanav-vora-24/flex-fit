import React from 'react';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <div className="mt-0 lg:mt-[100px] px-5">
    {/* Target Muscle Section */}
    <h2 className="text-[25px] lg:text-[44px] font-bold mb-8 text-black">
      Similar <span className="text-[#1E90FF] capitalize">Target Muscle</span> exercises
    </h2>
    <div className="relative p-2">
      {targetMuscleExercises.length !== 0 ? (
        <HorizontalScrollbar data={targetMuscleExercises} />
      ) : (
        <Loader />
      )}
    </div>

    {/* Equipment Section */}
    <h2 className="text-[25px] lg:text-[44px] font-bold mb-8 mt-[60px] lg:mt-[100px] text-black">
      Similar <span className="text-[#1E90FF] capitalize">Equipment</span> exercises
    </h2>
    <div className="relative p-2">
      {equipmentExercises.length !== 0 ? (
        <HorizontalScrollbar data={equipmentExercises} />
      ) : (
        <Loader />
      )}
    </div>
  </div>
);

export default SimilarExercises;
