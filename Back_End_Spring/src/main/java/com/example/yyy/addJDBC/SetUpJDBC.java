package com.example.yyy.addJDBC;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;

public class SetUpJDBC {
  private static ConnectionPool connectionPool = ConnectionPool.getInstance();
  private Connection connection =connectionPool.getConnection();
  private PreparedStatement preparedStatement = null;

  public void addGamesJDBC(String title,String link_url,String picture_url,int bill,int advertiser_id) {
    String sql = "INSERT INTO `advertisement` (`title`,`link_url`,`picture_url`,`bill`,`advertiser_id`)" +
            "VALUES (?,?,?,?,?)";
    try {
      preparedStatement = connection.prepareStatement(sql);
      preparedStatement.setString(1, title);
      preparedStatement.setString(2, link_url);
      preparedStatement.setString(3,picture_url);
      preparedStatement.setInt(4, bill);
      preparedStatement.setInt(5,advertiser_id);
      preparedStatement.executeUpdate();
      System.out.println(preparedStatement);
    } catch (SQLException e) {
      e.printStackTrace();
    }
  }

  public void addUsersJDBC(String username,String password,String type) {
    String sql = "INSERT INTO `user` (`username`,`password`,`email`,`type`)" +
            "VALUES (?,?,?,?)";
    try {
      preparedStatement = connection.prepareStatement(sql);
      preparedStatement.setString(1, username);
      preparedStatement.setString(2, password);
      preparedStatement.setString(3,username+"@"+password+".com");
      preparedStatement.setString(4, type);
      preparedStatement.executeUpdate();
      System.out.println(preparedStatement);
    } catch (SQLException e) {
      e.printStackTrace();
    }
  }
  public void addPostsJDBC(String title,String content,String game,int priority,int author_id) {
    String sql = "INSERT INTO `post` (`title`,`content`,`game`,`priority`,`author_id`)" +
            "VALUES (?,?,?,?,?)";
    try {
      preparedStatement = connection.prepareStatement(sql);
      preparedStatement.setString(1, title);
      preparedStatement.setString(2, content);
      preparedStatement.setString(3, game);
      preparedStatement.setInt(4,priority);
      preparedStatement.setInt(5, author_id);
      preparedStatement.executeUpdate();
      System.out.println(preparedStatement);
    } catch (SQLException e) {
      e.printStackTrace();
    }
  }

  public static void main(String[] args) {
    SetUpJDBC setUpJDBC =new  SetUpJDBC();
    setUpJDBC.addUsersJDBC("alice","alice","student");
    setUpJDBC.addUsersJDBC("bob","bob","vip_student");
    setUpJDBC.addUsersJDBC("charlie","charlie","organization");
    setUpJDBC.addUsersJDBC("dan","dan","advertiser");
    setUpJDBC.addUsersJDBC("admin","admin","admin");
    setUpJDBC.addGamesJDBC("BattleField 5","https://www.origin.com/usa/en-us/store/battlefield/battlefield-v",
          "https://cdn.gearnuke.com/wp-content/uploads/2018/11/battlefield-v-review-xbox-one5-1104x621.jpg",100,4);

    setUpJDBC.addPostsJDBC("CS:GO is now FREE TO PLAY",
            "Introducing Danger Zone — a fast-paced battle royale game mode built on CS:GO’s " +
                    "tactical gameplay where players use their wits, skill, and resources to fight to " +
                    "the finish. Play solo, or work together as a squad of two or three!","CS:GO",0,1);
    setUpJDBC.addPostsJDBC("Portal 2",
            "portal 2 is #1 on the list","",0,1);
    setUpJDBC.addPostsJDBC("TGA18","Here’s a recap of the biggest buzz coming out of The " +
            "Game Awards 2018, from straight surprises to splashy reveals that put this event in the" +
            " company of an E3 keynote","",0,1);
    setUpJDBC.addPostsJDBC("Wallpaper Engine Yes!","Good job, Kristjan Skutta ","Wallpaper Engine Yes!",0,1);
    setUpJDBC.addPostsJDBC("Dig, Fight, Build!","The very world is at your fingertips as you fight for survival, fortune, " +
            "and glory. Delve deep into cavernous expanses, seek out ever-greater foes to test your mettle in combat, " +
            "or construct your own city - In the World of Terraria, the choice is yours! Blending elements of classic" +
            " action games with the freedom of sandbox-style creativity, Terraria is a unique gaming experience where " +
            "both the journey and the destination are as unique as the players themselves!","",1,2);
    setUpJDBC.addPostsJDBC("Any DOTA players in NEU?","I like DOTA, please let me know if anyone likes DOTA too.","DOTA 2",1,2);
    setUpJDBC.addPostsJDBC("Check out our new event-LEAGUE OF LEGEND","LEAGUE OF LEGEND contest, prize $500","League",0,3);
  }

}
