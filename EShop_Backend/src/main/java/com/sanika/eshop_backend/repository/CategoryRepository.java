package com.sanika.eshop_backend.repository;

import com.sanika.eshop_backend.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}

