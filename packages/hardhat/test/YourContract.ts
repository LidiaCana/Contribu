// import { expect } from "chai";
// import { ethers } from "hardhat";
// import { ContributionsNFT } from "../typechain-types";

// describe("ContributionsNFT", function () {
//   // We define a fixture to reuse the same setup in every test.

//   let contributionsNFT: ContributionsNFT;
//   before(async () => {
//     const [owner] = await ethers.getSigners();
//     const yourContractFactory = await ethers.getContractFactory("ContributionsNFT");
//     contributionsNFT = (await yourContractFactory.deploy(owner.address)) as ContributionsNFT;
//     await contributionsNFT.waitForDeployment();
//   });

//   describe("Deployment", function () {
//     it("Should have the right message on deploy", async function () {
//       expect(await contributionsNFT.greeting()).to.equal("Building Unstoppable Apps!!!");
//     });

//     it("Should allow setting a new message", async function () {
//       const newGreeting = "Learn Scaffold-ETH 2! :)";

//       await contributionsNFT.setGreeting(newGreeting);
//       expect(await contributionsNFT.greeting()).to.equal(newGreeting);
//     });
//   });
// });
