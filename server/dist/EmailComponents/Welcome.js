import { Html } from "@react-email/components";
import React from "react";
const Welcome = (bookingData) => {
    return (React.createElement(Html, { lang: "sv" },
        React.createElement("body", { style: { margin: 0, padding: 0, fontFamily: 'Arial, sans-serif', color: '#333', backgroundColor: '#f4f4f4', width: '100%', textAlign: 'center', boxSizing: 'border-box' } },
            React.createElement("div", { style: { maxWidth: '600px', margin: 'auto', padding: '20px', backgroundColor: '#ffffff', border: '1px solid #ddd', borderRadius: '8px' } },
                React.createElement("h1", { style: { fontSize: '28px', fontWeight: 'bold', color: '#333', margin: '0 0 20px 0' } }, "V\u00E4lkommen till JHC Pl\u00E5t & Bygg AB!"),
                React.createElement("p", { style: { fontSize: '18px', margin: '20px 0', lineHeight: '1.5' } },
                    "Hej ",
                    bookingData.firstName,
                    " ",
                    bookingData.lastName,
                    ","),
                React.createElement("p", { style: { fontSize: '18px', margin: '20px 0', lineHeight: '1.5' } }, "Tack f\u00F6r din f\u00F6rfr\u00E5gan! Vi har mottagit din beg\u00E4ran och kommer att \u00E5terkomma till dig s\u00E5 snart som m\u00F6jligt."),
                React.createElement("p", { style: { fontSize: '18px', margin: '20px 0', lineHeight: '1.5' } }, "P\u00E5 JHC Pl\u00E5t & Bygg AB \u00E4r vi stolta \u00F6ver v\u00E5r erfarenhet och kvalifikationer inom byggbranschen. Med \u00F6ver 20 \u00E5rs erfarenhet erbjuder vi h\u00F6gkvalitativa tj\u00E4nster som inkluderar takl\u00E4ggning, reparationer och byggst\u00E4llningar. V\u00E5rt team av certifierade och erfarna hantverkare \u00E4r dedikerade till att leverera f\u00F6rstklassiga resultat f\u00F6r varje projekt."),
                React.createElement("p", { style: { fontSize: '18px', margin: '20px 0', lineHeight: '1.5' } }, "Om du har n\u00E5gra fr\u00E5gor under tiden eller beh\u00F6ver ytterligare information, tveka inte att kontakta oss."),
                React.createElement("p", { style: { fontSize: '18px', margin: '20px 0', lineHeight: '1.5' } },
                    "Med v\u00E4nliga h\u00E4lsningar,",
                    React.createElement("br", null),
                    "JHC Pl\u00E5t & Bygg AB"),
                React.createElement("p", { style: { fontSize: '14px', margin: '20px 0', lineHeight: '1.5' } }, "Beh\u00F6ver du hj\u00E4lp?"),
                React.createElement("a", { href: "https://www.jhc-platbyggab.com/contact", style: {
                        fontSize: '14px',
                        color: '#ffffff',
                        backgroundColor: '#1a73e8',
                        textDecoration: 'none',
                        padding: '10px 15px',
                        borderRadius: '5px',
                        display: 'inline-block',
                        fontWeight: 'bold',
                        lineHeight: '1.5',
                        margin: '12px 0',
                        transition: 'background-color 0.3s ease, color 0.3s ease'
                    }, onMouseOver: (e) => {
                        e.currentTarget.style.backgroundColor = '#155ab3';
                        e.currentTarget.style.color = '#e0e0e0';
                    }, onMouseOut: (e) => {
                        e.currentTarget.style.backgroundColor = '#1a73e8';
                        e.currentTarget.style.color = '#ffffff';
                    } }, "Kontakta kundtj\u00E4nst")))));
};
export default Welcome;
