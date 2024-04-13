import { LanguageCodesType } from "../validations/languages_codes.validation";


export interface TranslateInput {
  text?: string;
  srcLanguageCode?: LanguageCodesType;
  targetLanguageCode?: LanguageCodesType;
}