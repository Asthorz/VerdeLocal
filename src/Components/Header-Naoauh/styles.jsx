import styled from 'styled-components';

export const NavbarContainer = styled.div`
      background-color: #fff;
    /* justify-content: center; */
    align-items: flex-start;
    width: 100%;
    padding-left: 24px;
    padding-right: 24px;
    display: flex;
    position: fixed;
`

export const NavbarContent = styled.div`
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1800px;
  display: flex;
`;

export const NavbarBrand = styled.div`
  flex: 0 auto;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
  
  h2{
    font-weight: 700;
    font-size: 36px;
    margin-top: 32px;
  
  }
  .dangerVerde{
    color: green;
    font-weight: 700;
    font-size: 36px;
  }
`;

export const NavbarLink = styled.a`
  flex: 0 auto;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 24px 12px;
  font-family: Satoshi, sans-serif;
  font-weight: 700;
  display: flex;
  color: black;
  text-decoration: none;
  margin-left: 4rem;

  &.login {
    color: #0d6ede;
  }
`;

export const ButtonCadastro = styled.button`
  border: 25px;
  height: 37px;
  font-weight: 700;
  width: 203px;
  margin-top: 16px;
  border-radius: 25px;
  background-color: #4caf50;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.08);
  margin-top: 17px;
  cursor: pointer;
`;

export const NavbarLogoLeft = styled.div`
  background-color: #fff;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
  position: static;
`;

export const WNav = styled.div`
  z-index: 1000px;
  background: #fff;
  position: relative;
`;

export const WNavOverlay = styled.div`
  position: absolute;
  overflow: hidden;
  display: none;
  top: 100%;
  left: 0;
  right: 0;
  width: 100%;
`;

export const LogoImage = styled.img`
  object-fit: contain;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 62px;
  height: 111px;
`;

export const LogoLetraImage = styled.img`
  margin-left: -17px;
  margin-top: 38px;
  height: 27px;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
`;

export const ButtonIcon = styled.button`
  cursor: pointer;
  background-color: #0d6ede;
  border-radius: 8px;
  margin-top: 0;
  padding: 17.5px;
`;

// Global Styles (if needed)
export const GlobalStyles = styled.div`
  body {
    width: 100vw;
    height: 100vh;
    font-family: 'Poppins', sans-serif;
    font-size: 0.88rem;
    user-select: none;
    overflow-x: hidden;
  }

  a {
    background-color: transparent;
  }
`;
