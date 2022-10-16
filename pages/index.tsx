import { NextPage } from 'next'
import { useRouter } from 'next/router'

import { locales } from '../util/locales'

const Home: NextPage = () => {
  const { locale } = useRouter()

  return (
    <div>
      <h1 className={'text-3xl font-bold'}>
        {locale === 'en-GB' && locales.homePageHello.en}
        {locale === 'sv-SE' && locales.homePageHello.se}
      </h1>
    </div>
  )
}

export default Home
