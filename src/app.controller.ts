import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

// This controller will handle incoming requests to the root route
@Controller()
export class AppController {
  // NestJS will create an instance of this controller so its NestJS's duty to pass in a service object
  constructor(private readonly appService: AppService) {}

  @Get()
  @Header('Content-Type', 'text/html') // Can explicitly set the headers or nestjs can infer it based on the type of content that is being returned.
  getHello(): { name: string } {
    return { name: 'Zandri' };
  }
}
