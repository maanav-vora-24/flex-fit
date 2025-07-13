import React from 'react';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      label: 'Body Part',
      value: bodyPart,
      color: 'bg-red-100 text-red-700',
    },
    {
      label: 'Target Muscle',
      value: target,
      color: 'bg-blue-100 text-blue-700',
    },
    {
      label: 'Equipment',
      value: equipment,
      color: 'bg-green-100 text-green-700',
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-10 px-5 py-10">
      <img
        src={gifUrl}
        alt={name}
        loading="lazy"
        className="w-[320px] lg:w-[500px] rounded-xl shadow-lg object-contain"
      />

      <div className="flex flex-col gap-6 max-w-xl">
        <h2 className="text-[32px] lg:text-[48px] font-black capitalize text-gray-900">
          {name}
        </h2>

        <p className="text-[16px] lg:text-[20px] text-gray-700 leading-7">
          Exercises keep you strong. <span className="capitalize font-semibold text-black">{name}</span> is one
          of the best exercises to target your <span className="capitalize font-semibold">{target}</span>.
          It will help you improve your mood and gain energy.
        </p>

        <div className="flex flex-col gap-4">
          {extraDetail.map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-4 px-4 py-2 rounded-lg shadow-sm border ${item.color}`}
            >
              <span className="text-[16px] font-bold">{item.label}:</span>
              <span className="capitalize font-medium">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Detail;
