# 🏗 Contribu

## 🤔 Que es Contribu?

🧪 Contribu es un proyecto de código abierto de NFT cuyo objetivo es crear un sistema de cooperación comunitaria en donde los miembros de las comunidades tengan reconocimiento por la cantidad de aportaciones que actualmente están impactando y ayudando a su comunidad a crecer.

👾 Contribu aprovecha los Servicios de Atestación de Ethereum (EAS) para verificar y recompensar las contribuciones de los miembros. Su algoritmo está diseñado para ayudar a las comunidades a reconocer las contribuciones de los miembros a través de NFT dinámicas que evolucionan en función de puntos acumulados mutables a través del tiempo.

## Que resolvemos?

Hemos observado que en muchas comunidades la participación de sus miembros es muy activa cuando un proyecto está comenzando. Las personas están muy inspiradas y entusiasmadas por contribuir. Sin embargo, a medida que pasa el tiempo, los miembros pierden interés y la participación que mantenía viva a la comunidad se va apagando.

### Resolvemos dos puntos importantes:

1. Con nuestro sistema de reconocimiento de NFT dinámicas, incentivamos a los miembros a continuar participando continuamente para que su estatus como contribuidor prevalezca, impulsando el sentido de colaboración de cada miembro.
2. La equidad de voz y voto basada en la actividad y colaboraciones de los miembros.

## Como funciona?

Para lograr nuestro objetivo de fomentar una cultura constantemente cooperativa en las comunidades de blockchain nos basamos en la siguiente dinamica:

Los miembros de una comunidad tendran un NFT dinamico (establecido por los administradores de dicha comunidad) que cambiara en base a una medicion de puntos que representa las contribuciones que cada miembro ha realizado.

Si en un largo periodo de tiempo (Determinado por los admin de la comunida) se detecta inactividad de el integrante, el algoritmo comenzara a bajar puntos de participacion a esta persona. Y el NFT mutara para ajustarse a la cantidad de puntos.

Consideraciones:

### Colección PFP

Los organizadores de la comunidad pueden crear su propia Colección Contribu. Cada colección es un contrato NFT compatible con ERC 721 lanzado en la cadena de su elección. Cada NFT representa las contribuciones específicas de un individuo dentro de la comunidad.

### Puntos dinámicos

Las contribuciones se segmentan en tipos y los organizadores comunitarios tienen la libertad de elegir categorías que reflejen los valores de su comunidad. Las personas pueden acumular puntos contribuyendo a la comunidad, y estos puntos son visibles en todos los mercados y visualizadores de NFT.

### Sistema de caída de puntos (mecánica Anti OG)

Contribu encuentra un equilibrio entre recompensar tanto a los originales como a los recién llegados mediante la implementación de una función de caída automática. Esta función reduce gradualmente los puntos a lo largo del tiempo, favoreciendo las contribuciones continuas sobre las grandes realizadas en el pasado lejano.

La fórmula de puntos dinámicos se calcula en cadena, lo que permite que otros contratos se conecten con Contribu para consultar puntos. Esta característica abre la puerta a módulos de gobernanza, lanzamientos aéreos y accesos especiales.

Fórmula de desintegración en cadena:

## Case uses and examples.

## Future features.

- ✅ **Contract Hot Reload**: Your frontend auto-adapts to your smart contract as you edit it.
- 🪝 **[Custom hooks](https://docs.contribu.io/hooks/)**: Collection of React hooks wrapper around [wagmi](https://wagmi.sh/) to simplify interactions with smart contracts with typescript autocompletion.
- 🧱 [**Components**](https://docs.contribu.io/components/): Collection of common web3 components to quickly build your frontend.
- 🔥 **Burner Wallet & Local Faucet**: Quickly test your application with a burner wallet and local faucet.
- 🔐 **Integration with Wallet Providers**: Connect to different wallet providers and interact with the Ethereum network.

![Debug Contracts tab](https://github.com/contribu/contribu/assets/55535804/b237af0c-5027-4849-a5c1-2e31495cccb1)

## Requirements

Before you begin, you need to install the following tools:

- [Node (>= v18.17)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

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

## Documentation

Visit our [docs](https://docs.contribu.io) to learn how to start building with Contribu.

To know more about its features, check out our [website](https://contribu.io).

## Contributing to Contribu

We welcome contributions to Contribu!

Please see [CONTRIBUTING.MD](https://github.com/ContribuDev/Contribu/blob/main/CONTRIBUTING.md) for more information and guidelines for contributing to Contribu.

## Notes

### Verification for not supported Chains

```sh
yarn verify --api-url https://api-sepolia-optimistic.etherscan.io
```
