import { Route, Routes } from "react-router-dom";
import Inicio from "../pages/Inicio";
import AcompanhamentoDosContratosEatasVigentes from "../pages/compras/AcompanhamentoDosContratosEatasVigentes";
import AcompanhamentoDosProcessos from "../pages/compras/AcompanhamentoDosProcessos";
import FluxoParaRequisiçãoDeMercadorias from "../pages/compras/FluxoParaRequisiçãoDeMercadorias";
import PagamentosEmpenhos from "../pages/compras/PagamentosEmpenhos";
import MonitoramentoVisatt from "../pages/saudeDoTrabalhador/MonitoramentoVisatt";
import Notificacoes2122 from "../pages/saudeDoTrabalhador/Notificacoes2122";
import ConsolidadoNotificacoes from "../pages/saudeDoTrabalhador/ConsolidadoNotificacoes";
import RelatorioVapt from "../pages/saudeDoTrabalhador/RelatorioVapt";
import ControleDeAtestadosImport from "../pages/saudeDoTrabalhador/ControleDeAtestadosImport";
import ConsolidadoNotificacoesBi from "../pages/saudeDoTrabalhador/bi/ConsolidadoNotificacoesBi";
import ConsolidadoAtestados from "../pages/saudeDoTrabalhador/bi/ConsolidadoAtestados";
import MonitoramentoSaudeTrabalhador from "../pages/saudeDoTrabalhador/bi/MonitoramentoSaudeTrabalhador";
import MonitoramentoCallCenter from "../pages/callCenter/sheet/MonitoramentoCallCenter";
import CentroDeConvivencia from "../pages/centroDeConvivencia/bi/CentroDeConvivencia";
import ConsolidadoAtendimentos from "../pages/atencaopsicosocial/bi/ConsolidadoAtendimentos";
import ConsolidadoCovid from "../pages/vigilanciaEpidemiologica/bi/ConsolidadoCovid";
import RelatorioDeFocosDengue from "../pages/vigilanciaEpidemiologica/bi/RelatorioDeFocosDengue";
import Usuarios from "../pages/usuarios";
import Private from "../pages/private";
import Login from "../pages/login/login";
import AlteracaoSenha from "../pages/login/AlteracaoSenha";
import LinksUteis from "../pages/linksuteis/linksUteis";
import SolicitacaoDeFerias from "../pages/aps/forms/SolicitacaoDeFerias";
import LevantamentoGruposPrioritariosFarmacia from "../pages/aps/forms/LevantamentoGruposPrioritariosFarmacia";
import NotificacaoDeAusenciaProfissional from "../pages/aps/forms/NotificacaoDeAusenciaProfissional";
import ArquivosAps from "../pages/aps/drive/ArquivosAps";
import Tracker from "../pages/usuarios/tracker";
import RdqaAmbulatorioFisioterapia2023 from "../pages/ambulatorioFisioterapia/sheets/Rdqa2023";
import RdqaAme2023 from "../pages/ame/sheets/Rdqa2023";
import RdqaAssistenciaSaude2023 from "../pages/assistenciaSaude/sheets/Rdqa2023";
import RdqaFarmacia2023 from "../pages/farmacia/sheets/Rdqa2023";
import RdqaLaboratorioMunicipal2023 from "../pages/laboratorioMunicipal/sheets/Rdqa2023";
import RdqaAtencaoSaudeBucal2023 from "../pages/atencaoSaudeBucal/sheets/Rdqa2023";
import RdqaAps2023 from "../pages/aps/sheets/Rdqa2023";
import RdqaCallCenter2023 from "../pages/callCenter/sheet/Rdqa2023";
import RdqaCaptacaoRecursos2023 from "../pages/captacaoRecursos/sheets/Rdqa2023";
import RdqaCer2023 from "../pages/cer/sheets/Rdqa2023";
import RdqaCompras2023 from "../pages/compras/Rdqa2023";
import RdqaContabilidade2023 from "../pages/contabilidade/sheets/Rdqa2023";
import RdqaRegulacaoAuditoria2023 from "../pages/regulacaoAuditoria/sheets/Rdqa2023";
import RdqaControleSocial2023 from "../pages/controleSocial/sheets/Rdqa2023";
import RdqaGestaoSaude2023 from "../pages/gestaoSaude/sheets/Rdqa2023";
import RdqaAmeHiperdia2023 from "../pages/ame/sheets/RdqaHiperdia2023";
import RdqaJudicializacao2023 from "../pages/judicializacao/sheets/Rdqa2023";
import RdqaManutencaoUnidades2023 from "../pages/manutencaoUnidades/sheets/Rdqa2023";
import RdqaOuvidoria2023 from "../pages/ouvidoria/sheets/Rdqa2023";
import RdqaRH2023 from "../pages/recursosHumanos/sheets/Rdqa2023";
import RdqaAtencaopsicosocial2023 from "../pages/atencaopsicosocial/sheet/Rdqa2023";
import RdqaSad2023 from "../pages/sad/sheets/Rdqa2023";
import RdqaTi2023 from "../pages/ti/sheets/Rdqa2023";
import RdqaTransporteSanitario2023 from "../pages/transporteSanitario/sheets/Rdqa2023";
import RdqaUpa2023 from "../pages/upa/sheets/Rdqa2023";
import RdqaVigilanciaSaude2023 from "../pages/vigilanciaSaude/sheets/Rdqa2023";
import ProtocolosAprovados from "../pages/protocolosAprovados/Index";
import Vale from "../pages/coordenacaoGeral/Vale";
import Links from "../pages/coordenacaoGeral/Links";
import AcompanhamentoIcismap from "../pages/coordenacaoGeral/AcompanhamentoIcismep";
import Saldo from "../pages/captacaoRecursos/sheets/Saldo";
import PaginaAps from "../pages/aps/PaginaAps";
import GeradorMemorando from "../pages/recursosHumanos/sheets/GeradorMemorando";
import GeradorOficio from "../pages/recursosHumanos/sheets/GeradorOficio";
import Index from "../pages/painelAvisos/Index";
import ControleDeAtestadosBD from "../pages/saudeDoTrabalhador/ControleDeAtestadosBD";
import AgendasSaudeDoTrabalhador from "../pages/saudeDoTrabalhador/Agendas";
import ConsolidadoAgendas from "../pages/saudeDoTrabalhador/agendas/ConnsolidadoAgendas";
import CadastroDePacientes from "../pages/saudeDoTrabalhador/agendas/CadastroDePacientes";
import BrunaAgenda2023 from "../pages/saudeDoTrabalhador/agendas/BrunaAgenda2023";
import FernandaAgenda2023 from "../pages/saudeDoTrabalhador/agendas/FernandaAgenda2023";
import GrazielaAgenda2023 from "../pages/saudeDoTrabalhador/agendas/GrazielaAgenda2023";
import LucieneAgenda2023 from "../pages/saudeDoTrabalhador/agendas/LucieneAgenda2023";
import RenataAgenda2023 from "../pages/saudeDoTrabalhador/agendas/RenataAgenda2023";
import SirleneAgenda2023 from "../pages/saudeDoTrabalhador/agendas/SirleneAgenda2023";
import CadastroDePacientesForm from "../pages/saudeDoTrabalhador/CadastroDePacientesForm";
import RelatorioVaptForm from "../pages/saudeDoTrabalhador/RelatorioVaptForm";
import MonitoramentoCallCenterEmad from "../pages/callCenter/sheet/MonitoramentoCallCenterEmad";
import AgendamentoPcrGestantes from "../pages/callCenter/sheet/AgendamentoPcrGestantes";
import MonitoramentoCallCenterForm from "../pages/callCenter/forms/MonitoramentoCallCenterForm";
import MonkeypoxForm from "../pages/callCenter/forms/MonkeypoxForm";
import AgendamentoPcrGestantesForm from "../pages/callCenter/forms/AgendamentoPcrGestantesForm";
import BancoDeDadosPassagensTfd from "../pages/tfd/sheets/BancoDeDadosPassagensTfd";
import BaseDeCadastro2 from "../pages/tfd/sheets/BaseDeCadastro2";
import BaseDeCadastro3 from "../pages/tfd/sheets/BaseDeCadastro3";
import BaseDeCadastro4 from "../pages/tfd/sheets/BaseDeCadastro4";
import BaseDeCadastro5 from "../pages/tfd/sheets/BaseDeCadastro5";
import CustosOperacionaisUpa2023 from "../pages/upa/sheets/CustosOperacionaisUpa2023";
import EscalaSobreAvisoTi from "../pages/ti/sheets/EscalaSobreAvisoTi";
import MonitoramentoCirurgiasEletivas from "../pages/coordenacaoGeral/MonitoramentoCirurgiasEletivas";
import EscalaGeralFerias2324 from "../pages/aps/sheets/EscalaGeralFerias2324";
import CadastroDePacienteTfd from "../pages/tfd/forms/CadastroDePacienteTfd";
import CadastroDeAcompanhanteTfd from "../pages/tfd/forms/CadastroDeAcompanhanteTfd";
import GislayneAgenda2023 from "../pages/saudeDoTrabalhador/agendas/GislayneAgenda2023";
import Configuracao from "../pages/others/Configuracao";
import FisioPhysio from "../pages/tfd/sheets/FisioPhysio";
import ControleEntradasSaidas20192020 from "../pages/tfd/sheets/ControleEntradasSaidas20192020";
import ControleEntradasSaidasDb from "../pages/tfd/sheets/ControleEntradasSaidasDb";
import ControleGastosMicroRegiaoTfd from "../pages/tfd/sheets/ControleGastosMicroRegiaoTfd";
import CirurgiasEletivasTfd from "../pages/tfd/sheets/CirurgiasEletivasTfd";
import FisioAmbulatorioTfd from "../pages/tfd/sheets/FisioAmbulatorioTfd";
import DemandaCatarata from "../pages/tfd/sheets/DemandaCatarata";
import ControleEntradasSaidasFormTfd from "../pages/tfd/forms/ControleEntradasSaidasFormTfd";
import ControleEntradasSaidas2023 from "../pages/tfd/sheets/ControleEntradasSaidas2023";
import ControleDeAtestadosBD2023 from "../pages/saudeDoTrabalhador/ControleDeAtestadosBD2023";
import DemandaAtendidaAme from "../pages/ame/sheets/DemandaAtendidaAme";
import GeradorMemorandoTfd from "../pages/tfd/forms/GeradorMemorandoTfd";
import GeradorOficioTfd from "../pages/tfd/forms/GeradorOficioTfd";
import LinksVisualizacaoTfd from "../pages/tfd/LinksVisualizacaoTfd";
import FisioPhysioView from "../pages/tfd/linksview/FisioPhysioView";
import RdqaOftamologia2023 from "../pages/oftamologia/sheets/Rdqa2023";
import AlmoxarifadoComprasInicio from "../pages/compras/almoxarifado/AlmoxInicio";
import UpaMedicamentosAlmox from "../pages/compras/almoxarifado/UpaMedicamentosAlmox";
import AlmoxarifadoCentralAlmox from "../pages/compras/almoxarifado/AlmoxarifadoCentralAlmox";
import BaixoSantosDumontAlmox from "../pages/compras/almoxarifado/BaixoSantosDumontAlmox";
import GraoParaAlmox from "../pages/compras/almoxarifado/GraoParaAlmox";
import NSPiedadeAlmox from "../pages/compras/almoxarifado/NSPiedadeAlmox";
import SaoPedroAlmox from "../pages/compras/almoxarifado/SaoPedroAlmox";
import SeringueirasAlmox from "../pages/compras/almoxarifado/SeringueirasAlmox";
import TavaresAlmox from "../pages/compras/almoxarifado/TavaresAlmox";
import UpaMateriaisAlmox from "../pages/compras/almoxarifado/UpaMateriaisAlmox";
import WalterMartinsAlmox from "../pages/compras/almoxarifado/WalterMartinsAlmox";
import FormularioEncaminhamentoEntrelacos from "../pages/entrelacos/forms/FormularioEncaminhamentoEntrelacos";
import CoberturaDeEventos from "../pages/comunicacao/forms/CoberturaDeEventos";
import SadAlmox from "../pages/compras/almoxarifado/SadAlmox";
import LgbtAlmox from "../pages/compras/almoxarifado/LgbtAlmox";
import PadreLiberioAlmox from "../pages/compras/almoxarifado/PadreLiberioAlmox";
import CentroConvivenciaAlmox from "../pages/compras/almoxarifado/CentroConvivenciaAlmox";
import SaoCristovaoAlmox from "../pages/compras/almoxarifado/SaoCristovaoAlmox";
import BelvedereAlmox from "../pages/compras/almoxarifado/BelvedereAlmox";
import AltoSantosDumontAlmox from "../pages/compras/almoxarifado/AltoSantosDumontAlmox";
import ManutencaoAlmox from "../pages/compras/almoxarifado/ManutencaoAlmox";
import ApsAlmox from "../pages/compras/almoxarifado/ApsAlmox";
import AssistenciaSaudeAlmox from "../pages/compras/almoxarifado/AssistenciaSaudeAlmox";
import TfdAlmox from "../pages/compras/almoxarifado/TfdAlmox";
import VigilanciaEpidemiologicaAlmox from "../pages/compras/almoxarifado/VigilanciaEpidemiologicaAlmox";
import AmeAlmox from "../pages/compras/almoxarifado/AmeAlmox";
import CczAlmox from "../pages/compras/almoxarifado/CczAlmox";
import CadastroDePacientesDb from "../pages/saudeDoTrabalhador/CadastroDePacientesDb";
import SaudeDoTrabalhadorAlmox from "../pages/compras/almoxarifado/SaudeDoTrabalhadorAlmox";
import CariocaAlmox from "../pages/compras/almoxarifado/CariocaAlmox";
import TorneirosAlmox from "../pages/compras/almoxarifado/TorneirosAlmox";
import ParaisoAlmox from "../pages/compras/almoxarifado/ParaisoAlmox";
import CapsAdAlmox from "../pages/compras/almoxarifado/CapsAdAlmox";
import CaicAlmox from "../pages/compras/almoxarifado/CaicAlmox";
import VilaFerreiraAlmox from "../pages/compras/almoxarifado/VilaFerreiraAlmox";
import ProvidenciaAlmox from "../pages/compras/almoxarifado/ProvidenciaAlmox";
import VigilanciaSaude from "../pages/compras/almoxarifado/VigilanciaSaudeAlmox";
import VigilanciaSanitariaAlmox from "../pages/compras/almoxarifado/VigilanciaSanitariaAlmox";
import AmbulatorioFisioAlmox from "../pages/compras/almoxarifado/AmbulatorioFisioAlmox";
import EntrelacosAlmox from "../pages/compras/almoxarifado/EntrelacosAlmox";
import RecantoVilaFerreiraAlmox from "../pages/compras/almoxarifado/RecantoVilaFerreiraAlmox";
import CapsAdEventosAlmox from "../pages/compras/almoxarifado/CapsAdEventosAlmox";
import SaudeBucalAlmox from "../pages/compras/almoxarifado/SaudeBucalAlmox";
import CeoAlmox from "../pages/compras/almoxarifado/CeoAlmox";
import NSFatimaAlmox from "../pages/compras/almoxarifado/NSFatimaAlmox";
import VigilanciaAmbientalAlmox from "../pages/compras/almoxarifado/VigilanciaAmbientalAlmox";
import ApsEventosAlmox from "../pages/compras/almoxarifado/ApsEventosAlmox";
import SerraVerdeAlmox from "../pages/compras/almoxarifado/SerraVerdeAlmox";
import FarmaciaAlmox from "../pages/compras/almoxarifado/FarmaciaAlmox";
import CersamAlmox from "../pages/compras/almoxarifado/CersamAlmox";
import ResidenciaTerapeuticaAlmox from "../pages/compras/almoxarifado/ResidenciaTerapeuticaAlmox";
import NSGracasAlmox from "../pages/compras/almoxarifado/NSGracasAlmox";
import CadastroDePacientesAssistenciaSaude from "../pages/assistenciaSaude/sheets/CadastroDePacientesAssistenciaSaude";
import CadastroDePacientesAssistenciaSaudeForm from "../pages/assistenciaSaude/forms/CadastroDePacientesAssistenciaSaudeForm";
import OuvidoriaPericiaeMedicaAlmox from "../pages/compras/almoxarifado/OuvidoriaPericiaeMedicaAlmox";
import TransporteAlmox from "../pages/compras/almoxarifado/TransporteAlmox";
import JkAlmox from "../pages/compras/almoxarifado/JkAlmox";
import InicioAgenda from "../pages/aps/sheets/agendas/InicioAgenda";
import AgendaAps from "../pages/aps/sheets/agendas/Agenda";
import AscensaoAlmox from "../pages/compras/almoxarifado/AscensaoAlmox";
import DomBoscoAlmox from "../pages/compras/almoxarifado/DomBoscoAlmox";
import AssistenciaSaudePacientesAlmox from "../pages/compras/almoxarifado/AssistenciaSaudePacientesAlmox";
import JoaoPauloAlmox from "../pages/compras/almoxarifado/JoaoPauloAlmox";
import PromocaoSaudeAlmox from "../pages/compras/almoxarifado/PromocaoSaudeAlmox";
import PromocaoSaudeEventosAlmox from "../pages/compras/almoxarifado/PromocaoSaudeEventosAlmox";
import ConselhoMunicipal from "../pages/compras/almoxarifado/ConselhoMunicipal";
import PovoadoMeirelesAlmox from "../pages/compras/almoxarifado/PovoadoMeirelesAlmox";
import OzanamAlmox from "../pages/compras/almoxarifado/OzanamAlmox";
import PioCanedoAlmox from "../pages/compras/almoxarifado/PioCanedoAlmox";
import AcompanhamentoPacientesHiperdia from "../pages/ameHiperdia/sheets/AcompanhamentoPacientesHiperdia";
import AcompanhamentoHiperdiaImport from "../pages/ameHiperdia/sheets/AcompanhamentoHiperdiaImport";
import CadastroPacientesHiperdia from "../pages/ameHiperdia/forms/CadastroPacientesHiperdia";
import ConsolidadoHiperdia from "../pages/ameHiperdia/bi/ConsolidadoHiperdia";
import SolicitacaoCompraTi from "../pages/ti/forms/SolicitacaoCompraTi";
import ConsolidadoAssistencia from "../pages/assistenciaSaude/bi/ConsolidadoAssistencia";
import CentroConvivenciaOficinaAlmox from "../pages/compras/almoxarifado/CentroConvivenciaOficinaAlmox";
import TiAlmox from "../pages/compras/almoxarifado/TiAlmox";
import ControleEntradasSaidas20241S from "../pages/tfd/sheets/ControleEntradasSaidas20241S";
import ControleEntradasSaidas20241SForms from "../pages/tfd/forms/ControleEntradasSaidas20241SForms";
import BrunaAgenda2024 from "../pages/saudeDoTrabalhador/agendas/BrunaAgenda2024";
import RenataAgenda2024 from "../pages/saudeDoTrabalhador/agendas/RenataAgenda2024";
import ConsolidadoNotificacoes2023 from "../pages/saudeDoTrabalhador/ConsolidadoNotificacoes2023";
import SirleneAgenda2024 from "../pages/saudeDoTrabalhador/agendas/SirleneAgenda2024";
import Psicologo2024 from "../pages/saudeDoTrabalhador/agendas/Psicologo2024";
import SegundoPsicologo2024 from "../pages/saudeDoTrabalhador/agendas/SegundoPsicologo2024";
import LucieneAgenda2024 from "../pages/saudeDoTrabalhador/agendas/LucieneAgenda2024";
import GrazielaAgenda2024 from "../pages/saudeDoTrabalhador/agendas/GrazielaAgenda2024";
import ControleEntradasSaidas2024Import from "../pages/tfd/linksview/ControleEntradasSaidas2024Import";
import DemandaAtendidaAme2024 from "../pages/ame/sheets/DemandaAtendidaAme2024";
import ConsorciosPrevisao from "../pages/coordenacaoGeral/ConsorciosPrevisao";
import Sentinela from "../pages/compras/Sentinela";
import CEO from "../pages/tfd/sheets/CEO";
import CEOForm from "../pages/tfd/forms/CEOForm";
import ImportService from "../pages/recursosHumanos/sheets/ImportService";
import RapsAlmox from "../pages/compras/almoxarifado/RapsAlmox";
import Reunioessms from "../pages/reunioessms/Index";
import CarteiraServicos from "../pages/CarteiraServicos/Index";
import MonitoramentoNf from "../pages/coordenacaoGeral/MonitoramentoNf";
import MonitoramentoNfView from "../pages/coordenacaoGeral/MonitoramentoNfView";
import ControleDispositivosTi from "../pages/ti/sheets/ControleDispositivosTi";
import AltoSantosDumontOdontoAlmox from "../pages/compras/almoxarifado/AltoSantosDumontOdontoAlmox";
import AscensaoOdonto from "../pages/compras/almoxarifado/AscensaoOdontoAlmox";
import AscensaoOdontoAlmox from "../pages/compras/almoxarifado/AscensaoOdontoAlmox";
import BelvedereOdontoAlmox from "../pages/compras/almoxarifado/BelvedereOdontoAlmox";
import CaicOdontoAlmox from "../pages/compras/almoxarifado/CaicOdontoAlmox";
import ComissaoEmergencia from "../pages/comissaoEmergencia/Index";
import DomboscoOdontoAlmox from "../pages/compras/almoxarifado/DomboscoOdontoAlmox";
import JkOdontoAlmox from "../pages/compras/almoxarifado/JkOdontoAlmox";
import JoaoPauloIIOdontoAlmox from "../pages/compras/almoxarifado/JoaoPauloIIOdontoAlmox";
import NSFatimaOdontoAlmox from "../pages/compras/almoxarifado/NSFatimaOdontoAlmox";
import PadreLiberioOdontoAlmox from "../pages/compras/almoxarifado/PadreLiberioOdontoAlmox";
import ParaisoOdontoAlmox from "../pages/compras/almoxarifado/ParaisoOdontoAlmox";
import ProvidenciaOdontoAlmox from "../pages/compras/almoxarifado/ProvidenciaOdontoAlmox";
import RecantoOdontoAlmox from "../pages/compras/almoxarifado/RecantoOdontoAlmox";
import SaoCristovaoOdontoAlmox from "../pages/compras/almoxarifado/SaoCristovaoOdontoAlmox";
import SaoLuizOdontoAlmox from "../pages/compras/almoxarifado/SaoLuizOdontoAlmox";
import SerraVerdeOdontoAlmox from "../pages/compras/almoxarifado/SerraVerdeOdontoAlmox";
import TavaresOdontoAlmox from "../pages/compras/almoxarifado/TavaresOdontoAlmox";
import TorneirosOdontoAlmox from "../pages/compras/almoxarifado/TorneirosOdontoAlmox";
import VilaFerreiraOdontoAlmox from "../pages/compras/almoxarifado/VilaFerreiraOdontoAlmox";

function RoutesApp() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route
                path="/alterarsenha"
                element={
                    <Private>
                        <AlteracaoSenha />
                    </Private>
                }
            />

            <Route
                path="/"
                element={
                    <Private>
                        <Inicio />
                    </Private>
                }
            />
            <Route
                path="/configuracao"
                element={
                    <Private>
                        <Configuracao />
                    </Private>
                }
            />
            <Route
                path="/compras/page/amoxarifados"
                element={
                    <Private>
                        <AlmoxarifadoComprasInicio />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/altosantosdumontodonto"
                element={
                    <Private>
                        <AltoSantosDumontOdontoAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/ascencaoodonto"
                element={
                    <Private>
                        <AscensaoOdontoAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/raps"
                element={
                    <Private>
                        <RapsAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/upa"
                element={
                    <Private>
                        <UpaMedicamentosAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/sentinela"
                element={
                    <Private>
                        <Sentinela />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/almoxarifadocentral"
                element={
                    <Private>
                        <AlmoxarifadoCentralAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/manutencao"
                element={
                    <Private>
                        <ManutencaoAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/aps"
                element={
                    <Private>
                        <ApsAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/assistenciasaude"
                element={
                    <Private>
                        <AssistenciaSaudeAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/tfd"
                element={
                    <Private>
                        <TfdAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/vigilanciaepidemiologica"
                element={
                    <Private>
                        <VigilanciaEpidemiologicaAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/ame"
                element={
                    <Private>
                        <AmeAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/ccz"
                element={
                    <Private>
                        <CczAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/baixosantosdumont"
                element={
                    <Private>
                        <BaixoSantosDumontAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/graopara"
                element={
                    <Private>
                        <GraoParaAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/nspiedade"
                element={
                    <Private>
                        <NSPiedadeAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/saopedro"
                element={
                    <Private>
                        <SaoPedroAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/seringuiras"
                element={
                    <Private>
                        <SeringueirasAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/ascensao"
                element={
                    <Private>
                        <AscensaoAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/dombosco"
                element={
                    <Private>
                        <DomBoscoAlmox />
                    </Private>
                }
            />

            <Route
                path="/compras/sheets/amoxarifados/domboscoodonto"
                element={
                    <Private>
                        <DomboscoOdontoAlmox />
                    </Private>
                }
            />

            <Route
                path="/compras/sheets/amoxarifados/jkodonto"
                element={
                    <Private>
                        <JkOdontoAlmox />
                    </Private>
                }
            />

            <Route
                path="/compras/sheets/amoxarifados/joaopauloodonto"
                element={
                    <Private>
                        <JoaoPauloIIOdontoAlmox />
                    </Private>
                }
            />

            <Route
                path="/compras/sheets/amoxarifados/padreliberioodonto"
                element={
                    <Private>
                        <PadreLiberioOdontoAlmox />
                    </Private>
                }
            />

            <Route
                path="/compras/sheets/amoxarifados/paraisoodonto"
                element={
                    <Private>
                        <ParaisoOdontoAlmox />
                    </Private>
                }
            />

            <Route
                path="/compras/sheets/amoxarifados/nsfatimaodonto"
                element={
                    <Private>
                        <NSFatimaOdontoAlmox />
                    </Private>
                }
            />

            <Route
                path="/compras/sheets/amoxarifados/providenciaodonto"
                element={
                    <Private>
                        <ProvidenciaOdontoAlmox />
                    </Private>
                }
            />

            <Route
                path="/compras/sheets/amoxarifados/recantoodonto"
                element={
                    <Private>
                        <RecantoOdontoAlmox />
                    </Private>
                }
            />

            <Route
                path="/compras/sheets/amoxarifados/saocristovaoodonto"
                element={
                    <Private>
                        <SaoCristovaoOdontoAlmox />
                    </Private>
                }
            />

            <Route
                path="/compras/sheets/amoxarifados/saoluizodonto"
                element={
                    <Private>
                        <SaoLuizOdontoAlmox />
                    </Private>
                }
            />

            <Route
                path="/compras/sheets/amoxarifados/serraverdeodonto"
                element={
                    <Private>
                        <SerraVerdeOdontoAlmox />
                    </Private>
                }
            />

            <Route
                path="/compras/sheets/amoxarifados/tavaresodonto"
                element={
                    <Private>
                        <TavaresOdontoAlmox />
                    </Private>
                }
            />

            <Route
                path="/compras/sheets/amoxarifados/torneirosodonto"
                element={
                    <Private>
                        <TorneirosOdontoAlmox />
                    </Private>
                }
            />

            <Route
                path="/compras/sheets/amoxarifados/vilaferreiraodonto"
                element={
                    <Private>
                        <VilaFerreiraOdontoAlmox />
                    </Private>
                }
            />

            <Route
                path="/compras/sheets/amoxarifados/assistenciasaudepacientesalmox"
                element={
                    <Private>
                        <AssistenciaSaudePacientesAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/joaopaulo"
                element={
                    <Private>
                        <JoaoPauloAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/promocaosaude"
                element={
                    <Private>
                        <PromocaoSaudeAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/promocaosaudeeventos"
                element={
                    <Private>
                        <PromocaoSaudeEventosAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/concelhomunicipal"
                element={
                    <Private>
                        <ConselhoMunicipal />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/povoadomeireles"
                element={
                    <Private>
                        <PovoadoMeirelesAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/ozanam"
                element={
                    <Private>
                        <OzanamAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/piocanedo"
                element={
                    <Private>
                        <PioCanedoAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/tavares"
                element={
                    <Private>
                        <TavaresAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/ouvidoriapericia"
                element={
                    <Private>
                        <OuvidoriaPericiaeMedicaAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/transporte"
                element={
                    <Private>
                        <TransporteAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/torneiros"
                element={
                    <Private>
                        <TorneirosAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/paraiso"
                element={
                    <Private>
                        <ParaisoAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/capsad"
                element={
                    <Private>
                        <CapsAdAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/caic"
                element={
                    <Private>
                        <CaicAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/caicodonto"
                element={
                    <Private>
                        <CaicOdontoAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/vilaferreira"
                element={
                    <Private>
                        <VilaFerreiraAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/providencia"
                element={
                    <Private>
                        <ProvidenciaAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/upamateriais"
                element={
                    <Private>
                        <UpaMateriaisAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/waltermartins"
                element={
                    <Private>
                        <WalterMartinsAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/jk"
                element={
                    <Private>
                        <JkAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/sad"
                element={
                    <Private>
                        <SadAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/lgbt"
                element={
                    <Private>
                        <LgbtAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/padreliberio"
                element={
                    <Private>
                        <PadreLiberioAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/ti"
                element={
                    <Private>
                        <TiAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/centroconvivencia"
                element={
                    <Private>
                        <CentroConvivenciaAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/centroconvivenciaoficina"
                element={
                    <Private>
                        <CentroConvivenciaOficinaAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/saocristovao"
                element={
                    <Private>
                        <SaoCristovaoAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/belvedere"
                element={
                    <Private>
                        <BelvedereAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/belvedereodonto"
                element={
                    <Private>
                        <BelvedereOdontoAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/altosantosdumont"
                element={
                    <Private>
                        <AltoSantosDumontAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/saudedotrabalhador"
                element={
                    <Private>
                        <SaudeDoTrabalhadorAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/carioca"
                element={
                    <Private>
                        <CariocaAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/vigilanciasaude"
                element={
                    <Private>
                        <VigilanciaSaude />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/entrelacos"
                element={
                    <Private>
                        <EntrelacosAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/recantovilaferreira"
                element={
                    <Private>
                        <RecantoVilaFerreiraAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/capsadeventos"
                element={
                    <Private>
                        <CapsAdEventosAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/saudebucal"
                element={
                    <Private>
                        <SaudeBucalAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/ceo"
                element={
                    <Private>
                        <CeoAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/nsfatima"
                element={
                    <Private>
                        <NSFatimaAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/vigilanciasanitaria"
                element={
                    <Private>
                        <VigilanciaSanitariaAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/vigilanciaambiental"
                element={
                    <Private>
                        <VigilanciaAmbientalAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/apseventos"
                element={
                    <Private>
                        <ApsEventosAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/serraverde"
                element={
                    <Private>
                        <SerraVerdeAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/cersam"
                element={
                    <Private>
                        <CersamAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/residenciaterapeutica"
                element={
                    <Private>
                        <ResidenciaTerapeuticaAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/nsgracas"
                element={
                    <Private>
                        <NSGracasAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/farmacia"
                element={
                    <Private>
                        <FarmaciaAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/amoxarifados/ambulatoriofisio"
                element={
                    <Private>
                        <AmbulatorioFisioAlmox />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/acompanhamentocontratos"
                element={
                    <Private>
                        <AcompanhamentoDosContratosEatasVigentes />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/acompanhamentoprocessos"
                element={
                    <Private>
                        <AcompanhamentoDosProcessos />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/fluxorequisicaomercadorias"
                element={
                    <Private>
                        <FluxoParaRequisiçãoDeMercadorias />
                    </Private>
                }
            />
            <Route
                path="/compras/sheets/rdqa2023"
                element={
                    <Private>
                        <RdqaCompras2023 />
                    </Private>
                }
            />
            <Route
                path="/compras/bi/pagamentosempenho"
                element={
                    <Private>
                        <PagamentosEmpenhos />
                    </Private>
                }
            />

            <Route
                path="/comunicacao/forms/coberturaeventos"
                element={
                    <Private>
                        <CoberturaDeEventos />
                    </Private>
                }
            />
            <Route
                path="/entrelacos/forms/encaminhamentos"
                element={
                    <Private>
                        <FormularioEncaminhamentoEntrelacos />
                    </Private>
                }
            />

            <Route
                path="/saudedotrabalhador/sheets/monitoramentovisatt"
                element={
                    <Private>
                        <MonitoramentoVisatt />
                    </Private>
                }
            />

            <Route
                path="/saudedotrabalhador/sheets/notificacoes2122"
                element={
                    <Private>
                        <Notificacoes2122 />
                    </Private>
                }
            />
            <Route
                path="/saudedotrabalhador/sheets/consolidadonotificacoes"
                element={
                    <Private>
                        <ConsolidadoNotificacoes />
                    </Private>
                }
            />

            <Route
                path="/saudedotrabalhador/sheets/consolidadonotificacoes2023"
                element={
                    <Private>
                        <ConsolidadoNotificacoes2023 />
                    </Private>
                }
            />
            <Route
                path="/saudedotrabalhador/sheets/relatoriovapt"
                element={
                    <Private>
                        <RelatorioVapt />
                    </Private>
                }
            />
            <Route
                path="/saudedotrabalhador/sheets/controleateimport"
                element={
                    <Private>
                        <ControleDeAtestadosImport />
                    </Private>
                }
            />
            <Route
                path="/saudedotrabalhador/sheets/controleatebd"
                element={
                    <Private>
                        <ControleDeAtestadosBD />
                    </Private>
                }
            />
            <Route
                path="/saudedotrabalhador/sheets/controleatebd2023"
                element={
                    <Private>
                        <ControleDeAtestadosBD2023 />
                    </Private>
                }
            />

            <Route
                path="/saudedotrabalhador/sheets/cadastrodepacientesdb"
                element={
                    <Private>
                        <CadastroDePacientesDb />
                    </Private>
                }
            />
            <Route
                path="/saudedotrabalhador/forms/cadastrodepacientes"
                element={
                    <Private>
                        <CadastroDePacientesForm />
                    </Private>
                }
            />
            <Route
                path="/saudedotrabalhador/forms/relatoriovapt"
                element={
                    <Private>
                        <RelatorioVaptForm />
                    </Private>
                }
            />
            <Route
                path="/saudedotrabalhador/agendas"
                element={
                    <Private>
                        <AgendasSaudeDoTrabalhador />
                    </Private>
                }
            />
            <Route
                path="/saudedotrabalhador/agendas/consolidadoagendas"
                element={
                    <Private>
                        <ConsolidadoAgendas />
                    </Private>
                }
            />
            <Route
                path="/saudedotrabalhador/agendas/cadastrodepacientes"
                element={
                    <Private>
                        <CadastroDePacientes />
                    </Private>
                }
            />
            <Route
                path="/saudedotrabalhador/agendas/bruna2023"
                element={
                    <Private>
                        <BrunaAgenda2023 />
                    </Private>
                }
            />
            <Route
                path="/saudedotrabalhador/agendas/bruna2024"
                element={
                    <Private>
                        <BrunaAgenda2024 />
                    </Private>
                }
            />
            <Route
                path="/saudedotrabalhador/agendas/fernanda2023"
                element={
                    <Private>
                        <FernandaAgenda2023 />
                    </Private>
                }
            />
            <Route
                path="/saudedotrabalhador/agendas/graziela2023"
                element={
                    <Private>
                        <GrazielaAgenda2023 />
                    </Private>
                }
            />
            <Route
                path="/saudedotrabalhador/agendas/graziela2024"
                element={
                    <Private>
                        <GrazielaAgenda2024 />
                    </Private>
                }
            />
            <Route
                path="/saudedotrabalhador/agendas/luciene2023"
                element={
                    <Private>
                        <LucieneAgenda2023 />
                    </Private>
                }
            />
            <Route
                path="/saudedotrabalhador/agendas/luciene2024"
                element={
                    <Private>
                        <LucieneAgenda2024 />
                    </Private>
                }
            />
            <Route
                path="/saudedotrabalhador/agendas/gislayne2023"
                element={
                    <Private>
                        <GislayneAgenda2023 />
                    </Private>
                }
            />
            <Route
                path="/saudedotrabalhador/agendas/renata2023"
                element={
                    <Private>
                        <RenataAgenda2023 />
                    </Private>
                }
            />
            <Route
                path="/saudedotrabalhador/agendas/renata2024"
                element={
                    <Private>
                        <RenataAgenda2024 />
                    </Private>
                }
            />
            <Route
                path="/saudedotrabalhador/agendas/sirlene2023"
                element={
                    <Private>
                        <SirleneAgenda2023 />
                    </Private>
                }
            />
            <Route
                path="/saudedotrabalhador/agendas/sirlene2024"
                element={
                    <Private>
                        <SirleneAgenda2024 />
                    </Private>
                }
            />
            <Route
                path="/saudedotrabalhador/agendas/psicologo2024"
                element={
                    <Private>
                        <Psicologo2024 />
                    </Private>
                }
            />
            <Route
                path="/saudedotrabalhador/agendas/segundopsicologo2024"
                element={
                    <Private>
                        <SegundoPsicologo2024 />
                    </Private>
                }
            />

            <Route
                path="/saudedotrabalhador/bi/consolidadonotificacoes"
                element={
                    <Private>
                        <ConsolidadoNotificacoesBi />
                    </Private>
                }
            />
            <Route
                path="/saudedotrabalhador/bi/consolidadoatestados"
                element={
                    <Private>
                        <ConsolidadoAtestados />
                    </Private>
                }
            />
            <Route
                path="/saudedotrabalhador/bi/monitoramento"
                element={
                    <Private>
                        <MonitoramentoSaudeTrabalhador />
                    </Private>
                }
            />

            <Route
                path="/callcenter/sheet/monitoramento"
                element={
                    <Private>
                        <MonitoramentoCallCenter />
                    </Private>
                }
            />
            <Route
                path="/callcenter/sheet/monitoramentoemad"
                element={
                    <Private>
                        <MonitoramentoCallCenterEmad />
                    </Private>
                }
            />
            <Route
                path="/callcenter/sheet/agendamentopcrgestantes"
                element={
                    <Private>
                        <AgendamentoPcrGestantes />
                    </Private>
                }
            />
            <Route
                path="/callcenter/sheet/rdqa2023"
                element={
                    <Private>
                        <RdqaCallCenter2023 />
                    </Private>
                }
            />
            <Route
                path="/callcenter/forms/monitoramentoform"
                element={
                    <Private>
                        <MonitoramentoCallCenterForm />
                    </Private>
                }
            />
            <Route
                path="/callcenter/forms/monkeypox"
                element={
                    <Private>
                        <MonkeypoxForm />
                    </Private>
                }
            />
            <Route
                path="/callcenter/forms/agendamentopcr"
                element={
                    <Private>
                        <AgendamentoPcrGestantesForm />
                    </Private>
                }
            />
            <Route
                path="/callcenter/form/rdqa2023"
                element={
                    <Private>
                        <RdqaCallCenter2023 />
                    </Private>
                }
            />

            <Route
                path="/centrodeconvivencia/bi/centrodeconvivencia"
                element={
                    <Private>
                        <CentroDeConvivencia />
                    </Private>
                }
            />

            <Route
                path="/atencaopsicosocial/bi/consolidadoatendimentos"
                element={
                    <Private>
                        <ConsolidadoAtendimentos />
                    </Private>
                }
            />
            <Route
                path="/atencaopsicosocial/sheets/rdqa2023"
                element={
                    <Private>
                        <RdqaAtencaopsicosocial2023 />
                    </Private>
                }
            />

            <Route
                path="/vigilanciaepidemiologica/bi/consolidadocovid"
                element={
                    <Private>
                        <ConsolidadoCovid />
                    </Private>
                }
            />
            <Route
                path="/vigilanciaepidemiologica/bi/relatoriofocosdengue"
                element={
                    <Private>
                        <RelatorioDeFocosDengue />
                    </Private>
                }
            />

            <Route
                path="/aps/paginaaps"
                element={
                    <Private>
                        <PaginaAps />
                    </Private>
                }
            />
            <Route
                path="/aps/sheets/rdqa2023"
                element={
                    <Private>
                        <RdqaAps2023 />
                    </Private>
                }
            />
            <Route
                path="/aps/sheets/escalageralferias2324"
                element={
                    <Private>
                        <EscalaGeralFerias2324 />
                    </Private>
                }
            />
            <Route
                path="/aps/forms/solicitacaodeferias"
                element={
                    <Private>
                        <SolicitacaoDeFerias />
                    </Private>
                }
            />
            <Route
                path="/aps/forms/levantamentodegruposprioritarios"
                element={
                    <Private>
                        <LevantamentoGruposPrioritariosFarmacia />
                    </Private>
                }
            />
            <Route
                path="/aps/forms/notificacaodeausenciaprofissional"
                element={
                    <Private>
                        <NotificacaoDeAusenciaProfissional />
                    </Private>
                }
            />
            <Route
                path="/aps/drive/arquivosaps"
                element={
                    <Private>
                        <ArquivosAps />
                    </Private>
                }
            />
            <Route
                path="/aps/sheets/agendas"
                element={
                    <Private>
                        <InicioAgenda />
                    </Private>
                }
            />
            <Route
                path="/aps/sheets/agenda"
                element={
                    <Private>
                        <AgendaAps />
                    </Private>
                }
            />

            <Route
                path="/usuarios"
                element={
                    <Private>
                        <Usuarios />
                    </Private>
                }
            />

            <Route
                path="/links"
                element={
                    <Private>
                        <LinksUteis />
                    </Private>
                }
            />

            <Route
                path="/painelavisos"
                element={
                    <Private>
                        <Index />
                    </Private>
                }
            />

            <Route
                path="/protocolosaprovados"
                element={
                    <Private>
                        <ProtocolosAprovados />
                    </Private>
                }
            />
            <Route
                path="/reunioessms"
                element={
                    <Private>
                        <Reunioessms />
                    </Private>
                }
            />

            <Route
                path="/carteiraservicos"
                element={
                    <Private>
                        <CarteiraServicos />
                    </Private>
                }
            />
            <Route
                path="/comissaoemergencia"
                element={
                    <Private>
                        <ComissaoEmergencia />
                    </Private>
                }
            />

            <Route
                path="/coordenacao/links"
                element={
                    <Private>
                        <Links />
                    </Private>
                }
            />
            <Route
                path="/coordenacao/monitoramentonf"
                element={
                    <Private>
                        <MonitoramentoNf />
                    </Private>
                }
            />
            <Route
                path="/coordenacao/monitoramentonfview"
                element={
                    <Private>
                        <MonitoramentoNfView />
                    </Private>
                }
            />
            <Route
                path="/coordenacao/vale"
                element={
                    <Private>
                        <Vale />
                    </Private>
                }
            />
            <Route
                path="/coordenacao/icismap"
                element={
                    <Private>
                        <AcompanhamentoIcismap />
                    </Private>
                }
            />
            <Route
                path="/coordenacao/monitoramentocirurgiaseletivas"
                element={
                    <Private>
                        <MonitoramentoCirurgiasEletivas />
                    </Private>
                }
            />

            <Route
                path="/coordenacao/consorcios"
                element={
                    <Private>
                        <ConsorciosPrevisao />
                    </Private>
                }
            />

            <Route
                path="/ambulatoriofisioterapia/sheets/rdqa2023"
                element={
                    <Private>
                        <RdqaAmbulatorioFisioterapia2023 />
                    </Private>
                }
            />

            <Route
                path="/ame/sheets/rdqa2023"
                element={
                    <Private>
                        <RdqaAme2023 />
                    </Private>
                }
            />
            <Route
                path="/ame/sheets/hiperdiardqa2023"
                element={
                    <Private>
                        <RdqaAmeHiperdia2023 />
                    </Private>
                }
            />

            <Route
                path="/ame/sheets/demandaatendida"
                element={
                    <Private>
                        <DemandaAtendidaAme />
                    </Private>
                }
            />

            <Route
                path="/ame/sheets/demandaatendida2024"
                element={
                    <Private>
                        <DemandaAtendidaAme2024 />
                    </Private>
                }
            />

            <Route
                path="/amehiperdia/sheets/acompanhamentopacientes"
                element={
                    <Private>
                        <AcompanhamentoPacientesHiperdia />
                    </Private>
                }
            />
            <Route
                path="/amehiperdia/sheets/acompanhamentopacientesimport"
                element={
                    <Private>
                        <AcompanhamentoHiperdiaImport />
                    </Private>
                }
            />
            <Route
                path="/amehiperdia/forms/cadastropacientes"
                element={
                    <Private>
                        <CadastroPacientesHiperdia />
                    </Private>
                }
            />
            <Route
                path="/amehiperdia/bi/consolidado"
                element={
                    <Private>
                        <ConsolidadoHiperdia />
                    </Private>
                }
            />

            <Route
                path="/assistenciasaude/sheets/rdqa2023"
                element={
                    <Private>
                        <RdqaAssistenciaSaude2023 />
                    </Private>
                }
            />
            <Route
                path="/assistenciasaude/sheets/cadastropacientes"
                element={
                    <Private>
                        <CadastroDePacientesAssistenciaSaude />
                    </Private>
                }
            />
            <Route
                path="/assistenciasaude/forms/cadastropacientes"
                element={
                    <Private>
                        <CadastroDePacientesAssistenciaSaudeForm />
                    </Private>
                }
            />

            <Route
                path="/assistenciasaude/bi/consolidado"
                element={
                    <Private>
                        <ConsolidadoAssistencia />
                    </Private>
                }
            />

            <Route
                path="/farmacia/sheets/rdqa2023"
                element={
                    <Private>
                        <RdqaFarmacia2023 />
                    </Private>
                }
            />

            <Route
                path="/laboratoriomunicipal/sheets/rdqa2023"
                element={
                    <Private>
                        <RdqaLaboratorioMunicipal2023 />
                    </Private>
                }
            />

            <Route
                path="/atencaosaudebucal/sheets/rdqa2023"
                element={
                    <Private>
                        <RdqaAtencaoSaudeBucal2023 />
                    </Private>
                }
            />

            <Route
                path="/captacaorecursos/sheets/rdqa2023"
                element={
                    <Private>
                        <RdqaCaptacaoRecursos2023 />
                    </Private>
                }
            />
            <Route
                path="/captacaorecursos/sheets/entradaderecursos"
                element={
                    <Private>
                        <Saldo />
                    </Private>
                }
            />

            <Route
                path="/cer/sheets/rdqa2023"
                element={
                    <Private>
                        <RdqaCer2023 />
                    </Private>
                }
            />

            <Route
                path="/contabilidade/sheets/rdqa2023"
                element={
                    <Private>
                        <RdqaContabilidade2023 />
                    </Private>
                }
            />

            <Route
                path="/regulacaoauditoria/sheets/rdqa2023"
                element={
                    <Private>
                        <RdqaRegulacaoAuditoria2023 />
                    </Private>
                }
            />

            <Route
                path="/controlesocial/sheets/rdqa2023"
                element={
                    <Private>
                        <RdqaControleSocial2023 />
                    </Private>
                }
            />

            <Route
                path="/gestaosaude/sheets/rdqa2023"
                element={
                    <Private>
                        <RdqaGestaoSaude2023 />
                    </Private>
                }
            />

            <Route
                path="/judicializacao/sheets/rdqa2023"
                element={
                    <Private>
                        <RdqaJudicializacao2023 />
                    </Private>
                }
            />

            <Route
                path="/manutencaounidades/sheets/rdqa2023"
                element={
                    <Private>
                        <RdqaManutencaoUnidades2023 />
                    </Private>
                }
            />

            <Route
                path="/ouvidoria/sheets/rdqa2023"
                element={
                    <Private>
                        <RdqaOuvidoria2023 />
                    </Private>
                }
            />

            <Route
                path="/oftamologia/sheets/rdqa2023"
                element={
                    <Private>
                        <RdqaOftamologia2023 />
                    </Private>
                }
            />

            <Route
                path="/recursoshumanos/sheets/rdqa2023"
                element={
                    <Private>
                        <RdqaRH2023 />
                    </Private>
                }
            />
            <Route
                path="/recursoshumanos/sheets/importservice"
                element={
                    <Private>
                        <ImportService />
                    </Private>
                }
            />
            <Route
                path="/recursoshumanos/forms/memorando"
                element={
                    <Private>
                        <GeradorMemorando />
                    </Private>
                }
            />
            <Route
                path="/recursoshumanos/forms/oficio"
                element={
                    <Private>
                        <GeradorOficio />
                    </Private>
                }
            />

            <Route
                path="/sad/sheets/rdqa2023"
                element={
                    <Private>
                        <RdqaSad2023 />
                    </Private>
                }
            />

            <Route
                path="/ti/sheets/rdqa2023"
                element={
                    <Private>
                        <RdqaTi2023 />
                    </Private>
                }
            />
            <Route
                path="/ti/sheets/controledispositivosti"
                element={
                    <Private>
                        <ControleDispositivosTi />
                    </Private>
                }
            />
            <Route
                path="/ti/sheets/escalasobreavisoti"
                element={
                    <Private>
                        <EscalaSobreAvisoTi />
                    </Private>
                }
            />
            <Route
                path="/ti/forms/solicitacaocompras"
                element={
                    <Private>
                        <SolicitacaoCompraTi />
                    </Private>
                }
            />
            <Route
                path="/tfd/sheets/ceo"
                element={
                    <Private>
                        <CEO />
                    </Private>
                }
            />
            <Route
                path="/tfd/sheets/entradasesaidas2024import"
                element={
                    <Private>
                        <ControleEntradasSaidas2024Import />
                    </Private>
                }
            />
            <Route
                path="/tfd/sheets/bdpassagens"
                element={
                    <Private>
                        <BancoDeDadosPassagensTfd />
                    </Private>
                }
            />
            <Route
                path="/tfd/sheets/basedecadastro2"
                element={
                    <Private>
                        <BaseDeCadastro2 />
                    </Private>
                }
            />
            <Route
                path="/tfd/sheets/basedecadastro3"
                element={
                    <Private>
                        <BaseDeCadastro3 />
                    </Private>
                }
            />
            <Route
                path="/tfd/sheets/basedecadastro4"
                element={
                    <Private>
                        <BaseDeCadastro4 />
                    </Private>
                }
            />
            <Route
                path="/tfd/sheets/basedecadastro5"
                element={
                    <Private>
                        <BaseDeCadastro5 />
                    </Private>
                }
            />
            <Route
                path="/tfd/sheets/fisiophysio"
                element={
                    <Private>
                        <FisioPhysio />
                    </Private>
                }
            />
            <Route
                path="/tfd/sheets/conntroleentradasesaidas20241s"
                element={
                    <Private>
                        <ControleEntradasSaidas20241S />
                    </Private>
                }
            />
            <Route
                path="/tfd/linksview"
                element={
                    <Private>
                        <LinksVisualizacaoTfd />
                    </Private>
                }
            />
            <Route
                path="/tfd/sheets/conntroleentradasesaidas20192020"
                element={
                    <Private>
                        <ControleEntradasSaidas20192020 />
                    </Private>
                }
            />
            <Route
                path="/tfd/sheets/conntroleentradasesaidasdb"
                element={
                    <Private>
                        <ControleEntradasSaidasDb />
                    </Private>
                }
            />
            <Route
                path="/tfd/sheets/controlegastosmicroregiaotfd"
                element={
                    <Private>
                        <ControleGastosMicroRegiaoTfd />
                    </Private>
                }
            />
            <Route
                path="/tfd/sheets/cirurgiaseletivastfd"
                element={
                    <Private>
                        <CirurgiasEletivasTfd />
                    </Private>
                }
            />
            <Route
                path="/tfd/sheets/fisioambulatoriotfd"
                element={
                    <Private>
                        <FisioAmbulatorioTfd />
                    </Private>
                }
            />
            <Route
                path="/tfd/sheets/demandacatarata"
                element={
                    <Private>
                        <DemandaCatarata />
                    </Private>
                }
            />
            <Route
                path="/tfd/sheets/controledeentradasesaidastfd2023"
                element={
                    <Private>
                        <ControleEntradasSaidas2023 />
                    </Private>
                }
            />
            <Route
                path="/tfd/forms/controledeentradasesaidastfd"
                element={
                    <Private>
                        <ControleEntradasSaidasFormTfd />
                    </Private>
                }
            />
            <Route
                path="/tfd/forms/geradordememorandotfd"
                element={
                    <Private>
                        <GeradorMemorandoTfd />
                    </Private>
                }
            />
            <Route
                path="/tfd/forms/geradordeoficiotfd"
                element={
                    <Private>
                        <GeradorOficioTfd />
                    </Private>
                }
            />
            <Route
                path="/tfd/forms/ceo"
                element={
                    <Private>
                        <CEOForm />
                    </Private>
                }
            />
            <Route
                path="/tfd/forms/cadastrodepacientes"
                element={
                    <Private>
                        <CadastroDePacienteTfd />
                    </Private>
                }
            />
            <Route
                path="/tfd/forms/cadastrodeacompanhante"
                element={
                    <Private>
                        <CadastroDeAcompanhanteTfd />
                    </Private>
                }
            />
            <Route
                path="/tfd/forms/conntroleentradasesaidas20241s"
                element={
                    <Private>
                        <ControleEntradasSaidas20241SForms />
                    </Private>
                }
            />

            <Route
                path="/tfd/sheets/linksview/fisiophysioview"
                element={
                    <Private>
                        <FisioPhysioView />
                    </Private>
                }
            />
            <Route
                path="/transportesanitario/sheets/rdqa2023"
                element={
                    <Private>
                        <RdqaTransporteSanitario2023 />
                    </Private>
                }
            />

            <Route
                path="/upa/sheets/rdqa2023"
                element={
                    <Private>
                        <RdqaUpa2023 />
                    </Private>
                }
            />
            <Route
                path="/upa/sheets/custosoperacionais2023"
                element={
                    <Private>
                        <CustosOperacionaisUpa2023 />
                    </Private>
                }
            />

            <Route
                path="/vigilanciasaude/sheets/rdqa2023"
                element={
                    <Private>
                        <RdqaVigilanciaSaude2023 />
                    </Private>
                }
            />
        </Routes>
    );
}

export default RoutesApp;
