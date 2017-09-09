package com.anz.banking.models;

public class DataSource {
	
	private String url;
	private String userName;
	private String password;
	private String dbName;
	private int port;
	
	
	
	
	public DataSource(String url, String userName, String password, String dbName, int port) {
		super();
		this.url = url;
		this.userName = userName;
		this.password = password;
		this.dbName = dbName;
		this.port = port;
	}

	public String getUrl() {
		return url;
	}
	
	public String getUserName() {
		return userName;
	}
	
	
	
	public String getDbName() {
		return dbName;
	}
	
	public int getPort() {
		return port;
	}

	public String getPassword() {
		return password;
	}
	
	
	

}
