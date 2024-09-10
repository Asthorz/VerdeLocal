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

export default function Cadastro() {
    return (
        <ContainerCompleto>
              <div className='d-flex'>
                <img src={Logo} alt='asda' className='Imglogconta'/>
                <h2>Verde<span className='danger'>Local</span></h2>
              </div>
            <H2Login>Cadastro</H2Login>
            <PLogin>
            Já possui uma conta? <Link to='/login' className='a-login'>Faça Login</Link>
            </PLogin>
            <InputCompleto>
                <form className='form-login '>
                    <div>
                        <EmailLogin htmlFor='email'>Nome</EmailLogin>
                        <InputEmail type='text' autoComplete='username' name='nome' />
                    </div>
                    <div>
                        <EmailLogin htmlFor='text'>Sobrenome</EmailLogin>
                        <InputPassword type='text' autoComplete='username-sobrenome' name='Sobrenome' />
                    </div>
                    <div>
                     <EmailLogin htmlFor='dataNascimento'>Data de Nascimento</EmailLogin>
                     <InputEmail type="date" />
                    </div>
                    <div>
                     <EmailLogin htmlFor='rgOuCnpj'>RG ou CNPJ</EmailLogin>
                     <InputEmail type="text" />
                    </div>
             <div>
              <EmailLogin htmlFor='email'>E-mail</EmailLogin>
              <InputEmail type='email' />
             </div>
             <div>
             <EmailLogin htmlFor='confirmarEmail'>Confirmar E-mail</EmailLogin>
             <InputEmail type="email" />
             </div>
             <div>
             <EmailLogin htmlFor='senha'>Senha</EmailLogin>
             <InputEmail type="password" />
             </div>
             <div>
              <EmailLogin htmlFor='confirmarSenha'>Confirmar Senha</EmailLogin>
              <InputEmail type="password" />
              </div>
              <ButtonLogin>Cadastra</ButtonLogin>
                </form>
            </InputCompleto>
        </ContainerCompleto>
    );
}
