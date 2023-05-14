import '@styles/globals.css'

import Nav from '@components/Nav'
import Provider from '@components/Provider'

export const metadata = {
  title: 'Stupidopia',
  description: 'Тупильник Stupidopia Discover & Share AI powered stupid prompts',
}

const RootLayout = ({ children }) => (
  <html lang='ru'>
    <body>
      <Provider>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav />
          {children}
        </main>
      </Provider>
    </body>
  </html>
)

export default RootLayout
