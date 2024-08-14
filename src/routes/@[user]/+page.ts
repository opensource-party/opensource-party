import { query } from '$lib/db';

export async function load({ params, platform }) {
  globalThis.database = platform?.env.database;
  const { user } = params;
  const users = await query(`SELECT * FROM users WHERE username = ?`, user);
  if (users.length === 0) {
    return {
      status: 404,
      error: new Error(`Not found`)
    }
  };
  return {
    params
  }
}