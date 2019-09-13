import { User } from '../users/user';
import { Account } from '../accounts/account';

export class Investment {
    invertmentType: string;
    user: User;
    accountUser: Account;
    value: number;
}
