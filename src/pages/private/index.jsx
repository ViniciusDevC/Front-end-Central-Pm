import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./index.css";
import axios from "axios";
import { Loader } from "@mantine/core";

function Private({ children }) {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [logado, setLogado] = useState(false);

    async function ckeckLogin() {
        const token = window.localStorage.getItem("x-access-token");
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
                setLoading(false);
                setLogado(true);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
                setLogado(false);
            });
    }

    useEffect(() => {
        ckeckLogin();
    }, []);

    if (loading) {
        return (
            <div>
                <div className="d-flex justify-content-center pt-5 mt-5">
                    <div className="row">
                        <div className="col">
                            <Loader
                                size="xl"
                                variant="bars"
                                style={{ width: "8rem" }}
                            />
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center typewriter">
                    <div className="row">
                        <div className="col">
                            <div class="typewriter">
                                <h4>
                                    Aguarde, sua solicitação está sendo
                                    processada ...
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (!logado) {
        return <Navigate to="/login" />;
    }

    return children;
}

export default Private;
