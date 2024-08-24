package com.example.serving_web_content.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class Main_controller {

    @GetMapping("/")
    public String greeting(Model model) {
        model.addAttribute("title", "Hello wolrd");
        return "Home";
    }

}