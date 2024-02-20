import styled from "styled-components";

export const Form = styled.form`
  background-color: #8bdcff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 500px;
  border-radius: 20px;
  margin: 20px 0px;
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & label {
    width: 80px;
  }
  & input,
  textarea {
    width: 80%;
    padding: 20px;
  }
  & textarea {
    resize: none;
    height: 80px;
  }
`;

export const SelectWrapper = styled(InputWrapper)`
  justify-content: flex-start;
  & label {
    width: 170px;
  }
`;
