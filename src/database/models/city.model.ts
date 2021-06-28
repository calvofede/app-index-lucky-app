import BaseModel from '../base.model';

export class City extends BaseModel {
  static tableName = 'city';
  countryId: number;
  name: string;

  static relationMappings = {
    country: {
      relation: BaseModel.BelongsToOneRelation,
      modelClass: City,
      join: {
        from: 'city.countryId',
        to: 'country.id',
      },
    },
  };
}
