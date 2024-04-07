import SideNav from "./sidenav/SideNav";
import "./index.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Tabs, Loader } from "@mantine/core";
import { IconAlertTriangle, IconWorldWww } from "@tabler/icons-react";
import "animate.css";
import ReactMarkdown from "react-markdown";

function Inicio() {
    var token = window.localStorage.getItem("x-access-token");
    const [avisos, setAvisos] = useState([]);
    const [loadAvisos, setLoadAvisos] = useState(true);

    async function getAvisos() {
        axios({
            method: "get",
            url: "https://central-pm-api-v2.onrender.com/avisos",
            headers: {
                authorization: token,
            },
        })
            .then((res) => {
                console.log(res.data);
                setAvisos(res.data);
                setLoadAvisos(false);
            })
            .catch((err) => {
                window.location.reload();
                return Swal.fire("Erro ao buscar avisos", "", "error");
            });
    }

    useEffect(() => {
        getAvisos();
    }, []);
    return (
        <div>
            <SideNav activeLink={"inicio"} />
            <div className="container rounded-4 mt-4 p-3 col-xs-6 col-sm-6 col-md-6 col-lg-7 main-container">
                <Tabs defaultValue="avisos">
                    <Tabs.List>
                        <Tabs.Tab
                            value="avisos"
                            icon={<IconAlertTriangle size="1rem" />}
                        >
                            Alertas e Avisos
                        </Tabs.Tab>
                        <Tabs.Tab
                            value="prefeitura"
                            icon={<IconWorldWww size="1rem" />}
                        >
                            Site Prefeitura
                        </Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="avisos" pt="xs">
                        {loadAvisos ? (
                            <Loader size="xl" variant="dots" />
                        ) : (
                            <div>
                                {avisos.reverse().map((item) => {
                                    return (
                                        <div className="row mt-3">
                                            <div className="card animate__animated animate__backInDown">
                                                <span
                                                    className={`position-absolute top-0 start-100 translate-middle badge rounded-pill bg-${item.tipo}`}
                                                >
                                                    Adicionado em {item.data}
                                                    <span className="visually-hidden">
                                                        {item.titulo}
                                                    </span>
                                                </span>
                                                <div className="card-body">
                                                    <h5 className="card-title text-center">
                                                        {item.titulo}
                                                    </h5>
                                                    <p className="card-text">
                                                        <ReactMarkdown>
                                                            {item.conteudo}
                                                        </ReactMarkdown>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </Tabs.Panel>
                    <Tabs.Panel value="prefeitura" pt="xs">
                        <iframe
                            src="https://portal-novo.parademinas.mg.gov.br/"
                            frameborder="0"
                            style={{ width: "120%", height: "50rem" }}
                        ></iframe>
                    </Tabs.Panel>
                </Tabs>
            </div>
        </div>
    );
}

export default Inicio;
