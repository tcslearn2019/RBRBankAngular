import { Account } from '../accounts/account';

export class User {
    id: number;
    name: string;
    cpf: string;
    password: number;
    birthDate: Date;
    account: Account;
}
