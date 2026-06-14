import { Injectable } from '@angular/core';

import { UserInputModel, InvestmentResultModel } from '../models/userInputModel';

@Injectable({
  providedIn: 'root'
})
export class InvestmentCalculationService {
  public annualData: InvestmentResultModel[] = [];

  constructor() { }

  calculateInvestmentResults(userInput: UserInputModel) {
    this.annualData = [];

    let investmentValue = userInput.initialInvestmentAmount;
    for (let i = 0; i < userInput.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (userInput.expectedReturns / 100);
      investmentValue += interestEarnedInYear + userInput.annualInvestment;
      const totalInterest =
        investmentValue - userInput.annualInvestment * year - userInput.initialInvestmentAmount;

      this.annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: userInput.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: userInput.initialInvestmentAmount + userInput.annualInvestment * year,
      });
    }
  }
}
