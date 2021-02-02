package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.model.Employee;

//we provide the Employee and the type of primary key
@Repository
public interface EmployeeDao extends JpaRepository<Employee, Long> {
	
	//validate user with valid email and password
	public Employee findByEmailAndPassword(String email,String password);
	
	public Employee findByEmpid(Long id);
	
	//get list of all the employees
	@Override
	public List<Employee> findAll();
	
}
