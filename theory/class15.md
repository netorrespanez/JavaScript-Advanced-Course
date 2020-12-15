### Webpack
Webpack is a module bundler for static files. It is used, among others, for:

Dependency management
Manage tasks
Format conversion
It is widely used and almost all modern web development frameworks are integrated with it. However, its configuration is really complex, so usually solutions built on webpack are used to facilitate the development.

When we configure webpack in our project, it treats all the files it finds as modules and with these it forms a network of dependencies between files. Once formed, Webpack transforms all the code into a single package (bundle) that contains all the modules in the oden that are needed. This bundle will be the one we finally use in our HTML file.

- Key concepts
Loaders: They are in charge of transforming any file that is not JS into modules that Webpack can work with.
Plugins: They are the core of webpack. They are used for a multitude of tasks, module optimization, miniaturization, script injection, etc
Mode: Allows us to specify which environment we are working in, whether it is development or production.

### Gulp
Gulp is one of the most popular task managers in front-end development, allowing us to automate certain tasks in our project from a single configuration.


# PART II - Persistence
In the early years of web development, to keep a value around as users moved from page to page, you’d have to make use of session persistence functionality built into the environment, attach the data to the web page URL, or provide it in a hidden form field. Of course, this persisted the data from page to page, but once you closed the browser, the data was lost.

JavaScript added a third approach, a cookie, which could not only persist from page to page, but cause the data to persist beyond the current session. With cookies, you could not only access data such as login information throughout a website, but you could close the browser and reopen it another day and still have access to the same data.

These techniques still exist, but now, because of the needs of more complex web applications, including applications that support offline functionality, browsers support a variety of sophisticated data storage and persistence techniques.


- By default, each request made using the HTTP protocol is stateless, meaning that the information does not persist. To solve this problem, of course, from the client side, cookies are usually used, but nowadays with the new browsers and the contribution of HMTL 5, this concept is being left aside and we are migrating to Local Storage and Session Storage. Using cookies has a great advantage, that we can store information that is accessible from the server as well, by creating one of these the information will travel in each request we make to the server. But there are many cases and with the demand of javascript today, many times we just want to persist the information on the client side.

* LOCAL STORAGE Y SESSION STORAGE

They are the new feature supported by current browsers thanks to HTML 5 for saving information on the client side. This information is saved in the same way as a dictionary behavior, i.e. Key and Value. Everything saved turns out to be a string. Unlike cookies this information is only persisted on the client side and is never sent on every request made by our application.

The difference between Local Storage and Session Storage is that the first one has no expiration date and the second one will only be valid for the current window in which we are browsing and are only accessible for the current domain. Both can be deleted if the information saved in the browser is cleaned.

```
sessionStorage.setItem("name", "Shelley");
sessionStorage.city="St. Louis";
...
var name = sessionStorage,getItem("name");
var city = sessionStorage.city;
...
sessionStorage.removeItem("name");
sessionStorage.clear();
```
One last note on sessionStorage, as it relates to its implementation. Both sessionStorage and localStorage, covered in the next recipe, are part of the new DOM Storage specification, currently under development by the W3C. Both are window object properties, which means they can be accessed globally. Both are implementations of the Storage object, and changes to the prototype for Storage result in changes to both the sessionStorage and localStorage objects:

```
Storage.prototype.someMethod = function (param) { ...};
...
localStorage.someMethod(param);
...
sessionStorage.someMethod(param);
```