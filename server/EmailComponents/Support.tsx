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

const Support = (serviceData: ServiceData) => {

    return (
        <Html lang="sv">
            <body style={{ margin: 0, padding: 0, fontFamily: 'Arial, sans-serif', color: '#333', backgroundColor: '#f4f4f4', width: '100%', textAlign: 'center', boxSizing: 'border-box' }}>
                <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px', backgroundColor: '#ffffff', border: '1px solid #ddd', borderRadius: '8px' }}>
                    <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#333', margin: '0 0 20px 0' }}>{serviceData.firstName} {serviceData.lastName} behöver hjälp!</h1>
                    <p style={{ fontSize: '18px', margin: '20px 0', lineHeight: '1.5' }}>
                        En kund behöver hjälp. Här är detaljerna:
                    </p>
                    <div style={{ textAlign: 'left', margin: '20px auto', padding: '15px', backgroundColor: '#f9f9f9', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '500px' }}>
                        <p style={{ fontSize: '16px', margin: '10px 0' }}><strong>Förnamn:</strong> {serviceData.firstName}</p>
                        <p style={{ fontSize: '16px', margin: '10px 0' }}><strong>Efternamn:</strong> {serviceData.lastName}</p>
                        <p style={{ fontSize: '16px', margin: '10px 0' }}><strong>Email:</strong> {serviceData.email}</p>
                        <p style={{ fontSize: '16px', margin: '10px 0' }}><strong>Telefon:</strong> {serviceData.phone}</p>
                        <p style={{ fontSize: '16px', margin: '10px 0' }}><strong>Beskrivning:</strong> {serviceData.description}</p>
                        <p style={{ fontSize: '16px', margin: '10px 0' }}><strong>Finns bokningsförfrågan:</strong> {serviceData.booked}</p>
                        <p style={{ fontSize: '16px', margin: '10px 0' }}><strong>Datum:</strong> {serviceData.date}</p>
                    </div>
                    <p style={{ fontSize: '18px', margin: '20px 0', lineHeight: '1.5' }}>
                        Vänligen ta en titt på denna förfrågan och kontakta kunden så snart som möjligt.
                    </p>
                    <a
                        href={`mailto:${serviceData.email}?subject=Uppföljning av din förfrågan&body=Hej ${serviceData.firstName} ${serviceData.lastName},%0D%0A%0D%0AVi har mottagit din förfrågan och vill gärna hjälpa dig.%0D%0A%0D%0AVi kommer att kontakta dig snart.%0D%0A%0D%0ABästa hälsningar,%0D%0AJHC Plåt & Bygg AB`}
                        style={{
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
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.backgroundColor = '#218838';
                            e.currentTarget.style.color = '#e0e0e0';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.backgroundColor = '#28a745';
                            e.currentTarget.style.color = '#ffffff';
                        }}
                    >
                        Svara på kunden!
                    </a>
                </div>
            </body>
        </Html>
    );
};

export default Support;
