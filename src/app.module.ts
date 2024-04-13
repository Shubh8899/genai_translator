import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TranslationModule } from './translation/translation.module';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard } from '@nestjs/throttler';
import { env } from './configs/env.config';
import { throttlerConfig } from './configs/throttler.config';

@Module({
  imports: [throttlerConfig, TranslationModule.register(env.AI_SERVICE)],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
