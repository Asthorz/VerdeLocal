import React from 'react';
import {
    AEsquece,
    AText,
    ButtonLogin,
    ContainerCompleto,
    EmailLogin,
    H2Login,
    InputCompleto,
    InputEmail,
    InputPassword,  // Certifique-se de importar o componente correto para o campo de senha
  
    PLogin,
    TextEsquce
} from './styles';

import Logo from '../../assets/imagem/1-removebg-preview.png';
import { Link } from 'react-router-dom';

export default function Pagelogin() {
    return (
        <ContainerCompleto>
              <div className='d-flex'>
                <img src={Logo} alt='asda' className='Imglogconta'/>
                <h2>Verde<span className='danger'>Local</span></h2>
              </div>
            <H2Login>Faça seu Login</H2Login>
            <PLogin>
                Ou <Link to='/Cadastre-se' className='a-login'>Cadastre-se Agora</Link>
            </PLogin>
            <InputCompleto>
                <form className='form-login'>
                    <div>
                        <EmailLogin htmlFor='email'>E-mail</EmailLogin>
                        <InputEmail type='text' autoComplete='username' name='email' />
                    </div>
                    <div>
                        <EmailLogin htmlFor='password'>Senha</EmailLogin>
                        <InputPassword type='password' autoComplete='current-password' name='senha' />
                    </div>
                    <AEsquece>
                        <TextEsquce>
                            <AText href='#'>Esqueceu a senha?</AText>
                        </TextEsquce>
                    </AEsquece>
                    <ButtonLogin>Entra</ButtonLogin>
                </form>
            </InputCompleto>
        </ContainerCompleto>
    );
}
