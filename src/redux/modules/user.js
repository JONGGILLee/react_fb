// 액션, 액션생성함수, 리듀서, 기본값(initial state)

import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";

import { auth } from "../../shared/firebase";
import firebase from "firebase/compat/app";

// Actions
// const LOG_IN = "LOG_IN";
const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";

// Action creators
// const logIn = createAction(LOG_IN, (user) => ({ user }));

// const logIn = (user) => {
//   return {
//     type: LOG_IN,
//     user,
//   };
// };
const setUser = createAction(SET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));

// initialState
const initialState = {
  user: null,
  is_login: false,
};

// middleware actions

// 파이어베이스와 통신
const loginFB = (id, pwd) => {
  return function (dispatch, getState, { history }) {
    auth
      .signInWithEmailAndPassword(id, pwd)
      .then((user) => {
        console.log(user);
        dispatch(
          setUser({
            user_name: user.user.displayName,
            id: id,
            user_profile: "",
            uid: user.user.uid,
          })
        );

        history.push("/");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  };
};

const signupFB = (id, pwd, user_name) => {
  return function (dispatch, getState, { history }) {
    auth
      .createUserWithEmailAndPassword(id, pwd)
      .then((user) => {
        console.log(user);

        auth.currentUser
          .updateProfile({
            displayName: user_name,
          })
          .then(() => {
            dispatch(
              setUser({
                user_name: user_name,
                id: id,
                user_profile: "",
                uid: user.user.uid,
              })
            );
            history.push("/");
          })
          .catch((error) => {
            console.log(error);
          });

        // Signed in
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorCode, errorMessage);
        // ..
      });
  };
};

// Reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        setCookie("is_login", "success");
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie("is_login");
        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);
// immer 불변성 관리 -> produce(state, (draft)=>{})

// Action creator export
const actionCreators = {
  logOut,
  getUser,
  signupFB,
  loginFB,
};

export { actionCreators };
