import Image from "next/image";
import React from "react";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import { forwardRef } from "react";

const Thumbnail = forwardRef(({ result }, ref) => {
  const BASE_PATH = "https://image.tmdb.org/t/p/original/";
  return (
    <div
      ref={ref}
      className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
    >
      <Image
        layout="responsive"
        width={1920}
        height={1080}
        src={
          `${BASE_PATH}${result.backdrop_path || result.poster_path}` ||
          `${BASE_PATH}${result.poster_path}`
        }
      ></Image>
      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>
        <h1 className="text-2xl text-white mt-1  transition-all duration-100 ease-in-out">
          {result.original_title || result.title || result.original_name}
        </h1>
        <div className="flex items-center opacity-0 group-hover:opacity-100">
          <p className="mx-1">{result.release_date || result.popularity} </p>
          <ThumbUpAltOutlinedIcon className="h-2 mx-1"></ThumbUpAltOutlinedIcon>
          <p>{result.vote_count}</p>
        </div>
      </div>
    </div>
  );
});

export default Thumbnail;
