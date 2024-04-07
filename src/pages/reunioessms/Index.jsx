import { useEffect, useState } from "react";
import SideNav from "../sidenav/SideNav";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Reunioessms() {
    var token = window.localStorage.getItem("x-access-token");
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [openAddProtocolo, setOpenAddProtocolo] = useState(false);
    const [titulo, setTitulo] = useState("");
    const [link, setLink] = useState("");
    const [protocolos, setProtocolos] = useState([]);

    function pesquisar(value) {
        const itens = document.getElementsByClassName("list-group-item");
        const itensArray = Array.from(itens); // Converter a coleção em um array

        itensArray.forEach((el) => {
            if (
                !el.textContent
                    .toLocaleUpperCase()
                    .includes(value.toLocaleUpperCase())
            ) {
                el.classList.add("d-none");
            } else {
                el.classList.remove("d-none");
            }
        });
    }

    async function handleAdicionar() {
        setLoading(true);
        if (titulo.length < 3) {
            setLoading(false);
            return Swal.fire(
                "Titulo precisa ser maior que 3 caracteres",
                "",
                "error"
            );
        }

        if (link.length < 13) {
            setLoading(false);
            return Swal.fire("Link inválido", "", "error");
        }
        await axios({
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
                if (!res.data.permissoes.includes("Reunioessms")) {
                    navigate("/");
                    return Swal.fire("Acesso negado", "", "error");
                }
                axios({
                    method: "post",
                    url: "https://central-pm-api-v2.onrender.com/ata/",
                    data: {
                        titulo: titulo,
                        link: link,
                    },
                    headers: {
                        authorization: token,
                    },
                })
                    .then((res) => {
                        Swal.fire("Reunião adicionada !", "", "success");
                        setLink("");
                        setTitulo("");
                        getReunioes();
                        setOpenAddProtocolo(false);
                        setLoading(false);
                    })
                    .catch((err) => {
                        navigate("/");
                        window.location.reload();
                        return Swal.fire(
                            "Erro ao adicionar reunião",
                            "",
                            "error"
                        );
                    });
                setLoading(false);
            })
            .catch((err) => {
                setLoading(true);
                navigate("/");
                window.location.reload();
                return Swal.fire(
                    "Erro ao verificar as permissões",
                    "",
                    "error"
                );
            });
    }

    function getReunioes() {
        axios({
            method: "get",
            url: "https://central-pm-api-v2.onrender.com/ata",
            headers: {
                authorization: token,
            },
        })
            .then((res) => {
                setProtocolos(res.data);
                console.log(res.data);
                console.log("🚀 ~ .then ~ res.data:", res.data);
            })
            .catch((err) => {
                return Swal.fire("Erro ao buscar reuniões", "", "error");
            });
    }

    function handleDeletar(id) {
        // eslint-disable-next-line no-restricted-globals
        var confirmacao = confirm("Deseja exluir a reunião selecionada ?");

        if (confirmacao) {
            axios({
                method: "delete",
                url: `https://central-pm-api-v2.onrender.com/ata/${id}`,
                headers: {
                    authorization: token,
                },
            })
                .then((res) => {
                    getReunioes();
                    return Swal.fire(
                        "Reunião excluido com sucesso !",
                        "",
                        "success"
                    );
                })
                .catch((err) => {
                    return Swal.fire("Erro ao excluir reunião", "", "error");
                });
        }
    }

    useEffect(() => {
        getReunioes();
    }, []);

    return (
        <div>
            <SideNav activeLink={"Reunioessms"} />
            <div
                className="container rounded-4 mt-4 p-3 col-xs-6 col-sm-6 col-md-6 col-lg-7 main-container"
                style={{ backgroundColor: "white" }}
            >
                {openAddProtocolo ? (
                    <div>
                        <div className="row">
                            <div className="col">
                                <button
                                    className="btn btn-primary"
                                    onClick={() => setOpenAddProtocolo(false)}
                                >
                                    <i className="bi bi-arrow-left-square"></i>{" "}
                                    Voltar
                                </button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                Titulo:
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={(e) => setTitulo(e.target.value)}
                                />
                            </div>
                            <div className="col">
                                Link:
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="https://drive.google.com/file/d/*********-********/view"
                                    onChange={(e) => setLink(e.target.value)}
                                />
                            </div>
                        </div>
                        {loading ? (
                            <div>
                                <div className="text-center mt-3">
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
                            <div className="row p-3">
                                <button
                                    className="btn btn-primary"
                                    onClick={(e) => handleAdicionar()}
                                >
                                    Adicionar
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <div>
                        <div className="row">
                            <div className="col">
                                <button
                                    className="btn btn-primary"
                                    onClick={(e) => setOpenAddProtocolo(true)}
                                >
                                    <i className="bi bi-arrow-right-square"></i>{" "}
                                    Adicionar
                                </button>
                            </div>
                        </div>
                        <div className="input-group flex-nowrap mt-2">
                            <span
                                className="input-group-text"
                                id="addon-wrapping"
                            >
                                <i className="bi bi-search"></i>
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                aria-label="Pesquisar"
                                aria-describedby="addon-wrapping"
                                onChange={(e) => pesquisar(e.target.value)}
                            />
                        </div>
                        <div
                            className="row ms-0 mt-3"
                            style={{ position: "relative", zIndex: "1" }}
                        >
                            <ol className="list-group list-group-numbered">
                                {protocolos.map((item) => {
                                    return (
                                        <li className="list-group-item d-flex justify-content-between align-items-start">
                                            <div className="ms-2 me-auto">
                                                <div className="fw-bold">
                                                    {item.titulo}
                                                </div>
                                            </div>
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <span className="badge bg-primary rounded-pill">
                                                    Visualizar
                                                </span>
                                            </a>
                                            <a
                                                href="#"
                                                rel="noopener noreferrer"
                                                onClick={(e) =>
                                                    handleDeletar(item._id)
                                                }
                                            >
                                                <span className="badge bg-danger rounded-pill">
                                                    Deletar
                                                </span>
                                            </a>
                                        </li>
                                    );
                                })}
                            </ol>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Reunioessms;
