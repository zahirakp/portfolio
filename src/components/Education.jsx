import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <section className="education section" id="education">

      <div className="section-title">
        <h2>Education & Certification</h2>
        <p>My academic background</p>
      </div>

      <div className="education-container">

        <div className="education-card">

          <div className="education-icon">
            <FaGraduationCap />
          </div>

          <h3>Higher Secondary</h3>

          <h4>Commerce with Computer Application</h4>

          <p>Kerala Board of Higher Secondary Education</p>

          <span>Passed - 2024</span>

        </div>

        <div className="education-card">

          <div>
            <p>🏆 Skill India </p>

             <p> Office Operations Executive</p>

              <p> Government of India</p>

             <p> Certificate</p>
          </div>

          <h3>Office Operations Executive</h3>

          <p>
            Government of India • Skill India • NSDC • MEPSC
          </p>

          <a
          className=".certificate-image"
            href="/images/nsqf.png"
            target="_blank"
            rel="noreferrer"
            className="project-btn"
          >
            View Certificate
          </a>

        </div>

      </div>

    </section>
  );
};

export default Education;