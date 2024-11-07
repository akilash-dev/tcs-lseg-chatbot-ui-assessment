export interface Stock {
    code: string;
    stockName: string;
    price: number;
  }

  export interface Exchange {
    code: string;
    stockExchange: string;
  }
  
  export interface StockExchange extends Exchange {
    topStocks: Stock[];
  }
