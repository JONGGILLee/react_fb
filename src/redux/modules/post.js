import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { firestore } from "../../shared/firebase";

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";

const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));

const initialState = {
  list: [],
};

const initialPost = {
  id: 0,
  user_info: {
    user_name: "JONGGIL",
    user_profile:
      "https://cdn.pixabay.com/photo/2022/03/27/18/00/feather-7095765__340.jpg",
  },
  image_url:
    "https://cdn.pixabay.com/photo/2016/02/21/18/09/iceland-1214063__340.jpg",
  contents: "저작권 없는 이미지파일입니다.~",
  comment_cnt: 15,
  insert_dt: "2022-04-02 10:00:00",
};

// middleware chunk
const getPostFB = () => {
  return function (dispatch, getState, { history }) {
    const postDB = firestore.collection("post");

    postDB.get().then((docs) => {
      let post_list = [];
      docs.forEach((doc) => {
        let _post = doc.data();

        // _post 의 키 값들을 배열로 만들어 준다.->['comment_cnt', 'contents', .. ]
        let post = Object.keys(_post).reduce(
          (acc, cur) => {
            if (cur.indexOf("user_") !== -1) {
              return {
                ...acc,
                user_info: { ...acc.user_info, [cur]: _post[cur] },
              };
            }
            return { ...acc, [cur]: _post[cur] };
          },
          {
            id: doc.id,
            user_info: {},
          }
        );
        post_list.push(post);
      });
      console.log(post_list);

      dispatch(setPost(post_list));
    });
  };
};

// Reducer
export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
      }),
    [ADD_POST]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

const actionCreators = {
  setPost,
  addPost,
  getPostFB,
};

export { actionCreators };
