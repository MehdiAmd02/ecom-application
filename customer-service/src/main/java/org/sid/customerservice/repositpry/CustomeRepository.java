package org.sid.customerservice.repositpry;

import org.sid.customerservice.entities.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface CustomeRepository extends JpaRepository<Customer , Long> {
}
