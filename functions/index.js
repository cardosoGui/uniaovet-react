/* eslint-disable */
"use strict";

const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,

  auth: {
    user: "guilherme.trb19@gmail.com",
    pass: "#@!52585951"
  }
});

exports.enviarEmail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    nodemailer.createTestAccount((err, account) => {
      const htmlEmail = `
     
                <h3>Detalhes do Contato</h3>
                <ul>
                  <li>Nome: ${req.body.name}</li>
                  <li>Email: ${req.body.email}</li>
                </ul>
                <h3>Produto Desejado</h3>
                <h4>${req.body.product}</h4>
              
                <h3>Messagem</h3>
                <p>${req.body.message}</p>
              `;

      let mailOptions = {
        from: "goomec.plataforma.automotiva@gmail.com",
        to:
          "goomec.plataforma.automotiva@gmail.com, guilherme@goomec.com.br, reginaldo@gmail.com.br",
        subject: "Cliente do Site GooMec",
        text: req.body.message,
        html: htmlEmail
      };

      transporter.verify(function(error, success) {
        if (error) {
          console.log(error);
        } else {
          console.log("Server is ready to take our messages");
        }
      });

      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          res.send("fail");
          return console.log(err);
        } else {
          res.send("success");

          transporter.close();
          return console.log(info);
        }

        console.log("Message Sent: %s", info.message);
        console.log("Message URL: %s", nodemailer.getTestMessageUrl(info));

        transporter.close();
      });
    });
  });
});
