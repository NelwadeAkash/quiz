import { Component,OnInit,Input} from '@angular/core';
import { MyserviceService } from "src/myservice.service";
import { EnrollService } from "src/home/Enroll.service";
import { Userform } from "src/home/Userform";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit  {
 topics = ['Angular','react','vue'];
title = 'home';
topicHasError = true;

user=new Userform();

validateTopic(value){
  if(value=== 'default'){
    this.topicHasError=true;
  }else{
    this.topicHasError=false;
  }
}

onSubmit()
{
console.log(this.user);


}








ngOnInit(): void {}



}