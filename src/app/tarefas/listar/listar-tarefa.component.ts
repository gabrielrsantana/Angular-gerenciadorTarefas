import { Component, OnInit } from '@angular/core';
//impórtanto do shared
import { TarefaService ,Tarefa} from '../shared';


@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {
  //criar variavel,q  vai ser usada no html
  tarefas: Tarefa[];
  //pode inciiar no consturtor() ou NgOnInit()
  constructor(private tarefaService: TarefaService) { 

  }

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
 
  }
   
   

  listarTodos():Tarefa[]{
    return this.tarefaService.listarTodos();
  }

}//export
