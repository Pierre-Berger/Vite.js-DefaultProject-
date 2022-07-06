const SibApiV3Sdk = require("sib-api-v3-sdk");

const defaultClient = SibApiV3Sdk.ApiClient.instance;

const apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.SENDMEBLUE_KEY;

const creatingContact = (email) => {
  const apiInstance = new SibApiV3Sdk.ContactsApi();
  const createContact = new SibApiV3Sdk.CreateContact();

  createContact.email = email;
  createContact.listIds = [4];

  return apiInstance.createContact(createContact);
};
module.exports = creatingContact;
