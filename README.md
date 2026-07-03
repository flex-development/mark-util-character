# mark-util-character

[![github release](https://img.shields.io/github/v/release/flex-development/mark-util-character.svg?include_prereleases\&sort=semver)](https://github.com/flex-development/mark-util-character/releases/latest)
[![npm](https://img.shields.io/npm/v/@flex-development/mark-util-character.svg)](https://npmjs.com/package/@flex-development/mark-util-character)
[![npm downloads](https://img.shields.io/npm/dm/@flex-development/mark-util-character.svg)](https://www.npmcharts.com/compare/@flex-development/mark-util-character?interval=30)
[![install size](https://packagephobia.now.sh/badge?p=@flex-development/mark-util-character)](https://packagephobia.now.sh/result?p=@flex-development/mark-util-character)
[![minified bundle size](https://badgen.net/bundlephobia/min/@flex-development/mark-util-character?cache)](https://bundlephobia.com/package/@flex-development/mark-util-character)
[![tree shaking suppport](https://badgen.net/bundlephobia/tree-shaking/@flex-development/mark-util-character)](https://bundlephobia.com/package/@flex-development/mark-util-character)
[![codecov](https://codecov.io/github/flex-development/mark-util-character/graph/badge.svg?token=dhwXKZrcy9)](https://codecov.io/github/flex-development/mark-util-character)
[![module type: esm](https://img.shields.io/badge/module%20type-esm-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![license](https://img.shields.io/github/license/flex-development/mark-util-character.svg)](LICENSE.md)
[![conventional commits](https://img.shields.io/badge/-conventional%20commits-fe5196?logo=conventional-commits\&logoColor=ffffff)](https://conventionalcommits.org)
[![typescript](https://img.shields.io/badge/-typescript-3178c6?logo=typescript\&logoColor=ffffff)](https://typescriptlang.org)
[![vitest](https://img.shields.io/badge/-vitest-6e9f18?style=flat\&logo=vitest\&logoColor=ffffff)](https://vitest.dev)
[![yarn](https://img.shields.io/badge/-yarn-2c8ebb?style=flat\&logo=yarn\&logoColor=ffffff)](https://yarnpkg.com)

[`mark`][mark] utility to handle character codes.

## Contents

- [What is this?](#what-is-this)
- [When should I use this?](#when-should-i-use-this)
- [Install](#install)
- [Use](#use)
- [API](#api)
- [Types](#types)
- [Project](#project)
  - [Version](#version)
  - [Contribute](#contribute)
  - [Sponsor](#sponsor)
- [Related](#related)

## What is this?

This package exposes algorithms for checking whether character codes match certain groups.

## When should I use this?

This package is useful when creating your own your own [mark][] extensions and utilities.

## Install

This package is [ESM only][esm].

In Node.js with [yarn][]:

```sh
yarn add @flex-development/mark-util-character
```

<blockquote>
  <small>
    See <a href='https://yarnpkg.com/protocol/git'>Git - Protocols | Yarn</a>
    &nbsp;for details regarding installing from Git.
  </small>
</blockquote>

In Deno with [`esm.sh`][esmsh]:

```ts
import { asciiAlpha } from 'https://esm.sh/@flex-development/mark-util-character'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import { asciiAlpha } from 'https://esm.sh/@flex-development/mark-util-character'
</script>
```

## Use

**TODO**: use

## API

**TODO**: api

## Types

This package is fully typed with [TypeScript][].

## Project

### Version

mark-util-character adheres to [semver][].

### Contribute

See [`CONTRIBUTING.md`](CONTRIBUTING.md).

This project has a [code of conduct](CODE_OF_CONDUCT.md).
By interacting with this repository, organization, or community you agree to abide by its terms.

### Sponsor

Small primitives power larger systems.
Support long-term stability by sponsoring Flex Development.

## Related

- [`@flex-development/mark`][mark] — the specification
- [`@flex-development/mark-compiler`][mark-compiler] — finite state machine event compiler
- [`@flex-development/mark-parser`][mark-parser] — finite state machine parser

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[mark-compiler]: https://github.com/flex-development/mark-compiler

[mark-parser]: https://github.com/flex-development/mark-tokenizer

[mark]: https://github.com/flex-development/mark

[semver]: https://semver.org

[typescript]: https://www.typescriptlang.org

[yarn]: https://yarnpkg.com
