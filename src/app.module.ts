import { Module } from '@nestjs/common';

import * as controllers from '@/interface/controllers';

@Module({
  controllers: [
    ...Object.values(controllers),
  ],
})
export class AppModule {}
