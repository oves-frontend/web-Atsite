# StartP website

This is a website under development using StartP theme as a basis and built interface, Next.js,Redux, and a headless CMS from Strapi initial features will include a landing page, a catalog and a blog
 

# Redux example

This example shows how to integrate Redux in Next.js.

Usually splitting your app state into `pages` feels natural but sometimes you'll want to have global state for your app. This is an example on how you can use Redux that also works with Next.js's universal rendering approach.

In the first example we are going to display a digital clock that updates every second. The first render is happening in the server and then the browser will take over. To illustrate this, the server rendered clock will have a different background color (black) than the client one (grey).

The trick here for supporting universal Redux is to separate the cases for the client and the server. When we are on the server we want to create a new store every time, otherwise different users data will be mixed up. If we are in the client we want to use always the same store. That's what we accomplish on `store.js`.

All components have access to the Redux store using `useSelector`, `useDispatch` or `connect` from `react-redux`.

On the server side every request initializes a new store, because otherwise different user data can be mixed up. On the client side the same store is used, even between page changes.





## How to use



```bash
git clone https://github.com/ovesorg/web-blog-strartp.git

npm install

npm run dev
```

