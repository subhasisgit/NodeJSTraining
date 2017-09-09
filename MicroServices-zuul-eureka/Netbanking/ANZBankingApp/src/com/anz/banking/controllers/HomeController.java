package com.anz.banking.controllers;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class HomeController {

	@RequestMapping(method=RequestMethod.GET, value="/index")
	public String homepage(HttpServletRequest req, HttpServletResponse res, ModelMap map)
	{
		map.addAttribute("message", "Request Processed, Ready with Home Page");
		return "Home";
	}
}