import {Injectable} from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

@Injectable()
export class ConfigService {
    private readonly envPath = `${process.env.NODE_ENV || 'development'}.env`;
    private readonly envConfig: Record<string, string>;

    constructor() {
        if (this.envPath) {
            this.envConfig = dotenv.parse(fs.readFileSync(this.envPath));
        }
    }

    get(key: string) {
        return this.envConfig[key] as string;
    }
}
