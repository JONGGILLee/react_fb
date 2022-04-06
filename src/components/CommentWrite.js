import React from "react";

import { Button, Grid, Input } from "../elements";

const CommentWrite = () => {
  return (
    <React.Fragment>
      <Grid padding="14px" is_flex>
        <Input placeholder="댓글 내용을 입력해주세요 :))" />
        <Button width="55px" margin="0px 1px 0px 1px">
          작성
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default CommentWrite;
