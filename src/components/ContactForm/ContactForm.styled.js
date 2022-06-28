import styled from 'styled-components';

export const FormContacts = styled.form`
  display: flex;
  flex-direction: column;
  padding-bottom: 24px;
`;

export const LabelForm = styled.label`
  display: flex;
  flex-direction: column;
  padding-bottom: 24px;
`;

export const TitleForm = styled.span`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const InputForm = styled.input`
  font-size: 16px;
  height: 40px;
`;

export const SubmitBtn = styled.button`
  text-transform: uppercase;
  text-decoration: none;
  padding: 16px 16px;
  max-width: 240px;
  display: inline-block;
  border-radius: 100px;
  transition: all 0.2s;
  background-color: #5ca4ea;
  color: #fff;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`;
