# express-playground

## How to use

-   Clone this repo locally.
-   Make sure to run `npm i` the first time.
-   in `src/index.ts` try changing which server is used by modifying the `serverConstructors.nonBlocking()` line
-   after changing the server, restart it with `npm start`
-   try loading http://localhost:3000/non-blocking, then http://localhost:3000/blocking, then http://localhost:3000/non-blocking again.

## Resources

-   https://www.digitalocean.com/community/tutorials/how-to-use-multithreading-in-node-js
-   http://npmjs.com/express
