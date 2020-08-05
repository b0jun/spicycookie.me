import React from 'react';
import styled, { keyframes } from 'styled-components';
import Layout from '../components/Common/Layout';
import { Link } from 'gatsby';

const blinking = keyframes` {
  0% {
    transform: scaleX(1) scaleY(1);
  }
  20% {
    transform: scaleX(1) scaleY(1);
  }
  25% {
    transform: scaleX(1) scaleY(1);
  }
  30% {
    transform: scaleX(1) scaleY(1);
  }
  35% {
    transform: scaleX(1) scaleY(1);
  }
  40% {
    transform: scaleX(1) scaleY(1);
  }
  45% {
    transform: scaleX(1) scaleY(1);
  }
  48% {
    transform: scaleX(1) scaleY(1);
  }
  50% {
    transform: scaleX(1.3) scaleY(0.1);
  }
  55% {
    transform: scaleX(1) scaleY(1);
  }
  60% {
    transform: scaleX(1) scaleY(1);
  }
  65% {
    transform: scaleX(1) scaleY(1);
  }
  70% {
    transform: scaleX(1) scaleY(1);
  }
  75% {
    transform: scaleX(1) scaleY(1);
  }
  80% {
    transform: scaleX(1) scaleY(1);
  }
  85% {
    transform: scaleX(1) scaleY(1);
  }
  90% {
    transform: scaleX(1) scaleY(1);
  }
  95% {
    transform: scaleX(1) scaleY(1);
  }
  100% {
    transform: scaleX(1) scaleY(1);
  }
}`;

const paddle = keyframes`{
  0% {
    transform: rotate(30deg);
  }
  50% {
    transform: rotate(-30deg);
  }
  100% {
    transform: rotate(30deg);
  }
}`;
const circular = keyframes`{
  0% {
    transform: rotate(360deg) translateX(60px);
  }
  100% {
    transform: rotate(0deg) translateX(60px);
  }
}`;

const ripple = keyframes`{
  0% {
    opacity: 0;
    transform: scale(0);
  }
  25% {
    opacity: 0.5;
    transform: scale(0.5);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(1.5);
  }
}`;
const Wrapper = styled.div`
  padding: 30px 10px 0 10px;
  background: #9aded6;
  border-radius: 20px;
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    margin-top: 1rem;
  }
`;
const NotFoundArea = styled.div`
  text-align: center;
  color: #222831;
  h1 {
    font-size: 5rem;
    font-weight: 900;
  }
  p {
    font-size: 1.7rem;
    margin-bottom: 1rem;
  }
`;
const SLink = styled(Link)`
  display: inline-block;
  padding: 8px;
  border-radius: 3px;
  background: #4b5d67;
  transition: all 100ms ease-in-out;
  color: white;
  &:hover {
    background: #b8b0b0;
    color: black;
  }
`;
const Container = styled.div`
  display: grid;
  height: 60vh;
  place-items: center;
`;
const Block = styled.div`
  width: 160px;
  height: 250px;
  position: relative;
  animation: ${circular} 20s linear infinite;
  .earLeft,
  .earRight {
    width: 25px;
    height: 25px;
    border: #392913 solid 6px;
    background: #aa9a88;
    border-radius: 50%;
    position: absolute;
    z-index: 0;
  }

  .earLeft {
    top: 15px;
  }

  .earRight {
    transform: translateX(123px);
    top: 15px;
  }

  .earlineLeft,
  .earlineRight {
    width: 1px;
    height: 10px;
    border: solid 1px #392913;
    border-radius: 50%;
    background: #392913;
    transform: rotate(-45deg);
    position: absolute;
  }

  .earlineLeft {
    left: 9px;
    top: 5px;
  }

  .earlineRight {
    transform: rotate(45deg);
    left: 12px;
    top: 5px;
  }
`;
const Ripple = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  border: solid 5px rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 0 0 20px rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  left: 2px;
  top: 30px;
  animation: ${ripple} 4s linear infinite;
`;

const Head = styled.div`
  position: absolute;
  left: 9px;
  width: 130px;
  height: 120px;
  border: 6px solid #392913;
  border-radius: 45%;
  background: #aa9a88;
  z-index: 3;
  overflow: hidden;
  .lightcircle {
    width: 160px;
    height: 120px;
    background: #e1d2c4;
    border-radius: 100%;
    position: relative;
    top: 75px;
    left: -15px;
  }
  .face {
    width: 80px;
    height: 40px;
    position: absolute;
    left: 25px;
    top: 65px;
  }

  .eyeLeft,
  .eyeRight {
    height: 25px;
    width: 13px;
    background: #392913;
    border-radius: 50%;
    position: absolute;
    animation: ${blinking} 6s linear infinite;
  }

  .eyedot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ffffff;
    position: absolute;
    left: 4px;
    top: 13px;
    animation: ${blinking} 6s ease-in-out infinite;
  }

  .eyeRight {
    right: 0;
  }

  .nose {
    width: 25px;
    height: 15px;
    position: absolute;
    top: 12px;
    left: 30px;
    background: #392913;
    border-radius: 40px 40px 20px 20px;
  }

  .nosedot {
    background: #ffffff;
    width: 10px;
    height: 2px;
    border-radius: 50%;
    position: absolute;
    top: 3px;
    left: 6px;
  }

  .smile {
    width: 25px;
    height: 13px;
    position: absolute;
    top: 25px;
    left: 31px;
  }

  .curve1 {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    box-shadow: 2px 2px 0 0 #392913;
    position: absolute;
    top: -10px;
    left: -10px;
  }

  .curve2 {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    box-shadow: -2px 2px 0 0 #392913;
    position: absolute;
    top: -10px;
    left: -9px;
    transform: translateX(20px);
  }
`;

const Body = styled.div`
  position: absolute;
  left: 25px;
  top: 70px;
  width: 100px;
  height: 130px;
  border: 6px solid #392913;
  border-radius: 45%;
  background: #aa9a88;
  z-index: 2;
  .armLeft,
  .armRight {
    position: absolute;
    width: 15px;
    height: 25px;
    border-top: solid 6px transparent;
    border-left: solid 6px #392913;
    border-right: solid 6px #392913;
    border-bottom: solid 6px #392913;
    border-radius: 40%;
  }

  .armLeft {
    left: 10px;
    top: 50px;
    transform: rotate(-45deg);
    box-shadow: 0 3px #7a6f63;
  }

  .armRight {
    left: 65px;
    top: 50px;
    transform: rotate(45deg);
    box-shadow: 0 3px #7a6f63;
  }

  .legLeft,
  .legRight {
    position: absolute;
    width: 20px;
    height: 35px;
    background: #7a6f63;
    border-top: solid 6px #392913;
    border-left: solid 6px #392913;
    border-right: solid 6px #392913;
    border-radius: 50%;
  }

  .legLeft {
    top: 89px;
    left: 15px;
    transform: rotate(-15deg);
  }

  .legRight {
    top: 89px;
    left: 55px;
    transform: rotate(15deg);
  }
`;
const Tail = styled.div`
  position: absolute;
  left: 65px;
  top: 170px;
  width: 25px;
  height: 70px;
  border: 6px solid #392913;
  border-radius: 50%;
  background: #aa9a88;
  z-index: 1;
  animation: ${paddle} 3s ease infinite;
`;
const NotFoundPage = () => {
  return (
    <Layout>
      <Wrapper>
        <NotFoundArea>
          <h1>404</h1>
          <p>Oops! It looks like you're lost.</p>
          <SLink to="/">Go to Home</SLink>
        </NotFoundArea>
        <Container>
          <Block>
            <Ripple></Ripple>
            <div className="earLeft">
              <div className="earlineLeft"></div>
            </div>
            <div className="earRight">
              <div className="earlineRight"></div>
            </div>
            <Head>
              <div className="lightcircle"></div>
              <div className="face">
                <div className="eyeLeft">
                  <div className="eyedot"></div>
                </div>
                <div className="eyeRight">
                  <div className="eyedot"></div>
                </div>
                <div className="nose">
                  <div className="nosedot"></div>
                </div>
                <div className="smile">
                  <div className="curve1"></div>
                  <div className="curve2"></div>
                </div>
              </div>
            </Head>
            <Body>
              <div className="armLeft"></div>
              <div className="armRight"></div>
              <div className="legLeft"></div>
              <div className="legRight"></div>
            </Body>
            <Tail></Tail>
          </Block>
        </Container>
      </Wrapper>
    </Layout>
  );
};

export default NotFoundPage;
