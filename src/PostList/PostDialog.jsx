import React, { useEffect, useReducer } from "react";
import { Button, Dialog, TextArea } from "@blueprintjs/core";
import { postPost, putPost, deletePost } from "../api/posts";

const initialState = {
  title: "",
  body: ""
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "RESET_FORM":
      return initialState;
    case "SET_FORM":
      return action.post;
    default:
      return {
        ...state,
        [action.fieldName]: action.value
      };
  }
};

const PostDialog = props => {
  const { isOpen, dialogTitle, handleClose, post } = props;
  const [formState, dispatch] = useReducer(formReducer, initialState);
  const { title, body } = formState;

  useEffect(() => {
    if (post) {
      dispatch({ type: "SET_FORM", post });
    } else {
      dispatch({ type: "RESET_FORM" });
    }
  }, [post]);

  const onFormChange = e =>
    dispatch({ fieldName: e.target.name, value: e.target.value });

  const handleSave = () => {
    if (post) {
      putPost(post.id, title, body);
    } else {
      postPost(title, body);
    }
    // compared to PostCard, the handleClose callback is passed in instead of dispatch
    // this is loosely coupled, with lesser control
    handleClose();
  };

  const handleDeletePost = () => {
    deletePost(post.id);
    handleClose();
  };

  return (
    <Dialog isOpen={isOpen} title={dialogTitle} onClose={handleClose}>
      <div className="bp3-dialog-body">
        <TextArea
          fill
          placeholder="Title"
          name="title"
          value={title}
          onChange={onFormChange}
        />
      </div>

      <div className="bp3-dialog-body">
        <TextArea
          fill
          placeholder="Body"
          name="body"
          value={body}
          onChange={onFormChange}
        />
      </div>

      <div
        className="bp3-dialog-footer"
        style={{ justifyContent: "space-between", display: "flex" }}
      >
        {post ? (
          <Button
            text="Delete"
            outlined="true"
            intent="danger"
            onClick={handleDeletePost}
          />
        ) : (
          <div />
        )}

        <Button text="Save" intent="primary" onClick={handleSave} />
      </div>
    </Dialog>
  );
};

export default PostDialog;
