import { useNavigate } from "react-router-dom";
import SideNav from "../sidenav/SideNav";
import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import io from "socket.io-client";

function Tracker() {
    useEffect(() => {
        const socket = io("https://central-pm-api-v2.onrender.com");
        socket.connect();
        socket.on("online_users", (onlineUsers) => {
            setUsers(onlineUsers);
        });
        return () => {
            socket.disconnect();
        };
    }, []);

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);

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
                if (!res.data.isAdmin) {
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
            <SideNav activeLink={"usuarios"} />
            <div
                className="container col-sm-3  rounded-4 mt-4 p-3 col-xs-6 col-sm-6 col-md-6 col-lg-7 animate__animated animate__pulse"
                style={{ backgroundColor: "white" }}
            >
                <h2>Tracker ({users.length})</h2>
                <div className="row">
                    <div className="col-2">
                        <button
                            className="btn btn-primary"
                            onClick={(e) => navigate("/usuarios")}
                        >
                            <i className="bi bi-arrow-left-square"></i> Voltar
                        </button>
                    </div>
                </div>
                {loading ? (
                    <div>
                        <div className="text-center mt-3">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">
                                    Loading...
                                </span>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className="table-responsive">
                            <table className="table table-striped mt-2">
                                <thead>
                                    <tr>
                                        <th scope="col">Status</th>
                                        <th scope="col">Usuário</th>
                                        <th scope="col">Location</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((item) => {
                                        return (
                                            <tr key={item.id}>
                                                <td>🟢</td>
                                                <td>{item.name}</td>
                                                <td>{item.location}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Tracker;
