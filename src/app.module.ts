import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DevelopersModule } from './developers/developers.module';
@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [DevelopersModule],
})
export class AppModule {}
