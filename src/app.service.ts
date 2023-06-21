import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  createGenero() {
    return [
      { id: 1, name: 'FEMENINO' },
      { id: 2, name: 'MASCULINO' },
    ];
  }


}
