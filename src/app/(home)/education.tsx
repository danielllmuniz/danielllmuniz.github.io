export default function Education() {
  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
          Education
        </h1>

        <p className="font-normal text-gray-500 text-xs md:text-base mb-20">
          Below is a summary of the places I studied
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-50 px-8 py-10 rounded-md">
            <h4 className="font-medium text-gray-700 text-lg mb-4">
              2012 – 2014
            </h4>

            <p className="font-normal text-gray-500 text-md mb-4">
              I attended Right School ICT, a technical school, from 2012 to
              2014, where I studied Informatics. This program provided me with a
              strong technical foundation, covering essential topics in computer
              science and information technology, which paved the way for my
              further studies in Information Systems and my subsequent career in
              software engineering.
            </p>

            <div className="relative">
              <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
            </div>
          </div>

          <div className="bg-gray-50 px-8 py-10 rounded-md">
            <h4 className="font-medium text-gray-700 text-lg mb-4">
              2015 – 2019
            </h4>

            <p className="font-normal text-gray-500 text-md mb-4">
              I attended Unifoa University from 2015 to 2019, where I studied
              Information Systems. During my time there, I gained a strong
              foundation in software development, database management, and
              systems analysis, which have been instrumental in my professional
              journey as a software engineer.
            </p>

            <div className="relative">
              <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
            </div>
          </div>

          <div className="bg-gray-50 px-8 py-10 rounded-md">
            <h4 className="font-medium text-gray-700 text-lg mb-4">
              2020 – now
            </h4>

            <p className="font-normal text-gray-500 text-md mb-4">
              I have developed a deep understanding of Node.js through
              comprehensive courses such as Rocketseat and Node.js Core Concepts
              by Joseph Heidari. These courses have equipped me with advanced
              knowledge and skills in Node.js, enabling me to build efficient
              and scalable applications. This learning journey has solidified my
              expertise in server-side JavaScript and its ecosystem.
            </p>

            <div className="relative">
              <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
