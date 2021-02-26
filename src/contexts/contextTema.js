import React, { createContext, useState } from 'react'

const ContextoTema = createContext();

const ProviderTema = ({ children }) => {

    const [dark_mode, setDarkMode] = useState(false);

    // console.log(dark_mode);

    // ESTILOS QUE TENDRA EL BOTON PARA ACTIVAR EL DARK MODE
    let styles__button_toggleDM = (dark_mode)
        ? {
            btn_togleDM: 'white',
            btn_icon_togleDM: 'sun',
            btn_text_togleDM: 'Modo Blanco'
        }
        :
        {
            nav__background_class: 'white-skin',
            btn_togleDM: 'dark',
            btn_icon_togleDM: 'moon',
            btn_text_togleDM: 'Modo Oscuro'
        }

    // ESTILOS QUE TENDRAN LAS CARDS EN SU RESPECTIVO MODO
    let styles__cards = (dark_mode)
        ? {
            card_background: 'dark-card-admin'
        }
        :
        {
            card_background: ''
        }


    let theme_properties = (dark_mode)
        ?
        {
            nav__background_class: 'navy-blue-skin dark-bg-admin',
            primary_background: '#030303',
            secondary_background: '#262626',
            text_primary: '#ffffff',
            text_secondary: '#a4a4a4',
            card_bgd: '#1d1d1d'
        }
        :
        {
            nav__background_class: 'white-skin',
            primary_background: '#fafafa',
            secondary_background: '#8d8d8d',
            text_primary: '#1a1a1a',
            text_secondary: '#666666',
            card_bgd: '#bdbdbd'
        }

    const toggleDarkMode = () => {
        setDarkMode(!dark_mode);
    }

    return (
        <ContextoTema.Provider
            value={
                {
                    tema: theme_properties,
                    toggleDarkMode,
                    styles__button_toggleDM,
                    styles__cards
                }
            }
        >
            {children}
        </ContextoTema.Provider>
    )
}

export { ProviderTema, ContextoTema }
