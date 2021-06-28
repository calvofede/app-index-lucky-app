import BaseModel from '../base.model';

export class Country extends BaseModel {
  static tableName = 'country';
  name: string;
}
