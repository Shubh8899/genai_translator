import { ZOD_LANGUAGE_CODES } from 'src/translation/application/validations/languages_codes.validation';
import { z } from 'zod';

export const translateTextSchema = z
  .object({
    text: z.string({
      required_error: 'Text is required',
    }),
    srcLanguageCode: ZOD_LANGUAGE_CODES,
    targetLanguageCode: ZOD_LANGUAGE_CODES,
  })
  .required();

export type TranslateTextDto = z.infer<typeof translateTextSchema>;