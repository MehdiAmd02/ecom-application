package org.sid.customerservice;

import org.sid.customerservice.config.CustomerConfigParams;
import org.sid.customerservice.entities.Customer;
import org.sid.customerservice.repositpry.CustomeRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

import java.util.List;

@SpringBootApplication
@EnableConfigurationProperties(CustomerConfigParams.class)
public class CustomerServiceApplication {

	public static void main(String[] args) {

		SpringApplication.run(CustomerServiceApplication.class, args);
	}


	@Bean
	public CommandLineRunner commandLineRunner(CustomeRepository customeRepository ,
											   RepositoryRestConfiguration repositoryRestConfiguration){

		return args -> {
			repositoryRestConfiguration.exposeIdsFor(Customer.class);

			customeRepository.saveAll(
			List.of(
					Customer.builder().name("MEHDI").email("mehdi@gmail.com").build(),
					Customer.builder().name("mehdi1").email("mehdi1@gmail.com").build(),
					Customer.builder().name("mehdi2").email("mehdi2@gmail.com").build()
			)
			);
			customeRepository.findAll().forEach(c->{
				System.out.println(c );
			});
		};
	}
}
