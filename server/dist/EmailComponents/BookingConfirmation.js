import { Html } from "@react-email/components";
import React from "react";
const BookingConfirmation = (bookingData) => {
    return (React.createElement(Html, { lang: "en" },
        React.createElement("body", { style: { margin: 0, padding: 0, fontFamily: 'Arial, sans-serif', color: '#333', backgroundColor: '#ffffff', width: '100%', textAlign: 'center', boxSizing: 'border-box' } },
            React.createElement("div", { style: { maxWidth: '600px', margin: 'auto', padding: '20px', backgroundColor: '#f4f4f4', border: '1px solid #ddd', borderRadius: '8px' } },
                React.createElement("h1", { style: { fontSize: '28px', fontWeight: 'bold', color: '#333', margin: '0 0 20px 0' } }, "JHC Pl\u00E5t & Bygg AB"),
                React.createElement("p", { style: { fontSize: '18px', margin: '20px 0', lineHeight: '1.5' } },
                    "Tack ",
                    bookingData.firstName,
                    " ",
                    bookingData.lastName,
                    ","),
                React.createElement("p", { style: { fontSize: '18px', margin: '20px 0', lineHeight: '1.5' } }, "Vi uppskattar att du valde oss."),
                React.createElement("ul", { style: { listStyleType: 'none', padding: 0, margin: 0 } },
                    React.createElement("li", { style: { marginBottom: '15px', fontSize: '16px' } },
                        "Email: ",
                        React.createElement("strong", null, bookingData.email)),
                    React.createElement("li", { style: { marginBottom: '15px', fontSize: '16px' } },
                        "Telefonnummer: ",
                        React.createElement("strong", null, bookingData.phone)),
                    React.createElement("li", { style: { marginBottom: '15px', fontSize: '16px' } },
                        "Taktyp: ",
                        React.createElement("strong", null, bookingData.roofType)),
                    React.createElement("li", { style: { marginBottom: '15px', fontSize: '16px' } },
                        "Vad ska g\u00F6ras: ",
                        React.createElement("strong", null, bookingData.whatToDo)),
                    React.createElement("li", { style: { marginBottom: '15px', fontSize: '16px' } },
                        "Typ av hus: ",
                        React.createElement("strong", null, bookingData.typeOfHouse)),
                    React.createElement("li", { style: { marginBottom: '15px', fontSize: '16px' } },
                        "Beh\u00F6vs byggst\u00E4llning: ",
                        React.createElement("strong", null, bookingData.scaffolding)),
                    React.createElement("li", { style: { marginBottom: '15px', fontSize: '16px' } },
                        "Andra \u00D6nskem\u00E5l: ",
                        React.createElement("strong", null, bookingData.other)),
                    React.createElement("li", { style: { marginBottom: '15px', fontSize: '16px' } },
                        "Bygg\u00E5r: ",
                        React.createElement("strong", null, bookingData.built)),
                    React.createElement("li", { style: { marginBottom: '15px', fontSize: '16px' } },
                        "Takyta: ",
                        React.createElement("strong", null,
                            bookingData.kvm,
                            " kvm")),
                    React.createElement("li", { style: { marginBottom: '15px', fontSize: '16px' } },
                        "Datum: ",
                        React.createElement("strong", null, bookingData.date))),
                React.createElement("p", { style: { fontSize: '18px', margin: '20px 0', lineHeight: '1.5' } },
                    "Vi \u00E5terkommer s\u00E5 snart vi kan!",
                    React.createElement("br", null),
                    "Mvh JHC Pl\u00E5t & Bygg AB"),
                React.createElement("p", { style: { fontSize: '10px', margin: '0px 0', lineHeight: '1.5' } }, "Har du fr\u00E5gor?"),
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
export default BookingConfirmation;
