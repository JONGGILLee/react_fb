export const emailCheck = (email) => {
  // aa_-.123Aaa@aaa.com
  let _reg =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;
  // 정규식 ( 정규 표현식 ex.구글 이메일 정규표현식)
  return _reg.test(email);
};
