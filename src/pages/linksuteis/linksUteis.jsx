import { Link } from "react-router-dom";
import SideNav from "../sidenav/SideNav";
import "./linksUteis.css";
import "animate.css";

function LinksUteis() {
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

    return (
        <div>
            <SideNav activeLink={"linksuteis"} />
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
                    className="row ms-4"
                    style={{ position: "relative", zIndex: "1" }}
                >
                    <div className="col mt-3">
                        <div
                            className="card p-3 animate__animated animate__pulse animate__faster"
                            style={{ width: "18rem", height: "14rem" }}
                        >
                            <img
                                src="https://img.freepik.com/fotos-gratis/3d-render-smartphone-em-maos-negras-com-dedo_107791-17739.jpg?w=826&t=st=1687787730~exp=1687788330~hmac=2de27553bba83e55fe6ebea02d339aa7e832b7d34549f4ce83a99e567517b489"
                                className="card-img-top"
                                style={{ width: "5rem" }}
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">
                                    Coordenadores RAS Telefones e Ramais
                                    Unidades
                                </h5>
                                <a
                                    href="https://drive.google.com/file/d/1r6DGxrDA9pB9X5ZZOu2NEj5zAfDuYjdp/view?usp=sharing"
                                    className="card-link"
                                    target="blank"
                                >
                                    Link lista
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
                                src="http://sidim.parademinas.mg.gov.br/saude/Imagens/SidimLogo.png"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">Sistema Sidim</h5>
                                <a
                                    href="http://sidim.intranet.pref/saude/"
                                    className="card-link"
                                    target="blank"
                                >
                                    Link interno
                                </a>
                                <a
                                    href="http://sidim.parademinas.mg.gov.br/saude/"
                                    className="card-link"
                                    target="blank"
                                >
                                    Link externo
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
                                src="data:image/png;base64,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"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">Henry Ponto</h5>

                                <a
                                    href="https://app.henry.com.br/henryponto/login.jsf"
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
                                src="data:image/png;base64,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"
                                className="card-img-top"
                                alt="..."
                                style={{ width: "6rem" }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">Contra-cheque</h5>

                                <a
                                    href="https://login.betha.cloud/servicelogin/login.faces?app=1c8315b6-1fb9-4a4c-b545-9f585d9fbd10&continue=dUt3pl7deSJcIfYbNgSBvyszrVx7CtLXMQ8SyjaTDIyAxIspOkXzLADGEjv59FmVkDvvSbpRV9h8ufTnTBpXO7RI651ay-4WmGKXeVTIjMkChFiJp09kXAw470h7bbL8oUHjYCAXMXlECtofVqS6JH_AsUaEICqRqBtvHR3H6EaV7xj-zMFKvctuq3OpBd0D2bm7ZGKL5FW87THOHVMFfKa78RGLE1rHG4-C9orarg3P6FWJxPv3ECi_-6l9Bk1p6H2lZLFDkaYqMaknTip-yIqNvEXBB5m_rT9djaI6-xVfpbEl6XvGlmmv0Ys5W3G800KXcdR3de07j3Zd4EffI5RW-_2EfDE5dS7z1UqPjzCG1GR7_U0Qh-_a_IKV5zzIe3RelIaxIAMqGnBWm1QcSGMqD_qvzLN4c0OqZvSoi2TkmEkXaMw5g2AK3hroF5r1lx0Z-q5JR9_pZ5QKRCeLErzjRO7V5iy57tVTQsEmgO7jmOvo4M1PJ03hFP4cj3shMhnfeZnzKu015H9xdnO5nyTcSfXRLopmPA7ptqfCFGTnTKT4LmTmv1lTtpmNOHjWWA0zbpaY2nt_bdTPxq0fJbSl62i6LHIQ&mobile=false"
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
                                src="https://img.freepik.com/fotos-gratis/3d-render-smartphone-em-maos-negras-com-dedo_107791-17739.jpg?w=826&t=st=1687787730~exp=1687788330~hmac=2de27553bba83e55fe6ebea02d339aa7e832b7d34549f4ce83a99e567517b489"
                                className="card-img-top"
                                alt="..."
                                style={{ width: "6rem" }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">Lista telefônica</h5>

                                <a
                                    href="https://172.18.3.31/lista/"
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
                                src="https://esus.parademinas.mg.gov.br/static/media/esus.c7bb5fe4.svg"
                                className="card-img-top"
                                alt="..."
                                style={{ width: "15rem" }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">ESUS</h5>

                                <a
                                    href="http://esus.intranet.pref:8080/"
                                    className="card-link"
                                    target="blank"
                                >
                                    Link interno
                                </a>
                                <a
                                    href="https://esus.parademinas.mg.gov.br/"
                                    className="card-link"
                                    target="blank"
                                >
                                    Link externo
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
                                src="https://leismunicipais.com.br/img/cidades/mg/para-de-minas.png"
                                className="card-img-top"
                                alt="..."
                                style={{ width: "5rem" }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">
                                    Memorando e Ofício
                                </h5>

                                <Link
                                    to="/recursoshumanos/forms/memorando"
                                    className="dropdown-item "
                                >
                                    <i className="card-link"></i>
                                    Link Memorando
                                </Link>
                                <Link
                                    to="/recursoshumanos/forms/oficio"
                                    className="dropdown-item "
                                >
                                    <i className="card-link"></i>
                                    Link Ofício
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col mt-3">
                        <div
                            className="card p-3 animate__animated animate__pulse animate__faster"
                            style={{ width: "18rem", height: "14rem" }}
                        >
                            <img
                                src="https://leismunicipais.com.br/img/cidades/mg/para-de-minas.png"
                                className="card-img-top"
                                alt="..."
                                style={{ width: "5rem" }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">
                                    Formulário - Autorização de Férias
                                </h5>
                                <a
                                    href="https://drive.google.com/file/d/1BavV6CTL7nSmB-TSksZcUlhaWGQY77Qe/view?usp=sharing"
                                    className="card-link"
                                    target="blank"
                                >
                                    Link Formulário
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
                                src="https://leismunicipais.com.br/img/cidades/mg/para-de-minas.png"
                                className="card-img-top"
                                alt="..."
                                style={{ width: "4rem" }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">
                                    Formulário - Encaminhamento Entrelaços
                                </h5>
                                <Link
                                    to="/entrelacos/forms/encaminhamentos"
                                    className="dropdown-item "
                                >
                                    <i className="card-link"></i>
                                    Link de acesso
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LinksUteis;
