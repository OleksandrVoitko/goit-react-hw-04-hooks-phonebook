import styled from "styled-components";

export const LabelFilter = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputFilter = styled.input`
  outline: none;
  padding-left: 5px;

  &:focus::placeholder {
    opacity: 0;
  }
  color: #2196f3;
`;
