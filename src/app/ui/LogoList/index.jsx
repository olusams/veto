import React from 'react';
import Div from '../Div';

export default function LogoList() {
  const partnerLogos = [
    {
      src: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0OCIgZmlsbD0iI2Y4Nzg2ZCIgc3Ryb2tlPSIjZDA0ZTQ0IiBzdHJvazUtd2lkdGg9IjQiLz48cGF0aCBkPSJNMzAgMzBsNDAgNDBNNzAgMzBsLTQwIDQwIiBzdHJvazU9IiNmZmYiIHN0cm9rZS13aWR0aD0iOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9zdmc+',
      alt: 'Partner 1',
    },
    {
      src: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTAgMkM1MCAyIDI1IDQwIDUwIDQwQzc1IDQwIDUwIDIgNTAgMloiIGZpbGw9IiM2YTZjZTMiLz48cGF0aCBkPSJNMzUgNTBjMCAxNSAxNSAzMCAzMCAxNUwyMCA1MEwzNSA1MFoiIGZpbGw9IiNlOTRhM2MiLz48cGF0aCBkPSJNNjUgNTBjMCAtMTUgLTE1IC0zMCAtMzAgLTE1TDgwIDUwTDY1IDUwWiIgZmlsbD0iI2YyNzgyMSIvPjwvc3ZnPg==',
      alt: 'Partner 2',
    },
    {
      src: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0OCIgZmlsbD0iIzRDQUY1MCIgc3Ryb2tlPSIjMzg4RTNDIiBzdHJva2Utd2lkdGg9IjQiLz48cGF0aCBkPSJNMjUgNTAgTDQ1IDcwIEw3NSAzMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==',
      alt: 'Partner 3',
    },
    {
      src: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI1MCIgZmlsbD0iIzQ2YmM5NCIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjQwIiBmaWxsPSJub25lIiBzdHJvazU9IiNmZmYiIHN0cm9rZS13aWR0aD0iNCIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjMwIiBmaWxsPSIjZmY5ODAwIi8+PHBhdGggZD0iTTUwIDM1di0xNSIgc3Ryb2tlPSIjZmZmIiBzdHJvazUtd2lkdGg9IjQiLz48cGF0aCBkPSJNNTAgODB2LTE1IiBzdHJvazU9IiNmZmYiIHN0cm9rZS13aWR0aD0iNCIvPjxwYXRoIGQ9Ik02NSAxNWwxMCAtMTAiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSI0Ii8+PHBhdGggZD0iTTI1IDE1bC0xMCAxMCIgc3Ryb2tlPSIjZmZmIiBzdHJvazUtd2lkdGg9IjQiLz48L3N2Zz4=',
      alt: 'Partner 4',
    },
    {
      src: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTAgMEw2NSA0MEg5NUw3MiA2MEw4MiAxMDBMNTIgODBMICAyMCAxMDBMMzIgNjBMNSA0MEgzNUw1MCAwWiIgZmlsbD0iI0ZGRUIzQiIgc3Ryb2tlPSIjRkZDNTEwIiBzdHJvazUtd2lkdGg9IjQiLz48L3N2Zz4=',
      alt: 'Partner 5',
    },
    {
      src: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAyMEgxMDBWODBIOSIgb3BhY2l0eT0iMC42IiBmaWxsPSIjNEFDNkYyIi8+PHBhdGggZD0iTTIgMjJIMjk4Vjc4SDIiIG9wYWNpdHk9IjAuNiIgZmlsbD0iI0YwNkI2MSIvPjxwYXRoIGQ9Ik01MCAyMEw1MCA4MCIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJvazUtd2lkdGg9IjUiLz48cGF0aCBkPSJNMjAgNTBMODAgNTAiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSI1Ii8+PC9zdmc+',
      alt: 'Partner 6',
    },
  ];
  return (
    <Div className="cs-partner_logo_wrap">
      {partnerLogos.map((partnerLogo, index) => (
        <Div className="cs-partner_logo" key={index}>
          <img src={partnerLogo.src} alt={partnerLogo.alt} />
        </Div>
      ))}
    </Div>
  );
}
