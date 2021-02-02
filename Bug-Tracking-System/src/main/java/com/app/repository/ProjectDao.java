package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.model.Projects;


@Repository
public interface ProjectDao extends JpaRepository<Projects, Long>{
	
	public Projects findByProjectid(Long id);
	public List<Projects> findAll();
}
