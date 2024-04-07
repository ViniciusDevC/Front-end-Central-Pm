import { useEffect, useState } from "react";
import SideNav from "../sidenav/SideNav";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "animate.css";
import DataTable from "react-data-table-component";

function Usuarios() {
    const navigate = useNavigate();

    const [abrirCadastrar, setAbrirCadastrar] = useState(true);
    const [resetSenha, setResetSenha] = useState(false);
    const [loading, setLoading] = useState(true);
    const [btnLoading, setBtnLoading] = useState(false);

    const [idUser, setIdUser] = useState();

    const [usuarios, setUsuarios] = useState([]);

    const [nome, setNome] = useState("");
    const [usuario, setUsuario] = useState("");
    const [unidade, setUnidade] = useState("");
    const [setor, setSetor] = useState("");
    const [funcao, setFuncao] = useState("");
    const [contato, setContato] = useState("");
    const [senha, setSenha] = useState("");
    const [isadm, setIsAdm] = useState(false);
    const [senhaConfirm, setSenhaConfirm] = useState("");

    const [dadosUsuario, setDadosUsuario] = useState(null);

    const [usuariosFiltro, setUsuariosFiltro] = useState([]);

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

    function listarUsuarios() {
        axios({
            method: "get",
            url: "https://central-pm-api-v2.onrender.com/users",
            headers: {
                authorization: token,
            },
        })
            .then((res) => {
                setUsuarios(res.data);
                setUsuariosFiltro(res.data);
            })
            .catch((err) => {
                return Swal.fire("Erro ao buscar os usuários", "", "error");
            });
    }

    async function abrirEditarCadastro(id) {
        setLoading(true);
        await axios({
            method: "get",
            url: `https://central-pm-api-v2.onrender.com/users/${id}`,
            headers: {
                authorization: token,
            },
        })
            .then(async (res) => {
                setIdUser(id);
                setAbrirCadastrar(false);
                setDadosUsuario(res.data);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);

                return Swal.fire(
                    "Erro ao buscar os dados do usuário",
                    err.message,
                    "error"
                );
            });
    }

    async function atualizarCadastro() {
        let checkbox = await document.getElementsByClassName(
            "form-check-input"
        );
        let permissoes = [];
        let resetarSenha = document.getElementById("resetar senha").checked;
        for (var i = 0; i < checkbox.length; i++) {
            if (checkbox[i].checked === true) {
                if (
                    checkbox[i].id !== "isadmin" &&
                    checkbox[i].id !== "resetar senha"
                ) {
                    permissoes.push(checkbox[i].id);
                }
            }
        }

        if (!nome || !usuario || !unidade || !setor || !funcao || !contato) {
            return Swal.fire(
                "Campos obrigatórios não preenchidos",
                "",
                "error"
            );
        }
        if (resetSenha) {
            if (!senha || !senhaConfirm) {
                return Swal.fire(
                    "Para resetar a senha informe uma nova senha",
                    "",
                    "error"
                );
            }
            if (senha !== senhaConfirm) {
                return Swal.fire("As senhas não conferem", "", "error");
            }
            if (senha.length < 8) {
                return Swal.fire(
                    "A senha deve conter no mínimo 8 caracteres",
                    "",
                    "error"
                );
            }
        }
        setBtnLoading(true);

        await axios({
            method: "put",
            url: `https://central-pm-api-v2.onrender.com/users/`,
            data: {
                id: idUser,
                nome,
                usuario,
                senha,
                confirmSenha: senhaConfirm,
                resetarSenha,
                unidade,
                setor,
                funcao,
                contato,
                isAdmin: isadm,
                permissoes,
            },
            headers: {
                authorization: token,
            },
        })
            .then(async (res) => {
                setBtnLoading(false);
                return Swal.fire(
                    "Usuário atualizado com sucesso",
                    "",
                    "success"
                );
            })
            .catch((err) => {
                setBtnLoading(false);
                return Swal.fire(
                    "Erro ao atualizar o usuário",
                    err.response.data.mensagem,
                    "error"
                );
            });
    }

    function voltar() {
        setAbrirCadastrar(true);
        setIdUser("");
        limparCampos();
        listarUsuarios();
        setResetSenha(false);
    }

    async function limparCampos() {
        setIdUser("");
        setNome("");
        setUsuario("");
        setUnidade("");
        setSetor("");
        setFuncao("");
        setContato("");
        setSenha("");
        setSenhaConfirm("");
        setIsAdm(false);
        let checkbox = await document.getElementsByClassName(
            "form-check-input"
        );
        for (var i = 0; i < checkbox.length; i++) {
            checkbox[i].checked = false;
        }
    }

    async function cadastrarUsuario() {
        let checkbox = await document.getElementsByClassName(
            "form-check-input"
        );
        let permissoes = [];
        let isadmin = await document.getElementById("isadmin").checked;
        let resetarsenha = await document.getElementById("resetar senha")
            .checked;
        if (!resetSenha) {
            return Swal.fire(
                `Resetar senha é obrigatório para a criação de novos usuários`,
                "",
                "error"
            );
        }
        if (senha.length < 8) {
            return Swal.fire(
                `A senha deve possuir no mínimo 8 caracteres`,
                "",
                "error"
            );
        }
        if (
            !nome ||
            !usuario ||
            !senha ||
            !senhaConfirm ||
            !unidade ||
            !setor ||
            !funcao ||
            !contato
        ) {
            return Swal.fire(
                `Campos obrigatórios não preenchidos`,
                "",
                "error"
            );
        }

        if (senha !== senhaConfirm) {
            return Swal.fire(`As senhas não conferem`, "", "error");
        }

        for (var i = 0; i < checkbox.length; i++) {
            if (checkbox[i].checked === true) {
                if (
                    checkbox[i].id !== "isadmin" &&
                    checkbox[i].id !== "resetar senha"
                ) {
                    permissoes.push(checkbox[i].id);
                }
            }
        }
        setBtnLoading(true);
        axios({
            method: "post",
            url: "https://central-pm-api-v2.onrender.com/users",
            data: {
                nome: nome,
                usuario: usuario,
                resetarSenha: resetarsenha,
                senha: senha,
                confirmSenha: senhaConfirm,
                unidade: unidade,
                setor: setor,
                funcao: funcao,
                contato: contato,
                isAdmin: isadmin,
                permissoes: permissoes,
            },
            headers: {
                authorization: token,
            },
        })
            .then((res) => {
                limparCampos();
                setBtnLoading(false);
                return Swal.fire(
                    `Usuário ${usuario} cadastrado com sucesso`,
                    "",
                    "success"
                );
            })
            .catch((err) => {
                console.log(err);
                setBtnLoading(false);
                return Swal.fire(
                    "Erro ao cadastrar usuário ",
                    err.response.data.mensagem,
                    "error"
                );
            });
    }

    async function deletarUsuario(id) {
        // eslint-disable-next-line no-restricted-globals
        if (confirm("Deseja excluir o cadastro selecionado ?") === false) {
            return;
        }
        if (!id) {
            return Swal.fire(
                "Erro ao recuperar o ip para deletar usuário ",
                "",
                "error"
            );
        }

        axios({
            method: "delete",
            url: `https://central-pm-api-v2.onrender.com/users/${id}`,
            headers: {
                authorization: token,
            },
        })
            .then((res) => {
                listarUsuarios();
                return Swal.fire(`Usuário excluido com sucesso`, "", "success");
            })
            .catch((err) => {
                console.log(err);
                return Swal.fire(
                    "Erro ao excluir usuário ",
                    err.response.data.mensagem,
                    "error"
                );
            });
    }

    function adicionarTodasPermissoes() {
        let checkbox = document.getElementsByClassName("form-check-input");

        for (var i = 0; i < checkbox.length; i++) {
            if (
                checkbox[i].id !== "isadmin" &&
                checkbox[i].id !== "resetar senha"
            ) {
                checkbox[i].checked = true;
            }
        }
    }
    function removerTodasPermissoes() {
        let checkbox = document.getElementsByClassName("form-check-input");

        for (var i = 0; i < checkbox.length; i++) {
            if (
                checkbox[i].id !== "isadmin" &&
                checkbox[i].id !== "resetar senha"
            ) {
                checkbox[i].checked = false;
            }
        }
    }
    async function pesquisar(value) {
        value = value.toUpperCase();
        let filteredUsers;

        try {
            filteredUsers = usuarios.filter(
                (usuarios) =>
                    usuarios.nome.includes(value) ||
                    usuarios.usuario.includes(value) ||
                    usuarios.unidade.includes(value) ||
                    usuarios.setor.includes(value) ||
                    usuarios.funcao.includes(value) ||
                    usuarios.contato.includes(value)
            );

            setUsuariosFiltro(filteredUsers);
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        if (dadosUsuario) {
            setNome(dadosUsuario.nome);
            setUsuario(dadosUsuario.usuario);
            setUnidade(dadosUsuario.unidade);
            setSetor(dadosUsuario.setor);
            setFuncao(dadosUsuario.funcao);
            setContato(dadosUsuario.contato);
            if (dadosUsuario.isAdmin === true) {
                setIsAdm(true);
            } else {
                setIsAdm(false);
            }
            let permissoes = dadosUsuario.permissoes;
            const checkboxes =
                document.getElementsByClassName("form-check-input");
            for (let i = 0; i < checkboxes.length; i++) {
                if (permissoes.find((el) => checkboxes[i].id === el)) {
                    checkboxes[i].checked = true;
                }
            }
        }
    }, [dadosUsuario]);

    useEffect(() => {
        verificaPermissao();
        listarUsuarios();
    }, []);

    const columnsTable = [
        {
            name: "Nome",
            selector: "nome",
            sortable: true,
        },
        {
            name: "Usuário",
            selector: "usuario",
            sortable: true,
        },
        {
            name: "Unidade",
            selector: "unidade",
            sortable: true,
        },
        {
            name: "Setor",
            selector: "setor",
            sortable: true,
        },
        {
            name: "Função",
            selector: "funcao",
            sortable: true,
        },
        {
            name: "Ações",
            selector: "Ações",
            cell: (row) => (
                <div>
                    <button
                        className="btn btn-danger ms-1"
                        onClick={(e) => deletarUsuario(row._id)}
                    >
                        <i className="bi bi-trash"></i>
                    </button>
                </div>
            ),
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ];
    const handleRowClick = (row) => {
        abrirEditarCadastro(row._id);
    };

    return (
        <div>
            <SideNav activeLink={"usuarios"} />
            <div
                className="container col-sm-3  rounded-4 mt-4 p-3 col-xs-6 col-sm-6 col-md-6 col-lg-7 animate__animated animate__pulse animate__faster"
                style={{ backgroundColor: "white" }}
            >
                <h2>Usuários ({usuarios.length})</h2>
                {abrirCadastrar ? (
                    <div>
                        <div className="row">
                            <div className="col-2">
                                <button
                                    className="btn btn-primary"
                                    onClick={(e) => setAbrirCadastrar(false)}
                                >
                                    <i className="bi bi-arrow-right-square"></i>{" "}
                                    Cadastrar
                                </button>
                            </div>
                        </div>

                        <div className="input-group flex-nowrap mt-2">
                            <span
                                className="input-group-text"
                                id="addon-wrapping"
                            >
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
                        {loading ? (
                            <div>
                                <div className="text-center mt-3">
                                    <div
                                        className="spinner-border"
                                        role="status"
                                    >
                                        <span className="visually-hidden">
                                            Loading...
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <DataTable
                                    title="Lista de Usuários"
                                    columns={columnsTable}
                                    data={usuariosFiltro}
                                    onRowClicked={handleRowClick}
                                    direction="auto"
                                    fixedHeaderScrollHeight="300px"
                                    pagination
                                    responsive
                                    subHeaderAlign="right"
                                    subHeaderWrap
                                    highlightOnHover
                                    pointerOnHover
                                />
                            </div>
                        )}
                    </div>
                ) : (
                    <div>
                        <button
                            className="btn btn-primary"
                            onClick={(e) => voltar()}
                        >
                            <i className="bi bi-arrow-left-square"></i> Voltar
                        </button>
                        <div className="row">
                            <div className="col-4">
                                <span>Nome:</span>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={nome}
                                    onChange={(e) =>
                                        setNome(e.target.value.toUpperCase())
                                    }
                                />
                            </div>
                            <div className="col">
                                <span>Usuário:</span>
                                <input
                                    type="text"
                                    value={usuario}
                                    className="form-control"
                                    onChange={(e) =>
                                        setUsuario(e.target.value.toUpperCase())
                                    }
                                />
                            </div>
                            <div className="col">
                                <span>Unidade:</span>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={unidade}
                                    onChange={(e) =>
                                        setUnidade(e.target.value.toUpperCase())
                                    }
                                />
                            </div>
                            <div className="col">
                                <span>Setor:</span>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={setor}
                                    onChange={(e) =>
                                        setSetor(e.target.value.toUpperCase())
                                    }
                                />
                            </div>
                            <div className="col">
                                <span>Função:</span>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={funcao}
                                    onChange={(e) =>
                                        setFuncao(e.target.value.toUpperCase())
                                    }
                                />
                            </div>
                            <div className="col">
                                <span>Contato:</span>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={contato}
                                    onChange={(e) => setContato(e.target.value)}
                                />
                            </div>
                            <div className="colform-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    onClick={(e) => setIsAdm(!isadm)}
                                    checked={isadm}
                                    id="isadmin"
                                />
                                <label
                                    className="form-check-label ms-2"
                                    htmlFor="isadmin"
                                >
                                    Admin ?
                                </label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="resetar senha"
                                        onChange={(e) =>
                                            setResetSenha(e.target.checked)
                                        }
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="resetar senha"
                                    >
                                        Resetar senha ?
                                    </label>
                                </div>
                            </div>
                            {resetSenha ? (
                                <div>
                                    <div className="col-3">
                                        <span>Senha:</span>{" "}
                                        <input
                                            type="password"
                                            className="form-control"
                                            value={senha}
                                            onChange={(e) =>
                                                setSenha(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="col-3">
                                        <span>Confirmação senha:</span>{" "}
                                        <input
                                            type="password"
                                            className="form-control"
                                            value={senhaConfirm}
                                            onChange={(e) =>
                                                setSenhaConfirm(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                            ) : (
                                <div></div>
                            )}
                        </div>
                        <div className="row p-3">
                            {btnLoading ? (
                                <button className="btn btn-primary" disabled>
                                    <span
                                        className="spinner-border spinner-border-sm"
                                        role="status"
                                        aria-hidden="true"
                                    ></span>
                                    <span className="visually-hidden">
                                        Loading...
                                    </span>
                                </button>
                            ) : idUser ? (
                                <button
                                    className="btn btn-primary"
                                    onClick={(e) => atualizarCadastro()}
                                >
                                    Atualizar
                                </button>
                            ) : (
                                <button
                                    className="btn btn-primary"
                                    onClick={(e) => cadastrarUsuario()}
                                >
                                    Cadastrar
                                </button>
                            )}
                        </div>
                        <div className="row">
                            <div className="col">
                                <button
                                    className="btn btn-info"
                                    onClick={(e) => adicionarTodasPermissoes()}
                                >
                                    Adicionar todas as permissões
                                </button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <button
                                    className="btn btn-warning mt-2"
                                    onClick={(e) => removerTodasPermissoes()}
                                >
                                    Remover todas as permissões
                                </button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="CoordenacaoGeral"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="CoordenacaoGeral"
                                    >
                                        Coordenação Geral
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="ConsorciosPrevisao"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="ConsorciosPrevisao"
                                    >
                                        Previsão Consórcios
                                    </label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="PainelAvisos"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="PainelAvisos"
                                    >
                                        Painel Avisos
                                    </label>
                                </div>
                            </div>

                            <div className="col">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="comissaoEmergencia"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="comissaoEmergencia"
                                    >
                                        Comissao Emergencia
                                    </label>
                                </div>
                            </div>

                            <div className="col">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="adicionaProtocolo"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="adicionaProtocolo"
                                    >
                                        Cadastra Protocolo
                                    </label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="Reunioessms"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="Reunioessms"
                                    >
                                        Cadastra Reuniões SMS
                                    </label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="carteiraservicos"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="carteiraservicos"
                                    >
                                        Cadastra Carteira de Serviços SMS
                                    </label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="MonitoramentoNf"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="MonitoramentoNf"
                                    >
                                        MONITORAMENTO NF 2024
                                    </label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="MonitoramentoNfView"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="MonitoramentoNfView"
                                    >
                                        MONITORAMENTO NF 2024 VIEW
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <details>
                                    <summary>Compras e contratos</summary>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="Sentinela"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="Sentinela"
                                        >
                                            Sentinela
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="AcompanhamentoDosContratosEatasVigentes"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="AcompanhamentoDosContratosEatasVigentes"
                                        >
                                            ACOMPANHAMENTO DOS CONTRATOS E ATAS
                                            VIGENTES
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="AcompanhamentoDosProcessos"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="AcompanhamentoDosProcessos"
                                        >
                                            ACOMPANHAMENTO DOS PROCESSOS DE
                                            COMPRAS E CONTRATAÇÕES
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="FluxoParaRequisiçãoDeMercadorias"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="FluxoParaRequisiçãoDeMercadorias"
                                        >
                                            REQUISIÇÃO DE MERCADORIAS
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="RdqaCompras2023"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="RdqaCompras2023"
                                        >
                                            RDQA - 2023
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="RapsAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="RapsAlmox"
                                        >
                                            ALMOXARIFADO RAPS
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="UpaMedicamentosAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="UpaMedicamentosAlmox"
                                        >
                                            ALMOXARIFADO UPA
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="AlmoxarifadoCentralAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="AlmoxarifadoCentralAlmox"
                                        >
                                            ALMOXARIFADO CENTRAL
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="GraoParaAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="GraoParaAlmox"
                                        >
                                            ALMOXARIFADO GRÃO PARÁ
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="BaixoSantosDumontAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="BaixoSantosDumontAlmox"
                                        >
                                            ALMOXARIFADO BAIXO SANTOS DUMONT
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="NSPiedadeAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="NSPiedadeAlmox"
                                        >
                                            ALMOXARIFADO NS PIEDADE
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="SaoPedroAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="SaoPedroAlmox"
                                        >
                                            ALMOXARIFADO SÃO PEDRO
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="SeringueirasAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="SeringueirasAlmox"
                                        >
                                            ALMOXARIFADO SERINGUEIRAS
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="UpaMateriaisAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="UpaMateriaisAlmox"
                                        >
                                            ALMOXARIFADO UPA MATERIAIS
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="WalterMartinsAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="WalterMartinsAlmox"
                                        >
                                            ALMOXARIFADO WALTER MARTINS
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="TavaresAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="TavaresAlmox"
                                        >
                                            ALMOXARIFADO TAVARES
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="TorneirosAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="TorneirosAlmox"
                                        >
                                            ALMOXARIFADO TORNEIROS
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="SadAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="SadAlmox"
                                        >
                                            ALMOXARIFADO SAD
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="LgbtAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="LgbtAlmox"
                                        >
                                            ALMOXARIFADO LGBT
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="PadreLiberioAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="PadreLiberioAlmox"
                                        >
                                            ALMOXARIFADO PADRE LIBERIO
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="CentroConvivenciaAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="CentroConvivenciaAlmox"
                                        >
                                            ALMOXARIFADO CENTRO DE CONVIVÊNCIA
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="CentroConvivenciaOficinaAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="CentroConvivenciaOficinaAlmox"
                                        >
                                            ALMOXARIFADO CENTRO DE CONVIVÊNCIA
                                            OFICINA
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="SaoCristovaoAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="SaoCristovaoAlmox"
                                        >
                                            ALMOXARIFADO SÃO CRISTÓVÃO
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="BelvedereAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="BelvedereAlmox"
                                        >
                                            ALMOXARIFADO BELVEDERE
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="BelvedereOdontoAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="BelvedereOdontoAlmox"
                                        >
                                            ALMOXARIFADO BELVEDERE ODONTO
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="AltoSantosDumontAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="AltoSantosDumontAlmox"
                                        >
                                            ALMOXARIFADO ALTO SANTOS DUMONT
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="AltoSantosDumontOdontoAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="AltoSantosDumontOdontoAlmox"
                                        >
                                            ALMOXARIFADO ALTO SANTOS DUMONT
                                            ODONTO
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="ManutencaoAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="ManutencaoAlmox"
                                        >
                                            ALMOXARIFADO MANUTENÇÃO
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="ApsAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="ApsAlmox"
                                        >
                                            ALMOXARIFADO APS
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="ApsEventosAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="ApsEventosAlmox"
                                        >
                                            ALMOXARIFADO APS EVENTOS
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="SerraVerdeAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="SerraVerdeAlmox"
                                        >
                                            ALMOXARIFADO SERRA VERDE
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="FarmaciaAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="FarmaciaAlmox"
                                        >
                                            ALMOXARIFADO FARMÁCIA
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="TfdAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="TfdAlmox"
                                        >
                                            ALMOXARIFADO TFD
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="AssistenciaSaudeAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="AssistenciaSaudeAlmox"
                                        >
                                            ALMOXARIFADO ASSISTÊNCIA À SAÚDE
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="VigilanciaEpidemiologicaAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="VigilanciaEpidemiologicaAlmox"
                                        >
                                            ALMOXARIFADO VIGILÂNCIA
                                            EPIDEMIOLÓGICA
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="AmeAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="AmeAlmox"
                                        >
                                            ALMOXARIFADO AME
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="CczAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="CczAlmox"
                                        >
                                            ALMOXARIFADO CCZ
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="SaudeDoTrabalhadorAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="SaudeDoTrabalhadorAlmox"
                                        >
                                            ALMOXARIFADO SAÚDE DO TRABALHADOR
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="CariocaAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="CariocaAlmox"
                                        >
                                            ALMOXARIFADO CARIOCA
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="ParaisoAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="ParaisoAlmox"
                                        >
                                            ALMOXARIFADO PARAÍSO
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="CapsAdAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="CapsAdAlmox"
                                        >
                                            ALMOXARIFADO CAPS AD
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="CapsAdEventosAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="CapsAdEventosAlmox"
                                        >
                                            ALMOXARIFADO CAPS AD EVENTOS
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="CersamAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="CersamAlmox"
                                        >
                                            ALMOXARIFADO CERSAM
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="ResidenciaTerapeuticaAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="ResidenciaTerapeuticaAlmox"
                                        >
                                            RESIDÊNCIA TERAPÊUTICA
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="SaudeBucalAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="SaudeBucalAlmox"
                                        >
                                            ALMOXARIFADO SAUDE BUCAL
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="CaicAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="CaicAlmox"
                                        >
                                            ALMOXARIFADO CAIC
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="CaicOdontoAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="CaicOdontoAlmox"
                                        >
                                            ALMOXARIFADO CAIC ODONTO
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="DomboscoOdontoAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="DomboscoOdontoAlmox"
                                        >
                                            ALMOXARIFADO DOM BOSCO ODONTO
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="JkOdontoAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="JkOdontoAlmox"
                                        >
                                            ALMOXARIFADO JK ODONTO
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="JoaoPauloIIOdontoAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="JoaoPauloIIOdontoAlmox"
                                        >
                                            ALMOXARIFADO JOAO PAULO II ODONTO
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="NSFatimaOdontoAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="NSFatimaOdontoAlmox"
                                        >
                                            NOSSA SENHORA DE FÁTIMA ODONTO
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="PadreLiberioOdontoAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="PadreLiberioOdontoAlmox"
                                        >
                                            PADRE LIBERIO ODONTO
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="ParaisoOdontoAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="ParaisoOdontoAlmox"
                                        >
                                            PARAÍSO ODONTO
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="ProvidenciaOdontoAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="ProvidenciaOdontoAlmox"
                                        >
                                            PROVIDÊNCIA ODONTO
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="RecantoOdontoAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="RecantoOdontoAlmox"
                                        >
                                            RECANTO ODONTO
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="SaoCristovaoOdontoAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="SaoCristovaoOdontoAlmox"
                                        >
                                            SÃO CRISTÓVÂO ODONTO
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="SaoLuizOdontoAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="SaoLuizOdontoAlmox"
                                        >
                                            SÃO LUÍZ ODONTO
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="SerraVerdeOdontoAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="SerraVerdeOdontoAlmox"
                                        >
                                            SERRA VERDE ODONTO
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="TavaresOdontoAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="TavaresOdontoAlmox"
                                        >
                                            TAVARES ODONTO
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="TorneirosOdontoAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="TorneirosOdontoAlmox"
                                        >
                                            TORNEIROS ODONTO
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="VilaFerreiraOdontoAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="VilaFerreiraOdontoAlmox"
                                        >
                                            VILA FERREIRA ODONTO
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="ProvidenciaAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="ProvidenciaAlmox"
                                        >
                                            ALMOXARIFADO PROVIDÊNCIA
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="VigilanciaSaude"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="VigilanciaSaude"
                                        >
                                            ALMOXARIFADO VIGILÂNCIA EM SAUDE
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="VigilanciaSanitariaAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="VigilanciaSanitariaAlmox"
                                        >
                                            ALMOXARIFADO VIGILÂNCIA SANITÁRIA
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="AmbulatorioFisioAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="AmbulatorioFisioAlmox"
                                        >
                                            ALMOXARIFADO AMBULATÓRIO DE
                                            FISIOTERAPIA
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="EntrelacosAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="EntrelacosAlmox"
                                        >
                                            ALMOXARIFADO ENTRELAÇOS
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="RecantoVilaFerreiraAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="RecantoVilaFerreiraAlmox"
                                        >
                                            ALMOXARIFADO RECANTO/VILA FERRERIA
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="CeoAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="CeoAlmox"
                                        >
                                            ALMOXARIFADO CEO
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="NSFatimaAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="NSFatimaAlmox"
                                        >
                                            ALMOXARIFADO NS FÁTIMA
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="VigilanciaAmbientalAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="VigilanciaAmbientalAlmox"
                                        >
                                            ALMOXARIFADO VIGILÂNCIA AMBIENTAL
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="NSGracasAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="NSGracasAlmox"
                                        >
                                            ALMOXARIFADO NS GRAÇAS
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="OuvidoriaPericiaeMedicaAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="OuvidoriaPericiaeMedicaAlmox"
                                        >
                                            ALMOXARIFADO OUVIDORIA/PERÍCIA
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="TransporteAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="TransporteAlmox"
                                        >
                                            ALMOXARIFADO TRANSPORTE
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="JkAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="JkAlmox"
                                        >
                                            ALMOXARIFADO JK
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="AscensaoAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="AscensaoAlmox"
                                        >
                                            ALMOXARIFADO ASCENSÃO
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="AscensaoOdontoAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="AscensaoOdontoAlmox"
                                        >
                                            ALMOXARIFADO ASCENSÃO ODONTO
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="DomBoscoAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="DomBoscoAlmox"
                                        >
                                            ALMOXARIFADO DOM BOSCO
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="AssistenciaSaudePacientesAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="AssistenciaSaudePacientesAlmox"
                                        >
                                            ALMOXARIFADO ASSISTÊNCIA À SAÚDE /
                                            PACIENTES
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="JoaoPauloAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="JoaoPauloAlmox"
                                        >
                                            ALMOXARIFADO JOÃO PAULO II
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="PromocaoSaudeAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="PromocaoSaudeAlmox"
                                        >
                                            ALMOXARIFADO PROMOÇÃO DA SAÚDE
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="PromocaoSaudeEventosAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="PromocaoSaudeEventosAlmox"
                                        >
                                            ALMOXARIFADO PROMOÇÃO DA SAÚDE
                                            EVENTOS
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="ConselhoMunicipal"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="ConselhoMunicipal"
                                        >
                                            ALMOXARIFADO CONSELHO MUNICIPAL
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="PovoadoMeirelesAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="PovoadoMeirelesAlmox"
                                        >
                                            ALMOXARIFADO POVOADO DE MEIRELES
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="OzanamAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="OzanamAlmox"
                                        >
                                            ALMOXARIFADO CIDADE OZANAM
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="TiAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="TiAlmox"
                                        >
                                            ALMOXARIFADO TI
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="PioCanedoAlmox"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="PioCanedoAlmox"
                                        >
                                            PIO CANEDO
                                        </label>
                                    </div>
                                </details>
                            </div>
                            <div className="col">
                                <details>
                                    <summary>Saúde do Trabalhador</summary>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="MonitoramentoVisatt"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="MonitoramentoVisatt"
                                        >
                                            MONITORAMENTO - VISATT
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="Notificacoes2122"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="Notificacoes2122"
                                        >
                                            NOTIFICAÇÕES 2021 - 2022
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="ConsolidadoNotificacoes"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="ConsolidadoNotificacoes"
                                        >
                                            CONSOLIDADO NOTIFICAÇÕES 2022
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="RelatorioVapt"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="RelatorioVapt"
                                        >
                                            RELATÓRIO - VAPT
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="ControleDeAtestadosImport"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="ControleDeAtestadosImport"
                                        >
                                            CONTROLE DE ATESTADOS - IMPORTAÇÃO
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="ControleDeAtestadosBD"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="ControleDeAtestadosBD"
                                        >
                                            CONTROLE DE ATESTADOS - BD 2022
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="ControleDeAtestadosBD2023"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="ControleDeAtestadosBD2023"
                                        >
                                            CONTROLE DE ATESTADOS - BD 2023
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="ConsolidadoNotificacoesBi"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="ConsolidadoNotificacoesBi"
                                        >
                                            CONSOLIDADO NOTIFICAÇÕES 2022 BI
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="ConsolidadoAtestados"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="ConsolidadoAtestados"
                                        >
                                            CONSOLIDADO ATESTADOS 2022 BI
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="MonitoramentoSaudeTrabalhador"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="MonitoramentoSaudeTrabalhador"
                                        >
                                            MONITORAMENTO SAÚDE TRABALHADOR
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="ConsolidadoAgendas"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="ConsolidadoAgendas"
                                        >
                                            CONSOLIDADO - AGENDAS
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="CadastroDePacientes"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="CadastroDePacientes"
                                        >
                                            CADASTRO DE USUÁRIOS (PACIENTES)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="CadastroDePacientesDb"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="CadastroDePacientesDb"
                                        >
                                            CADASTRO DE USUÁRIOS (PACIENTES) DB
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="CadastroDePacientesForm"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="CadastroDePacientesForm"
                                        >
                                            CADASTRO DE USUÁRIOS (PACIENTES)
                                            FORM
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="RelatorioVaptForm"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="RelatorioVaptForm"
                                        >
                                            RELATÓRIO - VAPT FORM
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="BrunaAgenda2023"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="BrunaAgenda2023"
                                        >
                                            BRUNA - AGENDA 2023
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="FernandaAgenda2023"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="FernandaAgenda2023"
                                        >
                                            FERNANDA - AGENDA 2023
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="GrazielaAgenda2023"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="GrazielaAgenda2023"
                                        >
                                            GRAZIELA - AGENDA 2023
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="LucieneAgenda2023"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="LucieneAgenda2023"
                                        >
                                            LUCIENE - AGENDA 2023
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="GislayneAgenda2023"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="GislayneAgenda2023"
                                        >
                                            GISLAYNE - AGENDA 2023
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="RenataAgenda2023"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="RenataAgenda2023"
                                        >
                                            RENATA - AGENDA 2023
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="SirleneAgenda2023"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="SirleneAgenda2023"
                                        >
                                            SIRLENE - AGENDA 2023
                                        </label>
                                    </div>
                                </details>
                            </div>
                            <div className="col">
                                <details>
                                    <summary>CallCenter</summary>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="MonitoramentoCallCenter"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="MonitoramentoCallCenter"
                                        >
                                            MONITORAMENTO CALL CENTER
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="MonitoramentoCallCenterEmad"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="MonitoramentoCallCenterEmad"
                                        >
                                            MONITORAMENTO CALL CENTER EMAD
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="MonitoramentoCallCenterForm"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="MonitoramentoCallCenterForm"
                                        >
                                            MONITORAMENTO CALL CENTER FORM
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="MonkeypoxForm"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="MonkeypoxForm"
                                        >
                                            MONKEYPOX - NOVOS CASOS FORMS
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="AgendamentoPcrGestantesForm"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="AgendamentoPcrGestantesForm"
                                        >
                                            AGENDAMENTO PCR - GESTANTES FORMS
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="AgendamentoPcrGestantes"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="AgendamentoPcrGestantes"
                                        >
                                            AGENDAMENTO PCR - GESTANTES
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="RdqaCallCenter2023"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="RdqaCallCenter2023"
                                        >
                                            RDQA - 2023
                                        </label>
                                    </div>
                                </details>
                            </div>
                            <div className="col">
                                <details>
                                    <summary>Centro de Convivência</summary>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="CentroDeConvivencia"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="CentroDeConvivencia"
                                        >
                                            CENTRO DE CONVIVÊNCIA
                                        </label>
                                    </div>
                                </details>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <details>
                                    <summary>Atenção Psicosocial</summary>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="RdqaAtencaopsicosocial2023"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="RdqaAtencaopsicosocial2023"
                                        >
                                            RDQA - 2023
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="ConsolidadoAtendimentos"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="ConsolidadoAtendimentos"
                                        >
                                            CONSOLIDADO ATENDIMENTOS SAÚDE
                                            MENTAL
                                        </label>
                                    </div>
                                </details>
                            </div>
                            <div className="col">
                                <details>
                                    <summary>Vigilância Epidemiológica</summary>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="ConsolidadoCovid"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="ConsolidadoCovid"
                                        >
                                            CONSOLIDADO - COVID
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="RelatorioDeFocosDengue"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="RelatorioDeFocosDengue"
                                        >
                                            RELATÓRIO DE FOCOS - DENGUE
                                        </label>
                                    </div>
                                </details>
                            </div>
                            <div className="col">
                                <details>
                                    <summary>APS</summary>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="PaginaAps"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="PaginaAps"
                                        >
                                            PÁGINA APS
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="EscalaGeralFerias2324"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="EscalaGeralFerias2324"
                                        >
                                            ESCALA FERIAS 2023 - 2024
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="RdqaAps2023"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="RdqaAps2023"
                                        >
                                            RDQA - 2023
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="SolicitacaoDeFerias"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="SolicitacaoDeFerias"
                                        >
                                            SOLICITAÇÃO DE FÉRIAS
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="LevantamentoGruposPrioritariosFarmacia"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="LevantamentoGruposPrioritariosFarmacia"
                                        >
                                            LEVANTAMENTO GRUPOS PRIORITÁRIOS
                                            FARMÁCIA
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="NotificacaoDeAusenciaProfissional"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="NotificacaoDeAusenciaProfissional"
                                        >
                                            NOTIFICAÇÃO DE AUSÊNCIA DO
                                            PROFISSIONAL
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="ArquivosAps"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="ArquivosAps"
                                        >
                                            ARQUIVOS
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="AltoSantosDumontAgenda"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="AltoSantosDumontAgenda"
                                        >
                                            ALTO SANTOS DUMONT AGENDA
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="BaixoSantosDumontAgenda"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="BaixoSantosDumontAgenda"
                                        >
                                            UBS BAIXO SANTOS DUMONT AGENDA
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="BelvedereAgenda"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="BelvedereAgenda"
                                        >
                                            UBS BELVEDERE AGENDA
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="CaicAgenda"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="CaicAgenda"
                                        >
                                            UBS CAIC AGENDA
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="DomBoscoAgenda"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="DomBoscoAgenda"
                                        >
                                            UBS DOM BOSCO AGENDA
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="GraoParaAgenda"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="GraoParaAgenda"
                                        >
                                            UBS GRÃO PARA AGENDA
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="NsFatimaAgenda"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="NsFatimaAgenda"
                                        >
                                            UBS N.S FÁTIMA AGENDA
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="JoaoPauloAgenda"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="JoaoPauloAgenda"
                                        >
                                            UBS JOÃO PAULO AGENDA
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="NsGracasAgenda"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="NsGracasAgenda"
                                        >
                                            UBS N.S GRAÇAS AGENDA
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="PadreLiberioAgenda"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="PadreLiberioAgenda"
                                        >
                                            UBS PADRE LIBERIO AGENDA
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="RecantoAgenda"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="RecantoAgenda"
                                        >
                                            UBS RECANTO AGENDA
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="SaoPedroAgenda"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="SaoPedroAgenda"
                                        >
                                            UBS SÃO PEDRO AGENDA
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="SeringueirasAgenda"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="SeringueirasAgenda"
                                        >
                                            UBS SERINGUEIRAS AGENDA
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="SerraVerdeAgenda"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="SerraVerdeAgenda"
                                        >
                                            UBS SERRA VERDE AGENDA
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="VilaFerreiraAgenda"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="VilaFerreiraAgenda"
                                        >
                                            UBS VILA FERREIRA AGENDA
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="JkAgenda"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="JkAgenda"
                                        >
                                            UBS JK AGENDA
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="TavaresAgenda"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="TavaresAgenda"
                                        >
                                            UBS TAVARES AGENDA
                                        </label>
                                    </div>
                                </details>
                            </div>
                            <div className="col">
                                <details>
                                    <summary>A.M. Fisioterapia</summary>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="RdqaAmbulatorioFisioterapia2023"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="RdqaAmbulatorioFisioterapia2023"
                                        >
                                            RDQA - 2023
                                        </label>
                                    </div>
                                </details>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <details>
                                    <summary>AME</summary>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="RdqaAme2023"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="RdqaAme2023"
                                        >
                                            RDQA - 2023
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="RdqaAmeHiperdia2023"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="RdqaAmeHiperdia2023"
                                        >
                                            HIPERDIA RDQA - 2023
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="DemandaAtendidaAme"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="DemandaAtendidaAme"
                                        >
                                            AME DEMANDA ATENDIDA
                                        </label>
                                    </div>
                                </details>
                            </div>

                            <div className="col">
                                <details>
                                    <summary>Assistência à Saúde</summary>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="RdqaAssistenciaSaude2023"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="RdqaAssistenciaSaude2023"
                                        >
                                            RDQA - 2023
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="CadastroDePacientesAssistenciaSaude"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="CadastroDePacientesAssistenciaSaude"
                                        >
                                            CADASTRO DE PACIENTES
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="ConsolidadoAssistencia"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="ConsolidadoAssistencia"
                                        >
                                            CONSOLIDADO
                                        </label>
                                    </div>
                                </details>
                            </div>

                            <div className="col">
                                <details>
                                    <summary>Farmácia</summary>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="RdqaFarmacia2023"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="RdqaFarmacia2023"
                                        >
                                            RDQA - 2023
                                        </label>
                                    </div>
                                </details>
                            </div>

                            <div className="col">
                                <details>
                                    <summary>Laboratório Municipal</summary>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="RdqaLaboratorioMunicipal2023"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="RdqaLaboratorioMunicipal2023"
                                        >
                                            RDQA - 2023
                                        </label>
                                    </div>
                                </details>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <details>
                                    <summary>Atenção à Saúde Bucal</summary>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="RdqaAtencaoSaudeBucal2023"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="RdqaAtencaoSaudeBucal2023"
                                        >
                                            RDQA - 2023
                                        </label>
                                    </div>
                                </details>
                            </div>

                            <div className="col">
                                <details>
                                    <summary>Captação de Recursos</summary>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="RdqaCaptacaoRecursos2023"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="RdqaCaptacaoRecursos2023"
                                        >
                                            RDQA - 2023
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="Saldo"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="Saldo"
                                        >
                                            ENTRADA DE RECURSOS (Saldo)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="PagamentosEmpenhos"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="PagamentosEmpenhos"
                                        >
                                            PAGAMENTOS EMPENHOS
                                        </label>
                                    </div>
                                </details>
                            </div>

                            <div className="col">
                                <details>
                                    <summary>CER</summary>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="RdqaCer2023"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="RdqaCer2023"
                                        >
                                            RDQA - 2023
                                        </label>
                                    </div>
                                </details>
                            </div>

                            <div className="col">
                                <details>
                                    <summary>Contabilidade</summary>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="RdqaContabilidade2023"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="RdqaContabilidade2023"
                                        >
                                            RDQA - 2023
                                        </label>
                                    </div>
                                </details>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <details>
                                    <summary>Controle Social</summary>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="RdqaControleSocial2023"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="RdqaControleSocial2023"
                                        >
                                            RDQA - 2023
                                        </label>
                                    </div>
                                </details>
                            </div>

                            <div className="col">
                                <details>
                                    <summary>Gestão em Saúde</summary>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="RdqaGestaoSaude2023"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="RdqaGestaoSaude2023"
                                        >
                                            RDQA - 2023
                                        </label>
                                    </div>
                                </details>
                            </div>

                            <div className="col">
                                <details>
                                    <summary>Judicialização</summary>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="RdqaJudicializacao2023"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="RdqaJudicializacao2023"
                                        >
                                            RDQA - 2023
                                        </label>
                                    </div>
                                </details>
                            </div>
                            <div className="col">
                                <details>
                                    <summary>Manutenção de Unidades</summary>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="RdqaManutencaoUnidades2023"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="RdqaManutencaoUnidades2023"
                                        >
                                            RDQA - 2023
                                        </label>
                                    </div>
                                </details>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <details>
                                    <summary>Ouvidoria</summary>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="RdqaOuvidoria2023"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="RdqaOuvidoria2023"
                                        >
                                            RDQA - 2023
                                        </label>
                                    </div>
                                </details>
                            </div>

                            <div className="col">
                                <details>
                                    <summary>Recursos Humanos</summary>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="GeradorMemorando"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="GeradorMemorando"
                                        >
                                            GERADOR DE MEMORANDO
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="GeradorOficio"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="GeradorOficio"
                                        >
                                            GERADOR DE OFICIO
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="RdqaRH2023"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="RdqaRH2023"
                                        >
                                            RDQA - 2023
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="ImportService"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="ImportService"
                                        >
                                            IMPORT SERVICE
                                        </label>
                                    </div>
                                </details>
                            </div>

                            <div className="col">
                                <details>
                                    <summary>SAD</summary>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="RdqaSad2023"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="RdqaSad2023"
                                        >
                                            RDQA - 2023
                                        </label>
                                    </div>
                                </details>
                            </div>
                            <div className="col">
                                <details>
                                    <summary>Transporte em Saúde</summary>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="BancoDeDadosPassagensTfd"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="BancoDeDadosPassagensTfd"
                                        >
                                            BD CADASTRO - PASSAGENS TFD
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="BaseDeCadastro2"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="BaseDeCadastro2"
                                        >
                                            BASE DE CADASTRO 2
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="BaseDeCadastro3"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="BaseDeCadastro3"
                                        >
                                            BASE DE CADASTRO 3
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="BaseDeCadastro4"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="BaseDeCadastro4"
                                        >
                                            BASE DE CADASTRO 4
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="BaseDeCadastro5"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="BaseDeCadastro5"
                                        >
                                            BASE DE CADASTRO 5
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="CadastroDePacienteTfd"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="CadastroDePacienteTfd"
                                        >
                                            CADASTRO DE PACIENTES
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="CadastroDeAcompanhanteTfd"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="CadastroDeAcompanhanteTfd"
                                        >
                                            CADASTRO DE ACOMPANHANTES
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="RdqaTransporteSanitario2023"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="RdqaTransporteSanitario2023"
                                        >
                                            RDQA - 2023
                                        </label>
                                    </div>
                                </details>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-3">
                                <details>
                                    <summary>UPA</summary>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="CustosOperacionaisUpa2023"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="CustosOperacionaisUpa2023"
                                        >
                                            CUSTOS OPERACIONAIS - 2023
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="RdqaUpa2023"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="RdqaUpa2023"
                                        >
                                            RDQA - 2023
                                        </label>
                                    </div>
                                </details>
                            </div>

                            <div className="col-3">
                                <details>
                                    <summary>Vigilância em Saúde</summary>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="RdqaVigilanciaSaude2023"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="RdqaVigilanciaSaude2023"
                                        >
                                            RDQA - 2023
                                        </label>
                                    </div>
                                </details>
                            </div>
                            <div className="col-3">
                                <details>
                                    <summary>REGULAÇÃO / TFD</summary>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="linksVisualizacaoTfd"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="linksVisualizacaoTfd"
                                        >
                                            LINKS VISUALIZÇÃO
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="CEO"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="CEO"
                                        >
                                            CEO
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="FisioPhysio"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="FisioPhysio"
                                        >
                                            FISIO-PHYSIO
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="ControleEntradasSaidas20192020"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="ControleEntradasSaidas20192020"
                                        >
                                            CONTROLE DE ENTRADAS E SAÍDAS
                                            2019/2020
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="ControleEntradasSaidas2023tfd"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="ControleEntradasSaidas2023tfd"
                                        >
                                            CONTROLE DE ENTRADAS E SAÍDAS 2023
                                            SHEETS
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="ControleEntradasSaidasDb"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="ControleEntradasSaidasDb"
                                        >
                                            CONTROLE DE ENTRADAS DB 2021/2022
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="ControleGastosMicroRegiaoTfd"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="ControleGastosMicroRegiaoTfd"
                                        >
                                            CONTROLE DE GASTOS MICRO REGIÃO TFD
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="CirurgiasEletivasTfd"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="CirurgiasEletivasTfd"
                                        >
                                            CIRURGIAS ELETIVAS TFD
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="FisioAmbulatorioTfd"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="FisioAmbulatorioTfd"
                                        >
                                            AMBULATÓRIO DE FISIOTERAPIA TFD
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="DemandaCatarata"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="DemandaCatarata"
                                        >
                                            DEMANDA CATARATA TFD
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="ControleEntradasSaidasFormTfd"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="ControleEntradasSaidasFormTfd"
                                        >
                                            CONTROLE DE ENTRADAS E SAÍDAS - 2023
                                            TFD
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="GeradorMemorandoTfd"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="GeradorMemorandoTfd"
                                        >
                                            GERADOR DE MEMORANDO TFD
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="GeradorOficioTfd"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="GeradorOficioTfd"
                                        >
                                            GERADOR DE OFÍCIO TFD
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="RdqaRegulacaoAuditoria2023"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="RdqaRegulacaoAuditoria2023"
                                        >
                                            RDQA - 2023
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="ControleEntradasSaidas20241S"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="ControleEntradasSaidas20241S"
                                        >
                                            CONTROLE DE ENTRADAS E SAÍDAS - 2024
                                            TFD
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="ControleEntradasSaidas2024Import"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="ControleEntradasSaidas2024Import"
                                        >
                                            CONTROLE DE ENTRADAS E SAÍDAS - 2024
                                            TFD IMPORT
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="ControleEntradasSaidas20241SForms"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="ControleEntradasSaidas20241SForms"
                                        >
                                            CONTROLE DE ENTRADAS E SAÍDAS - 2024
                                            FORMS TFD
                                        </label>
                                    </div>
                                </details>
                            </div>
                            <div className="col-3">
                                <details>
                                    <summary>Perícia Médica</summary>
                                </details>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <details>
                                    <summary>Oftamologia</summary>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="RdqaOftamologia2023"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="RdqaOftamologia2023"
                                        >
                                            RDQA - 2023
                                        </label>
                                    </div>
                                </details>
                            </div>
                            <div className="col-3">
                                <details>
                                    <summary>Comunicação</summary>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="CoberturaDeEventos"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="CoberturaDeEventos"
                                        >
                                            COBERTURA DE EVENTOS
                                        </label>
                                    </div>
                                </details>
                            </div>
                            <div className="col-3">
                                <details>
                                    <summary>TI</summary>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="EscalaSobreAvisoTi"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="EscalaSobreAvisoTi"
                                        >
                                            ESCALA SOBRE AVISO
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="RdqaTi2023"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="RdqaTi2023"
                                        >
                                            TI RDQA 2023
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="SolicitacaoCompraTi"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="SolicitacaoCompraTi"
                                        >
                                            SOLICITAÇÃO DE COMPRA TI
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="ControleDispositivosTi"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="ControleDispositivosTi"
                                        >
                                            CONTROLE DE DISPOSITIVOS TI
                                        </label>
                                    </div>
                                </details>
                            </div>
                            <div className="col-3">
                                <details>
                                    <summary>AME HIPERDIA</summary>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="AcompanhamentoPacientesHiperdia"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="AcompanhamentoPacientesHiperdia"
                                        >
                                            ACOMPANHAMENTO PACIENTES
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="AcompanhamentoHiperdiaImport"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="AcompanhamentoHiperdiaImport"
                                        >
                                            ACOMPANHAMENTO PACIENTES IMPORT
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="CadastroPacientesHiperdia"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="CadastroPacientesHiperdia"
                                        >
                                            CADASTRO DE PACIENTES
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="ConsolidadoHiperdia"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="ConsolidadoHiperdia"
                                        >
                                            CONSOLIDADO BI
                                        </label>
                                    </div>
                                </details>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Usuarios;
