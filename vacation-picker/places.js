const places = [
  {
    state: 'AL',
    places:[
      {
        name:'Orange Beach (Alabama)',
        map:'https://maps.apple.com/?address=26032%20Perdido%20Beach%20Blvd,%20Orange%20Beach,%20AL%20%2036561,%20United%20States&ll=30.269344,-87.580406',
        region:'Mobile'
      }
    ]
  },
  {
    state:'CA',
    places:[
      {
        name:'Santa Cruz Beach',
        map: 'https://maps.apple.com/?address=400%20Beach%20St,%20Santa%20Cruz,%20CA%20%2095060,%20United%20States&ll=36.964368,-122.017202',
        region: 'Bay Area'
      },
      {
        name: 'Stanford University',
        map: 'https://maps.apple.com/?address=450%20Jane%20Stanford%20Way,%20Stanford,%20CA%20%2094305,%20United%20States&ll=37.426816,-122.170490',
        region: 'Bay Area'
      }
    ]
  },
  {
    state: 'CO',
    places:[
      {
        name: 'Garden of the Gods',
        map:'https://www.google.com/maps/place/Garden+of+the+Gods+Visitor+and+Nature+Center/@38.8783536,-104.8719443,17z',
        region: 'Colorado Springs'
      },
      {
        name:'Denver Museum of Nature & Science',
        map: 'https://www.google.com/maps/place/Denver+Museum+of+Nature+%26+Science/@39.7475261,-104.9449965,17z',
        region: 'Denver'
      },
      {
        name: 'Pheonix Gold Mine',
        map: 'https://maps.apple.com/?address=800%20Trail%20Creek%20Rd,%20Idaho%20Springs,%20CO%20%2080452,%20United%20States&ll=39.748848,-105.566382',
        region:'Denver'
      },
      {
        name: 'Georgetown Loop Railway',
        map:'https://maps.apple.com/?address=646%20Loop%20Dr,%20Georgetown,%20CO%2080444,%20United%20States&ll=39.700984,-105.706783',
        region: 'Denver'
      }
    ]
  },
  {
    state: 'FL',
    places: [
      {
        name: 'Southernmost Point of the Continental US',
        map: 'https://www.google.com/maps/place/Southernmost+Point+of+the+Continental+US/@24.5465218,-81.7996727,17z',
        region: 'Key West'
      },
      {
        name: 'Clearwater Beach',
        map:'https://maps.apple.com/?address=Gulf%20of%20Mexico%20Dr,%20Longboat%20Key,%20FL%2034228,%20United%20States&ll=27.982654,-82.829254',
        region: 'Tampa'
      },
      {
        name: 'Miami Beach',
        map:'https://www.google.com/maps/place/Miami+Beach,+FL/@25.8102247,-80.2101823,12z',
        region: 'Miami'
      },
      {
        name: 'Daytona Beach',
        map: 'https://maps.apple.com/?address=Daytona%20Beach,%20FL,%20United%20States&ll=29.206762,-81.020553',
        region: 'Central Florida'
      },
      {
        name: 'Pensacola Beach',
        map: 'https://www.google.com/maps/place/Pensacola+Beach,+FL/@30.3541359,-87.1915156,11z',
        region: 'Panhandle'
      },
      {
        name:'Universal Studios',
        map: 'https://maps.apple.com/?address=6000%20Universal%20Boulevard,%20Orlando,%20FL%2032819,%20United%20States&ll=28.476312,-81.468430',
        region: 'Central Florida'
      },
      {
        name: 'Clearwater Marine Aquarium',
        map: 'https://maps.apple.com/?address=249%20Windward%20Passage,%20Clearwater,%20FL%2033767,%20United%20States&ll=27.976870,-82.819052',
        region: 'Tampa'
      }
    ]
  },
  {
    state: 'IN',
    places:[
      {
        name: 'Eiteljorg Museum of American Indians and Western Art',
        map:'https://maps.apple.com/?address=500%20W%20Washington%20St,%20Indianapolis,%20IN%20%2046204,%20United%20States&ll=39.768568,-86.167772',
        region: 'Indianapolis'
      }
    ]
  },
  {
    state: 'LA',
    places:[
      {
        name:'French Quarter',
        map:'https://maps.apple.com/?address=730%20Dumaine%20St,%20New%20Orleans,%20LA%20%2070116,%20United%20States&ll=29.959971,-90.064041',
        region:'New Orleans'
      }
    ]
  },
  {
    state: 'MS',
    places:[
      {
        name: 'Biloxi Beach',
        map: 'https://maps.apple.com/?address=2200%20Beach%20Blvd,%20Biloxi,%20MS%2039531,%20United%20States&ll=30.391432,-88.967474',
        region:'Mississippi Gulf Coast'
      }
    ]
  },
  {
    state: 'NY',
    places:[
      {
        name: 'Little Island @Pier55',
        map: 'https://maps.apple.com/?address=West%2013th%20Street,%20New%20York,%20NY%2010014,%20United%20States&ll=40.741990,-74.010633',
        region: 'NYC'
      },
      {
        name: 'Empire State Building',
        map: 'https://maps.apple.com/?address=350%205th%20Ave,%20New%20York,%20NY%20%2010118,%20United%20States&ll=40.748441,-73.985664',
        region: 'NYC'
      },
      {
        name: 'Kaaterskill Falls',
        map: 'https://www.google.com/maps/place/Kaaterskill+Falls/@42.1934368,-74.0719472,15z',
        region: 'Catskills'
      },
      {
        name: 'Ashokan Resevoir',
        map: 'https://www.google.com/maps/place/Ashokan+Quarry+Trail/@41.9402537,-74.2307719,14z',
        region: 'Catskills'
      },
      {
        name: 'Yankee Stadium',
        map: 'https://maps.apple.com/?address=1%20East%20161st%20Street,%20Bronx,%20NY%2010451,%20United%20States&ll=40.829617,-73.926342',
        region: 'NYC'
      },
      {
        name: 'Coney Island',
        map: 'https://maps.apple.com/?address=Coney%20Island,%20Brooklyn,%20New%20York,%20NY,%20United%20States&ll=40.578972,-73.985307',
        region: 'NYC'
      },
      {
        name: 'Robert Moses State Park',
        map: 'https://maps.apple.com/?address=600%20Robert%20Moses%20State%20Pkwy,%20Babylon,%20NY%2011702,%20United%20States&ll=40.624870,-73.266320',
        region: 'Long Island'
      },
      {
        name: 'Jones Beach State Park',
        map: 'https://maps.apple.com/?address=2400%20Ocean%20Parkway,%20Wantagh,%20NY%2011793,%20United%20States&ll=40.594494,-73.508343',
        region: 'Long Island'
      },
      {
        name: 'Montauk Lighthouse',
        map: 'https://maps.apple.com/?address=2000%20Montauk%20Hwy,%20Montauk,%20NY%2011954,%20United%20States&ll=41.071004,-71.857249',
        region: 'Long Island'
      },
      {
        name: 'World Trade Center',
        map:'https://maps.apple.com/?address=World%20Trade%20Center,%20Manhattan,%20New%20York,%20NY,%20United%20States&ll=40.711770,-74.012360',
        region: 'NYC'
      },
      {
        name: 'Edge Observatory Deck',
        map:'https://maps.apple.com/?address=30%20Hudson%20Yards,%20New%20York,%20NY%2010001,%20United%20States&ll=40.754007,-74.000580',
        region: 'NYC'
      },
      {
        name: 'Far Rockaway Beach',
        map: 'https://maps.apple.com/?address=Beach%2096th%20St%20%26%20Rockaway%20Fwy,%20Rockaway%20Beach,%20NY%20%2011693,%20United%20States&ll=40.582830,-73.816338',
        region: 'NYC'
      },
      {
        name: 'New York Aquarium',
        map:'https://maps.apple.com/?address=602%20Surf%20Ave,%20Brooklyn,%20NY%2011224,%20United%20States&ll=40.574335,-73.974826',
        region: 'NYC'
      },
      {
        name: 'Lake George (New York)',
        map: 'https://maps.apple.com/?address=Lake%20George,%20NY,%20United%20States&ll=43.431521,-73.716505&lsp=6489',
        region: 'Upstate'
      },
      {
        name: 'Prospect Mountain',
        map: 'https://www.google.com/maps/place/Prospect+Mountain+Summit/@43.4255641,-73.7467631,16z/',
        region: 'Upstate'
      },
      {
        name: 'American Museum of Natural History',
        map: 'https://maps.apple.com/?address=200%20Central%20Park%20W,%20New%20York,%20NY%2010024,%20United%20States&ll=40.781069,-73.974262',
        region: 'NYC'
      }
    ]
  },
  {
    state: 'VA',
    places:[
      {
        name:'Battelship USS Wisconsin',
        map:'https://maps.apple.com/?address=101%20Boush%20St,%20Norfolk,%20VA%20%2023510,%20United%20States&ll=36.848430,-76.293158',
        region: 'Virginia Beach'
      }
    ]
  }

];
