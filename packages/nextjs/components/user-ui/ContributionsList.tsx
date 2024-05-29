/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Spinner } from "../Spinner";
import ContribuCard from "./ContributionCard";
import getAllContributionNFT from "~~/utils/contribu/getAllContributionsNFTs";

export const ContributionsList = () => {
  const api = "https://todosland.xyz/";
  const router = useRouter();
  const [contributions, setContributions] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getAllContributionNFT(api);
        if (result !== undefined) {
          setContributions(result);
        } else {
          console.log("renderContributions: undefined & ", null);
        }
      } catch (error) {
        console.error("Error fetching ceremonies:", error);
      }
    }

    fetchData();
  }, []);

  if (!contributions || contributions === undefined || contributions.length < 0) {
    return (
      <div className="mt-14">
        <Spinner width="50px" height="50px" />
      </div>
    );
  } else {
    return (
      <div className="my-4 mx-4">
        {contributions !== undefined && contributions.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
            {contributions.map((contribution, index) => (
              <ContribuCard
                key={index}
                contribution={contribution}
                onClick={() => router.push(`/contribution/${index + 1}`)}
              />
            ))}
          </div>
        ) : (
          <div className="text-xl">No Contributions Yet</div>
        )}
      </div>
    );
  }
};
