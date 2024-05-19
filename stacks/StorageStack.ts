import { Bucket, StackContext, Table } from 'sst/constructs';

export function StorageStack({ stack }: StackContext) {
  // Create an S3 bucket amd DynamoDB Table
  const bucket = new Bucket(stack, 'Uploads');
  const table = new Table(stack, 'Notes', {
    fields: {
      userId: 'string',
      noteId: 'string',
      name: 'string',
      age: 'number',
      createdAt: 'binary',
    },
    primaryIndex: { partitionKey: 'userId', sortKey: 'noteId' },
  });

  return {
    table,
    bucket,
  };
}
