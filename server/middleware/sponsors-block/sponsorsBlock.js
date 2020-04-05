// var fs = require('fs');
// const path = require('path');
// let sponsorsBlock = fs.readFileSync(path.resolve(__dirname, './logo.html'), 'utf8')

// const readModuleFile = async(path, callback) => {
//     try {
//         var filename = require.resolve(path);
//        return await fs.readFile(filename, 'utf8', callback);
//     } catch (e) {
//         callback(e);
//     }
// }



// console.log(sponsors);

// return sponsors
// module.exports = { sponsorsBlock }
const leftBlockImage = `
<img
alt=""
src="https://gallery.mailchimp.com/b48b0ec2173fecf2586c00e80/images/ad16393c-6f52-441b-9951-0b45c61e543c.png"
width="282"
style="
  max-width: 671px;
  border: 0;
  height: auto;
  outline: none;
  text-decoration: none;
  -ms-interpolation-mode: bicubic;
  vertical-align: bottom;
"
class="mcnImage"
/>
`
const leftBlockLink = `<a
href="http://bit.ly/2NvQJPO"
title=""
class=""
target="_blank"
style="
  mso-line-height-rule: exactly;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
"
>`

module.exports = `
<table
  border="0"
  cellpadding="0"
  cellspacing="0"
  width="100%"
  class="mcnImageCardBlock"
  style="
    border-collapse: collapse;
    mso-table-lspace: 0pt;
    mso-table-rspace: 0pt;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  "
>
  <tbody class="mcnImageCardBlockOuter">
    <tr>
      <td
        class="mcnImageCardBlockInner"
        valign="top"
        style="
          padding-top: 9px;
          padding-right: 18px;
          padding-bottom: 9px;
          padding-left: 18px;
          mso-line-height-rule: exactly;
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
        "
      >
        <table
          border="0"
          cellpadding="0"
          cellspacing="0"
          class="mcnImageCardRightContentOuter"
          width="100%"
          style="
            border-collapse: collapse;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
          "
        >
          <tbody>
            <tr>
              <td
                align="center"
                valign="top"
                class="mcnImageCardRightContentInner"
                style="
                  padding: 0px;
                  background-color: #ffffff;
                  mso-line-height-rule: exactly;
                  -ms-text-size-adjust: 100%;
                  -webkit-text-size-adjust: 100%;
                "
              >
                <table
                  align="left"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="mcnImageCardRightImageContentContainer"
                  width="282"
                  style="
                    border-collapse: collapse;
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                    -ms-text-size-adjust: 100%;
                    -webkit-text-size-adjust: 100%;
                  "
                >
                  <tbody>
                    <tr>
                      <td
                        class="mcnImageCardRightImageContentE2E"
                        align="left"
                        valign="top"
                        style="
                          padding-top: 0px;
                          padding-right: 0;
                          padding-bottom: 0px;
                          padding-left: 0px;
                          mso-line-height-rule: exactly;
                          -ms-text-size-adjust: 100%;
                          -webkit-text-size-adjust: 100%;
                        "
                      >
                          ${leftBlockLink}
                          ${leftBlockImage}
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  class="mcnImageCardRightTextContentContainer"
                  align="right"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  width="264"
                  style="
                    border-collapse: collapse;
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                    -ms-text-size-adjust: 100%;
                    -webkit-text-size-adjust: 100%;
                  "
                >
                  <tbody>
                    <tr>
                      <td
                        valign="top"
                        class="mcnTextContent"
                        style="
                          padding-right: 18px;
                          padding-top: 18px;
                          padding-bottom: 18px;
                          color: #f2f2f2;
                          font-family: Helvetica;
                          font-size: 14px;
                          font-weight: normal;
                          line-height: 125%;
                          text-align: center;
                          mso-line-height-rule: exactly;
                          -ms-text-size-adjust: 100%;
                          -webkit-text-size-adjust: 100%;
                          word-break: break-word;
                        "
                      >
                        <h1
                          class="null"
                          style="
                            text-align: center;
                            display: block;
                            margin: 0;
                            padding: 0;
                            color: #202020;
                            font-family: 'Roboto', 'Helvetica Neue', Helvetica,
                              Arial, sans-serif;
                            font-size: 26px;
                            font-style: normal;
                            font-weight: bold;
                            line-height: 125%;
                            letter-spacing: normal;
                          "
                        >
                          <span style="font-size: 14px;"
                            ><strong
                              ><a
                                href="http://bit.ly/2NvQJPO"
                                target="_blank"
                                style="
                                  mso-line-height-rule: exactly;
                                  -ms-text-size-adjust: 100%;
                                  -webkit-text-size-adjust: 100%;
                                  color: #222222;
                                  font-weight: bold;
                                  text-decoration: underline;
                                "
                                >[Live Masterclass 21st Jan]</a
                              ><br />
                              <a
                                href="http://bit.ly/2NvQJPO"
                                target="_blank"
                                style="
                                  mso-line-height-rule: exactly;
                                  -ms-text-size-adjust: 100%;
                                  -webkit-text-size-adjust: 100%;
                                  color: #222222;
                                  font-weight: bold;
                                  text-decoration: underline;
                                "
                                >Building a Realtime Voting App</a
                              ></strong
                            ></span
                          >
                        </h1>

                        <h1
                          class="null"
                          style="
                            text-align: center;
                            display: block;
                            margin: 0;
                            padding: 0;
                            color: #202020;
                            font-family: 'Roboto', 'Helvetica Neue', Helvetica,
                              Arial, sans-serif;
                            font-size: 26px;
                            font-style: normal;
                            font-weight: bold;
                            line-height: 125%;
                            letter-spacing: normal;
                          "
                        >
                          <a
                            href="http://bit.ly/2NvQJPO"
                            target="_blank"
                            style="
                              mso-line-height-rule: exactly;
                              -ms-text-size-adjust: 100%;
                              -webkit-text-size-adjust: 100%;
                              color: #222222;
                              font-weight: bold;
                              text-decoration: underline;
                            "
                            ><span style="font-size: 14px;"
                              ><strong>Signup Today</strong></span
                            ></a
                          >
                        </h1>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>
`
