# Vue 3 Plugin Error - v-for

## Description

Test-component plugin throws warning `Invalid VNode type: Symbol(Fragment)`, and will **not** render the `v-for` part of the markup.

If I remove the `v-for` part of the template the warning disapears.

## Similar Issues

Users have reported similar problems with use of 'slot' in components...

[Plugins with vue as a dependency do not work](https://github.com/vuejs/vue-next/issues/1870)

| ...it works fine using Yarn, but not with NPM... This is somewhat expected because a plugin should never list vue as its direct dependency, because it must always use whatever version of Vue that the consuming application is using. A plugin should list vue as a dev/peer dependency and externalize it (if there is a build step).

Included example does just this. The *test-component* only uses vue as a dev and peer dependency

[[Vue 3] Invalid VNode Symbol(Fragment) when using an external component with a slot](<https://forum.vuejs.org/t/vue-3-invalid-vnode-symbol-fragment-when-using-an-external-component-with-a-slot/105448>)

Interestingly a user in this thread stated that their issue went away, but they are using `yarn`.

## How-to Reproduce

1. clone this repo
2. navigate to the `test-component` directory and use `npm install`
3. navigate to the `app` directory and use `npm install`
4. start the application from the `app` directory with `npm run start`
5. navigate to `localhost:8080` from a web browser and the `Invalid VNode type: Symbol(Fragment)` warning will show up in the console
