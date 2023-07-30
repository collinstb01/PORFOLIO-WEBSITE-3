let portfolioProject = document.getElementById("portfolioProject");

let dummyArr = [
  {
    image: "images/p1.png",
    subheading: "Nos Admin Dashboard",
    heading: `A Live Admin Dashboard built to manage the data of customers`,
    desc1: `This powerful tool, allows seamless management of customer data.
    Collaborating with
    skilled back-end developers, we ensured real-time updates, user-friendly interface, and robust
    analytics.`,
    techStack: `React.js, Redux, Collaborative Back-End`,
    link: "https://nos-admin-test.netlify.app/",
  },
  {
    image: "images/p2.png",
    subheading: "Online Banking Web App",
    heading: `A secure and user-friendly platform designed to offer a modern banking
    experience`,
    desc1: `This software
                  allows users to
                  seamlessly send and receive money, make deposits and withdrawals, and track their transaction history.
                  Each user is
                  provided with a unique account number upon registration for a personalized experience.`,
    techStack: `React.js, Redux, Node Js, Mongodb (MERN Stack)`,
    link: "https://github.com/collinstb01/Online-Baking",
  },
  {
    image: "https://i.ibb.co/7CmVbCW/image.png",
    subheading: "Memories Web App",
    heading: `A User-friendly platform designed for users that want to share and
    store their beatiful memories`,
    desc1: `This web app
    allows users to
    seamlessly create, comment, like, filter memories and also able to create an account either by using
    google or their user name and password.`,
    techStack: ` React.js, Redux, Node Js, Mongodb (MERN Stack)`,
    link: "https://github.com/collinstb01/Memories-Web-App.git",
  },
];

// const paginationLimit = 2;
// const pageCount = Math.ceil(dummyArr.length / paginationLimit);
// let currentPage;

dummyArr.forEach((val, i) => {
  let div = document.createElement("div");

  div.innerHTML = `<div class="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
              <a href=${val.link}
                class="image ${
                  i % 2 != 0 ? "order-2" : ""
                } d-flex justify-content-center align-items-center"
                style="background-image: url('${
                  val.image
                }'); " data-scrollax=" properties: { translateY: '-30%'}">
                <div class="icon d-flex text-center justify-content-center align-items-center">
                  <span class="icon-search"></span>
                </div>
              </a>
              <div class="text ${i % 2 != 0 ? "order-1" : ""}">
                <h4 class="subheading">${val.subheading}</h4>
                <h2 class="heading"><a>${val.heading}</a>
                </h2>
                <p>${val.desc1}<br>
                  <strong>Tech Stack:</strong> ${val.techStack}
                </p>
                <p><a href=${val.link} target="_blank">View Project</a></p>
              </div>
            </div>`;
  portfolioProject.append(div);
});
