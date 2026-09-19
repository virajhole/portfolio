import { profile } from "../data.js"
import Reveal from "./Reveal.jsx"

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <Reveal as="p" className="eyebrow">
          About
        </Reveal>
        <Reveal as="p" className="about__text" delay={80}>
          {profile.summary} Outside of Odoo work, I've shipped backend
          services in Java and Spring across lending and audit platforms —
          usually the person who ends up designing both the data model and
          the API that sits on top of it.
        </Reveal>
      </div>
    </section>
  )
}
