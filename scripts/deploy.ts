const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const Token = await ethers.getContractFactory("Token");
  const initialSupply = "1000000000000000000000"; // 1000 tokens

  /*
  const name = "L1XToken";
  const symbol = "XT";
  const decimals = 18;
  */

  const token = await Token.deploy(
    initialSupply
    // name,
    // symbol,
    // decimals
  );

  console.log("Token deployed to ", await token.getAddress());
  let hash = token.deploymentTransaction().hash;
  console.log("Deployment hash ", hash);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
