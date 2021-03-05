import { connect } from 'react-redux'
import { getAllCharacters } from "../../actions/characters-action"
import Characters from './Characters'

const mapDispatchToProps = dispatch => {
    return {
        getAllCharacters: dispatch(getAllCharacters()) 
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        characters: state.characters
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Characters)