import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { UnitModule } from './unit/unit.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    CommonModule,
  	TypeOrmModule.forRoot(), 
    UnitModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
