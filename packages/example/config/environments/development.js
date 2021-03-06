import hmr from 'fastify-webpack-hmr';
import webpack from 'webpack';
import path from 'path';

import webpackConfig from '../../webpack.config.js';

const compiler = webpack(webpackConfig);

export default async (app) => {
  // TODO: We need to think how to run webpack conditionally, because currently it runs every time when you db subcommands
  // the only thing that you can do now is just comment this line
  app.addPlugin(hmr, { compiler });

  app.config.logLevel = 'debug';
  app.config.cacheModules = false;
  app.config.db = {
    client: 'sqlite3',
    connection: 'db/development.sqlite3',
    entities: path.join(__dirname, '/../../app/entities'),
  };
};
