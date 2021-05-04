import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsertComponent } from './insert/insert.component'
import { QueryComponent } from './query/query.component'


const routes: Routes = [
	{
		path: 'insert',
		component: InsertComponent,
	},
	{
		path: 'query',
		component: QueryComponent,
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
