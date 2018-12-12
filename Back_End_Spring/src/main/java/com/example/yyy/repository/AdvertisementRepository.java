package com.example.yyy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import com.example.yyy.repository.*;
import com.example.yyy.model.*;

public interface AdvertisementRepository extends JpaRepository<Advertisement, Integer>{
  @Query(" SELECT advertisement from Advertisement advertisement  ORDER BY bill DESC ")
  public List<Advertisement> findAdBill();

}
