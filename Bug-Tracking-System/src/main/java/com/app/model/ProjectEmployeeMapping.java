
package com.app.model;

import javax.persistence.Column;
import javax.persistence.Entity; import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import
javax.persistence.Table;

@Entity
@Table(name = "employee_project_mapping") public class ProjectEmployeeMapping
{
	@Id
	@Column(nullable = false)
	private Long empid;
	
	@Column(nullable = false)
	private String ename;
	
	@OneToOne
	@JoinColumn(name = "projectid")
	private Projects project;
	
	
	@Column(name = "start_date")
	String startdate;
	
	@Column(name = "finish_date")
	String finishdate;
	

	public ProjectEmployeeMapping() {
		super();
		// TODO Auto-generated constructor stub
	}





	public ProjectEmployeeMapping(Long empid, String ename, Projects project, String startdate, String finishdate) {
		super();
		this.empid = empid;
		this.ename = ename;
		this.project = project;
		this.startdate = startdate;
		this.finishdate = finishdate;
	}


	


	public String getEname() {
		return ename;
	}





	public void setEname(String ename) {
		this.ename = ename;
	}





	public Long getEmpid() {
		return empid;
	}


	public void setEmpid(Long empid) {
		this.empid = empid;
	}


	public Projects getProject() {
		return project;
	}


	public void setProject(Projects project) {
		this.project = project;
	}


	public String getStartdate() {
		return startdate;
	}


	public void setStartdate(String startdate) {
		this.startdate = startdate;
	}


	public String getFinishdate() {
		return finishdate;
	}


	public void setFinishdate(String finishdate) {
		this.finishdate = finishdate;
	}
	
	
}



