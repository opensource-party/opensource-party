export const query = async (query: string, ...params: (string | number)[]): Promise<object[]> =>
	(
		(await globalThis.database
			.prepare(query)
			.bind(...params)
			.run()) ?? { results: [] }
	).results ?? [];

export const datetime = (date: Date) => date.toISOString().slice(0, 19).replace('T', ' ');