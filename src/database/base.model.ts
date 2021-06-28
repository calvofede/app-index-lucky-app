import { Model } from 'objection';
import knex from './knex';

Model.knex(knex);

knex.client.pool.on('createSuccess', (eventId, resource) => {
  resource.run('PRAGMA foreign_keys = ON');
});

export default class BaseModel extends Model {
  readonly id: number;
}
