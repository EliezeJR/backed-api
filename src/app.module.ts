import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GenerosModule } from './generos/generos.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'estudent-ng',
    entities: [],
    synchronize: true,
    autoLoadEntities: true,
  }),
    EstudiantesModule,
    GenerosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
