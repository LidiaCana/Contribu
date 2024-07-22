## Quickstart

To get started with Contribu, follow the steps below:

1. Clone this repo & install dependencies

   ```sh
   git clone https://github.com/ContribuDev/Contribu.git
   cd contribu
   yarn install
   ```

2. Run a local network in the first terminal:

   ```sh
   yarn chain
   ```

   This command starts a local Ethereum network using Hardhat. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in `hardhat.config.ts`.

3. On a second terminal, deploy the test contract:

   ```sh
   yarn deploy
   ```

   This command deploys a test smart contract to the local network. The contract is located in `packages/hardhat/contracts` and can be modified to suit your needs. The `yarn deploy` command uses the deploy script located in `packages/hardhat/deploy` to deploy the contract to the network. You can also customize the deploy script.

4. On a third terminal, start your NextJS app:

   ```sh
   yarn start
   ```

   Visit your app on: `http://localhost:3000`. You can interact with your smart contract using the `Debug Contracts` page. You can tweak the app config in `packages/nextjs/scaffold.config.ts`.

## Testing the contracts

Due to EAS dependency, forking is necesary for running the tests:

```
yarn fork --fork YOUR_NETWORK_URL
```

Now open another terminal and run.

```
yarn test-localhost
```

Note: very generous RPC is needed to run the tests. Otherwise you will get `429 too many requests`. Alchemy is recomended.

**What's next**:

- Edit your smart contract `YourContract.sol` in `packages/hardhat/contracts`
- Edit your frontend homepage at `packages/nextjs/app/page.tsx`. For guidance on [routing](https://nextjs.org/docs/app/building-your-application/routing/defining-routes) and configuring [pages/layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts) checkout the Next.js documentation.
- Edit your deployment scripts in `packages/hardhat/deploy`
- Edit your smart contract test in: `packages/hardhat/test`. To run test use `yarn hardhat:test`
