const App = () => (
  <div className="text-dark bg-light px-1 px-sm-2 px-md-5 py-5 border-2 rounded-2">
    <div className="d-flex justify-content-center align-items-center mb-0">
      <h1 className="fw-semibold text-center mb-0 me-3">MARTÍN SUGASTI</h1>
            <a
        href="/Martin_Sugasti_Resume.pdf"
        download="Martin_Sugasti_Resume.pdf"
        className="btn btn-outline-dark btn-sm"
        title="Download Resume PDF"
      >
        <i className="bi bi-download me-1"></i>
        Download PDF
      </a>
    </div>

    {/* Personal Information */}
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
      I am an industrial engineer, with experience working in supply chain. However, due to vocational preferences, I decided on a change in my professional profile and started studying Software Engineering and working as a full-stack developer.
    </p>

    {/* Education */}
    <h4 className="fw-semibold mt-3 mb-0">EDUCATION</h4>

    <div className="row mt-1">
      <p className="col-12 col-md-5 mb-0">
        <span className="fw-semibold">Software Engineering</span>
        {' '}
        (4th Grade)
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

    {/* Skills */}
    <h4 className="fw-semibold mt-3 mb-0">SKILLS</h4>

    <p className="fw-semibold mt-1 mb-0">Ruby On Rails - React - SQL - Scrum</p>

    <p className="mt-1 mb-0">Git - Javascript - Redux - React Router - Bootstrap - Heroku - GCP - Stripe - Mailgun - Twilio  - Salesforce - Postman - Honeybadger</p>

    {/* Work Experience */}
    <h4 className="fw-semibold mt-3 mb-0">WORK EXPERIENCE</h4>

    <div className="mt-1">
      <div className="row">
        <div className="col-12 col-md-6">
          <p className="mb-0 fw-bold">Full Stack Developer</p>
          <p className="mb-0 fw-bold">Vairix</p>
        </div>

        <div className="col-12 col-md-6">
          <p className="mb-0 fw-bold text-md-end">02/2021 - Present</p>
          <p className="mb-0 fw-bold text-md-end">Montevideo, Uruguay</p>
        </div>
      </div>

      <p className="mb-0">
        Since joining the team, I have continued to acquire knowledge in Ruby on Rails and learned other technologies, such as React. I've worked on building robust web applications and seamless user experiences working as a staff augmentation professional for an American company, where I've gained hands-on experience with a wide range of technologies, including SQL, Redux, React Router, GCP and Heroku, have integrated key APIs such as Stripe, Mailgun, Twilio and Salesforce, and have used development tools such as Postman and Honeybadger to ensure quality and reliability.
      </p>
    </div>

    <div className="mt-3">
      <div className="row">
        <div className="col-12 col-md-6">
          <p className="mb-0 fw-bold">Full Stack Developer</p>
          <p className="mb-0 fw-bold">EagerWorks SRL</p>
        </div>

        <div className="col-12 col-md-6">
          <p className="mb-0 fw-bold text-md-end">09/2019 - 02/2021</p>
          <p className="mb-0 fw-bold text-md-end">Montevideo, Uruguay</p>
        </div>
      </div>

      <p className="mb-0">
        Worked as a full-stack developer using Ruby on Rails framework gaining experience in, within others, authentication and authorization systems, background jobs, scheduled tasks, ajax requests, third-party APIs integration, internationalization, mailers, data visualization, etc. Alongside RoR, I also gained experience with other languages, libraries and development tools such as HTML, CSS, JS, Bootstrap, git, GitHub, SQL and Heroku. During this time, I have dealt with a variety of clients, spanning from small local companies to large multinational corporations using Agile/Scrum development techniques, staying in touch with clients daily, and reaching mutual agreements on ideas and next steps.
      </p>
    </div>

    <div className="mt-3">
      <div className="row">
        <div className="col-12 col-md-6">
          <p className="mb-0 fw-bold">Montevideo Refrescos SRL</p>
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
      <ul>
        <li>Executed the maintenance migration in SAP. Approximately 1,800 maintenance plans were redesigned.</li>
      </ul>
    </div>

    <div className="mt-3">
      <div className="row">
        <div className="col-12 col-md-6">
          <p className="mb-0 fw-bold">Production Coordinator </p>
          <p className="mb-0 fw-bold">Yazaki Uruguay SA</p>
        </div>

        <div className="col-12 col-md-6">
          <p className="mb-0 fw-bold text-md-end">05/2015 - 12/2016</p>
          <p className="mb-0 fw-bold text-md-end">Las Piedras, Uruguay</p>
        </div>
      </div>

      <p className="mb-0">
        Supervised production plan on a daily basis, coordinating activities with 3 production supervisors.
      </p>
      <ul>
        <li>Led a team of 200 plant operators with 4 plant supervisors direct reports and negotiated with labor unions.</li>
      </ul>
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

    {/* Links Of Interests */}
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
            Ampion
          </p>
        </div>

        <div className="mt-2">
          <p className="mb-0">
            <span className="fw-bold">Ignacio Grondona</span>
          </p>
          <p className="mb-0">
            <span className="fw-bold">Technical Leader</span>
            {' - '}
            Eagerworks SRL
          </p>
        </div>

        <div className="mt-2">
          <p className="mb-0">
            <span className="fw-bold">Eng. Jimena Vanoli</span>
          </p>
          <p className="mb-0">
            <span className="fw-bold">Maintenance Manager</span>
            {' - '}
            Montevideo Refrescos SRL
          </p>
        </div>
      </div>

      <div className="col-12 col-md-6">
        <div className="mt-2 mt-md-1">
          <p className="mb-0">
            <span className="fw-bold">Facundo Alcaraz</span>
          </p>
          <p className="mb-0">
            <span className="fw-bold"> Full Stack Developer</span>
            {' - '}
            Vairix SRL
          </p>
        </div>

        <div className="mt-2">
          <p className="mb-0">
            <span className="fw-bold">Eng. Santiago Bertinat</span>
          </p>
          <p className="mb-0">
            <span className="fw-bold">CEO</span>
            {' - '}
            Eagerworks SRL
          </p>
        </div>

        <div className="mt-2">
          <p className="mb-0">
            <span className="fw-bold">Eng. Agustin Irazoqui</span>
          </p>
          <p className="mb-0">
            <span className="fw-bold">General Manager</span>
            {' - '}
            Yazaki Uruguay SA
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default App
