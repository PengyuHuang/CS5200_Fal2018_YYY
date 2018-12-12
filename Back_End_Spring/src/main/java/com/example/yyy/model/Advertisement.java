package com.example.yyy.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

@Entity
public class Advertisement {
  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  private int id;
  private String title;
  private String picture_url;
  private String link_url;
  private int bill;

  @ManyToOne
  @JsonIgnore
  private User advertiser;

  public int getBill() {
    return bill;
  }

  public void setBill(int bill) {
    this.bill = bill;
  }

  public User getAdvertiser() {
    return advertiser;
  }

  public void setAdvertiser(User advertiser) {
    this.advertiser = advertiser;
  }

  public Advertisement(){}

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getPicture_url() {
    return picture_url;
  }

  public void setPicture_url(String picture_url) {
    this.picture_url = picture_url;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getLink_url() {
    return link_url;
  }

  public void setLink_url(String link_url) {
    this.link_url = link_url;
  }
  public void set(Advertisement advertisement){
   this.title=advertisement.title;
    this.picture_url=advertisement.picture_url;
    this.link_url=advertisement.link_url;
  }


}
