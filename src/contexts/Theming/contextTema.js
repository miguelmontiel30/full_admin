import React, { createContext, useState } from 'react'
import { createTheme } from 'react-data-table-component';

const ContextoTema = createContext();

const ProviderTema = ({ children }) => {

    const [dark_mode, setDarkMode] = useState(false);

    //ESTILOS QUE TENDRÁN LOS DATATABLE
    createTheme(
        'dark', {
        text: {
            primary: '#FFFFFF',
            secondary: 'rgba(255, 255, 255, 0.7)',
            disabled: 'rgba(0,0,0,.12)',
        },
        background: {
            default: '#262a37',
        },
        context: {
            background: '#E91E63',
            text: '#FFFFFF',
        },
        divider: {
            default: 'rgba(81, 81, 81, 1)',
        },
        button: {
            default: '#FFFFFF',
            focus: 'rgba(255, 255, 255, .54)',
            hover: 'rgba(255, 255, 255, .12)',
            disabled: 'rgba(255, 255, 255, .18)',
        },
        sortFocus: {
            default: 'rgba(255, 255, 255, .54)',
        },
        selected: {
            default: 'rgba(0, 0, 0, .7)',
            text: '#FFFFFF',
        },
        highlightOnHover: {
            default: '#202B52',
            text: '#FFFFFF',
        },
        striped: {
            default: 'rgba(0, 0, 0, .87)',
            text: '#FFFFFF',
        },
    }
    );
    
    let styles__dataTables = (dark_mode)
        ? {
            theme: 'dark',
            button_edit_class: 'btn btn-outline-info btn-sm',
            button_delete_class: 'btn btn-outline-warning btn-sm'
        }
        : {
            theme: 'white',
            button_edit_class: 'btn btn-outline-primary btn-sm',
            button_delete_class: 'btn btn-outline-danger btn-sm'
        }

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
            // primary_background: '#030303',
            // secondary_background: '#262626',
            text_primary: '#ffffff',
            text_secondary: '#999',
            // text_secondary: '#4f4f4f',            
        }
        :
        {
            nav__background_class: 'white-skin',
            primary_background: '#fafafa',
            secondary_background: '#8d8d8d',
            text_primary: '#000000',
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
                    styles__cards,
                    styles__dataTables
                }
            }
        >
            {children}
        </ContextoTema.Provider>
    )
}

export { ProviderTema, ContextoTema }
