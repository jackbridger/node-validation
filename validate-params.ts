export default function validateRequest(param: any, paramName: string, expectedType: string) {
    if (!param) {
        throw new Error(`${paramName} should be provided.`);
    }
    if (typeof param !== expectedType) {
        throw new Error(`${paramName} should be a ${expectedType}, but received ${typeof param}`);
    }
}