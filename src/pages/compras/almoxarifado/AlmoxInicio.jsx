import { Link } from "react-router-dom";
import SideNav from "../../sidenav/SideNav";

function AlmoxarifadoComprasInicio() {
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
            <SideNav activeLink={"compras"} />
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
                                    ALMOXARIFADO CENTRAL
                                </div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/almoxarifadocentral">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                    AMBULATÓRIO DE FISIOTERAPIA
                                </div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/ambulatoriofisio">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">AME</div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/ame">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                    ALTO SANTOS DUMONT
                                </div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/altosantosdumont">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                    ASSISTÊNCIA À SAÚDE
                                </div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/assistenciasaude">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                    ASSISTÊNCIA À SAÚDE / PACIENTES
                                </div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/assistenciasaudepacientesalmox">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                    ASCENSÃO / BOM JESUS
                                </div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/ascensao">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">ATENÇÃO PRIMÁRIA</div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/aps">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                    ATENÇÃO PRIMÁRIA EVENTOS
                                </div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/apseventos">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                    BAIXO SANTOS DUMONT
                                </div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/baixosantosdumont">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">BELVEDERE</div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/belvedere">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">CAIC</div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/caic">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">CAPS AD</div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/capsad">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">CAPS AD EVENTOS</div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/capsadeventos">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">CARIOCA</div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/carioca">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">CCZ</div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/ccz">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                    CENTRO DE CONVIVÊNCIA
                                </div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/centroconvivencia">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                    CENTRO DE CONVIVÊNCIA OFICINA
                                </div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/centroconvivenciaoficina">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">CEO</div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/ceo">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">CERSAM</div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/cersam">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                    CONSELHO MUNICIPAL
                                </div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/concelhomunicipal">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">DOM BOSCO</div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/dombosco">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">ENTRELAÇOS</div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/entrelacos">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">FARMÁCIA</div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/farmacia">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">GRÃO PARÁ</div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/graopara">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">JOÃO PAULO II</div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/joaopaulo">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">JK</div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/jk">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">LGBT</div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/lgbt">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">MANUTENÇÃO</div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/manutencao">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                    NOSSA SENHORA DAS GRAÇAS
                                </div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/nsgracas">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                    NOSSA SENHORA DA PIEDADE
                                </div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/nspiedade">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                    NOSSA SENHORA DE FÁTIMA
                                </div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/nsfatima">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                    OUVIDORIA / PERÍCIA MÉDICA
                                </div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/ouvidoriapericia">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">CIDADE OZANAM</div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/ozanam">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">PADRE LIBÉRIO</div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/padreliberio">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">PARAÍSO</div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/paraiso">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">PIO CANEDO</div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/piocanedo">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                    POVOADO DE MEIRELES
                                </div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/povoadomeireles">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">PROMOÇÃO DA SAÚDE</div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/promocaosaude">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                    PROMOÇÃO DA SAÚDE EVENTOS
                                </div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/promocaosaudeeventos">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">PROVIDÊNCIA</div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/providencia">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">RAPS</div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/raps">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                    RESIDÊNCIA TERAPÊUTICA
                                </div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/residenciaterapeutica">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">SAD</div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/sad">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">SÃO CRISTÓVÃO</div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/saocristovao">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">SÃO PEDRO</div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/saopedro">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                    SAÚDE DO TRABALHADOR
                                </div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/saudedotrabalhador">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">SAÚDE BUCAL</div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/saudebucal">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">SENTINELA</div>
                            </div>
                            <Link to="/compras/sheets/sentinela">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">SERRA VERDE</div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/serraverde">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">SERINGUEIRAS</div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/seringuiras">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">TRANSPORTE</div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/transporte">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">TAVARES</div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/tavares">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">TFD</div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/tfd">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">TI</div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/ti">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">TORNEIROS</div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/torneiros">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">UPA MATERIAIS</div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/upamateriais">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">UPA MEDICAMENTOS</div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/upa">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                    VIGILÂNCIA AMBIENTAL
                                </div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/vigilanciaambiental">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                    VIGILÂNCIA SANITÁRIA
                                </div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/vigilanciasanitaria">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                    VIGILÂNCIA EM SAÚDE
                                </div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/vigilanciasaude">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                    VIGILÂNCIA EPIDEMIOLÓGICA
                                </div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/vigilanciaepidemiologica">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                    VILA FERREIRA / RECANTO
                                </div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/recantovilaferreira">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">WALTER MARTINS</div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/waltermartins">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                    ALTOS SANTOS DUMONT ODONTO
                                </div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/altosantosdumontodonto">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">ASCENÇÃO ODONTO</div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/ascencaoodonto">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">BELVEDERE ODONTO</div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/belvedereodonto">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">CAIC ODONTO</div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/caicodonto">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">DOM BOSCO ODONTO</div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/domboscoodonto">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">JK ODONTO</div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/jkodonto">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                    JOAO PAULO II ODONTO
                                </div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/joaopauloodonto">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                    NOSSA SENHORA DE FÁTIMA ODONTO
                                </div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/nsfatimaodonto">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                    PADRE LIBERIO ODONTO
                                </div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/padreliberioodonto">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">PARAÍSO ODONTO</div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/paraisoodonto">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                    PROVIDÊNCIA ODONTO
                                </div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/providenciaodonto">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">RECANTO ODONTO</div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/recantoodonto">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                    SÃO CRISTÓVÃO ODONTO
                                </div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/saocristovaoodonto">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">SÃO LUÍZ ODONTO</div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/saoluizodonto">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                    SERRA VERDE ODONTO
                                </div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/serraverdeodonto">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">TAVARES ODONTO</div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/tavaresodonto">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">TORNEIROS ODONTO</div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/torneirosodonto">
                                <span className="badge bg-primary rounded-pill">
                                    Abrir
                                </span>
                            </Link>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                    VILA FERREIRA ODONTO
                                </div>
                            </div>
                            <Link to="/compras/sheets/amoxarifados/vilaferreiraodonto">
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

export default AlmoxarifadoComprasInicio;
