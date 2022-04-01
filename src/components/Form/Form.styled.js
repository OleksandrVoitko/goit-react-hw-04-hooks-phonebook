import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;
export const Label = styled.label`
  font-weight: 500;
  margin-bottom: 10px;
`;
export const InputName = styled.input`
  margin-left: 27px;
  outline: none;
  color: #2196f3;
`;
export const InputNumber = styled.input`
  margin-left: 13px;
  outline: none;
  color: teal;
`;
export const Button = styled.button`
  border: none;
  border-radius: 3px;
  padding: 5px 5px;
  background-color: #2196f3;
  color: #fff;
  font-weight: 500px;
  margin: 10px;

  cursor: pointer;
  outline: none;
  box-shadow: 1px 1px 1px 0 #2196f3;
  box-shadow: 0px 0px 0px 1px #2196f3;
  
  transition-duration: 0.5s;
  :hover {
    background-color: white;
    color: #2196f3;
`;
