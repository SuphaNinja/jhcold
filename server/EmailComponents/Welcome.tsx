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

const Welcome = (bookingData: BookingData) => {

    return (
        <Html lang="sv">
            <body style={{ margin: 0, padding: 0, fontFamily: 'Arial, sans-serif', color: '#333', backgroundColor: '#f4f4f4', width: '100%', textAlign: 'center', boxSizing: 'border-box' }}>
                <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px', backgroundColor: '#ffffff', border: '1px solid #ddd', borderRadius: '8px' }}>
                    <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#333', margin: '0 0 20px 0' }}>Välkommen till JHC Plåt & Bygg AB!</h1>

                    <p style={{ fontSize: '18px', margin: '20px 0', lineHeight: '1.5' }}>Hej {bookingData.firstName} {bookingData.lastName},</p>

                    <p style={{ fontSize: '18px', margin: '20px 0', lineHeight: '1.5' }}>
                        Tack för din förfrågan! Vi har mottagit din begäran och kommer att återkomma till dig så snart som möjligt.
                    </p>

                    <p style={{ fontSize: '18px', margin: '20px 0', lineHeight: '1.5' }}>
                        På JHC Plåt & Bygg AB är vi stolta över vår erfarenhet och kvalifikationer inom byggbranschen. Med över 20 års erfarenhet erbjuder vi högkvalitativa tjänster som inkluderar takläggning, reparationer och byggställningar. Vårt team av certifierade och erfarna hantverkare är dedikerade till att leverera förstklassiga resultat för varje projekt.
                    </p>

                    <p style={{ fontSize: '18px', margin: '20px 0', lineHeight: '1.5' }}>
                        Om du har några frågor under tiden eller behöver ytterligare information, tveka inte att kontakta oss.
                    </p>

                    <p style={{ fontSize: '18px', margin: '20px 0', lineHeight: '1.5' }}>
                        Med vänliga hälsningar,<br />
                        JHC Plåt & Bygg AB
                    </p>

                    <p style={{ fontSize: '14px', margin: '20px 0', lineHeight: '1.5' }}>Behöver du hjälp?</p>
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

export default Welcome;
