const nodemailer = require("nodemailer")

const sendEmail = async (mailOptions) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com", // DÜZELTME: Doğru host adresi
        port: 587,
        secure: false,
        auth: {
            user : process.env.EMAIL_USER,
            pass : process.env.EMAIL_PASSWORD // Not: Gmail kullanıyorsanız burası "Uygulama Şifresi" olmalıdır
        }
    });

    // DÜZELTME: Callback yerine try-catch ve await kullanımı
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Mail gönderildi, info: ", info.messageId);
        return true;
    } catch (error) {
        console.log("Mail gönderilirken hata çıktı:", error);
        throw error; // Hatayı yukarıya fırlatmak daha iyidir
    }
}

module.exports = sendEmail;