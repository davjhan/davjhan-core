# Davjhan-core

This is the core module for davjhan-games.

davjhan games should create their own sveltekit projects, then use the components here for common styling and
components.

## Setup

```
yalc add davjhan-core
```

If you want to use the tailwind.config.cjs from here, in your tailwind settings (usually in postcss.config.js) set

```
tailwindcss({
	config: 'node_modules/davjhan-ui/tailwind.config.cjs'
}),
```

## Pushing Changes

To push changes to consumers, do

```
yalc push
```

To auto push on changes

```
npm run watch
```

To run storybook:

```
npm run storybook
```