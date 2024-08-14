import { query } from '$lib/db';

export async function load({ params, platform }) {
  globalThis.database = platform?.env.database;
  const { user } = params;
  query(`SELECT * FROM users WHERE username = ?`, user);
  return {
    params
  }
}