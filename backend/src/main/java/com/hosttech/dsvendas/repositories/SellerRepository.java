package com.hosttech.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.hosttech.dsvendas.entities.Seller;


public interface SellerRepository extends JpaRepository<Seller, Long>{

}
