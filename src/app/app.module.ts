import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//criado automaticamente o import AppRoutingModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarefasModule } from './tarefas';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, //insere o import no Modulo principal pra informar ele da existncia do outro modulo de rotas
    TarefasModule     //deposi de criado tarefas importa aqui pro modulo principal saber

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
