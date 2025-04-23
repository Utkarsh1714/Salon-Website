import nodemailer from 'nodemailer';
import hbs from 'nodemailer-express-handlebars';
import path from 'path';

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    }
});

transporter.use('compile', hbs({
    viewEngine: {
        extName: '.handlebars',
        partialsDir: path.resolve('./email-templates'),
        defaultLayout: false,
    },
    viewPath: path.resolve('./email-templates'),
    extName: '.handlebars',
}));


export async function sendAppointmentEmail({ toCustomer, customerEmail, date, time, note }) {
    const adminEmail = process.env.OWNER_EMAIL;

    // Email to Admin
    await transporter.sendMail({
        from: `"Appointment System" <${process.env.SMTP_USER}>`,
        to: adminEmail,
        subject: 'New Appointment Booked',
        template: 'new-appointment',
        context: { date, time, customerEmail, note },
    });

    // Email to Customer
    if (toCustomer) {
        if (!customerEmail) {
            console.error("Customer email missing!");
            return;
        }

        await transporter.sendMail({
            from: `"Appointment System" <${process.env.SMTP_USER}>`,
            to: customerEmail,
            subject: 'Appointment Confirmation',
            template: 'appointment-confirmation',
            context: { date, time, note },
        });
    }
}
