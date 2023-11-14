package com.ecommerce.main.dto;



import lombok.Data;

@Data
public class UserLoginResponse extends CommonApiResponse {

    private UserDto user;

    private String jwtToken;

}
