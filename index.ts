type Fn<T, Ret> = (value: T) => Ret
type Fn1<T, Ret> = [Fn<T, Ret>]
type Fn2<T, T1, Ret> = [Fn<T, T1>, Fn<T1, Ret>]
type Fn3<T, T1, T2, Ret> = [Fn<T, T1>, Fn<T1, T2>, Fn<T2, Ret>]
type Fn4<T, T1, T2, T3, Ret> = [Fn<T, T1>, Fn<T1, T2>, Fn<T2, T3>, Fn<T3, Ret>]
type Fn5<T, T1, T2, T3, T4, Ret> = [Fn<T, T1>, Fn<T1, T2>, Fn<T2, T3>, Fn<T3, T4>, Fn<T4, Ret>]
type Fn6<T, T1, T2, T3, T4, T5, Ret> = [
    Fn<T, T1>,
    Fn<T1, T2>,
    Fn<T2, T3>,
    Fn<T3, T4>,
    Fn<T4, T5>,
    Fn<T5, Ret>,
]
type Fn7<T, T1, T2, T3, T4, T5, T6, Ret> = [
    Fn<T, T1>,
    Fn<T1, T2>,
    Fn<T2, T3>,
    Fn<T3, T4>,
    Fn<T4, T5>,
    Fn<T5, T6>,
    Fn<T6, Ret>,
]
type Fn8<T, T1, T2, T3, T4, T5, T6, T7, Ret> = [
    Fn<T, T1>,
    Fn<T1, T2>,
    Fn<T2, T3>,
    Fn<T3, T4>,
    Fn<T4, T5>,
    Fn<T5, T6>,
    Fn<T6, T7>,
    Fn<T7, Ret>,
]
type Fn9<T, T1, T2, T3, T4, T5, T6, T7, T8, Ret> = [
    Fn<T, T1>,
    Fn<T1, T2>,
    Fn<T2, T3>,
    Fn<T3, T4>,
    Fn<T4, T5>,
    Fn<T5, T6>,
    Fn<T6, T7>,
    Fn<T7, T8>,
    Fn<T8, Ret>,
]
type Fn10<T, T1, T2, T3, T4, T5, T6, T7, T8, T9, Ret> = [
    Fn<T, T1>,
    Fn<T1, T2>,
    Fn<T2, T3>,
    Fn<T3, T4>,
    Fn<T4, T5>,
    Fn<T5, T6>,
    Fn<T6, T7>,
    Fn<T7, T8>,
    Fn<T8, T9>,
    Fn<T9, Ret>,
]
type Fn11<T, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, Ret> = [
    Fn<T, T1>,
    Fn<T1, T2>,
    Fn<T2, T3>,
    Fn<T3, T4>,
    Fn<T4, T5>,
    Fn<T5, T6>,
    Fn<T6, T7>,
    Fn<T7, T8>,
    Fn<T8, T9>,
    Fn<T9, T10>,
    Fn<T10, Ret>,
]
type Fn12<T, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, Ret> = [
    Fn<T, T1>,
    Fn<T1, T2>,
    Fn<T2, T3>,
    Fn<T3, T4>,
    Fn<T4, T5>,
    Fn<T5, T6>,
    Fn<T6, T7>,
    Fn<T7, T8>,
    Fn<T8, T9>,
    Fn<T9, T10>,
    Fn<T10, T11>,
    Fn<T11, Ret>,
]

export function pipe<T, Ret>(value: T, ...fns: Fn1<T, Ret>): Ret
export function pipe<T, T1, Ret>(value: T, ...fns: Fn2<T, T1, Ret>): Ret
export function pipe<T, T1, T2, Ret>(value: T, ...fns: Fn3<T, T1, T2, Ret>): Ret
export function pipe<T, T1, T2, T3, Ret>(value: T, ...fns: Fn4<T, T1, T2, T3, Ret>): Ret
export function pipe<T, T1, T2, T3, T4, Ret>(value: T, ...fns: Fn5<T, T1, T2, T3, T4, Ret>): Ret
export function pipe<T, T1, T2, T3, T4, T5, Ret>(
    value: T,
    ...fns: Fn6<T, T1, T2, T3, T4, T5, Ret>
): Ret
export function pipe<T, T1, T2, T3, T4, T5, T6, Ret>(
    value: T,
    ...fns: Fn7<T, T1, T2, T3, T4, T5, T6, Ret>
): Ret
export function pipe<T, T1, T2, T3, T4, T5, T6, T7, Ret>(
    value: T,
    ...fns: Fn8<T, T1, T2, T3, T4, T5, T6, T7, Ret>
): Ret
export function pipe<T, T1, T2, T3, T4, T5, T6, T7, T8, Ret>(
    value: T,
    ...fns: Fn9<T, T1, T2, T3, T4, T5, T6, T7, T8, Ret>
): Ret
export function pipe<T, T1, T2, T3, T4, T5, T6, T7, T8, T9, Ret>(
    value: T,
    ...fns: Fn10<T, T1, T2, T3, T4, T5, T6, T7, T8, T9, Ret>
): Ret
export function pipe<T, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, Ret>(
    value: T,
    ...fns: Fn11<T, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, Ret>
): Ret
export function pipe<T, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, Ret>(
    value: T,
    ...fns: Fn12<T, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, Ret>
): Ret
export function pipe(value: unknown, ...fns: Fn<unknown, unknown>[]): unknown {
    for (const fn of fns) {
        value = fn(value)
    }
    return value
}

type AsyncFn<T, Ret> = (value: T) => Ret | PromiseLike<Ret>
type AsyncFn1<T, Ret> = [AsyncFn<T, Ret>]
type AsyncFn2<T, T1, Ret> = [AsyncFn<T, T1>, AsyncFn<T1, Ret>]
type AsyncFn3<T, T1, T2, Ret> = [AsyncFn<T, T1>, AsyncFn<T1, T2>, AsyncFn<T2, Ret>]
type AsyncFn4<T, T1, T2, T3, Ret> = [
    AsyncFn<T, T1>,
    AsyncFn<T1, T2>,
    AsyncFn<T2, T3>,
    AsyncFn<T3, Ret>,
]
type AsyncFn5<T, T1, T2, T3, T4, Ret> = [
    AsyncFn<T, T1>,
    AsyncFn<T1, T2>,
    AsyncFn<T2, T3>,
    AsyncFn<T3, T4>,
    AsyncFn<T4, Ret>,
]
type AsyncFn6<T, T1, T2, T3, T4, T5, Ret> = [
    AsyncFn<T, T1>,
    AsyncFn<T1, T2>,
    AsyncFn<T2, T3>,
    AsyncFn<T3, T4>,
    AsyncFn<T4, T5>,
    AsyncFn<T5, Ret>,
]
type AsyncFn7<T, T1, T2, T3, T4, T5, T6, Ret> = [
    AsyncFn<T, T1>,
    AsyncFn<T1, T2>,
    AsyncFn<T2, T3>,
    AsyncFn<T3, T4>,
    AsyncFn<T4, T5>,
    AsyncFn<T5, T6>,
    AsyncFn<T6, Ret>,
]
type AsyncFn8<T, T1, T2, T3, T4, T5, T6, T7, Ret> = [
    AsyncFn<T, T1>,
    AsyncFn<T1, T2>,
    AsyncFn<T2, T3>,
    AsyncFn<T3, T4>,
    AsyncFn<T4, T5>,
    AsyncFn<T5, T6>,
    AsyncFn<T6, T7>,
    AsyncFn<T7, Ret>,
]
type AsyncFn9<T, T1, T2, T3, T4, T5, T6, T7, T8, Ret> = [
    AsyncFn<T, T1>,
    AsyncFn<T1, T2>,
    AsyncFn<T2, T3>,
    AsyncFn<T3, T4>,
    AsyncFn<T4, T5>,
    AsyncFn<T5, T6>,
    AsyncFn<T6, T7>,
    AsyncFn<T7, T8>,
    AsyncFn<T8, Ret>,
]
type AsyncFn10<T, T1, T2, T3, T4, T5, T6, T7, T8, T9, Ret> = [
    AsyncFn<T, T1>,
    AsyncFn<T1, T2>,
    AsyncFn<T2, T3>,
    AsyncFn<T3, T4>,
    AsyncFn<T4, T5>,
    AsyncFn<T5, T6>,
    AsyncFn<T6, T7>,
    AsyncFn<T7, T8>,
    AsyncFn<T8, T9>,
    AsyncFn<T9, Ret>,
]
type AsyncFn11<T, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, Ret> = [
    AsyncFn<T, T1>,
    AsyncFn<T1, T2>,
    AsyncFn<T2, T3>,
    AsyncFn<T3, T4>,
    AsyncFn<T4, T5>,
    AsyncFn<T5, T6>,
    AsyncFn<T6, T7>,
    AsyncFn<T7, T8>,
    AsyncFn<T8, T9>,
    AsyncFn<T9, T10>,
    AsyncFn<T10, Ret>,
]
type AsyncFn12<T, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, Ret> = [
    AsyncFn<T, T1>,
    AsyncFn<T1, T2>,
    AsyncFn<T2, T3>,
    AsyncFn<T3, T4>,
    AsyncFn<T4, T5>,
    AsyncFn<T5, T6>,
    AsyncFn<T6, T7>,
    AsyncFn<T7, T8>,
    AsyncFn<T8, T9>,
    AsyncFn<T9, T10>,
    AsyncFn<T10, T11>,
    AsyncFn<T11, Ret>,
]

export function asyncPipe<T, Ret>(value: T | PromiseLike<T>, ...fns: AsyncFn1<T, Ret>): Promise<Ret>
export function asyncPipe<T, T1, Ret>(
    value: T | PromiseLike<T>,
    ...fns: AsyncFn2<T, T1, Ret>
): Promise<Ret>
export function asyncPipe<T, T1, T2, Ret>(
    value: T | PromiseLike<T>,
    ...fns: AsyncFn3<T, T1, T2, Ret>
): Promise<Ret>
export function asyncPipe<T, T1, T2, T3, Ret>(
    value: T | PromiseLike<T>,
    ...fns: AsyncFn4<T, T1, T2, T3, Ret>
): Promise<Ret>
export function asyncPipe<T, T1, T2, T3, T4, Ret>(
    value: T | PromiseLike<T>,
    ...fns: AsyncFn5<T, T1, T2, T3, T4, Ret>
): Promise<Ret>
export function asyncPipe<T, T1, T2, T3, T4, T5, Ret>(
    value: T | PromiseLike<T>,
    ...fns: AsyncFn6<T, T1, T2, T3, T4, T5, Ret>
): Promise<Ret>
export function asyncPipe<T, T1, T2, T3, T4, T5, T6, Ret>(
    value: T | PromiseLike<T>,
    ...fns: AsyncFn7<T, T1, T2, T3, T4, T5, T6, Ret>
): Promise<Ret>
export function asyncPipe<T, T1, T2, T3, T4, T5, T6, T7, Ret>(
    value: T | PromiseLike<T>,
    ...fns: AsyncFn8<T, T1, T2, T3, T4, T5, T6, T7, Ret>
): Promise<Ret>
export function asyncPipe<T, T1, T2, T3, T4, T5, T6, T7, T8, Ret>(
    value: T | PromiseLike<T>,
    ...fns: AsyncFn9<T, T1, T2, T3, T4, T5, T6, T7, T8, Ret>
): Promise<Ret>
export function asyncPipe<T, T1, T2, T3, T4, T5, T6, T7, T8, T9, Ret>(
    value: T | PromiseLike<T>,
    ...fns: AsyncFn10<T, T1, T2, T3, T4, T5, T6, T7, T8, T9, Ret>
): Promise<Ret>
export function asyncPipe<T, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, Ret>(
    value: T | PromiseLike<T>,
    ...fns: AsyncFn11<T, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, Ret>
): Promise<Ret>
export function asyncPipe<T, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, Ret>(
    value: T | PromiseLike<T>,
    ...fns: AsyncFn12<T, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, Ret>
): Promise<Ret>
export function asyncPipe(value: unknown, ...fns: AsyncFn<unknown, unknown>[]): Promise<unknown> {
    let promise = Promise.resolve(value)
    for (const fn of fns) {
        promise = promise.then(fn)
    }
    return promise
}
