package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.model.ProjectEmployeeMapping;

public interface ProjectEmployeeDao extends JpaRepository<ProjectEmployeeMapping, Long>{
	public List<ProjectEmployeeMapping> findAll();
	
	public ProjectEmployeeMapping findByEmpid(Long id);
}
