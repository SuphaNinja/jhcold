import { Html } from "@react-email/components";
import React from "react";
const Support = (serviceData) => {
    return (React.createElement(Html, { lang: "sv" },
        React.createElement("body", { style: { margin: 0, padding: 0, fontFamily: 'Arial, sans-serif', color: '#333', backgroundColor: '#f4f4f4', width: '100%', textAlign: 'center', boxSizing: 'border-box' } },
            React.createElement("div", { style: { maxWidth: '600px', margin: 'auto', padding: '20px', backgroundColor: '#ffffff', border: '1px solid #ddd', borderRadius: '8px' } },
                React.createElement("h1", { style: { fontSize: '28px', fontWeight: 'bold', color: '#333', margin: '0 0 20px 0' } },
                    serviceData.firstName,
                    " ",
                    serviceData.lastName,
                    " beh\u00F6ver hj\u00E4lp!"),
                React.createElement("p", { style: { fontSize: '18px', margin: '20px 0', lineHeight: '1.5' } }, "En kund beh\u00F6ver hj\u00E4lp. H\u00E4r \u00E4r detaljerna:"),
                React.createElement("div", { style: { textAlign: 'left', margin: '20px auto', padding: '15px', backgroundColor: '#f9f9f9', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '500px' } },
                    React.createElement("p", { style: { fontSize: '16px', margin: '10px 0' } },
                        React.createElement("strong", null, "F\u00F6rnamn:"),
                        " ",
                        serviceData.firstName),
                    React.createElement("p", { style: { fontSize: '16px', margin: '10px 0' } },
                        React.createElement("strong", null, "Efternamn:"),
                        " ",
                        serviceData.lastName),
                    React.createElement("p", { style: { fontSize: '16px', margin: '10px 0' } },
                        React.createElement("strong", null, "Email:"),
                        " ",
                        serviceData.email),
                    React.createElement("p", { style: { fontSize: '16px', margin: '10px 0' } },
                        React.createElement("strong", null, "Telefon:"),
                        " ",
                        serviceData.phone),
                    React.createElement("p", { style: { fontSize: '16px', margin: '10px 0' } },
                        React.createElement("strong", null, "Beskrivning:"),
                        " ",
                        serviceData.description),
                    React.createElement("p", { style: { fontSize: '16px', margin: '10px 0' } },
                        React.createElement("strong", null, "Finns bokningsf\u00F6rfr\u00E5gan:"),
                        " ",
                        serviceData.booked),
                    React.createElement("p", { style: { fontSize: '16px', margin: '10px 0' } },
                        React.createElement("strong", null, "Datum:"),
                        " ",
                        serviceData.date)),
                React.createElement("p", { style: { fontSize: '18px', margin: '20px 0', lineHeight: '1.5' } }, "V\u00E4nligen ta en titt p\u00E5 denna f\u00F6rfr\u00E5gan och kontakta kunden s\u00E5 snart som m\u00F6jligt."),
                React.createElement("a", { href: `mailto:${serviceData.email}?subject=Uppföljning av din förfrågan&body=Hej ${serviceData.firstName} ${serviceData.lastName},%0D%0A%0D%0AVi har mottagit din förfrågan och vill gärna hjälpa dig.%0D%0A%0D%0AVi kommer att kontakta dig snart.%0D%0A%0D%0ABästa hälsningar,%0D%0AJHC Plåt & Bygg AB`, style: {
                        fontSize: '14px',
                        color: '#ffffff',
                        backgroundColor: '#28a745',
                        textDecoration: 'none',
                        padding: '10px 15px',
                        borderRadius: '5px',
                        display: 'inline-block',
                        fontWeight: 'bold',
                        lineHeight: '1.5',
                        margin: '12px 0',
                        transition: 'background-color 0.3s ease, color 0.3s ease'
                    }, onMouseOver: (e) => {
                        e.currentTarget.style.backgroundColor = '#218838';
                        e.currentTarget.style.color = '#e0e0e0';
                    }, onMouseOut: (e) => {
                        e.currentTarget.style.backgroundColor = '#28a745';
                        e.currentTarget.style.color = '#ffffff';
                    } }, "Svara p\u00E5 kunden!")))));
};
export default Support;
