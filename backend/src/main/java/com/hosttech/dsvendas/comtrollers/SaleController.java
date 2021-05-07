package com.hosttech.dsvendas.comtrollers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hosttech.dsvendas.dto.SaleDTO;
import com.hosttech.dsvendas.service.SaleService;

@RestController
@RequestMapping(value= "/sales")
public class SaleController {
	
	@Autowired
	private SaleService service;
	
	@GetMapping
	public ResponseEntity<Page<SaleDTO>> finAll(Pageable pageable) {
		Page<SaleDTO> page= service.findAll(pageable);
		return ResponseEntity.ok(page);
	}

}
