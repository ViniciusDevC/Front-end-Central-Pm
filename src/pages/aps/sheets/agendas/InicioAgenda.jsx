import { Link, useNavigate } from "react-router-dom";
import SideNav from "../../../sidenav/SideNav";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

function InicioAgenda(prop) {
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
            <SideNav activeLink={"aps"} />
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
                <ol className="list-group list-group-numbered mt-3">
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">
                                UBS ALTO SANTOS DUMONT
                            </div>
                        </div>

                        <Link
                            className="badge bg-primary rounded-pill"
                            to={{
                                pathname: "/aps/sheets/agenda",
                            }}
                            state={{
                                link: "https://docs.google.com/spreadsheets/d/1VwiZNYcdtiXDBHEvstw4asTJq-t_oFupqCPjz7ce9dw/edit?rm=demo",
                                permissao: "AltoSantosDumontAgenda",
                            }}
                        >
                            GERAR FOLHA DE ROSTO
                        </Link>
                        <Link
                            className="badge bg-success rounded-pill"
                            to={{
                                pathname: "/aps/sheets/agenda",
                            }}
                            state={{
                                link: "https://docs.google.com/spreadsheets/d/1BtmSr-OQpPCe3bTs47qOJbBikoaZ-dek2OZ6vYNSc_Q/edit?rm=demo",
                                permissao: "AltoSantosDumontAgenda",
                            }}
                        >
                            AGENDAS 2023
                        </Link>
                        <Link
                            className="badge bg-info rounded-pill"
                            to={{
                                pathname: "/aps/sheets/agenda",
                            }}
                            state={{
                                link: "https://docs.google.com/spreadsheets/d/17V3FVysR0FdWubTmKVv5RqivdRRKKAjqWggeIJDhbIk/edit?rm=demo",
                                permissao: "AltoSantosDumontAgenda",
                            }}
                        >
                            AGENDAS 2024
                        </Link>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">
                                UBS BAIXO SANTOS DUMONT
                            </div>
                        </div>

                        <Link
                            className="badge bg-primary rounded-pill"
                            to={{
                                pathname: "/aps/sheets/agenda",
                            }}
                            state={{
                                link: "https://docs.google.com/spreadsheets/d/1Ut8Srwow1SE-_qNacVvqBuGhNX9p6OhqKZAitdCBBtM/edit?rm=demo",
                                permissao: "BaixoSantosDumontAgenda",
                            }}
                        >
                            GERAR FOLHA DE ROSTO
                        </Link>
                        <Link
                            className="badge bg-success rounded-pill"
                            to={{
                                pathname: "/aps/sheets/agenda",
                            }}
                            state={{
                                link: "https://docs.google.com/spreadsheets/d/1gPIBDC_OTHh5pSeRPJQjTzUJXDGWjtnFM9IsQ0jRHvg/edit?rm=demo",
                                permissao: "BaixoSantosDumontAgenda",
                            }}
                        >
                            AGENDAS 2023
                        </Link>
                        <Link
                            className="badge bg-info rounded-pill"
                            to={{
                                pathname: "/aps/sheets/agenda",
                            }}
                            state={{
                                link: "https://docs.google.com/spreadsheets/d/1m02fjhX5NASe3ozFEZ7JAa2bpTKnDJfQWlM9RpkW468/edit?rm=demo",
                                permissao: "BaixoSantosDumontAgenda",
                            }}
                        >
                            AGENDAS 2024
                        </Link>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">UBS UBS BELVEDERE</div>
                        </div>

                        <Link
                            className="badge bg-primary rounded-pill"
                            to={{
                                pathname: "/aps/sheets/agenda",
                            }}
                            state={{
                                link: "https://docs.google.com/spreadsheets/d/1xWsaLauOAOLEwPG467-QVi4Byy_K7eEBoi_LrYbwr1U/edit?rm=demo",
                                permissao: "BelvedereAgenda",
                            }}
                        >
                            GERAR FOLHA DE ROSTO
                        </Link>
                        <Link
                            className="badge bg-success rounded-pill"
                            to={{
                                pathname: "/aps/sheets/agenda",
                            }}
                            state={{
                                link: "https://docs.google.com/spreadsheets/d/1JIjzPWcY1YY648FPkSzB7JF3YfPBJnIMZLJAAxxdcOk/edit?rm=demo",
                                permissao: "BelvedereAgenda",
                            }}
                        >
                            AGENDAS 2023
                        </Link>
                        <Link
                            className="badge bg-info rounded-pill"
                            to={{
                                pathname: "/aps/sheets/agenda",
                            }}
                            state={{
                                link: "https://docs.google.com/spreadsheets/d/18Uns8Px9jY2HSHUJJEstoWUjxc53uifQmFKxgHi7hxA/edit?rm=demo",
                                permissao: "BelvedereAgenda",
                            }}
                        >
                            AGENDAS 2024
                        </Link>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">UBS CAIC</div>
                        </div>

                        <Link
                            className="badge bg-primary rounded-pill"
                            to={{
                                pathname: "/aps/sheets/agenda",
                            }}
                            state={{
                                link: "https://docs.google.com/spreadsheets/d/1Ai_kyxKPJAN0jAlW_p33HhAHw3_xoaVbYDk_YF3rphE/edit?rm=demo",
                                permissao: "CaicAgenda",
                            }}
                        >
                            GERAR FOLHA DE ROSTO
                        </Link>
                        <Link
                            className="badge bg-success rounded-pill"
                            to={{
                                pathname: "/aps/sheets/agenda",
                            }}
                            state={{
                                link: "https://docs.google.com/spreadsheets/d/1oUu9MQry3OUTgfJeEVYc9RJErQf2lUEHDLtkx3m4SXM/edit?rm=demo",
                                permissao: "CaicAgenda",
                            }}
                        >
                            AGENDAS 2023
                        </Link>
                        <Link
                            className="badge bg-info rounded-pill"
                            to={{
                                pathname: "/aps/sheets/agenda",
                            }}
                            state={{
                                link: "https://docs.google.com/spreadsheets/d/18lfkQ_PFTaXahbl7cmR8w4KMly-jCtyo-8gsfXsc5Is/edit?rm=demo",
                                permissao: "CaicAgenda",
                            }}
                        >
                            AGENDAS 2024
                        </Link>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">UBS DOM BOSCO</div>
                        </div>

                        <Link
                            className="badge bg-primary rounded-pill"
                            to={{
                                pathname: "/aps/sheets/agenda",
                            }}
                            state={{
                                link: "https://docs.google.com/spreadsheets/d/171KalBs7AOB6MTY1Jsq24zkfXvQulkpZS-pVOG7HPRM/edit?rm=demo",
                                permissao: "DomBoscoAgenda",
                            }}
                        >
                            GERAR FOLHA DE ROSTO
                        </Link>
                        <Link
                            className="badge bg-success rounded-pill"
                            to={{
                                pathname: "/aps/sheets/agenda",
                            }}
                            state={{
                                link: "https://docs.google.com/spreadsheets/d/1l-5jhQ0m1LBsC-pbrdGorVn6lTqZvrk4UIA0Atnc2Qk/edit?rm=demo",
                                permissao: "DomBoscoAgenda",
                            }}
                        >
                            AGENDAS 2023
                        </Link>
                        <Link
                            className="badge bg-info rounded-pill"
                            to={{
                                pathname: "/aps/sheets/agenda",
                            }}
                            state={{
                                link: "https://docs.google.com/spreadsheets/d/1CyPyERPbvIl7npK1eRgG9CX_kaZS7r3Pq7XZlgs1jwE/edit?rm=demo",
                                permissao: "DomBoscoAgenda",
                            }}
                        >
                            AGENDAS 2024
                        </Link>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">UBS GRÃO PARA</div>
                        </div>

                        <Link
                            className="badge bg-primary rounded-pill"
                            to={{
                                pathname: "/aps/sheets/agenda",
                            }}
                            state={{
                                link: "https://docs.google.com/spreadsheets/d/1oKJJ5NexenKUSuxG35K_gT1-PbNj4loS8ecZXoymi4s/edit?rm=demo",
                                permissao: "GraoParaAgenda",
                            }}
                        >
                            GERAR FOLHA DE ROSTO
                        </Link>
                        <Link
                            className="badge bg-success rounded-pill"
                            to={{
                                pathname: "/aps/sheets/agenda",
                            }}
                            state={{
                                link: "https://docs.google.com/spreadsheets/d/1PWKwKtcXWqaRBKsKPea0vVL5IS79RuLK-dOmZUgFI6I/edit?rm=demo",
                                permissao: "GraoParaAgenda",
                            }}
                        >
                            AGENDAS 2023
                        </Link>
                        <Link
                            className="badge bg-info rounded-pill"
                            to={{
                                pathname: "/aps/sheets/agenda",
                            }}
                            state={{
                                link: "https://docs.google.com/spreadsheets/d/1K2UtfsPlTYhP_mysYjZKC3Q0PahpBF6MOUpJ5KA-FsI/edit?rm=demo",
                                permissao: "GraoParaAgenda",
                            }}
                        >
                            AGENDAS 2024
                        </Link>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">UBS JOÃO PAULO</div>
                        </div>

                        <Link
                            className="badge bg-primary rounded-pill"
                            to={{
                                pathname: "/aps/sheets/agenda",
                            }}
                            state={{
                                link: "https://docs.google.com/spreadsheets/d/1er3urqZyuDrOxburBJ45Fx15WhHmdJo312uO4OZiVPE/edit?rm=demo",
                                permissao: "JoaoPauloAgenda",
                            }}
                        >
                            GERAR FOLHA DE ROSTO
                        </Link>
                        <Link
                            className="badge bg-success rounded-pill"
                            to={{
                                pathname: "/aps/sheets/agenda",
                            }}
                            state={{
                                link: "https://docs.google.com/spreadsheets/d/1TI1KBS3eAPFjeYGdkQeZ0zdk0YWDSTY4s2yrNVOhz2A/edit?rm=demo",
                                permissao: "JoaoPauloAgenda",
                            }}
                        >
                            AGENDAS 2023
                        </Link>
                        <Link
                            className="badge bg-info rounded-pill"
                            to={{
                                pathname: "/aps/sheets/agenda",
                            }}
                            state={{
                                link: "https://docs.google.com/spreadsheets/d/1PRujoZAPrPNe0R6rVk3fWJxVKn0lzQsEdyzndXi1J2I/edit?rm=demo",
                                permissao: "JoaoPauloAgenda",
                            }}
                        >
                            AGENDAS 2024
                        </Link>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">UBS N.S FÁTIMA</div>
                        </div>

                        <Link
                            className="badge bg-primary rounded-pill"
                            to={{
                                pathname: "/aps/sheets/agenda",
                            }}
                            state={{
                                link: "https://docs.google.com/spreadsheets/d/1TItTw8KdnSLVM8e_37ws2Wrl9yp-Dm1b7Ni7WB0Psdg/edit?rm=demo",
                                permissao: "NsFatimaAgenda",
                            }}
                        >
                            GERAR FOLHA DE ROSTO
                        </Link>
                        <Link
                            className="badge bg-success rounded-pill"
                            to={{
                                pathname: "/aps/sheets/agenda",
                            }}
                            state={{
                                link: "https://docs.google.com/spreadsheets/d/1hIV9wo7aPUYErdYbQ-uWj-jdEoSBN6gV3Uvr7nSSdkE/edit?rm=demo",
                                permissao: "NsFatimaAgenda",
                            }}
                        >
                            AGENDAS 2023
                        </Link>
                        <Link
                            className="badge bg-info rounded-pill"
                            to={{
                                pathname: "/aps/sheets/agenda",
                            }}
                            state={{
                                link: "https://docs.google.com/spreadsheets/d/1_YJqiG_XL8xF5gdYyHyD7J5034Vb848nGXE688u2eTE/edit?rm=demo",
                                permissao: "NsFatimaAgenda",
                            }}
                        >
                            AGENDAS 2024
                        </Link>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">UBS N.S GRAÇAS</div>
                        </div>

                        <Link
                            className="badge bg-primary rounded-pill"
                            to={{
                                pathname: "/aps/sheets/agenda",
                            }}
                            state={{
                                link: "https://docs.google.com/spreadsheets/d/1VAqbWp1tmIEZUAS8ipq9UkX4Nu5aSdlCm3ttd9dCV-Y/edit?rm=demo",
                                permissao: "NsGracasAgenda",
                            }}
                        >
                            GERAR FOLHA DE ROSTO
                        </Link>
                        <Link
                            className="badge bg-success rounded-pill"
                            to={{
                                pathname: "/aps/sheets/agenda",
                            }}
                            state={{
                                link: "https://docs.google.com/spreadsheets/d/16j_g0fCtHIx8Q3AkuL6cxQ8lwxS6Z65J96hXD1sS_2Y/edit?rm=demo",
                                permissao: "NsGracasAgenda",
                            }}
                        >
                            AGENDAS 2023
                        </Link>
                        <Link
                            className="badge bg-info rounded-pill"
                            to={{
                                pathname: "/aps/sheets/agenda",
                            }}
                            state={{
                                link: "https://docs.google.com/spreadsheets/d/1oi087C4UVBemXnGAlJkOatuH1TYPSdTFFgOhxQaXD6w/edit?rm=demo",
                                permissao: "NsGracasAgenda",
                            }}
                        >
                            AGENDAS 2024
                        </Link>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">UBS PADRE LIBERIO</div>
                        </div>

                        <Link
                            className="badge bg-primary rounded-pill"
                            to={{
                                pathname: "/aps/sheets/agenda",
                            }}
                            state={{
                                link: "https://docs.google.com/spreadsheets/d/1ZRx4qVjX-ke2wWNNRxw4zVx5z8lS4j0oolp86XJnUu0/edit?rm=demo",
                                permissao: "PadreLiberioAgenda",
                            }}
                        >
                            GERAR FOLHA DE ROSTO
                        </Link>
                        <Link
                            className="badge bg-success rounded-pill"
                            to={{
                                pathname: "/aps/sheets/agenda",
                            }}
                            state={{
                                link: "https://docs.google.com/spreadsheets/d/1wOghbMWeLACH_KlqMnxkNLfKF50mpDyQhFDCrECS7Bg/edit?rm=demo",
                                permissao: "PadreLiberioAgenda",
                            }}
                        >
                            AGENDAS 2023
                        </Link>
                        <Link
                            className="badge bg-info rounded-pill"
                            to={{
                                pathname: "/aps/sheets/agenda",
                            }}
                            state={{
                                link: "https://docs.google.com/spreadsheets/d/1deyjvQxqoL_87WWUhUzRPW4Tp-QkOMm7cfqP30sZ3OY/edit?rm=demo",
                                permissao: "PadreLiberioAgenda",
                            }}
                        >
                            AGENDAS 2024
                        </Link>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">UBS RECANTO</div>
                        </div>

                        <Link
                            className="badge bg-primary rounded-pill"
                            to={{
                                pathname: "/aps/sheets/agenda",
                            }}
                            state={{
                                link: "https://docs.google.com/spreadsheets/d/135BvLg7l5dkGlTwApVZIw5MWK6ASlPkcME47FPQrhD0/edit?rm=demo",
                                permissao: "RecantoAgenda",
                            }}
                        >
                            GERAR FOLHA DE ROSTO
                        </Link>
                        <Link
                            className="badge bg-success rounded-pill"
                            to={{
                                pathname: "/aps/sheets/agenda",
                            }}
                            state={{
                                link: "https://docs.google.com/spreadsheets/d/1RbsqSlld4AEwdY0gh2UHpjTFsJHXnO8disd6SURMOHM/edit?rm=demo",
                                permissao: "RecantoAgenda",
                            }}
                        >
                            AGENDAS 2023
                        </Link>
                        <Link
                            className="badge bg-info rounded-pill"
                            to={{
                                pathname: "/aps/sheets/agenda",
                            }}
                            state={{
                                link: "https://docs.google.com/spreadsheets/d/1DEJ-kHEYBlZiQkgdn8HG1bKcOO8TChrp4YODjUbkNA4/edit?rm=demo",
                                permissao: "RecantoAgenda",
                            }}
                        >
                            AGENDAS 2024
                        </Link>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">UBS SÃO PEDRO</div>
                        </div>

                        <Link
                            className="badge bg-primary rounded-pill"
                            to={{
                                pathname: "/aps/sheets/agenda",
                            }}
                            state={{
                                link: "https://docs.google.com/spreadsheets/d/1sBlzU10q9ZoG13PckFqxlDD__aHlXzIMgWJQUzbYTkE/edit?rm=demo",
                                permissao: "SaoPedroAgenda",
                            }}
                        >
                            GERAR FOLHA DE ROSTO
                        </Link>
                        <Link
                            className="badge bg-success rounded-pill"
                            to={{
                                pathname: "/aps/sheets/agenda",
                            }}
                            state={{
                                link: "https://docs.google.com/spreadsheets/d/1ndL2aEAxOca8xhjtlWAiJOQTlbFogQUxpYrAMrhvPjI/edit?rm=demo",
                                permissao: "SaoPedroAgenda",
                            }}
                        >
                            AGENDAS 2023
                        </Link>
                        <Link
                            className="badge bg-info rounded-pill"
                            to={{
                                pathname: "/aps/sheets/agenda",
                            }}
                            state={{
                                link: "https://docs.google.com/spreadsheets/d/1nOPP2FbE_YPDhd2pe5NG5PcMjzBophkH7Tup8zio7aY/edit?rm=demo",
                                permissao: "SaoPedroAgenda",
                            }}
                        >
                            AGENDAS 2024
                        </Link>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">UBS SERINGUEIRAS</div>
                        </div>

                        <Link
                            className="badge bg-primary rounded-pill"
                            to={{
                                pathname: "/aps/sheets/agenda",
                            }}
                            state={{
                                link: "https://docs.google.com/spreadsheets/d/1vPhh-dZqp49dW6T3BEqthDruJ8UPf3VRaL1CFLYwGIw/edit?rm=demo",
                                permissao: "SeringueirasAgenda",
                            }}
                        >
                            GERAR FOLHA DE ROSTO
                        </Link>
                        <Link
                            className="badge bg-success rounded-pill"
                            to={{
                                pathname: "/aps/sheets/agenda",
                            }}
                            state={{
                                link: "https://docs.google.com/spreadsheets/d/1V4gNcMVWIieHSJiUhUYvz5F0yo4-8acA0LfhW5mH4DQ/edit?rm=demo",
                                permissao: "SeringueirasAgenda",
                            }}
                        >
                            AGENDAS 2023
                        </Link>
                        <Link
                            className="badge bg-info rounded-pill"
                            to={{
                                pathname: "/aps/sheets/agenda",
                            }}
                            state={{
                                link: "https://docs.google.com/spreadsheets/d/1v1Qvx7q42Z0d1N3DIEWMalkW3HgORyvx66QO_s2qEic/edit?rm=demo",
                                permissao: "SeringueirasAgenda",
                            }}
                        >
                            AGENDAS 2024
                        </Link>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">UBS SERRA VERDE</div>
                        </div>

                        <Link
                            className="badge bg-primary rounded-pill"
                            to={{
                                pathname: "/aps/sheets/agenda",
                            }}
                            state={{
                                link: "https://docs.google.com/spreadsheets/d/1idRNOwTVHnlchNJlWqhZyz_7FmR_yWR78g4CU42EzRY/edit?rm=demo",
                                permissao: "SerraVerdeAgenda",
                            }}
                        >
                            GERAR FOLHA DE ROSTO
                        </Link>
                        <Link
                            className="badge bg-success rounded-pill"
                            to={{
                                pathname: "/aps/sheets/agenda",
                            }}
                            state={{
                                link: "https://docs.google.com/spreadsheets/d/15kepfy32OMyDm9MIpvfAuKJYT9y9nV5KYEaeB48MulY/edit?rm=demo",
                                permissao: "SerraVerdeAgenda",
                            }}
                        >
                            AGENDAS 2023
                        </Link>
                        <Link
                            className="badge bg-info rounded-pill"
                            to={{
                                pathname: "/aps/sheets/agenda",
                            }}
                            state={{
                                link: "https://docs.google.com/spreadsheets/d/19pN5abjzkWh-2nog9WSc_8zXVgAzDLzxxuH19nBahQc/edit?rm=demo",
                                permissao: "SerraVerdeAgenda",
                            }}
                        >
                            AGENDAS 2024
                        </Link>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">UBS VILA FERREIRA</div>
                        </div>

                        <Link
                            className="badge bg-primary rounded-pill"
                            to={{
                                pathname: "/aps/sheets/agenda",
                            }}
                            state={{
                                link: "https://docs.google.com/spreadsheets/d/1Y6eCfyp3MzXMHys2O8VZ-PIEqi-6lXTUhP8OtN2Cew4/edit?rm=demo",
                                permissao: "VilaFerreiraAgenda",
                            }}
                        >
                            GERAR FOLHA DE ROSTO
                        </Link>
                        <Link
                            className="badge bg-success rounded-pill"
                            to={{
                                pathname: "/aps/sheets/agenda",
                            }}
                            state={{
                                link: "https://docs.google.com/spreadsheets/d/1OHqLRc8LW5mdJjrmG47SuhDV1IHJEerAELL9Wk-WAmk/edit?rm=demo",
                                permissao: "VilaFerreiraAgenda",
                            }}
                        >
                            AGENDAS 2023
                        </Link>
                        <Link
                            className="badge bg-info rounded-pill"
                            to={{
                                pathname: "/aps/sheets/agenda",
                            }}
                            state={{
                                link: "https://docs.google.com/spreadsheets/d/1skWsp0AFaf284wMjxssNY3sMQ33KyawomEFa6yRradU/edit?rm=demo",
                                permissao: "VilaFerreiraAgenda",
                            }}
                        >
                            AGENDAS 2024
                        </Link>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">UBS JK</div>
                        </div>

                        <Link
                            className="badge bg-primary rounded-pill"
                            to={{
                                pathname: "/aps/sheets/agenda",
                            }}
                            state={{
                                link: "https://docs.google.com/spreadsheets/d/18ycfEmrBoEqZROFp8UlWsH8BTCVKr4jyDP3fFauZ7PM/edit?rm=demo",
                                permissao: "JkAgenda",
                            }}
                        >
                            GERAR FOLHA DE ROSTO
                        </Link>
                        <Link
                            className="badge bg-success rounded-pill"
                            to={{
                                pathname: "/aps/sheets/agenda",
                            }}
                            state={{
                                link: "https://docs.google.com/spreadsheets/d/1j9lRyl2IcIfZcTwECsK9f2lAtqSXNz8zUz4w74bb0BY/edit?rm=demo",
                                permissao: "JkAgenda",
                            }}
                        >
                            AGENDAS 2023
                        </Link>
                        <Link
                            className="badge bg-info rounded-pill"
                            to={{
                                pathname: "/aps/sheets/agenda",
                            }}
                            state={{
                                link: "https://docs.google.com/spreadsheets/d/1y3H8Zwiv32mw_xH7bntukWxNFspQbFAfb1Sls_3gpoU/edit?rm=demo",
                                permissao: "JkAgenda",
                            }}
                        >
                            AGENDAS 2024
                        </Link>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">UBS TAVARES</div>
                        </div>

                        <Link
                            className="badge bg-primary rounded-pill"
                            to={{
                                pathname: "/aps/sheets/agenda",
                            }}
                            state={{
                                link: "https://docs.google.com/spreadsheets/d/17xaH8h39oTW4wb2fU_mAedyo_RkFuzbLp14yiTDg7Xc/edit",
                                permissao: "TavaresAgenda",
                            }}
                        >
                            GERAR FOLHA DE ROSTO
                        </Link>
                        <Link
                            className="badge bg-success rounded-pill"
                            to={{
                                pathname: "/aps/sheets/agenda",
                            }}
                            state={{
                                link: "https://docs.google.com/spreadsheets/d/1iJ8lelXawdjl39W-48hEVKo3rCQopKfiwQQzAmJjER4/edit",
                                permissao: "TavaresAgenda",
                            }}
                        >
                            AGENDAS 2023
                        </Link>
                        <Link
                            className="badge bg-info rounded-pill"
                            to={{
                                pathname: "/aps/sheets/agenda",
                            }}
                            state={{
                                link: "https://docs.google.com/spreadsheets/d/1zvtqUHtWW_y-ghfuxOUT3kIxVG9J9HEGs_9OuiL6a6g/edit",
                                permissao: "TavaresAgenda",
                            }}
                        >
                            AGENDAS 2024
                        </Link>
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default InicioAgenda;
