import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Move.css';
import Axios from 'axios';
import { capitalize } from '../../helpers/common';
import { getMoveUrl } from '../../helpers/pokemon';

class Move extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, data: null };
  }

  componentDidMount = () => {
    Axios.get(getMoveUrl(this.props.match.params.id))
      .then(res => {
        this.setState({
          loading: false,
          data: res.data
        });
      })
      .catch(() => {
        this.setState({ loading: false });
      });
  };

  render() {
    const { data, loading } = this.state;
    return (
      <>
        {loading ? (
          'Loading...'
        ) : data ? (
          <div className="Pokemon-Move">
            <h2>Move</h2>
            <h3>
              <b>
                {capitalize(data.name)
                  .split('-')
                  .join(' ')}
              </b>
            </h3>
            <div className="Pokemon-Move-Stats">
              <div className="Pokemon-Move-Stat">
                Accuracy: {data.accuracy ? data.accuracy : '0'}
              </div>
              <div className="Pokemon-Move-Stat">
                Power: {data.power ? data.power : '0'}
              </div>
              <div className="Pokemon-Move-Stat">
                PP: {data.pp ? data.pp : '0'}
              </div>
              <div className="Pokemon-Move-Stat">
                Priority: {data.priority ? data.priority : '0'}
              </div>
              <div className="Pokemon-Move-Stat">
                Target:{' '}
                {capitalize(data.target.name)
                  .split('-')
                  .join(' ')}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <p>404 Move not found</p>
            <button
              className="Not-Found-Button"
              onClick={() => {
                this.props.history.push('/');
              }}
            >
              Go to Home
            </button>
          </div>
        )}
      </>
    );
  }
}

export default withRouter(Move);
