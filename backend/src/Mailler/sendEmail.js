const SibApiV3Sdk = require("sib-api-v3-sdk");

const defaultClient = SibApiV3Sdk.ApiClient.instance;

const apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.SENDMEBLUE_KEY;

const sendEmail = (emailUser) => {
  const apiCall = new SibApiV3Sdk.TransactionalEmailsApi();
  let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

  sendSmtpEmail = {
    to: [
      {
        email: emailUser,
      },
    ],
    templateId: 10,

    headers: {
      "X-Mailin-custom":
        "custom_header_1:custom_value_1|custom_header_2:custom_value_2",
    },
  };
  return apiCall.sendTransacEmail(sendSmtpEmail);
};

module.exports = sendEmail;
