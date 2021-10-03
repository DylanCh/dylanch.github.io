const places = [
   { 
     name: 'Malaysian Restaurant', 
     address: '135-17 40th Rd, Flushing, NY  11354',
     link: 'https://maps.apple.com/?address=135-17%2040th%20Rd,%20Flushing,%20NY%20%2011354,%20United%20States&ll=40.758689,-73.830887'
   },
   { 
     name: 'Shun Won (Cantonese, take out only)',
     address: '41-27 Main St, Flushing, NY  11355',
     link: 'https://maps.apple.com/?address=41-27%20Main%20St,%20Flushing,%20NY%20%2011355,%20United%20States&ll=40.757502,-73.828900'
   },
   { 
     name: 'Prince Noodles and Cafe (Cantonese/Hong Kong-style wonton noodle)', 
     address:'40-09 Prince St, Flushing, NY  11354',
     link: 'https://maps.apple.com/?address=40-09%20Prince%20St,%20Flushing,%20NY%20%2011354,%20United%20States&ll=40.758518,-73.831456'
   },
   {
     name: 'Deng Ji Yunnan Guoqiao Mixian (Rice noodles)',
     address: '40-09 Prince St, Flushing, NY  11354',
     link: 'https://maps.apple.com/?address=40-09%20Prince%20St,%20Flushing,%20NY%20%2011354,%20United%20States&ll=40.758591,-73.831510'
   }
 ];

ReactDOM.render(
  <section className='container'>
    <div className='col-xs-10 col-md-10'>
      <div className='row'>
        <table className='table'>
          <thead><tr><th>Name</th><th>Apple Maps Link</th><th></th><th></th></tr></thead>
          <tbody>
          { places.map(x => (
            <tr>
               <td>{x.name}</td>
               <td><a href={x.link}>{x.address}</a></td>
               <td><a href="#" onclick={()=>{ navigator.clipboard.writeText("I picked "+x.name+' @ '+x.address); alert('Address copied'); }}</td>
               <td><a href="sms:">Text me</a></td>
             </tr>)) }
          </tbody>
        </table>
       </div>
    </div>
  </section>, document.getElementById("root")
);
