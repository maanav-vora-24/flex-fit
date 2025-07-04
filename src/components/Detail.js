import React from 'react';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center gap-[60px] p-5">
      <img
        src={gifUrl}
        alt={name}
        loading="lazy"
        className="w-[300px] lg:w-[729px] h-auto object-cover"
      />
      <div className="flex flex-col gap-[20px] lg:gap-[35px]">
        <h2 className="text-[30px] lg:text-[64px] font-bold capitalize">
          {name}
        </h2>
        <p className="text-[18px] lg:text-[24px] text-gray-700 leading-7">
          Exercises keep you strong.{' '}
          <span className="capitalize font-semibold">{name}</span> is one
          of the best exercises to target your {target}. <br /> It will help
          you improve your mood and gain energy.
        </p>

        {extraDetail.map((item) => (
          <div
            key={item.name}
            className="flex items-center gap-6"
          >
            <div className="w-[100px] h-[100px] rounded-full bg-[#FFF2DB] flex items-center justify-center">
              <img
                src={item.icon}
                alt={item.name}
                className="w-[50px] h-[50px]"
              />
            </div>
            <p className="text-[20px] lg:text-[30px] capitalize">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;
