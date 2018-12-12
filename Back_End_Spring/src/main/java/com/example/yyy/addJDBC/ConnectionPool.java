package com.example.yyy.addJDBC;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConnectionPool {
  private static ConnectionPool instance = null;
  private ConnectionPool() {};

  public static ConnectionPool getInstance() {
    if(instance == null) {
      instance = new ConnectionPool();
    }
    return instance;
  }
  Connection connection = null;
  
  private static final String oldURL = "jdbc:mysql://cs5200-fall2018-mei.cqw0t0hp8qox.us-east-2.rds." +
          "amazonaws.com:3306/cs5200_fall2018_mei_A3?autoReconnect=true&useSSL=false";
  private static final String URL="jdbc:mysql://cs5200-fall2018-mei.cqw0t0hp8qox.us-east-2.rds.amazonaws.com/yyy?useSSL=false";
  private static final String USER = "xiayumei";
  private static final String PASSWORD = "xiayumei";

  public Connection getConnection() {
    if(connection == null) {
      try {
        Class.forName("com.mysql.jdbc.Driver");
        connection = DriverManager.getConnection(URL, USER, PASSWORD);
      } catch (ClassNotFoundException e) {
        // TODO Auto-generated catch block
        e.printStackTrace();
      } catch (SQLException e) {
        // TODO Auto-generated catch block
        e.printStackTrace();
      }
    }
    return connection;
  }
  public void closeConnection() {
    if(connection != null) {
      try {
        connection.close();
      } catch (SQLException e) {
        // TODO Auto-generated catch block
        e.printStackTrace();
      }
    }
  }
}