import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post!: Post
  @Output() delete: EventEmitter<Post> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onDeletePost(event$: Event){
    event$.preventDefault();
    this.delete.emit(this.post)
  }

}
