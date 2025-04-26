import { useState, useEffect } from "react";
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

interface TailwindProps {
    usuario: string;
}

function Tailwind({ usuario }: TailwindProps) {
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
        <div className="w-full max-w-3xl bg-gray-800 p-10 rounded-2xl shadow-2xl text-white text-center space-y-8">
            <h2 className="text-3x1 font-bold mb-6">Buscar Usuário do GitHub</h2>

            <button
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl text-xl transition"
                onClick={() => navigate("/")}
            >
                Voltar à Pesquisa
            </button>

            {erro && <p className="text-red-500 text-xl mt-6">Usuário não encontrado.</p>}

            {dadosUsuario && (
                <div className="bg-gray-700 p-6 rounded-2xl space-y-6 flex flex-col items-center w-full">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-500 shadow-md">
                        <img
                            src={dadosUsuario.avatar_url}
                            alt="Avatar"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="text-center">
                        <p className="text-3xl font-semibold">{dadosUsuario.name}</p>
                        <p className="text-xl text-gray-400">@{dadosUsuario.login}</p>
                    </div>

                    <p className="text-lg text-gray-300 text-center">{dadosUsuario.bio}</p>

                    <div className="text-lg text-gray-200 space-y-2 text-center">
                        <p><strong>Localização:</strong> {dadosUsuario.location}</p>
                        <p>
                            <strong>Blog:</strong>{" "}
                            <a
                                href={dadosUsuario.blog}
                                target="_blank"
                                className="text-indigo-400 hover:underline break-words"
                            >
                                {dadosUsuario.blog}
                            </a>
                        </p>
                        <p><strong>Seguidores:</strong> {dadosUsuario.followers}</p>
                        <p><strong>Seguindo:</strong> {dadosUsuario.following}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Tailwind;
