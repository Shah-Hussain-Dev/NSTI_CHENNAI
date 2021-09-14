const data = [
  {
    name: "Shah Hussain",
    image: "./images/Students/shah.png",
    links: [
      {
        github: "https://github.com/Shah-Hussain-Dev",
        linked: "https://www.linkedin.com/in/shahhussain101/",
        portfolio: "https://shah-hussain-dev.github.io/MyPortfolio/",
      },
    ],
  },
  {
    name: "Shwetank Shukla",
    image: "./images/students/shwetank.png",
    links: [
      {
        github: "https://shwetank111.github.io/Portfolio/",
        linked: "https://www.linkedin.com/in/shwetank-shukla-b39b41145",
        portfolio: "https://shwetank111.github.io/Portfolio/",
      },
    ],
  },
  {
    name: "Avinash Kumar",
    image: "./images/Students/avinash.png",
    links: [
      {
        github: "https://bavinash2020.github.io/portfolio/",
        linked: "https://www.linkedin.com/in/avinash-kumar-508a521a5",
        portfolio: "https://bavinash2020.github.io/portfolio/",
      },
    ],
  },
  {
    name: "Vikas Kumar",
    image: "./images/students/vikas.png",
    links: [
      {
        github: "https://github.com/Jarvis-Ai-404",
        linked: "https://www.linkedin.com/in/vikash-kumar-b4979a1a5",
        portfolio: "https://jarvis-ai-404.github.io/portfolio/portfolio_ps/",
      },
    ],
  },
  {
    name: "Vignesh M.",
    image: "./images/Students/vig.png",
    links: [
      {
        github: "http://vignesh2396.github.io/",
        linked: "https://www.linkedin.com/in/vignesh-m-1bb7771a5/",
        portfolio: "http://vignesh2396.github.io/",
      },
    ],
  },
  {
    name: "Rameshwar Fulsundar",
    image: "./images/Students/ramesh.png",
    links: [
      {
        github: "#",
        linked: "#",
        portfolio: "#",
      },
    ],
  },
  {
    name: "Sumit Chandra",
    image: "./images/Students/sumit.png",
    links: [
      {
        github: "https://sumitchandra990.github.io/myportfolio/",
        linked: "linkedin.com/in/sumit-chandra-0b53391aa",
        portfolio: "https://sumitchandra990.github.io/myportfolio/",
      },
    ],
  },
  {
    name: "Raman Singh",
    image: "./images/Students/raman.png",
    links: [
      {
        github: "#",
        linked: "#",
        portfolio: "#",
      },
    ],
  },
  {
    name: "Sumedh Wankhade",
    image: "./images/Students/sumedh.png",
    links: [
      {
        github: "https://virus1122.github.io/My-Portfolio/",
        linked: "https://www.linkedin.com/in/sumedh-wankhede-910892199",
        portfolio: "https://virus1122.github.io/My-Portfolio/",
      },
    ],
  },
  {
    name: "Swetha",
    image: "./images/Students/sweta.png",
    links: [
      {
        github: "https://swethamaaleyam.github.io/Swetha_portfolio.github.io/",
        linked: "https://www.linkedin.com/in/swetha-ms-554a881a5",
        portfolio:
          "https://swethamaaleyam.github.io/Swetha_portfolio.github.io/",
      },
    ],
  },
  {
    name: "Shashank Khushwaha",
    image: "./images/Students/shashank.png",
    links: [
      {
        github: "https://shashank-kushwaha.github.io/portfolio.githb.io/",
        linked: "linkedin.com/in/shashank-k-0267ab1a5",
        portfolio: "https://shashank-kushwaha.github.io/portfolio.githb.io/",
      },
    ],
  },
  {
    name: "Saurabh Sharma",
    image: "./images/students/vikas.png",
    links: [
      {
        github: "#",
        linked: "#",
        portfolio: "#",
      },
    ],
  },
  {
    name: "Komal Kumari",
    image: "./images/Students/komal.png",
    links: [
      {
        github: "https://1komalrani.github.io/komall.github.io/",
        linked: "https://www.linkedin.com/in/komal-kumari-43aa4b1a5",
        portfolio: "https://1komalrani.github.io/komall.github.io/",
      },
    ],
  },
  {
    name: "Jaiveer Singh",
    image: "./images/Students/Jaiveer.png",
    links: [
      {
        github: "https://jai-cmd.github.io/Jaiveer_Portfolio.io/",
        linked: "https://www.linkedin.com/in/jaiveer-jaiveer-b789b7162",
        portfolio: "https://jai-cmd.github.io/Jaiveer_Portfolio.io/",
      },
    ],
  },
  {
    name: "Jay Karan",
    image: "./images/Students/Jaikaran.png",
    links: [
      {
        github: "https://jaykaran1998.github.io/resume/",
        linked: "https://www.linkedin.com/in/jaykaran-kumar-5002891b2 ",
        portfolio: "https://jaykaran1998.github.io/resume/",
      },
    ],
  },
  {
    name: "Bhupendra Kumar",
    image: "./images/Students/bhupendra.png",
    links: [
      {
        github: "#",
        linked: "#",
        portfolio: "#",
      },
    ],
  },
  {
    name: "Devesh Bakalwar",
    image: "./images/Students/devesh.png",
    links: [
      {
        github: "#",
        linked: "linkedin.com/in/devesh-bakalwar-80350a203",
        portfolio: "#",
      },
    ],
  },
  {
    name: "Feba S.Raj",
    image: "./images/Students/feba.png",
    links: [
      {
        github: "https://febasraj.github.io/portfolio1.github.io/",
        linked: "linkedin.com/in/feba-s-raj-a959191a5",
        portfolio: "https://febasraj.github.io/portfolio1.github.io/",
      },
    ],
  },
  {
    name: "Banoth Suresh",
    image: "./images/Students/banoth.png",
    links: [
      {
        github: "https://github.com/Suresh9908/",
        linked: "https://www.linkedin.com/in/suresh-b-a33555a4/",
        portfolio: "https://github.com/Suresh9908/",
      },
    ],
  },
];

let card = document.getElementById("students_cards");
// console.log(card);
displayStudents();

function displayStudents() {
  data.map((student) => {
    card.innerHTML += `<div class="card" >
   <div class="media  gd-primary"> <img class="profile-image" src=${student.image}></div>
   <div class="card-body">
       <h5 class="card-title  p-2">${student.name}</h5>
    <div class="social-icon-stu">
       
       <a href=${student.links[0].github} target="_blank"><img src="images/icons/github.png" title="github Id"height="40px"></a>
       <a href=${student.links[0].portfolio} target="_blank"><img src="images/icons/cv.png " title="Portfolio" height="40px"></a>
       <a href=${student.links[0].linked} target="_blank"><img src="images/icons/linkedin.png" title="LinkedIn Id" height="40px"></a>
     </div>
         </div>
  </div>`;
  });
}

// card.innerHTML = "<h1>Hello Students</h1>";
// console.log(card);
// console.log(stu_cards);
