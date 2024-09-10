interface CoinInfo {
  id: string;
  name: string;
  fullName: string;
  internal: string;
  imageUrl: string;
  url: string;
}

interface RawDataUSD {
  type: string;
  market: string;
  fromSymbol: string;
  toSymbol: string;
  price: number;
  volume24Hour: number;
  volume24HourTo: number;
  open24Hour: number;
  high24Hour: number;
  low24Hour: number;
  change24Hour: number;
  changePct24Hour: number;
  supply: number;
  mktCap: number;
  lastUpdate: number;
}

interface RawData {
  usd: RawDataUSD;
}

interface DisplayDataUSD {
  fromSymbol: string;
  toSymbol: string;
  price: string;
  volume24Hour: string;
  volume24HourTo: string;
  open24Hour: string;
  high24Hour: string;
  low24Hour: string;
  change24Hour: string;
  changePct24Hour: string;
  supply: string;
  mktCap: string;
  lastUpdate: string;
}

interface DisplayData {
  usd: DisplayDataUSD;
}

export interface Coin {
  coinInfo?: CoinInfo;
  rawData?: RawData;
  displayData?: DisplayData;
}

export interface ApiResponse {
  data: Coin[];
}
