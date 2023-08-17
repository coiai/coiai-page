import React, { ReactNode, MouseEventHandler } from 'react';
import styled from "@emotion/styled";

interface PrimaryButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const AddressButton: React.FC<PrimaryButtonProps> = ({ children, onClick }) => {
  return (
    <SButton onClick={onClick}>
      {children}
    </SButton>
  );
};

const SButton = styled.div`
  text-align: center;
  border: 2px solid rgb(255, 255, 255);
  width: 115px;
  border-radius: 22px;
  font-size: 14px;
  font-weight: bold;
  color: #1e1e1f;
  line-height: 36px;
  background-color: #ffff00;
  cursor: pointer;
  &:hover {
    border: 2px solid rgb(245, 245, 245);
    box-shadow: 2px 4px 12px rgba(0,0,0,.08);
    transition: .1s;
    transition-timing-function: ease-out;
  }
  &:active {
    border: 2px solid rgb(245, 245, 245);
    box-shadow: none;
    background-color: #ffff00;
    transition: .1s;
    transition-timing-function: ease-out;
  }
  span {
    padding-left: 21px;
  }
`;

export default AddressButton;
