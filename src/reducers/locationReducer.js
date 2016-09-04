
export default function locationReducer(state = {location: {
address: [
"140 New Montgomery St"
],
city: "San Francisco",
coordinate: {
latitude: 37.7867703362929,
longitude: -122.399958372115
},
country_code: "US",
cross_streets: "Natoma St & Minna St",
display_address: [
"140 New Montgomery St",
"Financial District",
"San Francisco, CA 94105"
],
geo_accuracy: 9.5,
neighborhoods: [
"Financial District",
"SoMa"
],
postal_code: "94105",
state_code: "CA"
}}, action){
  switch(action.type) {

    case 'GET_STATE': 
      return state;

    default: 
      return state;
  }
}



