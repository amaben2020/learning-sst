import { Api, StackContext, use } from 'sst/constructs';
import { StorageStack } from './StorageStack';

export function APIStack({ stack }: StackContext) {
  const { table } = use(StorageStack);
  const api = new Api(stack, 'api', {
    defaults: {
      function: {
        bind: [table],
      },
    },
    routes: {
      'GET /': 'packages/functions/src/lambda.handler',
      'GET /test': 'packages/functions/src/test/lambda.handler',
      'POST /notes': 'packages/functions/src/create.main',
    },
  });
  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
