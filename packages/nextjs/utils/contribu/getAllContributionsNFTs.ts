import { readContract } from "@wagmi/core";
import scaffoldConfig from "~~/scaffold.config";
import { wagmiConfig } from "~~/services/web3/wagmiConfig";
import { AbiFunctionReturnType, ContractAbi, contracts } from "~~/utils/scaffold-eth/contract";

type ContributionsNFTAbi = ContractAbi<"ContributionsNFT">;

type contributionNFTReturnType = AbiFunctionReturnType<ContributionsNFTAbi, "ownerOf">;

type contributionNFTCountReturnType = AbiFunctionReturnType<ContributionsNFTAbi, "tokenCount">;

const deployedContract = contracts?.[scaffoldConfig.targetNetworks[0].id]?.["ContributionsNFT"];

export async function FetchContributionNFTOwner(index: bigint) {
  if (deployedContract?.address !== undefined && deployedContract?.abi !== undefined) {
    const data = await readContract(wagmiConfig, {
      functionName: "ownerOf",
      args: [index],
      address: deployedContract?.address,
      abi: deployedContract?.abi,
    });
    return data as contributionNFTReturnType;
  }
}

export async function FetchTotalContributionNFT() {
  if (deployedContract?.address !== undefined && deployedContract?.abi !== undefined) {
    const data = await readContract(wagmiConfig, {
      functionName: "tokenCount",
      address: deployedContract?.address,
      abi: deployedContract?.abi,
    });
    return data as contributionNFTCountReturnType;
  }
}

export default async function getAllContributionNFT(apiString: string) {
  const allContributionNFT = [];
  if (deployedContract?.address !== undefined && deployedContract?.abi !== undefined) {
    try {
      const contributionNFTCount = await FetchTotalContributionNFT();

      if (contributionNFTCount !== undefined && typeof contributionNFTCount === "bigint") {
        for (let i = 1n; i <= contributionNFTCount; i++) {
          const contributionNFTOnwer = await FetchContributionNFTOwner(i);
          if (contributionNFTOnwer !== undefined) {
            // const strRequest = "https://todosland.xyz/" + i;apiString
            const strRequest = apiString + i;
            const nftDetails = await fetch(strRequest);
            if (nftDetails !== undefined && nftDetails.ok) {
              const response = await nftDetails.json();
              const nftResponse = { ...response, nftOwner: contributionNFTOnwer };
              allContributionNFT.push(nftResponse);
            }
          }
        }
        return allContributionNFT;
      }
    } catch (error) {
      console.error("Error reading contributionNFT", error);
    }
  }
}
