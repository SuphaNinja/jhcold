import express from 'express';
import { Resend } from 'resend';
import dotenv from 'dotenv';
import cors from "cors";
import BookingConfirmation from "./dist/EmailComponents/BookingConfirmation.js";
import Welcome from "./dist/EmailComponents/Welcome.js";
import Support from "./dist/EmailComponents/Support.js";
import SupportConfirmation from "./dist/EmailComponents/SupportConfirmation.js";
dotenv.config();

const app = express();
const port = 8080;

app.use(cors({
    origin: '*',
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    credentials: true
}));
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.get("/", async (req,res) => {
    res.status(200).send("HELLO WORLD")
});

app.post("/send-booking", async (req, res) => {
    const { bookingData } = req.body;
    try {
        await resend.emails.send({
            from: "info@jhc-platbyggab.com",
            to: bookingData.email,
            subject: "Prisförfrågan",
            react: BookingConfirmation(bookingData)
        });

        await resend.emails.send({
            from: "info@jhc-platbyggab.com",
            to: "jhcplatbyggab@gmail.com",
            subject: "Prisförfrågan",
            react: BookingConfirmation(bookingData)
        });

        await resend.emails.send({
            from: "info@jhc-platbyggab.com",
            to: bookingData.email ,
            subject: "Välkommen",
            react: Welcome(bookingData)
        });

        res.status(200).json({ message: 'Email sent successfully!' });

    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email.' });
    }
});

app.post("/send-support", async (req, res) => {
    const { serviceData } = req.body;
    console.log(serviceData)
    try {
        await resend.emails.send({
            from: "info@jhc-platbyggab.com",
            to: "service@jhc-platbyggab.com",
            subject: "Kund behöver hjälp",
            react: Support(serviceData)
        });

        await resend.emails.send({
            from: "service@jhc-platbyggab.com",
            to: serviceData.email,
            subject: "JHC Kundtjänst",
            react: SupportConfirmation(serviceData)
        });

        res.status(200).json({ message: 'Email sent successfully!' });

    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json(error);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
