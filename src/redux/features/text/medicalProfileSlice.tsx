import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: "",
    DOB: {
        month: "",
        day: "",
        year: ""
    },
    sex: "",
    insurance: "",
    insurancenumber: "",

    allergies: "",
    conditions: "",
    medication: "",

    hospital: "",
    physician: "",
        
};

const medicalProfileSlice = createSlice({
    name: 'medicalProfile',
    initialState,
    reducers: {
        setName: (state, action) => {
            console.log('setName action called with payload:', action.payload);
            state.name = action.payload;
        },
        setDOB: (state, action) => {
            console.log('setDOB action called with payload:', action.payload);
            if (action.payload.month) state.DOB.month = action.payload.month;
            if (action.payload.day) state.DOB.day = action.payload.day;
            if (action.payload.year) state.DOB.year = action.payload.year;
        },
        setSex: (state, action) => {
            console.log('setSex action called with payload:', action.payload);
            state.sex = action.payload;
        },
        setInsurance: (state, action) => {
            console.log('setInsurance action called with payload:', action.payload);
            state.insurance = action.payload;
        },
        setInsuranceNumber: (state, action) => {
            console.log('setInsuranceNumber action called with payload:', action.payload);
            state.insurancenumber = action.payload;
        },

        setAllergies: (state, action) => {
            console.log('setAllergies action called with payload:', action.payload);
            state.allergies = action.payload;
        },
        setConditions: (state, action) => {
            console.log('setConditions action called with payload:', action.payload);
            state.conditions = action.payload;
        },
        setMedication: (state, action) => {
            console.log('setMedication action called with payload:', action.payload);
            state.medication = action.payload;
        },

        setHospital: (state, action) => {
            console.log('setHospital action called with payload:', action.payload);
            state.hospital = action.payload;
        },
        setPhysician: (state, action) => {
            console.log('setPhysician action called with payload:', action.payload);
            state.physician = action.payload;
        },

    }
});

export const {
    setName, setDOB, setSex, setInsurance, setInsuranceNumber,
    setAllergies, setConditions, setMedication,
    setHospital, setPhysician
} = medicalProfileSlice.actions;
export default medicalProfileSlice.reducer;
