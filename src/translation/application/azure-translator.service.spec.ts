import { Test, TestingModule } from '@nestjs/testing';
import { AzureTranslatorService } from './azure-translator.service';

describe('AzureTranslatorService', () => {
  let service: AzureTranslatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AzureTranslatorService],
    }).compile();

    service = module.get<AzureTranslatorService>(AzureTranslatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
