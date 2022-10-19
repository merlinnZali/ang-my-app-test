import { Component, OnInit } from '@angular/core';
import { catchError, map, of, tap } from 'rxjs';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = []
  
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getPosts()
  }

  getPosts(){
    this.postService.getPosts().pipe(
      map(posts => {
        console.log(posts)
        return posts
      }),
      catchError(error => {
        console.log(error)
        return of([]); 
      })
    ).subscribe((posts) => {
      this.posts = posts
    })
  }

  delete(post: Post){
    this.posts = this.posts.filter(item => item.id !== post.id)
    this.postService.delete(post).pipe(
      tap(value => {
        console.log('Deleted One')
        console.log(value)
      })
    ).subscribe((value) => {
      console.log('Deleted One')
      console.log(value)
    })
  }

}
