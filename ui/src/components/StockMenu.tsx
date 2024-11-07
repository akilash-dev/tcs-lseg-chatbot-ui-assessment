import React from 'react';
import { Stock } from "../types";

interface StockMenuProps {
    stocks: Stock[];
    onSelectStock: (stock: Stock) => void;
    onBack: () => void;
}

const StockMenu: React.FC<StockMenuProps> = ({
    stocks,
    onSelectStock,
    onBack
}) => {
    return (
        <div className="button-group">
            <div className="message receiver">
                <div className="message-text receiver">Please select a stock.
                    <div>
                    {stocks.map((stock) => (
                        <button key={stock.code} onClick={() => onSelectStock(stock)}>
                        {stock.stockName}
                        </button>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StockMenu;
