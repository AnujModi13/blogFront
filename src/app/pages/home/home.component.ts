import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements  OnInit{
  postArray !:Array<object>;
  latestPost !:Array<object>;
  constructor(private postService:PostsService){
    this.postService.loadFeature().subscribe(data => {
      this.postArray = data;
    });

    this.postService.loadLatest().subscribe(data => {
      this.latestPost = data;
    });
  }

  ngOnInit():void {


  }

}
