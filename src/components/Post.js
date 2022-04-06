// Post.js

import React from "react";

// import Grid from "../elements/Grid";
// import Image from "../elements/Image";
// import Text from "../elements/Text";
import { Grid, Text, Image } from "../elements";

const Post = (props) => {
  return (
    <React.Fragment>
      <Grid>
        <Grid is_flex>
          <Image shape="circle" src={props.src} />
          <Text bold>{props.user_info.user_name}</Text>
          <Text bold>{props.insert_dt}</Text>
        </Grid>
        <Grid padding="16px">
          <Text> {props.contents}</Text>
        </Grid>
        <Grid>
          <Image shape="rectangle" src={props.src} />
        </Grid>
        <Grid padding="16px">
          <Text margin="0px" bold>
            댓글 개수는 {props.comment_cnt}개 입니다.
          </Text>
        </Grid>
        {/* <div>user profile / user name / insert_date</div>
        <div>contents</div>
        <div>image</div>
        <div>comment count</div> */}
      </Grid>
    </React.Fragment>
  );
};

// props로 위의 정보들(use profile, name...) 받아올 때 주의점. props 정보가 없을때 화면 깨짐 등 오류
Post.defaultProps = {
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

export default Post;
