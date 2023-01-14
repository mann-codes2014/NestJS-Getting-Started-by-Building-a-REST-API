import { Controller, Get } from '@nestjs/common';
import { DevelopersService } from './developers.service';

@Controller('developers')
export class DevelopersController {

  // private readonly developersService: DevelopersService is Injecting 
  // the service here via DI pattern. 
  constructor(private readonly developersService: DevelopersService) {}

  @Get() // Here Get is basically HTTP GET
  findAll() {
    return this.developersService.findAll();
  }
}
