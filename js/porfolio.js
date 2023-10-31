let portfolioProject = document.getElementById("portfolioProject");

let dummyArr = [
  {
    image: "images/SET.jpeg",
    subheading: "Crypto-Wallet",
    heading: `This is a crypto wallet that has major functionalities of a wallet.`,
    desc1: `Send Token: Easily send cryptocurrency tokens to other wallet addresses.
Create Account: Create new cryptocurrency wallet accounts with ease.
Import Account with Seed Phrase: Recover your wallet by importing it using a seed phrase.
Import Account with Private Key: Access your wallet by importing it using a private key.
Create Another Account with Seed Phrase: Add multiple wallet accounts using seed phrases.
Login: Securely log in to your wallet to manage your assets, Swap and lots more..`,
    techStack: ` React Native, Expo, Redux, Ethers js, Solidity, Foundry (Click on view project to see steps on how to run the project)`,
    link: "https://github.com/collinstb01/Crypto-Wallet",
    watchYoube: "Watch on youtube (Soon)",
  },
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
    image: "images/p4.png",
    subheading: "Somidax",
    heading: `A Decentralized Application.`,
    desc1: `A Decentralized Application that allow users to create NFTS, create auctions, Bid NFTS, Transfer tokens from his/her account to anoether, allows users to withdraw funds etc`,
    techStack: ` React.js, Redux, Node Js, Mongodb (MERN Stack), Solidity, Ether js, Web3`,
    link: "https://somidax.netlify.app/",
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
  {
    image: "images/p2.png",
    subheading: "Banking Web App",
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
    image: "images/t.png",
    subheading: "Sonie Seams Fashion Store",
    heading: `A Fashion Desginer web app.`,
    desc1: `A Web App that showcase new fashion trends from sonie seams store. Basically users get to see ne jobs from sonie seams store and can also reach out if they find anything interesting`,
    techStack: ` React.js, Redux, Framer Motion, Gsap, Locomotive scroll`,
    link: "https://github.com/collinstb01/Fashion-Web",
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
               <div class="yotube">
                <p><a href=${val.link} target="_blank">View Project</a></p>
                <p><a href=${val.link} target="_blank">${
    val.watchYoube ? val.watchYoube : ""
  }</a></p>
               </div>
              </div>
            </div>`;
  portfolioProject.append(div);
});
