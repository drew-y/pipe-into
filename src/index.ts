
export interface Pipe<T> {
    val: T;
    into<U>(cb: (val: T) => U): Pipe<U>;
}

export const pipe = <T>(val: T): Pipe<T> =>
    ({ val, into: cb => pipe(cb(val)) });
