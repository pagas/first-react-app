// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Utils
import { isFirstRender } from '../../shared/utils/frontend';

// Styles
import './Coins.css';

class Coins extends Component {
    static propTypes = {
      coins: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        rank: PropTypes.string,
        name: PropTypes.string,
        symbol: PropTypes.string,
        price_usd: PropTypes.string
      })),
      fetchCoins: PropTypes.func
    };

    componentWillMount() {
      const { fetchCoins } = this.props;

      // Fetching coins action.
      fetchCoins();
    }

    render() {
      const { coins } = this.props;

      // If the coins const is an empty array,
      // then we return null.
      if (isFirstRender(coins)) {
        return null;
      }
      return (
        <div className="Coins">
          <h1>Top 100 Coins</h1>

          <ul>
            {coins.map((coin) => (
              <li key={coin.id}>
                <span className="left">
                  {coin.rank}
                  {' '}
                  {coin.name}
                  {' '}
                  {coin.symbol}
                </span>
                <span className="right">
$
                  {coin.price_usd}
                </span>
              </li>
            ))}
          </ul>
        </div>
      );
    }
}

export default Coins;
