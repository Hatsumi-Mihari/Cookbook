package com.example.demo.controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.config.AppData;


@RestController
@RequestMapping(value ="" )
public class Index {

    private final AppData appData;

    public Index (AppData appData){
        this.appData = appData;
    }

    @GetMapping("/api")
    public String requestMethodName(@RequestParam(defaultValue = "default_value") String param) {
        System.out.println(">> Hello world rest api on Spring");
        return this.appData.toAboutApiJson();
    }
    
}
