# Davjhan-core

This package contains reused code for projects under [davjhan-games](www.davjhan.com).

New game projects should use this -> [davjhan-sveltekit-template](https://github.com/davjhan/davjhan-sveltekit-template)
and use yalc to link to this package.

## Setup
This will use [yalc](https://github.com/wclr/yalc) to wire dependencies locally.

1. Publish this package to the computer's global yalc directory. (`~/.yalc`)
```
yalc publish
```
2. cd to the project that you want to use this on, and make a yalc link.
```
yalc link davjhan-core
```
Note, we want to do `yalc link` not `yalc add` because we want yalc to create a symlink to the consumer's local.
yalc store instead of the global store. This allows hot reload to work because it can pick up changes automatically.
3. Add a dependency in the consumer's `package.json` so that the symlink from `node_modules/davjhan-core` to `.yalc/davjhan-core`
   is created on npm install.
```
  "dependencies": {
    "davjhan-core": "file:.yalc/davjhan-core"
  }
```

# Usage
There are several things you might want to use in this package:

### Tailwind
If you want to use the tailwind.config.cjs from here, in your tailwind settings (usually in postcss.config.js) set

```
tailwindcss({
	config: 'node_modules/davjhan-ui/tailwind.config.cjs'
}),
```

### style.css

If you are using Tailwind you probably also want to use the common `style.css`. near the root of the consumer app, do

```
import 'davjhan-core/src/style.css'
```

### Components

Components should be barrelled in this package's `index.js` so they can be imported like so:

```
import { Navbar } from 'davjhan-core'
```

## Pushing Changes to all consumers

Say you made a change to `style.css`. To push this change to all projects in your computer,

do

```
yalc push
```

Yalc keeps track of all consumers who did `yalc link` or `yalc add` and will update them accordingly.


To auto push on changes

```
npm run watch
```