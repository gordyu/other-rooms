# Project Name

> Related Home carousel

## Related Projects

  - https://github.com/5uper5quad/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Get Started

1. Start your MongoDB database service
    * If using WSL/ Ubuntu, you can use the command ``` sudo service mongodb start ``` to start the service.

2. Create seed data
    * In your terminal you can use the command ``` npm run seed-data ``` to run the seed data generation script

3. Seed the Database with the generated seed-data
    * In your terminal you can use the command ``` npm run seed ``` to run the seeding data script

4. Run the server
    * Use the ``` npm start ``` script to start the server

5. Open your browser on localhost: 3003

## Requirements


An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node version >=6.13.0 (10.15.1)
- "dependencies": {
    "lodash": "^4.17.4",
    "bluebird": "^3.3.4",
    "body-parser": "^1.17.0",
    "express": "^4.15.0",
    "mongoose": "^4.9.6",
    "react": "^15.4.2",
    "react-dom": "^15.4.2"
  }
- "devDependencies": {
    "babel-core": "^6.23.1",
    "babel-loader": "^6.3.2",
    "babel-preset-es2015": "^6.22.0",
    "babel-preset-react": "^6.23.0",
    "webpack": "^2.2.1",
    "eslint-config-hackreactor": "git://github.com/reactorcore/eslint-config-hackreactor"
  }

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

