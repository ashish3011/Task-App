const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'ashish94065@gmail.com',
        subject: 'thanks for joining in!!!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app....`,
    
    })
}

const sendClosingEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'ashish94065@gmail.com',
        subject: 'why deleting the account....',
        text: `Hello ${name}. why did you cancel the account....`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendClosingEmail
}