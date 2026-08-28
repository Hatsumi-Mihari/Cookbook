package com.example.demo.dto.response;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.core.SpringVersion;

@ConfigurationProperties(prefix = "app")
public record APIDataDTO (
    String appName,
    String version,
    String dateBuild,
    String jdkVersion,
    String springVersion,
    String symbolCodeVer,
    int build
){
    public APIDataDTO
    {
        
        jdkVersion = System.getProperty("java.version");
        springVersion = SpringVersion.getVersion();
        dateBuild = LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME);
        

        System.out.println(symbolCodeVer);

        build++;
    }
}
