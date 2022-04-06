import React from "react";

import { Grid, Button, Image, Input, Text } from "../elements";
import Upload from "../shared/Upload";

const PostWrite = (props) => {
  return (
    <React.Fragment>
      <Grid padding="14px">
        <Text margin="0px" size="25px" bold>
          게시글 작성
        </Text>
        <Upload />
      </Grid>

      <Grid>
        <Grid padding="14px">
          <Text margin="0px" size="20px" bold>
            미리보기
          </Text>
        </Grid>
        <Image shape="rectangle" />
      </Grid>

      <Grid padding="14px">
        <Input label="게시글 내용" placeholder="게시글 작성..." multiLine />
      </Grid>

      <Grid padding="14px">
        <Button text="게시글 작성.!"></Button>
      </Grid>
    </React.Fragment>
  );
};

export default PostWrite;
