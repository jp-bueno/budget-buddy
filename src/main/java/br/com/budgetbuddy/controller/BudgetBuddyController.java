package br.com.budgetbuddy.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/budget-buddy")
public class BudgetBuddyController {

    @GetMapping
    public String teste() {
        return "Hello, World!";
    }
}
