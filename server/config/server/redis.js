const redis = require('redis');

module.exports = () => {
  let redisSettings = {
    host: process.env.REDIS_HOST || '127.0.0.1',
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD,
  };
  const redisUrl = process.env.REDIS_URL;

  if(redisUrl){
    const cred = redisUrl.slice(8);
    const splittedDataCreds = cred.split(':');

    const username = splittedDataCreds[0];
    const port = splittedDataCreds[2];
    const splittedPassHost = splittedDataCreds[1].split('@');

    const password = splittedPassHost[0];
    const host = splittedPassHost[1];


    redisSettings = {
      host,
      port,
      password
    };
  }

  const client = createRedisClient(redisSettings,redisUrl); 
  const subscriber = createRedisClient(redisSettings,redisUrl);  // Need to create separate connections
  const publisher = createRedisClient(redisSettings,redisUrl);   // for pub-sub

  client.on('error', err => console.log('Error: Are you running redis? - ', err));

  return {
    client,
    subscriber,
    publisher,
  };
};


function createRedisClient(settings, url) {
  let client;

  if(url){
    client = redis.createClient(url);
  }else{
    client = redis.createClient(settings);
  }

  return client;
}
