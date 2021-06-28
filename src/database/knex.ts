import Knex = require('knex');
import knexConfig from '../../knexfile';

export default Knex({
  ...knexConfig,
});
