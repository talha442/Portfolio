import Link from "next/link";

export const Resume = () => {
  return (
    <section
      id="resume"
      className="resume-area-two bgc-black rel z-1 pt-185 rpt-145 pb-140 rpb-100"
    >
      <div className="container">
        <div className="row align-items-center pb-20">
          <div className="col-lg-8">
            <div className="section-title mb-35 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">
                <i className="flaticon-asterisk-1" />
                MY Expereince resume
              </span>
              <h2>work &amp; Education</h2>
            </div>
          </div>
          <div className="col-lg-4 text-lg-end">
            <Link legacyBehavior href="/contact">
              <a className="theme-btn mb-35">Contact Me</a>
            </Link>
          </div>
        </div>
        <div className="row no-gap">
          <div className="col-xl-6">
            <div className="resume-box-wrap design-two">
              <div className="timeline-heading wow fadeInUp delay-0-4s">
                <span className="title">work</span>
                <div className="arrow">
                  <i className="far fa-arrow-down" />
                </div>
              </div>
              <div className="resume-box wow fadeInLeft delay-0-2s">
                <div className="resume-column">
                  <div className="timeline-item">
                    <div className="resume-content">
                      <span className="duration">
                        <i className="far fa-calendar-alt" /> Dec 2023 - Present{" "}
                      </span>
                      <h5 className="title">UI/UX Developer</h5>
                    </div>
                    <a href="https://www.linkedin.com/in/talhafaisal/" className="details-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </div>
                  <div className="timeline-item">
                    <div className="resume-content">
                      <span className="duration">
                        <i className="far fa-calendar-alt" />Sept 2023 - Dec 2023{" "}
                      </span>
                      <h5 className="title">Angular Developer</h5>
                    </div>
                    <a href="https://www.linkedin.com/in/talhafaisal/" className="details-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
                <div className="resume-column">
                  <div className="timeline-item">
                    <div className="resume-content">
                      <span className="duration">
                        <i className="far fa-calendar-alt" /> May 2022 - Apr 2023{" "}
                      </span>
                      <h5 className="title">Frontend Developer</h5>
                    </div>
                    <a href="https://www.linkedin.com/in/talhafaisal/" className="details-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </div>
                  <div className="timeline-item">
                    <div className="resume-content">
                      <span className="duration">
                        <i className="far fa-calendar-alt" /> Nov 2022 - Dec 2022{" "}
                      </span>
                      <h5 className="title">Web Developer</h5>
                    </div>
                    <a href="https://www.linkedin.com/in/talhafaisal/" className="details-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
                <div className="resume-line">
                  <span className="resume-dots" />
                  <span className="resume-dots" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="resume-box-wrap mt-110 rmt-75">
              <div className="timeline-heading wow fadeInDown delay-0-4s">
                <span className="title">study</span>
                <div className="arrow">
                  <i className="far fa-arrow-down" />
                </div>
              </div>
              <div className="resume-box wow fadeInRight delay-0-2s">
                <div className="resume-column">
                  <div className="timeline-item">
                    <div className="resume-content">
                      <span className="duration">
                        <i className="far fa-calendar-alt" /> 2020 - Present{" "}
                      </span>
                      <h5 className="title">BS Computer Science</h5>
                    </div>
                    <a href="https://www.linkedin.com/in/talhafaisal/" className="details-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </div>
                  <div className="timeline-item">
                    <div className="resume-content">
                      <span className="duration">
                        <i className="far fa-calendar-alt" /> 2023 - Present{" "}
                      </span>
                      <h5 className="title">Google DSC Lead</h5>
                    </div>
                    <a href="https://www.linkedin.com/in/talhafaisal/" className="details-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
                <div className="resume-column">
                  <div className="timeline-item">
                    <div className="resume-content">
                      <span className="duration">
                        <i className="far fa-calendar-alt" /> 2022 - 2023{" "}
                      </span>
                      <h5 className="title">Google DSC Web Lead</h5>
                    </div>
                    <a href="https://www.linkedin.com/in/talhafaisal/" className="details-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </div>
                  <div className="timeline-item">
                    <div className="resume-content">
                      <span className="duration">
                        <i className="far fa-calendar-alt" /> 2017 - 2019{" "}
                      </span>
                      <h5 className="title">Pre-Engineering</h5>
                    </div>
                    <a href="https://www.linkedin.com/in/talhafaisal/" className="details-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
                <div className="resume-line">
                  <span className="resume-dots" />
                  <span className="resume-dots" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-lines">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </section>
  );
};
