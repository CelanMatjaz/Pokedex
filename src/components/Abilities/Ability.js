import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import './Ability.css';
import Axios from 'axios';
import { capitalize, getIdFromUrl } from '../../helpers/common';
import { getAbilityUrl, getPokemonImgUrl } from '../../helpers/pokemon';

class Ability extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, data: null, showPokemon: false };
  }

  componentDidMount = () => {
    Axios.get(getAbilityUrl(this.props.match.params.id))
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
    const { data, loading, showPokemon } = this.state;
    return (
      <>
        {loading ? (
          'Loading...'
        ) : data ? (
          <div className="Pokemon-Ability">
            <h2>Ability</h2>
            <h3>
              <b>
                {capitalize(data.name)
                  .split('-')
                  .join(' ')}
              </b>
            </h3>
            <div className="Pokemon-Ability-Stats">
              <div className="Pokemon-Ability-Stat">
                <div className="Pokemon-Ability-Stat-Text">
                  <b>Effects:</b>
                </div>
                {data.effect_entries.map((e, i) => (
                  <div className="Pokemon-Ability-Stat-Text" key={i}>
                    {e.effect}
                  </div>
                ))}
              </div>

              <button
                className="Pokemon-Ability-Show-Pokemon-Button"
                onClick={() => {
                  this.setState(state => ({ showPokemon: !state.showPokemon }));
                }}
              >
                {showPokemon
                  ? 'Hide Pokemon'
                  : 'Show Pokemon that use tihs ability'}
              </button>
              {showPokemon && (
                <div className="Pokemon-Ability-Stat">
                  <div className="Pokemon-Ability-Stat-Text">
                    <b>Pokemon:</b>
                  </div>
                  <div className="Pokemon-Ability-Stat-Pokemon">
                    {data.pokemon.map((p, i) => (
                      <div
                        className="Pokemon-Ability-Stat-Pokemon-Item"
                        key={i}
                      >
                        {
                          <Link to={`/pokemon/${p.pokemon.name}`}>
                            <div className="Pokemon-Ability-Stat-Pokemon-Item-Text">
                              {capitalize(p.pokemon.name)}
                            </div>
                            <img
                              src={getPokemonImgUrl(
                                getIdFromUrl(p.pokemon.url)
                              )}
                              alt={p.pokemon.name}
                            />
                          </Link>
                        }
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div>
            <p>404 Ability not found</p>
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

export default withRouter(Ability);
