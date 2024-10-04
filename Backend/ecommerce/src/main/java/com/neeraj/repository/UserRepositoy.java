package com.neeraj.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.neeraj.model.User;


public interface UserRepositoy extends JpaRepository<User, Long> {
	
	public User findByEmail(String email);
	
}
