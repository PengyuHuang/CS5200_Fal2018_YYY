package com.example.yyy.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

import javax.transaction.Transactional;
import com.example.yyy.repository.*;
import com.example.yyy.model.*;

public interface EventRepository extends JpaRepository<Event, Integer> {



}
