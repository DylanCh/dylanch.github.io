const regionSort = (x,y)=> { if(x.region > y.region) return 1; if(x.region<y.region) return -1; return 0 };

window.onload = () => {
  for(const state of places){
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
                    + x.region +'</td><td><a href="'+ x.map +'">Map</a></td><td><input type="checkbox"/></td></tr>').join('\n')}
              </tbody>
            </table>
          </div>
        </div>`);

    document.getElementById('root').append(card);
  }
};
