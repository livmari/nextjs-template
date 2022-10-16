import { NextPage } from 'next'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const { locale } = useRouter()

  return (
    <div>
      <h1 className={'text-3xl font-bold'}>
        {locale === 'en-GB' && 'Hello world'}
        {locale === 'sv-SE' && 'Hej världen'}
      </h1>
    </div>
  )
}

export default Home
