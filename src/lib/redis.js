import { Client, Entity, Schema, Repository } from 'redis-om';

const client = new Client();

async function connect() {
  if (!client.isOpen()) {
    await client.open(process.env.REDIS_URL);
  }
}

class Placeholder extends Entity {}

let schema = new Schema(
  Placeholder,
  {
    file: { type: 'number' },
    width: { type: 'number'},
    height: { type: 'number'},
    post_link: { type: 'string' },
    author: { type: 'string' },
    type: { type: 'string' },
  },
  {
    dataStructure: 'JSON'
  }
)

export async function createPlaceholder(data) {
  await connect();

  const repository = client.fetchRepository(schema);
  
  const placeholder = repository.createAndSave(data);
  return placeholder;
}

export async function createIndex() {
  await connect();

  const repository = client.fetchRepository(schema);
  await repository.createIndex()
}

export async function searchPlaceholdersByTypes(type) {
  await connect();

  const repository = client.fetchRepository(schema);

  const placeholders = await repository
    .search()
    .where("type")
    .matches(type)
    .return.all();

  return placeholders
}