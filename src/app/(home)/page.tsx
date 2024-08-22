'use client'
import About from './about'
import Description from './description'
import Education from './education'
import Portifolio from './portifolio'

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Description />
      <About />
      <Portifolio />
      <Education />
      <script>feather.replace()</script>
    </div>
  )
}
