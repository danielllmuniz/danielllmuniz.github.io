"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Computer, Copy, Factory, Server } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
interface CollapsibleTextProps {
  children: string;
  maxLength?: number;
}

const CollapsibleText: React.FC<CollapsibleTextProps>  = ({ children, maxLength = 100 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const displayedText = isExpanded ? children : `${children.substring(0, maxLength)}...`;

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
  );
};

export default function Home() {

  const handleCopy = (value: string) => {

    navigator.clipboard.writeText(value).then(
      () => {
        toast("Link copied to clipboard!");
      },
      (err) => {
        toast("Failed to copy");
        console.error("Failed to copy: ", err);
      }
    );
  }



  return (
    <div  className="bg-gray-100">
      
      <section className="py-10 md:py-16">

<div className="container max-w-screen-xl mx-auto px-4">

    <nav className="flex items-center justify-between mb-40">
        <Avatar >
          <AvatarFallback className="">DM</AvatarFallback>
        </Avatar>
  

        <a href="Resume.docx" onClick={() => toast("Downloading resume...")} className="px-7 py-3 md:px-9 md:py-4 bg-white font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500">Get my CV</a>
    </nav>

    <div className="text-center">
        <div className="flex justify-center mb-16">
            <Avatar className="w-32 h-32">
              <AvatarImage asChild  src="image/home-img.jpg" >
                <Image src='image/home-img.jpg' alt='logo' width={50} height={50}  />
              </AvatarImage>
              <AvatarFallback>DM</AvatarFallback>
            </Avatar>
        </div>

        <h6 className="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">Daniel Muniz</h6>

        <h1 className="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8">Senior Software Engineer</h1>

        <p className="font-normal text-gray-600 text-md md:text-xl mb-16">Passionate about developing high-performance architectures in different scenarios.</p>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500">Contact</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Contact</DialogTitle>
              <DialogDescription>
                Here you can get my contact informations
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center space-x-2">
              <div className="grid flex-1 gap-2">
                <Label htmlFor="link">
                  Email
                </Label>
                <div className="flex gap-1">
                <Input
                  id="link"
                  defaultValue="munidaniel@gmail.com"
                  readOnly
                />
                <Button type="submit" size="sm" className="px-3"  onClick={() => handleCopy("munidaniel@gmail.com")}>
                  <span className="sr-only">Copy</span>
                  <Copy className="h-4 w-4" />
                </Button>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="grid flex-1 gap-2">
                <Label htmlFor="link">
                  Phone
                </Label>
                <div className="flex gap-1">
                <Input
                  id="link"
                  defaultValue="+55 24 99866 2858"
                  readOnly
                />
                <Button type="submit" size="sm" className="px-3"  onClick={() => handleCopy("+55 24 99866 2858")}>
                  <span className="sr-only">Copy</span>
                  <Copy className="h-4 w-4" />
                </Button>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="grid flex-1 gap-2">
                <div className="flex gap-1">
                <Label htmlFor="link">
                  Whatsapp
                </Label>
                <span className="text-sm text-blue-500"><a target="_blank" href="https://wa.me/5524998662858">Link</a></span>
                </div>
                <div className="flex gap-1">
                <Input
                  id="link"
                  defaultValue="https://wa.me/5524998662858"
                  readOnly
                />
                <Button type="submit" size="sm" className="px-3"  onClick={() => handleCopy("https://wa.me/5524998662858")}>
                  <span className="sr-only">Copy</span>
                  <Copy className="h-4 w-4" />
                </Button>
                </div>
              </div>
            </div>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
    </div>

</div>

</section>

<section className="py-10 md:py-16">

<div className="container max-w-screen-xl mx-auto px-4">

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-50 px-8 py-10 rounded-md">
            <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                <Factory />
            </div>

            <h4 className="font-medium text-gray-700 text-lg mb-4">Backend</h4>
              <CollapsibleText maxLength={150}>
                Skilled in designing and implementing robust backend systems using Node.js, I have a proven track record in building scalable APIs and microservices. My expertise extends to integrating databases such as MongoDB and PostgreSQL, optimizing server-side logic, and ensuring security and performance across all backend operations. I am passionate about developing clean, maintainable code and employing best practices in software architecture.
              </CollapsibleText>
        </div>
        
        <div className="bg-gray-50 px-8 py-10 rounded-md">
            <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                <Computer />
            </div>

            <h4 className="font-medium text-gray-700 text-lg mb-4">Frontend</h4>
            <CollapsibleText maxLength={150}>
              Experienced in creating intuitive and dynamic user interfaces, I specialize in using modern JavaScript framework like React with Next.js or Vite.js, ensuring the most appropriate for each scenario. I am adept at translating complex requirements into elegant and responsive designs, ensuring cross-browser compatibility and performance optimization. My focus is on delivering a seamless user experience by leveraging the latest front-end technologies and methodologies.
            </CollapsibleText>

        </div>
        
        <div className="bg-gray-50 px-8 py-10 rounded-md">
            <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
              <Server />
            </div>

            <h4 className="font-medium text-gray-700 text-lg mb-4">Deployment</h4>
            <CollapsibleText maxLength={150}>
              Proficient in deploying and managing applications on cloud platforms such as Digital Ocean, AWS, Google Cloud and serverless environments, I excel in automating deployment processes using tools like Docker and Kubernetes. My skills include setting up continuous integration and continuous deployment (CI/CD) pipelines, ensuring high availability and scalability of applications, and monitoring system performance to swiftly resolve any issues. Depending on architectural requirements, I can leverage serverless technologies to optimize cost and performance. I am committed to maintaining efficient and reliable operations across all deployment environments.
            </CollapsibleText>

        </div>
    </div>

</div>

</section>

<section className="py-10 md:py-16">

<div className="container max-w-screen-xl mx-auto px-4">

    <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div className="mb-10 min-w-96 lg:mb-0">
            <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Portfolio</h1>

            <p className="font-normal text-gray-500 text-xs md:text-base">I have brought here my biggest and favorite works <br/> as a professional.</p>
        </div>

        <div className="space-y-24">
            <div className="flex space-x-6">
                <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">01</h1>

                <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>

                <div>
                    <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">Router Management</h1>

                    <p className="font-normal text-gray-500 text-sm md:text-base">{"The project was a sophisticated router management solution provided as a SaaS to telecom companies, leveraging a multitenant architecture for scalability and efficiency. As the backend lead, I developed an API provider in Node.js using Express, Sequelize, MySQL, and MongoDB to optimize performance for specific queries. The backend architecture included several microservices developed in Golang, one of which was a domain filter that utilized a binary access control system. To handle the high volume of requests, we integrated Redis for caching to enhance performance. The system also employed MQTT for real-time communication with routers, enabling dynamic message exchanges. Additionally, I supported the DevOps team, managing environments initially hosted on Digital Ocean with Docker and Kubernetes and played a pivotal role in migrating the infrastructure to Google Cloud's GKE, ensuring a seamless transition and robust deployment pipeline."}</p>
                </div>
            </div>
            
            <div className="flex space-x-6">
                <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">02</h1>

                <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>

                <div>
                    <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">Solar Energy Proposal Generator</h1>

                    <p className="font-normal text-gray-500 text-sm md:text-base">{"This project was a proposal generator for a solar energy enterprise, designed to assist sellers in calculating the optimal solar energy kit for customers. The software factored in the city's solar incidence, roof specifications, energy voltage, and average monthly energy consumption to recommend the best kit, providing a price estimate and generating a PDF proposal for sellers to present to customers. Initially, the platform was a single-tenant SaaS application developed using Laravel, with the full stack hosted on Digital Ocean. However, as demand grew and the number of concurrent users increased, we developed a second version of the platform using Node.js. This new version leveraged AWS Lambda functions to effectively manage the inconsistent demand, providing a scalable and responsive solution for the enterprise."}</p>
                </div>
            </div>
            
            <div className="flex space-x-6">
                <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">03</h1>

                <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>

                <div>
                    <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">Beacon Analytics</h1>

                    <p className="font-normal text-gray-500 text-sm md:text-base">{"The project was a map analytics application designed to track the real-time locations of airport employees using beacon technology, first implemented at Heathrow Airport. As the frontend developer, I was responsible for creating the comprehensive dashboard that displayed this data, ensuring the interface was intuitive and user-friendly. Given the application's security-critical nature, it required managing large streams of data with real-time updates to maintain situational awareness and enhance airport security operations. I implemented robust security features, including two-factor authentication and email-based authentication, to ensure secure access to the system. The application was designed to be responsive, ensuring optimal performance and usability across all types of devices, from desktops to mobile phones. This project demonstrated my ability to handle real-time data streams, implement advanced security measures, and create responsive, user-focused interfaces. It is also worth mentioning that its first application was at Heathrow Airport, being used in other airports after that."}</p>
                </div>
            </div>
        </div>
    </div>

</div>

</section>

<section className="py-10 md:py-16">

<div className="container max-w-screen-xl mx-auto px-4">

    <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Education</h1>

    <p className="font-normal text-gray-500 text-xs md:text-base mb-20">Below is a summary of the places I studied</p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-50 px-8 py-10 rounded-md">
            <h4 className="font-medium text-gray-700 text-lg mb-4">2012 – 2014</h4>

            <p className="font-normal text-gray-500 text-md mb-4">I attended Right School ICT, a technical school, from 2012 to 2014, where I studied Informatics. This program provided me with a strong technical foundation, covering essential topics in computer science and information technology, which paved the way for my further studies in Information Systems and my subsequent career in software engineering.</p>

            <div className="relative">
                <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
            </div>
        </div>

        <div className="bg-gray-50 px-8 py-10 rounded-md">
            <h4 className="font-medium text-gray-700 text-lg mb-4">2015 – 2019</h4>

            <p className="font-normal text-gray-500 text-md mb-4">I attended Unifoa University from 2015 to 2019, where I studied Information Systems. During my time there, I gained a strong foundation in software development, database management, and systems analysis, which have been instrumental in my professional journey as a software engineer.</p>

            <div className="relative">
                <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
            </div>
        </div>

        <div className="bg-gray-50 px-8 py-10 rounded-md">
            <h4 className="font-medium text-gray-700 text-lg mb-4">2020 – now</h4>

            <p className="font-normal text-gray-500 text-md mb-4">I have developed a deep understanding of Node.js through comprehensive courses such as Rocketseat and Node.js Core Concepts by Joseph Heidari. These courses have equipped me with advanced knowledge and skills in Node.js, enabling me to build efficient and scalable applications. This learning journey has solidified my expertise in server-side JavaScript and its ecosystem.</p>

            <div className="relative">
                <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
            </div>
        </div>

    </div>

</div>

</section>

{/* <section className="py-10 md:py-16"> */}


{/* 
</section>

<section className="py-10 md:py-16">

<div className="container max-w-screen-xl mx-auto px-4">

    <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Experience</h1>

    <p className="font-normal text-gray-500 text-xs md:text-base mb-20">Below is a summary of the places I studied</p>

    <div className="flex flex-col lg:flex-row justify-between">
        <div className="space-y-8 md:space-y-16 mb-16 md:mb-0">
            <h6 className="font-medium text-gray-400 text-base uppercase">Company</h6>

            <p className="font-semibold text-gray-600 text-base">Massa Fames <span className="font-normal text-gray-300">/ New York</span></p>

            <p className="font-semibold text-gray-600 text-base">Massa Fames <span className="font-normal text-gray-300">/ New York</span></p>

            <p className="font-semibold text-gray-600 text-base">Massa Fames <span className="font-normal text-gray-300">/ New York</span></p>

            <p className="font-semibold text-gray-600 text-base">Massa Fames <span className="font-normal text-gray-300">/ New York</span></p>

            <p className="font-semibold text-gray-600 text-base">Massa Fames <span className="font-normal text-gray-300">/ New York</span></p>
        </div>

        <div className="space-y-8 md:space-y-16 mb-16 md:mb-0">
            <h6 className="font-medium text-gray-400 text-base uppercase">Position</h6>

            <p className="font-normal text-gray-400 text-base">Junior Front-End Developer</p>

            <p className="font-normal text-gray-400 text-base">Junior Front-End Developer</p>

            <p className="font-normal text-gray-400 text-base">Junior Front-End Developer</p>

            <p className="font-normal text-gray-400 text-base">Junior Front-End Developer</p>

            <p className="font-normal text-gray-400 text-base">Junior Front-End Developer</p>
        </div>

        <div className="space-y-8 md:space-y-16">
            <h6 className="font-medium text-gray-400 text-base uppercase">Year</h6>

            <p className="font-normal text-gray-400 text-base">2016</p>

            <p className="font-normal text-gray-400 text-base">2016</p>

            <p className="font-normal text-gray-400 text-base">2016</p>

            <p className="font-normal text-gray-400 text-base">2016</p>

            <p className="font-normal text-gray-400 text-base">2016</p>
        </div>
    </div>
    
</div>

</section> */}
{/* 
<section className="py-10 md:py-16">

<div className="container max-w-screen-xl mx-auto px-4">

    <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Brands</h1>

    <p className="font-normal text-gray-500 text-xs md:text-base mb-10 md:mb-20">Below is a summary of the places I studied</p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Image src="image/brand-1.png" alt="Image"/>

        <Image src="image/brand-2.png" alt="Image"/>

        <Image src="image/brand-3.png" alt="Image"/>

        <Image src="image/brand-4.png" alt="Image"/>

        <Image src="image/brand-5.png" alt="Image"/>

        <Image src="image/brand-6.png" alt="Image"/>
    </div>

</div>

</section> */}
{/* 
<section className="py-10 md:py-16">

<div className="container max-w-screen-xl mx-auto px-4">

    <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Testimonial</h1>

    <p className="font-normal text-gray-500 text-xs md:text-base mb-10 md:mb-20">Below is a summary of the places I studied</p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-50 px-8 py-10 rounded-md">

            <p className="font-normal text-gray-500 text-md mb-4">Lorem ipsum dolor sit amet, consectetur</p> <br/> <p className="font-normal text-gray-500 text-md mb-4">adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et dolore magna aliqua.</p>

            <h6 className="font-semibold text-gray-500 text-md">Stephan Clark <span className="font-medium text-gray-300 text-sm">- CEO at EarlyBird</span></h6>
        </div>

        <div className="bg-gray-50 px-8 py-10 rounded-md">

            <p className="font-normal text-gray-500 text-md mb-4">Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et dolore magna aliqua.</p>

            <h6 className="font-semibold text-gray-500 text-md">Stephan Clark <span className="font-medium text-gray-300 text-sm">- CEO at EarlyBird</span></h6>
        </div>

        <div className="bg-gray-50 px-8 py-10 rounded-md">

            <p className="font-normal text-gray-500 text-md mb-4">Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et dolore magna aliqua.</p>

            <h6 className="font-semibold text-gray-500 text-md">Stephan Clark <span className="font-medium text-gray-300 text-sm">- CEO at EarlyBird</span></h6>
        </div>

        <div className="bg-gray-50 px-8 py-10 rounded-md">

            <p className="font-normal text-gray-500 text-md mb-4">Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et dolore magna aliqua.</p>

            <h6 className="font-semibold text-gray-500 text-md">Stephan Clark <span className="font-medium text-gray-300 text-sm">- CEO at EarlyBird</span></h6>
        </div>

        <div className="bg-gray-50 px-8 py-10 rounded-md">

            <p className="font-normal text-gray-500 text-md mb-4">Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et dolore magna aliqua.</p>

            <h6 className="font-semibold text-gray-500 text-md">Stephan Clark <span className="font-medium text-gray-300 text-sm">- CEO at EarlyBird</span></h6>
        </div>

        <div className="bg-gray-50 px-8 py-10 rounded-md">

            <p className="font-normal text-gray-500 text-md mb-4">Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et dolore magna aliqua.</p>

            <h6 className="font-semibold text-gray-500 text-md">Stephan Clark <span className="font-medium text-gray-300 text-sm">- CEO at EarlyBird</span></h6>
        </div>
    </div>

</div>

</section> */}
{/* 
<footer className="py-10 md:py-16 mb-20 md:mb-40 lg::mb-52">

<div className="container max-w-screen-xl mx-auto px-4">

    <div className="text-center">
        <h1 className="font-medium text-gray-700 text-4xl md:text-5xl mb-5">Testimonial</h1>

        <p className="font-normal text-gray-400 text-md md:text-lg mb-20">I’m not currently taking on new client work but feel free to contact me for any <br/> other inquiries.</p>

        <div className="flex items-center justify-center space-x-8">
            <a href="#" className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
                <i data-feather="twitter" className="text-gray-500 hover:text-gray-800 transition ease-in-out duration-500"></i>
            </a>

            <a href="#" className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
                <i data-feather="dribbble" className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500"></i>
            </a>

            <a href="#" className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
                <i data-feather="facebook" className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500"></i>
            </a>

            <a href="#" className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
                <i data-feather="codepen" className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500"></i>
            </a>

            <a href="#" className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
                <i data-feather="at-sign" className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500"></i>
            </a>

            <a href="#" className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
                <i data-feather="instagram" className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500"></i>
            </a>
        </div>
    </div>

</div>

</footer> */}


<script>
feather.replace()
</script>
    </div>
  );
}
