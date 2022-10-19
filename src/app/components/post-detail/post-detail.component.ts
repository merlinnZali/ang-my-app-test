import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  public postDetail$: Observable<Post> = this.route.paramMap.pipe(
    switchMap((param) => this.postService.getPost(param.get('id')))
  )

  constructor(private route: ActivatedRoute,
    private postService: PostService) { }

  ngOnInit(): void {
    
  }

}
