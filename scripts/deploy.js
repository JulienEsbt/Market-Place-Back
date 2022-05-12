async function main() {
    const SimpleMarketplace = await ethers.getContractFactory("SimpleMarketplace")

    // Start deployment, returning a promise that resolves to a contract object
    const Simple_Market_place = await SimpleMarketplace.deploy("Toyota Yaris", 20)
    console.log("Contract deployed to address:", Simple_Market_place.address)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })