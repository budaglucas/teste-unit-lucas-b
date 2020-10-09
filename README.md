# unit-nestjs
UNIT Technical Assessment Project

In this test you are asked to build an API to manage customers. This API must provide at least these operations (considering their rules):

* Create customer: must validate if supplied e-mail address is unique and valid;
* Update customer: should not allow e-mail address changing; 
* Delete customer;
* List customers: must support parameters to filter customers by name and must support pagination;
* Count customers: must return the total count of customers on the database;


# Instructions

The project is already connected to the database but no entity is provided or previously created. You must define your entity and apply the migration to the database to perform its creation. 

Before you start, create a new branch named: UNIT_[FirstName]_[Surname initials].

The customer entity's table name must follow this rule: customer_<your first name>_<surname initials>. For instance, in case you name is John Doe the table should be named "customer_john_d".
  
The minimum required fields for customer entity are:
*Name
*Date of birth
*E-mail address
*Company name
*Position
*Phone number

# Reference material

This project is based on nest.js. Here are some reference links to provide assistance:

* https://docs.nestjs.com/
* https://docs.nestjs.com/techniques/database
* https://github.com/typeorm/typeorm
* https://auth0.com/blog/developing-a-secure-api-with-nestjs-getting-started/

* https://auth0.com/blog/developing-a-secure-api-with-nestjs-getting-started/
