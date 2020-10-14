import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './customer.entity';
import { UpdateResult, DeleteResult } from 'typeorm';
import { CreateCustomerDto } from './create-customer.dto';
import { EditCustomerDto } from './edit-customer.dto';
import {
  paginate,
  Pagination,
  IPaginationOptions,
} from 'nestjs-typeorm-paginate';

export interface CustomerFindOne {
  id?: number;
  email?: string;
}


@Injectable()
export class CustomerService {
    constructor(
        @InjectRepository(Customer)
        private customerRepository: Repository<Customer>,
    ) { }
        
     async  getMany() {
        return await this.customerRepository.find();
    }

    async getOne(id: number, customerEntity?: Customer) {
    const customer = await this.customerRepository
      .findOne(id)
      .then(c => (!customerEntity ? c : !!c && customerEntity.id === c.id ? c : null));

    if (!customer)
      throw new NotFoundException('Customer nao existe');

    return customer;
  }

    async create(dto: CreateCustomerDto) {
     const customerExist = await this.customerRepository.findOne({ email: dto.email });
        if (customerExist)
          throw new BadRequestException('email ja registrado');
        const newCustomer = this.customerRepository.create(dto);
        const customer = await this.customerRepository.save(newCustomer);
        return customer;
  }

    async edit(id: number, dto: EditCustomerDto, customerEntity?: Customer) {
    console.log(dto);
        const customer = await this.getOne(id, customerEntity);
        const editedCustomer = Object.assign(customer, dto);
        return await this.customerRepository.save(editedCustomer);
  }

    async delete(id: number, customerEntity?: Customer) {
    const customer = await this.getOne(id, customerEntity);
    return await this.customerRepository.remove(customer);
  }

  async paginate(options: IPaginationOptions): Promise<Pagination<Customer>> {
    const queryBuilder = this.customerRepository.createQueryBuilder('c');
    queryBuilder.orderBy('c.name', 'DESC');
    return paginate<Customer>(queryBuilder, options);
  }
}

    