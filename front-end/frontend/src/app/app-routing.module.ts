import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsertComponent } from './insert/insert.component'
import { QueryComponent } from './query/query.component'
import { ShowAllComponent } from './show-all/show-all.component';


const routes: Routes = [
	{
		path: 'insert',
		component: InsertComponent,
	},
	{
		path: 'query',
		component: QueryComponent,
	},
	{
		path: 'queryall',
		component: ShowAllComponent,
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
