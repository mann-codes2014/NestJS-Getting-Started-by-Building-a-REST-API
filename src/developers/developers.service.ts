import { Injectable } from '@nestjs/common';

@Injectable()
export class DevelopersService {
  findAll() {
    return [
      { name: 'Abdur Rehman', role: 'Full Stack Developer' },
      { name: 'Danish Alam', role: 'Full Stack Developer' },
    ];
  }
}
