import { Account } from '../accounts/account';

export class User {
    id: number;
    name: string;
    CPF: string;
    password: number;
    birthDate: Date;
    account: Account;
}
