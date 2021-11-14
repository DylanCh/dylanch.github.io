const availableStates = ["WA","OR","CA","NV","ID","MT","WY","UT","AZ","NM","CO","AK","HI","TX","OK","KS","NE","SD","ND","MN","IA","WI","MO","AR","LA","MS","IL","IN","KY","TN","AL","GA","MI","NY","VT","NH","ME","OH","PA","MA","CT","RI","NJ","DE","DC","MD","WV","VA","NC","SC","FL"];

window.onload = () => {
  for(const state of availableStates.sort()){
        let option = document.createElement('option');
        option.value = state;
        option.innerText = state;
        document.getElementById('state').append(option);
      }

      const form = document.getElementsByTagName('form')[0];
      form.addEventListener('submit', e => {
        e.preventDefault();
        const state = document.getElementById('state').value;      
        if(!state || availableStates.indexOf(state) < 0){ alert(`${state} is not a valid state`); return }

        let added = { 
          state, 
          places: [ 
            { 
              name: document.getElementById('attraction').value,
              map: document.getElementById('map').value,
              region: document.getElementById('region').value, 
              checked: true  
            } 
          ]
         };

        let selectedState = places.filter(x => x.state === state);
        if(selectedState.length <= 0){
          places.push(added);
        }
        else{
          if(selectedState[0].places.length === 0)
            selectedState[0].places = added.places;
          else selectedState[0].places.push(added.places[0]);
        }

        localStorage['places'] = JSON.stringify(places);
        let addedPlaces = localStorage['added-places'] ? JSON.parse(localStorage['added-places']) : [];
        addedPlaces.push(added);
        localStorage['added-places'] = JSON.stringify(addedPlaces);
        window.location.reload(true);
      });
}
