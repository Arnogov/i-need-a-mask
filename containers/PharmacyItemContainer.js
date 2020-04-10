import {connect} from 'react-redux';
import PharmacyItem from '../components/PharmacyItem';
import {fetchPharmacies} from "../actions/pharmacy";


const mapStateToProps = state => {
    return {
        loading: state.pharmacy.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPharmacies: () => dispatch(fetchPharmacies()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PharmacyItem);