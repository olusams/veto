'use client'
import Card from "../ui/Card";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import PricingTableList from "@/app/ui/PricingTable/PricingTableList";
import SectionHeading from "@/app/ui/SectionHeading";
import TestimonialSlider from "@/app/ui/Slider/TestimonialSlider";
import Spacing from "@/app/ui/Spacing";

export default function ServicesPage() {
  return (
    <>
      <PageHeading 
        title='Our Services'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText='Services'
      />
      <Spacing lg='150' md='80'/>
      <Div className='cs-shape_wrap_4'>
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title='Web Design in West Yorkshire' 
                subtitle='Our Services'
              />
              <Spacing lg='90' md='45'/>
            </Div>
            <Div className='col-xl-8'>
              <Div className='row'>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6'>
                  <Card
                    title='Bespoke Web Design'
                    link='/service/service-details'
                    src='/images/service_1.jpeg'
                    alt='Bespoke Web Design for Leeds Businesses'
                  />
                  <Spacing lg='0' md='30'/>
                </Div>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6'>
                  <Card
                    title='Mobile App Development'
                    link='/service/service-details'
                    src='/images/service_2.jpeg'
                    alt='Mobile App Development for West Yorkshire'
                  />
                  <Spacing lg='0' md='30'/>
                </Div>
                <Div className='col-lg-3 col-sm-6'>
                  <Card
                    title='SEO for West Yorkshire'
                    link='/service/service-details'
                    src='/images/service_3.jpeg'
                    alt='SEO for businesses in West Yorkshire'
                  />
                  <Spacing lg='0' md='30'/>
                </Div>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6'>
                  <Card
                    title='Support & Maintenance'
                    link='/service/service-details'
                    src='/images/service_4.jpeg'
                    alt='Website Support and Maintenance'
                  />
                  <Spacing lg='0' md='30'/>
                </Div>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6'>
                  <Card
                    title='E-commerce for Small Business'
                    link='/service/service-details'
                    src='/images/service_5.jpeg'
                    alt='E-commerce solutions for small businesses'
                  />
                  <Spacing lg='0' md='30'/>
                </Div>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6'>
                  <Card
                    title='UI/UX Design for Startups'
                    link='/service/service-details'
                    src='/images/service_6.jpeg'
                    alt='UI/UX Design for Startups'
                  />
                  <Spacing lg='0' md='30'/>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <SectionHeading
          title='Transparent Pricing for Exceptional Value' 
          subtitle='Pricing & Packaging'
        />
        <Spacing lg='85' md='40'/>
        <PricingTableList/>
      </Div>
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Cta 
          title="Let's Build Something Remarkable Together"
          btnText='Get a Free Quote'
          btnLink='/contact'
          bgSrc='/images/funfact_bg.jpeg'
        />
      </Div>
    </>
  )
}
