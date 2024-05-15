// import { readContract } from "@wagmi/core";
// import scaffoldConfig from "~~/scaffold.config";
// import { getTargetNetworks } from "~~/utils/scaffold-eth";
// import { AbiFunctionReturnType, ContractAbi, contracts } from "~~/utils/scaffold-eth/contract";

// type ContributionsNFTAbi = ContractAbi<"ContributionsNFT">;

// type contributionsReturnType = AbiFunctionReturnType<ContributionsNFTAbi, "ceremonies">;

// type contributionsCountReturnType = AbiFunctionReturnType<ContributionsNFTAbi, "tokenCount">;

// const deployedContract = contracts?.[scaffoldConfig.targetNetworks[0].contracts.["ContributionsNFT"];

// export async function FetchCeremony(index: bigint) {
//   if (deployedContract?.address !== undefined && deployedContract?.abi !== undefined) {
//     const data = await readContract({
//       chainId: getTargetNetworks().id,
//       address: deployedContract?.address,
//       abi: deployedContract?.abi,
//       functionName: "getContribution",
//       args: [index],
//     });
//     return data as contributionsReturnType;
//   }
// }

// export default async function getAllCeremonies() {
//   const allCeremonies = [];
//   if (deployedContract?.address !== undefined && deployedContract?.abi !== undefined) {
//     try {
//       const result = await readContract({
//         chainId: getTargetNetworks().id,
//         address: deployedContract?.address,
//         abi: deployedContract?.abi,
//         functionName: "ceremonyCount",
//       });

//       const ceremonyCount = result as contributionsCountReturnType;

//       if (ceremonyCount !== undefined && typeof ceremonyCount === "bigint") {
//         for (let i = 0n; i < ceremonyCount; i++) {
//           const ceremonyData = await FetchCeremony(i);
//           allCeremonies.push(ceremonyData);
//         }
//         return allCeremonies;
//       }
//     } catch (error) {
//       console.error("Error reading ceremonyCount", error);
//     }
//   }
// }
