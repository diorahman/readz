# readz

# build

install browserify

```
$ npm install -g browserify
```

install deps

```
$ npm install
```

then, build it

```
$ npm run build
```

# test

open it using browser

```
$ open index.html
```

drop a `gzip`-ed file

# observation

![screen](http://g.recordit.co/pzSluqW2eI.gif)

- still has `Uncaught Error: close is pending` when the stream is done ([Fixed](https://github.com/diorahman/readz/commit/39ec158b926658ce05854f705a02f660ac04e38d))
