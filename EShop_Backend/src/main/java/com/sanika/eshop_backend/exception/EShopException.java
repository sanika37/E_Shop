package com.sanika.eshop_backend.exception;

import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.http.HttpStatus;
@EqualsAndHashCode(callSuper = true)
@Data
public class EShopException extends RuntimeException{
    private HttpStatus status;
    private String message;
    public EShopException(HttpStatus status, String message){
        this.status = status;
        this.message = message;
    }
}