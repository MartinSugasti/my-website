const App = () => (
  <div className="text-dark bg-light px-1 px-sm-2 px-md-5 py-5 border-2 rounded-2">
    <div className="text-center mb-0 d-md-flex justify-content-md-center align-items-md-center">
      <h1 className="fw-semibold mb-0 me-md-3">MARTÍN SUGASTI</h1>
      <a
        href="/Martin_Sugasti_Resume.pdf"
        download="Martin_Sugasti_Resume.pdf"
        className="btn btn-outline-dark btn-sm mt-3 mt-md-0"
        title="Download Resume PDF"
      >
        <i className="bi bi-download me-1"></i>
        Download PDF
      </a>
    </div>

    {/* Personal Information */}
    <div>
      <div className="row text-center mt-3">
        <span className="col-12 col-md-4 card-text">
          <i className="bi bi-envelope-at me-2" />
          martinsugasti@gmail.com
        </span>

        <span className="col-12 col-md-4 card-text mt-2 mt-md-0">
          <i className="bi bi-phone me-2" />
          +598 98 704 890
        </span>

        <span className="col-12 col-md-4 card-tex mt-2 mt-md-0">
          <i className="bi bi-geo-alt me-2" />
          Uruguay | Remote
        </span>
      </div>

      <p className="mt-3 mb-0">
        I am an industrial engineer, with experience working in supply chain. However, due to vocational preferences, I decided on a change in my professional profile and started studying Software Engineering and working as a Full Stack developer.
      </p>
    </div>

    {/* Skills */}
    <div>
      <h4 className="fw-semibold mt-3 mb-0">SKILLS</h4>

      <p className="fw-semibold mt-1 mb-0">Ruby On Rails - React - SQL - Scrum</p>

      <p className="mt-1 mb-0">Git - Javascript - Redux - React Router - CSS - Heroku - GCP - Stripe - Mailgun - Twilio  - Salesforce - Postman - Honeybadger</p>
    </div>

    {/* Work Experience */}
    <div>
      <h4 className="fw-semibold mt-3 mb-0">WORK EXPERIENCE</h4>

      <div className="mt-1">
        <div className="row">
          <div className="col-12 col-md-6">
            <p className="mb-0 fw-bold">Full Stack Developer</p>
            <p className="mb-0 fw-bold">Vairix</p>
          </div>

          <div className="col-12 col-md-6">
            <p className="mb-0 fw-bold text-md-end">02/2022 - Present</p>
            <p className="mb-0 fw-bold text-md-end">Montevideo, Uruguay</p>
          </div>
        </div>

        <p className="mb-0">
          Full-stack developer for a US-based client via staff augmentation, architecting scalable applications with Ruby on Rails and React/Redux. Managed end-to-end integrations of Stripe, Salesforce, and Twilio APIs, leveraging GCP and Google Pub/Sub for event-driven architecture and cloud deployment, while ensuring reliability through Honeybadger.
        </p>
        <ul>
          <li>Architected a complex billing simulator that allowed developers and QA to mock future events, significantly reducing debugging time and preventing production errors.</li>
          <li>Built a tracking system integrated with Salesforce to automate the identification and management of non-paying accounts.</li>
          <li>Engineered a "Green Investment" feature allowing customers to contribute to renewable energy projects, designed to generate $10,000 in monthly recurring revenue.</li>
        </ul>
      </div>

      <div className="mt-3">
        <div className="row">
          <div className="col-12 col-md-6">
            <p className="mb-0 fw-bold">Full Stack Developer</p>
            <p className="mb-0 fw-bold">EagerWorks</p>
          </div>

          <div className="col-12 col-md-6">
            <p className="mb-0 fw-bold text-md-end">09/2019 - 02/2022</p>
            <p className="mb-0 fw-bold text-md-end">Montevideo, Uruguay</p>
          </div>
        </div>

        <p className="mb-0">
          Developed full-stack Ruby on Rails and React applications, implementing authentication, background jobs, and API integrations. Leveraged SQL and Heroku to deliver scalable solutions within an Agile environment, collaborating daily with diverse clients—from local startups to multinationals—to align technical execution with business goals.
        </p>
        <ul>
          <li>Led the end-to-end implementation of a logistics platform for a local business, managing the full development cycle from database design to deployment under the mentorship of a Senior Developer.</li>
          <li>Engineered a real-time energy monitoring feature for a green energy project, integrating live sensor data to render interactive office heat maps.</li>
        </ul>
      </div>

      <div className="mt-3">
        <div className="row">
          <div className="col-12 col-md-6">
            <p className="mb-0 fw-bold">Montevideo Refrescos</p>
            <p className="mb-0 fw-bold">Maintenance Analyst </p>
          </div>

          <div className="col-12 col-md-6">
            <p className="mb-0 fw-bold text-md-end">04/2017 - 09/2019</p>
            <p className="mb-0 fw-bold text-md-end">Montevideo, Uruguay</p>
          </div>
        </div>

        <p className="mb-0">
          Planned preventive and corrective maintenance for the Coca-Cola products bottling company in Uruguay.
        </p>
      </div>

      <div className="mt-3">
        <div className="row">
          <div className="col-12 col-md-6">
            <p className="mb-0 fw-bold">Production Coordinator </p>
            <p className="mb-0 fw-bold">Yazaki Uruguay</p>
          </div>

          <div className="col-12 col-md-6">
            <p className="mb-0 fw-bold text-md-end">05/2015 - 12/2016</p>
            <p className="mb-0 fw-bold text-md-end">Las Piedras, Uruguay</p>
          </div>
        </div>

        <p className="mb-0">
          Supervised production plan on a daily basis, coordinating activities with three production supervisors and one QA supervisor.
        </p>
      </div>

      <div className="mt-3">
        <div className="row">
          <div className="col-12 col-md-6">
            <p className="mb-0 fw-bold">Technician Assistant </p>
            <p className="mb-0 fw-bold">Abengoa Teyma SA </p>
          </div>

          <div className="col-12 col-md-6">
            <p className="mb-0 fw-bold text-md-end">11/2012 - 10/2013</p>
            <p className="mb-0 fw-bold text-md-end">Montevideo, Uruguay</p>
          </div>
        </div>

        <p className="mb-0">
          Constructed the electro-mechanical cost-estimate of water purification plant and of concrete/cement plant extension.
        </p>
      </div>
    </div>

    {/* Education */}
    <div>
      <h4 className="fw-semibold mt-3 mb-0">EDUCATION</h4>

      <div className="row mt-1">
        <p className="col-12 col-md-5 mb-0">
          <span className="fw-semibold">Computer Systems Analyst</span>
          {' '}
          (2 exams pending)
        </p>
        <p className="col-12 col-md-4 mb-0">Engineering Faculty, UDELAR</p>
        <p className="col-12 col-md-3 mb-0 fw-bold text-md-end">2018 - Present</p>
      </div>

      <div className="row mt-2 mt-md-1">
        <p className="col-12 col-md-5 mb-0 fw-semibold">Graduated in Industrial Engineering</p>
        <p className="col-12 col-md-4 mb-0">Engineering Faculty, UDELAR</p>
        <p className="col-12 col-md-3 mb-0 fw-bold text-md-end">2009 - 2015</p>
      </div>

      <div className="row mt-2 mt-md-1">
        <p className="col-12 col-md-5 mb-0 fw-semibold">First Certificate in English</p>
        <p className="col-12 col-md-4 mb-0"> University of Cambridge</p>
        <p className="col-12 col-md-3 mb-0 fw-bold text-md-end">2000 - 2008</p>
      </div>
    </div>

    {/* Links Of Interests */}
    <div>
      <h4 className="fw-semibold mt-3 mb-0">LINKS OF INTERESTS</h4>

      <p className="mt-1 mb-0">
        <span className="fw-bold me-2">LinkedIn</span>

        <a className="text-dark" href="https://www.linkedin.com/in/martin-sugasti-ab2aa391/" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-box-arrow-up-right" />
        </a>
      </p>

      <p className="mt-1 mb-0">
        <span className="me-2">
          <span className="fw-bold">
            Simplest Resumes
          </span>
          {' - '}
          RoR / React Personal Project
        </span>

        <a className="text-dark" href="https://github.com/MartinSugasti/simplest-resumes" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-box-arrow-up-right" />
        </a>
      </p>

      <p className="mt-1 mb-0">
        <span className="me-2">
          <span className="fw-bold">
            Urse Seguros
          </span>
          {' - '}
          Insurance Broker Website
        </span>

        <a className="text-dark" href="https://www.urseseguros.com.uy" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-box-arrow-up-right" />
        </a>
      </p>

      <p className="mt-1 mb-0">
        <span className="me-2">
          <span className="fw-bold">
            Jardín Y Más
          </span>
          {' - '}
          E-Commerce Website
        </span>

        <a className="text-dark" href="https://jardinymas.uy" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-box-arrow-up-right" />
        </a>
      </p>
    </div>

    {/* References */}
    <div className="row mt-3">
      <h4 className="fw-semibold mb-0">
        PROFESSIONAL REFERENCES
        <span className="h6 fst-italic fw-lighter text-muted ms-1">(contacts available upon request)</span>
      </h4>


      <div className="col-12 col-md-6">
        <div className="mt-1">
          <p className="mb-0">
            <span className="fw-bold">Barret Leider</span>
          </p>
          <p className="mb-0">
            <span className="fw-bold">Project Manager</span>
            {' - '}
            Ampion (Vairix's client)
          </p>
        </div>

        <div className="mt-2">
          <p className="mb-0">
            <span className="fw-bold">Joshua McGee</span>
          </p>
          <p className="mb-0">
            <span className="fw-bold">Principal Software Engineer</span>
            {' - '}
            Ampion (Vairix's client)
          </p>
        </div>
      </div>

      <div className="col-12 col-md-6">
        <div className="mt-2 mt-md-1">
          <p className="mb-0">
            <span className="fw-bold">Ignacio Grondona</span>
          </p>
          <p className="mb-0">
            <span className="fw-bold">Technical Leader</span>
            {' - '}
            Eagerworks
          </p>
        </div>

        <div className="mt-2">
          <p className="mb-0">
            <span className="fw-bold">Valerio D'Angelo</span>
          </p>
          <p className="mb-0">
            <span className="fw-bold">Project Manager</span>
            {' - '}
            Pilio (Eagerworks's client)
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default App
