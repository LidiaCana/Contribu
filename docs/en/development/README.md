# Contribu NFT Collection

Contribu is designed to leverage modern technologies for optimal performance, scalability, and user experience. The core components of this architecture include Solidity for smart contract development, Node.js for the metadata API backend, and React for the frontend.

The solidity smart contract is compatible with the ERC721 standard and Ethereum Attestation Service. The Node.js API allows the dynamic NFT metadata.

| Technology Area | Stack    |
| --------------- | -------- |
| Smart Contract  | Solidity |
| Backend         | Node js  |
| Frontend        | React    |

## Features 👀

| Feature              | Supported |
| -------------------- | --------- |
| MIT License          | ✅        |
| Hide non minted NFTs | ✅        |
| Shuffle              | ✅        |
| Reveal               | ✅        |
| Handle _none_ traits | ✅        |
| IPFS                 | ✅        |
| Google Cloud Storage | ✅        |

## Deployments

| Network | Address                                      | Schema ID                                                            |
| ------- | -------------------------------------------- | -------------------------------------------------------------------- |
| OP      | `0x8d5cDc7d6cABc13bf982F3c39f3FA5bcaC7Da59b` | `0x6d31aea5da7ef46bfaf9b2842fd5013fb1db5a46a24c855b361dbdee1f855573` |
| Scroll  | `0xC361DAb6B8D2BD50B252EAb774b3AF83d156Bd50` |                                                                      |

## Networks pre-configured

- sepolia
- arbitrum
- arbitrumSepolia
- optimism
- optimismSepolia
- polygon
- polygonMumbai
- polygonZkEvm
- polygonZkEvmTestnet
- gnosis
- chiado
- scroll

\*\* If the network you are looking for is not here you can add new network settings [Read More](/packages/hardhat/hardhat.config.ts)

## Notes

### Verification for not supported Chains

```sh
yarn verify --api-url https://api-sepolia-optimistic.etherscan.io
```

[Quick Start Guide ->](/docs/en/development/quick%20start.md)

[How can be a Contribu ->](/CONTRIBUTING.md)
