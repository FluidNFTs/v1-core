import { Signer } from "ethers";
import { expect } from "chai";
const { ethers, upgrades } = require("hardhat");

describe("Contract Deployment", function () {
  let accounts: Signer[];
  let owner: String;

  beforeEach(async function () {
    accounts = await ethers.getSigners();
    owner = await accounts[0].getAddress();
  });
});
