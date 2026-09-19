import { experience } from "../data.js"
import Reveal from "./Reveal.jsx"

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <Reveal as="p" className="eyebrow">
          Experience
        </Reveal>
        <div className="timeline">
          {experience.map((job, i) => (
            <Reveal
              as="div"
              className="timeline__item"
              key={job.role + job.org}
              delay={i * 80}
            >
              <div className="timeline__period">{job.period}</div>
              <h3 className="timeline__role">{job.role}</h3>
              <p className="timeline__org">
                {job.org} · {job.location}
              </p>
              <ul className="timeline__points">
                {job.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
