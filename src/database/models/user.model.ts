import BaseModel from '../base.model';

export class User extends BaseModel {
  static tableName = 'user';
  username: string;
  password: string;
}
