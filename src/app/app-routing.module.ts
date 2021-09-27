
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TarefaRoutes } from './tarefas';

export const router: Routes = [
    {
        path: '',
        redirectTo: '/tarefas/listar',
        pathMatch:'full'
    },
    ...TarefaRoutes
    //... signfica pegar todas rotas,como se concatenasse

];


@NgModule({
    imports: [RouterModule.forRoot(router)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}

