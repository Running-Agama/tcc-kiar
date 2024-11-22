import nodemailer from 'nodemailer'
import 'dotenv/config'
export default async function enviarEmail(){


    let transporter = nodemailer.createTransport({ 
        service: 'gmail', 
        auth: { 
           user: process.env.NODEMAILER_EMAIL, 
           pass: process.env.NODEMAILER_SENHA 
         } 
        });
    
        const mailOptions = {
            from: process.env.NODEMAILER_EMAIL, // sender address
            to: destinatario, // receiver (use array of string for a list)
            subject: 'Email de confirmação', // Subject line
            html: '<p>Não tivemos tempo de fazer um email bonitinho, se contente com isto 👍</p>'// plain text body
          };

          transporter.sendMail(mailOptions, (err, info) => {
            if(err)
              console.log(err)
            else
              console.log(info);
         });

        }