'use client'
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import Portfolio from "@/app/ui/Portfolio";
import Spacing from "@/app/ui/Spacing";
import { useState } from "react";

const portfolioData = [
  {
    title: 'Drive Pro',
    subtitle: 'Web Design',
    href: 'https://elegant-marzipan-58ed22.netlify.app/',
    src: '/images/1.jpg',
    category: 'design',
  },
  {
    title: 'Oakfusion',
    subtitle: 'Design',
    href: '/portfolio/portfolio-details',
    src: '/images/2.jpg',
    category: 'design',
  },
  {
    title: 'Ride & Travel',
    subtitle: 'Photo',
    href: '/portfolio/portfolio-details',
    src: '/images/3.jpg',
    category: 'photo',
  },
  {
    title: 'Logo',
    subtitle: 'Design',
    href: '/portfolio/portfolio-details',
    src: '/images/4.jpg',
    category: 'design',
  },
  {
    title: 'Renner',
    subtitle: 'Design',
    href: 'https://grand-cucurucho-5b21cd.netlify.app/',
    src: '/images/5.jpg',
    category: 'design',
  },
  {
    title: '2kul Interior Design',
    subtitle: 'Branding',
    href: 'https://elegant-marzipan-58ed22.netlify.app/',
    src: '/images/6.jpg',
    category: 'branding',
  },
  {
    title: 'Typografia',
    subtitle: 'Photo',
    href: 'https://lighthearted-frangollo-a7a4ad.netlify.app/',
    src: '/images/7.jpg',
    category: 'photo',
  },
  {
    title: 'Designer Portfolio',
    subtitle: 'Design',
    href: 'https://rad-alpaca-149937.netlify.app/',
    src: '/images/8.jpg',
    category: 'design',
  },
  {
    title: 'Barber Shop',
    subtitle: 'Web Design',
    href: 'https://subtle-gumdrop-0e64a3.netlify.app/',
    src: '/images/barb.jpg',
    category: 'design',
  },
  {
    title: 'Shifting Perspective',
    subtitle: 'Branding',
    href: '/portfolio/portfolio-details',
    src: '/images/9.jpg',
    category: 'branding',
  },
];
const categoryMenu = [
  {
    title: 'Branding',
    category: 'branding',
  },
  {
    title: 'Design',
    category: 'design',
  },
  {
    title: 'Photo',
    category: 'photo',
  },
];

export default function PortfolioPage() {
  const [active, setActive] = useState('all');
  const [itemShow, setItemShow] = useState(9);

  return (
    <>
      <PageHeading
        title="Works"
        bgSrc="/images/portfolio_hero_bg.jpeg"
        pageLinkText="Works"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <Div className="cs-portfolio_1_heading">
          <Div className="cs-filter_menu cs-style1">
            <ul className="cs-mp0 cs-center">
              <li className={active === 'all' ? 'active' : ''}>
                <span onClick={() => setActive('all')}>All</span>
              </li>
              {categoryMenu.map((item, index) => (
                <li
                  className={active === item.category ? 'active' : ''}
                  key={index}
                >
                  <span onClick={() => setActive(item.category)}>
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </Div>
        </Div>
        <Spacing lg="90" md="45" />
        <Div className="row">
          {portfolioData.slice(0, itemShow).map((item, index) => (
            <Div
              className={`col-lg-4 ${
                active === 'all'
                  ? ''
                  : !(active === item.category)
                  ? 'd-none'
                  : ''
              }`}
              key={index}
            >
              <Portfolio
                title={item.title}
                subtitle={item.subtitle}
                href={item.href}
                src={item.src}
                variant="cs-style1 cs-type1"
              />
              <Spacing lg="25" md="25" />
            </Div>
          ))}
        </Div>

        <Div className="text-center">
        </Div>
      </Div>
      <Spacing lg="145" md="80" />
    </>
  );
}
