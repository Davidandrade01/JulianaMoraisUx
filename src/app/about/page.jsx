import React from "react"
import Image from "next/image"

import Navbar from "@/components/Navbar/navbar"
import Footer from "@/components/Footer/Footer"
import CvBtn from "@/components/CV/CvBtn"

export default function About() {
  return (
    <div>
      <Navbar />

      {/* Container para centralizar e dar largura de 75% */}
      <div className="container w-75 mx-auto py-5">
        <div className="row align-items-center">
          
          {/* Coluna do texto */}
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            
            <div className="jm_headderLarge mb-5">
              <p><b>Hey you,</b></p>
              <p><b>nice to meet!</b></p>
            </div>

            {/* Imagem para dispositivos móveis (exibida logo após o cabeçalho) */}
            <div className="d-md-none mb-5">
              <Image
                src="/images/Profile/mjabout.svg"
                alt="Juliana Morais"
                layout="responsive"
                width={687}
                height={774}
              />
            </div>

            <div className="jm_paragraphMedium mb-5">
              <p>
                I’m a UX Designer with a background in design and architecture, bringing over 10 years of experience in crafting user-centered solutions. I’ve collaborated with major brands like FIFA World Cup 2014, Petrobras, Nickelodeon, Shell, and Comic Con Portugal, working on projects that merge creativity, strategy, and user needs.
              </p>
              <p>
                Throughout my career, I've had the opportunity to work on projects like developing an internal product at Cloverpop. I analyzed requirements, identified gaps, and designed user flows, interfaces, and prototypes. I also led usability testing to ensure a smooth user experience. Using agile methodologies, I reduced revision cycles by 40%, improving process efficiency and delivering results faster.
              </p>
              <p>
                At Gema, I applied Design Thinking to shape a product in its Discovery phase. I conducted user research, facilitated workshops, and created personas and journey maps to strengthen cross-team collaboration. The insights uncovered new business opportunities, securing the product’s first contracts.
              </p>
              <p>
                I am driven by data, creative thinking, and collaboration to design intuitive and engaging solutions with a user-centric approach to tackle complex challenges. By ensuring strategic alignment and clear communication within multidisciplinary teams, I deliver impactful results that drive business success.
              </p>
            </div>

            {/* Botão alinhado à esquerda */}
            <div className="text-start">
              <CvBtn />
            </div>
          </div>

          {/* Coluna da imagem para telas maiores */}
          <div className="col-12 col-md-6 d-none d-md-flex justify-content-center mb-5">
            <Image
              src="/images/Profile/mjabout.svg"
              alt="Juliana Morais"
              layout="responsive"
              width={687}
              height={774}
              loading="eager"
            />
          </div>
          
        </div>
      </div>


          <div className=" jm_headderLarge d-flex justify-content-center mb-5">
            <p>I´m manny things</p>
          </div>
          

      <Footer />
    </div>
  )
}