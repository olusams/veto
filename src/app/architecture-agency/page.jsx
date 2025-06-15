'use client';
import Div from '@/app/ui/Div';
import FunFact from '@/app/ui/FunFact';
import GalleryStyle2 from '@/app/ui/Gallery/GalleryStyle2';
import Hero9 from '@/app/ui/Hero/Hero9';
import IconBoxStyle2 from '@/app/ui/IconBox/IconBoxStyle2';
import LogoList from '@/app/ui/LogoList';
import MovingText from '@/app/ui/MovingText';
import SectionHeading from '@/app/ui/SectionHeading';
import PortfolioSlider from '@/app/ui/Slider/PortfolioSlider';
import TeamSlider from '@/app/ui/Slider/TeamSlider';
import TestimonialSliderStyle2 from '@/app/ui/Slider/TestimonialSliderStyle2';
import Spacing from '@/app/ui/Spacing';
import ContactInfoWidget from '@/app/ui/Widget/ContactInfoWidget';
import { Icon } from '@iconify/react';

const funfaceData = [
  {
    title: 'Global Happy Clients',
    factNumber: '40K',
  },
  {
    title: 'Project Completed',
    factNumber: '50K',
  },
  {
    title: 'Team Members',
    factNumber: '245',
  },
  {
    title: 'Digital products',
    factNumber: '550',
  },
];
const portfolioData = [
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_45.jpeg',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_46.jpeg',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_1.jpeg',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_47.jpeg',
  },
];

export default function ArchitectureAgencyHome() {
  return (
    <>
      <Hero9
        title="Where Vision Meets Digital Excellence."
        subtitle="We are a Leeds-based web development agency, crafting bespoke digital solutions that elevate your brand and drive measurable results. From intuitive design to powerful code, we bring your vision to life."
        btnLink="/about"
        btnText="Learn More"
        bgImageUrl="/images/hero_bg_6.jpeg"
        spiningCircleUrl="/images/hero_img_6.svg"
        videoSrc="https://www.youtube.com/watch?v=VcaAVWtP48A"
      />
      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-7">
            <SectionHeading
              title="A trusted partner for your digital journey"
              subtitle="About Our Agency"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
              At our core, we are a team of passionate creators, strategists, and innovators. We believe in building partnerships, not just projects. Our collaborative approach ensures that we understand your unique business challenges and deliver solutions that are not only visually stunning but also strategically sound and engineered for success.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-xl-2">
            <img
              src="/images/about_img_6.jpeg"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-7">
            <img
              src="/images/about_img_7.jpeg"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-5">
            <img
              src="/images/about_img_8.jpeg"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
        </Div>
      </Div>
      <Spacing lg="75" md="55" />
      {/* End About Section */}
      {/* Start Service Section */}
      <section className="cs-shape_wrap_4 cs-parallax">
        <div className="cs-shape_4 cs-to_up" />
        <div className="cs-shape_4 cs-to_right" />
        <div className="cs-height_50 cs-height_lg_50" />
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-xl-4">
              <SectionHeading
                title="Our Comprehensive Web Solutions"
                subtitle="Services"
                btnLink="/service"
                btnText="See All Services"
              />
              <Spacing lg="45" md="45" />
            </div>
            <div className="col-lg-7 offset-xl-1">
              <div className="cs-iconbox_4_wrap">
                <IconBoxStyle2
                  title="Web & App Development"
                  subTitle="We build high-performance, scalable websites and applications tailored to your specific business needs, ensuring a seamless user experience across all devices."
                  iconUrl="/images/icons/service_icon_4.svg"
                  btnLink="/service"
                  btnText="Learn More"
                />
                <IconBoxStyle2
                  title="UI/UX & Branding"
                  subTitle="Our design team creates intuitive interfaces and compelling brand identities that captivate your audience and elevate your digital presence."
                  iconUrl="/images/icons/service_icon_5.svg"
                  btnLink="/service"
                  btnText="Learn More"
                />
                <IconBoxStyle2
                  title="E-commerce Solutions"
                  subTitle="We deliver robust e-commerce platforms that drive sales, with a focus on user experience, security, and seamless payment integrations."
                  iconUrl="/images/icons/service_icon_6.svg"
                  btnLink="/service"
                  btnText="Learn More"
                />
                <IconBoxStyle2
                  title="AI & Automation"
                  subTitle="Leverage the power of AI to automate processes, gain valuable insights, and create intelligent solutions that give you a competitive advantage."
                  iconUrl="/images/icons/service_icon_7.svg"
                  btnLink="/service"
                  btnText="Learn More"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="cs-height_145 cs-height_lg_75" />
      </section>
      {/* End Service Section */}
      <section
        className="cs-bg"
        style={{ backgroundImage: 'url(/images/funfact_bg.jpeg)' }}
      >
        <div className="container">
          <FunFact
            variant="cs-type2"
            title="Our Fun Facts"
            subtitle="We are proud of our journey and the milestones we have achieved. Here's a glimpse into our story, reflected in the numbers that define our commitment to excellence and innovation."
            data={funfaceData}
          />
        </div>
      </section>
      {/* Start Portfolio Section */}
      <Spacing lg="150" md="50" />
      <Div>
        <Div className="container">
          <SectionHeading
            title="Portfolio to explore"
            subtitle="Latest Projects"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
        </Div>
        <PortfolioSlider data={portfolioData} />
      </Div>
      {/* End Portfolio Section */}
      {/* Start Team Section */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Awesome team <br/>members"
          subtitle="Our Team"
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider />
      </Div>
      <Spacing lg="150" md="80" />
      {/* End Team Section */}
      {/* Start Testimonial Section */}
      <TestimonialSliderStyle2 />
      {/* End Testimonial Section */}
      {/* Start Contact Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title="Have a project in mind? <br/>Let's talk."
              subtitle="Getting Touch"
            />
            <Spacing lg="55" md="30" />
            <ContactInfoWidget withIcon />
            <Spacing lg="0" md="50" />
          </Div>
          <Div className="col-lg-6">
            <form action="#" className="row">
              <Div className="col-sm-6">
                <label className="cs-primary_color">Full Name*</label>
                <input type="text" className="cs-form_field" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Email*</label>
                <input type="text" className="cs-form_field" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Project Type*</label>
                <input type="text" className="cs-form_field" placeholder="e.g., Web Design" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Mobile*</label>
                <input type="text" className="cs-form_field" placeholder="+1 (123) 456-7890" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-12">
                <label className="cs-primary_color">Mobile*</label>
                <textarea
                  cols="30"
                  rows="7"
                  className="cs-form_field"
                ></textarea>
                <Spacing lg="25" md="25" />
              </Div>
              <Div className="col-sm-12">
                <button className="cs-btn cs-style1">
                  <span>Send Message</span>
                  <Icon icon="bi:arrow-right" />
                </button>
              </Div>
            </form>
          </Div>
        </Div>
      </Div>
      <Spacing lg="125" md="55" />
      {/* End Contact Section */}
      {/* Start MovingText Section */}
      <MovingText text="Our reputed world wide partners" />
      <Spacing lg="105" md="70" />
      {/* End MovingText Section */}
      {/* Start LogoList Section */}
      <Div className="container">
        <LogoList partnerLogos={[
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
        ]} />
      </Div>
      {/* End LogoList Section */}
      {/* Start Gallery Section */}
      <GalleryStyle2 />
      {/* End Gallery Section */}
    </>
  );
}
