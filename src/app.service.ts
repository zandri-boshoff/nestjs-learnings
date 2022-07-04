import { Injectable } from '@nestjs/common';

// Here you want to reach out to your database and do the heavy lifting - add the logic so that the controllers can stay clean and focus on handling the incoming request and responding.
@Injectable() // This decorator makes sure that the below class can be injected.
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
