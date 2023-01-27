require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
const testPhoneNumber = process.env.TEST_PHONE_NUMBER;
const client = require("twilio")(accountSid, authToken);

async function sendSMS() {
  try {
    const message = await client.messages.create({
      body: "I'm Mr. Meeseeks, look at me!",
      to: testPhoneNumber,
      from: twilioPhoneNumber
    });
    console.log("Message response:\n", message);
  } catch (error) {
    console.log("Error:\n", error);
  }
}

sendSMS();
