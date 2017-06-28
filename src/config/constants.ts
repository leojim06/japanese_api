const devConfig = {
     MONGO_URL: process.env.MONGO_URL ||  'mongodb://localhost/japaneseapi-dev',
}
const testConfig = {
  MONGO_URL: process.env.MONGO_URL ||  'mongodb://localhost/japaneseapi-test',
}
const prodConfig = {
  MONGO_URL: process.env.MONGO_URL || 'mongodb://localhost/japaneseapi-prod',
}
const defaultConfig = {
  PORT: process.env.PORT || 3000,
  JWT_SECRET: process.env.SECRET ||  'thisisasecret',
};

function envConfig(env) {
  switch (env) {
    case 'development':
      return devConfig;
    case 'test':
      return testConfig;
    default:
      return prodConfig;
  }
}

export default {
  ...defaultConfig,
  ...envConfig(process.env.NODE_ENV),
};
