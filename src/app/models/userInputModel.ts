export interface UserInputModel {
    initialInvestmentAmount: number,
    annualInvestment: number,
    expectedReturns: number,
    duration: number
}

export interface InvestmentResultModel {
    annualInvestment: number,
    interest: number,
    totalAmountInvested: number,
    totalInterest: number,
    valueEndOfYear: number,
    year: number
}
