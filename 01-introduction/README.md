## Jest-puppeteer

Jest preset containing all required configuration for writing integration tests using Puppeteer.

```js
// yarn add --dev jest-puppeteer puppeteer
// jest.config.js
module.exports = {
  preset: "jest-puppeteer",
};
```

## Available scripts

### `yarn start`

Start your express server in `http://localhost:5000/`

### `yarn test`

Check title and header of the homepage(http://localhost:5000/)

## Redis

Installing Redis on Windows:

- Go to the releases page of the Redis for Windows repo: https://github.com/MicrosoftArchive/redis/releases
- Download the 'Redis-x64-xxx.zip' file
- Unzip the file
- In the newly created folder, run redis-server.exe
- You should see a window appear that says redis is running on port 6379
- Thats it!

You can find the Unziped file named Redis inside introduction directory. I will try WSL later and update this README. By the way if you want to run redis-cli then make sure you Add the Redis installation folder to the Path environment variable :wink: (Caution: Make sure the Redis service is started)
