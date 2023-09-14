import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent {
  @Output() customEvent: EventEmitter<Post> = new EventEmitter<any>();
  @Output() customEventEdit: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() customEventReset: EventEmitter<any> = new EventEmitter<any>();

  @Input() post: Post;
  @Input() editable: boolean;

  constructor(private postService: PostService) { }

  addPost(title: string, body: string) {
    if (!title || !body) {
      alert('Please add title and post')
    } else {
      this.postService.savePost({ title, body } as Post).subscribe(newPost => {
        this.customEvent.emit(newPost)
      })
    }
  }

  updatePost() {
    this.postService.updatePost(this.post).subscribe(updatedPost => {
      this.customEventEdit.emit(false)
      this.customEventReset.emit({ id: 0, title: '', body: '' })
      console.log(updatedPost);
    })
  }

}
