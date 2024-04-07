import { Link, useNavigate } from "react-router-dom";
import SideNav from "../sidenav/SideNav";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

function LinksVisualizacaoTfd() {
    const navigate = useNavigate();
    var token = window.localStorage.getItem("x-access-token");
    const [loading, setLoading] = useState(true);

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
                if (!res.data.permissoes.includes("linksVisualizacaoTfd")) {
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
    return (
        <div>
            <SideNav activeLink={"tfd"} />
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
                    <div className="input-group flex-nowrap mt-2">
                        <span className="input-group-text" id="addon-wrapping">
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
                                        CONTROLE DE ENTRADAS E SAÍDAS 2024
                                    </div>
                                </div>
                                <Link to="/tfd/sheets/entradasesaidas2024import">
                                    <span className="badge bg-primary rounded-pill">
                                        Abrir
                                    </span>
                                </Link>
                            </li>
                        </ol>
                    </div>
                </div>
            )}
        </div>
    );
}

export default LinksVisualizacaoTfd;
