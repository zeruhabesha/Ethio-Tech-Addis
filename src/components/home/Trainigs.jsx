/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export default function Trainings() {
  return (
    <div className="relative z-20 flex px-5 md:px-0 flex-col justify-center items-center bg-white w-full h-auto ">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full px-4">
          <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
            <h2
              className="
                   font-bold
                   text-3xl
                   sm:text-4xl
                   md:text-[40px]
                   text-dark
                   mb-4
                   font-raleway
                   "
            >
              Trainings
            </h2>
            <p className="text-base font text-gray-400">
              There are many variations of passages of Lorem Ipsum available
              but the majority have suffered alteration in some form.
            </p>
          </div>
        </div>
      </div>
      <div className="relative z-20 flex flex-col md:flex-row full gap-4 mx-auto mb-20">
        {/* CISSP Training */}
        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm">
          <a href="#">
            <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="CISSP Image" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">CISSP Certification Training</h5>
            </a>
            <p className="font-normal text-gray-700 mb-3">
              Comprehensive training program for CISSP certification, covering all domains and exam preparation.
            </p>
          </div>
        </div>

        {/* PMP Training */}
        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm">
          <a href="#">
            <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="PMP Image" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">PMP Certification Training</h5>
            </a>
            <p className="font-normal text-gray-700 mb-3">
              Prepare for the PMP exam with our structured training program, focusing on project management principles.
            </p>
          </div>
        </div>

        {/* CISA Training */}
        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm">
          <a href="#">
            <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="CISA Image" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">CISA Certification Training</h5>
            </a>
            <p className="font-normal text-gray-700 mb-3">
              Learn essential auditing and control skills required for the CISA certification exam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
