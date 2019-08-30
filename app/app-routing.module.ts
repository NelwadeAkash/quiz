import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizComponent } from "src/quiz/quiz.component";
import { RegisterComponent } from "src/register/register.component";


const routes: Routes = [
  {path:'quiz', component : QuizComponent },
  {path:'' , component : RegisterComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
