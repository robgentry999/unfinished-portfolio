import { FaRegFilePdf } from 'react-icons/fa'

export default function About() {
    return (
        <div id='about' className="container about">
            <h1 className="about__header">About me</h1>
            
            <div className="about__body-full">
                <p className="about__body">
                Having just graduated high school, I see no better time then now to start getting to where I want to be. I've enjoyed every part of technology I've come across, and have always felt the desire to learn how these intricate screens are able to display different things. Before I felt as though programming was only a profession for the insanely smart, but after watching videos explaining how easy it is to get started I saw what these videos preached was true.</p>
                <p className="about__body">I have goals on eventually building my own social media company as big as Snapchat or Facebook, but until that goal becomes more attainable my current one is to work as a Frontend Developer for a company that I have personal interests in, or that has an opportunity for me to learn great things. As of May 2022, I plan on going to college for software engineering.</p>
            </div>

            <a href="https://drive.google.com/file/d/1P3VwtHDemGb5TBIFeBVTyglbBLrmxYfK/view?usp=sharing" target="_blank" rel="noreferrer" className="about__link">View resume <FaRegFilePdf className="about__link-icon" /></a>
        </div>
    )
}
