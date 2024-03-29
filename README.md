# React Components Design Library

React Component Library boilerplate is a component library template that leverages React and Github to create a custom template module for developers that want to start building their component libraries the easy way.

<a href="https://github.com/roopaljasnani/react-design-lib/actions/workflows/build.yml">
<img src="https://github.com/roopaljasnani/react-design-lib/actions/workflows/build.yml/badge.svg?branch=develop" />
</a>

<a href="https://github.com/roopaljasnani/react-design-lib/actions/workflows/chromatic.yml">
<img src="https://github.com/roopaljasnani/react-design-lib/actions/workflows/chromatic.yml/badge.svg?branch=develop" />
</a>

## 🚀 Quick Links

- Explore on [StoryBook](https://develop--626158fdc38cd8004809d8fe.chromatic.com)
- Explore the [Chromatic Library](https://www.chromatic.com/library?appId=626158fdc38cd8004809d8fe&branch=develop)
- NPM (_TODO_)

## ✨ Features

### _TypeScript Support_

- The library is designed to make use of strict typing using `TypeScript`.

### _Testing_

- Uses `Jest` and `React Testing Library` for writing unit tests.

  - `yarn test`

### _Linting & Formatting_

- Preconfigured with `ESLint` for code checking and `Prettier` for code beautification.

  - `yarn lint`

  - `yarn format`

### _Build_

- Uses `Rollup` for building the library as a module along with the type files

  - `yarn build`

### _Documentation / Visual Testing_

- Uses `StoryBook` to write custom documentation as well as components documentation and ship the library with accessibility addons to test out the components.

  - `yarn build:storybook`

  - `yarn storybook`

### _NPM Release_

- Support for publishing to `NPM` added.

  - `yarn release`

### _CI / CD_

- build (gh-action) builds the module after lint and tests pass on every pull request and push to main branches.
- chromatic (gh-action) builds and deploys the storybook bundle to chromatic and review visual diffs on user pull request and push to main branches.
