package com.app.controler;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.model.Employee;
import com.app.repository.EmployeeDao;

@RestController
@RequestMapping("/api/v1")
public class EmployeeController {
	@Autowired
	private EmployeeDao employeedao;
	
	@GetMapping("/employees")
	@CrossOrigin(origins = "http://localhost:3000")
	public List<Employee> getAllEmployees(){
		return employeedao.findAll();
	}
	
	@GetMapping("/employees/{id}")
	@CrossOrigin(origins = "http://localhost:3000")
	public Employee getEmployee(@PathVariable Long id) {
		return employeedao.findByEmpid(id);
	}
}
