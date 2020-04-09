import { connect } from 'react-redux';
import { addPharmacy } from '../actions/addPharmacy';
import PharmacyForm from '../components/PharmacyForm';


const mapStateToProps = state => {
    return {
        pharmacy: state.pharmacy.name,
        loading: state.pharmacy.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addPharmacy: pharmacy => dispatch(addPharmacy(pharmacy))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PharmacyForm);