import React from 'react';
import Div from '../Div';

export default function LogoList() {
  const partnerLogos = [
    {
      src: 'https://images.ctfassets.net/q5wk6pg6od92/1c4d1f73f31945672223c837452296e3/deliveroo-logo-2x.png',
      alt: 'Deliveroo'
    },
    {
      src: 'https://s3-eu-west-1.amazonaws.com/tpd/logos/5d94726440594a00018487cb/0x0.png',
      alt: 'Cazoo'
    },
    {
      src: 'https://images.ctfassets.net/q5wk6pg6od92/681781b2123e4ab2103328d203f19137/pawfect-match-logo-2x.png',
      alt: 'Pawfect Match'
    },
    {
      src: 'https://images.ctfassets.net/q5wk6od92/4730646067b551b32f10b709564e4393/goodbox-logo-2x.png',
      alt: 'GoodBox'
    },
    {
      src: 'https://images.ctfassets.net/q5wk6pg6od92/a2a95c8687259f310f84ad1f269da59a/city-pantry-logo-2x.png',
      alt: 'City Pantry'
    },
    {
      src: 'https://images.ctfassets.net/q5wk6pg6od92/4d3e2365e9334c2ae2b15a201b17d332/h4-logo-2x.png',
      alt: 'H4'
    }
  ];
  return (
    <Div className="cs-partner_logo_wrap">
      {partnerLogos.map((partnerLogo, index) => (
        <Div className="cs-partner_logo" key={index}>
          <img
            src={partnerLogo.src}
            alt={partnerLogo.alt}
            style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
          />
        </Div>
      ))}
    </Div>
  );
}
