import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent implements OnInit{
postsArray !:Array<object>;
categoryobj : any;
  constructor( private route:ActivatedRoute, private postService:PostsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      //console.log(params['id']);
      this.categoryobj=params['category'];
      this.postService.loadCategoryPosts(params['id']).subscribe(data =>
        {
          this.postsArray = data;
           //console.log(data)
        })
    })
  }

}
