import { Injectable } from '@nestjs/common';
import * as os from "os";

@Injectable()
export class HealthService {
  check(): {} {
    return {
      status: 'healthy',
      hostname: os.hostname(),
      uptime: process.uptime(),
    };
  }
}
