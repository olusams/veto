import React from 'react';
import Div from '../Div';

export default function LogoList() {
  const partnerLogos = [
    {
      src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBkPSJNMCAyNTZDNTEuMiAyNTYgOTYgMjE3LjMgOTYgMTYwIDk2IDExMiA1MS4yIDgwIDAgODBWMHowTTUxMiA4MGMtNTEuMiAwLTk2IDMyLTk2IDgwIDAgNTcuMyA0NC44IDk2IDk2IDk2VjgwWiIgZmlsbD0iIzYxYWM1NyIvPjxwYXRoIGQ9Ik05NiAxNjBjMCA0MS40LTMzLjYgNzUuMi03NSA3Ny45VjI1Nmg0NnYtNzdsNzUtMS44di03Ny45QzEyNC44IDIzLjIgOTYgNjcuMiA5NiAxMTJ2NDh6TTQxNiAxNjBjMCA0MS40IDMzLjYgNzUuMiA3NSA3Ny45VjI1Nkg0MDh2LTc3bC03NS0xLjh2LTc3LjlDNDEyLjggMjMuMiA0MTYgNjcuMiA0MTYgMTEydjQ4eiIgZmlsbD0iIzYxYWM1MyIvPjxwYXRoIGQ9Ik0yNTYgMzQ5LjljLTU2LjIgMC0xMDIuMSA0MS40LTEwNy40IDk0LjZoMjE0LjdjLTUuMy01My4yLTUxLjItOTQuNi0xMDcuMy05NC42eiIgZmlsbD0iI2Y4YTYxYiIvPjwvc3ZnPg==',
      alt: 'Barchester Healthcare',
      className: 'cs-partner_logo_large',
    },
    {
      src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBkPSJNMCAwaDUxMnY1MTJIMHoiIGZpbGw9IiMwMDkzZDAiLz48cGF0aCBkPSJNMzYwLjUgMzYwLjVoLTg1djg1aC00MC41di04NWgtODV2LTQwLjVoODV2LTg1aDQwLjV2ODVoODV6IiBmaWxsPSIjZmZmIi8+PC9zdmc+',
      alt: 'Kwik Fit',
      className: 'cs-partner_logo_large',
    },
    {
      src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2Ij48cGF0aCBkPSJNMjA4IDMySDQ4QzM5LjIgMzIgMzIgMzkuMiAzMiA0OHYxNjBjMCA4LjggNy4yIDE2IDE2IDE2aDE2MGM4LjggMCAxNi03LjIgMTYtMTZWNDhjMC04LjgtNy4yLTE2LTE2LTE2em0tNDAgODhoLTI0djI0YTE2IDE2IDAgMCAxLTMyIDB2LTI0SDg4YTE2IDE2IDAgMCAxIDAtMzJoMjR2LTI0YTE2IDE2IDAgMCAxIDMyIDB2MjRoMjRhMTYgMTYgMCAwIDEgMCAzMnoiIGZpbGw9IiMwMDVFRDAiLz48L3N2Zz4=',
      alt: 'NHS',
      className: 'cs-partner_logo_large',
    },
    {
      src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5NSA5NSI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTEyLjEgMTguMWg3MC44djU4LjZIMTIuMVoiLz48cGF0aCBmaWxsPSIjRjQyNjcyIiBkPSJNNjEuNSA2NS40aDEwLjhsLTMuMy0zLjhjLTIuMS0yLjQtMy40LTIuOS01LTIuOS0zLjUgMC02LjMgMi44LTYuMyA2LjNWNjVjLTYtMi4zLTkuOS03LjgtOS45LTE0LjQgMC04LjQgNi44LTE1LTIgMTUuMi0xNS4yaC0yLjhsLTIuNi0zLjEtLjItLjIgNS45LTguMyAyLjIgMi41YzEuMyAxLjUgMy4zIDIuNSA1LjQgMi41IDIuNyAwIDQuNy0xLjYgNS45LTMuMmwxLjktMi4ySDIyLjRsLS41IDIuMWMtMS4xIDQuOC01LjIgOC40LTEwLjIgOC40LTUuNSAwLTEwLjEtNC4yLTEwLjEtOS40VjE4LjFoNjYuOHYxOS44YzAgNS43LTUgMTAuMy0xMS4yIDEwLjNoLTguNmwxLjkgMi4yYzEuMyAxLjYgMy4yIDMuMiA1LjQgMy4yIDEuNyAwIDMuMS0uNSA1LjQtMi45bDEuOS0yLjRIMjIuNGwtMi43IDMuMWMtMi41IDIuOC01LjIgNS4yLTkuNiA1LjItNS4xIDAtOS4xLTMuMi0xMC42LTdsLTEuOC00LjloLTUuNnoiLz48L3N2Zz4=',
      alt: 'Revolution Bars',
      className: 'cs-partner_logo_large',
    },
    {
      src: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTAgMEw2NSA0MEg5NUw3MiA2MEw4MiAxMDBMNTIgODBMICAyMCAxMDBMMzIgNjBMNSA0MEgzNUw1MCAwWiIgZmlsbD0iI0ZGRUIzQiIgc3Ryb2tlPSIjRkZDNTEwIiBzdHJvazUtd2lkdGg9IjQiLz48L3N2Zz4=',
      alt: 'Partner 5',
      className: 'cs-partner_logo_large',
    },
    {
      src: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAyMEgxMDBWODBIOSIgb3BhY2l0eT0iMC42IiBmaWxsPSIjNEFDNkYyIi8+PHBhdGggZD0iTTIgMjJIMjk4Vjc4SDIiIG9wYWNpdHk9IjAuNiIgZmlsbD0iI0YwNkI2MSIvPjxwYXRoIGQ9Ik01MCAyMEw1MCA4MCIgc3Ryb2tlPSIjRkZGRkZGRiIgc3Ryb2tlLXdpZHRoPSI1Ii8+PHBhdGggZD0iTTIgMjBMODAgNTAiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSI1Ii8+PC9zdmc+',
      alt: 'Partner 6',
    },
  ];
  return (
    <Div className="cs-partner_logo_wrap">
      {partnerLogos.map((partnerLogo, index) => (
        <Div
          className={`cs-partner_logo ${partnerLogo.className || ''}`}
          key={index}
        >
          <img src={partnerLogo.src} alt={partnerLogo.alt} />
        </Div>
      ))}
    </Div>
  );
}
