<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-brightgreen.svg?cacheSeconds=2592000" />
  <img alt="Node" src="https://img.shields.io/badge/node-%3E%3D%2018.17-brightgreen" />
  <a href="https://github.com/wowblvck/cv/actions/workflows/production.yml">
    <img alt="Production" src="https://github.com/wowblvck/cv/actions/workflows/production.yml/badge.svg" />
  </a>
</p>

> You can use a fork of this project or materials to create your own business card site and deploy it on your server. This project is distributed under the [Apache](./LICENSE) license.

The application is based on the *HTML/CSS* and *SCSS* pre-processor.

### Features
- Vanilla JavaScript and HTML/CSS without the use of a framework or libraries.
- Used by i18n to localize the site in two languages (Russian and English). Easy setup (see `en.json` and `ru.json` files in `/public/i18n` folder).
- Light and dark theme is used (the state is stored in localStorage).
- Simple and concise unique design by [@SaharSoffer](https://www.figma.com/@saharsoffer) with modifications by [@wowblvck](https://github.com/wowblvck).

### Building

To build the app, you need `node >= 18.17` and `Vite`

Build command:
```
npm run build
```

### Deploying

> NOTICE: You must have your own server with [Nginx](https://nginx.org/), [Apache](https://httpd.apache.org/) or any other web server installed on it.

Use the secret key `COPY_TO_FOLDER` in the repository settings to specify the destination folder for the location of the site files (For example: `/home/user/var/www/example.com/html/`). This is required for GitHub Actions to work properly (see [production.yml](.github/workflows/production.yml)).

### License
This material is distributed freely under license [Apache](./LICENSE).