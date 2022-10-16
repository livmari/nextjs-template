import type { AppProps } from 'next/app'
import Link from 'next/link'

import '../styles/globals.scss'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <header>
      <Link href={'/'} locale={'en-GB'}>
        English
      </Link>

      <Link href={'/sv-SE'} locale={'sv-SE'}>
        Swedish
      </Link>
    </header>

    <Component {...pageProps} />
  </>
)

export default MyApp
