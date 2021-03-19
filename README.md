# spa-root-config

Simple root configuration or host application, hosting two different Microfrontends.

## Microfrontends

Clone [https://github.com/dgulabs/spa-parcel-angular](https://github.com/dgulabs/spa-parcel-angular) and follow the setup instructions.

Clone [https://github.com/dgulabs/spa-parcel-react](https://github.com/dgulabs/spa-parcel-react) and follow the setup instructions.

## Installation

```shell
yarn
```

## Start

```shell
yarn start
```

## main branch

- Make sure that both Microfrontends are running on their corresponding `main` branch.
- Uses SystemJS to lazy load the Microfrontends.
- Root config application accessible via `http://localhost:9000`
