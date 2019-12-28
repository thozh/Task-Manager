import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'api',
  password: 'secret',
  database: 'task_manager',
  entities: [__dirname + '/../**/*.entity.ts'],
  synchronize: true,
  logging: true,
};
