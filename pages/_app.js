import '@/public/css/bootstrap.min.css'
import 'animate.css'
import '@/public/css/boxicons.min.css'
import '@/public/css/flaticon.css'
import "@/public/css/slick.css"
import 'react-accessible-accordion/dist/fancy-example.css'
import '@/public/css/style.css'
import '@/public/css/responsive.css'
import '@/public/css/rtl.css'

// Multicolor if you want this color comment out 
// import '@/public/css/colors/brink-pink-style.css'
// import '@/public/css/colors/pink-style.css'
// import '@/public/css/colors/purple-style.css'  

import Layout from '@/components/_App/Layout'
import { Provider } from 'react-redux'
import { ToastProvider } from 'react-toast-notifications'
import { useStore } from '../store'
import { createContext } from "react"
import { client } from 'client';   
import { HOMEPAGE } from 'queries/homeQuery'
import { HEADER } from 'queries/headerQuery'
import { FOOTER } from 'queries/footerQuery'
import { BLOG } from 'queries/blogQuery'
import { ABOUT } from 'queries/aboutQuery'
import { POSTS } from 'queries/postsQuery'
import { PRODUCTS } from 'queries/productsQuery'


// Store Strapi Global object in context
export const GlobalContext = createContext({})

export default function App({ Component, pageProps }) {
    const store = useStore(pageProps.initialReduxState)
    const { homePage , header , footer ,blog , about ,posts , products} = pageProps
    console.log('from global',pageProps);

    return (
        <ToastProvider 
            placement = "bottom-left"
            autoDismissTimeout={6000}
            autoDismiss
        >
            <GlobalContext.Provider value={{homePage , header ,footer , blog ,about ,posts ,products}}>
                <Provider store={store}>
                <Layout />
                <Component {...pageProps} />
                </Provider>
                </GlobalContext.Provider>
        </ToastProvider>
    )
}
  App.getInitialProps = async (ctx) => {
    // Calls page's `getInitialProps` and fills `appProps.pageProps`
   // const appProps = await App.getInitialProps(ctx)
    // Fetch global site settings from Strapi
  
    const homeRes = await client.query({ query: HOMEPAGE })
    const headerRes = await client.query({ query: HEADER })
    const footerRes = await client.query({ query: FOOTER })
    const blogRes = await client.query({ query: BLOG })
    const aboutRes = await client.query({ query: ABOUT })
    const postRes = await client.query({ query: POSTS })
    const productsRes = await client.query({ query: PRODUCTS })
    

  
  
    // Pass the data to our page via props
  
  
    return {  pageProps: {
       homePage: homeRes.data,
       header :headerRes.data,
       footer :footerRes.data,
       blog :blogRes.data,
       about: aboutRes.data,
       posts : postRes.data,
       products : productsRes.data
       
      } };
  }
  