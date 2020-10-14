import { Controller, 
	Post, 
	Get, 
	Put,
	Delete,
	Param,
	Body,
  Query
	 } from '@nestjs/common';
import { Customer as CustomerEntity } from './customer.entity';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './create-customer.dto';
import { EditCustomerDto } from './edit-customer.dto';
import { Pagination } from 'nestjs-typeorm-paginate';


@Controller('customers')
export class CustomerController {
	constructor(private customerService: CustomerService){}

	@Get()
    async getMany() {
      const data = await this.customerService.getMany();
      return { data };
    }   

	@Post('register')
    async register(@Body() dto: CreateCustomerDto) {
      const data = await this.customerService.create({
        ...dto
      })
      return { message: 'customer registrado', data };
    }  

	@Put(':id')
	  async edit(
    @Param('id') id: number,
    @Body() dto: EditCustomerDto, 
    ) {
    const data = await this.customerService.edit(id, dto)
    return { message: 'customer editado', data };
  }

  @Delete(':id')
    async delete(@Param('id') id: number) {
     const data = await this.customerService.delete(id); 
    }
    
  @Get('lista')
  async index(
  @Query('page') page: number = 1,
  @Query('limit') limit: number = 10,
  ): Promise<Pagination<CustomerEntity>> {
    limit = limit > 100 ? 100 : limit;
    return this.customerService.paginate({
      page,
      limit,
      route : "rota"
    })
  }    
}