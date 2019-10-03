import { ADD_COMMENT } from "./actions";
import { EDIT_COMMENT } from "./actions";
import { REMOVE_COMMENT } from "./actions";
import { THUMB_UP_COMMENT } from "./actions";
import { THUMB_DOWN_COMMENT } from "./actions";

export function comment(state = initialState, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        comments: [
          {
            id: action.id,
            text: action.text,
            votes: 0
          },
          ...state
        ]
      };
    case REMOVE_COMMENT:
      return {
        comments: state.comments.filter(comment => comment.id !== action.id)
      };
    case EDIT_COMMENT:
      return {
        comments: state.comments.filter(comment => {
          comment.id === action.id
            ? { ...comment, text: action.text }
            : comment;
        })
      };
    case THUMB_UP_COMMENT:
      return {
        comments: state.comments.filter(comment => {
          comment.id == action.id
            ? { ...comment, votes: comment.state + 1 }
            : comment;
        })
      };
    case THUMB_DOWN_COMMENT:
      return {
        comments: state.comments.filter(comment => {
          comment.id == action.id
            ? { ...comment, votes: comment.state - 1 }
            : comment;
        })
      };
    default:
      return state;
  }
}
