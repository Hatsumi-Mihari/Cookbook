package com.example.demo.config;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.core.SpringVersion;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.annotation.PostConstruct;
import tools.jackson.databind.ObjectMapper;

@Component
@ConfigurationProperties(prefix = "app")
public class AppData {
    @Value("${app.appName}")
    private String appName;

    @Value("${app.version}")
    private String version;

    @Value("${app.symbolCodeVer}")
    private String symbolCodeVer;

    @Value("${app.detaBuild}")
    private String dateBuild;

    @Value("${app.jdkVersion}")
    private String jdkVersion;

    @Value("${app.springVersion}")
    private String springVersion;

    @Value("${app.build}")
    private int build;

    public AppData() {
    }

    @PostConstruct
    public void initDynamicFields() {
        this.dateBuild = LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME);
        this.build++;
        this.jdkVersion = System.getProperty("java.version");
        this.springVersion = SpringVersion.getVersion();
    }

public String getAppName() { return appName; }
    public void setAppName(String appName) { this.appName = appName; }

    public String getVersion() { return version; }
    public void setVersion(String version) { this.version = version; }

    public String getSymbolCodeVer() { return symbolCodeVer; }
    public void setSymbolCodeVer(String symbolCodeVer) { this.symbolCodeVer = symbolCodeVer; }

    public String getDateBuild() { return dateBuild; }
    public void setDateBuild(String dateBuild) { this.dateBuild = dateBuild; }

    public String getJdkVersion() { return jdkVersion; }
    public void setJdkVersion(String jdkVersion) { this.jdkVersion = jdkVersion; }

    public String getSpringVersion() { return springVersion; }
    public void setSpringVersion(String springVersion) { this.springVersion = springVersion; }

    public int getBuild() { return build; }
    public void setBuild(int build) { this.build = build; }

    
    @JsonIgnore
    public String getFormattedBuild() {
        return String.format("%d,%s", this.build, this.symbolCodeVer);
    }

    @JsonIgnore
    public String toAboutApiJson() {
        try {
            ObjectMapper mapper = new ObjectMapper();
            return mapper.writeValueAsString(this);
        } catch (Exception e) {
            throw new RuntimeException("Error contein AppData to JSON", e);
        }
    }
}