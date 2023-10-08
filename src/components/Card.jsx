import React from "react";
import styled from "styled-components";
import IT from "../components/img/EnglishIT1.jpg";
import { Link } from 'react-router-dom';

//styled component using prop
const Card = ({type}) => {
  return (
    <Link to='/video/test' style={{textDecoration: 'none'}}>
        <Container type={type}>
            <Img src={IT} type={type}/>
            <Detail type={type}>
                <ChannelImage src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo" />
                <Texts>
                    <Title>Test Video </Title>
                    <ChannelName>Helpfulman Dev</ChannelName>
                    <Info>660,908 views * 1 day ago</Info>
                </Texts>
            </Detail>
        </Container>
    </Link>
  );
};

export default Card;

const Container = styled.div`
  cursor: pointer;
  display: ${(props) => props.type === 'sm' && "flex"};
  margin-bottom: ${(props) => props.type === 'sm' && "10px"};;
  gap: 10px;
  
`;

const Img = styled.img`
  width: ${(props) => props.type === 'sm' ? "50%" : "100%"};
  height: ${(props) => props.type === 'sm' ? "120px" : "202px"};
  background-color: #999;
  object-fit: cover;
`;
const Detail = styled.div`
  display: flex;
  margin-top:  ${(props) => props.type === 'sm' ? "none": '16px'};
  gap: 12px;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`;
const Texts = styled.div``;
const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0;
`;
const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;
