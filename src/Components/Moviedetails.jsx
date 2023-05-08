import React from "react";
import godfather from "../movieposters/The Godfather.jpg";
import "../../src/styles/Moviedetails.css";
import photo1 from "../movieposters/photo1.jpg";
import photo2 from "../movieposters/photo2.jpg";
import trailer from "../movieposters/trailer.jpg";

const Moviedetails = () => {
  return (
    <>
    <div className="flex items-center justify-center">
    <div className="movie-container flex flex-col md:flex-row mx-5 mt-10 border p-10 rounded-2xl items-center justify-items-center">
      <div className="left-side movie-logo">
        <img className="poster" src={godfather} alt="The Godfather" />
      </div>
      <div className="center md:ml-10 md:border-r-2 md:pr-10">
        <h1 className="font-bold text-6xl">The Godfather</h1>
        <div className="font-medium mt-4 details">
          <p>
            <span className="font-semibold">Release Year: </span> 1972
          </p>
          <p>
            <span className="font-semibold">Director: </span> Francis Ford Coppola
          </p>
          <p>
            <span className="font-semibold">Cast: </span> Marlon Brando, Al Pacino, James Caan
          </p>
          <p>
            <span className="font-semibold">IMDb RATING: </span>9.2/10
          </p>
          <p>
            <span className="font-semibold">POPULARITY: </span>59
          </p>
        </div>
        <div className="my-4">
          <a className="border bg-stone-800 text-white hover:font-bold px-3 py-2 rounded-full m-1" href="/">
            Crime
          </a>
          <a className="border bg-stone-800 text-white hover:font-bold px-3 py-2 rounded-full m-1" href="/">
            Drama
          </a>
        </div>
        <div>
          <h2 className="font-bold">Summary:</h2>
          <p className="w-60 summary">
            The Godfather is a 1972 American crime film directed by Francis Ford Coppola, who co-wrote the screenplay with Mario Puzo, based on Puzo's
            best-selling 1969 novel of the same title. The film stars ...
          </p>
        </div>
      </div>
      <div className="right-side md:border-l-2 md:pl-10 flex flex-col md:flex-row items-center md:items-start">
        <div className="md:mr-10">
          <h3>Photos</h3>
          <div className="movie-pic flex flex-col gap-2 items-center justify-center my-4">
            <div className="movie-pic flex flex-row gap-2">
              <img src={photo1} alt="" />
              <img src={photo2} alt="" />
            </div>
            
          </div>
        </div>
        <div>
          <h3>Watch Trailer</h3>
            <div className="my-4 flex items-center justify-center flex-col">
              <img src={trailer} alt="" />
              <a href="https://www.bing.com/videos/search?q=god+father+tailer+hollywood&view=detail&mid=186C3654761FFA86F913186C3654761FFA86F913&FORM=VIRE"><button>Click to Watch</button></a> 
            </div>

         </div>
        </div>
        <div>

        </div>
      </div>
      </div>
      </>
  
  );
};

export default Moviedetails;
