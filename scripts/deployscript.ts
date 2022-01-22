import { utils } from "ethers";

const hre = require("hardhat");

async function main() {
  console.log("all good");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
