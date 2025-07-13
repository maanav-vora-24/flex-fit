import React from 'react';
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;

  return (
    <div className="px-6 mt-[40px] lg:mt-[100px]">
      <h2 className="text-[28px] lg:text-[44px] font-black mb-12 text-black text-center">
        Watch <span className="text-blue-600 capitalize">{name}</span> exercise videos
      </h2>

      <div className="flex flex-wrap justify-center gap-10">
        {exerciseVideos.slice(0, 3).map((item, index) => (
          <a
            key={index}
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
            className="w-[320px] bg-white shadow-md rounded-xl overflow-hidden transform transition-transform hover:scale-[1.03] hover:shadow-lg"
          >
            <img
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
              className="w-full h-[180px] object-cover"
            />
            <div className="p-4">
              <p className="text-lg lg:text-xl font-semibold text-black line-clamp-2 mb-2">
                {item.video.title}
              </p>
              <p className="text-sm text-gray-600">Channel: {item.video.channelName}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ExerciseVideos;
