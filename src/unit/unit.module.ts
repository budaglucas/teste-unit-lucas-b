import { Module } from '@nestjs/common';
import { Customer } from './customer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';

@Module({
	imports: [
	TypeOrmModule.forFeature([Customer])
	],
	providers: [CustomerService],
	controllers: [CustomerController]
})
export class UnitModule {}