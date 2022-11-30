import { Fragment } from "react"

import Hero from '../components/home-page/hero'
import FeaturedPosts from '../components/home-page/featured-posts'

const DUMMY_POSTS = [
  {
    slug: 'getting-started',
    title: 'Getting-started',
    image: 'getting-started-nextjs.png',
    excerpt: 'This is some duymmy text to fill up space nothing special just meeting char length',
    date: '2001-02-20'
  },
  {
    slug: 'getting-started-two',
    title: 'Getting-started',
    image: 'getting-started-nextjs.png',
    excerpt: 'This is some duymmy text to fill up space nothing special just meeting char length',
    date: '2001-02-20'
  }
]


export default function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS}/>
    </Fragment>
  )   
}
