import React from "react";

import styled from "styled-components";

const Button = (props) => {
  const { text, _onClick, is_float, children, margin, width } = props;

  if (is_float) {
    return (
      <React.Fragment>
        <FloatButton onClick={_onClick}>{text ? text : children}</FloatButton>
      </React.Fragment>
    );
  }

  const styles = {
    margin: margin,
    width: width,
  };

  return (
    <React.Fragment>
      <ElButton {...styles} onClick={_onClick}>
        {text ? text : children}
      </ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  text: false,
  _onClick: () => {},
  is_float: false,
  children: null,
  margin: false,
  width: "100%",
};

const ElButton = styled.button`
  width: ${(props) => props.width};
  background-color: #efcd8e;
  color: #ffffff;
  padding: 12px 0px;
  box-sizing: border-box;
  border: none;
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
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
