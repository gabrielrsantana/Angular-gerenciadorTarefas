import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from './shared';
import { ListarTarefaComponent } from './listar'; //importa automatico,mas e bom colocar o ./shared .na mesma pasta 
//importando data binding
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';//inclui automatico depois de inserir embaixo no imports




@NgModule({
  declarations: [
    ListarTarefaComponent
  ],
  imports: [
    CommonModule,
    RouterModule, //incluido depois de criar o html stilizado
    FormsModule  //incluido
  ],
  providers:[  //insere provider porque tem serviço
    TarefaService
  ]
})
export class TarefasModule { }
