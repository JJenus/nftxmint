import { Account } from "./Account";

export interface IUser {
	id: string;
	name: string;
	email: string;
	phone: string;
	imgUrl: string;
	address: string;
	city: string;
	country: string;
	dob: string;
	verified: boolean;
	emailVerified: boolean;
	userType: string;
	account: Account;
	createdAt: string;
}
