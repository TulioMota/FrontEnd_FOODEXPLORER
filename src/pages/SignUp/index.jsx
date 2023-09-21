import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { Container } from './styles';

import { Logo } from '../../components/Logo';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  function handleSignUp() {

    if (!name || !email || !password) {
      return alert('Preencha todos os campos!');
    }

    setLoading(true);
    api
      .post('/users', { name, email, password })
      .then(() => {
        alert('Usuário cadastrado com sucesso!');
        navigate(-1);
   

      })
      .catch((err) => {
        setLoading(false);
        if (err.response) {
          alert(err.response.data.message);
        } else {
          navigate(-1);
        }
      });
  }

  return (
    <Container>
      <main>
        <Logo />

        <form>
          <legend>Crie sua conta</legend>
          <div className="label">  
          <p>Nome</p>
          <Input
            type="text"
            placeholder="Exemplo: Maria da Silva"
            onChange={(e) => setName(e.target.value)}
          />
          </div>

          <div className="label">  
          <p>Email</p>
          <Input
            type="email"
            placeholder="exemplo@email.com.br"
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

          <Button type="button" title="Criar conta" onClick={handleSignUp} />
          <Link to={-1}>Já tenho uma conta</Link>

        </form>
      </main>

    </Container>
  );
}
