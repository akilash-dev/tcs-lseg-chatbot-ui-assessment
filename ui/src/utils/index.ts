import stockData from '../data/chatbot-stockdata.json';
import { Stock, StockExchange, Exchange } from '../types';

export const getStockExchangesData = (): StockExchange[] => {
    try {
        if (!stockData || !Array.isArray(stockData)) {
        throw new Error("Invalid or empty stock data.");
        }
        return stockData as StockExchange[];
    } catch (error) {
        console.error("Error fetching stock exchanges:", error);
        return [];
    }
};

export const getStockExchange = async(): Promise<Exchange[]> => {
    let stockData = await getStockExchangesData();
    let exchange = stockData.map(({code, stockExchange}) => ({
        code,
        stockExchange,
        }))
    return exchange;
};

export const getStocksByExchange = async(exchangeCode: string) : Promise<Stock[] | null> => {
    try {
        let stockData = await getStockExchangesData();
        const exchange = stockData.find(
          (ex: StockExchange) => ex.code === exchangeCode
        );
        if (!exchange) {
          throw new Error(`Exchange with code ${exchangeCode} not found.`);
        }
        return exchange.topStocks;
      } catch (error) {
        console.error(`Error fetching stocks for exchange ${exchangeCode}:`, error);
        return null;
      }
}