import { Module } from '@nestjs/common';
import { LanguageRecommendationService } from './language-recommendation.service';
import { LanguageRecommendationController } from './language-recommendation.controller';

@Module({
  providers: [LanguageRecommendationService],
  controllers: [LanguageRecommendationController],
})
export class LanguageRecommendationModule {}
