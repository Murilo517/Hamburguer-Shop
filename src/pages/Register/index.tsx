import { Link } from 'react-router-dom';
import { FormRegister } from '../../components/FormRegister';
import { UserProvider } from '../../contexts/UserContext';
import { StyledBurguerDiv, StyledPageRegister } from './styles';
import logo from '../../assets/logo.svg';
import imgLogin from '../../assets/imgLogin.png'

export const RegisterPage = () => {
  return (
    <StyledPageRegister>
      <StyledBurguerDiv>
        <img className='logo' src={logo} alt="" />
        <div className='divDescription'>
          <p>A vida é como um sanduíche, é preciso recheá-la com os melhores ingredientes.</p>
        </div>
        <img className='imgDot' src={imgLogin} alt="" />
      </StyledBurguerDiv>
      <div className="divForm">
        <div className='divCadastro'>
          <h2>Cadastro</h2>
          <Link to='/'>Retornar para o login</Link>
        </div>
        <UserProvider>
          <FormRegister />
        </UserProvider>
      </div>
    </StyledPageRegister>
  );
}
