package com.pong.presentation.rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GameController {

    @GetMapping("/api/game")
    public String getGame() {
        return "Game data";
    }
}