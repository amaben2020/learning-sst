import { SSTConfig } from 'sst';
import { APIStack } from './stacks/APIStack';
import { StorageStack } from './stacks/StorageStack';

export default {
  config(_input) {
    return {
      name: 'craftify',
      region: 'us-east-1',
    };
  },
  stacks(app) {
    app.stack(APIStack);
    app.stack(StorageStack);
  },
} satisfies SSTConfig;
