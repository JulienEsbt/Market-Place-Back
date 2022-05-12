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
    const seller = await SimpleMarketplaceContract.InstanceOwner();
    const description = await SimpleMarketplaceContract.Description();
    const price = await SimpleMarketplaceContract.AskingPrice();
    /*let etat = ""
    if (await SimpleMarketplaceContract.State() == 0 ){
        etat = " L'article est toujours disponible."
    } else {
        etat = "L'article a été vendu."
    }*/
    console.log(seller + " a mit en vente l'article suivant : ' " + description + " ' et a fixé le prix à " + price + "ETH. ")
    // console.log(etat)

    //const tx = await SimpleMarketplaceContract.MakeOffer(1)
    //await tx.wait
}
main()
