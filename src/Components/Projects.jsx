import styles from '../skills.module.css'
import { useState } from 'react';
import Project from './project';
import Modal from './modal';

const projects = [
  {
    title: "EcoAir",
    src: "aqi.png",
    color: "#15011e",
    description: "An elegant and intuitive Android application \ndesigned and developed to track Air Quality \nIndex (AQI) in remote areas.",
    link: "https://github.com/itsguneetsingh/EcoAir"
  },
  {
    title: "QR Share",
    src: "QR.png",
    color: "#15011e",
    description: "A user-friendly Flutter app for effortless sharing \nof images, text, videos, and more, simply by \nscanning a QR Code.",
    link: "https://github.com/itsguneetsingh/Data-Sharing-App"
  },
  {
    title: "Brain Tune",
    src: "Tumor.png",
    color: "#15011e",
    description: "An advanced algorithm developed to \n detect brain tumors, aiding in early \n diagnosis and improving patient outcomes.",
    link: "https://github.com/itsguneetsingh/Brain-Tumor"
  },
  {
    title: "Folio",
    src: "Folio.png",
    color: "#15011e",
    description: "Designed and developed a portfolio \nwebsite to showcase my projects and \nachievements, using React.js",
    link: "https://github.com/itsguneetsingh/folio"
  }
]

export default function Projects() {

  const [modal, setModal] = useState({active: false, index: 0})

  return (
  <main className={styles.main}>
    <div className={styles.body}>
      {
        projects.map( (project, index) => {
          console.log(project)
          return <Project index={index} title={project.title} description={project.description} link={project.link} setModal={setModal} key={index}/>
        })
      }
    </div>
    <Modal modal={modal} projects={projects}/>
  </main>
  )
}