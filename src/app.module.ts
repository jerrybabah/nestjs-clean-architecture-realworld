import { Module } from '@nestjs/common';

import { AppController } from '@/interface/controllers';

@Module({
  controllers: [AppController],
})
export class AppModule {}
