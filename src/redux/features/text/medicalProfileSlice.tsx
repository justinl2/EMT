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

    polst: false,
    resuscitate: false,

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

        setPolst: (state, action) => {
            console.log('setPolst action called with payload:', action.payload);
            state.polst = action.payload;
        },
        setResuscitate: (state, action) => {
            console.log('setResuscitate action called with payload:', action.payload);
            state.resuscitate = action.payload;
        },

        setHospital: (state, action) => {
            console.log('setHospital action called with payload:', action.payload);
            state.hospital = action.payload;
        },
        setPhysician: (state, action) => {
            console.log('setPhysician action called with payload:', action.payload);
            state.physician = action.payload;
        },
        clearAll: (state) => {
            console.log('clearAll action called');
            state.name = '';
            state.DOB.month = '';
            state.DOB.day = '';
            state.DOB.year = '';
            state.sex = '';
            state.insurance = '';
            state.insurancenumber = '';
            state.allergies = '';
            state.conditions = '';
            state.medication = '';
            state.polst = false;
            state.resuscitate = false;
            state.hospital = '';
            state.physician = '';
        }
    }
});

export const {
    setName, setDOB, setSex, setInsurance, setInsuranceNumber,
    setAllergies, setConditions, setMedication,
    setPolst, setResuscitate,
    setHospital, setPhysician,
    clearAll
} = medicalProfileSlice.actions;
export default medicalProfileSlice.reducer;
