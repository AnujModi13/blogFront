import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements  OnInit {
  postData:any;
  categoryArray !:Array<object> ;
    constructor(private route:ActivatedRoute,private postService:PostsService, private afs:AngularFirestore) { }

    ngOnInit(): void{

      this.route.params.subscribe(val=>{
        this.postService.countViews(val['id'])
        this.postService.loadOnePost(val['id']).subscribe(data=>{
          this.postData=data;
          this.loadSimilarPost(this.postData.category.categoryId);
         // console.log(this.postData);
        })
      })
    }

    loadSimilarPost(catId: any)
    {
      this.postService.loadSimilar(catId).subscribe(data=>{
        this.categoryArray=data;
      })
    }


}
