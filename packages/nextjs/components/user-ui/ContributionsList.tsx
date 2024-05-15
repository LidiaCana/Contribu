// /* eslint-disable @next/next/no-img-element */
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import CeremonyCard from "./CeremonyCard";
// import getAllCeremonies from "~~/actions/getAllCeremonies";
// import { Spinner } from "~~/components/Spinner";
// import { appChains } from "~~/services/web3/wagmiConnectors";
// import { transformCeremoniesData } from "~~/utils/ceremonyDataUtils";
// import { CeremonyData } from "~~/utils/ceremonyInterface";

// export const ContributionsList = () => {
//   const router = useRouter();
//   const [ceremonies, setCeremonies] = useState<CeremonyData[]>([]);
//   const [_nft, setNFT] = useState<any[]>([]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const result = await getAllCeremonies();
//         if (result !== undefined) {
//           const mappedCeremonies = transformCeremoniesData(result);
//           setCeremonies(mappedCeremonies);
//           // console.log('renderCeremonies: ', ceremonies);

//           const nftData = await Promise.all(
//             mappedCeremonies.map(ceremony =>
//               fetchNFTMetadata(ceremony.nftContractAddress.toString(), ceremony.nftID.toString()),
//             ),
//           );
//           setNFT(nftData);
//         } else {
//           console.log("renderCeremonies: undefined & ", null);
//         }
//       } catch (error) {
//         console.error("Error fetching ceremonies:", error);
//       }
//     }

//     fetchData();
//   }, []);

//   async function fetchNFTMetadata(nftContract: string, nftID: string) {
//     console.log("nftContract: ", nftContract);
//     console.log("ID: ", nftID);
//     const _RPC = appChains.chains[0].rpcUrls.default.http[0];
//     try {
//       const FetchNFTMetadata = require("fetch-nft-metadata")(_RPC);
//       console.log("FetchNFTMetadata", FetchNFTMetadata);
//       const result = await FetchNFTMetadata.fetch(nftContract, parseInt(nftID));
//       console.log("Resultado del FetchNFTMetada", result);
//       return result;
//     } catch (error) {
//       console.error("Error fetching NFT metadata:", error);
//     }
//   }

//   if (!ceremonies || ceremonies === undefined || ceremonies.length < 0) {
//     return (
//       <div className="mt-14">
//         <Spinner width="50px" height="50px" />
//       </div>
//     );
//   } else {
//     return (
//       <div className="my-4 mx-4 h-screen">
//         {ceremonies !== undefined && ceremonies.length > 0 ? (
//           <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
//             {ceremonies.map((ceremony, index) => (
//               <CeremonyCard
//                 key={index}
//                 ceremony={ceremony}
//                 nftData={index < _nft.length ? _nft[index] : null}
//                 onClick={() => router.push(`/ceremony/${index}`)}
//               />
//             ))}
//           </div>
//         ) : (
//           <div className="text-xl">No Ceremonies Yet</div>
//         )}
//       </div>
//     );
//   }
// };
