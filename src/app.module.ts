import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MateriasModule } from './materias/materias.module';


@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService) => ({
        type: configService.get('TYPEORM_CONNECTION'),
        host: configService.get('TYPEORM_HOST'),
        database: configService.get('TYPEORM_DATABASE'),
        username: configService.get('TYPEORM_USERNAME'),
        password: configService.get('TYPEORM_PASSWORD'),
        port: Number(configService.get('TYPEORM_PORT', 5432)),
        entities: [__dirname + '/**/*.entity.js'],
        synchronize: true,
        logging: 'all',
      })
      
    }),
    MateriasModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
