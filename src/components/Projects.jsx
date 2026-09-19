import { projects } from "../data.js"
import Reveal from "./Reveal.jsx"

export default function Projects() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <Reveal as="p" className="eyebrow">
          Selected work
        </Reveal>
        {projects.map((p, i) => (
          <Reveal as="article" className="project" key={p.name} delay={i * 60}>
            <span className="project__index">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="project__name">{p.name}</h3>
            <p className="project__desc">{p.description}</p>
            <ul className="project__points">
              {p.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
            <div className="tagrow">
              {p.stack.map((s) => (
                <span className="tag" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
