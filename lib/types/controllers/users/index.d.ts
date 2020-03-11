import { User } from '../../../db/models/user';

export interface GetUserParams {
	id: number;
	email: string;
}

export interface GetUserByIdParams {
	id: number;
}

export interface CreateUserParams {
	fullName: string;
	email: string;
	password: string;
}

export interface AuthenticateUserParams {
	email: string;
	password: string;
}

interface UpdateUserParams {
	email?: string;
	fullName?: string;
	password?: string;
}

interface UpdateUserParams {
	email?: string;
	fullName?: string;
	password?: string;
}

interface UpdateUserParams {
	email?: string;
	fullName?: string;
	password?: string;
}

interface AuthPayload {
	user: User;
	token: string;
}

export type GetAllUsers = () => Promise<User[]>;

export type GetUser = (params: GetUserParams) => Promise<User>;

export type GetUserById = (params: GetUserByIdParams) => Promise<User>;

export type CreateUser = (params: CreateUserParams) => Promise<AuthPayload>;

export type AuthenticateUser = (
	params: AuthenticateUserParams,
) => Promise<AuthPayload>;

export type UpdateUserById = (
	userId: number,
	params: UpdateUserParams,
) => Promise<User>;

export type DeleteUserById = (userId: number) => Promise<User[]>;
