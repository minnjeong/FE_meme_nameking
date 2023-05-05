import styled from "styled-components";
import Header from "../Header/Header";

function Layout({children}) {

    return (
      <>
          <Header />
          <StLayout>{children}</StLayout>
      </>
    )
  }
  
  export default Layout
  
  const StLayout = styled.div`
    height : calc(100vh - 90px);
    background-color : #e4e3eb;
    padding : 25px;
  `