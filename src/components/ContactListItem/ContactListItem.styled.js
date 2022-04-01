import styled from "styled-components";

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;
export const ContactDeleteButton = styled.button`
  border: none;
  border-radius: 3px;
  padding: 5px 5px;
  background-color: red;
  color: #fff;
  font-weight: 500px;
  margin: 10px;

  cursor: pointer;
  outline: none;
  box-shadow: 1px 1px 1px 0 red;
  box-shadow: 0px 0px 0px 1px red;
  
  transition-duration: 0.5s;
  :hover {
    background-color: white;
    color: red;
`;
