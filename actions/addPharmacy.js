export const ADD_PHARMACY_REQUEST = 'ADD_PHARMACY_REQUEST';
export const ADD_PHARMACY_SUCCESS = 'ADD_PHARMACY_SUCCESS';
export const ADD_PHARMACY_FAILURE = 'ADD_PHARMACY_FAILURE';

export function addPharmacy(pharmacy) {
    return function (dispatch) {
        dispatch(addPharmacyRequest());
        return fetch('http://192.168.1.80:4000/pharmacies', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pharmacy)
        })
            .then(
                response => response.json(),
                error => dispatch(addPharmacyFailure(error))
            )
            .then(pharmacy => {
                dispatch(addPharmacySuccess(pharmacy));
                // this.setState({pharmacies: [pharmacy, ...this.state.pharmacies], pharmacy: ''});
            });
    }
}

export function addPharmacyRequest() {
    return { type: ADD_PHARMACY_REQUEST }
}

export function addPharmacySuccess(pharmacy) {
    return { type: ADD_PHARMACY_SUCCESS, payload: { pharmacy: pharmacy} };
}

export function addPharmacyFailure(error) {
    return { type: ADD_PHARMACY_FAILURE, payload: error };
}