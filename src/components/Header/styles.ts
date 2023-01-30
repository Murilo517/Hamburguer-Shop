import styled from "styled-components";
import {TbLogout} from 'react-icons/tb'
import {BsFillCartFill} from 'react-icons/bs'

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--grey-0);
  justify-content: center;
  padding: 0px 10px;
  margin-bottom: 20px;

  .divImg {
    margin: 20px auto;
    display: flex;
    justify-content: center;
  }

  img {
    width: 200px;
  }

  .searchAndIcons{
    display: flex;
    gap: 25px;
  }

  @media screen and (min-width: 700px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 20px 0px;
    background: var(--grey-0);
    margin-bottom: 20px;

    img {
      max-width: 150px;
      width: 100%;
    }

    .divImg {
      margin: unset;
    }

    .divHeader {
      display: flex;
      justify-content: space-between;
      width: 80%;
      align-items: center;
    }
  }
`;


export const IconLogOut = styled(TbLogout)`
color: grey;
cursor: pointer;
min-height: 60px;
max-width: 107px;

`

export const IconCart = styled(BsFillCartFill)`
color: grey;
cursor: pointer;
min-height: 60px;
max-width: 107px;
`
