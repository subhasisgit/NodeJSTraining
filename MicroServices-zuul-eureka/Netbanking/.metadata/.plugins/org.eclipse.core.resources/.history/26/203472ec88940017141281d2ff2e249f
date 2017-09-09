package com.anz.banking.utility;

import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.xml.XmlBeanFactory;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;

import com.anz.banking.models.DataSource;
import com.anz.banking.models.SessionFactory;

public class BankingApp {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Resource resource=new ClassPathResource("dbcontext.xml");
		
		BeanFactory beanFact=new XmlBeanFactory(resource);
		
		SessionFactory sessionFactory=(SessionFactory) beanFact.getBean("sf");
		
		//DataSource dataSource= (DataSource) beanFact.getBean("ds");
		System.out.println(sessionFactory.getDataSource().getUrl());
		
		System.out.println(sessionFactory.getDuration());
		
	}

}
