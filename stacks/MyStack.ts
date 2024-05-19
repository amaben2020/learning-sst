import { Api, StackContext } from 'sst/constructs';

export function API({ stack }: StackContext) {
  const api = new Api(stack, 'api', {
    routes: {
      'GET /': 'packages/functions/src/lambda.handler',
      'GET /test': 'packages/functions/src/test/lambda.handler',
    },
  });
  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
