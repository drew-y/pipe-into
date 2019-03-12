# Pipe Into

Simple implementation of the pipe pattern for Typescript.

## Installation

```bash
npm i pipe-into
```

## Usage

```typescript
import { pipe } from "pipe-into";

const five = pipe(30)
    .into(v => v * 3)
    .into(v => v / 9)
    .into(v => v / 2)
    .val;
```

## Building and Testing

```bash
npm test # If no error is thrown, the tests succeeded.
```
