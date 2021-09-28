import { Routes } from "@angular/router";
import { ListarTarefaComponent } from "./listar";
//criado apos criado a pasta cadastrar e component
import { CadastrarTarefaComponent } from "./cadastrar";

export const TarefaRoutes: Routes = [
    {
        path: 'tarefas',
        redirectTo: 'tarefas/listar'
    },
    {
        path: 'tarefas/listar',
        component: ListarTarefaComponent
    }, //criado embaixo para cadastrar
    {
        path:'tarefas/cadastrar',
        component:CadastrarTarefaComponent
    }
];