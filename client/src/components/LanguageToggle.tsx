import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";

export default function LanguageToggle () {
    const [language, setLanguage] = useState('sv');
    const { t, i18n } = useTranslation();
    const toggleLanguage = () => {
        setLanguage(prevLanguage => (prevLanguage === 'en' ? 'sv' : 'en'));
    };

    useEffect(() => {
        localStorage.setItem('language', language);
        i18n.changeLanguage(language);
    }, [language]);

    return (
        <div onClick={toggleLanguage} style={{ cursor: 'pointer' }}>
            {language === 'en' ? (
                <ReactCountryFlag
                    countryCode="US"
                    svg
                    style={{
                        width: '2em',
                        height: '2em',
                    }}
                    title="US"
                />
            ) : (
                <ReactCountryFlag
                    countryCode="SE"
                    svg
                    style={{
                        width: '2em',
                        height: '2em',
                    }}
                    title="SE"
                />
            )}
        </div>
    );
};

