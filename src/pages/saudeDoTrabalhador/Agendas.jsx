import { Link } from "react-router-dom";
import SideNav from "../sidenav/SideNav";

function AgendasSaudeDoTrabalhador() {
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

    return (
        <div>
            <SideNav activeLink={"saudedotrabalhador"} />
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
                                    CONSOLIDADO - AGENDAS
                                </div>
                            </div>
                            <Link to="/saudedotrabalhador/agendas/consolidadoagendas">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                    CADASTRO DE USUÁRIOS (PACIENTES)
                                </div>
                            </div>
                            <Link to="/saudedotrabalhador/agendas/cadastrodepacientes">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                    BRUNA - AGENDA 2023
                                </div>
                            </div>
                            <Link to="/saudedotrabalhador/agendas/bruna2023">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                    BRUNA - AGENDA 2024
                                </div>
                            </div>
                            <Link to="/saudedotrabalhador/agendas/bruna2024">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                    FERNANDA - AGENDA 2023
                                </div>
                            </div>
                            <Link to="/saudedotrabalhador/agendas/fernanda2023">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                    GRAZIELA - AGENDA 2023
                                </div>
                            </div>
                            <Link to="/saudedotrabalhador/agendas/graziela2023">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                    GRAZIELA - AGENDA 2024
                                </div>
                            </div>
                            <Link to="/saudedotrabalhador/agendas/graziela2024">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                    LUCIENE - AGENDA 2023
                                </div>
                            </div>
                            <Link to="/saudedotrabalhador/agendas/luciene2023">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                    LUCIENE - AGENDA 2024
                                </div>
                            </div>
                            <Link to="/saudedotrabalhador/agendas/luciene2024">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                    GISLAYNE - AGENDA 2023
                                </div>
                            </div>
                            <Link to="/saudedotrabalhador/agendas/gislayne2023">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                    NATIELE - AGENDA 2024
                                </div>
                            </div>
                            <Link to="/saudedotrabalhador/agendas/psicologo2024">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                    DAVI - AGENDA 2024
                                </div>
                            </div>
                            <Link to="/saudedotrabalhador/agendas/segundopsicologo2024">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                    RENATA - AGENDA 2023
                                </div>
                            </div>
                            <Link to="/saudedotrabalhador/agendas/renata2023">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                    RENATA - AGENDA 2024
                                </div>
                            </div>
                            <Link to="/saudedotrabalhador/agendas/renata2024">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                    SIRLENE - AGENDA 2023
                                </div>
                            </div>
                            <Link to="/saudedotrabalhador/agendas/sirlene2023">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                    SIRLENE - AGENDA 2024
                                </div>
                            </div>
                            <Link to="/saudedotrabalhador/agendas/sirlene2024">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default AgendasSaudeDoTrabalhador;
