import { Container} from './styles';

import { useAuth } from '../../hooks/auth';
import { useState } from 'react';

import { Logo} from '../../components/Logo';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';


export function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  const { signIn } = useAuth();

  async function handleSignIn() {
    setLoading(true);
    const loadingStatus = await signIn({ email, password });
    setLoading(loadingStatus);
  }

  return (
    <Container>
      <main>
        <Logo />

        <form>
          <legend>Faça o login</legend>
          <div className="label">  
          <p>Email</p>
          <Input
            type="email"
            placeholder="Exemplo: exemplo@email.com.br"
            onChange={(e) => setEmail(e.target.value)}
          />
          </div>

          <div className="label">  
          <p>Senha</p>
          <Input
            type="password"
            placeholder="No mínimo 6 caracteres"
            onChange={(e) => setPassword(e.target.value)}
          />
           </div>

          <Button
            type="button"
            title="Entrar"
            onClick={handleSignIn}
            disabled={loading}
          />
         <Link to="/register">Criar uma conta</Link>

        </form>
      </main>


    
    </Container>
  );
}
