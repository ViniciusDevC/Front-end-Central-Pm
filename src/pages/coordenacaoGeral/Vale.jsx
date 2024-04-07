import { useNavigate } from "react-router-dom";
import SideNav from "../sidenav/SideNav";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function Vale() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    var token = window.localStorage.getItem("x-access-token");

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
                if (!res.data.permissoes.includes("CoordenacaoGeral")) {
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

    useEffect(() => {
        verificaPermissao();
    }, []);
    return (
        <div>
            <SideNav activeLink={"coordenacaogeral"} />
            <div
                className="container rounded-4 mt-4 p-3 col-xs-6 col-sm-6 col-md-6 col-lg-7 main-container"
                style={{ backgroundColor: "white" }}
            >
                {loading ? (
                    <div>
                        <div className="text-center mt-5">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">
                                    Loading...
                                </span>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
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
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">
                                            DRIVE - Pará de Minas
                                        </div>
                                    </div>
                                    <a
                                        href="https://drive.google.com/drive/folders/1_HM0sJVaSH8TTI7LO5tuFM7deyZ8VUBz"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span className="badge bg-primary rounded-pill">
                                            Abrir
                                        </span>
                                    </a>
                                </li>

                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">
                                            DRIVE - Notas Técnicas
                                        </div>
                                    </div>
                                    <a
                                        href="https://drive.google.com/drive/folders/1JQotx7TKDRREssvfZDFyARWqx4ifg31q"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span className="badge bg-primary rounded-pill">
                                            Abrir
                                        </span>
                                    </a>
                                </li>

                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">
                                            DRIVE - Oficio Flexibilização
                                            Promove Minas e Fortalecimento RAPS
                                        </div>
                                    </div>
                                    <a
                                        href="https://drive.google.com/drive/folders/1Onf0kcYrCTzCGTOGbV2bitwL9pb5qFuH"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span className="badge bg-primary rounded-pill">
                                            Abrir
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

export default Vale;
