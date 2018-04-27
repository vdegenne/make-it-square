# make-it-square

Just a module that flatten objects with circular references.

## Usage

```javascript
import {makeItSquare} from 'make-it-square';

const o = {};
o.o = o; // <- circular

console.log(JSON.stringify(makeItSquare(o))); // <- no problem
```

## Installation

```bash
yarn add make-it-square
```
