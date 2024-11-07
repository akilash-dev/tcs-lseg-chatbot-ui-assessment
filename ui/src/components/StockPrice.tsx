import React from "react";
import { Stock } from "../types";

interface StockPriceProps {
  stock: Stock;
  onBack: () => void;
  onHome: () => void;
}

const StockPrice: React.FC<StockPriceProps> = ({ stock, onBack, onHome }) => {
  return (
    <div className="button-group">
      <div className="message receiver">
        <div className="message-text receiver">
          Stock Price of {stock.stockName} is {stock.price}.
          <div>
            <button onClick={onBack}>Go Back</button>
            <button onClick={onHome}>Main Menu</button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default StockPrice;
