import { Account } from '../models/accounts/account';

export class InvestmentRequest {
    investmentName: string;
    value: number;
    minimumValue: number;
    account: Account;
}
