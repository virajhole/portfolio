import { profile } from "../data.js"
import Reveal from "./Reveal.jsx"

export default function Contact() {
  return (
    <section className="section section--contact" id="contact">
      <div className="wrap">
        <Reveal as="p" className="eyebrow">
          Contact
        </Reveal>
        <Reveal as="h2" className="contact__headline">
          Open to full stack & Odoo roles —<br />let's talk.
        </Reveal>
        <Reveal as="div" className="contact__links" delay={80}>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={`tel:${profile.phone.replace(/\s+/g, "")}`}>{profile.phone}</a>
          {/* Add your GitHub / LinkedIn links here, e.g.: */}
          {/* <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">github.com/yourusername</a> */}
        </Reveal>
      </div>
      <div className="wrap footer">
        © {new Date().getFullYear()} {profile.name}. Built with React &amp; Three.js.
      </div>
    </section>
  )
}
