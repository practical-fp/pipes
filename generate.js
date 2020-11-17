const fs = require("fs")

function range(start, end) {
    const result = []
    for (let i = start; i < end; i++) {
        result.push(i)
    }
    return result
}

function genTypeArgs(fnCount) {
    const result = []
    result.push("T")
    for (const i of range(1, fnCount)) {
        result.push(`T${i}`)
    }
    result.push("Ret")
    return result
}

function genFnType(argType, retType) {
    return `Fn<${argType}, ${retType}>`
}

function genAsyncFnType(argType, retType) {
    return `AsyncFn<${argType}, ${retType}>`
}

function getFnTypes(fnCount, genFnType) {
    const typeArgs = genTypeArgs(fnCount)
    const result = []
    for (const i of range(0, typeArgs.length - 1)) {
        result.push(genFnType(typeArgs[i], typeArgs[i + 1]))
    }
    return result
}

function pipeOverload(fnCount) {
    const typeArgs = genTypeArgs(fnCount)
    const fnArgs = getFnTypes(fnCount, genFnType).map((type, index) => `fn${index}: ${type}`)
    return `
        export function pipe<${typeArgs.join(", ")}>(
            value: ${typeArgs[0]}, 
            ${fnArgs.join(", ",)}
        ): ${typeArgs.reverse()[0]}
    `
}

function pipeROverload(fnCount) {
    const typeArgs = genTypeArgs(fnCount)
    const fnArgs = getFnTypes(fnCount, genFnType)
        .reverse()
        .map((type, index) => `fn${index}: ${type}`)
    return `
        export function pipeR<${typeArgs.join(", ")}>(
            ${fnArgs.join(", ")}, 
            value: ${typeArgs[0]}
        ): ${typeArgs.reverse()[0]}
    `
}

function asyncPipeOverload(fnCount) {
    const typeArgs = genTypeArgs(fnCount)
    const fnArgs = getFnTypes(fnCount, genAsyncFnType).map((type, index) => `fn${index}: ${type}`)
    return `
        export function asyncPipe<${typeArgs.join(", ")}>(
            value: ${typeArgs[0]} | PromiseLike<${typeArgs[0]}>, 
            ${fnArgs.join(", ")}
        ): Promise<${typeArgs.reverse()[0]}>
    `
}

function asyncPipeROverload(count) {
    const typeArgs = genTypeArgs(count)
    const fnArgs = getFnTypes(count, genAsyncFnType)
        .reverse()
        .map((type, index) => `fn${index}: ${type}`)
    return `
        export function asyncPipeR<${typeArgs.join(", ")}>(
            ${fnArgs.join(", ")}, 
            value: ${typeArgs[0]} | PromiseLike<${typeArgs[0]}>
        ): Promise<${typeArgs.reverse()[0]}>
    `
}

function genCode(overloadCount) {
    return `
        type Fn<T, Ret> = (value: T) => Ret
        
        type AsyncFn<T, Ret> = (value: T) => Ret | PromiseLike<Ret>
        
        ${range(1, overloadCount + 1).map(pipeOverload).join("\n")}
        export function pipe(...args: any[]): unknown {
            let value = args[0]
            for (const fn of args.slice(1)) {
                value = fn(value)
            }
            return value
        }
        
        ${range(1, overloadCount + 1).map(pipeROverload).join("\n")}
        export function pipeR(...args: any[]): unknown {
            // @ts-ignore
            return pipe(...args.reverse())
        }
        
        ${range(1, overloadCount + 1).map(asyncPipeOverload).join("\n")}
        export function asyncPipe(...args: any[]): Promise<unknown> {
            const value = args[0]
            let promise = Promise.resolve(value)
            for (const fn of args.slice(1)) {
                promise = promise.then(fn)
            }
            return promise
        }
        
        ${range(1, overloadCount + 1).map(asyncPipeROverload).join("\n")}
        export function asyncPipeR(...args: any[]): Promise<unknown> {
            // @ts-ignore
            return asyncPipe(...args.reverse())
        }
    `
}

fs.writeFileSync("src/index.ts", genCode(50))
