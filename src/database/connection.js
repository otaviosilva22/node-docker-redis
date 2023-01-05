const redis = require('redis');

const client = redis.createClient({
    url: 'redis://redis:6379'
  });

client.connect();

client.on("error", (error) => {
    console.error(error);
});

module.exports = client;