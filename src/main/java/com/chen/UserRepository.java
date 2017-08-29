package com.chen;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * Created by 陈锦 on 2017/8/28.
 */
public interface UserRepository extends JpaRepository<User,Integer> {
}
