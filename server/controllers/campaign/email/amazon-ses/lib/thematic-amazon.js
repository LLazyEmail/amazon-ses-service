/**
 * @description Create an Amazon email based on the SES spec
 * @param {object} task - The email to create
 * @param {object} campaignInfo - Information about this campaign
 * @return {object} Formatted email object
 */

const hackernoonLogo = require('../../../../../thematic-template/hackernoonLogo');
const content1 = require('../../../../../thematic-template/content1');
const content2 = require('../../../../../thematic-template/content2');
const footer = require('../../../../../thematic-template/footer');

module.exports = (task, campaignInfo) => {
  let templateData = {
    name: "Vadim2",
    hackernoonLogo,
    sponsorTop: campaignInfo.sponsor.sponsorTop,
    content1,
    content2,
    sponsorBottom: campaignInfo.sponsor.sponsorBottom,
    footer
  };

  const email = {
    Source: `"${campaignInfo.fromName}" <${campaignInfo.fromEmail}>`,
    Destination: {
      ToAddresses: [`<${task.email}>`]
    },
  };

  if (campaignInfo.type === 'Plaintext') {
    Object.assign(email.Message.Body, { Text: { Data: campaignInfo.emailBody } });
  } else {
    Object.assign(email, {
      Template: 'Thematic2',
      TemplateData: JSON.stringify(templateData)
    });
  }

  return { email, task };
};
