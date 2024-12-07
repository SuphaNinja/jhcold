import { Html, Button } from "@react-email/components";
import React from "react";

type ServiceData = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    description: string;
    date: string;
    booked: string;
};

const SupportConfirmation = (serviceData: ServiceData) => {

    return (
        <Html lang="sv">
            <body style={{ margin: 0, padding: 0, fontFamily: 'Arial, sans-serif', color: '#333', backgroundColor: '#f4f4f4', width: '100%', textAlign: 'center', boxSizing: 'border-box' }}>
                <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px', backgroundColor: '#ffffff', border: '1px solid #ddd', borderRadius: '8px' }}>
                    <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#333', margin: '0 0 20px 0' }}>Tack för din förfrågan!</h1>
                    <p style={{ fontSize: '18px', margin: '20px 0', lineHeight: '1.5' }}>
                        Hej {serviceData.firstName} {serviceData.lastName},
                    </p>
                    <p style={{ fontSize: '18px', margin: '20px 0', lineHeight: '1.5' }}>
                        Vi har mottagit ditt meddelande och vårt kundtjänstteam kommer att behandla din förfrågan så snart som möjligt.
                    </p>
                    <p style={{ fontSize: '18px', margin: '20px 0', lineHeight: '1.5' }}>
                        Här är en sammanfattning av din förfrågan:
                    </p>
                    <div style={{ textAlign: 'left', margin: '20px auto', padding: '15px', backgroundColor: '#f9f9f9', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '500px' }}>
                        <p style={{ fontSize: '16px', margin: '10px 0' }}><strong>Förnamn:</strong> {serviceData.firstName}</p>
                        <p style={{ fontSize: '16px', margin: '10px 0' }}><strong>Efternamn:</strong> {serviceData.lastName}</p>
                        <p style={{ fontSize: '16px', margin: '10px 0' }}><strong>Email:</strong> {serviceData.email}</p>
                        <p style={{ fontSize: '16px', margin: '10px 0' }}><strong>Telefon:</strong> {serviceData.phone}</p>
                        <p style={{ fontSize: '16px', margin: '10px 0' }}><strong>Beskrivning:</strong> {serviceData.description}</p>
                        <p style={{ fontSize: '16px', margin: '10px 0' }}><strong>Behövs bokning:</strong> {serviceData.booked}</p>
                        <p style={{ fontSize: '16px', margin: '10px 0' }}><strong>Datum:</strong> {serviceData.date}</p>
                    </div>
                    <p style={{ fontSize: '18px', margin: '20px 0', lineHeight: '1.5' }}>
                        Vi kommer att kontakta dig så snart vi har mer information.
                    </p>
                    <p style={{ fontSize: '18px', margin: '20px 0', lineHeight: '1.5' }}>
                        Tack för att du valde JHC Plåt & Bygg AB.
                    </p>
                    <p style={{ fontSize: '10px', margin: '20px 0', lineHeight: '1.5' }}>
                        Mån-Lör 07-19 <br />Tel:  072-941 54 32
                    </p>
                    <p style={{ fontSize: '14px', color: '#666', marginTop: '20px' }}>
                        Du får detta meddelande eftersom du har skickat en förfrågan till JHC Plåt & Bygg AB. Om du inte gjorde detta, vänligen ignorera detta meddelande.
                    </p>
                </div>
            </body>
        </Html>
    );
};

export default SupportConfirmation;
