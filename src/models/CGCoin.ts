
export interface CGCoin {
    coinInfo: {
        coinId: string
        fullName: string,
        shortName: string,
        imageUrl?: string,
        url?: string
    },
    raw: {
        fromSymbol?: string;
        toSymbol?: string;
        price?: number;
        openHour?: number;
        highHour: number;
        lowHour: number;
        openDay: number;
        highDay: number;
        lowDay: number;
        open24Hour: number;
        high24Hour: number;
        low24Hour: number;
        change24Hour: number;
        changePct24Hour: number;
        changeDay: number;
        changePctDay: number;
        changeHour: number;
        changePctHour: number;
        imageUrl: string;
    },
    display: {
        fromSymbol: string;
        toSymbol: string;
        price: string;
        openHour: string;
        highHour: string;
        lowHour: string;
        openDay: string;
        highDay: string;
        lowDay: string;
        open24Hour: string;
        high24Hour: string;
        low24Hour: string;
        change24Hour: string;
        changePct24Hour: string;
        changeDay: string;
        changePctDay: string;
        changeHour: string;
        changePctHour: string;
        imageUrl: string;
    }
}
