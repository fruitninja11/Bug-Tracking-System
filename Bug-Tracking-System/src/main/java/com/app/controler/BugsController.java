package com.app.controler;
import java.util.Map;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.app.exception.ResourceNotFoundException;
import com.app.model.Bugs;
import com.app.repository.BugDao;

@RestController
@RequestMapping("/api/v1")
public class BugsController {
	
	@Autowired
	private BugDao bugdao;
	
	@GetMapping(path = "/bugs")
	@CrossOrigin(origins = "http://localhost:3000")
	public List<Bugs> getAllBugs() {
		return bugdao.findAll();
	}
	
	@PostMapping("/bugs")
	@CrossOrigin(origins = "http://localhost:3000")
	public Bugs createBug(@RequestBody Bugs bug) {
		return bugdao.save(bug);
	}
	
	@GetMapping("/bugs/{id}")
	@CrossOrigin(origins = "http://localhost:3000")
	public ResponseEntity<Bugs> getBugById(@PathVariable Long id) {
		Bugs getbug = bugdao.findByBugid(id);
		if(getbug==null)
			throw new ResourceNotFoundException("Bug does not exist" + id);
		else {
			return ResponseEntity.ok(getbug);
		}
	}
	
	@GetMapping("/projectbugs/{id}")
	@CrossOrigin(origins = "http://localhost:3000")
	public ResponseEntity<List<Bugs>> getProjectById(@PathVariable Long id) {
		List <Bugs> foundProjects = bugdao.findAllByProjectProjectid(id);
		if(foundProjects==null)
			throw new ResourceNotFoundException("Bug does not exist" + id);
		else {
			return ResponseEntity.ok(foundProjects);
		}
	}
	
	
	@PutMapping("/bugs/{id}")
	@CrossOrigin(origins = "http://localhost:3000")
	public ResponseEntity<Bugs> updateBug(@PathVariable Long id,@RequestBody Bugs bugdata) throws Exception{
		Bugs bug = bugdao.findByBugid(id);
		if(bug==null) {
			throw new ResourceNotFoundException("Bug does not exist" + id);
		}
			bug.setBugname(bugdata.getBugname());
			bug.setBugtype(bugdata.getBugtype());
			bug.setStatus(bugdata.getStatus());
			bug.setProject(bugdata.getProject());
			bug.setBugdesc(bugdata.getBugdesc());
			bug.setComments(bugdata.getComments());
			Bugs updatedbug = bugdao.save(bug);
			return ResponseEntity.ok(updatedbug);
	}
	
	@DeleteMapping("/bugs/{id}")
	@CrossOrigin(origins = "http://localhost:3000")
	public ResponseEntity<Map<String, Boolean>> deleteBug(@PathVariable Long id){
		Bugs bug= bugdao.findByBugid(id);
		if(bug == null)
			throw new ResourceNotFoundException("Bug does not exist" + id);
		bugdao.delete(bug);
		Map<String,Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
