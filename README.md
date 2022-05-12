Simple Marketplace (DApp just over here : https://github.com/JulienEsbt/front-web3)
====================================================================

Overview
---------

The Simple Marketplace application expresses a workflow for a simple transaction
between an owner and a buyer in a marketplace. The state transition diagram
below shows the interactions among the states in this workflow.

Smart contract deployed on ropsten blockchain(an ethereum testnet - 0xE72010C2381Ba55134e17E1DE8BA92A6d2915186)

Application Roles
------------------
| Name                 | Description                                       |
|----------------------|---------------------------------------------------|
|Owner|A person who wants to sell on the marketplace. |
|Buyer|A person who wants to buy from the marketplace. |

States
-------

| Name                | Description                                       |
|---------------------|---------------------------------------------------|
|ItemAvailable|Indicates that an owner has made the item they want to sell available in the marketplace.
|OfferPlaced|Indicates that a seller has made an offer to buy the item listed by an owner.
|Accepted|Indicates that the owner has accepted the buyer's offer for the item.

Workflow Details
----------------

![workflow details for application](img.png)

An instance of the Simple Marketplace application's workflow starts in the
ItemAvailable state when an Owner makes an item available for sale by specifying
its description and price. A buyer can then make an offer by specifying their
price for the item. This action causes the state to change from ItemAvailable
to OfferPlaced. Now, if the owner agrees to the buyer's offer, then owner calls
the function to accept an offer, and the workflow reaches a successful
conclusion state denoted by the Accepted state. If the owner, however, is not
satisfied with the offer, then the owner can call the function to reject the
offer. On rejection, the state changes to ItemAvailable indicating that the
item is still up for sale. The transitions between the ItemAvailable and the
OfferPlaced states can continue until the owner is satisfied with the offer
made.

A happy path shown in the transition diagram traces an owner making an item
available, a buyer making an offer, and the owner accepting the offer.

### Original source : 
https://github.com/Azure-Samples/blockchain/tree/master/blockchain-workbench/application-and-smart-contract-samples/simple-marketplace
