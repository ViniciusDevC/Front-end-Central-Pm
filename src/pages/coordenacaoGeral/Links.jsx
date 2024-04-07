import { useNavigate } from "react-router-dom";
import SideNav from "../sidenav/SideNav";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "animate.css";

function Links() {
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
        const cards = document.getElementsByClassName("card");
        const cardsArray = Array.from(cards); // Converter a coleção em um array

        cardsArray.forEach((el) => {
            if (
                !el.textContent
                    .toLocaleUpperCase()
                    .includes(value.toLocaleUpperCase())
            ) {
                el.style.display = "none";
            } else {
                el.style.display = "block";
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
                            className="row ms-4"
                            style={{ position: "relative", zIndex: "1" }}
                        >
                            <div className="col mt-3">
                                <div
                                    className="card p-3 animate__animated animate__pulse animate__faster"
                                    style={{ width: "18rem", height: "14rem" }}
                                >
                                    <img
                                        src="https://www.cosemsba.org.br/wp-content/uploads/2019/05/banner-digisus.jpg"
                                        className="card-img-top"
                                        style={{ width: "90%" }}
                                        alt="..."
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            DigiSUS Gestor
                                        </h5>
                                        <a
                                            href="https://digisusgmp.saude.gov.br/"
                                            className="card-link"
                                            target="blank"
                                        >
                                            Link de acesso
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div
                                    className="card p-3 mt-3 animate__animated animate__pulse animate__faster"
                                    style={{ width: "18rem", height: "14rem" }}
                                >
                                    <img
                                        src="https://www.sei.mg.gov.br/sei/imagens/sei_login_externo.png"
                                        className="card-img-top"
                                        style={{ width: "60%" }}
                                        alt="..."
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Sistema Eletrônico de Informações
                                            (SEI)
                                        </h5>
                                        <a
                                            href="https://www.sei.mg.gov.br/sei/controlador_externo.php?acao=usuario_externo_logar&id_orgao_acesso_externo=0"
                                            className="card-link"
                                            target="blank"
                                        >
                                            Link de acesso
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div
                                    className="card p-3 mt-3 animate__animated animate__pulse animate__faster"
                                    style={{ width: "18rem", height: "14rem" }}
                                >
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            SISTEMA DE APOIO À IMPLEMENTAÇÃO DE
                                            POLITICAS EM SAÚDE (SAIPS)
                                        </h5>
                                        <a
                                            href="https://saips.saude.gov.br/"
                                            className="card-link"
                                            target="blank"
                                        >
                                            Link de acesso
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col mt-3">
                                <div
                                    className="card p-3 animate__animated animate__pulse animate__faster"
                                    style={{ width: "18rem", height: "14rem" }}
                                >
                                    <img
                                        src="https://www.gov.br/saude/logo.png"
                                        alt="..."
                                        style={{ width: "6rem" }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            SIAB DATASUS
                                        </h5>
                                        <a
                                            href="http://siab.datasus.gov.br/DATASUS/index.php?area=02"
                                            className="card-link"
                                            target="blank"
                                        >
                                            Link de acesso
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col mt-3 animate__animated animate__pulse animate__faster">
                                <div
                                    className="card p-3"
                                    style={{ width: "18rem", height: "14rem" }}
                                >
                                    <img
                                        src="https://www.saude.mg.gov.br/images/logo-secretaria-de-saude-mg-pequena.png"
                                        className="card-img-top"
                                        alt="..."
                                        style={{ width: "15rem" }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Resoluções Saúde
                                        </h5>
                                        <a
                                            href="https://www.saude.mg.gov.br/sobre/institucional/resolucoes/documents?by_year=0&by_month=&by_format=&category_id=4795&ordering=&q=7169"
                                            className="card-link"
                                            target="blank"
                                        >
                                            Link de acesso
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col mt-3 animate__animated animate__pulse animate__faster">
                                <div
                                    className="card p-3"
                                    style={{ width: "18rem", height: "14rem" }}
                                >
                                    <img
                                        src="data:image/jpeg;base64,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"
                                        className="card-img-top"
                                        alt="..."
                                        style={{ width: "7rem" }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Documentação
                                        </h5>
                                        <a
                                            href="https://drive.google.com/drive/folders/12LohRS6nYTlODOTHX8Uc3AdcJhmdHr9W"
                                            className="card-link"
                                            target="blank"
                                        >
                                            Link de acesso
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col mt-3">
                                <div
                                    className="card p-3 animate__animated animate__pulse animate__faster"
                                    style={{ width: "18rem", height: "14rem" }}
                                >
                                    <img
                                        src="https://www.cosemssc.org.br/wp-content/uploads/2019/11/Capturar-1-1.jpg"
                                        alt="..."
                                        style={{ width: "15rem" }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            SISMAC | Sistema de Controle de
                                            Limite Financeiro da Média e Alta
                                            Complexidade
                                        </h5>
                                        <a
                                            href="https://sismac.saude.gov.br/inicio"
                                            className="card-link"
                                            target="blank"
                                        >
                                            Link de acesso
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Links;
