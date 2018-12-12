package com.example.yyy.addJDBC;

import com.example.yyy.model.Game;

import java.io.FileInputStream;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Scanner;

public class AddGamesJDBC {
  private static ConnectionPool connectionPool = ConnectionPool.getInstance();
  private Connection connection =connectionPool.getConnection();
  private PreparedStatement preparedStatement = null;

  public void addGamesJDBC(int appid,String name,String developer,int score_rank,int postive,int negative,int price) {
    String sql = "INSERT INTO `game` (`appid`,`name`,`developer`,`score_rank`,`positive`,`negative`,`price`)" +
            "VALUES (?,?,?,?,?,?,?)";
    try {
      preparedStatement = connection.prepareStatement(sql);
      preparedStatement.setInt(1, appid);
      preparedStatement.setString(2, name);
      preparedStatement.setString(3,developer);
      preparedStatement.setInt(4, score_rank);
      preparedStatement.setInt(5, postive);
      preparedStatement.setInt(6, negative);
      preparedStatement.setInt(7, price);
      preparedStatement.executeUpdate();
      System.out.println(preparedStatement);
    } catch (SQLException e) {
      e.printStackTrace();
    }
  }

    public void addGames() throws Exception{
      Scanner scanner = new Scanner(new FileInputStream("All.txt"));
      int count=0;
      while(scanner.hasNextLine()){
        String[] line = scanner.nextLine().split(":");
        int appid = Integer.valueOf((line[2].split(","))[0]);
        //  System.out.println("appid   " + appid);
        String name = line[3].split(",")[0].replace("\"", "");
        //  System.out.println("name   " + name);
        String developer = line[4].split(",")[0].replace("\"", "");
        //  System.out.println("developer   " + developer);
        int score_rank=0;
        try {score_rank = Integer.valueOf(line[6].split(",")[0]);}
        catch (Exception e){}
        //  System.out.println("score_rank   " + score_rank);
        int positive=0;
        try {positive = Integer.valueOf(line[7].split(",")[0]);}
        catch (Exception e){}
        // System.out.println("positive   " + positive);
        int negative=0;
        try {negative= Integer.valueOf(line[8].split(",")[0]);}
        catch (Exception e){}
        // System.out.println("negative   " + negative);
        int price = 0;
        try { price = Integer.valueOf(line[15].split(",")[0]) ; }
        catch (Exception e) { }
        //   System.out.println("price   " + price);
     this.addGamesJDBC(appid,name,developer,score_rank,positive,negative,price);
        count++;
    }

  }

  public static void main(String[] args) throws Exception {
    new AddGamesJDBC().addGames();
  }

}
