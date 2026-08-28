package com.example.demo.controller;

import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.HttpMediaTypeNotSupportedException;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.MissingPathVariableException;
import org.springframework.web.bind.MissingRequestHeaderException;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.resource.NoResourceFoundException;

import com.example.demo.Entity.EExceptionResponse;

import tools.jackson.databind.exc.UnrecognizedPropertyException;

@RestControllerAdvice
public class IndexException {

    public IndexException() {
        System.out.println(1235);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<EExceptionResponse<?>> handleServerException(Exception ex) {
        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new EExceptionResponse<>(ex.getMessage(), ex.getStackTrace()));
    }

    @ExceptionHandler(NoResourceFoundException.class)
    public ResponseEntity<EExceptionResponse<?>> handleNotFoundContent(NoResourceFoundException ex) {
        return ResponseEntity
                .status(HttpStatus.NOT_FOUND)
                .body(new EExceptionResponse<>(ex.getMessage(), ex.getBody()));
    }

    @ExceptionHandler(HttpRequestMethodNotSupportedException.class)
    public ResponseEntity<EExceptionResponse<?>> handleBadHttpMethod(HttpRequestMethodNotSupportedException ex) {
        return ResponseEntity
                .status(HttpStatus.NOT_ACCEPTABLE)
                .body(new EExceptionResponse<>(ex.getMessage(), ex.getBody()));
    }

    @ExceptionHandler(HttpMediaTypeNotSupportedException.class)
    public ResponseEntity<EExceptionResponse<?>> handleNotSuppMediaType(HttpMediaTypeNotSupportedException ex) {
        return ResponseEntity
                .status(HttpStatus.UNSUPPORTED_MEDIA_TYPE)
                .body(new EExceptionResponse<>(ex.getMessage(), ex.getBody()));
    }

    @ExceptionHandler(MissingPathVariableException.class)
    public ResponseEntity<EExceptionResponse<?>> handleMissPathVar(MissingPathVariableException ex) {
        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new EExceptionResponse<>(ex.getMessage(), ex.getBody()));
    }

    @ExceptionHandler(MissingServletRequestParameterException.class)
    public ResponseEntity<EExceptionResponse<?>> handleMissRequestParam(MissingServletRequestParameterException ex) {
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(new EExceptionResponse<>(ex.getMessage(), ex.getBody()));
    }

    @ExceptionHandler(MissingRequestHeaderException.class)
    public ResponseEntity<EExceptionResponse<?>> handleMissHeader(MissingRequestHeaderException ex) {
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(new EExceptionResponse<>(ex.getMessage(), ex.getBody()));
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<EExceptionResponse<?>> handleNotValidArgJSON(MethodArgumentNotValidException ex) {
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(new EExceptionResponse<>(ex.getMessage(), ex.getBody()));
    }

    @ExceptionHandler(HttpMessageNotReadableException.class)
    public ResponseEntity<EExceptionResponse<?>> handleNotValidJSON(HttpMessageNotReadableException ex) {
        if(ex.getCause() instanceof UnrecognizedPropertyException upEx){
            return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(new EExceptionResponse<>(String.format("Undefined or invalide row (%s)", upEx.getPropertyName()), Map.of(
                    "HTTP_CODE", "400 BAD REQUEST",
                    "property", upEx.getPropertyName(),
                    "targetClass", upEx.getReferringClass()
                )));
        }

        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(new EExceptionResponse<>(ex.getMessage(), "400 BAD_REQUEST"));
    }
}