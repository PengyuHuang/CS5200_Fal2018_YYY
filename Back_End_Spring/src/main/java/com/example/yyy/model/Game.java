package com.example.yyy.model;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Game {

  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  private int id;
  private int appid;
  private String name;
  private String developer;
  private int score_rank;
  private int positive;
  private int negative;
  private double price;



public Game(){}
  public Game(String name){
    this.name=name;
  }

  public int getId() {
    return id;
  }

  public String getName() {
    return name;
  }

  public Game(int appid, String name, String developer, int score_rank, int positive, int negative, double price) {
    this.appid = appid;
    this.name = name;
    this.developer = developer;
    this.score_rank = score_rank;
    this.positive = positive;
    this.negative = negative;
    this.price = price;
  }

  public void setId(int id) {
    this.id = id;
  }

  public int getAppid() {
    return appid;
  }

  public void setAppid(int appid) {
    this.appid = appid;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getDeveloper() {
    return developer;
  }

  public void setDeveloper(String developer) {
    this.developer = developer;
  }

  public int getScore_rank() {
    return score_rank;
  }

  public void setScore_rank(int score_rank) {
    this.score_rank = score_rank;
  }

  public int getPositive() {
    return positive;
  }

  public void setPositive(int positive) {
    this.positive = positive;
  }

  public int getNegative() {
    return negative;
  }

  public void setNegative(int negative) {
    this.negative = negative;
  }

  public double getPrice() {
    return price;
  }

  public void setPrice(double price) {
    this.price = price;
  }
}
