package com.ecommerce.main.Service;

import com.ecommerce.main.Model.Category;
import com.ecommerce.main.Model.Product;
import com.ecommerce.main.Model.User;

import java.util.List;

public interface ProductService {

    Product addProduct(Product product);

    Product updateProduct(Product product);

    Product getProductById(int productId);

    Long countByStatusIn(List<String> status);

    Long countByStatusInAndSeller(List<String> status, User seller);

    List<Product> getAllProductByStatusIn(List<String> status);

    List<Product> getAllProductBySellerAndStatusIn(User Seller, List<String> status);

    List<Product> getAllProductByCategoryAndStatusIn(Category category, List<String> status);

    List<Product> getAllProductBySellerAndCategoryAndStatusIn(User seller, Category category, List<String> status);

    List<Product> updateAllProduct(List<Product> products);

    List<Product> searchProductNameAndStatusIn(String productName, List<String> status);

    List<Product> searchProductNameAndSellerAndStatusIn(String productName, User seller, List<String> status);

}
