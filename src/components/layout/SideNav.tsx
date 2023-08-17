import React, { useState } from "react";

import styled from "@emotion/styled";
import { useNavigate, useLocation } from 'react-router-dom';

import ListAltIcon from '@mui/icons-material/ListAlt';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

import PrimaryButton from '../module/PrimaryButton';

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [popupFlag, setPopupFlag] = useState<boolean>(false);

  return (
    <SSidebar>
      <SNavBox>
        <SContainer>
          <SButton
            onClick={() => navigate('/')}
            style={{
              backgroundColor: location.pathname === '/' ? 'yellow' : 'inherit'
            }}
          >
            <ListAltIcon 
            style={{
              position: "relative",
              top: 4
            }}
            />
            <span>リスト</span>
          </SButton>
          <SButton
            onClick={() => navigate('/search')}
            style={{
              backgroundColor: location.pathname === '/search' ? 'yellow' : 'inherit'
            }}
          >
            <FmdGoodIcon
              style={{
                position: "relative",
                top: 4
              }}
            />
            <span>住所検索</span>
          </SButton>
        </SContainer>

        <PrimaryButton onClick={() => setPopupFlag(true)}>投稿</PrimaryButton>
      </SNavBox>
    </SSidebar>
  );
}

const SSidebar = styled.div`
  padding: 16px 16px;
  display: grid;
  grid-template-columns: 270px;
  grid-template-rows: 100px 1fr;
  border-right: 1px lightgray solid;
`

const SNavBox = styled.div`
  padding-top: 20px;
`

const SContainer = styled.div`
  border: 2px solid rgb(245, 245, 245);
  background-color: #fff;
  border-radius: 24px;
  box-shadow: 2px 4px 12px rgba(0,0,0,.08);
  max-height: 200px;
  // max-width: 220px;
  padding: 12px 16px;
`

const SButton = styled.div`
  border: 2px solid rgb(255, 255, 255);
  height: 44px;
  border-radius: 22px;
  font-size: 20px;
  font-weight: bold;
  color: #1e1e1f;
  line-height: 44px;
  padding: 0 18px;
  margin: 16px 0;
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
`