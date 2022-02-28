import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@material-ui/core'

// Icons
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'

function Header() {
  return (
    <HeaderContainer>

        <HeaderLeft>
          <HeaderAvatar />
          <AccessTimeIcon />
        </HeaderLeft>

        <HeaderTitle>
          <h1>Front End Code Challenge</h1>
        </HeaderTitle>


        <HeaderRight>
          <HelpOutlineIcon />
        </HeaderRight>

    </HeaderContainer>
  )
}

export default Header

const HeaderTitle =  styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;
  display: flex;
  padding: 0 50px;
  color: gray;
  border: 1px gray solid;

  > h1 {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 50vw;
    outline: 0;
    color: white;
  }
`

const HeaderContainer =  styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: var(--slack-color);
  color: white;
`;

const HeaderLeft =  styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin: 5px 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

const HeaderRight =  styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`;


const HeaderAvatar =  styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;