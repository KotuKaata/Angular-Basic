import { Component } from '@angular/core';
import { UserInputModel } from '../models/userInputModel';
import { InvestmentCalculationService } from '../services/investment-calculation.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {
  userInputs: UserInputModel = {
    initialInvestmentAmount: 0,
    annualInvestment: 0,
    expectedReturns: 0,
    duration: 0
  };

  constructor(private _investmentService: InvestmentCalculationService) { }

  onCalculate() {
    this._investmentService.calculateInvestmentResults(this.userInputs);
  }
}
