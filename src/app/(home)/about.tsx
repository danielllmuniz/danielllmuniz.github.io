'use client'
import { Computer, Factory, Pen, Server } from 'lucide-react'
import { useState } from 'react'

export default function About() {
  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-50 px-8 py-10 rounded-md">
            <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
              <Pen />
            </div>

            <h4 className="font-medium text-gray-700 text-lg mb-4">
              Project Architecture
            </h4>
            <CollapsibleText maxLength={150}>
              {`Experienced in designing and implementing robust project
              architectures, I excel in structuring scalable and maintainable
              software systems. My approach includes selecting the appropriate
              architectural patterns, such as microservices or monolithic
              architectures, to suit the project's needs. I ensure a clear
              separation of concerns, employing best practices in
              modularization, and leveraging design patterns like MVC,
              repository pattern, and CQRS for optimal performance. My expertise
              extends to integrating various technologies and frameworks,
              ensuring smooth communication between components, and maintaining
              a focus on security and performance throughout the architecture. I
              am passionate about creating architectures that are both flexible
              for future growth and stable for current operations.`}
            </CollapsibleText>
          </div>
          <div className="bg-gray-50 px-8 py-10 rounded-md">
            <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
              <Factory />
            </div>

            <h4 className="font-medium text-gray-700 text-lg mb-4">Backend</h4>
            <CollapsibleText maxLength={150}>
              {`Skilled in designing and implementing robust backend systems using
              Node.js, I have a proven track record in building scalable APIs
              and microservices. My expertise extends to integrating databases
              such as MongoDB and PostgreSQL, optimizing server-side logic, and
              ensuring security and performance across all backend operations. I
              am passionate about developing clean, maintainable code and
              employing best practices in software architecture.`}
            </CollapsibleText>
          </div>

          <div className="bg-gray-50 px-8 py-10 rounded-md">
            <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
              <Computer />
            </div>

            <h4 className="font-medium text-gray-700 text-lg mb-4">Frontend</h4>
            <CollapsibleText maxLength={150}>
              {`Experienced in creating intuitive and dynamic user interfaces, I
              specialize in using modern JavaScript framework like React with
              Next.js or Vite.js, ensuring the most appropriate for each
              scenario. I am adept at translating complex requirements into
              elegant and responsive designs, ensuring cross-browser
              compatibility and performance optimization. My focus is on
              delivering a seamless user experience by leveraging the latest
              front-end technologies and methodologies.`}
            </CollapsibleText>
          </div>

          <div className="bg-gray-50 px-8 py-10 rounded-md">
            <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
              <Server />
            </div>

            <h4 className="font-medium text-gray-700 text-lg mb-4">
              Deployment
            </h4>
            <CollapsibleText maxLength={150}>
              {`Proficient in deploying and managing applications on cloud
              platforms such as Digital Ocean, AWS, Google Cloud and serverless
              environments, I excel in automating deployment processes using
              tools like Docker and Kubernetes. My skills include setting up
              continuous integration and continuous deployment (CI/CD)
              pipelines, ensuring high availability and scalability of
              applications, and monitoring system performance to swiftly resolve
              any issues. Depending on architectural requirements, I can
              leverage serverless technologies to optimize cost and performance.
              I am committed to maintaining efficient and reliable operations
              across all deployment environments.`}
            </CollapsibleText>
          </div>
        </div>
      </div>
    </section>
  )
}

interface CollapsibleTextProps {
  children: string
  maxLength?: number
}

const CollapsibleText: React.FC<CollapsibleTextProps> = ({
  children,
  maxLength = 100,
}) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded)
  }

  const displayedText = isExpanded
    ? children
    : `${children.substring(0, maxLength)}...`

  return (
    <p className="font-normal text-gray-500 text-md">
      {displayedText}
      <br></br>
      <button
        onClick={toggleExpansion}
        className="ml-2 text-blue-500 hover:underline focus:outline-none"
      >
        {isExpanded ? 'Show Less' : 'Read More'}
      </button>
    </p>
  )
}
