import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LanguageRecommendationModule } from './language-recommendation/language-recommendation.module';

@Module({
  imports: [LanguageRecommendationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
