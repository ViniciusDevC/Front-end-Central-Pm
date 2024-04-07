import { useNavigate } from "react-router-dom";
import SideNav from "../sidenav/SideNav";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function MonitoramentoCirurgiasEletivas() {
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

    useEffect(() => {
        verificaPermissao();
    }, []);
    return (
        <div>
            <SideNav activeLink={"coordenacaogeral"} />
            {loading ? (
                <div>
                    <div className="text-center mt-5">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="col-xs-12 col-sm-12 col-md-9 iframe">
                    <iframe
                        style={{ width: "140%", height: "100vh" }}
                        src="https://onedrive.live.com/edit.aspx?resid=278C717C508B4693!104&ithint=file%2cxlsx&authkey=!AMrwo2Mvz9thvIg"
                    ></iframe>
                </div>
            )}
        </div>
    );
}

export default MonitoramentoCirurgiasEletivas;
