import { Injectable } from '@nestjs/common';
import * as brain from 'brain.js';

import * as trainingData from './../mockup/training-data.json';

@Injectable()
export class LanguageRecommendationService {
  private network = new brain.NeuralNetwork();

  constructor() {
    this.trainModel();
  }

  private trainModel() {
    console.log('trainingData length', trainingData.length);

    this.network.train(trainingData, {
      iterations: 20000,
      errorThresh: 0.005,
    });
  }

  public recommendLanguage(input: any): any {
    const result = this.network.run(input);
    // Find the language with the highest score
    const recommendedLanguage = Object.keys(result).reduce((a, b) =>
      result[a] > result[b] ? a : b,
    );

    // Return a structured object as JSON
    return {
      recommendedLanguage: recommendedLanguage,
      confidence: result[recommendedLanguage], // Assuming you want to include the confidence score
    };
  }
}
