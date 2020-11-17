# `@practical-fp/pipes`
A Typescript library for piping values through functions.

## Installation
```bash
$ npm install @practical-fp/pipes
```
[![NPM](https://nodei.co/npm/@practical-fp/pipes.png)](https://npmjs.org/package/@practical-fp/pipes)

## Examples
```typescript
import {pipe} from "@practical-fp/pipes"

const result = pipe(
    5,
    number => number * 5,
    number => number.toFixed(),
    number => `The result is ${number}`,
    result => result.toUpperCase(),
)
```

```typescript
import {asyncPipe} from "@practical-fp/pipes"

const title = await asyncPipe(
    "https://jsonplaceholder.typicode.com/todos/1",
    url => fetch(url),
    response => response.json(),
    json => json.title,
)
```

```typescript
import {pipeR} from "@practical-fp/pipes"

const result = pipeR(
    (result: string) => result.toUpperCase(),
    (number: string) => `The result is ${number}`,
    (number: number) => number.toFixed(),
    (number: number) => number * 5,
    5,
)
```

```typescript
import {asyncPipeR} from "@practical-fp/pipes"

const title = await asyncPipeR(
    (json: any) => json.title,
    (response: Response) => response.json(),
    (url: string) => fetch(url),
    "https://jsonplaceholder.typicode.com/todos/1",
)
```