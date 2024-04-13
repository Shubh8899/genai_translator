import { TranslateInput } from './translator-input.interface';
import { TranslationResult } from './translator-result.interface';

export interface Translator {
  translate(input: TranslateInput): Promise<TranslationResult>;
}