export type CreateUser = {
  name: string;
  email: string;
  password: string;
};

export type UserSave = {
  name: string;
  email: string;
  id?: string;
  password?: string;
  active?: boolean;
};

export interface IUserRepository {
  create(data: CreateUser): Promise<UserSave>;
  findByEmail(email: string): Promise<UserSave | null>;
  listAll(): Promise<UserSave[]>;
}
