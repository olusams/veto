import React from 'react';
import Div from '../Div';

export default function LogoList({partnerLogos = []}) {
  return (
    <Div className="cs-partner_logo_wrap">
      {partnerLogos.map((partnerLogo, index) => (
        <Div
          className={`cs-partner_logo ${partnerLogo.className || ''}`}
          key={index}
        >
          <img
            src={partnerLogo.src}
            alt={partnerLogo.alt}
            style={{
              filter: `invert(40%) sepia(90%) saturate(1400%) hue-rotate(${
                partnerLogo.hue || 180
              }deg)`,
            }}
          />
          {partnerLogo.name && (
            <span className="cs-partner_logo_name">{partnerLogo.name}</span>
          )}
        </Div>
      ))}
    </Div>
  );
}
