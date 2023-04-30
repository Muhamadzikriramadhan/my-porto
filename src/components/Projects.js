import CertCard from "./CertCard.js"

import hr from "../assets/curve-hr.svg"
import pr1 from "../assets/projects/pr1.gif"
import pr2 from "../assets/projects/pr2.gif"
import pr3 from "../assets/projects/pr3.gif"
import pr4 from "../assets/projects/pr4.gif"

// import 

export default function Certs(){
    return (
        <div id="projects" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Projects</h1>
            <p className="font-light text-gray-400">Here are some of the projects I developed and built.</p>

            {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
                <CertCard name="SiPointMart" img={pr1} desc="This is a personal PPOB application, which is complete with the remittance feature." subname="PPOB App" />
                <CertCard name="Zafa POS" img={pr2} desc="This is an app that is still a work in progress, it is built with Aziz, Zikri, Arjuna and Alifa." subname="Caffe Apps"/>
                <CertCard name="Travel Tele" img={pr3} desc="This is a hotel booking application in Indonesia and booking tourist tickets in certain areas." subname="Travel & Hotel Apps"/>
                <CertCard name="SiPoint" img={pr4} desc="This is a general PPOB application, which is equipped with a remittance feature, and all payment services." subname="PPOB App"/>

            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
