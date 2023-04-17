
export interface Card {
    suit: string
    value: number
    name: string

}

const SUIT = ["heart", "clover", "spade", "diamond"]
const NAMES = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"]

export class DeckOfCards {
    deck: Card[] = []
    constructor() {
        for (let i = 0; i < SUIT.length; i++) {
            for (let j = 0; j < NAMES.length; j++) {
                this.deck.push({
                    suit: SUIT[i],
                    name: NAMES[j],
                    value: j + 1
                })
            }
        }
    }

    shuffle() {
        for (let i = 0; i < this.deck.length; i++) {
            let curr = this.deck[i]
            let toSwap = this.randNum(this.deck.length)
            this.deck[i] = this.deck[toSwap]
            this.deck[toSwap] = curr
        }
    }

    take(): Card | undefined {
        // return this.deck.splice(0,1)[0]
        return this.deck.pop()
    }
    private randNum(size = 52): number {
        return Math.floor((Math.random() * size) + 1)
    }
}

