import { describe, it, expect } from 'vitest';
import PostService from '../services/PostService';
import { PostData } from '../types';

describe('PostService', () => {
  const postService = new PostService();

  it('should return a post by ID', () => {
    const post = postService.getPostById(1);
    expect(post).toBeDefined();
    expect(post?.id).toBe(1);
  });

  it('should return undefined for a non-existent post ID', () => {
    const post = postService.getPostById(999);
    expect(post).toBeUndefined();
  });

  it('should create a new post', () => {
    const newPostData: PostData = {
      title: 'New Post',
      content: 'This is a new post',
      author: 'Author Name',
    };
    const newPost = postService.createPost(newPostData);
    expect(newPost).toBeDefined();
    expect(newPost.title).toBe(newPostData.title);
    expect(newPost.content).toBe(newPostData.content);
    expect(newPost.author).toBe(newPostData.author);
  });

  it('should update an existing post', () => {
    const updatedPostData: PostData = {
      title: 'Updated Title',
      content: 'Updated content',
      author: 'Updated Author',
    };
    const updatedPost = postService.updatePost(1, updatedPostData);
    expect(updatedPost).toBeDefined();
    expect(updatedPost?.title).toBe(updatedPostData.title);
    expect(updatedPost?.content).toBe(updatedPostData.content);
    expect(updatedPost?.author).toBe(updatedPostData.author);
  });

  it('should return null when updating a non-existent post', () => {
    const updatedPost = postService.updatePost(999, {
      title: 'Non-existent',
      content: 'Non-existent',
      author: 'Non-existent',
    });
    expect(updatedPost).toBeNull();
  });
}); 