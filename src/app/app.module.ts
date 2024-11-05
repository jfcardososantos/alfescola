import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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


import { ButtonModule } from 'primeng/button';
import { registerLocaleData } from '@angular/common';


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
    JustificarFaltaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
