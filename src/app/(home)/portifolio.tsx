export default function Portifolio() {
  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div className="mb-10 min-w-96 lg:mb-0">
            <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
              Portfolio
            </h1>

            <p className="font-normal text-gray-500 text-xs md:text-base">
              I have brought here my biggest and favorite works <br /> as a
              professional.
            </p>
          </div>

          <div className="space-y-24">
            <div className="flex space-x-6">
              <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">
                01
              </h1>

              <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>

              <div>
                <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
                  Router Management
                </h1>

                <p className="font-normal text-gray-500 text-sm md:text-base">
                  {
                    "The project was a sophisticated router management solution provided as a SaaS to telecom companies, leveraging a multitenant architecture for scalability and efficiency. As the backend lead, I developed an API provider in Node.js using Express, Sequelize, MySQL, and MongoDB to optimize performance for specific queries. The backend architecture included several microservices developed in Golang, one of which was a domain filter that utilized a binary access control system. To handle the high volume of requests, we integrated Redis for caching to enhance performance. The system also employed MQTT for real-time communication with routers, enabling dynamic message exchanges. Additionally, I supported the DevOps team, managing environments initially hosted on Digital Ocean with Docker and Kubernetes and played a pivotal role in migrating the infrastructure to Google Cloud's GKE, ensuring a seamless transition and robust deployment pipeline."
                  }
                </p>
              </div>
            </div>

            <div className="flex space-x-6">
              <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">
                02
              </h1>

              <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>

              <div>
                <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
                  Solar Energy Proposal Generator
                </h1>

                <p className="font-normal text-gray-500 text-sm md:text-base">
                  {
                    "This project was a proposal generator for a solar energy enterprise, designed to assist sellers in calculating the optimal solar energy kit for customers. The software factored in the city's solar incidence, roof specifications, energy voltage, and average monthly energy consumption to recommend the best kit, providing a price estimate and generating a PDF proposal for sellers to present to customers. Initially, the platform was a single-tenant SaaS application developed using Laravel, with the full stack hosted on Digital Ocean. However, as demand grew and the number of concurrent users increased, we developed a second version of the platform using Node.js. This new version leveraged AWS Lambda functions to effectively manage the inconsistent demand, providing a scalable and responsive solution for the enterprise."
                  }
                </p>
              </div>
            </div>

            <div className="flex space-x-6">
              <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">
                03
              </h1>

              <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>

              <div>
                <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
                  Beacon Analytics
                </h1>

                <p className="font-normal text-gray-500 text-sm md:text-base">
                  {
                    "The project was a map analytics application designed to track the real-time locations of airport employees using beacon technology, first implemented at Heathrow Airport. As the frontend developer, I was responsible for creating the comprehensive dashboard that displayed this data, ensuring the interface was intuitive and user-friendly. Given the application's security-critical nature, it required managing large streams of data with real-time updates to maintain situational awareness and enhance airport security operations. I implemented robust security features, including two-factor authentication and email-based authentication, to ensure secure access to the system. The application was designed to be responsive, ensuring optimal performance and usability across all types of devices, from desktops to mobile phones. This project demonstrated my ability to handle real-time data streams, implement advanced security measures, and create responsive, user-focused interfaces. It is also worth mentioning that its first application was at Heathrow Airport, being used in other airports after that."
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
