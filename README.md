# unit-nestjs
UNIT Technical Assessment Project

In this test you are asked to build an API to manage customers. This API must provide at least these operations (considering their rules):

* Create customer: must validate if supplied e-mail address is unique and valid;
* Update customer: should not allow e-mail address changing; 
* Delete customer;
* List customers: must support parameters to filter customers by name and must support pagination;
* Count customers: must return the total count of customers on the database;


#Instructions

The project is already connected to the database but no entity is provided or previously created. You must define your entity and apply the migration to the database to perform its creation. The entity name must follow this rule: customer_<your first name>_<surname initials>. For instance, in case you name is John Doe the table should be named "customer_john_d".
  
