# process-semaphore

In one line, it kills the process that previously executed that code, if it is still alive.

## Installation

```sh
npm i -s @allnulled/process-semaphore
```

## API Usage

```js
require("@allnulled/process-semaphore").create("pid.json").renew(false);
```

With this line, you will avoid the error of:

```
Error: listen EADDRINUSE: address already in use :::3000
    at Server.setupListenHandle [as _listen2] (node:net:1751:16)
    at listenInCluster (node:net:1799:12)
    at Server.listen (node:net:1887:7)
```

# process-semaphore
