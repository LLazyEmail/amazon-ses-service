/**
 * @description Create an Amazon email based on the SES spec
 * @param {object} task - The email to create
 * @param {object} campaignInfo - Information about this campaign
 * @return {object} Formatted email object
 */
const noonNotificationBanner = require('../../../../../hackernoon-template/noon-notification-banner');
// const sponsorTop = require('../../../../../hackernoon-template/sponsor-top');
const articles = require('../../../../../hackernoon-template/articles');
// const sponsorBottom = require('../../../../../hackernoon-template/sponsor-bottom');
const socialBlock = require('../../../../../hackernoon-template/social-block');
const footer = require('../../../../../hackernoon-template/footer');

module.exports = (task, campaignInfo) => {
  
  // Ref https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SES.html#sendEmail-property
  // const email = {
  //   Source: `"${campaignInfo.fromName}" <${campaignInfo.fromEmail}>`, // From email
  //   Destination: { // To email
  //     ToAddresses: [`<${task.email}>`] // Set name as follows https://docs.aws.amazon.com/ses/latest/DeveloperGuide/email-format.html
  //   },
  //   Message: {
  //     Body: {},
  //     Subject: { // Subject
  //       Data: campaignInfo.emailSubject
  //     }
  //   }
  // };

  let templateData = {
    name: "Vadim2",
    noonNotificationBanner,
    sponsorTop: campaignInfo.sponsor.sponsorTop,
    articles,
    sponsorBottom: campaignInfo.sponsor.sponsorBottom,
    socialBlock,
    footer
};
//   let templateData = {
//     favoriteanimal: "Dog",
//     name: "Vadim",
//     htmlList: 'OKList',
//     animal: "dog"
// };

  const email = {
    Source: `"${campaignInfo.fromName}" <${campaignInfo.fromEmail}>`, // From email
    Destination: { // To email
      ToAddresses: [`<${task.email}>`] // Set name as follows https://docs.aws.amazon.com/ses/latest/DeveloperGuide/email-format.html
    },
    // Message: {
    //   Body: {},
    //   Subject: { // Subject
    //     Data: campaignInfo.emailSubject
    //   }
    // }
  };

  if (campaignInfo.type === 'Plaintext') { // Send as plaintext if plaintext, else send as HTML (no other format concerns us)
    Object.assign(email.Message.Body, { Text: { Data: campaignInfo.emailBody } });
  } else {
    // Object.assign(email.Message.Body, { Html: { Data: campaignInfo.emailBody } });
    Object.assign(email, { 
      Template: 'HN9',
      TemplateData: JSON.stringify(templateData) 
    });
  }

  return { email, task };
};
