package com.app.controler;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.model.Employee;
import com.app.repository.EmployeeDao;

@RestController
@RequestMapping("/api/v1")
public class LoginController {
	@Autowired
	private EmployeeDao employeedao;
	
	@PostMapping("/login")
	@CrossOrigin(origins = "http://localhost:3000")
	public Employee fetchByEmailAndPassword(@RequestBody Employee employee) throws Exception {
		String email=employee.getEmail();
		String password = employee.getPassword();
		
		Employee validateuser = null;
		if(email != null && password != null) {
			validateuser = employeedao.findByEmailAndPassword(email, password);
			if(validateuser == null) {
				throw new Exception("User Does Not Exist. Check credentails again");
			}
		}
		return validateuser;
	}
}
