import { Module } from '@nestjs/common';
import { DatabaseModule } from './infrestructure/database/database.module';

@Module({
  imports: [DatabaseModule]
})
export class SharedModule {}
