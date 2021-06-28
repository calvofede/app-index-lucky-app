import BaseModel from '../base.model';
import { City } from './city.model';

export class Address extends BaseModel {
  static tableName = 'address';
  cityId: number;
  street: string;

  static relationMappings = {
    city: {
      relation: BaseModel.BelongsToOneRelation,
      modelClass: City,
      join: {
        from: 'address.cityId',
        to: 'city.id',
      },
    },
  };
}
