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

import java.util.List;
import com.example.yyy.repository.*;
import com.example.yyy.model.*;

@RestController
@CrossOrigin(origins = "*")
public class AdvertisementController {

  @Autowired
  AdvertisementRepository advertisementRepository;

  @PostMapping("/api/ad/create")
  public Advertisement createAdvertisement(@RequestBody Advertisement advertisement) {
    advertisementRepository.save(advertisement);
    return advertisement;
  }

  @GetMapping("/api/ad/read/all")
  public List<Advertisement> findAllAdvertisements() {
    return advertisementRepository.findAll();
  }

  @GetMapping("/api/ad/read/{adId}")
  public Advertisement findAdvertisement(@PathVariable("adId") int adId) {
    return advertisementRepository.findById(adId).get();
  }

  @PutMapping("/api/ad/update/{adId}")
  public Advertisement updateAdvertisement(
          @PathVariable("adId") int adId,
          @RequestBody Advertisement newAdvertisement) {
    Advertisement advertisement = advertisementRepository.findById(adId).get();
    advertisement.set(newAdvertisement);
    return advertisementRepository.save(advertisement);
  }

  @DeleteMapping("/api/ad/delete/{adId}")
  public void deleteAdvertisement
          (@PathVariable("adId") int id) {
    advertisementRepository.deleteById(id);
  }

  @GetMapping("/api/ad/read/top/six")
  public List<Advertisement> findThreeAdvertisements() {
    if (advertisementRepository.findAll().size() <6 ) {
      return advertisementRepository.findAll();
    }
    return advertisementRepository.findAdBill().subList(0, 5);
  }

  @GetMapping("/api/ad/read/top/")
  public Advertisement findTopBillAdv() {
    List<Advertisement> list=advertisementRepository.findAll();
    int max_index=0;
    for (int i=0;i<list.size();i++){
      if(list.get(i).getBill()>list.get(max_index).getBill())
      {
        max_index=i;
      }
    }
    return list.get(max_index);}


  }


