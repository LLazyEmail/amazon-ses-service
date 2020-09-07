let articles = ``;

let article = `<h2
class="mc-toc-title"
style="
  display: block;
  margin: 0;
  padding: 0;
  color: #202020;
  font-family: Helvetica;
  font-size: 22px;
  font-style: normal;
  font-weight: bold;
  line-height: 125%;
  letter-spacing: normal;
  text-align: left;
"
>
<span style="font-size: 22px;"
  ><a
    href="https://hackernoon.com/wth-is-ipfs-interplanetary-file-systems-to-rescue-the-internet-kt1u3xzf?source=rss"
    target="_blank"
    style="
      mso-line-height-rule: exactly;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
      color: #222222;
      font-weight: bold;
      text-decoration: underline;
    "
    >WTH is IPFS? InterPlanetary File
    Systems To Rescue The Internet</a
  ></span
>
</h2>
<span style="font-size: 11px;"
><em>By Alyze Sam&nbsp;</em></span
><br />
Introduced in February 2015, TechCrunch
Magazine noted IPFS was  “quickly spreading by
word of mouth.”
<p>
<a
  href="https://hackernoon.com/wth-is-ipfs-interplanetary-file-systems-to-rescue-the-internet-kt1u3xzf?source=rss"
  >Read the full story</a
>
</p>
<pre><span style="font-size:18px">&nbsp;</span></pre>
`

for(let i=0; i < 5; i++){
  // articles += `Date: ${new Date()} ${i}# ${article}`;
  articles += `${article}`;
}

let articlesBlock = `<table
border="0"
cellpadding="0"
cellspacing="0"
width="100%"
class="mcnTextBlock"
style="
  min-width: 100%;
  border-collapse: collapse;
  mso-table-lspace: 0pt;
  mso-table-rspace: 0pt;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
"
>
<tbody class="mcnTextBlockOuter">
  <tr>
    <td
      valign="top"
      class="mcnTextBlockInner"
      style="
        padding-top: 9px;
        mso-line-height-rule: exactly;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      "
    >
      <!--[if mso]>
<table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
<tr>
<![endif]-->
      <!--[if mso]>
<td valign="top" width="NaN" style="width:NaNpx;">
<![endif]-->
      <table
        align="left"
        border="0"
        cellpadding="0"
        cellspacing="0"
        style="
          max-width: 100%;
          min-width: 100%;
          border-collapse: collapse;
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
        "
        width="100%"
        class="mcnTextContentContainer"
      >
        <tbody>
          <tr>
            <td
              valign="top"
              class="mcnTextContent"
              style="
                padding: 0px 18px 9px;
                font-family: 'Helvetica Neue', Helvetica,
                  Arial, Verdana, sans-serif;
                font-size: 18px;
                line-height: 100%;
                mso-line-height-rule: exactly;
                -ms-text-size-adjust: 100%;
                -webkit-text-size-adjust: 100%;
                word-break: break-word;
                color: #202020;
                text-align: left;
              "
            >
              <br />
              ${articles}
            </td>
          </tr>
        </tbody>
      </table>
      <!--[if mso]>
</td>
<![endif]-->
      <!--[if mso]>
</tr>
</table>
<![endif]-->
    </td>
  </tr>
</tbody>
</table>`;

module.exports = articlesBlock;