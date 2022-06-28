import styled from 'styled-components';

export const ItemContact = styled.li`
  padding: 16px;
  font-size: 24px;
  align-items: center;
  display: flex;

  &:before {
    content: '■';
    font-size: 10px;
    margin-left: -14px;
    padding-right: 8px;
    text-decoration: none !important;
    vertical-align: 20%;
  }
`;

export const DeleteBtn = styled.button`
  margin-left: 80px;

  text-transform: uppercase;
  text-decoration: none;
  padding: 8px 16px;
  min-width: 160px;
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
    background-color: #ff4d4d;
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`;
