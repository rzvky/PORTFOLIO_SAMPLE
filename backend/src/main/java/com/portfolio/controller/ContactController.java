package com.portfolio.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

// Controller to handle contact form submissions
@RestController
public class ContactController {

    // Endpoint to handle POST requests to /contact
    @PostMapping("/contact")
    public void handleContactForm(@RequestBody Map<String, String> contactForm) {
        String name = contactForm.get("name");
        String email = contactForm.get("email");
        String message = contactForm.get("message");

        // Log the contact form details to the console
        System.out.println("New contact form submission:");
        System.out.println("Name: " + name);
        System.out.println("Email: " + email);
        System.out.println("Message: " + message);
    }
}