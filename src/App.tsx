import React from 'react'
import AppRouter from './router/Router'
import { IntlProvider } from 'react-intl'
import messages_kz from './locales/kz.json'
import messages_en from './locales/en.json'
import messages_ru from './locales/ru.json'
import { useAppSelector } from './app/hooks'
import { lang } from './features/user/userSlice'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { IntlGlobalProvider } from './utils/IntlGlobalProvider'

const messages = {
    kz: messages_kz,
    en: messages_en,
    ru: messages_ru,
}

function App() {
    const language = useAppSelector(lang)

    return (
        <div className="App">
            <IntlProvider
                messages={messages[language]}
                locale={language}
                defaultLocale="ru"
                // onError={(error) => console.log('intl error', error)}
                onError={(e) => {}}
            >
                <IntlGlobalProvider>
                    <AppRouter />
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        icon={true}
                    />
                </IntlGlobalProvider>
            </IntlProvider>
        </div>
    )
}

export default App
