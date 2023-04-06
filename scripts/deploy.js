const hre = require("hardhat");

async function main() {  
  const PayPal = await hre.ethers.getContractFactory("PayPal");
  const paypal = await PayPal.deploy();

  await paypal.deployed();

  console.log("PayPal deployed to: ",paypal.address);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
