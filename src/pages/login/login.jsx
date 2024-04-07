import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import ImagemLogin from "../../assets/Privacy policy.gif";

function Login() {
    const navigate = useNavigate();

    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleLogin(e) {
        e.preventDefault();
        setLoading(true);
        axios({
            method: "post",
            url: "https://central-pm-api-v2.onrender.com/users/session",
            data: {
                usuario: login,
                senha: senha,
            },
        })
            .then((res) => {
                setLoading(false);
                window.localStorage.setItem(
                    "x-access-token",
                    "Bearer " + res.data.token
                );
                window.localStorage.setItem("userName", res.data.user.usuario);
                if (res.data.user.resetarSenha) {
                    Swal.fire("É necessário realizar a alteração da senha", "");
                    return navigate("/alterarsenha");
                }

                navigate("/");
            })
            .catch((err) => {
                setLoading(false);
                console.log(err);
                return Swal.fire("Acesso negado", "", "error");
            });
    }
    return (
        <div style={{ backgroundColor: "white" }}>
            <div>
                <section className="vh-100">
                    <div className="container py-5 h-100">
                        <div className="row d-flex align-items-center justify-content-center h-100">
                            <div className="col-md-8 col-lg-7 col-xl-6">
                                <img
                                    src="https://leismunicipais.com.br/img/cidades/mg/para-de-minas.png"
                                    className="img-fluid"
                                    alt="Phone image"
                                    style={{ width: "30%" }}
                                />
                                <img
                                    src={ImagemLogin}
                                    className="img-fluid"
                                    alt="Phone image"
                                    style={{ width: "70%" }}
                                />
                            </div>
                            <div className="col-md-7 col-lg-5 col-xl-5 ">
                                <form>
                                    <div className="form-floating  mb-4">
                                        <input
                                            value={login}
                                            type="login"
                                            id="login"
                                            className="form-control form-control-lg"
                                            placeholder="Usuário"
                                            onChange={(e) =>
                                                setLogin(e.target.value)
                                            }
                                        />
                                        <label
                                            className="form-label"
                                            htmlFor="login"
                                        >
                                            Usuário
                                        </label>
                                    </div>
                                    <div className="form-floating mb-4">
                                        <input
                                            value={senha}
                                            type="password"
                                            id="password"
                                            className="form-control form-control-lg"
                                            placeholder="Senha"
                                            onChange={(e) =>
                                                setSenha(e.target.value)
                                            }
                                        />
                                        <label
                                            className="form-label"
                                            htmlFor="password"
                                        >
                                            Senha
                                        </label>
                                    </div>
                                    {loading ? (
                                        <button
                                            className="btn btn-primary btn-lg btn-block"
                                            type="button"
                                            disabled
                                        >
                                            <span
                                                className="spinner-border spinner-border-sm"
                                                role="status"
                                                aria-hidden="true"
                                            ></span>
                                            <span className="visually-hidden">
                                                Loading...
                                            </span>
                                        </button>
                                    ) : (
                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-lg btn-block"
                                            onClick={(e) => handleLogin(e)}
                                        >
                                            Entrar
                                        </button>
                                    )}

                                    <hr />
                                    <p className="small text-muted">
                                        Não possue uma conta ?{" "}
                                        <Link to="https://api.whatsapp.com/send?phone=553799763957&text=Ol%C3%A1,%20preciso%20de%20acesso%20%C3%A0%20plataforma%20Central.">
                                            Cadastre-se
                                        </Link>{" "}
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Login;
