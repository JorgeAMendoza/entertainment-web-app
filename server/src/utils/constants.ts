import { join } from 'path';
import { sync } from 'pkg-up';

export const SERVER_WORKSPACE_PKG_JSON_PATH = sync();
if (!SERVER_WORKSPACE_PKG_JSON_PATH)
  throw new Error('package.json path could not be found');
export const ROOT_PKG_JSON_PATH = join(
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  SERVER_WORKSPACE_PKG_JSON_PATH,
  '..',
  '..'
);

const rootBasedPath = (name: string): string => {
  return join(ROOT_PKG_JSON_PATH, name);
};

export const CLIENT_ROOT_FOLDER_PATH = rootBasedPath('client');
// for serving images
export const STATIC_ROOT_FOLDER_PATH = rootBasedPath('static');
export const GRAPHQL_SCHEMA_PATH = rootBasedPath('schema.graphql');
export const PORT = process.env.PORT || 4000;

export const MONGO_URL =
  process.env.NODE_ENV === 'test'
    ? process.env.MONGO_URL_TEST
    : process.env.MONGO_URL;
