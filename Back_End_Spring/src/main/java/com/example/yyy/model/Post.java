package com.example.yyy.model;
import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Post {
  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  private int id;
  private String title;
  private String content;
  private int priority;
  private String game;

  @ManyToOne()
  @JsonIgnore
  private User author;

  @ManyToOne()
  @JsonIgnore
  private Post parent;

  @OneToMany(mappedBy = "parent")
  @JsonIgnore
  private List<Post> replies;

  private String author_name;


public Post(){}
  public Post(String title, String content, User author) {
    this.title = title;
    this.content = content;
    this.author = author;
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getContent() {
    return content;
  }

  public void setContent(String content) {
    this.content = content;
  }

  public int getPriority() {
    return priority;
  }

  public void setPriority(int priority) {
    this.priority = priority;
  }

  public User getAuthor() {
    return author;
  }

  public Post getParent() {
    return parent;
  }

  public String getAuthor_name() {
    return author_name;
  }

  public void setAuthor_name(String author_name) {
    this.author_name = author_name;
  }

  public void setParent(Post parent) {
    this.parent = parent;
  }

  public List<Post> getReplies() {
    return replies;
  }

  public void setReplies(List<Post> replies) {
    this.replies = replies;
  }

  public void setAuthor(User author) {
    this.author = author;
  }

  public void set(Post post){
  this.title=post.title;
  this.content=post.content;
  }


  public void addAnReply(Post reply)
  {
    this.replies.add(reply);
    if(reply.getParent()!=this)
    {
      reply.setParent(this);
    }
  }

  public String getGame() {
    return game;
  }

  public void setGame(String game) {
    this.game = game;
  }
}
