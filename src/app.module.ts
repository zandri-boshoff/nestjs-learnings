import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ProductsModule],
  controllers: [AppController], // NB for receiving requests, doing something with it and sending back a response.
  providers: [AppService], // Services/classes with extra functionality that can be added to controllers
})
export class AppModule {} // each module consists of multiple controllers and providers
