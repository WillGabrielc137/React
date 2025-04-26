import { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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

const Card = styled.div`
  width: 100%;
  max-width: 600px;
  background-color: #2d3748;
  padding: 32px;
  border-radius: 20px;
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.2);
  color: white;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 24px;
`;

const Button = styled.button`
  width: 100%;
  background-color: #4c51bf;
  padding: 16px;
  border-radius: 10px;
  color: white;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #434190;
  }
`;

const InfoBox = styled.div`
  background-color: #4a5568;
  padding: 24px;
  border-radius: 16px;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Avatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid #667eea;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
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
  font-size: 24px;
  font-weight: 700;
`;

const UserLogin = styled.p`
  font-size: 18px;
  color: #a0aec0;
`;

const Bio = styled.p`
  font-size: 16px;
  color: #e2e8f0;
  text-align: center;
`;

const Details = styled.div`
  font-size: 16px;
  color: #edf2f7;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
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
  const navigate = useNavigate();

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

  return (
    <Card>
      <Title>Buscar Usuário do GitHub</Title>
      <Button onClick={() => navigate("/")}>Voltar à Pesquisa</Button>

      {erro && (
        <p style={{ color: "#e53e3e", fontSize: "18px", marginTop: "24px" }}>
          Usuário não encontrado.
        </p>
      )}

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
            <p><strong>Localização:</strong> {dadosUsuario.location}</p>
            <p>
              <strong>Blog:</strong>{" "}
              <Link href={dadosUsuario.blog} target="_blank">
                {dadosUsuario.blog}
              </Link>
            </p>
            <p><strong>Seguidores:</strong> {dadosUsuario.followers}</p>
            <p><strong>Seguindo:</strong> {dadosUsuario.following}</p>
          </Details>
        </InfoBox>
      )}
    </Card>
  );
}

export default Styled;
