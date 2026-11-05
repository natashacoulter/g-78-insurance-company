import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PoliciesController } from './policies.controller.js';
import { PoliciesRepository } from './policies.repository.js';
import { Policy } from './policy.entity.js';

@Module({
  controllers: [PoliciesController],
  imports: [TypeOrmModule.forFeature([Policy])],
  providers: [PoliciesRepository],
})
export class PoliciesModule {}
