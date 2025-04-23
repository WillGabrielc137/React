import { useState, useEffect } from "react";
import styled from "styled-components";

interface UsuarioGit {
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
  location: string;
  blog: string;
  followers: number;
  following: number;
}

interface StyledProps {
  usuario: string;
}

const Container = styled.div`
  background-color: #1f2937;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;

const Card = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: #2d3748;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  color: white;
  text-align: center;
  space-y: 24px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const Button = styled.button`
  width: 100%;
  background-color: #4c51bf;
  padding: 12px;
  border-radius: 8px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #434190;
  }
`;

const InfoBox = styled.div`
  background-color: #4a5568;
  padding: 16px;
  border-radius: 12px;
  space-y: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Avatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid #667eea;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const UserInfo = styled.div`
  text-align: center;
`;

const UserName = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

const UserLogin = styled.p`
  font-size: 14px;
  color: #a0aec0;
`;

const Bio = styled.p`
  font-size: 14px;
  color: #e2e8f0;
  text-align: center;
`;

const Details = styled.div`
  font-size: 14px;
  color: #edf2f7;
  text-align: center;
  space-y: 8px;
`;

const Link = styled.a`
  color: #667eea;
  &:hover {
    text-decoration: underline;
  }
`;

function Styled({ usuario }: StyledProps) {
  const [dadosUsuario, setDadosUsuario] = useState<UsuarioGit | null>(null);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    const buscarUsuario = async () => {
      const url = `https://api.github.com/users/${usuario}`;

      try {
        const resposta = await fetch(url);
        if (!resposta.ok) {
          setErro(true);
          setDadosUsuario(null);
          return;
        }

        const dados: UsuarioGit = await resposta.json();
        setDadosUsuario(dados);
        setErro(false);
      } catch {
        setErro(true);
        setDadosUsuario(null);
      }
    };

    if (usuario) buscarUsuario();
  }, [usuario]);

  useEffect(() => {
    console.log("Componente Styled carregado");
  }, []);

  
  return (
    
    <Container>
      <Card>
        <Title>Buscar Usuário do GitHub</Title>
        <Button onClick={() => window.location.reload()}>Atualizar</Button>

        {erro && <p style={{ color: "#e53e3e", marginTop: "16px" }}>Usuário não encontrado.</p>}

        {dadosUsuario && (
          <InfoBox>
            <Avatar>
              <AvatarImage src={dadosUsuario.avatar_url} alt="Avatar" />
            </Avatar>
            <UserInfo>
              <UserName>{dadosUsuario.name}</UserName>
              <UserLogin>@{dadosUsuario.login}</UserLogin>
            </UserInfo>
            <Bio>{dadosUsuario.bio}</Bio>

            <Details>
              <p><strong>📍 Localização:</strong> {dadosUsuario.location}</p>
              <p>
                <strong>🔗 Blog:</strong>{" "}
                <Link href={dadosUsuario.blog} target="_blank">
                  {dadosUsuario.blog}
                </Link>
              </p>
              <p><strong>👥 Seguidores:</strong> {dadosUsuario.followers}</p>
              <p><strong>➡️ Seguindo:</strong> {dadosUsuario.following}</p>
            </Details>
          </InfoBox>
        )}
      </Card>
    </Container>
  );
}

export default Styled;
