import {TypeOrmModuleOptions} from '@nestjs/typeorm';
import {mainPath} from '../directory';
import {ConfigService} from '../config/config.service';

export const createDBOptions = async (service: ConfigService) => {
    const config = {
        type: await service.get('DB_TYPE'),
        schema: await service.get('DB_SCHEMA') || 'public',
        host: await service.get('DB_HOST'),
        port: await service.get('DB_PORT'),
        username: await service.get('DB_USER'),
        password: await service.get('DB_PASSWORD'),
        database: await service.get('DB'),
        entities: [mainPath + '/db/**/*Entity{.ts,.js}'],
        migrations: [mainPath + '/db/migrations/*{.ts,.js}'],
        synchronize: await service.get('SYNCHRONIZE') === 'true',
        logging: await service.get('LOGGING') === 'true',
    };

    return config as TypeOrmModuleOptions;
};
