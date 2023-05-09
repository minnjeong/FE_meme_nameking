import React from 'react'
import styled from 'styled-components';

function Header() {

  
  return (
    <StContainer>
      <div>내가 짤명왕</div>
      <div>
        <button>로그인</button>
        <button>회원가입</button>
      </div>
    </StContainer>
  )
}
export default Header

const StContainer = styled.div`
justify-content: space-between;
align-items: center;
display: flex;
height: 90px;
background-color: #e4e3eb;
padding: 0 20px;
border: 1px solid #c8c3c3;
`;
