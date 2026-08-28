package com.example.demo.controller;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.request.TestPongDTI;
import com.example.demo.dto.response.APIDataDTO;



@RestController
@RequestMapping(value ="/api" )
@EnableConfigurationProperties(APIDataDTO.class)
public class Index {

    private static final Logger log = LoggerFactory.getLogger(Index.class);
    private final APIDataDTO apiInfo; 

    public Index (APIDataDTO apiInfo){
        this.apiInfo = apiInfo;
    }

    @GetMapping("")
    public APIDataDTO requestMethodName(@RequestParam(defaultValue = "default_value") String param) {
        System.out.println(">> Hello world rest api on Spring");
        System.out.println(apiInfo.appName());
        return apiInfo;
    }

    @PostMapping("/post")
    public TestPongDTI postMethodName( @RequestBody TestPongDTI entity) {
        return entity;
    }
}
