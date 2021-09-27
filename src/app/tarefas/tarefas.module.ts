import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from './shared';
import { ListarTarefaComponent } from './listar'; //importa automatico,mas e bom colocar o ./shared .na mesma pasta 



@NgModule({
  declarations: [
    ListarTarefaComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[  //insere provider porque tem serviço
    TarefaService
  ]
})
export class TarefasModule { }
