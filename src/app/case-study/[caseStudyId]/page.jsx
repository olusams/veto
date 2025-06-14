'use client'
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import Image from "next/image";
import imgUrl from '../../../../public/images/case_study_img_1.jpeg'

export default function CaseStudyDetailsPage() {
  return (
    <>
      <PageHeading
        title="Case Study: Remlyx"
        bgSrc="/images/contact_hero_bg.jpeg"
        pageLinkText="Remlyx Case Study"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Transforming Logistics with an AI-Powered Platform"
          subtitle="Web Application Development"
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
        <Image
          src={imgUrl}
          alt="Thumb"
          className="w-100 cs-radius_15"
          placeholder="blur"
        />
        <Spacing lg="140" md="80" />
        <h2 className="cs-font_38 text-center">Case Study Overview</h2>
        <Spacing lg="60" md="45" />
        <p className="cs-m0">
        Remlyx, a forward-thinking logistics company, approached us with a challenge: to overhaul their outdated, manual-based scheduling system. They envisioned a centralized, AI-driven platform that could optimize routes, predict delivery times, and provide real-time tracking to their clients. Our mission was to design and develop a robust web application that would not only meet these requirements but also provide a seamless, intuitive experience for both their internal team and their customers.
        </p>
        <Spacing lg="65" md="45" />
        <Div className="row">
          <Div className="col-sm-6">
            <img
              src="/images/case_study_img_2.jpeg"
              alt="Thumb"
              className="w-100 cs-radius_5"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-sm-6">
            <img
              src="/images/case_study_img_3.jpeg"
              alt="Thumb"
              className="w-100 cs-radius_5"
            />
            <Spacing lg="25" md="25" />
          </Div>
        </Div>
        <Spacing lg="125" md="55" />
      </Div>
      <Div className="cs-gradient_bg_1 cs-shape_wrap_6">
        <Div className="cs-shape_2"></Div>
        <Div className="cs-shape_2"></Div>
        <Div className="container">
          <Spacing lg="145" md="80" />
          <h2 className="cs-font_38 text-center">Our Strategic Approach</h2>
          <Spacing lg="90" md="45" />
          <Div className="row align-items-center cs-column_reverse_lg">
            <Div className="col-lg-5">
              <h3 className="cs-font_30 cs-m0">Intelligent Automation Strategy</h3>
              <Spacing lg="45" md="30" />
              <p className="cs-m0">
                Our primary objective was to eliminate inefficiencies. We developed a machine learning model to analyze historical data, predict optimal delivery routes, and automate the entire scheduling process. This not only reduced manual workload but also significantly improved delivery accuracy. <br />
                <br />
                The system was designed to be scalable, allowing for the integration of new data points and algorithmic enhancements in the future. We focused on creating a resilient architecture that could handle fluctuating demand and real-time data streams without compromising performance.
              </p>
            </Div>
            <Div className="col-lg-6 offset-lg-1 text-center">
              <Div className="cs-portfolio_img_in cs-shine_hover_1 rounded-circle">
                <img
                  src="/images/case_study_img_4.png"
                  alt="Case study"
                  className="w-100"
                />
              </Div>
              <Spacing lg="0" md="40" />
            </Div>
          </Div>
          <Spacing lg="100" md="80" />
          <Div className="row align-items-center">
            <Div className="col-lg-6 text-center">
              <Div className="cs-portfolio_img_in cs-shine_hover_1 rounded-circle">
                <img
                  src="/images/case_study_img_5.png"
                  alt="Case study"
                  className="w-100"
                />
              </Div>
              <Spacing lg="0" md="40" />
            </Div>
            <Div className="col-lg-5 offset-lg-1">
              <h3 className="cs-font_30 cs-m0">User-Centric Design</h3>
              <Spacing lg="45" md="30" />
              <p className="cs-m0">
              The platform required two distinct interfaces: a comprehensive dashboard for the Remlyx team and a user-friendly portal for their clients. We conducted extensive user research to inform the design of both. <br />
                <br />
                The internal dashboard provides at-a-glance insights into fleet management, delivery statuses, and performance analytics. For the client portal, we prioritized a clean, intuitive interface that allows customers to track their shipments, receive real-time updates, and manage their delivery preferences with ease.
              </p>
            </Div>
          </Div>
          <Spacing lg="150" md="80" />
        </Div>
      </Div>
      <Spacing lg="140" md="80" />
      <Div className="container text-center">
        <Div className="row col-lg-10 offset-lg-1">
          <h2 className="cs-font_38 cs-m0">A Landmark Success</h2>
          <Spacing lg="60" md="45" />
          <p className="cs-m0">
          The launch of the new platform marked a significant milestone for Remlyx. They reported a 40% increase in operational efficiency within the first quarter. The automated routing system led to a 25% reduction in fuel costs and a 15% improvement in on-time delivery rates. Client satisfaction scores also saw a substantial increase, thanks to the transparency and control offered by the new portal. The project stands as a testament to the transformative power of AI and user-centric design in the logistics industry.
          </p>
        </Div>
      </Div>
      <Spacing lg="145" md="80" />
      {/* Start CTA Section */}
      <Div className="container">
        <Cta
          title="Let’s discuss how we can build <br />something <i>exceptional</i> together" 
          btnText="Schedule a Consultation"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
