import { getMovieById, getMovies, addMovie } from "../db.js";

export const home = (req, res) => res.render("movies", { movies: getMovies(), pageTitle: "Movies!" });

export const movieDetail = (req, res) => {
  const {
    params: { id },
  } = req;
  const movie = getMovieById(id);
  if (!movie) {
    res.render("404", { pageTitle: "Movie not found" });
  }
  return res.render("detail", { movie });
};

/*
Write the controller or controllers you need to render the form
and to handle the submission
*/
export const getAdd = (req, res) => {
  res.render("add", { pageTitle: "Add Movie" });
};

export const postAdd = (req, res) => {
  const {
    body: { title, synopsis, genres },
  } = req;

  if (title != null && synopsis != null && genres != null) {
    // todo: object 생성
    const genreSplit = genres.split(",");
    console.log(genreSplit);
    const genreArr = [];
    for (var i in genreSplit) {
      genreArr.push(genreSplit[i]);
    }
    const movie = { title, synopsis, genres: genreArr };
    // todo: db movie에 추가
    addMovie(movie);
    res.redirect("/");
  } else {
    res.status(400);
    res.render("add", { pageTitle: "Add Movie" });
  }
};
