import React from 'react';
import CountUp from 'react-countup';
import Div from '../Div';
import { useInView } from 'react-intersection-observer';

export default function FunFact({ variant, title, subtitle, data }) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <Div
      className={variant ? `cs-funfact_wrap ${variant}` : 'cs-funfact_wrap'}
      ref={ref}
    >
      <Div
        className="cs-funfact_shape"
        style={{ backgroundImage: 'url(/images/funfact_shape_bg.svg)' }}
      />
      <Div className="cs-funfact_left">
        <Div className="cs-funfact_heading">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </Div>
      </Div>
      <Div className="cs-funfact_right">
        <Div className="cs-funfacts">
          {data.map((item, index) => (
            <Div className="cs-funfact cs-style1" key={index}>
              <Div
                className="cs-funfact_number cs-primary_font cs-semi_bold"
                style={{ color: '#FF4A17' }}
              >
                {inView ? (
                  <CountUp
                    start={0}
                    end={parseInt(item.factNumber)}
                    duration={3}
                    separator=","
                  />
                ) : (
                  '0'
                )}
                {item.factNumber.replace(/[0-9]/g, '')}
              </Div>
              <Div className="cs-funfact_text">
                <span className="cs-accent_color">+</span>
                <p>{item.title}</p>
              </Div>
            </Div>
          ))}
        </Div>
      </Div>
    </Div>
  );
}
