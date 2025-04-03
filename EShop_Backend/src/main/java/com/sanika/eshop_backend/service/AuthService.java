package com.sanika.eshop_backend.service;

import com.sanika.eshop_backend.entity.Role;
import com.sanika.eshop_backend.payload.LoginDto;
import com.sanika.eshop_backend.payload.RegisterDto;

import java.util.List;

public interface AuthService {
    String login(LoginDto loginDto);
    String register(RegisterDto registerDto);
    String createRole(Role role);
    String deleteRole(String name);
    List<Role> getAllRoles();
    String getRoleByName(String name);

}