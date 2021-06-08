import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import loginImg from '../images/img3.svg';
const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Wrapper>
      <div className='container'>
        <img src={loginImg} alt='github user'></img>
        <h1>Github user</h1>
        <div className='btn' onClick={loginWithRedirect}>
          Login / sing up
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  color: white !important;
  min-height: 100vh;
  display: grid;
  place-items: center;
  /* background-color: #00678b !important; */
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
`;
export default Login;
