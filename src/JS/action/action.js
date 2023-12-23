import React from "react";
import axios from "axios";
import { SETUSER, SETCOMMENT, SETPOST } from "../constants/actionTypes";
export const setUser = (users) => ({ type: SETUSER, payload: users });

export const setComment = (comments) => ({
  type: SETCOMMENT,
  payload: comments,
});

export const setPost = (posts) => ({
  type: SETPOST,
  payload: posts,
});
export const fetchUser = async (dispatch) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch(setUser(response.data));
  } catch (error) {
    console.log("error", error);
  }
};
export const fetchPost = async (dispatch) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts?userId=1"
    );
    dispatch(setPost(response.data));
  } catch (error) {
    console.log("error", error);
  }
};
export const fetchComment = async (dispatch) => {
  try {
    const response = await axios.get(
      " https://jsonplaceholder.typicode.com/comments?postId=1"
    );
    dispatch(setComment(response.data));
  } catch (error) {
    console.log("error", error);
  }
};
