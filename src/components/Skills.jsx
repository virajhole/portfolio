import { skills } from "../data.js"
import Reveal from "./Reveal.jsx"

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="wrap">
        <Reveal as="p" className="eyebrow">
          Skills
        </Reveal>
        <div className="skills__grid">
          {skills.map((group, i) => (
            <Reveal as="div" className="skills__group" key={group.group} delay={i * 50}>
              <h3>{group.group}</h3>
              <div className="tagrow">
                {group.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
