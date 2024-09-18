import nodemailer from "nodemailer";

export const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user: process.env.NODEMAIL_USER_EMAIL,
        pass: process.env.NODEMAIL_USER_PASSWORD
    },
    secure:true
})

export const mailOptions={
    from:process.env.NODEMAIL_USER_EMAIL,
    to:process.env.NODEMAIL_USER_EMAIL,
}