package com.app.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "bugs_table")
public class Bugs {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable = false)
	private Long bugid;
	
	@ManyToOne
	@JoinColumn(name="projectid",nullable = false)
	private Projects project;
	
	@Column(name = "bug_name",nullable = false)
	private String bugname;
	
	@Column(name = "bug_type",nullable = false)
	private String bugtype;
	
	@Column(name = "status",nullable = false)
	private String status;
	
	@Column(name = "bug_desc")
	private String bugdesc;
	
	@Column(name = "comments",nullable = false)
	private String comments;

	public Bugs() {
		super();
		// TODO Auto-generated constructor stub
	}



	public Bugs(Long bugid, Projects project, String bugname, String bugtype, String status, String bugdesc,
			String comments) {
		super();
		this.bugid = bugid;
		this.project = project;
		this.bugname = bugname;
		this.bugtype = bugtype;
		this.status = status;
		this.bugdesc = bugdesc;
		this.comments = comments;
	}

	

	public Projects getProject() {
		return project;
	}



	public void setProject(Projects project) {
		this.project = project;
	}



	public Long getBugid() {
		return bugid;
	}

	public void setBugid(Long bugid) {
		this.bugid = bugid;
	}

	public String getBugname() {
		return bugname;
	}

	public void setBugname(String bugname) {
		this.bugname = bugname;
	}

	public String getBugtype() {
		return bugtype;
	}

	public void setBugtype(String bugtype) {
		this.bugtype = bugtype;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getBugdesc() {
		return bugdesc;
	}

	public void setBugdesc(String bugdesc) {
		this.bugdesc = bugdesc;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}
	
	
	
}
