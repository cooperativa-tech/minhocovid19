# MinhoCovid19

The source code behind the most amazing MinhoCovid19 website.

This is a Next.js project built and deployed on Netlify.

## Requirements

* Node 12
* yarn
* asdf (optional, but recommended)

## Development

To get started run `bin/setup`. This script sets up the `node` environment with `asdf` and install all dependencies.

Before starting your adventure, you need an API key for Airtable. You can get those from our Keybase or a Cooperativa developer. Add that variable to the `.envrc` file. That file is not checked by `git` and is created during the `bin/setup` script.

The environment variables are loaded in our `bin/scripts`. You can use something like `direnv` for that but it's not needed. Our scripts handle loading the `.envrc` file always.

After that, just run `bin/server` and go for it!

A friendly reminder that we have `eslint` and `stylelint` set up for linting and styling both Javascript and CSS code respectively. Please, be respectful of them :)

## Testing

We don't have testing for this website, but we run static analysis on our code, as we mentioned already. Just do it with `bin/lint`.

The linters are also ran by our Github Action.

## Production

The website is built deployed by Netlify. If you want to replicate a production environment on your local machine just run `bin/build` and serve the `out` directory with your favorite local webserver. We recommend installing `serve` globally with `yarn` and using `serve out` to run a local server.

## Contributing

Feel free to contribute however you please. Be respectful and always remind our main motto:

> Want? Do it :sunglasses:

If you need an API key reach out to us.
