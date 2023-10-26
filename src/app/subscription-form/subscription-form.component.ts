import { SubscriberService } from './../services/subscriber.service';
import { Component, OnInit } from '@angular/core';
import { Sub } from '../models/sub';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent  implements OnInit{
isEmailError:boolean=false;
isSubscribed :boolean=false;
  constructor(private subscriberService:SubscriberService){}

  ngOnInit(): void {

  }

  onSubmit(formValue: any)
  {
    const subData :Sub ={
      name : formValue.name,
      email :formValue.email
    }

    this.subscriberService.checkSubs(subData.email).subscribe(val =>{
      console.log(val)
      if(val.empty)
      {
        this.subscriberService.addSubs(subData);
        this.isSubscribed=true;
      }
      else
      this.isEmailError=true;
    })


  }

}
