import { FormLogin } from "../../components/FormLogin";
import { Link, StyledLoginPage } from "./styles";
import logo from '../../assets/logo.svg';
import imgLogin from '../../assets/imgLogin.png'

export const LoginPage = () => {
  return (
    <StyledLoginPage>
      <div className="divLoginAndForm">
        <h3>Login</h3>
          <FormLogin/>
        <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
        <Link to="/register">Cadastrar</Link>
      </div>
      <div className="divBurguer">
        <img className="logo" src={logo} alt="" />
        <div className="divIconDescription">
          <p>A vida é como um sanduíche, é preciso recheá-la com os melhores ingredientes.</p>
        </div>
        <img className="imgDot" src={imgLogin} alt="" />
      </div>
    </StyledLoginPage>
  );
};
