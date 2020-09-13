const redis = require("redis");
const redisUrl = "redis://127.0.0.1:6379";
const client = redis.createClient(redisUrl);

// change redis callback behaviour
const util = require("util");
client.get = util.promisify(client.get); //now it return promise

(async () => {
  client.set(
    "intro",
    JSON.stringify({
      name: "emonhossainraihan",
      like: "sleep",
    })
  );
  const cachedIntro = await client.get("intro");

  console.log("SERVING FROM REDIS CACHE");
  console.log(cachedIntro);
  process.exit();
})();
