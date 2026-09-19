import { education, certifications } from "../data.js"
import Reveal from "./Reveal.jsx"

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="wrap">
        <Reveal as="p" className="eyebrow">
          Education & certifications
        </Reveal>
        <div className="edu">
          {education.map((e) => (
            <div className="edu__item" key={e.degree}>
              <div>
                <div className="edu__degree">{e.degree}</div>
                <div className="edu__school">{e.school}</div>
              </div>
              <div className="edu__year">{e.year}</div>
            </div>
          ))}
        </div>
        <ul className="certs">
          {certifications.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
