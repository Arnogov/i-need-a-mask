import {connect} from 'react-redux';
import PharmacyList from '../components/PharmacyList';
import {
    fetchPharmacies
} from "../actions/pharmacy";


const mapStateToProps = state => {
    return {

        pharmacies: state.pharmacy.pharmacies,
        loading: state.pharmacy.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPharmacies: () => dispatch(fetchPharmacies()),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PharmacyList);