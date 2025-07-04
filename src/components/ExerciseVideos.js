import React from 'react';
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;

  return (
    <div className="px-5 mt-[20px] lg:mt-[203px]">
      <h2 className="text-[25px] lg:text-[44px] font-bold mb-8 text-black">
        Watch <span className="text-[#1E90FF] capitalize">{name}</span> exercise videos
      </h2>

      <div className="flex flex-wrap justify-start items-center gap-[0px] lg:gap-[110px]">
        {exerciseVideos.slice(0, 3).map((item, index) => (
          <a
            key={index}
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
            className="w-[350px] flex flex-col gap-3 mb-10 no-underline text-black hover:scale-[1.02] transition-transform"
          >
            <img
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
              className="rounded-tl-[20px]"
            />
            <div>
              <p className="text-[18px] lg:text-[28px] font-semibold">
                {item.video.title}
              </p>
              <p className="text-[14px]">{item.video.channelName}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ExerciseVideos;
