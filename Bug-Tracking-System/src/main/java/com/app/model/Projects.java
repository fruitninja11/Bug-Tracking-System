package com.app.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "projects_table")
public class Projects {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable = false)
	private Long projectid;

	@Column(name = "project_name", nullable = false)
	private String pname;

	@Column(name = "project_type", nullable = false)
	private String ptype;

	@Column(name="technology",nullable = false)
	private String technology;

	@Column(name = "client",nullable = false)
	private String client;

	@Column(name = "project_desc")
	private String pdesc;

	/*
	 * @ManyToOne(fetch = FetchType.LAZY, optional = false,cascade =
	 * CascadeType.ALL)
	 * 
	 * @JoinColumn(name = "emp_id", nullable = false) private Employee employee;
	 */

	public Projects() {
		super();
		// TODO Auto-generated constructor stub
	}	


	public Projects(Long projectid, String pname, String ptype, String technology, String client, String pdesc) {
		super();
		this.projectid = projectid;
		this.pname = pname;
		this.ptype = ptype;
		this.technology = technology;
		this.client = client;
		this.pdesc = pdesc;
	}


	public Long getProjectid() {
		return projectid;
	}


	public void setProjectid(Long projectid) {
		this.projectid = projectid;
	}


	public String getTechnology() {
		return technology;
	}


	public void setTechnology(String technology) {
		this.technology = technology;
	}


	public String getClient() {
		return client;
	}


	public void setClient(String client) {
		this.client = client;
	}


	public String getPname() {
		return pname;
	}

	public void setPname(String pname) {
		this.pname = pname;
	}

	public String getPtype() {
		return ptype;
	}

	public void setPtype(String ptype) {
		this.ptype = ptype;
	}

	public String getPdesc() {
		return pdesc;
	}

	public void setPdesc(String pdesc) {
		this.pdesc = pdesc;
	}

}
