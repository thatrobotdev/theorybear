theorybear has now migrated to a new website codebase. The new site is password protected to protect the students which use it, but you can access the old, non-protected site at [https://old.theorybear.org](https://old.theorybear.org). If you are a Peak to Peak Charter School student, please check out the new website at https://theorybear.org!

---

# theorybear

<img src="static/img/logo.svg" alt="A bear emoji" height="100">

A fun, supplemental guide to music theory education.

<img src="static/img/docusaurus.svg" alt="A bear emoji" height="50">

*This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.*

---

## Installation

```console
$ yarn
```

## Local Development

```console
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```console
$ USE_SSH=true yarn deploy
```

Not using SSH:

```console
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
