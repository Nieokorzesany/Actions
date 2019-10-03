import uuid from "uuid";

export const CREATE_COMMENT = "app/comments/CREATE_COMMENT";
export const EDIT_COMMENT = "app/comments/EDIT_COMENT";
export const REMOVE_COMMENT = "app/comments/REMOVE_COMMENT";
export const THUMB_UP_COMMENT = "app/comments/THUMB_UP_COMMENT";
export const THUMB_DOWN_COMMENT = "app/comments/THUMB_DOWN_COMMENT";

function createComment(text) {
  return {
    type: CREATE_COMMENT,
    text,
    id: uuid.v4()
  };
}

function editComment(text, id) {
  return {
    type: EDIT_COMMENT,
    id,
    text
  };
}

function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id
  };
}

function thumbUpComment(id) {
  return {
    type: THUMB_UP_COMMENT,
    id
  };
}

function thumbDownComment(id) {
  return {
    type: THUMB_DOWN_COMMENT,
    id
  };
}
