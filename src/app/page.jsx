'use client';
import { useState } from 'react';
import Image from "next/image";
import { Icon } from "@iconify/react";
import dynamic from 'next/dynamic';

import Cta from '@/app/ui/Cta';
import Div from '@/app/ui/Div';
import FunFact from '@/app/ui/FunFact';
import Hero from '@/app/ui/Hero';
import SectionHeading from '@/app/ui/SectionHeading';
import Spacing from '@/app/ui/Spacing';
import Card from './ui/Card';
import PricingTableList from "@/app/ui/PricingTable/PricingTableList";
import Sidebar from "@/app/ui/Sidebar.jsx/index.jsx";
import ContactInfoWidget from "@/app/ui/Widget/ContactInfoWidget";
import Portfolio from "@/app/ui/Portfolio";
import Pagination from "@/app/ui/Pagination";
import PostStyle2 from "@/app/ui/Post/PostStyle2";
import VideoModal from "@/app/ui/VideoModal";
import LogoList from "@/app/ui/LogoList";
import MovingText from "@/app/ui/MovingText";

const TeamSlider = dynamic(() => import('@/app/ui/Slider/TeamSlider'), { ssr: false });
const PortfolioSlider = dynamic(() => import('@/app/ui/Slider/PortfolioSlider'), { ssr: false });
const TestimonialSlider = dynamic(() => import('@/app/ui/Slider/TestimonialSlider'), { ssr: false });
import aboutImg from '../../public/images/about_img_1.jpeg'
import aboutImg2 from '../../public/images/about_img_2.jpeg'
import aboutImg3 from '../../public/images/about_img_3.jpeg'
import aboutImg4 from '../../public/images/about_img_4.jpeg'


// Hero Social Links
const heroSocialLinks = [
  {
    name: 'Facebook',
    links: 'https://www.facebook.com/people/Remlyx/100069426878077/',
  },
  {
    name: 'Behance',
    links: '/',
  },
  {
    name: 'Twitter',
    links: '/',
  },
  {
    name: 'Tiktok',
    links: 'https://www.tiktok.com/@remlyxwebdesign',
  },
];
// FunFact Data
const funfaceData = [
  {
    title: 'Affordable Projects',
    factNumber: '500+',
  },
  {
    title: 'Local Leeds Clients',
    factNumber: '98%',
  },
  {
    title: 'Years In Business',
    factNumber: '12+',
  },
  {
    title: 'Client ROI',
    factNumber: '33x',
  },
];
// Portfolio Data
const portfolioData = [
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_4.jpeg',
    category: 'ui_ux_design',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_5.jpeg',
    category: 'logo_design',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_6.jpeg',
    category: 'web_design',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_7.jpeg',
    category: 'mobile_apps',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_8.jpeg',
    category: 'ui_ux_design',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_9.jpeg',
    category: 'web_design',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_10.jpeg',
    category: 'logo_design',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_4.jpeg',
    category: 'ui_ux_design',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_5.jpeg',
    category: 'logo_design',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_6.jpeg',
    category: 'web_design',
  },
];
const categoryMenu = [
  {
    title: 'Web Design',
    category: 'web_design',
  },
  {
    title: 'UI/UX Design',
    category: 'ui_ux_design',
  },
  {
    title: 'Mobile Apps',
    category: 'mobile_apps',
  },
  {
    title: 'Logo Design',
    category: 'logo_design',
  },
];

const postData = [
  {
    thumb: '/images/post_4.jpeg',
    title: 'A.I will take all human job within next year',
    subtitle:
      'Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Tortor posuere ac ut consequat semper viverra nam libero justo. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Purus sit amet luctus venenatis lectus. Nunc aliquet bibendum enim facilisis. Pretium viverra suspendisse potenti nullam ac tortor vitae.',
    date: '07 Mar 2022',
    category: 'Tech',
    categoryHref: '/blog',
    href: '/blog/blog-details',
  },
  {
    thumb: '/images/post_5.jpeg',
    title: 'Creative studio programm coming soon',
    subtitle:
      'Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Tortor posuere ac ut consequat semper viverra nam libero justo. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Purus sit amet luctus venenatis lectus. Nunc aliquet bibendum enim facilisis. Pretium viverra suspendisse potenti nullam ac tortor vitae.',
    date: '05 Mar 2022',
    category: 'Photography',
    categoryHref: '/blog',
    href: '/blog/blog-details',
  },
  {
    thumb: '/images/post_6.jpeg',
    title: 'Artistic mind will be great for creation',
    subtitle:
      'Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Tortor posuere ac ut consequat semper viverra nam libero justo. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Purus sit amet luctus venenatis lectus. Nunc aliquet bibendum enim facilisis. Pretium viverra suspendisse potenti nullam ac tortor vitae.',
    date: '04 Mar 2022',
    category: 'Tech',
    categoryHref: '/blog',
    href: '/blog/blog-details',
  },
];


export default function Home() {
  const [active, setActive] = useState('all');
  const [itemShow, setItemShow] = useState(7);
  return (
    <>
      {/* Start Hero Section */}
      <Hero
        title="Expert Web Designer & Developer in Leeds"
        subtitle="Creating professional, high-performance websites for businesses across West Yorkshire. Let's build your online presence together."
        btnText="Get a Free Quote"
        btnLink="/contact"
        scrollDownId="#service"
        socialLinksHeading="Follow Us"
        heroSocialLinks={heroSocialLinks}
        bgImageUrl="/images/hero_bg.jpeg"
      />
      {/* End Hero Section */}

      {/* Start FunFact Section */}
      <section className="cs-funfact_section_bg">
        <div className="cs-funfact_overlay" />
        <div className="container">
          <FunFact
            variant="cs-type1"
            title="Proven Results"
            subtitle="We merge creative innovation with technical mastery to build captivating digital experiences that convert. Our track record speaks for itself."
            data={funfaceData}
          />
        </div>
      </section>
      {/* End FunFact Section */}

      {/* Start Video Block Section */}
      <Spacing lg="130" md="70" />
      <Div className="container">
        <SectionHeading
          title="Featured Video"
          subtitle="Our latest work"
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
        <VideoModal
          videoSrc="https://www.facebook.com/reel/626618556185236"
          bgUrl="/images/video_bg.jpeg"
        />
      </Div>
      {/* End Video Block Section */}

      {/* Start Testimonial Section */}
      <TestimonialSlider />
      {/* End Testimonial Section */}

      {/* Start Portfolio Section */}
      <Spacing lg="150" md="50" />
      <Div id="works">
        <Div className="container">
          <SectionHeading
            title="Featured Projects"
            subtitle="Our Work"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
        </Div>
        <Div>
          <PortfolioSlider data={portfolioData} />
        </Div>
      </Div>
      {/* End Portfolio Section */}

      {/* Start Partners Section */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Our Trusted Partners"
          variant="cs-style1 text-center"
        />
        <Spacing lg="70" md="45" />
        <LogoList
          partnerLogos={[
            {
              src: '/images/partners/1.svg',
              alt: 'Partner',
              name: 'Vertex Solutions',
              hue: '170',
            },
            {
              src: '/images/partners/2.svg',
              alt: 'Partner',
              name: 'Quantum Core',
              hue: '220',
            },
            {
              src: '/images/partners/3.svg',
              alt: 'Partner',
              name: 'Stellar Dynamics',
              hue: '280',
            },
            {
              src: '/images/partners/4.svg',
              alt: 'Partner',
              name: 'Apex Innovations',
              hue: '340',
            },
            {
              src: '/images/partners/5.svg',
              alt: 'Partner',
              name: 'Nexus Enterprises',
              hue: '40',
            },
            {
              src: '/images/partners/6.svg',
              alt: 'Partner',
              name: 'Synergy Group',
              hue: '90',
            },
          ]}
        />
      </Div>
      <Spacing lg="150" md="80" />
      {/* End Partners Section */}

      {/* Start Service Section */}
      <Div id="service">
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Our Expertise, Your Advantage"
                subtitle="What We Do"
                btnText="See All Services"
                btnLink="/service"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-8">
              <Div className="row">
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Bespoke Web Development"
                    link="/service/service-details"
                    src="/images/service_1.jpeg"
                    alt="Bespoke Web Development Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Mobile App Development"
                    link="/service/service-details"
                    src="/images/service_2.jpeg"
                    alt="Mobile App Development Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="SEO & Digital Solutions"
                    link="/service/service-details"
                    src="/images/service_3.jpeg"
                    alt="SEO & Digital Solutions Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Ongoing Support"
                    link="/service/service-details"
                    src="/images/service_4.jpeg"
                    alt="Ongoing Support Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Service Section */}

      {/* Start Google Reviews Section */}
      <Spacing lg="125" md="70" />
      <Div className="container">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Testimonials"
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
        <div
          className="elfsight-app-a7f38c29-1348-4975-b4ea-910ba8890229"
          data-elfsight-app-lazy
        ></div>
      </Div>
      <Spacing lg="125" md="70" />
      {/* End Google Reviews Section */}

      {/* Start CTA Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Cta
          title="Ready to Start Your Project?"
          btnText="Get a Free Quote"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
