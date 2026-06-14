import { Component, Input } from '@angular/core';
import { InvestmentCalculationService } from '../services/investment-calculation.service';

@Component({
  selector: 'app-investment-result',
  templateUrl: './investment-result.component.html',
  styleUrls: ['./investment-result.component.css']
})
export class InvestmentResultComponent {
  @Input() IsShowInvestmentResumt: boolean = false;

  constructor(private _investmentService: InvestmentCalculationService) { 
  }

  get displayDefaultText() {
    return !this.IsShowInvestmentResumt;
  }

  get investmentResult() {
    return this._investmentService.annualData;
  }
}
