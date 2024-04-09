import { Module } from '@nestjs/common';
import { TranslatorController } from './presenters/http/translator.controller';
import { AzureTranslatorService } from './application/azure-translator.service';

@Module({
  controllers: [TranslatorController],
  providers: [AzureTranslatorService]
})
export class TranslationModule {}
