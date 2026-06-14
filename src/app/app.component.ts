import { Component } from '@angular/core';
import { InvestmentCalculationService } from './services/investment-calculation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-investment-calculator';

  constructor(private _investCalcService: InvestmentCalculationService) { }

  get showInvestmentResult() {
    return this._investCalcService.annualData?.length > 0;
  }
}
