import { useEffect, useState } from "react";
import SideNav from "../sidenav/SideNav";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function ProtocolosAprovados() {
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
                if (!res.data.permissoes.includes("adicionaProtocolo")) {
                    navigate("/");
                    return Swal.fire("Acesso negado", "", "error");
                }
                axios({
                    method: "post",
                    url: "https://central-pm-api-v2.onrender.com/protocolos/",
                    data: {
                        titulo: titulo,
                        link: link,
                    },
                    headers: {
                        authorization: token,
                    },
                })
                    .then((res) => {
                        Swal.fire("Protocolo adicionado !", "", "success");
                        setLink("");
                        setTitulo("");
                        getProtocolos();
                        setOpenAddProtocolo(false);
                        setLoading(false);
                    })
                    .catch((err) => {
                        navigate("/");
                        window.location.reload();
                        return Swal.fire(
                            "Erro ao adicionar protocolo",
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

    function getProtocolos() {
        axios({
            method: "get",
            url: "https://central-pm-api-v2.onrender.com/protocolos",
            headers: {
                authorization: token,
            },
        })
            .then((res) => {
                setProtocolos(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                return Swal.fire("Erro ao buscar protocolos", "", "error");
            });
    }

    function handleDeletar(id) {
        // eslint-disable-next-line no-restricted-globals
        var confirmacao = confirm("Deseja exluir o protocolo selecionado ?");

        if (confirmacao) {
            axios({
                method: "delete",
                url: `https://central-pm-api-v2.onrender.com/protocolos/${id}`,
                headers: {
                    authorization: token,
                },
            })
                .then((res) => {
                    getProtocolos();
                    return Swal.fire(
                        "Protocolo excluido com sucesso !",
                        "",
                        "success"
                    );
                })
                .catch((err) => {
                    return Swal.fire("Erro ao excluir protocolo", "", "error");
                });
        }
    }

    useEffect(() => {
        getProtocolos();
    }, []);

    return (
        <div>
            <SideNav activeLink={"protocolosaprovados"} />
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

                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">
                                            Protocolo Municipal Regulação de
                                            Cirurgias Eletivas
                                        </div>
                                    </div>
                                    <a
                                        href="https://drive.google.com/file/d/1Bo96pPrJFgGpQD01y6Rha0nDL6Dgu0MH/view?usp=sharing"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span className="badge bg-primary rounded-pill">
                                            Visualizar
                                        </span>
                                    </a>
                                </li>

                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">
                                            Protocolo Municipal de Atenção
                                            Domiciliar na eSF
                                        </div>
                                    </div>
                                    <a
                                        href="https://drive.google.com/file/d/1UzGIX7t3DOLBcXggTMB8ssk821_E8qxa/view?usp=sharing"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span className="badge bg-primary rounded-pill">
                                            Visualizar
                                        </span>
                                    </a>
                                </li>

                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">
                                            Protocolo Fornecimento de Fraldas +
                                            Resolução assinado (2)
                                        </div>
                                    </div>
                                    <a
                                        href="https://drive.google.com/file/d/1LQwVprkH78TzKobXX5NG76gma1UzZr4s/view?usp=sharing"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span className="badge bg-primary rounded-pill">
                                            Visualizar
                                        </span>
                                    </a>
                                </li>

                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">
                                            Manual TFD Final + Resolução SMS
                                        </div>
                                    </div>
                                    <a
                                        href="https://drive.google.com/file/d/1ztE696hoSRPPySgiUOUpjAYENs46KSK2/view?usp=drive_link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span className="badge bg-primary rounded-pill">
                                            Visualizar
                                        </span>
                                    </a>
                                </li>

                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">
                                            Protocolo Municipal de Fisioterapia
                                            2ª versão
                                        </div>
                                    </div>
                                    <a
                                        href="https://drive.google.com/file/d/1BFQuQJdFcPUMiJSEL4Io7FVnsq-_9CB4/view?usp=drive_link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span className="badge bg-primary rounded-pill">
                                            Visualizar
                                        </span>
                                    </a>
                                </li>

                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">
                                            Protocolo TS Final + Resolução SMS
                                        </div>
                                    </div>
                                    <a
                                        href="https://drive.google.com/file/d/1uPB2idfEiqz4ILNJH9Ev2RAfFhGVdH2p/view?usp=drive_link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span className="badge bg-primary rounded-pill">
                                            Visualizar
                                        </span>
                                    </a>
                                </li>

                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">
                                            Protocolo Farmácia Final + Resolução
                                            CMS
                                        </div>
                                    </div>
                                    <a
                                        href="https://drive.google.com/file/d/1RY85ATtMimPGq3rArStwjW7RS2PhpYTO/view?usp=drive_link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span className="badge bg-primary rounded-pill">
                                            Visualizar
                                        </span>
                                    </a>
                                </li>
                            </ol>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProtocolosAprovados;
