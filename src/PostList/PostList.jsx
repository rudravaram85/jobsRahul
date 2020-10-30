import React, { useReducer } from "react";
import useFetchHook from "../api/useFetchHook";
import PostCard from "./PostCard";
import PostDialog from "./PostDialog";
import { Button } from "@blueprintjs/core";
import data from './Data';
const initialState = {
  isOpen: false,
  dialogTitle: "",
  post: null
};

const dialogReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_POST":
      return {
        isOpen: true,
        dialogTitle: "Create new post",
        post: null
      };
    case "EDIT_POST":
      return {
        isOpen: true,
        dialogTitle: "Edit post",
        post: action.payload
      };
    case "CLOSE_DIALOG":
      return {
        ...initialState
      };
    default:
      throw new Error("Invalid type");
  }
};

const PostList = props => {
  const [dialogState, dispatch] = useReducer(dialogReducer, initialState);
  const handleCreate = () => {
    dispatch({ type: "CREATE_POST" });
  };

  const handleClose = () => {
    dispatch({ type: "CLOSE_DIALOG" });
  };

  console.log(data);

  return (
    <div>
      <div style={{ padding: "16px" }}>
          <PostCard  dispatch={dispatch} />
      </div>

      <PostDialog {...dialogState} handleClose={handleClose} />
    </div>
  );
};

export default PostList;
