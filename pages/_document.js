import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <html lang="fr">
                <Head>
                    <meta name="Description" content="Timer for exercices" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <style>{`
                        html, body, #__next {
                            height: 100%;
                            max-height: 100%;
                            min-height: 100%;
                            margin: 0;
                            padding: 0;
                            border: 0;
                        }

                        body {
                            font-family: Roboto;
                        }

                        input[type=number]::-webkit-inner-spin-button, 
                        input[type=number]::-webkit-outer-spin-button { 
                            -webkit-appearance: none; 
                            margin: 0; 
                        }

                        @media only screen and (min-width: 1281px) {
                            
                            #__next {
                                display: flex;
                                justify-content: center;
                                align-items: center;
                            }
                        }`
                    }</style>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}