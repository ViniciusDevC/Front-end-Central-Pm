import { useEffect, useState } from "react";
import SideNav from "../sidenav/SideNav";
import axios from "axios";
import moment from "moment";
import "moment-timezone";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";

function Index() {
    const navigate = useNavigate();

    var token = window.localStorage.getItem("x-access-token");
    moment.tz.setDefault("America/Sao_Paulo");
    const [loading, setLoading] = useState(true);
    const [id, setId] = useState("");

    const [titulo, setTitulo] = useState("");
    const [tipo, setTipo] = useState("primary");
    const [conteudo, setConteudo] = useState("");
    const [avisos, setAvisos] = useState([]);

    const handleOpenEdit = (id) => {
        const aviso = avisos.find((value) => value._id === id);
        setId(id);
        setTitulo(aviso.titulo);
        setTipo(aviso.tipo);
        setConteudo(aviso.conteudo);
    };

    const handleCancelEdit = () => {
        if (!window.confirm("Deseja cancelar a edição ?")) {
            return;
        }
        setId("");
        setTitulo("");
        setTipo("primary");
        setConteudo("");
    };
    async function atualizar() {
        if (!titulo || !tipo || !conteudo) {
            return Swal.fire(
                "Campos obrigatórios não preenchidos",
                "",
                "error"
            );
        }
        axios({
            method: "put",
            url: `https://central-pm-api-v2.onrender.com/avisos`,
            data: {
                id,
                titulo,
                tipo,
                conteudo,
                data: moment().format("DD-MM-YYYY"),
            },
            headers: {
                authorization: token,
            },
        })
            .then((res) => {
                setId("");
                setTitulo("");
                setTipo("");
                setConteudo("");
                getAvisos();
                return Swal.fire("Aviso atualizado com sucesso", "", "success");
            })
            .catch((err) => {
                console.log("🚀 ~ file: Index.jsx:67 ~ atualizar ~ err:", err);
                return Swal.fire("Erro ao atualizar aviso", "", "error");
            });
    }
    async function adicionar() {
        if (!titulo || !tipo || !conteudo) {
            return Swal.fire(
                "Campos obrigatórios não preenchidos",
                "",
                "error"
            );
        }
        axios({
            method: "post",
            url: `https://central-pm-api-v2.onrender.com/avisos`,
            data: {
                titulo,
                tipo,
                conteudo,
                data: moment().format("DD-MM-YYYY"),
            },
            headers: {
                authorization: token,
            },
        })
            .then((res) => {
                setTitulo("");
                setTipo("");
                setConteudo("");
                getAvisos();
                return Swal.fire("Aviso adicionado com sucesso", "", "success");
            })
            .catch((err) => {
                return Swal.fire("Erro ao adicionar aviso", "", "error");
            });
    }
    async function deletarAviso(id) {
        if (!window.confirm("Deseja deletar o aviso selecionado ?")) {
            return;
        }
        axios({
            method: "delete",
            url: `https://central-pm-api-v2.onrender.com/avisos/${id}`,
            headers: {
                authorization: token,
            },
        })
            .then((res) => {
                getAvisos();
                return Swal.fire("Aviso apagado com sucesso", "", "success");
            })
            .catch((err) => {
                console.log(err);
                return Swal.fire("Erro ao apagar aviso", "", "error");
            });
    }
    async function getAvisos() {
        axios({
            method: "get",
            url: "https://central-pm-api-v2.onrender.com/avisos",
            headers: {
                authorization: token,
            },
        })
            .then((res) => {
                setAvisos(res.data);
            })
            .catch((err) => {
                return Swal.fire("Erro ao buscar avisos", "", "error");
            });
    }

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
                if (!res.data.permissoes.includes("PainelAvisos")) {
                    navigate("/");
                    return Swal.fire("Acesso negado", "", "error");
                }
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

    useEffect(() => {
        getAvisos();
    }, []);
    useEffect(() => {
        console.log("🚀 ~ file: Index.jsx:174 ~ Index ~ avisos:", avisos);
    }, [avisos]);

    return (
        <div>
            <SideNav activeLink={"painelavisos"} />

            <div
                className="container rounded-4 mt-4 p-3 col-xs-6 col-sm-6 col-md-6 col-lg-7 main-container"
                style={{ backgroundColor: "white" }}
            >
                <h3>Avisos ({avisos.length})</h3>

                <div className="row">
                    <div className="col">
                        <span>Titulo:</span>
                        <input
                            type="text"
                            className="form-control"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                        />
                    </div>

                    <div className="col">
                        <span>Tipo:</span>
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            value={tipo}
                            onChange={(e) => setTipo(e.target.value)}
                        >
                            <option className="text-primary " value="primary">
                                Padrão
                            </option>
                            <option className="text-success" value="success">
                                Atualização
                            </option>
                            <option className="text-info " value="info">
                                Aviso
                            </option>
                            <option className="text-danger " value="danger">
                                Urgente
                            </option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col mt-3">
                        <textarea
                            className="form-control"
                            name=""
                            id=""
                            cols="30"
                            rows="7"
                            value={conteudo}
                            onChange={(e) => setConteudo(e.target.value)}
                        ></textarea>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-3">
                        <a
                            className="btn btn btn-outline-dark"
                            href="https://www.markdownguide.org/cheat-sheet/"
                            target="_blank"
                        >
                            <i className="bi bi-question-diamond"></i> Como usar
                            markdown
                        </a>
                    </div>
                    <div className="col ">
                        <a
                            className="btn btn btn-outline-dark"
                            href="https://ayltoninacio.com.br/blog/como-colocar-icones-emoji-html-no-seu-site"
                            target="_blank"
                        >
                            <i className="bi bi-arrow-up-right-square"></i>{" "}
                            Lista de emojis
                        </a>
                    </div>
                </div>
                {id ? (
                    <div className="row p-3">
                        <button
                            className="btn btn-primary"
                            onClick={(e) => atualizar()}
                        >
                            Atualizar
                        </button>
                        <button
                            className="btn btn-warning mt-2"
                            onClick={(e) => handleCancelEdit()}
                        >
                            Cancelar
                        </button>
                    </div>
                ) : (
                    <div className="row p-3">
                        <button
                            className="btn btn-primary"
                            onClick={(e) => adicionar()}
                        >
                            Adicionar
                        </button>
                    </div>
                )}
            </div>
            {conteudo && (
                <div
                    className="container rounded-4 mt-4 p-3 col-xs-6 col-sm-6 col-md-6 col-lg-7 main-container"
                    style={{ backgroundColor: "white" }}
                >
                    <div className="row">
                        <div className="col">
                            <h3>Pré Visualização:</h3>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col">
                            <h5 className="card-title">{titulo}</h5>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col">
                            <ReactMarkdown>{conteudo}</ReactMarkdown>
                        </div>
                    </div>
                </div>
            )}
            <div
                className="container rounded-4 mt-4 p-3 col-xs-6 col-sm-6 col-md-6 col-lg-7 main-container"
                style={{ backgroundColor: "white" }}
            >
                <div className="table-responsive">
                    <table className="table table-striped mt-2">
                        <thead>
                            <tr>
                                <th scope="col">Titulo</th>
                                <th scope="col">Conteudo</th>
                                <th scope="col">Ações</th>
                            </tr>
                        </thead>
                        {loading ? (
                            <div>
                                <div className="text-center mt-5">
                                    <div
                                        className="spinner-border"
                                        role="status"
                                    >
                                        <span className="visually-hidden">
                                            Loading...
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <tbody>
                                {avisos
                                    .slice()
                                    .reverse()
                                    .map((item) => {
                                        return (
                                            <tr key={item._id}>
                                                <td>{item.titulo}</td>
                                                <td>{item.conteudo}</td>
                                                <td>
                                                    <button
                                                        className="btn btn-danger ms-1"
                                                        onClick={(e) =>
                                                            deletarAviso(
                                                                item._id
                                                            )
                                                        }
                                                    >
                                                        <i className="bi bi-trash"></i>
                                                    </button>
                                                </td>
                                                <td>
                                                    <button
                                                        className="btn btn-primary ms-1"
                                                        onClick={(e) =>
                                                            handleOpenEdit(
                                                                item._id
                                                            )
                                                        }
                                                    >
                                                        <i className="bi bi-journal-arrow-up"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                            </tbody>
                        )}
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Index;
