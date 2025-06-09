package com.example.hibnb_project.controller;

import com.example.hibnb_project.service.EmailService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class EmailController {
    private final EmailService emailService;


    @GetMapping("/send-email")
    public String sendEmail(@RequestParam String to, @RequestParam String subject, @RequestParam String text) {
        emailService.sendSimpleEmail(to, subject, text);
        return "Email sent successfully!";
    }
}
