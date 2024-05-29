/* eslint-disable @next/next/no-img-element */
import { ContribuOwner } from "./ContribuOwner";
import { ContributionsData } from "~~/utils/interfaces/contributionsnftinterface";

interface ContributionCardProps {
  contribution: ContributionsData;
  onClick: () => void;
}

const ContribuCard = ({ contribution, onClick }: ContributionCardProps) => {
  return (
    <div onClick={onClick} className="bg-white p-4 rounded-lg shadow-md w-200 items-center sm:w-auto">
      <h3 className="text-xl text-black font-semibold mb-2">{contribution.name.toString()}</h3>
      <div className="h-auto max-w-full">
        {contribution !== null ? (
          <img
            className="w-64 h-64"
            src={contribution?.image}
            width={200}
            height={200}
            alt={contribution?.description}
          />
        ) : (
          <p>NFT Data Not Available</p>
        )}
      </div>

      <p className="text-black">Owner:</p>
      <ContribuOwner address={contribution.nftOwner.toString()} />
    </div>
  );
};

export default ContribuCard;
