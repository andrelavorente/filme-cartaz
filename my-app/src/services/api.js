import axios from "axios";

//Base da URL API https://api.themoviedb.org/3/

//URL DA API https://api.themoviedb.org/3/movie/now_playing?api_key=2251310de4cbe1aaac14530e51665dd5&language=pt-BR

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;
