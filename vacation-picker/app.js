window.onload = () => {
  for(const state of places){
    var card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = (
      `<div class="card-header">${state.state}</div>
          <div class="card-body"><table class="table">
              <thead><tr><th>Place</th><th>Map</th><th>Have I been?</th></tr></thead>
              <tbody>${state.places.map(x => '<tr><td>'+x.name + '</td><td><a href="'+ x.map +'" target="_blank">Map</a></td><td><input type="checkbox"/></td></tr>').join('\n')}</tbody>
            </table>
          </div>
        </div>`);

    document.getElementById('root').append(card);
  }
};
