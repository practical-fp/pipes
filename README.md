# `@practical-fp/pipes`
A Typescript library for piping values through functions.

## Installation
```bash
$ npm install @practical-fp/pipes
```
[![NPM](https://nodei.co/npm/@practical-fp/pipes)](https://npmjs.org/package/@practical-fp/pipes)

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