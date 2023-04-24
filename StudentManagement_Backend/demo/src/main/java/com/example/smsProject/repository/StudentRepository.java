package com.example.smsProject.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.smsProject.model.Student;

//This Interface extends JpaRepository interface, so that @Repository is not needed to be annotated manually
public interface StudentRepository extends JpaRepository<Student, Integer>{
	List<Student> findByStudentNameContaining(String studentName);
	List<Student>findByStandard(Integer standard);
}
