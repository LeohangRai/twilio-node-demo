## Getting Started
First, sign up for an account on *<a href="https://www.twilio.com/try-twilio" target="_blank" title="Twilio signup page">Twilio</a>*. For this, you will have to verify your **email** and **phone number**. 
On a Trial period account, the number that you register and verify with, will serve as your **To** phone number where all your trial **SMS**es will be sent to.
To get the **From** phone number, you will have to **Buy a phone number** from the Twilio *<a href="https://console.twilio.com/us1/develop/phone-numbers/manage" target="_blank" title="Twilio console">console</a>*.

*Don't worry when I say **Buy a phone number**. On a trial period account, you can **Buy** it for free. But obviously it won't allow you to send **SMS**es to custom numbers except the number that you registered your Twilio account with.*

### Credentials
After you have signed up and bought a trial phone number, you can look at all of your credentials on the Twilio console *<a href="https://console.twilio.com" target="_blank" title="Twilio console">here</a>*. You will require the following credentials:
- Account SID
- Auth Token
- Twilio Phone Number

The **Twilio Phone Number** here will serve as your **From** phone number.
For testing on a trial account, use the phone number that you used to register and verify your Twilio account as the **To** phone number.
For instance, on my **.env** file, I have set a **TEST_PHONE_NUMBER** variable, which will be the number that I have used to register and verify my Twilio account. On the other hand, the **TWILIO_PHONE_NUMBER** variable will serve as the **To** phone number.