import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";
import ImagemTrocarSenha from "../../assets/Forgot password.gif";

function AlteracaoSenha() {
    const navigate = useNavigate();

    const [senha, setSenha] = useState("");
    const [senhaConfirm, setSenhaConfirm] = useState("");
    const [showModal, setShowModal] = useState(true); // Inicializar como true para deixar o modal aberto

    const handleCloseModal = () => {
        setShowModal(false);
    };
    async function handleAlteracaoSenha(e) {
        e.preventDefault();
        const token = window.localStorage.getItem("x-access-token");

        if (!token) {
            navigate("/login", { replace: true });
            return Swal.fire("Usuário não informado", "", "error");
        }
        if (senha.length < 8) {
            return Swal.fire(
                "A senha deve possuir no mínimo 8 caracteres",
                "",
                "error"
            );
        }
        if (senha !== senhaConfirm) {
            return Swal.fire("As senhas não conferem", "", "error");
        }

        axios({
            method: "post",
            url: "https://central-pm-api-v2.onrender.com/users/changepassword",
            data: {
                token: token,
                senha: senha,
                senhaConfirm: senhaConfirm,
            },
            headers: {
                authorization: token,
            },
        })
            .then((res) => {
                setShowModal(true);
                navigate("/", { replace: true });
                return Swal.fire("Senha alterada com sucesso", "", "success");
            })
            .catch((err) => {
                navigate("/", { replace: true });
                return Swal.fire(err.response.data.error, err.message, "error");
            });
    }
    return (
        <div style={{ backgroundColor: "white" }}>
            <section className="vh-100">
                {showModal && (
                    <div
                        className="modal modal-lg"
                        tabIndex="-1"
                        role="dialog"
                        style={{ display: "block" }}
                    >
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5">
                                        Termos de uso
                                    </h1>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        onClick={handleCloseModal}
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col">
                                            <h4>Caro usuário,</h4>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <span>
                                                Bem-vindo ao nosso sistema!
                                                Antes de começar a utilizar
                                                nossos serviços, pedimos que
                                                leia atentamente os termos de
                                                uso abaixo. Ao prosseguir com o
                                                acesso e utilização do sistema,
                                                você estará concordando com os
                                                termos estabelecidos. Além
                                                disso, ressaltamos a importância
                                                de manter suas senhas
                                                intransferíveis para garantir a
                                                segurança de sua conta. Confira
                                                os detalhes abaixo:
                                            </span>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col">
                                            <span>
                                                <b>Termos de Uso:</b>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col">
                                            <span>
                                                Aceitação dos termos: Ao acessar
                                                e utilizar nosso sistema, você
                                                concorda em cumprir estes termos
                                                de uso e todas as leis e
                                                regulamentos aplicáveis. Se você
                                                não concordar com estes termos,
                                                solicitamos que não utilize
                                                nossos serviços.
                                            </span>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col">
                                            <span>
                                                Uso adequado: O sistema
                                                destina-se exclusivamente ao uso
                                                pessoal ou interno da Prefeitura
                                                Municipal de Pará de Minas. Você
                                                concorda em não utilizar o
                                                sistema para qualquer finalidade
                                                ilegal, fraudulenta ou não
                                                autorizada.
                                            </span>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col">
                                            <span>
                                                Responsabilidade pela conta:
                                                Você é responsável por manter a
                                                confidencialidade de suas
                                                informações de conta, incluindo
                                                senhas, e concorda em não
                                                compartilhá-las com terceiros.
                                                Qualquer atividade realizada em
                                                sua conta será de sua inteira
                                                responsabilidade.
                                            </span>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col">
                                            <span>
                                                Propriedade intelectual: O
                                                sistema e todo o conteúdo
                                                relacionado são protegidos por
                                                direitos autorais, marcas
                                                registradas e outras leis de
                                                propriedade intelectual. Você
                                                concorda em não reproduzir,
                                                modificar, distribuir, realizar
                                                engenharia reversa ou criar
                                                trabalhos derivados sem a devida
                                                autorização.
                                            </span>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col">
                                            <span>
                                                Privacidade e segurança:
                                                Comprometemo-nos a proteger suas
                                                informações pessoais de acordo
                                                com nossa Política de
                                                Privacidade. No entanto, a
                                                segurança total na transmissão
                                                de dados pela Internet não pode
                                                ser garantida. Você reconhece e
                                                aceita esse risco.
                                            </span>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col">
                                            <span>
                                                <b>Senhas Intransferíveis:</b>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col">
                                            <span>
                                                Proteção da senha: É fundamental
                                                que você mantenha suas senhas
                                                seguras e confidenciais. Não
                                                compartilhe suas senhas com
                                                terceiros ou permita que outras
                                                pessoas acessem sua conta.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-success"
                                        onClick={handleCloseModal}
                                    >
                                        Prosseguir
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {showModal && (
                    <div
                        className="modal-backdrop show"
                        onClick={handleCloseModal}
                    ></div>
                )}

                <div className="container py-5 h-100">
                    <div className="row d-flex align-items-center justify-content-center h-100">
                        <div className="col-md-8 col-lg-7 col-xl-6">
                            <img
                                src={ImagemTrocarSenha}
                                className="img-fluid"
                                alt="Phone image"
                                style={{}}
                            />
                        </div>
                        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                            <div
                                className="alert alert-primary d-flex align-items-center"
                                role="alert"
                            >
                                <i className="bi bi-exclamation-diamond-fill"></i>
                                <div className="mx-2">
                                    A senha deve possuir no mínimo 8 caracteres
                                </div>
                            </div>
                            <form>
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
                                <div className="form-floating mb-4">
                                    <input
                                        value={senhaConfirm}
                                        type="password"
                                        id="passwordC"
                                        className="form-control form-control-lg"
                                        placeholder="Confirmar Senha"
                                        onChange={(e) =>
                                            setSenhaConfirm(e.target.value)
                                        }
                                    />
                                    <label
                                        className="form-label"
                                        htmlFor="passwordC"
                                    >
                                        Confirmar Senha
                                    </label>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-lg btn-block"
                                    onClick={(e) => handleAlteracaoSenha(e)}
                                >
                                    Alterar
                                </button>
                                <hr />
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AlteracaoSenha;
