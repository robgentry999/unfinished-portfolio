import game from "../imgs/game.png"
import portfolio from '../imgs/portfolio.png'

const projects = [
    {
        name: "Quizzical",
        summary: <>A customizable quiz app built with <span>React</span> using hooks and <span>reusable functional components</span>. Data <span>fetched</span> and decoded from The Open Trivia Database <span>API</span> then used to create a series of <span>nested arrays and objects</span> which handle the display and user-input.</>,
        liveSite: "https://gk-quizzical.netlify.app/",
        githubRepo: "https://github.com/gare-Ware/Quizzical" ,
        url: "quizzical",
        screens: game
    },
    {
        name: "My Previous Portfolio",
        summary: <>A beginner and <span>simple</span> portfolio website created with Pug, <span>Node.js</span> and <span>Javascript</span> </>,
        liveSite: "https://garyk.dev/",
        githubRepo: "https://github.com/gare-Ware/garyk-portfolio",
        url: "my-portfolio",
        screens: portfolio
    } 
]

export default projects