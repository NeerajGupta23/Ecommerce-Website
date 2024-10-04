package com.neeraj.service;

import com.neeraj.exception.UserException;
import com.neeraj.model.User;

public interface UserService {
	public User findUserById(Long userId) throws UserException;
	
	public User findUserProfileByJwt(String jwt) throws UserException;
}
