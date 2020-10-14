import {
  IsString,
  IsEmail,
  MinLength,
  MaxLength,
  IsOptional,
} from 'class-validator';

export class CreateCustomerDto {
  @IsOptional()
  @IsString()
  @MaxLength(255)
  name: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  lastName: string;

  @IsEmail()
  email: string;
}


