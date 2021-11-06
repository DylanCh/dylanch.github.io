const regionSort = (x,y)=> { if(x.region > y.region) return 1; if(x.region<y.region) return -1; return 0 };
const availableStates = ["WA","OR","CA","NV","ID","MT","WY","UT","AZ","NM","CO","AK","HI","TX","OK","KS","NE","SD","ND","MN","IA","WI","MO","AR","LA","MS","IL","IN","KY","TN","AL","GA","MI","NY","VT","NH","ME","OH","PA","MA","CT","RI","NJ","DE","DC","MD","WV","VA","NC","SC","FL"];

window.onload = () => {
  if(!localStorage['places']){
    localStorage.setItem('places',JSON.stringify(places));
  }
  for(const state of JSON.parse(localStorage['places'])){
    var card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = (
      `<div class="card-header">${state.state}</div>
          <div class="card-body"><table class="table">
              <thead><tr><th>Place</th><th>Region</th><th>Map</th><th>Have I been?</th></tr></thead>
              <tbody>
                ${state.places
                .sort(regionSort)
                .map(x => '<tr><td>'+ x.name +'&nbsp;&nbsp;<a href="https://duckduckgo.com/?q='+ encodeURI(x.name) +'&t=h_&iax=images&ia=images">🔎</a></td><td>'
                    + x.region +'</td><td><a href="'+ x.map +'">Map</a></td><td><input type="checkbox" /></td></tr>').join('\n')}
              </tbody>
            </table>
          </div>
        </div>`);

    document.getElementById('root').append(card);
    
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
        place: [ 
          { 
            name: document.getElementById('attraction').value,
            map: document.getElementById('map').value,
            region: document.getElementById('region').value, 
            checked: true  
          } 
        ]
       };
      
      if(!places.any(x => x.state === state)){
        places.push(added);
      }
      else{
        if(places.filter(x => x.state === state)[0].places.length === 0)
          places.filter(x => x.state === state)[0].places = [added.places[0]];
        else places.filter(x => x.state === state)[0].places.push(added.places[0]);
      }
      
      localStorage['places'] = JSON.stringify(places);
      return true;
    });
  }
};
