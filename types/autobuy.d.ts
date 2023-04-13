import { Bot } from 'mineflayer'

interface SellData {
    price: number
    slot: number
    duration: number
}

interface TradeData {
    target: string
    slots: number[]
    coins: number
}

interface SwapData {
    profile: string
}

interface Flip {
    id: string
    startingBid: number
    purchaseAt: Date
    itemName: string
}

interface TextMessageData {
    text: string
}

interface MyBot extends Bot {
    state?: 'purchasing' | 'selling' | 'claiming' | 'gracePeriod'
    lastViewAuctionCommandForPurchase?: string
}
