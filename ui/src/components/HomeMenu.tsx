import React from 'react';
import { Exchange } from '../types';

interface HomeMenuProps {
    exchanges: Exchange[];
    onSelectExchange: (exchangeCode: string , exchange: string) => void;
}

const HomeMenu: React.FC<HomeMenuProps> = ({ 
    exchanges, 
    onSelectExchange 
}) => {
    return (
        <div className="button-group">
            <div className="message receiver">
                <div className="message-text receiver">Please select a Stock Exchange.
                    <div>
                        { exchanges.map((exchange: Exchange) => (
                            <button key={exchange.code} onClick={()=>onSelectExchange(exchange.code, exchange.stockExchange)}>
                                {exchange.stockExchange}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeMenu;
