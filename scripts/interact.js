const API_KEY = process.env.API_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS

const contract = require("../artifacts/contracts/SimpleMarketPlace.sol/SimpleMarketplace.json")

// Provider
const alchemyProvider = new ethers.providers.AlchemyProvider(
    (network = "ropsten"),
    API_KEY
)

// Signer
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider)

// Contract
const SimpleMarketplaceContract = new ethers.Contract(
    CONTRACT_ADDRESS,
    contract.abi,
    signer
)

async function main() {
    const description = await SimpleMarketplaceContract.Description();
    const price = await SimpleMarketplaceContract.AskingPrice();
    console.log("The message is : " + description + " and the price is : " + price)
}
main()

