import React from "react";
import styled from "styled-components";
import logo from "../components/img/logo.png";
import { AiFillHome } from "react-icons/ai";
import { BiMoviePlay, BiNews, BiUserCircle } from "react-icons/bi";
import { FaFontAwesomeFlag, FaHistory } from "react-icons/fa";
import { FcSportsMode } from "react-icons/fc";
import { LuGamepad2 } from "react-icons/lu";
import { RiLiveLine } from "react-icons/ri";
import { CgDarkMode } from "react-icons/cg";
import { FiHelpCircle, FiSettings } from "react-icons/fi";
import { MdOutlineExplore, MdOutlineLibraryMusic, MdOutlineSubscriptions, MdOutlineVideoLibrary } from "react-icons/md";
import { Link } from "react-router-dom";

const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Link to='/' style={{textDecoration: 'none',color: "inherit"}}>
          <Logo>
            <Img src={logo} />
            Helpfulman
          </Logo>
        </Link>
        <Item>
          <AiFillHome />
          Home
        </Item>
        <Item>
          <MdOutlineExplore />
          Explore
        </Item>
        <Item>
          <MdOutlineSubscriptions />
          Subscription
        </Item>
        <Hr />
        <Item>
          <MdOutlineVideoLibrary />
          Library
        </Item>
        <Item>
          <FaHistory />
          History
        </Item>
        <Hr />
        <Login>
          Sign in to like videos, comment, and subscribe.
          <Link to='/signin' style={{textDecoration: 'none'}}>
          <Button>
            <BiUserCircle />
            SIGN IN
          </Button>
          </Link>
        </Login>
        <Hr />
        <Title>Helpfulman</Title>
        <Item>
          <MdOutlineLibraryMusic />
          Music
        </Item>
        <Item>
          <FcSportsMode />
          Sports
        </Item>
        <Item>
          <LuGamepad2 />
          Gaming
        </Item>
        <Item>
          <BiMoviePlay />
          Movies
        </Item>
        <Item>
          <BiNews />
          News
        </Item>
        <Item>
          <RiLiveLine />
          Live
        </Item>
        <Hr />
        <Item>
          <FiSettings />
          Settings
        </Item>
        <Item>
          <FaFontAwesomeFlag />
          Report
        </Item>
        <Item>
          <FiHelpCircle />
          Help
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <CgDarkMode />
          {darkMode ? "Light" : "Dark"}
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;
const Img = styled.img`
  height: 25px;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0;

  &:hover {
    background-color: ${({theme}) => theme.soft};
  }
`;
const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid #${({ theme }) => theme.soft};
`;

const Login = styled.div``;

const Button = styled.button`
  padding: 5px 15px;
  background: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaa;
  margin-bottom: 20px;
`;
