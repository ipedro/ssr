# SSR - a React Server Side Rendering app

### Description

This is a simple application to put into practice the concepts of server-side rendering and
universal javascript that was based on the content of Stephen Grider's Server Side Rendering with
React and Redux course (https://www.udemy.com/server-side -learning-with-react-and-redux / learn /
v4 / overview). In general lines:

* The Webpack has two input configurations, one for the client and one for the server. Each one
  pointing to a different input file, one for the client and one for the server. The component trees
  of these two files are the same, however, on the server, the actions are called by methods of the
  object representing the routes. When it receives a GET for a given URL, the server iterates
  through this object, finds the one that has the same path and executes the corresponding action
  method, waits for the resolution of the promise and only then restores the HTML to the client.

* On the server, we create the markup HTML, set the div with id "root" to serve the client, and
  render the components using the renderToString method. In the client, we pass the same component
  tree, but we use the react-dom hydrate method instead of the render, so the react can take control
  and avoid unnecessary rendering with its diff algorithm.

* The Redux has two stores. The Redux store on the client is re-hydrated by the server's store, when
  we pass the data from it to the server via a JSON (window.INITIAL_STATE), properly sanitized by
  Serialize (serialize-javascript).

* Regarding React-Routes, on the server, we use StaticRouter and BrowserRouter on the client. Routes
  are declared using renderRoutes (react-router-config).

* The classes created by emotion on the server are passed to the client, rehydrating the components
  and preventing the rules from being redeployed.

* To take care of cookies, API calls are made through a proxy, so we keep sending the cookies
  automatically.

* Support for SEO remains on React-Helmet and the inclusion of metadata following the Open Graph
  protocol (http://ogp.me).

### Installation

* Clone or download this repository;
* Install dependencies with `yarn install` or `npm install` ;

To start the application run `yarn run dev` or `npm run dev`.

### Contributing

1. Fork it!
2. Create your feature branch: git checkout -b my-new-feature
3. Commit your changes: git commit -am 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request :D

### Technologies

* React;
* Redux;
* Axios;
* Emotion;
* React-Router;
* Express;
* React-Helmet;
* Webpack;
* Redux-thunk;

### License

ISC License (ISC)

Copyright (c) 2017 Rafael Campos

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee
is hereby granted, provided that the above copyright notice and this permission notice appear in all
copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS
SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE
AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE
OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS
SOFTWARE.

We follow the standards adopted by eslint - airbnb.
