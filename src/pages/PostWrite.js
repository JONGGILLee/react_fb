import React from "react";

import { Grid, Button, Image, Input, Text } from "../elements";
import Upload from "../shared/Upload";

import { useSelector, useDispatch } from "react-redux";

const PostWrite = (props) => {
  const is_login = useSelector((state) => state.user.is_login);
  const { history } = props;

  const [contents, setContents] = React.useState("");
  const changeContents = (e) => {
    setContents(e.target.value);
  };
  // changeContents 는 event 를 받아와서 setContents 해준다.
  console.log(contents);

  if (!is_login) {
    return (
      <Grid margin="90px 0px" padding="15px" center>
        <Text size="32px" bold>
          !!!
        </Text>
        <Text size="22px">로그인을 해야 게시글을 작성할 수 있습니다!</Text>
        <Button
          _onClick={() => {
            history.replace("/");
          }}
        >
          로그인 페이지로 이동
        </Button>
      </Grid>
    );
  }

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
        <Input
          _onChange={changeContents}
          label="게시글 내용"
          placeholder="게시글 작성..."
          multiLine
        />
      </Grid>

      <Grid padding="14px">
        <Button text="게시글 작성.!"></Button>
      </Grid>
    </React.Fragment>
  );
};

export default PostWrite;
