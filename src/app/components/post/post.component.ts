import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  post: Post = {
    id: 0,
    title: '',
    body: ''
  };

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.postService.getPost(id).subscribe(data => {
      this.post = data;
    })
  }
}
