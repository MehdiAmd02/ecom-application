package org.sid.bilingservice.service;


import org.sid.bilingservice.model.Customer;
import org.sid.bilingservice.model.Product;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.hateoas.PagedModel;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "customer-service")
public interface CustomerRestClient {

    @GetMapping(path = "/api/customers/{id}")
    Customer findCustomerById(@PathVariable Long id);
    @GetMapping("/api/customers")
    PagedModel<Customer> getAllCustomers();

}
