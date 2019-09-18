import { Account } from '../accounts/account';

export class User {
    id: number;
    cpf: string;
    name: string;
    password: number;
    birthDate: Date;
    account: Account;
}
