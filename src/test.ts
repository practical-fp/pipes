import { asyncPipe, asyncPipeR, pipe, pipeR } from "./index"

test("pipe should pipe the value though the functions", () => {
    const result = pipe(
        5,
        x => x * 5,
        x => x.toFixed(),
        x => `The result is ${x}`,
        x => x.toUpperCase(),
    )

    expect(result).toBe("THE RESULT IS 25")
})

test("pipeR should pipe the value though the functions", () => {
    const result = pipeR(
        (x: string) => x.toUpperCase(),
        x => `The result is ${x}`,
        (x: number) => x.toFixed(),
        x => x * 5,
        5,
    )

    expect(result).toBe("THE RESULT IS 25")
})

test("asyncPipe pipe should pipe the value though the functions", async () => {
    const result = await asyncPipe(
        5,
        async x => x * 5,
        x => x.toFixed(),
        async x => `The result is ${x}`,
        x => x.toUpperCase(),
    )

    expect(result).toBe("THE RESULT IS 25")
})

test("asyncPipe pipe should pipe the promised value though the functions", async () => {
    const result = await asyncPipe(
        Promise.resolve(5),
        x => x * 5,
        async x => x.toFixed(),
        x => `The result is ${x}`,
        async x => x.toUpperCase(),
    )

    expect(result).toBe("THE RESULT IS 25")
})

test("asyncPipeR pipe should pipe the value though the functions", async () => {
    const result = await asyncPipeR(
        (x: string) => x.toUpperCase(),
        async x => `The result is ${x}`,
        (x: number) => x.toFixed(),
        async x => x * 5,
        5,
    )

    expect(result).toBe("THE RESULT IS 25")
})

test("asyncPipeR pipe should pipe the promised value though the functions", async () => {
    const result = await asyncPipeR(
        async (x: string) => x.toUpperCase(),
        x => `The result is ${x}`,
        async (x: number) => x.toFixed(),
        x => x * 5,
        Promise.resolve(5),
    )

    expect(result).toBe("THE RESULT IS 25")
})
