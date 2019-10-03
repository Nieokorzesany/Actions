import uuid from "uuid";

const CREATE_COMMENT = "app/comments/CREATE_COMMENT";
const EDIT_COMMENT = "app/comments/EDIT_COMENT";
const REMOVE_COMMENT = "app/comments/REMOVE_COMMENT";
const THUMB_UP_COMMENT = "app/comments/THUMB_UP_COMMENT";
const THUMB_DOWN_COMMENT = "app/comments/THUMB_DOWN_COMMENT";

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
