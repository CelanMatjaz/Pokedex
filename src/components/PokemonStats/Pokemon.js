import React, { Component } from 'react';
import './Pokemon.css';
import Axios from 'axios';
import { capitalize, getIdFromUrl } from '../../helpers/common';
import MovesList from './MovesList';
import { Link } from 'react-router-dom';
import {
  addToMyPokemon,
  getMyPokemon,
  removeFromMyPokemon
} from '../../helpers/myPokemonList';
import Icons from '../icons/Icons';
import { withRouter } from 'react-router-dom';
import { getPokemonUrl } from '../../helpers/pokemon';

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null, loading: true, showMoves: false, canAdd: false };
  }

  componentDidMount = () => {
    Axios.get(getPokemonUrl(this.props.match.params.name))
      .then(res => {
        this.setState({
          data: res.data,
          loading: false,
          canAdd: !this.checkIfInMyPokemonList(res.data.id)
        });
      })
      .catch(() => {
        this.setState({
          loading: false
        });
      });
  };

  toggleShowMoves = () => {
    this.setState(state => ({
      showMoves: !state.showMoves
    }));
  };

  addPokemonToMyPokemonList = () => {
    const { name, id } = this.state.data;
    addToMyPokemon({ id, name });
    this.setState({ canAdd: false });
  };

  removePokemonFromMyPokemonList = () => {
    const { id } = this.state.data;
    removeFromMyPokemon(id);
    this.setState({ canAdd: true });
  };

  checkIfInMyPokemonList = id => {
    return getMyPokemon()[id] ? true : false;
  };

  render() {
    const { loading, data, showMoves, canAdd } = this.state;
    return (
      <>
        {loading ? (
          'Loading...'
        ) : data ? (
          <div className="Pokemon-Stats">
            <div className="Pokemon-Summary">
              <img src={data.sprites.front_default} alt={data.name} />
              <div className="Pokemon-Summary-Container">
                <span className="Pokemon-Summary-Name">
                  <b>
                    {capitalize(data.name)} (no. {data.id})
                  </b>
                </span>
                <span
                  onClick={
                    canAdd
                      ? this.addPokemonToMyPokemonList
                      : this.removePokemonFromMyPokemonList
                  }
                  className="Pokemon-Summary-Add-Button"
                >
                  {canAdd ? Icons.Plus : Icons.Minus}
                </span>
              </div>
            </div>
            <h2>Abilities</h2>
            <div className="Pokemon-Abilities">
              {data.abilities.map((ability, i) => (
                <div className="Pokemon-Abilities-Item" key={i}>
                  <Link to={`/ability/${getIdFromUrl(ability.ability.url)}`}>
                    {capitalize(ability.ability.name)}, Hidden:
                    {ability.is_hidden ? ' Yes' : ' No'}
                  </Link>
                </div>
              ))}
            </div>
            <button
              className="Pokemon-Moves-Button"
              onClick={this.toggleShowMoves}
            >
              {showMoves ? 'Hide moves' : 'Show moves'}
            </button>
            <div className="Pokemon-Moves">
              {showMoves && <MovesList moves={data.moves} />}
            </div>
          </div>
        ) : (
          <div>
            <p>404 Pokemon not found</p>
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

export default withRouter(Pokemon);
