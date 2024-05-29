//import { expect } from "chai";
import { ethers } from "hardhat";
//import { YourContract } from "../typechain-types";

describe("ContributionsNFT", function () {
  // We define a fixture to reuse the same setup in every test.

  let contributionsNFT: ContributionsNFT;
  let contribuData: ContribuData;
  before(async () => {
    //const [owner] = await ethers.getSigners();
    const contribuDataFactory = await ethers.getContractFactory("ContribuData");
    contribuData = (await contribuDataFactory.deploy()) as ContribuData;

    const contributionsNFTFactory = await ethers.getContractFactory("ContributionsNFT");
    contributionsNFT = (await contributionsNFTFactory.deploy(
      "0x4200000000000000000000000000000000000021",
      "0x4200000000000000000000000000000000000020",
      "0x6d31aea5da7ef46bfaf9b2842fd5013fb1db5a46a24c855b361dbdee1f855573",
      await contribuData.getAddress(),
      "Contributions NFT",
      "CNFT",
    )) as ContributionsNFT;
    await contributionsNFT.waitForDeployment();
    await contribuData.setContribuAddress(await contributionsNFT.getAddress());
  });

  describe("Deployment", function () {
    it("Should be able to set contribution", async function () {
      await contributionsNFT.mint("0xdD2FD4581271e230360230F9337D5c0430Bf44C0");
      await contributionsNFT.setContribution("1", "1", "5", "Just testing");
      //expect(await contributionsNFT.greeting()).to.equal("Building Unstoppable Apps!!!");
    });
  });
});
