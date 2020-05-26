import Head from 'next/head'
import Header from './Header'

export default function Layout({ children, pageTitle, ...props}) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>{pageTitle}</title>
            </Head>
            <section class="layout">

                <Header />
                <div class="content container">{children}</div>
            </section>
            <footer>Built by me!</footer>
        </>
    )
}