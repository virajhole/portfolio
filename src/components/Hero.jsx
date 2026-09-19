import { profile } from "../data.js"
import HeroCanvas from "./HeroCanvas.jsx"

export default function Hero() {
  const [first, ...rest] = profile.name.split(" ")
  return (
    <section className="hero" id="top">
      <HeroCanvas />
      <div className="wrap hero__inner">
        <p className="hero__eyebrow">{profile.title} — {profile.focus}</p>
        <h1 className="hero__title">
          {first}
          <br />
          {rest.join(" ")}
        </h1>
        <p className="hero__summary">{profile.summary}</p>
        <div className="hero__actions">
          <a className="btn" href="#work">
            See the work
          </a>
          <a className="btn btn--ghost" href="#contact">
            Say hello
          </a>
        </div>
      </div>
      <a className="hero__scroll" href="#about" aria-label="Scroll to about section">
        <span />
      </a>
    </section>
  )
}
