package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.app.model.Bugs;

public interface BugDao extends JpaRepository<Bugs, Long> {

	public Bugs findByBugid(Long id);
	
	public List<Bugs> findAllByProjectProjectid(Long id);
}
