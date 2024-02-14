import { Controller, Body, Post } from '@nestjs/common';
import { LanguageRecommendationService } from './language-recommendation.service';

@Controller('language-recommendation')
export class LanguageRecommendationController {
  constructor(
    private readonly languageRecommendationService: LanguageRecommendationService,
  ) {}

  @Post('recommend')
  recommendLanguage(@Body() input: any) {
    return this.languageRecommendationService.recommendLanguage(input);
  }
}
