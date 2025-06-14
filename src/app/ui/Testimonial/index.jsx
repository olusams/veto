import React from 'react';
import { Icon } from '@iconify/react';
import Div from '../Div';

export default function Testimonial({
  testimonialText,
  avatarName,
  avatarDesignation,
  ratings,
}) {
  return (
    <Div className="cs-testimonial cs-style1">
      <Div className="cs-testimonial_quote">
        <Icon icon="fa:quote-left" />
      </Div>
      <Div className="cs-testimonial_text">{testimonialText}</Div>
      <Div className="cs-rating cs-style1">
        {[...Array(5)].map((_, index) => (
          <Icon icon="fa6-solid:star" key={index} />
        ))}
      </Div>
      <h2 className="cs-testimonial_avatar_name">{avatarName}</h2>
      <Div className="cs-testimonial_avatar_designation text-uppercase">
        {avatarDesignation}
      </Div>
    </Div>
  );
}
