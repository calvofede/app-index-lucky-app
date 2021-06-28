import BaseModel from '../base.model';
import { Address } from './address.model';
import { User } from './user.model';

export class Profile extends BaseModel {
  static tableName = 'profile';
  userId: number;
  addressId: number;
  name: string;

  static relationMappings = {
    user: {
      relation: BaseModel.BelongsToOneRelation,
      modelClass: User,
      join: {
        from: 'profile.userId',
        to: 'user.id',
      },
    },
    address: {
      relation: BaseModel.BelongsToOneRelation,
      modelClass: Address,
      join: {
        from: 'profile.addressId',
        to: 'address.id',
      },
    },
  };
}
