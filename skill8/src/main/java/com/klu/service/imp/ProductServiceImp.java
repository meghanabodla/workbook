package com.klu.service.imp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klu.entity.Product;
import com.klu.repository.ProductRepository;
import com.klu.service.ProductService;

@Service
public class ProductServiceImp implements ProductService {

    @Autowired
    private ProductRepository repo;

    @Override
    public Product addProduct(Product product) {
        return repo.save(product);
    }

    @Override
    public List<Product> getProductsByCategory(String category) {
        return repo.findByCategory(category);
    }

    @Override
    public List<Product> getProductsByPriceRange(double min, double max) {
        return repo.findByPriceBetween(min, max);
    }

    @Override
    public List<Product> getSortedProducts() {
        return repo.sortProductsByPrice();
    }

    @Override
    public List<Product> getExpensiveProducts(double price) {
        return repo.findProductsAbovePrice(price);
    }
}