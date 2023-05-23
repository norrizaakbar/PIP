import axios from "axios";
import { ADD, DELETE, DETAIL, FETCH_PRODUCTS } from "./actionTypes";

// const baseUrl = "https://www.omdbapi.com/?s=need&apikey=80e9243d";
const baseUrl = "https://www.omdbapi.com";
const apikey = "&apikey=80e9243d";
export const fetchMoviesSuccess = (payload) => {
  return {
    type: FETCH_PRODUCTS,
    payload,
  };
};

export const fetchMovies = (name, type) => {
  let url = `${baseUrl}/?s=movie${apikey}`;
  if (name && type) {
    url = `${baseUrl}/?s=${name}${apikey}&type=${type}`;
  } else if (name) {
    url = `${baseUrl}/?s=${name}${apikey}`;
  } else if (type) {
    url = `${baseUrl}/?s=movie${apikey}&type=${type}`;
  }
  return (dispatch) => {
    return fetch(`${url}`)
      .then((res) => res.json())
      .then((data) => {
        const action = fetchMoviesSuccess(data);
        dispatch(action);
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

export const fetchDetailSuccess = (payload) => {
  return {
    type: DETAIL,
    payload,
  };
};

export const detailMovie = (id) => {
  let url = `${baseUrl}/?i=${id}${apikey}`;
  return (dispatch) => {
    console.log(id);
    return fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const action = fetchDetailSuccess(data);
        dispatch(action);
      });
  };
};
