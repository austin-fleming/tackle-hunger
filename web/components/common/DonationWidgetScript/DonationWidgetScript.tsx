/* eslint react/no-danger: 0 */
import React from 'react';

export const DonationWidgetScript = () => (
  <script
    dangerouslySetInnerHTML={{
      __html: `!function (t, e) { var a = document.head, n = document.createElement("script"); n.type = "text/javascript", n.src = "https://widget.harnessapp.com/harness-widget-v2.js", n.onreadystatechange = e, n.onload = e, a.appendChild(n) }(0, function () { window.HarnessWidget.init({ charity_id: "90ebc42a47ac5f2779b7" }) });`,
    }}
  />
);
