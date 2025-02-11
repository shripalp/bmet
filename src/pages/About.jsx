function About() {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p>
          We are dedicated to providing certification for biomedical and dialysis technicians in Canada.
          Our mission is to maintain high standards and support professionals in their career growth.
          Email: bmetcertcanada@ncf.ca
        </p>
        <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Certification Program</h2>
        <ul className="list-disc list-inside">
          <li>
            <a
              href={import.meta.env.BASE_URL + "/documents/certification_program.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              Certificaton Program
            </a>
          </li>
          
        </ul>
      </section>

      </div>
    );
  }
  
  export default About;
  
