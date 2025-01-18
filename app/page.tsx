import { Icon, Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { siteConfig } from '@/config/site'
import React from 'react'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <section className="mt-10" id="intro">
        
        <div className='lg:flex lg:justify-between'>
          <div className="self-center lg:w-2/3">
            <h2 className='text-2xl font-semibold mb-8'>Introduction</h2>
            <div>Hi! &#128075;<br/>
                My name is Nabil, and I am a data science graduate from the Technical University of Berlin (TU
                Berlin).<br/>
                Currently I am a full stack developer at Ernst & Young.
            </div>
            <div className="actions mt-3 flex justify-center lg:justify-start">
                  <Button className='mr-2' asChild>
                    <Link href="/Resume" target="_blank" rel="noopener noreferrer">Learn More</Link>
                  </Button>
                  <Button className='mr-2' asChild>
                    <a href={siteConfig.links.email}>Contact Me</a>
                  </Button>
            </div>
          </div>
          <span className='flex mt-2 justify-center lg:mr-5'><Image className="rounded-full border w-28 lg:w-72 md:w-48"alt="My Photo" width="300" height="300" src="/lebenslauf.jpg"/></span>
        </div>
      </section>
      <hr className='mt-10'/>
      <section className="mt-10" id="projects">
        <div>
            <div>
                <header>
                    <h2 className='text-2xl font-semibold mb-10'>Projects</h2>
                </header>
                <div className="grid lg:grid-cols-3 text-center lg:mb-0 lg:text-left justify-between">
                {
                  projects.map((project) => (
                    <a
                    href={project.href}
                    key={project.title}
                    className="mb-3 mx-3 lg:mb-0 group rounded-lg border md:border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h2 className={`mb-3 flex text-xl font-semibold`}>
                      <project.icon className='h-5 m-1 mr-3' />
                      <div>
                        {project.title}{' '}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          -&gt;
                        </span>
                      </div>                      
                    </h2>
                    <div className={`m-0 max-w-fit text-sm opacity-50`}>
                    {project.description}
                    </div>
                    <div>
                      {project.tags.map((tag) => (
                        <Badge key={tag} className="mt-2 mr-1" variant="outline">{tag}</Badge>
                      ))}
                    </div>
                  </a>
                ))}
                </div>
            </div>
        </div>
      </section>
      <hr className='mt-10'/>
      <section className="mt-10" id="publications">
        <div>
            <div>
                <header>
                    <h2 className='text-2xl font-semibold mb-10'>Publications</h2>
                </header>
                <div className="mb-32 grid text-center lg:mb-0 lg:grid-flow-col-dense lg:text-left justify-between">
                {
                  publications.map((pub) => (
                    <React.Fragment key={pub.title}>
                    <a
                    href={pub.href}
                    className="group rounded-lg border md:border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h2 className={`mb-3 text-xl font-semibold`}>
                      {pub.title}{' '}
                      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                      </span>                      
                    </h2>
                    <div className={`m-0 max-w-fit text-sm opacity-50`}>
                    {pub.description}
                    </div>
                  </a>
                  </React.Fragment>
                ))}
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

const projects: { title: string; href: string; description: string; icon: Icon, tags: Array<string>}[] = [
  {
    title: "Digital Tax Intelligence",
    href: "https://ey-solution-store.de/de_de/assets/ey-digital-tax-intelligence",
    description:
      "A web application based on Vue and MongoDB for analysing SAP transactional data, optimizing VAT tax decisions and verifying SAP data quality.",
    icon: Icons.ey,
    tags: ['VueJS', 'GraphQL', 'TypeScript', 'MongoDB'],
  },
  {
    title: "Tax Engine API",
    href: "https://ey-solution-store.de/de_de/assets/ey-digital-tax-intelligence",
    description:
      "An API for VAT tax determination using SAP transactional data. A component of Digital Tax Intelligence.",
    icon: Icons.ey,
    tags: ['C#', 'SQL Server', 'API', 'MongoDB'],
  },
  {
    title: "OCR on historical documents",
    href: "https://github.com/nabildouss/ocr-project",
    description:
      "Implemented and evaluated models for Optical Character Recognition on historical documents consisting of the 'GT4HistOCR' (Springmann et al. 2018) dataset.",
    icon: Icons.search,
    tags: ['Python', 'PyTorch', 'OCR', 'Machine Learning'],
  },
  {
    title: "Multi-domain Sentiment Analysis",
    href: "/MasterThesis",
    description:
      "Designed, implemented and evaluated three different model architectures for binary sentiment analysis on textual data. The models aimed to solve the multi-domain sentiment analysis task.",
    icon: Icons.sentiment,
    tags: ['Python', 'TensorFlow', 'FastText', 'Deep Learning'],
  },
  {
    title: "TunQuiz",
    href: "https://github.com/nabildouss/TunQuiz",
    description:
      "Implemented an android application consisting of a short quiz about my beloved home, Tunisia.",
    icon: Icons.dices,
    tags: ['Java', 'Android', 'XML'],
  },
]

const publications: { title: string; href: string; description: string;}[] = [
  {
    title: "REFORMIST: Hierarchical Attention Networks for Multi-Domain Sentiment Classification with Active Learning",
    href: "https://dl.acm.org/doi/10.1145/3555776.3577689",
    description:
      "SAC '23: Proceedings of the 38th ACM/SIGAPP Symposium on Applied Computing March 2023 Pages 919\–928",
  },
]
