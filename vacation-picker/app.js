window.onload = () => {
  const regionSort = (x,y)=> { if(x.region > y.region) return 1; if(x.region<y.region) return -1; return 0 };
  const availableStates = ["WA","OR","CA","NV","ID","MT","WY","UT","AZ","NM","CO","AK","HI","TX","OK","KS","NE","SD","ND","MN","IA","WI","MO","AR","LA","MS","IL","IN","KY","TN","AL","GA","MI","NY","VT","NH","ME","OH","PA","MA","CT","RI","NJ","DE","DC","MD","WV","VA","NC","SC","FL"];
  
  if(!localStorage['places']){
    localStorage.setItem('places',JSON.stringify(places));
  }
  for(const state of JSON.parse(localStorage['places'])){
    var card = document.createElement('div');
    card.className = 'card';
    
    let tBody;
    if(state.places){
      tBody= state.places
        .sort(regionSort)
        .map(x => '<tr><td>'+ x.name +'&nbsp;&nbsp;<a href="https://duckduckgo.com/?q='+ encodeURI(x.name) +'&t=h_&iax=images&ia=images">🔎</a></td><td>'
            + x.region +'</td><td><a href="'+ x.map +'">Map</a></td><td><input type="checkbox" /></td></tr>').join('\n');
    }
    else{
      tBody = '<tr><td span="4">I have not visited attractions in ' + state.state + '</td></tr>';
    }
    card.innerHTML = (
      `<div class="card-header">${state.state}</div>
          <div class="card-body"><table class="table">
              <thead><tr><th>Place</th><th>Region</th><th>Map</th><th>Have I been?</th></tr></thead>
              <tbody>
                ${tBody}
              </tbody>
            </table>
          </div>
        </div>`);

    document.getElementById('root').append(card);
  }
};
