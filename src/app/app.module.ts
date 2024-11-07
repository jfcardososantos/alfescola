import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; // Importação necessária para usar ngModel

import localePT from '@angular/common/locales/pt';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/site/login/login.component';
import { HomepageComponent } from './components/site/homepage/homepage.component';
import { MinhasSolicitacoesComponent } from './components/funcionarios/minhas-solicitacoes/minhas-solicitacoes.component';
import { NovaOcorrenciaComponent } from './components/funcionarios/nova-ocorrencia/nova-ocorrencia.component';
import { NovaSolicitacaoComponent } from './components/funcionarios/nova-solicitacao/nova-solicitacao.component';
import { AdminSiteComponent } from './components/direcao/admin-site/admin-site.component';
import { AdminAlbunsComponent } from './components/direcao/admin-albuns/admin-albuns.component';
import { AdminAvisosComponent } from './components/direcao/admin-avisos/admin-avisos.component';
import { AdminCalendarioComponent } from './components/direcao/admin-calendario/admin-calendario.component';
import { AdminCoordenadoresComponent } from './components/direcao/admin-coordenadores/admin-coordenadores.component';
import { AdminSecretariosComponent } from './components/direcao/admin-secretarios/admin-secretarios.component';
import { AdminVicesComponent } from './components/direcao/admin-vices/admin-vices.component';
import { FecharBimestreComponent } from './components/professor/fechar-bimestre/fechar-bimestre.component';
import { NovoPlanejamentoComponent } from './components/professor/novo-planejamento/novo-planejamento.component';
import { NovaAvaliacaoComponent } from './components/professor/nova-avaliacao/nova-avaliacao.component';
import { RegistroPdiComponent } from './components/professor/registro-pdi/registro-pdi.component';
import { RegistroFrequenciaComponent } from './components/professor/registro-frequencia/registro-frequencia.component';
import { RegistroNotasComponent } from './components/professor/registro-notas/registro-notas.component';
import { MeusPlanejamentosComponent } from './components/professor/meus-planejamentos/meus-planejamentos.component';
import { MinhasAvaliacoesComponent } from './components/professor/minhas-avaliacoes/minhas-avaliacoes.component';
import { AdminPdisComponent } from './components/coordenador-pedagogico/admin-pdis/admin-pdis.component';
import { AdminBimestresComponent } from './components/coordenador-pedagogico/admin-bimestres/admin-bimestres.component';
import { AdminPlanejamentosComponent } from './components/coordenador-pedagogico/admin-planejamentos/admin-planejamentos.component';
import { AdminAvaliacoesComponent } from './components/coordenador-pedagogico/admin-avaliacoes/admin-avaliacoes.component';
import { HorariosAulasComponent } from './components/secretaria/horarios-aulas/horarios-aulas.component';
import { AdminTurmasComponent } from './components/secretaria/admin-turmas/admin-turmas.component';
import { AdminEstudantesComponent } from './components/secretaria/admin-estudantes/admin-estudantes.component';
import { NovoProfessorComponent } from './components/secretaria/novo-professor/novo-professor.component';
import { NovaTurmaComponent } from './components/secretaria/nova-turma/nova-turma.component';
import { NovoEstudanteComponent } from './components/secretaria/novo-estudante/novo-estudante.component';
import { AdminProfessoresComponent } from './components/secretaria/admin-professores/admin-professores.component';
import { MeuHorarioComponent } from './components/estudante/meu-horario/meu-horario.component';
import { MeuBoletimComponent } from './components/estudante/meu-boletim/meu-boletim.component';
import { JustificarFaltaComponent } from './components/estudante/justificar-falta/justificar-falta.component';
import { registerLocaleData } from '@angular/common';


import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { StepperModule } from 'primeng/stepper';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TabViewModule } from 'primeng/tabview';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { ChipsModule } from 'primeng/chips';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { MultiSelectModule } from 'primeng/multiselect';
import { PasswordModule } from 'primeng/password';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { SidebarModule } from 'primeng/sidebar';
import { TooltipModule } from 'primeng/tooltip';
import { FileUploadModule } from 'primeng/fileupload';
import { MessagesModule } from 'primeng/messages';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';
import { BadgeModule } from 'primeng/badge';
import { BlockUIModule } from 'primeng/blockui';
import { ChipModule } from 'primeng/chip';
import { SkeletonModule } from 'primeng/skeleton';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TagModule } from 'primeng/tag';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { LoadingComponent } from './components/tools/loading/loading.component';
import { HeaderComponent } from './components/site/header/header.component';
import { BannersComponent } from './components/site/banners/banners.component';
import { AvisosPublicosComponent } from './components/site/avisos-publicos/avisos-publicos.component';
import { AlbunsComponent } from './components/site/albuns/albuns.component';
import { CalendarioComponent } from './components/site/calendario/calendario.component';
import { ToolbarComponent } from './components/site/toolbar/toolbar.component';









registerLocaleData(localePT);



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    MinhasSolicitacoesComponent,
    NovaOcorrenciaComponent,
    NovaSolicitacaoComponent,
    AdminSiteComponent,
    AdminAlbunsComponent,
    AdminAvisosComponent,
    AdminCalendarioComponent,
    AdminCoordenadoresComponent,
    AdminSecretariosComponent,
    AdminVicesComponent,
    FecharBimestreComponent,
    NovoPlanejamentoComponent,
    NovaAvaliacaoComponent,
    RegistroPdiComponent,
    RegistroFrequenciaComponent,
    RegistroNotasComponent,
    MeusPlanejamentosComponent,
    MinhasAvaliacoesComponent,
    AdminPdisComponent,
    AdminBimestresComponent,
    AdminPlanejamentosComponent,
    AdminAvaliacoesComponent,
    HorariosAulasComponent,
    AdminTurmasComponent,
    AdminEstudantesComponent,
    NovoProfessorComponent,
    NovaTurmaComponent,
    NovoEstudanteComponent,
    AdminProfessoresComponent,
    MeuHorarioComponent,
    MeuBoletimComponent,
    JustificarFaltaComponent,
    LoadingComponent,
    HeaderComponent,
    BannersComponent,
    AvisosPublicosComponent,
    AlbunsComponent,
    CalendarioComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    DividerModule,
    CardModule,
    AccordionModule,
    FieldsetModule,
    PanelModule,
    StepperModule,
    ScrollPanelModule,
    TabViewModule,
    AutoCompleteModule,
    CalendarModule,
    ChipsModule,
    DropdownModule,
    FloatLabelModule,
    IconFieldModule,
    InputIconModule,
    InputMaskModule,
    InputSwitchModule,
    InputTextareaModule,
    InputNumberModule,
    MultiSelectModule,
    PasswordModule,
    SelectButtonModule,
    ToggleButtonModule,
    PaginatorModule,
    TableModule,
    ConfirmDialogModule,
    ToastModule,
    ConfirmPopupModule,
    DialogModule,
    DynamicDialogModule,
    SidebarModule,
    TooltipModule,
    FileUploadModule,
    MessagesModule,
    GalleriaModule,
    ImageModule,
    BadgeModule,
    BlockUIModule,
    ChipModule,
    SkeletonModule,
    ProgressSpinnerModule,
    TagModule,
    AnimateOnScrollModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
