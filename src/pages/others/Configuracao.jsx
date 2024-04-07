import { Link, useNavigate } from "react-router-dom";
import SideNav from "../sidenav/SideNav";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

function Configuracao() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    var token = window.localStorage.getItem("x-access-token");

    const [nome, setNome] = useState("");
    const [usuario, setUsuario] = useState("");
    const [unidade, setUnidade] = useState("");
    const [setor, setSetor] = useState("");
    const [funcao, setFuncao] = useState("");
    const [contato, setContato] = useState("");

    function verificaPermissao() {
        axios({
            method: "post",
            url: "https://central-pm-api-v2.onrender.com/users/checksession",
            data: {
                token: token,
            },
            headers: {
                authorization: token,
            },
        })
            .then((res) => {
                console.log(res.data);
                setNome(res.data.nome);
                setUsuario(res.data.usuario);
                setUnidade(res.data.unidade);
                setSetor(res.data.setor);
                setFuncao(res.data.funcao);
                setContato(res.data.contato);
                setLoading(false);
            })
            .catch((err) => {
                navigate("/");
                window.location.reload();
                return Swal.fire(
                    "Erro ao verificar as permissões",
                    "",
                    "error"
                );
            });
    }

    useEffect(() => {
        verificaPermissao();
    }, []);
    return (
        <div>
            <SideNav />
            {loading ? (
                <div>
                    <div className="text-center mt-5">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
            ) : (
                <div
                    className="container rounded-4 mt-4 p-3 col-xs-6 col-sm-6 col-md-6 col-lg-7 main-container"
                    style={{ backgroundColor: "white" }}
                >
                    <h4>Configuração</h4>
                    <div className="row">
                        <div className="col">
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Nome"
                                    aria-describedby="nome"
                                    value={nome}
                                    disabled
                                />
                                <a
                                    className="btn btn-primary"
                                    id="nome"
                                    href="https://wa.link/2t1hx2"
                                    target="blank"
                                >
                                    Solicitar Alteração{" "}
                                    <i className="bi bi-pen"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Usuário"
                                    aria-describedby="Usuário"
                                    value={usuario}
                                    disabled
                                />
                                <a
                                    className="btn btn-primary"
                                    id="Usuário"
                                    href="https://wa.link/2t1hx2"
                                    target="blank"
                                >
                                    Solicitar Alteração{" "}
                                    <i className="bi bi-pen"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Unidade"
                                    aria-describedby="Unidade"
                                    value={unidade}
                                    disabled
                                />
                                <a
                                    className="btn btn-primary"
                                    id="Unidade"
                                    href="https://wa.link/2t1hx2"
                                    target="blank"
                                >
                                    Solicitar Alteração{" "}
                                    <i className="bi bi-pen"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Setor"
                                    aria-describedby="Setor"
                                    value={setor}
                                    disabled
                                />
                                <a
                                    className="btn btn-primary"
                                    id="Setor"
                                    href="https://wa.link/2t1hx2"
                                    target="blank"
                                >
                                    Solicitar Alteração{" "}
                                    <i className="bi bi-pen"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Função"
                                    aria-describedby="Função"
                                    value={funcao}
                                    disabled
                                />
                                <a
                                    className="btn btn-primary"
                                    id="Função"
                                    href="https://wa.link/2t1hx2"
                                    target="blank"
                                >
                                    Solicitar Alteração{" "}
                                    <i className="bi bi-pen"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Contato"
                                    aria-describedby="Contato"
                                    value={contato}
                                    disabled
                                />
                                <a
                                    className="btn btn-primary"
                                    id="Contato"
                                    href="https://wa.link/2t1hx2"
                                    target="blank"
                                >
                                    Solicitar Alteração{" "}
                                    <i className="bi bi-pen"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link
                                to="/alterarsenha"
                                className="btn btn-warning"
                            >
                                <i className="bi bi-key"></i> Alterar senha
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Configuracao;
