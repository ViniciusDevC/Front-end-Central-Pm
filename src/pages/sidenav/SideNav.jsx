import { Link, useNavigate } from "react-router-dom";
import "./sidenav.css";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import Swal from "sweetalert2";

function SideNav({ activeLink }) {
    const navigate = useNavigate();

    const [nomeUsuario, setNomeUsuario] = useState("Usuário");
    const [isClose, setIsClose] = useState(false);
    const [elFiltred, setElFiltred] = useState([]);

    function setUserName() {
        const userName = window.localStorage.getItem("userName");
        if (userName) {
            setNomeUsuario(userName);
        }
    }
    function sair() {
        window.localStorage.setItem("x-access-token", "");
        window.localStorage.setItem("userName", "");
        navigate("/login");
        window.location.reload();
    }

    function toggleSideNav() {
        setIsClose(!isClose);
        var iframes = document.getElementsByClassName("iframe");
        for (let index = 0; index < iframes.length; index++) {
            if (isClose) {
                iframes[index].style.paddingLeft = "260px";
                iframes[index].style.height = "100vh";
                iframes[index].style.width = "75%";
            } else {
                iframes[index].style.paddingLeft = "70px";
                iframes[index].style.height = "100vh";
                iframes[index].style.width = "72%";
            }
        }
    }

    async function pesquisar(value) {
        const dropdownItem = document.getElementsByClassName("dropdown-item");
        const dropdownItemArray = Array.from(dropdownItem);
        const navItens = Array.from(
            document.getElementsByClassName("nav-item")
        );
        const filteredItems = dropdownItemArray.filter((el) =>
            el.innerText.toLocaleUpperCase().includes(value.toLocaleUpperCase())
        );
        setElFiltred([]);
        console.log(filteredItems);
        if (filteredItems.length === 0 || value.length < 1) {
            setElFiltred([]);
            navItens.forEach((el) => (el.style.display = "block"));
        } else {
            const uniqueItems = filteredItems.filter(
                (el) => !elFiltred.includes(el)
            );
            setElFiltred(uniqueItems);
            navItens.forEach((el) => (el.style.display = "none"));
        }
    }

    useEffect(() => {
        setUserName();
    }, []);
    return (
        <div>
            <div
                className={`sidebar d-flex flex-column flex-shrink-0 p-1 bg-body rounded-end ${
                    isClose ? "active" : ""
                }`}
            >
                <div className="row">
                    <div className="col">
                        <a
                            href="/"
                            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none "
                        >
                            <img
                                src="https://leismunicipais.com.br/img/cidades/mg/para-de-minas.png"
                                alt="Logo"
                                className="footer-logo ms-2"
                                style={{ width: "40px" }}
                            />
                            <span className="fs-4 ps-3 navspan">
                                Central PM{" "}
                            </span>
                        </a>
                    </div>
                    <div className="col-3 d-flex justify-content-center align-items-center">
                        <i
                            className={`${
                                isClose
                                    ? "bi bi-box-arrow-right"
                                    : "bi bi-box-arrow-left"
                            } cursor-pointer fs-4 toggleicon`}
                            onClick={(e) => toggleSideNav()}
                        ></i>
                    </div>
                </div>
                <div className="input-group input-group-sm flex-nowrap mt-2 ">
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

                <hr />

                <ul className="nav nav-pills flex-column mb-auto ">
                    {elFiltred.map((item, index) => (
                        <li key={index} className="list-striped mt-2">
                            <Link to={item.href} className="dropdown-item ">
                                <i
                                    className={item.lastElementChild.className}
                                ></i>
                                {item.innerText}
                            </Link>
                        </li>
                    ))}
                    <li className="nav-item">
                        <Link
                            to="/"
                            className={
                                activeLink === "inicio"
                                    ? "nav-link link-body-emphasis active"
                                    : "nav-link link-body-emphasis"
                            }
                        >
                            <i className="bi bi-house-door-fill ps-3 me-2"></i>
                            <span className="navspan">Inicio</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            to="/usuarios"
                            className={
                                activeLink === "usuarios"
                                    ? "nav-link link-body-emphasis active"
                                    : "nav-link link-body-emphasis"
                            }
                        >
                            <i className="bi bi-person-fill ps-3 me-2"></i>
                            <span className="navspan">Usuários</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            to="/links"
                            className={
                                activeLink === "linksuteis"
                                    ? "nav-link link-body-emphasis active"
                                    : "nav-link link-body-emphasis"
                            }
                        >
                            <i className="bi bi-folder-symlink-fill ps-3 me-2"></i>
                            <span className="navspan">Links Úteis</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            to="/protocolosaprovados"
                            className={
                                activeLink === "protocolosaprovados"
                                    ? "nav-link link-body-emphasis active"
                                    : "nav-link link-body-emphasis"
                            }
                        >
                            <i className="bi bi-file-earmark-check-fill ps-3 me-2"></i>
                            <span className="navspan">
                                Protocolos Aprovados
                            </span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            to="/reunioessms"
                            className={
                                activeLink === "Reunioessms"
                                    ? "nav-link link-body-emphasis active"
                                    : "nav-link link-body-emphasis"
                            }
                        >
                            <i className="bi bi-file-earmark-check-fill ps-3 me-2"></i>
                            <span className="navspan">Reuniões SMS</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            to="/carteiraservicos"
                            className={
                                activeLink === "carteiraservicos"
                                    ? "nav-link link-body-emphasis active"
                                    : "nav-link link-body-emphasis"
                            }
                        >
                            <i className="bi bi-file-earmark-check-fill ps-3 me-2"></i>
                            <span className="navspan">
                                Carteira de Serviços SMS
                            </span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            to="/comissaoemergencia"
                            className={
                                activeLink === "comissaoemergencia"
                                    ? "nav-link link-body-emphasis active"
                                    : "nav-link link-body-emphasis"
                            }
                        >
                            <i className="bi bi-file-earmark-check-fill ps-3 me-2"></i>
                            <span className="navspan">
                                Comissão de Emergência
                            </span>
                        </Link>
                    </li>

                    <li className="nav-item  dropdown dropend">
                        <a
                            className={
                                activeLink === "coordenacaogeral"
                                    ? "nav-link link-body-emphasis dropdown-toggle active"
                                    : "nav-link link-body-emphasis dropdown-toggle"
                            }
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="bi bi-hexagon-half ps-3 me-2"></i>
                            <span className="navspan">Coordenação Geral</span>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <Link
                                    to="/coordenacao/consorcios"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-earmark-spreadsheet"></i>
                                    PREVISÃO CONSORCIOS
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/coordenacao/links"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-folder-symlink-fill"></i>{" "}
                                    Links
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/coordenacao/vale"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-exclude"></i> Vale
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/coordenacao/monitoramentonf"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-earmark-spreadsheet"></i>
                                    MONITORAMENTO NOTAS FISCAIS DOS CONSÓRCIOS -
                                    2024
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/coordenacao/monitoramentonfview"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-earmark-spreadsheet"></i>
                                    MONITORAMENTO NOTAS FISCAIS DOS CONSÓRCIOS -
                                    2024 VISUALIZAÇÃO
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/coordenacao/icismap"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-earmark-spreadsheet"></i>
                                    ACOMPANHAMENTO ICISMEP
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/ti/sheets/escalasobreavisoti"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-earmark-spreadsheet"></i>
                                    ESCALA SOBREAVISO TI
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/coordenacao/monitoramentocirurgiaseletivas"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-earmark-spreadsheet"></i>
                                    MONITORAMENTO DE CIRURGIAS ELETIVAS
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item">
                        <Link
                            to="/painelavisos"
                            className={
                                activeLink === "painelavisos"
                                    ? "nav-link link-body-emphasis active"
                                    : "nav-link link-body-emphasis"
                            }
                        >
                            <i className="bi bi-menu-button-wide-fill ps-3 me-2"></i>
                            <span className="navspan">Painel avisos</span>
                        </Link>
                    </li>

                    <li className="nav-item  dropdown dropend">
                        <a
                            className={
                                activeLink === "ambulatoriofisioterapia"
                                    ? "nav-link link-body-emphasis dropdown-toggle active"
                                    : "nav-link link-body-emphasis dropdown-toggle"
                            }
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="bi bi-clipboard2-pulse-fill ps-3 me-2"></i>
                            <span className="navspan">A.M. Fisioterapia</span>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <Link
                                    to="/ambulatoriofisioterapia/sheets/rdqa2023"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-clipboard2-data-fill"></i>
                                    FISIOTERAPIA RDQA - 2023
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item  dropdown dropend">
                        <a
                            className={
                                activeLink === "ame"
                                    ? "nav-link link-body-emphasis dropdown-toggle active"
                                    : "nav-link link-body-emphasis dropdown-toggle"
                            }
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="bi bi-hospital ps-3 me-2"></i>
                            <span className="navspan">AME</span>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <Link
                                    to="/ame/sheets/rdqa2023"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-clipboard2-data-fill"></i>
                                    AME RDQA - 2023
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/ti/sheets/escalasobreavisoti"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-earmark-spreadsheet"></i>
                                    ESCALA SOBREAVISO TI
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/ame/sheets/hiperdiardqa2023"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-clipboard2-data-fill"></i>
                                    AME HIPERDIA RDQA - 2023
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/ame/sheets/demandaatendida"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-earmark-spreadsheet"></i>
                                    AME DEMANDA ATENDIDA
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/ame/sheets/demandaatendida2024"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-earmark-spreadsheet"></i>
                                    AME DEMANDA ATENDIDA 2024
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item  dropdown dropend">
                        <a
                            className={
                                activeLink === "ameHiperdia"
                                    ? "nav-link link-body-emphasis dropdown-toggle active"
                                    : "nav-link link-body-emphasis dropdown-toggle"
                            }
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="bi bi-hospital ps-3 me-2"></i>
                            <span className="navspan">AME HIPERDIA</span>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <Link
                                    to="/amehiperdia/sheets/acompanhamentopacientes"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-earmark-spreadsheet"></i>
                                    ACOMPANHAMENTO PACIENTES - HIPERDIA
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/amehiperdia/sheets/acompanhamentopacientesimport"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-earmark-spreadsheet"></i>
                                    ACOMPANHAMENTO PACIENTES - HIPERDIA IMPORT
                                </Link>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <Link
                                    to="/amehiperdia/forms/cadastropacientes"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-ui-checks"></i> CADASTRO
                                    DE PACIENTES - HIPERDIA
                                </Link>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <Link
                                    to="/amehiperdia/bi/consolidado"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-clipboard2-data-fill"></i>
                                    CONSOLIDADO - HIPERDIA
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item  dropdown dropend">
                        <a
                            className={
                                activeLink === "aps"
                                    ? "nav-link link-body-emphasis dropdown-toggle active"
                                    : "nav-link link-body-emphasis dropdown-toggle"
                            }
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="bi bi-bandaid-fill ps-3 me-2"></i>
                            <span className="navspan">APS</span>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <Link
                                    to="https://sites.google.com/view/aps-par-de-minas-mg/p%C3%A1gina-inicial"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-earmark-word-fill"></i>{" "}
                                    PÁGINA APS
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="https://drive.google.com/file/d/12imQPFZZ5ncUHujtJDy4QkQj6-W8dnge/view?usp=sharing"
                                    className="dropdown-item"
                                    target="_blank"
                                >
                                    <i className="bi bi-link"></i> 1º TA
                                    Contrato 0085-2023 Icismep
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="https://drive.google.com/file/d/1HmWyCnq0thnDbkyNSBoZHd50dkE4AGyN/view?usp=sharing"
                                    className="dropdown-item"
                                    target="_blank"
                                >
                                    <i className="bi bi-link"></i> 2º TA
                                    Contrato 0085-2023 Icismep
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="https://drive.google.com/file/d/1OcYe2Jp9PFeHz9c82mSP1SL8UTNf0_ah/view?usp=sharing"
                                    className="dropdown-item"
                                    target="_blank"
                                >
                                    <i className="bi bi-link"></i> PROPOSTA
                                    UNIDADES BÁSICAS
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/aps/sheets/agendas"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-earmark-spreadsheet"></i>
                                    AGENDAS
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/aps/sheets/escalageralferias2324"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-earmark-spreadsheet"></i>
                                    ESCALA GERAL DE FÉRIAS 2023/2024
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/aps/forms/solicitacaodeferias"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-ui-checks"></i>{" "}
                                    SOLICITAÇÃO DE FÉRIAS
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/aps/forms/levantamentodegruposprioritarios"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-ui-checks"></i>{" "}
                                    LEVANTAMENTO GRUPOS PRIORITÁRIOS FARMÁCIA
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/aps/forms/notificacaodeausenciaprofissional"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-ui-checks"></i>{" "}
                                    NOTIFICAÇÃO DE AUSÊNCIA DO PROFISSIONAL
                                </Link>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <Link
                                    to="/aps/drive/arquivosaps"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-folder"></i> ARQUIVOS
                                </Link>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <Link
                                    to="/aps/sheets/rdqa2023"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-clipboard2-data-fill"></i>
                                    APS RDQA - 2023
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item  dropdown dropend">
                        <a
                            className={
                                activeLink === "assistenciasaude"
                                    ? "nav-link link-body-emphasis dropdown-toggle active"
                                    : "nav-link link-body-emphasis dropdown-toggle"
                            }
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="bi bi-heart-pulse ps-3 me-2"></i>
                            <span className="navspan">Assistência à Saúde</span>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <Link
                                    to="/assistenciasaude/sheets/rdqa2023"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-clipboard2-data-fill"></i>
                                    ASSISTÊNCIA À SAÚDE RDQA - 2023
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/assistenciasaude/sheets/cadastropacientes"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-earmark-spreadsheet"></i>
                                    CADASTRO DE PACIENTES
                                </Link>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <Link
                                    to="/assistenciasaude/bi/consolidado"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-clipboard2-data-fill"></i>
                                    BI CONSOLIDADO
                                </Link>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <Link
                                    to="/assistenciasaude/forms/cadastropacientes"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-ui-checks"></i>
                                    CADASTRO DE PACIENTES
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item  dropdown dropend">
                        <a
                            className={
                                activeLink === "atencaosaudebucal"
                                    ? "nav-link link-body-emphasis dropdown-toggle active"
                                    : "nav-link link-body-emphasis dropdown-toggle"
                            }
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="bi bi-building ps-3 me-2"></i>
                            <span className="navspan">
                                Atenção à Saúde Bucal
                            </span>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <Link
                                    to="/atencaosaudebucal/sheets/rdqa2023"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-clipboard2-data-fill"></i>
                                    ATENÇÃO À SAUDE BUCAL RDQA - 2023
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item  dropdown dropend">
                        <a
                            className={
                                activeLink === "atencaopsicosocial"
                                    ? "nav-link link-body-emphasis dropdown-toggle active"
                                    : "nav-link link-body-emphasis dropdown-toggle"
                            }
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="bi bi bi-hospital ps-3 me-2"></i>
                            <span className="navspan">Atenção Psicosocial</span>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <Link
                                    to="https://drive.google.com/file/d/1ZK9o9sVjQwMhXX3hHUVfPPgqrKS6rKeA/view?usp=sharing"
                                    className="dropdown-item"
                                    target="_blank"
                                >
                                    <i className="bi bi-link"></i> Contrato
                                    0140-2023 Icismep
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="https://drive.google.com/file/d/1AE8zQ_U-c3heZqPtDd_vSdOZpMXR6ExZ/view?usp=sharing"
                                    className="dropdown-item"
                                    target="_blank"
                                >
                                    <i className="bi bi-link"></i> PROPOSTA CP
                                    VALE
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/atencaopsicosocial/sheets/rdqa2023"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-clipboard2-data-fill"></i>
                                    ATENÇÃO PSICOSOCIAL RDQA - 2023
                                </Link>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <Link
                                    to="/atencaopsicosocial/bi/consolidadoatendimentos"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-bar-graph-fill"></i>
                                    CONSOLIDADO ATENDIMENTOS SAÚDE MENTAL
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item  dropdown dropend">
                        <a
                            className={
                                activeLink === "callcenter"
                                    ? "nav-link link-body-emphasis dropdown-toggle active"
                                    : "nav-link link-body-emphasis dropdown-toggle"
                            }
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="bi bi-headset ps-3 me-2"></i>
                            <span className="navspan">Call Center</span>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <Link
                                    to="/callcenter/sheet/monitoramento"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-earmark-spreadsheet"></i>
                                    MONITORAMENTO CALL CENTER
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/callcenter/sheet/monitoramentoemad"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-earmark-spreadsheet"></i>
                                    MONITORAMENTO CALL CENTER EMAD
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/callcenter/sheet/agendamentopcrgestantes"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-earmark-spreadsheet"></i>
                                    AGENDAMENTO PCR - GESTANTES
                                </Link>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <Link
                                    to="/callcenter/forms/monitoramentoform"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi bi-ui-checks"></i>
                                    MONITORAMENTO CALL CENTER
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/callcenter/forms/monkeypox"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi bi-ui-checks"></i>
                                    MONKEYPOX - NOVOS CASOS
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/callcenter/forms/agendamentopcr"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi bi-ui-checks"></i>
                                    AGENDAMENTO PCR - GESTANTES
                                </Link>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <Link
                                    to="/callcenter/sheet/rdqa2023"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-clipboard2-data-fill"></i>
                                    CALL CENTER RDQA - 2023
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item  dropdown dropend">
                        <a
                            className={
                                activeLink === "captacaorecursos"
                                    ? "nav-link link-body-emphasis dropdown-toggle active"
                                    : "nav-link link-body-emphasis dropdown-toggle"
                            }
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="bi bi-coin ps-3 me-2"></i>
                            <span className="navspan">
                                Captação de Recursos
                            </span>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <Link
                                    to="/captacaorecursos/sheets/rdqa2023"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-clipboard2-data-fill"></i>
                                    CAPTAÇÃO DE RECURSOS RDQA - 2023
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/compras/bi/pagamentosempenho"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-clipboard2-data-fill"></i>
                                    PAGAMENTOS EMPENHOS
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/captacaorecursos/sheets/entradaderecursos"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-clipboard2-data-fill"></i>
                                    ENTRADA DE RECURSOS
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item  dropdown dropend">
                        <a
                            className={
                                activeLink === "cer"
                                    ? "nav-link link-body-emphasis dropdown-toggle active"
                                    : "nav-link link-body-emphasis dropdown-toggle"
                            }
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="bi bi-clipboard2-heart-fill ps-3 me-2"></i>
                            <span className="navspan">CER</span>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <Link
                                    to="/cer/sheets/rdqa2023"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-clipboard2-data-fill"></i>
                                    CER RDQA - 2023
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item  dropdown dropend">
                        <a
                            className={
                                activeLink === "centrodeconvivencia"
                                    ? "nav-link link-body-emphasis dropdown-toggle active"
                                    : "nav-link link-body-emphasis dropdown-toggle"
                            }
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="bi bi-hospital-fill ps-3 me-2"></i>
                            <span className="navspan">
                                Centro de Convivência
                            </span>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <Link
                                    to="/centrodeconvivencia/bi/centrodeconvivencia"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-bar-graph-fill"></i>
                                    CENTRO DE CONVIVÊNCIA
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item  dropdown dropend">
                        <a
                            className={
                                activeLink === "comunicacao"
                                    ? "nav-link link-body-emphasis dropdown-toggle active"
                                    : "nav-link link-body-emphasis dropdown-toggle"
                            }
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="bi bi-camera ps-3 me-2"></i>
                            <span className="navspan">Comunicação</span>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <Link
                                    to="/comunicacao/forms/coberturaeventos"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-ui-checks"></i>
                                    COBERTURA DE EVENTOS, COMUNICAÇÃO E MÍDIAS
                                    SOCIAIS
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item  dropdown dropend">
                        <a
                            className={
                                activeLink === "compras"
                                    ? "nav-link link-body-emphasis dropdown-toggle active"
                                    : "nav-link link-body-emphasis dropdown-toggle"
                            }
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="bi bi-cart-fill ps-3 me-2"></i>
                            <span className="navspan">Compras e Contratos</span>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <Link
                                    to="/compras/page/amoxarifados"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-cart"></i>
                                    FLUXO PARA REQUISIÇÃO DE MERCADORIAS
                                </Link>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>

                            <li>
                                <Link
                                    to="/compras/sheets/acompanhamentocontratos"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-earmark-spreadsheet"></i>
                                    ACOMPANHAMENTO DOS CONTRATOS E ATAS VIGENTES
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/compras/sheets/acompanhamentoprocessos"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-earmark-spreadsheet"></i>
                                    ACOMPANHAMENTO DOS PROCESSOS DE COMPRAS E
                                    CONTRATAÇÕES
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/compras/sheets/fluxorequisicaomercadorias"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-earmark-spreadsheet"></i>
                                    REQUISIÇÃO DE MERCADORIAS
                                </Link>
                            </li>

                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <Link
                                    to="/compras/sheets/rdqa2023"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-clipboard2-data-fill"></i>
                                    COMPRAS E CONTRATOS RDQA - 2023
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item  dropdown dropend">
                        <a
                            className={
                                activeLink === "contabilidade"
                                    ? "nav-link link-body-emphasis dropdown-toggle active"
                                    : "nav-link link-body-emphasis dropdown-toggle"
                            }
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="bi bi-calculator-fill ps-3 me-2"></i>
                            <span className="navspan">Contabilidade</span>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <Link
                                    to="/contabilidade/sheets/rdqa2023"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-clipboard2-data-fill"></i>
                                    CONTABILIDADE RDQA - 2023
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item  dropdown dropend">
                        <a
                            className={
                                activeLink === "controlesocial"
                                    ? "nav-link link-body-emphasis dropdown-toggle active"
                                    : "nav-link link-body-emphasis dropdown-toggle"
                            }
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="bi bi-person-lines-fill ps-3 me-2"></i>
                            <span className="navspan">Controle Social</span>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <Link
                                    to="/controlesocial/sheets/rdqa2023"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-clipboard2-data-fill"></i>
                                    CONTROLE SOCIAL RDQA - 2023
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item  dropdown dropend">
                        <a
                            className={
                                activeLink === "farmacia"
                                    ? "nav-link link-body-emphasis dropdown-toggle active"
                                    : "nav-link link-body-emphasis dropdown-toggle"
                            }
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="bi bi-prescription2 ps-3 me-2"></i>
                            <span className="navspan">Farmácia</span>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <Link
                                    to="/farmacia/sheets/rdqa2023"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-clipboard2-data-fill"></i>
                                    FARMÁCIA RDQA - 2023
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item  dropdown dropend">
                        <a
                            className={
                                activeLink === "gestaosaude"
                                    ? "nav-link link-body-emphasis dropdown-toggle active"
                                    : "nav-link link-body-emphasis dropdown-toggle"
                            }
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="bi bi-file-medical-fill ps-3 me-2"></i>
                            <span className="navspan">Gestão em Saúde</span>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <Link
                                    to="/gestaosaude/sheets/rdqa2023"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-clipboard2-data-fill"></i>
                                    GESTÃO EM SAÚDE RDQA - 2023
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item  dropdown dropend">
                        <a
                            className={
                                activeLink === "judicializacao"
                                    ? "nav-link link-body-emphasis dropdown-toggle active"
                                    : "nav-link link-body-emphasis dropdown-toggle"
                            }
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="bi bi-bank2 ps-3 me-2"></i>
                            <span className="navspan">Judicialização</span>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <Link
                                    to="/judicializacao/sheets/rdqa2023"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-clipboard2-data-fill"></i>
                                    JUDICIALIZAÇÃO RDQA - 2023
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item  dropdown dropend">
                        <a
                            className={
                                activeLink === "laboratoriomunicipal"
                                    ? "nav-link link-body-emphasis dropdown-toggle active"
                                    : "nav-link link-body-emphasis dropdown-toggle"
                            }
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="bi bi-capsule ps-3 me-2"></i>
                            <span className="navspan">
                                Laboratório Municipal
                            </span>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <Link
                                    to="https://drive.google.com/file/d/126hOZgRC82c8GAjQY_Mbj0bIscQRZhy5/view?usp=sharing"
                                    className="dropdown-item"
                                    target="_blank"
                                >
                                    <i className="bi bi-link"></i> 2º TA
                                    Contrato 0186-2022 Icismep
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="https://drive.google.com/file/d/1a-88nmNZnjcP2jgEj4UO9_YSrOeqpLcE/view?usp=sharing"
                                    className="dropdown-item"
                                    target="_blank"
                                >
                                    <i className="bi bi-link"></i> Contrato
                                    0186-2022 ICISMEP
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="https://drive.google.com/file/d/1pZ-OJoQrEVV121VlTsL_eY2KQgHd_epR/view?usp=sharing"
                                    className="dropdown-item"
                                    target="_blank"
                                >
                                    <i className="bi bi-link"></i> 1º TA
                                    Contrato 186-2022 ICISMEP-3
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/laboratoriomunicipal/sheets/rdqa2023"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-clipboard2-data-fill"></i>
                                    LABORATÓRIO MUNICIPAL RDQA - 2023
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item  dropdown dropend">
                        <a
                            className={
                                activeLink === "manutencaounidades"
                                    ? "nav-link link-body-emphasis dropdown-toggle active"
                                    : "nav-link link-body-emphasis dropdown-toggle"
                            }
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="bi bi-wrench-adjustable-circle-fill ps-3 me-2"></i>
                            <span className="navspan">
                                Manutenção de Unidades
                            </span>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <Link
                                    to="/manutencaounidades/sheets/rdqa2023"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-clipboard2-data-fill"></i>
                                    MANUTENÇÃO DE UNIDADES RDQA - 2023
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item  dropdown dropend">
                        <a
                            className={
                                activeLink === "Oftamologia"
                                    ? "nav-link link-body-emphasis dropdown-toggle active"
                                    : "nav-link link-body-emphasis dropdown-toggle"
                            }
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="bi bi-eyeglasses ps-3 me-2"></i>
                            <span className="navspan">Oftamologia</span>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <Link
                                    to="/oftamologia/sheets/rdqa2023"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-clipboard2-data-fill"></i>
                                    OFTAMOLOGIA RDQA - 2023
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item  dropdown dropend">
                        <a
                            className={
                                activeLink === "ouvidoria"
                                    ? "nav-link link-body-emphasis dropdown-toggle active"
                                    : "nav-link link-body-emphasis dropdown-toggle"
                            }
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="bi bi-headset ps-3 me-2"></i>
                            <span className="navspan">Ouvidoria</span>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <Link
                                    to="/ouvidoria/sheets/rdqa2023"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-clipboard2-data-fill"></i>
                                    OUVIDORIA RDQA - 2023
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item  dropdown dropend">
                        <a
                            className={
                                activeLink === "periciaMedica"
                                    ? "nav-link link-body-emphasis dropdown-toggle active"
                                    : "nav-link link-body-emphasis dropdown-toggle"
                            }
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="bi bi-file-earmark-medical ps-3 me-2"></i>
                            <span className="navspan">Perícia Médica</span>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <Link
                                    to="/saudedotrabalhador/sheets/controleateimport"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-earmark-spreadsheet"></i>
                                    CONTROLE DE ATESTADOS - IMPORTAÇÃO
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/saudedotrabalhador/sheets/controleatebd"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-earmark-spreadsheet"></i>
                                    CONTROLE DE ATESTADOS - BANCO DE DADOS 2022
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/saudedotrabalhador/sheets/controleatebd2023"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-earmark-spreadsheet"></i>
                                    CONTROLE DE ATESTADOS - BANCO DE DADOS 2023
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item  dropdown dropend">
                        <a
                            className={
                                activeLink === "recursoshumanos"
                                    ? "nav-link link-body-emphasis dropdown-toggle active"
                                    : "nav-link link-body-emphasis dropdown-toggle"
                            }
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="bi bi-dropbox ps-3 me-2"></i>
                            <span className="navspan">Recursos Humanos</span>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <Link
                                    to="/recursoshumanos/sheets/rdqa2023"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-clipboard2-data-fill"></i>
                                    RECURSOS HUMANOS RDQA - 2023
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/recursoshumanos/sheets/importservice"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-earmark-spreadsheet"></i>
                                    IMPORT SERVICE
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/recursoshumanos/forms/memorando"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-ui-checks"></i>GERADOR
                                    DE MEMORANDO
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/recursoshumanos/forms/oficio"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-ui-checks"></i>GERADOR
                                    DE OFÍCIO
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item  dropdown dropend">
                        <a
                            className={
                                activeLink === "sad"
                                    ? "nav-link link-body-emphasis dropdown-toggle active"
                                    : "nav-link link-body-emphasis dropdown-toggle"
                            }
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="bi bi-houses-fill ps-3 me-2"></i>
                            <span className="navspan">SAD</span>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <Link
                                    to="/sad/sheets/rdqa2023"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-clipboard2-data-fill"></i>
                                    SERV. DE ATENÇÃO DOMIC. SAD RDQA - 2023
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item  dropdown dropend">
                        <a
                            className={
                                activeLink === "saudedotrabalhador"
                                    ? "nav-link link-body-emphasis dropdown-toggle active"
                                    : "nav-link link-body-emphasis dropdown-toggle"
                            }
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="bi bi-heart-pulse-fill ps-3 me-2"></i>
                            <span className="navspan">
                                Saúde do Trabalhador
                            </span>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <Link
                                    to="/saudedotrabalhador/agendas"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-calendar"></i>
                                    AGENDAS
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/saudedotrabalhador/sheets/monitoramentovisatt"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-earmark-spreadsheet"></i>
                                    MONITORAMENTO - VISATT
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/saudedotrabalhador/sheets/notificacoes2122"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-earmark-spreadsheet"></i>
                                    NOTIFICAÇÕES 2021 - 2022
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/saudedotrabalhador/sheets/consolidadonotificacoes"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-earmark-spreadsheet"></i>
                                    CONSOLIDADO NOTIFICAÇÕES 2022
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/saudedotrabalhador/sheets/consolidadonotificacoes2023"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-earmark-spreadsheet"></i>
                                    CONSOLIDADO NOTIFICAÇÕES 2023
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/saudedotrabalhador/sheets/relatoriovapt"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-earmark-spreadsheet"></i>
                                    RELATÓRIO - VAPT
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/saudedotrabalhador/sheets/controleateimport"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-earmark-spreadsheet"></i>
                                    CONTROLE DE ATESTADOS - IMPORTAÇÃO
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/saudedotrabalhador/sheets/controleatebd"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-earmark-spreadsheet"></i>
                                    CONTROLE DE ATESTADOS - BANCO DE DADOS 2022
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/saudedotrabalhador/sheets/controleatebd2023"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-earmark-spreadsheet"></i>
                                    CONTROLE DE ATESTADOS - BANCO DE DADOS 2023
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/saudedotrabalhador/sheets/cadastrodepacientesdb"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-earmark-spreadsheet"></i>
                                    CADASTRO DE PACIENTE DB
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/saudedotrabalhador/forms/cadastrodepacientes"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-ui-checks"></i>CADASTRO
                                    DE USUÁRIOS (PACIENTES)
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/saudedotrabalhador/forms/relatoriovapt"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-ui-checks"></i>RELATÓRIO
                                    - VAPT
                                </Link>
                            </li>

                            <li>
                                <hr className="dropdown-divider" />
                            </li>

                            <li>
                                <Link
                                    to="/saudedotrabalhador/bi/consolidadonotificacoes"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-bar-graph-fill"></i>
                                    CONSOLIDADO NOTIFICAÇÕES 2022
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/saudedotrabalhador/bi/consolidadoatestados"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-bar-graph-fill"></i>
                                    CONSOLIDADO ATESTADOS 2022
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item  dropdown dropend">
                        <a
                            className={
                                activeLink === "ti"
                                    ? "nav-link link-body-emphasis dropdown-toggle active"
                                    : "nav-link link-body-emphasis dropdown-toggle"
                            }
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="bi bi-cpu-fill ps-3 me-2"></i>
                            <span className="navspan">TI</span>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <Link
                                    to="/ti/sheets/controledispositivosti"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-earmark-spreadsheet"></i>
                                    CONTROLE DE DISPOSITIVOS TI
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/ti/sheets/escalasobreavisoti"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-earmark-spreadsheet"></i>
                                    ESCALA SOBREAVISO TI
                                </Link>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <Link
                                    to="/ti/sheets/rdqa2023"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-clipboard2-data-fill"></i>
                                    TI RDQA - 2023
                                </Link>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <Link
                                    to="/ti/forms/solicitacaocompras"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-ui-checks"></i>
                                    SOLICITAÇÃO DE COMPRA TI
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item  dropdown dropend">
                        <a
                            className={
                                activeLink === "tfd"
                                    ? "nav-link link-body-emphasis dropdown-toggle active"
                                    : "nav-link link-body-emphasis dropdown-toggle"
                            }
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="bi bi-truck-front ps-3 me-2"></i>
                            <span className="navspan">Regulação/TFD</span>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <Link
                                    to="/tfd/linksview"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-link"></i> LINKS
                                    VISUALIZAÇÃO
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/tfd/sheets/ceo"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-earmark-spreadsheet"></i>
                                    CEO
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/tfd/sheets/fisiophysio"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-earmark-spreadsheet"></i>
                                    FISIO-PHYSIO
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/tfd/sheets/conntroleentradasesaidas20192020"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-earmark-spreadsheet"></i>
                                    CONTROLE DE ENTRADAS E SAÍDAS 2019/2020
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/tfd/sheets/controledeentradasesaidastfd2023"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-earmark-spreadsheet"></i>
                                    CONTROLE DE ENTRADAS E SAÍDAS 2023
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/tfd/sheets/conntroleentradasesaidasdb"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-earmark-spreadsheet"></i>
                                    CONTROLE DE ENTRADAS E SAÍDAS 2021/2022
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/tfd/sheets/controlegastosmicroregiaotfd"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-earmark-spreadsheet"></i>
                                    CONTROLE DE GASTOS MICRO REGIÃO TFD
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/tfd/sheets/cirurgiaseletivastfd"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-earmark-spreadsheet"></i>
                                    CIRURGIAS ELETIVAS TFD
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/tfd/sheets/fisioambulatoriotfd"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-earmark-spreadsheet"></i>
                                    AMBULATÓRIO DE FISIOTERAPIA TFD
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/tfd/sheets/demandacatarata"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-earmark-spreadsheet"></i>
                                    DEMANDA CATARATA TFD
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/tfd/sheets/conntroleentradasesaidas20241s"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-earmark-spreadsheet"></i>
                                    CONTROLE DE ENTRADAS E SAÍDAS 2024
                                </Link>
                            </li>

                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <Link
                                    to="/tfd/forms/ceo"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-ui-checks"></i>
                                    FORMULÁRIO CEO
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/tfd/forms/conntroleentradasesaidas20241s"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-ui-checks"></i>
                                    FORMULÁRIO DE ENTRADAS E SAÍDAS 2024
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/tfd/forms/geradordememorandotfd"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-ui-checks"></i>
                                    GERADOR DE MEMORANDO TFD
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/tfd/forms/geradordeoficiotfd"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-ui-checks"></i>
                                    GERADOR DE OFÍCIO TFD
                                </Link>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <Link
                                    to="/regulacaoauditoria/sheets/rdqa2023"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-clipboard2-data-fill"></i>
                                    REGULAÇÃO E AUDITORIA RDQA - 2023
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item  dropdown dropend">
                        <a
                            className={
                                activeLink === "transportesanitario"
                                    ? "nav-link link-body-emphasis dropdown-toggle active"
                                    : "nav-link link-body-emphasis dropdown-toggle"
                            }
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="bi bi-truck ps-3 me-2"></i>
                            <span className="navspan">Transporte em Saúde</span>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <Link
                                    to="https://drive.google.com/file/d/1VuGPG5twS8q4Vl4WsSzo3XknliKIQEtp/view?usp=sharing"
                                    className="dropdown-item"
                                    target="_blank"
                                >
                                    <i className="bi bi-link"></i> PROPOSTA
                                    TRANSPORTE
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="https://drive.google.com/file/d/10UXzqGtMTayEBeyOYX95j9iH-UZMtC-L/view?usp=sharing"
                                    className="dropdown-item"
                                    target="_blank"
                                >
                                    <i className="bi bi-link"></i> CONTRATO
                                    0001-2024 ICISMEP
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/tfd/sheets/bdpassagens"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-earmark-spreadsheet"></i>
                                    BD CADASTRO - PASSAGENS
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/tfd/sheets/basedecadastro2"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-earmark-spreadsheet"></i>
                                    BASE DE CADASTRO 2
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/tfd/sheets/basedecadastro3"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-earmark-spreadsheet"></i>
                                    BASE DE CADASTRO 3
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/tfd/sheets/basedecadastro4"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-earmark-spreadsheet"></i>
                                    BASE DE CADASTRO 4
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/tfd/sheets/basedecadastro5"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-earmark-spreadsheet"></i>
                                    BASE DE CADASTRO 5
                                </Link>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <Link
                                    to="/tfd/forms/cadastrodepacientes"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-ui-checks"></i>
                                    CADASTRO DE PACIENTES
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/tfd/forms/cadastrodeacompanhante"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-ui-checks"></i>
                                    CADASTRO DE ACOMPANHANTES
                                </Link>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <Link
                                    to="/transportesanitario/sheets/rdqa2023"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-clipboard2-data-fill"></i>
                                    TRANSPORTE SANITÁRIO RDQA - 2023
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item  dropdown dropend">
                        <a
                            className={
                                activeLink === "upa"
                                    ? "nav-link link-body-emphasis dropdown-toggle active"
                                    : "nav-link link-body-emphasis dropdown-toggle"
                            }
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="bi bi-h-square-fill ps-3 me-2"></i>
                            <span className="navspan">UPA</span>
                        </a>

                        <ul className="dropdown-menu">
                            <li>
                                <Link
                                    to="https://sites.google.com/view/upa-24h/in%C3%ADcio"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-earmark-word-fill"></i>{" "}
                                    PÁGINA UPA
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="https://drive.google.com/file/d/1fqko6oSovPuxwSaAzyEbUrk9R_CZJ46q/view?usp=sharing"
                                    className="dropdown-item"
                                    target="_blank"
                                >
                                    <i className="bi bi-link"></i> CONTRATO DE
                                    PROGRAMA 82/2023 UPA 24 HRS
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="https://drive.google.com/file/d/1nGlGQEEHTBXGwu4kFqxDaIfnhJht1NF1/view?usp=sharing"
                                    className="dropdown-item"
                                    target="_blank"
                                >
                                    <i className="bi bi-link"></i> PROPOSTA UPA
                                </Link>
                            </li>
                            <Link
                                to="/upa/sheets/custosoperacionais2023"
                                className="dropdown-item"
                            >
                                <i className="bi bi-file-earmark-spreadsheet"></i>
                                CUSTOS OPERACIONAIS - 2023
                            </Link>
                            <li>
                                <Link
                                    to="/ti/sheets/escalasobreavisoti"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-earmark-spreadsheet"></i>
                                    ESCALA SOBREAVISO TI
                                </Link>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <Link
                                    to="/upa/sheets/rdqa2023"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-clipboard2-data-fill"></i>
                                    UPA RDQA - 2023
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item  dropdown dropend">
                        <a
                            className={
                                activeLink === "vigilanciasaude"
                                    ? "nav-link link-body-emphasis dropdown-toggle active"
                                    : "nav-link link-body-emphasis dropdown-toggle"
                            }
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="bi bi-postcard-heart-fill ps-3 me-2"></i>
                            <span className="navspan">Vigilância em Saúde</span>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <Link
                                    to="/vigilanciasaude/sheets/rdqa2023"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-clipboard2-data-fill"></i>
                                    VIGILÂNCIA EM SAÚDE RDQA - 2023
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item  dropdown dropend">
                        <a
                            className={
                                activeLink === "vigilanciaepidemiologica"
                                    ? "nav-link link-body-emphasis dropdown-toggle active"
                                    : "nav-link link-body-emphasis dropdown-toggle"
                            }
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="bi bi-virus ps-3 me-2"></i>
                            <span className="navspan">
                                Vigilância Epidemiológica
                            </span>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <Link
                                    to="/vigilanciaepidemiologica/bi/consolidadocovid"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-bar-graph-fill"></i>
                                    CONSOLIDADO - COVID
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/vigilanciaepidemiologica/bi/relatoriofocosdengue"
                                    className="dropdown-item"
                                >
                                    <i className="bi bi-file-bar-graph-fill"></i>
                                    RELATÓRIO DE FOCOS - DENGUE
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
                <hr />
                <div className="dropdown">
                    <a
                        href="#"
                        className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <img
                            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                            alt=""
                            width="32"
                            height="32"
                            className="rounded-circle me-2"
                        />
                        <strong className="navspan">{nomeUsuario}</strong>
                    </a>
                    <ul className="dropdown-menu text-small shadow">
                        <li>
                            <Link to="/configuracao" className="dropdown-item">
                                <i className="bi bi-gear ps-3"></i>{" "}
                                Configurações
                            </Link>
                        </li>
                        <li>
                            <a
                                className="dropdown-item"
                                href="#"
                                onClick={(e) =>
                                    Swal.fire(
                                        "Desenvolvido por Departamento de Tecnologia da Informação da Secretaria de Saúde",
                                        "\nRamal: 4362 Whatsapp: (37) 9976-3957 helpdesk-sms@parademinas.mg.gov.br"
                                    )
                                }
                            >
                                <i className="bi bi-chat-dots ps-3"></i> Suporte
                            </a>
                        </li>
                        <li>
                            <a
                                className="dropdown-item"
                                href="#"
                                onClick={(e) => sair()}
                            >
                                <i className="bi bi-box-arrow-in-left ps-3"></i>{" "}
                                Sair
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SideNav;
