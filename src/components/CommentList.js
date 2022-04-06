import React from "react";

import { Grid, Image, Input, Text } from "../elements";

const CommentList = () => {
  return (
    <React.Fragment>
      <Grid padding="14px">
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
      </Grid>
    </React.Fragment>
  );
};

export default CommentList;

// 질문: 한 파일 안에 컴포넌트 여러개를 넣어도 되는건가요?
// 대답: 네 여러개 넣어도 됩니다. 오히려 Comment 라는 기능 하나에서 묶이는 거면 비슷한 기능끼리 한 파일에 넣는 경우도..

const CommentItem = (props) => {
  const { user_profile, user_name, user_id, post_id, contents, insert_dt } =
    props;
  return (
    <Grid is_flex>
      <Grid is_flex width="auto">
        <Image shape="circle" />
        <Text bold>{user_name}</Text>
      </Grid>
      <Grid is_flex margin="0px 9px">
        <Text margin="0px">{contents}</Text>
        <Text margin="0px">{insert_dt}</Text>
      </Grid>
    </Grid>
  );
};

CommentItem.defaultProps = {
  user_profile: "",
  user_name: "default_name0",
  user_id: "",
  post_id: 1,
  contents: "콘텐츠 기본값",
  insert_dt: "2022-04-06 10:00:00",
};
