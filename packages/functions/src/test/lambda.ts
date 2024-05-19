import { ApiHandler } from 'sst/node/api';

export const handler = ApiHandler(async (_evt) => {
  return {
    body: 'Yeah, test ok',
    statusCode: 200,
  };
});
