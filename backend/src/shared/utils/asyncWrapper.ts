
export function asyncWrapper<T extends (...args: any[]) => Promise<any>>(fn: T) {
    return (req: any, res: any, next: any) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
}
