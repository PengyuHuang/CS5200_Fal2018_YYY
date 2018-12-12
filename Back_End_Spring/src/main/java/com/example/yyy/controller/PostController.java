package com.example.yyy.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.yyy.repository.*;
import com.example.yyy.model.*;
import java.util.LinkedList;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class PostController {
  @Autowired
  PostRepository postRepository;

  @PostMapping("/api/post/create")
  public Post createPost(@RequestBody Post post) {
    postRepository.save(post);
    return post;
  }

  @GetMapping("/api/post/read/all")
  public List<Post> findAllPosts() {

    return postRepository.findAll();
  }

  @GetMapping("/api/post/read/{postId}")
  public Post findPost(@PathVariable("postId") int id) {
    return postRepository.findById(id).get();
  }

  @PutMapping("/api/post/update/{postId}")
  public Post updatePost(
          @PathVariable("postId") int id,
          @RequestBody Post newPost) {
    Post post = postRepository.findById(id).get();
    post.set(newPost);
    return postRepository.save(post);
  }

  @DeleteMapping("/api/post/delete/{postId}")
  public void deletePost
          (@PathVariable("postId") int id) {
    postRepository.deleteById(id);
  }
  @GetMapping("/api/post/read/replies/{postId}")
  public List<Post> findReplies(@PathVariable("postId") int postId) {
    Post post = postRepository.findById(postId).get();
    return post.getReplies();
  }


  @GetMapping("/api/post/read/no_parent/no_parent")
  public List<Post> findPostsNoParent() {
    List<Post> all=postRepository.findAll();
    List<Post> res=new LinkedList<>();
    for(Post post:all)
    {
      if (post.getParent()==null)
      {res.add(post);}
    }
    return res;
  }


}
