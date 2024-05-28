import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

/**
 * Deploys a contract named "ContributionsNFT" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployContribuData: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  /*
    On localhost, the deployer account is the one that comes with Hardhat, which is already funded.

    When deploying to live networks (e.g `yarn deploy --network sepolia`), the deployer account
    should have sufficient balance to pay for the gas fees for contract creation.

    You can generate a random account with `yarn generate` which will fill DEPLOYER_PRIVATE_KEY
    with a random private key in the .env file (then used on hardhat.config.ts)
    You can run the `yarn account` command to check your balance in every network.
  */
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  console.log("Deploying ContribuData contract 🚀");
  await deploy("ContribuData", {
    from: deployer,
    log: true,
  });
  const contribuData = await hre.ethers.getContract<Contract>("ContribuData", deployer);
  console.log("🚀 ContribuData deployed at:", await contribuData.getAddress());

  await deploy("ContributionsNFT", {
    from: deployer,
    // Contract constructor arguments
    args: [
      "0x4200000000000000000000000000000000000021",
      "0x4200000000000000000000000000000000000020",
      "0x6d31aea5da7ef46bfaf9b2842fd5013fb1db5a46a24c855b361dbdee1f855573",
      await contribuData.getAddress(),
      "Contributions NFT",
      "CNFT",
    ],

    log: true,
    // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
    // automatically mining the contract deployment transaction. There is no effect on live networks.
    // autoMine: true,
  });

  // Get the deployed contract to interact with it after deploying.
  const contributionsNFT = await hre.ethers.getContract<Contract>("ContributionsNFT", deployer);
  console.log("🚀 ContributionsNFT deployed at:", await contributionsNFT.getAddress());

  console.log("Setting the contribu address on the data contract...");
  await contribuData.setContribuAddress(await contributionsNFT.getAddress());
  console.log("Contribu address was set, contribu us ready!");
};

export default deployContribuData;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployContribuData.tags = ["ContribuData"];
