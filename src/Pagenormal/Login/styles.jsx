import styled from "styled-components";
export const ContainerCompleto = styled.div`
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: flex;
    opacity: 1;
    background-color: rgb(255, 255, 255);
    width: 100%;
    max-width: 28rem;
    margin: 0 auto;
  .Imglogconta{
    width: 100px;
  }
  h2{
    font-size: 36px;
    font-weight: 900;
    margin-top: 25px;

  }
  .danger{
    color: green;
  }
`;

export const LogoLogins = styled.img`
  width: auto;
  margin-left: auto;
  margin-right: auto;
  height: 3rem;
  max-width: 100%;
  display: block;
`;

export const LogoLogins2 = styled.img`
  display: block;
  margin-right: auto;
  margin-left: auto;
  width: auto;
  height: 1.5rem;
`;

export const H2Login = styled.h2`
  color: black;
  text-align: center;
  margin-top: 1.5rem;
  line-height: 2.25rem;
  font-size: 1.875rem;
  font-weight: 700;
`;

export const PLogin = styled.p`
  color: #d2d6dc;
  text-align: center;
  margin-top: 0.5rem;
  line-height: 1.25rem;
  font-size: 1rem;
  padding-bottom: 1rem;
`;

export const ALogin = styled.a`
  color: green;
  font-weight: 500;
  text-decoration: inherit;
  background-color: transparent;
`;

export const InputCompleto = styled.div`
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  padding-top: 2rem;
  padding-bottom: 2rem;
  width: 30rem;
`;

export const EmailLogin = styled.label`
  margin-bottom: 0.25rem;
  line-height: 1.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: black;
`;

export const InputEmail = styled.input`
  line-height: 1.25rem;
  font-size: 0.875rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-radius: 0.375rem;
  border-width: 1px;
  padding-left: 0.75rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  padding-right: 0.75rem;
  width: 100%;
  display: block;
`;

export const InputPassword = styled.input`
  line-height: 1.25rem;
  font-size: 0.875rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-radius: 0.375rem;
  border-width: 1px;
  padding-left: 0.75rem;
  padding-right: 0.75rem;  /* Corrigido */
  width: 100%;
  display: block;
`;

export const AEsquece = styled.div`
  align-items: center;
  display: flex;
  margin-top: 0.5rem;
  justify-content: flex-end;
`;

export const TextEsquce = styled.span`
  line-height: 1.25rem;
  font-size: 0.875rem;
`;

export const AText = styled.a`
  transition-timing-function: cubic-bezier(.4,0,.2,1);
  transition-duration: 150ms;
  color: green;
  font-weight: 500;
  background-color: transparent;
  text-decoration: none;
`;

export const ButtonLogin = styled.button`
  width: 100%;
  color: white;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-width: 1px;
  border-radius: 0.375rem;
  border-color: transparent;
  line-height: inherit;
  cursor: pointer;
  background-color: #5850ec;
`;

export const CampoFormulario = styled.div`
  margin-bottom: 15px;
`;

export const RotuloFormulario = styled.label`
  display: block;
  margin-bottom: 5px;
`;

export const EntradaFormulario = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const CaixaSelecaoFormulario = styled.input`
  margin-right: 10px;
`;

export const RotuloCaixaSelecao = styled.label`
  color: black;
  font-weight: 400;

  a {
    color: #61dafb;
  }
`;
