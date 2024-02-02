import Link from "next/link";

export const Services2 = () => {
  return (
    <section
      id="services"
      className="services-area-two pt-130 rpt-100 pb-140 rpb-100 rel z-1"
    >
      <div className="container container-1200">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">
                <i className="flaticon-asterisk-1"></i> Expertise Unveiled
              </span>
              <h2>MY SERVICE AREA</h2>
              <p class="mt-20">
                Dive into a suite of professional services where creativity
                meets technology. Offering comprehensive UI/UX design,
                cutting-edge front-end development, and robust back-end
                solutions to bring your visions to life with precision and
                flair.
              </p>
            </div>
          </div>
        </div>
        <div className="services-two-wrap">
          <div className="service-item-two wow fadeInUp delay-0-2s">
            <div className="icon">
              <img src="assets/images/icons/service1.png" alt="Icon" />
            </div>
            <h5 className="title">
              <a href="#contact">WEBSITE DEvelopment</a>
            </h5>
            <div className="text">
              Specializing in seamless website development with a keen focus on
              responsive design, user-centric interfaces, and cross-browser
              compatibility to amplify your digital footprint.
            </div>
            <ul className="list">
              <li>Web Apps</li>
              <li>CMS</li>
              <li>Ecommerce</li>
            </ul>
            <a href="#contact" className="details-btn">
              <i className="fal fa-long-arrow-right" />
            </a>
          </div>
          <div className="service-item-two wow fadeInUp delay-0-2s">
            <div className="icon">
              <img src="assets/images/icons/service2.png" alt="Icon" />
            </div>
            <h5 className="title">
              <a href="#contact">UI/UX Design</a>
            </h5>
            <div className="text">
              Delivering meticulously crafted UI/UX designs that blend
              innovation with functionality, ensuring a captivating and
              intuitive user experience across all digital platforms.
            </div>
            <ul className="list">
              <li>Wireframing</li>
              <li>Prototyping</li>
              <li>Interface Design</li>
            </ul>
            <a href="#contact" className="details-btn">
              <i className="fal fa-long-arrow-right" />
            </a>
          </div>
          <div className="service-item-two wow fadeInUp delay-0-2s">
            <div className="icon">
              <img src="assets/images/icons/service3.png" alt="Icon" />
            </div>
            <h5 className="title">
              <a href="#contact">Front End DEvelopment</a>
            </h5>
            <div className="text">
              Building cutting-edge front-end interfaces utilizing the latest in
              HTML5, CSS3, and JavaScript frameworks to create fast, responsive,
              and dynamic user experiences.
            </div>
            <ul className="list">
              <li>React JS</li>
              <li>Next JS</li>
              <li>Angular</li>
            </ul>
            <a href="#contact" className="details-btn">
              <i className="fal fa-long-arrow-right" />
            </a>
          </div>
          <div className="service-item-two wow fadeInUp delay-0-2s">
            <div className="icon">
              <img src="assets/images/icons/service4.png" alt="Icon" />
            </div>
            <h5 className="title">
              <a href="#contact">Back End Development</a>
            </h5>
            <div className="text">
              Engineering robust back-end systems with advanced server-side
              technologies, database management, and API integration to power
              interactive and scalable web applications.
            </div>
            <ul className="list">
              <li>Python</li>
              <li>Node JS</li>
              <li>PHP</li>
            </ul>
            <a href="#contact" className="details-btn">
              <i className="fal fa-long-arrow-right" />
            </a>
          </div>
        </div>
        <div className="services-more-btn text-center pt-55 wow fadeInUp delay-0-2s">
          <Link legacyBehavior href="#contact" className="theme-btn">
            Get more services
          </Link>
        </div>
      </div>
    </section>
  );
};
