import { Component } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  posts: Post[] = [];
  isEditable: boolean = false;
  selectedPost: Post = { id: 0, title: '', body: '' };

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(data => {
      this.posts = data;
    })
  }

  customEventParent(data: any) {
    this.posts.unshift(data)
  }

  customEventEditParent(data: boolean) {
    this.isEditable = data;
  }

  customEventResetParent(data: any) {
    this.selectedPost = data;
  }

  editPost(post: Post) {
    this.selectedPost = post;
    this.isEditable = true;
  }

  deletePost(postId: number) {
    if (confirm('Are you sure you want to delete this post?')) {
      this.postService.deletePost(postId).subscribe(data => {
        this.posts = this.posts.filter(p => p.id !== postId)
      })
    }
  }
}
