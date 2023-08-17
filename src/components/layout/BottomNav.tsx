import React, { useState } from "react";

import styled from "@emotion/styled";
import { useNavigate, useLocation } from 'react-router-dom';

import ListAltIcon from '@mui/icons-material/ListAlt';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import AddIcon from '@mui/icons-material/Add';


export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
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

          <SPostButton
            onClick={() => navigate('/post')}
            style={{
              backgroundColor: location.pathname === '/post' ? 'rgb(218, 218, 0)' : 'yellow',
              boxShadow: location.pathname === '/post' ? 'none' : '2px 4px 12px rgba(0,0,0,.08)'
            }}
          >
            <AddIcon 
            style={{
              position: "relative",
              top: 13
            }}
            />
          </SPostButton>

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

      </SNavBox>
  );
}

const SNavBox = styled.div`
  padding: 0 12px 16px 12px;
  position: fixed;
  bottom: 0;
  width: calc(100% - 24px);
  display:block;
  z-index:9998;
`

const SContainer = styled.div`
  font-size: 12px;
  text-align: center;
  border: 2px solid rgb(245, 245, 245);
  border-radius: 100px;
  box-shadow: 2px 4px 12px rgba(0,0,0,.08);
  max-height: 200px;
  padding: 5px 0 4px 0;
  display: flex;
  justify-content: space-around;

  background-color: rgba(255, 255, 255, 0.8);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(5px);
`

const SButton = styled.div`
  border-radius: 100px;
  color: #1e1e1f;
  cursor: pointer;
  width: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;

  &:active {
    box-shadow: none;
    background-color: #ffff00;
    transition: .1s;
    transition-timing-function: ease-out;
  }
`
const SPostButton = styled.div`
  background-color: yellow;
  height: 60px;
  width: 60px;
  border-radius: 100px;
  color: #1e1e1f;
  line-height: 44px;
  cursor: pointer;
  box-shadow: 2px 4px 12px rgba(0,0,0,.08);

  position: relative;
  bottom: 28px;

  &:active {
    border: 2px solid rgb(245, 245, 245);
    box-shadow: none;
    background-color: #ffff00;
    transition: .1s;
    transition-timing-function: ease-out;
  }
`