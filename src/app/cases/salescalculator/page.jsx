import Navbar from '@/components/Navbar/navbar'
import Image from 'next/image'
import React from 'react'
import Styles from './salescalculator.module.scss'

export default function SalesCalculator() {
  return (
    <>
      <Navbar />
      <div>
        <Image
          className="mb-5"
          src="/images/Cases/salescalculator/Group 142362.svg"
          alt="mariamorais"
          height={576}
          width={1920}
          layout="responsive"
          loading="eager"
        />
      </div>

      <div className="container ">
        <div className="row align-items-start">
          {/* Menu lateral para telas md e lg */}
          <div className="d-none d-md-block col-md-2">
            <ul className={`${Styles.summary} list-unstyled`}>
              <li className="mb-3 jm_headderSmall" style={{ color: '#5E5E5E' }}>
                Project Context
              </li>
              <li className="mb-3">
                <a className="jm_headderSmall" href="#Kick-off">Kick-off</a>
              </li>
              <li className="mb-3">
                <a className="jm_headderSmall" href="#Benchmarking">Benchmarking</a>
              </li>
              <li className="mb-3">
                <a className="jm_headderSmall" href="#Co-Creation Workshop">Co-Creation Workshop</a>
              </li>
              <li className="mb-3">
                <a className="jm_headderSmall" href="#User Flow">User Flow</a>
              </li>
              <li className="mb-3">
                <a className="jm_headderSmall" href="#Prototype">Prototype</a>
              </li>
              <li className="mb-3">
                <a className="jm_headderSmall" href="#Design Critique - 01">Design Critique - 01</a>
              </li>
              <li className="mb-3">
                <a className="jm_headderSmall" href="#Design Critique - 02">Design Critique - 02</a>
              </li>
              <li className="mb-3">
                <a className="jm_headderSmall" href="#Usability Test">Usability Test</a>
              </li>
              <li>
                <a className="jm_headderSmall" href="#Next Steps">Next Steps</a>
              </li>
            </ul>
          </div>

          {/* Dropdown para telas pequenas */}

          <div className="d-block d-md-none col-12 mb-3">
            <div className={`${Styles.menudpd} dropdown`}>
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Project Context
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                  <a className="dropdown-item" href="#Kick-off">Kick-off</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#Benchmarking">Benchmarking</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#Co-Creation Workshop">Co-Creation Workshop</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#User Flow">User Flow</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#Prototype">Prototype</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#Design Critique - 01">Design Critique - 01</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#Design Critique - 02">Design Critique - 02</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#Usability Test">Usability Test</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#Next Steps">Next Steps</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Conteúdo principal */}
          <div className="col-12 col-md-10 d-flex justify-content-center">
            <div className={`${Styles.content} mb-5 `}>
              <div className="title jm_headderLarge">
                <p>Optimizing Sales Quoting: A Scalable UX Solution</p>
                <p className='mb-5'>for Pricing Efficiency</p>
              </div>
              <p className=" mb-2  jm_headderMedium" style={{ color: "var(--dark02)" }}>
                Project Context
              </p>

              <div style={{ color: "var(--dark02)" }}>
                <p>This <b>four-month project</b> aimed to develop an internal product for Cloverpop. </p>
                <p><b>I worked as a UX/UI Designer</b> alongside Rafael Mathias, collaborating with PMs, developers, and QA under the Design Head’s leadership.</p>
              </div>

            
            </div>

            
          </div>
        </div>
      </div>
    </>
  )
}



