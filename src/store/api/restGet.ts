export async function restGET(url: string): Promise<Record<string, unknown>> {
    const response = await fetch(url);
    const data: unknown = await response.json();
    if (typeof data === 'object' && data !== null && !Array.isArray(data)) {
        return data as Record<string, unknown>;
    }

    throw new Error("Geted data is't object json");

}