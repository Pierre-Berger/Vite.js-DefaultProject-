const SibApiV3Sdk = require("sib-api-v3-sdk");

const defaultClient = SibApiV3Sdk.ApiClient.instance;

const apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.SENDMEBLUE_KEY;

const getContact = (id) => {
  const apiInstance = new SibApiV3Sdk.ContactsApi();

  const identifier = id;

  return apiInstance.getContactInfo(identifier);
};
module.exports = getContact;
