import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/posts`)
  }

  getPost(id: any): Observable<Post>{
    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }

  delete(post: Post): Observable<void>{
    return this.http.delete<void>(`https://jsonplaceholder.typicode.com/posts/${post.id}`)
  }
}
