import React from "react";

import styled from "styled-components";

const Button = (props) => {
  const { text, _onClick, is_float } = props;

  if (is_float) {
    return (
      <React.Fragment>
        <FloatButton onClick={_onClick}>{text}</FloatButton>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <ElButton onClick={_onClick}>{text}</ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  text: "텍스트 디폴트",
  _onClick: () => {},
  is_float: false,
};

const ElButton = styled.button`
  width: 100%;
  background-color: #efcd8e;
  color: #ffffff;
  padding: 12px 0px;
  box-sizing: border-box;
  border: none;
`;

const FloatButton = styled.button`
  position: fixed;
  bottom: 50px;
  right: 17px;
  text-align: center;
  border-radius: 45px;
  align-items: center;
  justify-content: center;
  vertical-align: middle;

  width: 45px;
  height: 45px;
  background-color: #bfad2c;
  color: #ffffff;
  padding: 0px;
  box-sizing: border-box;
  font-size: 30px;
  font-weight: 800;
  border: none;
`;

export default Button;
