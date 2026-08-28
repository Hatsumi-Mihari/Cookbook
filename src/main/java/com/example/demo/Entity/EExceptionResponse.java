package com.example.demo.Entity;

/*
*   @param String descritption
*   @param T data
*/
public record EExceptionResponse<T>(
    String descritption,
    T data
){}
