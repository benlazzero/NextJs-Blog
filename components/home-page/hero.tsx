import Image from 'next/image'

import classes from './hero.module.css'

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/max.png" alt="an image of person" width={300} height={300} priority/>
      </div>
      <h1>Hi, I'm Max</h1>
      <p>
        A blog about web development - especially frontend frameworks like Angular or React.
      </p>
    </section>
  )
}