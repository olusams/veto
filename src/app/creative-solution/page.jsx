'use client'
// import Card from "../ui/Card";
import Cta from "@/app/ui/Cta";
import CtaStyle2 from "@/app/ui/Cta/CtaStyle2";
import Div from "@/app/ui/Div";
import Hero10 from "@/app/ui/Hero/Hero10";
import IconBox from "@/app/ui/IconBox";
import SectionHeading from "@/app/ui/SectionHeading";
import PortfolioSlider2 from "@/app/ui/Slider/PortfolioSlider2";
import PostSlider from "@/app/ui/Slider/PostSlider";
import TestimonialSliderStyle3 from "@/app/ui/Slider/TestimonialSliderStyle3";
import Spacing from "@/app/ui/Spacing";
import Card from "../ui/Card";


export default function CreativeSolutionHome() {
  return (
    <>
      <Hero10
        title="Where Innovation Meets Intuitive Design"
        subtitle="We build bespoke digital solutions that empower your business, engage your audience, and drive sustainable growth. Let us transform your vision into a reality."
        btnLink="/portfolio"
        btnText="Explore Our Work"
        // bgImageUrl="/images/hero_bg_6.jpeg"
        // imgUrl="/images/hero_img_1.png"
        shape2Url="/images/hero_img_3.png"
        shape3Url="/images/hero_img_4.png"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Our Proven Design Process"
          subtitle="UI/UX Design"
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
        <Div className="row">
          <Div className="col-lg-4">
            <IconBox
              icon="/images/icons/service_icon_1.svg"
              title="1. Discovery & Strategy"
              subtitle="We begin by understanding your business goals, target audience, and project requirements. This phase includes competitive analysis, user research, and strategic planning to lay a solid foundation for the design."
            />
            <Spacing lg="30" md="30" />
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon="/images/icons/service_icon_2.svg"
              title="2. Wireframing & Prototyping"
              subtitle="Next, we create low-fidelity wireframes and interactive prototypes to map out the user flow and information architecture. This allows us to test and refine the user experience before moving into visual design."
            />
            <Spacing lg="30" md="30" />
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon="/images/icons/service_icon_3.svg"
              title="3. Visual Design & Handoff"
              subtitle="In the final phase, we bring the design to life with high-fidelity mockups, typography, and color palettes. We then deliver a comprehensive design system and all necessary assets to the development team for a seamless handoff."
            />
            <Spacing lg="30" md="30" />
          </Div>
        </Div>
      </Div>
      <Spacing lg="120" md="50" />
      {/* Start About Section */}
      <section>
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-lg-5">
              <img
                src="/images/about_img_9.jpeg"
                alt="About"
                className="w-100 cs-radius_5"
              />
            </div>
            <div className="col-lg-6 offset-lg-1">
              <div className="cs-height_0 cs-height_lg_40" />
              <SectionHeading
                title="Highly experienced pepole with us"
                subtitle="Why Choose Us"
                btnText="Learn More"
                btnLink="/about"
              >
                <Spacing lg="30" md="20" />
                <p>
                  This is the main factor that sets us apart from our
                  competition and allows us to deliver a specialist business
                  consultancy service. Our team applies its wide-ranging
                  experience to determining. Through our years of experience,
                  we've also learned that while each channel. <br />
                  <br />
                  This is the main factor that sets us apart from our
                  competition and allows us to deliver a specialist business
                  consultancy service. Our team applies its wide-ranging
                  experience to determining.
                </p>
              </SectionHeading>
            </div>
          </div>
        </div>
        <div className="cs-height_150 cs-height_lg_80" />
      </section>
      {/* End About Section */}
      {/* Start Servide Section */}
      <div className="cs-gradient_1">
        <Spacing lg="150" md="80" />
        <Div className="cs-shape_wrap_4">
          <Div className="cs-shape_4"></Div>
          <Div className="cs-shape_4"></Div>
          <Div className="container">
            <Div className="row">
              <Div className="col-xl-4">
                <SectionHeading
                  title="Services we can help you with"
                  subtitle="What Can We Do"
                />
                <Spacing lg="90" md="45" />
              </Div>
              <Div className="col-xl-8">
                <Div className="row">
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="UI/UX design"
                      link="/service/ui-ux-design"
                      src="/images/service_1.jpeg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="React.js Development"
                      link="/service/reactjs-development"
                      src="/images/service_2.jpeg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Digital Marketing"
                      link="/service/digital-marketing"
                      src="/images/service_3.jpeg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Technology"
                      link="/service/technology"
                      src="/images/service_4.jpeg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Consultancy"
                      link="/service/consultancy"
                      src="/images/service_5.jpeg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Creative Design"
                      link="/service/creative-design"
                      src="/images/service_6.jpeg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
        <Spacing lg="150" md="80" />
      </div>
      {/* End Servide Section */}
      {/* Start PortfolioSlider Section */}
      <Spacing lg="120" md="50" />
      <Div className="container">
        <h2 className="cs-font_50 cs-m0 cs-line_height_4 text-center">
          Our agile process is ability to adapt and respond to change. Agile
          organizations view change as an opportunity, not a threat.
        </h2>
      </Div>
      <Spacing lg="90" md="70" />
      <PortfolioSlider2 />
      {/* End PortfolioSlider Section */}
      {/* Start Testimonial Section */}
      <section>
        <div className="cs-height_145 cs-height_lg_75" />
        <div className="container">
          <SectionHeading
            title="Voices of Delight: Testimonials That Speak to Our Excellence"
            subtitle="Client Feedback"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
          <TestimonialSliderStyle3 />
        </div>
        <Spacing lg="150" md="80" />
      </section>
      {/* End Testimonial Section */}
      {/* Start CTA Section */}
      <Cta
        title="Let's discuss how we can build <br />something <i>exceptional</i> together" 
        btnText='Schedule a Consultation'
        btnLink="/contact"
        bgSrc="/images/cta_bg_5.jpeg"
        variant="cs-type_1"
      />
      {/* End CTA Section */}
      {/* Start Blog Section */}
      <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Explore Our Latest Insights"
                subtitle="Our Blog"
                btnText="View More Blog"
                btnLink="/blog"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <Div className="cs-half_of_full_width">
                <PostSlider />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Blog Section */}
      <Spacing lg="150" md="80" />
      <CtaStyle2
        bgUrl="/images/video_bg_3.jpeg"
        btnText="Lets start <span>creative</span> things"
        btnLink="/contact"
      />
    </>
  );
}
