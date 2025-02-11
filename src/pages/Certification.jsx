import React from 'react';

function Certification() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Certification</h1>

      {/* Downloadable Forms */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Forms</h2>
        <ul className="list-disc list-inside">
          <li>
            <a
              href="/documents/application_form.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              Download Application Form
            </a>
          </li>
          <li>
            <a
              href="/documents/renewal_form.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              Download Renewal Form
            </a>
          </li>
        </ul>
      </section>

      {/* Certified Members PDFs */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Certified Members</h2>
        <ul className="list-disc list-inside">
          <li>
            <a
              href="/documents/certified_members_1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              Certified Members List 1
            </a>
          </li>
          
        </ul>
      </section>

      {/* Study Guides PDFs */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Study Guides</h2>
        <ul className="list-disc list-inside">
          <li>
            <a
              href="/documents/biomedical_study_guide.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              Biomedical Tech Study Guide
            </a>
          </li>
          <li>
            <a
              href="/documents/dialysis_study_guide.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              Dialysis Tech Study Guide
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Certification;

