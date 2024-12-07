import { Html, Button } from "@react-email/components";
import React from "react";

type BookingData = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    roofType: string;
    whatToDo: string;
    typeOfHouse: string;
    scaffolding: string;
    other: string;
    built: string;
    adress: string;
    kvm: string;
    date: string;
};

const BookingConfirmation = (bookingData: BookingData) => {

    return (
        <Html lang="en">
            <body style={{ margin: 0, padding: 0, fontFamily: 'Arial, sans-serif', color: '#333', backgroundColor: '#ffffff', width: '100%', textAlign: 'center', boxSizing: 'border-box' }}>
                <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px', backgroundColor: '#f4f4f4', border: '1px solid #ddd', borderRadius: '8px' }}>
                    <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#333', margin: '0 0 20px 0' }}>JHC Plåt & Bygg AB</h1>

                    <p style={{ fontSize: '18px', margin: '20px 0', lineHeight: '1.5' }}>Tack {bookingData.firstName} {bookingData.lastName},</p>

                    <p style={{ fontSize: '18px', margin: '20px 0', lineHeight: '1.5' }}>Vi uppskattar att du valde oss.</p>

                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                        <li style={{ marginBottom: '15px', fontSize: '16px' }}>Email: <strong>{bookingData.email}</strong></li>
                        <li style={{ marginBottom: '15px', fontSize: '16px' }}>Telefonnummer: <strong>{bookingData.phone}</strong></li>
                        <li style={{ marginBottom: '15px', fontSize: '16px' }}>Adress: <strong>{bookingData.adress}</strong></li>
                        <li style={{ marginBottom: '15px', fontSize: '16px' }}>Taktyp: <strong>{bookingData.roofType}</strong></li>
                        <li style={{ marginBottom: '15px', fontSize: '16px' }}>Vad ska göras: <strong>{bookingData.whatToDo}</strong></li>
                        <li style={{ marginBottom: '15px', fontSize: '16px' }}>Typ av hus: <strong>{bookingData.typeOfHouse}</strong></li>
                        <li style={{ marginBottom: '15px', fontSize: '16px' }}>Behövs byggställning: <strong>{bookingData.scaffolding}</strong></li>
                        <li style={{ marginBottom: '15px', fontSize: '16px' }}>Andra Önskemål: <strong>{bookingData.other}</strong></li>
                        <li style={{ marginBottom: '15px', fontSize: '16px' }}>Byggår: <strong>{bookingData.built}</strong></li>
                        <li style={{ marginBottom: '15px', fontSize: '16px' }}>Takyta: <strong>{bookingData.kvm} kvm</strong></li>
                        <li style={{ marginBottom: '15px', fontSize: '16px' }}>Datum: <strong>{bookingData.date}</strong></li>
                    </ul>

                    <p style={{ fontSize: '18px', margin: '20px 0', lineHeight: '1.5' }}>Vi återkommer så snart vi kan!<br />Mvh JHC Plåt & Bygg AB</p>

                    <p style={{ fontSize: '10px', margin: '0px 0', lineHeight: '1.5' }}>Har du frågor?</p>
                    <a
                        href="https://www.jhc-platbyggab.com/contact"
                        style={{
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
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.backgroundColor = '#155ab3';
                            e.currentTarget.style.color = '#e0e0e0';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.backgroundColor = '#1a73e8';
                            e.currentTarget.style.color = '#ffffff';
                        }}
                    >
                        Kontakta kundtjänst
                    </a>
                </div>
            </body>
        </Html>
    );
};

export default BookingConfirmation;
