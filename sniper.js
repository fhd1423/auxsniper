const Web3 = require('web3');
const BN = require('bn.js');
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");

const abi = '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"seller","type":"address"},{"indexed":true,"internalType":"address","name":"nftAddress","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ItemCanceled","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"seller","type":"address"},{"indexed":false,"internalType":"address","name":"nftAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint64","name":"quantity","type":"uint64"},{"indexed":false,"internalType":"uint128","name":"pricePerItem","type":"uint128"},{"indexed":false,"internalType":"uint64","name":"expirationTime","type":"uint64"}],"name":"ItemListed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"seller","type":"address"},{"indexed":false,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"address","name":"nftAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint64","name":"quantity","type":"uint64"},{"indexed":false,"internalType":"uint128","name":"pricePerItem","type":"uint128"}],"name":"ItemSold","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"seller","type":"address"},{"indexed":false,"internalType":"address","name":"nftAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint64","name":"quantity","type":"uint64"},{"indexed":false,"internalType":"uint128","name":"pricePerItem","type":"uint128"},{"indexed":false,"internalType":"uint64","name":"expirationTime","type":"uint64"}],"name":"ItemUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"nft","type":"address"},{"indexed":false,"internalType":"enum TreasureMarketplace.TokenApprovalStatus","name":"status","type":"uint8"}],"name":"TokenApprovalStatusUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"fee","type":"uint256"}],"name":"UpdateFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"feeRecipient","type":"address"}],"name":"UpdateFeeRecipient","type":"event"},{"inputs":[],"name":"BASIS_POINTS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIN_PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TREASURE_MARKETPLACE_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_nftAddress","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"address","name":"_owner","type":"address"},{"internalType":"uint64","name":"_quantity","type":"uint64"},{"internalType":"uint128","name":"_maxPricePerItem","type":"uint128"}],"name":"buyItem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_nftAddress","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"cancelListing","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_nftAddress","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint64","name":"_quantity","type":"uint64"},{"internalType":"uint128","name":"_pricePerItem","type":"uint128"},{"internalType":"uint64","name":"_expirationTime","type":"uint64"}],"name":"createListing","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"fee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeReceipient","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_initialFee","type":"uint256"},{"internalType":"address","name":"_initialFeeRecipient","type":"address"},{"internalType":"contract IERC20Upgradeable","name":"_initialPaymentToken","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"listings","outputs":[{"internalType":"uint64","name":"quantity","type":"uint64"},{"internalType":"uint128","name":"pricePerItem","type":"uint128"},{"internalType":"uint64","name":"expirationTime","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paymentToken","outputs":[{"internalType":"contract IERC20Upgradeable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newFee","type":"uint256"}],"name":"setFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newFeeRecipient","type":"address"}],"name":"setFeeRecipient","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_nft","type":"address"},{"internalType":"enum TreasureMarketplace.TokenApprovalStatus","name":"_status","type":"uint8"}],"name":"setTokenApprovalStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"tokenApprovals","outputs":[{"internalType":"enum TreasureMarketplace.TokenApprovalStatus","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_nftAddress","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint64","name":"_newQuantity","type":"uint64"},{"internalType":"uint128","name":"_newPricePerItem","type":"uint128"},{"internalType":"uint64","name":"_newExpirationTime","type":"uint64"}],"name":"updateListing","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
const mabi = '[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_tokenId","type":"uint256"},{"indexed":true,"internalType":"enum Constellation","name":"_constellation","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"_rank","type":"uint8"}],"name":"LegionConstellationRankUp","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_tokenId","type":"uint256"},{"indexed":false,"internalType":"uint8","name":"_craftLevel","type":"uint8"}],"name":"LegionCraftLevelUp","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_owner","type":"address"},{"indexed":true,"internalType":"uint256","name":"_tokenId","type":"uint256"},{"indexed":false,"internalType":"enum LegionGeneration","name":"_generation","type":"uint8"},{"indexed":false,"internalType":"enum LegionClass","name":"_class","type":"uint8"},{"indexed":false,"internalType":"enum LegionRarity","name":"_rarity","type":"uint8"}],"name":"LegionCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_tokenId","type":"uint256"},{"indexed":false,"internalType":"uint8","name":"_questLevel","type":"uint8"}],"name":"LegionQuestLevelUp","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"addAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_addresses","type":"address[]"}],"name":"addAdmins","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"enum Constellation","name":"_constellation","type":"uint8"},{"internalType":"uint8","name":"_to","type":"uint8"}],"name":"increaseConstellationRank","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"increaseCraftLevel","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"increaseQuestLevel","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"isAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"metadataForLegion","outputs":[{"components":[{"internalType":"enum LegionGeneration","name":"legionGeneration","type":"uint8"},{"internalType":"enum LegionClass","name":"legionClass","type":"uint8"},{"internalType":"enum LegionRarity","name":"legionRarity","type":"uint8"},{"internalType":"uint8","name":"questLevel","type":"uint8"},{"internalType":"uint8","name":"craftLevel","type":"uint8"},{"internalType":"uint8[6]","name":"constellationRanks","type":"uint8[6]"},{"internalType":"uint256","name":"oldId","type":"uint256"}],"internalType":"struct LegionMetadata","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"removeAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_addresses","type":"address[]"}],"name":"removeAdmins","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"enum LegionGeneration","name":"_generation","type":"uint8"},{"internalType":"enum LegionClass","name":"_class","type":"uint8"},{"internalType":"enum LegionRarity","name":"_rarity","type":"uint8"},{"internalType":"uint256","name":"_oldId","type":"uint256"}],"name":"setInitialMetadataForLegion","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_shouldPause","type":"bool"}],"name":"setPause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"enum LegionGeneration","name":"_gen","type":"uint8"},{"internalType":"enum LegionClass","name":"_class","type":"uint8"},{"internalType":"enum LegionRarity","name":"_rarity","type":"uint8"},{"internalType":"uint256","name":"_oldId","type":"uint256"},{"internalType":"string","name":"_uri","type":"string"}],"name":"setTokenUriForGenClassRarityOldId","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]'


const web3 = createAlchemyWeb3('')
YOUR_PRIVATE_KEY = ('')
let arbMasterAccount = web3.eth.accounts.privateKeyToAccount(YOUR_PRIVATE_KEY);
web3.eth.accounts.wallet.add(arbMasterAccount);
web3.eth.defaultAccount = arbMasterAccount.address
const myAddress = web3.eth.defaultAccount;


// contracts
const marketplaceContractAddress = '0x09986B4e255B3c548041a30A2Ee312Fe176731c2'
const marketContract = new web3.eth.Contract(JSON.parse(abi), marketplaceContractAddress)
const legion = '0xfE8c1ac365bA6780AEc5a985D989b327C27670A1'.toLowerCase()

const metadataAddress = '0x99193EE9229b833d2aA4DbBdA697C6600b944286'
const metadata = new web3.eth.Contract(JSON.parse(mabi), metadataAddress)

//keep track of already bought id's
var txs = []

async function main() {
     let latest_block = await web3.eth.getBlockNumber();
     let historical_block = latest_block -10;
    // let latest_block = 11905157
    // let historical_block = latest_block -5;

    console.log(latest_block)
    var events = await marketContract.getPastEvents(
        'ItemListed',
        {
            filter: { nftAddress: 0 },
            fromBlock: historical_block,
            toBlock: latest_block
        }
    )
    var legions = [];
   console.log(events)

    for (let i = 0; i < events.length; i++) {
        if (events[i]?.returnValues.nftAddress.toLowerCase() == legion && events[i]?.returnValues.pricePerItem / 10000000000000000000 < 42) { // 450 magic
            legions.push(events[i])
        }
    }
    console.log(legions)
    if (legions.length > 0) check(legions)
}

async function check(legions) { //uncommon = 3, rare = 1
    console.log(legions)
    let data = await metadata.methods.metadataForLegion(legions[0]?.returnValues.tokenId).call()
    if (data[2] == 3 || data[2] == 1) {
        buyit(legions)
    }
}
async function buyit(evFiltered) {
    if (evFiltered.length > 0 && evFiltered[0] != null) {
        for (i = 0; i < 1; i++) {
            if (!txs.includes(evFiltered[i].returnValues.tokenId)) {
                txs.push(evFiltered[i].returnValues.tokenId)
                const gasEstimate = await marketContract.methods.buyItem(evFiltered[i].returnValues.nftAddress,
                    evFiltered[i].returnValues.tokenId,
                    evFiltered[i].returnValues.seller,
                    evFiltered[i].returnValues.quantity,
                    evFiltered[i].returnValues.pricePerItem).estimateGas({ from: myAddress })

                let x = await marketContract.methods.buyItem(
                    evFiltered[i].returnValues.nftAddress,
                    evFiltered[i].returnValues.tokenId,
                    evFiltered[i].returnValues.seller,
                    evFiltered[i].returnValues.quantity,
                    evFiltered[i].returnValues.pricePerItem
                ).send({
                    from: myAddress,
                    gasPrice: await web3.eth.getGasPrice(),
                    gas: gasEstimate
                }).then(console.log)
            }
        }
    }


}

async function repeat() {
    main()
    setTimeout(repeat, 800)
}
try {
    repeat()
}
catch (error) {
    console.log("error: " + error)
}
