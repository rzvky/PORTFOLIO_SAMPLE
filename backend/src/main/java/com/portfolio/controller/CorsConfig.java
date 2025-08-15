package com.portfolio.controller;

import org.springframework.context.annotation.Configuration;
import org.springframework.lang.NonNull; // Import the NonNull annotation
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// Configuration for CORS
@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(@NonNull CorsRegistry registry) { // Added @NonNull annotation
        // Allow requests from the frontend server
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000")
                .allowedMethods("GET", "POST", "PUT", "DELETE", "HEAD");
    }
}