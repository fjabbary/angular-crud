import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Post } from '../models/Post';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}
@Injectable({
  providedIn: 'root'
})
export class PostService {
  url: string = "https://jsonplaceholder.typicode.com/posts";


  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url);
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(this.url + '/' + id);
  }

  savePost(newPost: Post): Observable<Post> {
    return this.http.post<Post>(this.url, newPost, httpOptions)
  }

  updatePost(updatedPost: Post): Observable<Post> {
    return this.http.put<Post>(this.url + '/' + updatedPost.id, updatedPost, httpOptions)
  }

  deletePost(id: number) {
    return this.http.delete<Post>(this.url + '/' + id, httpOptions)
  }
}
