import { Routes, Route } from "react-router-dom";
import { MovieDetails, Search, PageNotFound, MovieList } from "../pages";

function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MovieList apiPath="movie/now_playing" />} />
        <Route
          path="movies/popular"
          element={<MovieList apiPath="movie/popular" />}
        />
        <Route
          path="movies/upcoming"
          element={<MovieList apiPath="movie/top_rated" />}
        />
        <Route
          path="movies/top-rated"
          element={<MovieList apiPath="movie/upcoming" />}
        />
        {/* <Route path="/movie_details" element={<MovieDetails />} /> */}
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/search" element={<Search apiPath="search/movie" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default AllRoutes;
