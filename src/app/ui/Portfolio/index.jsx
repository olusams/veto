import React from 'react';
import Link from 'next/link';
import Div from '../Div';
import Image from 'next/image';

export default function Portfolio({ href, src, title, subtitle, variant }) {
  return (
    <Link
      href={href}
      className={`cs-portfolio cs-bg ${variant ? variant : 'cs-style1'}`}
    >
      <Image
        src={src}
        alt="Portfolio"
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="cs-portfolio_bg cs-bg"
        style={{ objectFit: 'cover' }}
      />
      <Div className="cs-portfolio_info">
        <h2 className="cs-portfolio_title">{title}</h2>
        <Div className="cs-portfolio_subtitle">{subtitle}</Div>
      </Div>
    </Link>
  );
}
