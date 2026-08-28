package com.example.demo.dto.request;

public record TestPongDTI(
        String name,
        String data) {
    public TestPongDTI {
        if (name == null || name.isBlank()) {
            throw new IllegalArgumentException("name is empty");
        }

    }
}
