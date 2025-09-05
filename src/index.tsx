import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material'
import App from './App'
import { store } from './app/store'
import customHistory from './utils/history'

import './index.css'

const container = document.getElementById('root')!
const root = createRoot(container)

declare module '@mui/material/styles' {
    interface PaletteOptions {
        blue?: {
            100: string
            200: string
            300: string
            400: string
            500: string
            600: string
            700: string
            800: string
            900: string
        }
    }
}

const theme = createTheme({
    palette: {
        primary: {
            main: '#FF2727',
        },
        secondary: {
            main: '#969696',
        },
      info:{
          main: '#F9F2DC',
      },
        grey: {
            100: '#F1F3F5',
            200: '#EEEEEE',
            300: '#AABBC7',
            400: '#96A9B8',
            500: '#8199AB',
            600: '#738998',
            700: '#627480',
            800: '#53606A',
            900: '#404A51',
        },
        blue: {
            100: '#C1DEFF',
            200: '#99CAFF',
            300: '#73B5FF',
            400: '#5BA4FF',
            500: '#5094FF',
            600: '#5185FF',
            700: '#4F72EA',
            800: '#4D60D7',
            900: '#493EB6',
        },
    },
    components: {
        MuiDialog: {
            styleOverrides: {
                paper: {
                    boxShadow: 'none',
                    borderRadius: '8px',
                },
            },
        },
        MuiButton: {
            variants: [
                {
                    props: { size: 'large' },
                    style: {
                        height: 54,
                        padding: '0 54px',
                        borderRadius: 100,
                    },
                },
                {
                    props: { size: 'medium' },
                    style: {
                        height: 42,
                        padding: '0 42px',
                        borderRadius: 100,
                    },
                },
                {
                    props: { size: 'small' },
                    style: {
                        height: 36,
                        padding: '0 36px',
                        borderRadius: 100,
                    },
                },
            ],
            defaultProps: {
                disableElevation: true,
            },
            styleOverrides: {
                root: {
                    borderRadius: 6,
                    height: 34,
                    padding: '0 16px',
                },
            },
        },
    },
    typography: {
        fontFamily: [
            'Bahnschrift',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            'Helvetica Neue',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
})

root.render(
    <Provider store={store}>
        <HistoryRouter history={customHistory}>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </HistoryRouter>
    </Provider>,
)
