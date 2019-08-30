import { Component, OnInit } from '@angular/core';
import { QuizService } from "src/quiz/quiz.service";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html'
})
export class QuizComponent implements OnInit
{
constructor(private quizservice:QuizService,private fb : FormBuilder )
{}
answerForm: FormGroup;
question: any = [];
Options:any=[];

    ngOnInit(): void {

        this.quizservice.getQuestions().subscribe(
            data=>{
                console.log(data)
                this.question = data;
            } );   
            console.log(this.question);



        this.answerForm = this.fb.group({
        
                answer0 : [''],
                answer1 : ['']
            
        })


        }



    

}