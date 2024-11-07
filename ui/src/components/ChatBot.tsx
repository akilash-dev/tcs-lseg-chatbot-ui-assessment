import React, { useEffect, useState , useRef } from "react";
import { getStockExchange, getStocksByExchange } from "../utils";
import { Stock, StockExchange, Exchange } from "../types";
import HomeMenu from './HomeMenu';
import StockMenu from "./StockMenu";
import StockPrice from "./StockPrice";

const Header = () =>{
    return (
        <div className="chatbot-header">LSEG Chatbot</div>
    )
}

const WelcomeMessage = () => {
    return (
        <div className="button-group">
            <div className="message receiver">
                <div className="message-text receiver">Hello! Welcome to LSEG. I'm here to help you.</div>
            </div>
        </div>       
    )
}

const ChatBot: React.FC = () => {
    const [exchange, setExchange] = useState<StockExchange | null>(null);
    const [stockExchange, setstockExchange] = useState<Exchange[]>([]);
    const [selectedStock, setSelectedStock] = useState<Stock | null>(null);
    const [chatHistory, setChatHistory] = useState<JSX.Element[]>([]);
    const [isStart, setIsStart] = useState<Boolean>(false);
    const endOfMessagesRef = useRef<HTMLDivElement | null>(null);
    
    const addToChat = (content: JSX.Element) => {
        setChatHistory((prev) => [...prev, content]);
    };
  
    useEffect(() => {
        (async () => {
          const stockExchang = await getStockExchange();
          await setstockExchange(stockExchang);
        })();
    },[]);

    useEffect(() => {
    if (exchange && !selectedStock)
        addToChat(
            <StockMenu
                stocks={exchange.topStocks}
                onSelectStock={handleSelectStock}
                onBack={handleBackToHome}
            />
        );
    else if (exchange && selectedStock)
        addToChat(
            <StockPrice
                stock={selectedStock}
                onBack={handleBackToStockMenu}
                onHome={handleBackToHome}
            />
        );
    else if (!exchange && !selectedStock && isStart)
        addToChat(
            <HomeMenu 
                exchanges={stockExchange} 
                onSelectExchange={handleSelectExchange}
            />
        );
    },[exchange, selectedStock]);

    useEffect(() => {
        if (endOfMessagesRef.current) {
            endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [chatHistory]);

    const handleSelectExchange = async(exchangeCode:string , exchangeName: string )=> {
        const stocks = await getStocksByExchange(exchangeCode);
        if(stocks){
            setIsStart(true);
            setSelectedStock(null);
            await addToChat(
                <div className="message sender">
                    <div className="message-text sender">{exchangeName}</div>
                </div>
            );
            await setExchange({
                code: exchangeCode,
                stockExchange: exchangeName,
                topStocks: stocks,
            });
        }
    }

    const handleSelectStock = (stock: Stock) => {
        setSelectedStock(stock);
        addToChat(
        <div className="message sender">
            <div className="message-text sender">{stock.stockName}</div>
        </div>
        );
    };

    const handleBackToStockMenu = () => {
        setSelectedStock(null);
        addToChat(
            <div className="message sender">
                <div className="message-text sender">Go Back to Stock Menu</div>
            </div>
        );
    };

    const handleBackToHome = () => {
        addToChat(
            <div className="message sender">
                <div className="message-text sender">Go Back to Main Menu</div>
            </div>
        );
      setExchange(null);
      setSelectedStock(null);
    };

    return (
        <div className="chatbot-container">
            <Header/>
            <div className="chatbot-content">
                <WelcomeMessage />
                <HomeMenu 
                    exchanges={stockExchange} 
                    onSelectExchange={handleSelectExchange}
                />
                {chatHistory}
                <div ref={endOfMessagesRef} />
            </div>
        </div>
    );
};

export default ChatBot;