import React, { useState } from 'react';
import { MapPin, Info, CheckCircle2, AlertCircle } from 'lucide-react';
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/india/india-states.json";

// Coordinates: [longitude, latitude]
const cities = [
  { id: 'srinagar',         name: 'Srinagar',          coordinates: [74.7973,  34.0837], type: 'Jammu & Kashmir',            address: '12 J&K Secretariat Road' },
  { id: 'shimla',           name: 'Shimla',             coordinates: [77.1734,  31.1048], type: 'Himachal Pradesh',            address: '45 Mall Road' },
  { id: 'chandigarh',       name: 'Chandigarh',         coordinates: [76.7794,  30.7333], type: 'Punjab/Haryana',              address: 'Sector 17 Plaza' },
  { id: 'dehradun',         name: 'Dehradun',           coordinates: [78.0322,  30.3165], type: 'Uttarakhand',                 address: '9 Rajpur Road' },
  { id: 'delhi',            name: 'New Delhi',          coordinates: [77.2090,  28.6139], type: 'National Capital Territory',  address: '1 Parliament Street' },
  { id: 'jaipur',           name: 'Jaipur',             coordinates: [75.7873,  26.9124], type: 'Rajasthan',                   address: '22 MI Road' },
  { id: 'lucknow',          name: 'Lucknow',            coordinates: [80.9462,  26.8467], type: 'Uttar Pradesh',               address: '5 Hazratganj Marg' },
  { id: 'patna',            name: 'Patna',              coordinates: [85.1376,  25.5941], type: 'Bihar',                       address: '11 Bailey Road' },
  { id: 'gangtok',          name: 'Gangtok',            coordinates: [88.6138,  27.3389], type: 'Sikkim',                      address: '7 MG Marg' },
  { id: 'itanagar',         name: 'Itanagar',           coordinates: [93.6053,  27.0844], type: 'Arunachal Pradesh',           address: '3 VIP Road' },
  { id: 'dispur',           name: 'Dispur',             coordinates: [91.7983,  26.1433], type: 'Assam',                       address: 'GS Road Secretariat' },
  { id: 'kohima',           name: 'Kohima',             coordinates: [94.1086,  25.6701], type: 'Nagaland',                    address: '14 PR Hill' },
  { id: 'shillong',         name: 'Shillong',           coordinates: [91.8933,  25.5788], type: 'Meghalaya',                   address: 'Police Bazar Square' },
  { id: 'imphal',           name: 'Imphal',             coordinates: [93.9368,  24.8170], type: 'Manipur',                     address: '8 Kangla Road' },
  { id: 'aizawl',           name: 'Aizawl',             coordinates: [92.7176,  23.7271], type: 'Mizoram',                     address: 'Treasury Square' },
  { id: 'agartala',         name: 'Agartala',           coordinates: [91.2868,  23.8315], type: 'Tripura',                     address: '22 Akhaura Road' },
  { id: 'ranchi',           name: 'Ranchi',             coordinates: [85.3096,  23.3441], type: 'Jharkhand',                   address: '5 Main Road' },
  { id: 'kolkata',          name: 'Kolkata',            coordinates: [88.3639,  22.5726], type: 'West Bengal',                 address: '15 Chowringhee Road' },
  { id: 'gandhinagar',      name: 'Gandhinagar',        coordinates: [72.6369,  23.2156], type: 'Gujarat',                     address: 'Sector 10 CHH Road' },
  { id: 'bhopal',           name: 'Bhopal',             coordinates: [77.4126,  23.2599], type: 'Madhya Pradesh',              address: '12 MP Nagar' },
  { id: 'raipur',           name: 'Raipur',             coordinates: [81.6296,  21.2514], type: 'Chhattisgarh',                address: 'GE Road Complex' },
  { id: 'bhubaneswar',      name: 'Bhubaneswar',        coordinates: [85.8245,  20.2961], type: 'Odisha',                      address: 'Janpath Road' },
  { id: 'mumbai',           name: 'Mumbai',             coordinates: [72.8777,  19.0760], type: 'Maharashtra',                 address: 'Marine Drive Blvd' },
  { id: 'hyderabad',        name: 'Hyderabad',          coordinates: [78.4867,  17.3850], type: 'Telangana',                   address: 'Jubilee Hills Road 36' },
  { id: 'amaravati',        name: 'Amaravati',          coordinates: [80.5186,  16.5131], type: 'Andhra Pradesh',              address: 'Secretariat Complex' },
  { id: 'panaji',           name: 'Panaji',             coordinates: [73.8278,  15.4909], type: 'Goa',                         address: 'DB Marg Riverside' },
  { id: 'bengaluru',        name: 'Bengaluru',          coordinates: [77.5946,  12.9716], type: 'Karnataka',                   address: 'MG Road Junction' },
  { id: 'chennai',          name: 'Chennai',            coordinates: [80.2707,  13.0827], type: 'Tamil Nadu',                  address: 'Anna Salai Mount Road' },
  { id: 'thiruvananthapuram', name: 'Thiruvananthapuram', coordinates: [76.9366, 8.5241], type: 'Kerala',                      address: 'MG Road Palayam' },
];

export default function PollingStationMap({ vertical, t, language }) {
  const [activeCity, setActiveCity]       = useState(null);
  const [showFakeLoading, setShowFakeLoading] = useState(false);

  if (!vertical) return null;

  const loc     = t?.guide || {};
  const tips    = t?.mapTips || {};
  const results = t?.results || {};

  const isNRI       = vertical?.name?.includes('NRI');
  const searchPrefix = isNRI ? (language === 'hi' ? 'भारतीय दूतावास' : 'Indian embassy near') : (language === 'hi' ? 'मतदान केंद्र' : 'polling booth near');
  const tip          = isNRI ? tips.nri : tips.default;

  const handleCityClick = (city) => {
    setShowFakeLoading(true);
    setTimeout(() => {
      setActiveCity(city);
      setShowFakeLoading(false);
    }, 800);
  };

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 h-full flex flex-col print:shadow-none">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3" id="map-heading">
        <span aria-hidden="true" className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
          <MapPin size={20} />
        </span>
        {loc.locationTitle || 'Location Guide'}
      </h2>

      <div className="mb-5 space-y-3">
        <h3 className="text-lg font-bold text-gray-800">{vertical.mapLabel}</h3>

        <div role="note" className="flex items-start gap-2 bg-blue-50 text-blue-800 p-3 rounded-xl text-sm">
          <Info size={17} className="mt-0.5 flex-shrink-0 text-blue-600" aria-hidden="true" />
          <p>{tip}</p>
        </div>

        <div role="note" className="flex items-start gap-2 bg-yellow-50 border border-yellow-200 text-yellow-800 p-3 rounded-xl text-sm">
          <AlertCircle size={17} className="mt-0.5 flex-shrink-0 text-yellow-600" aria-hidden="true" />
          <p>
            <strong>{t?.demoMode || 'Demo Mode:'}</strong>{' '}
            {t?.demoModeText || 'Click a marker on the map to view sample polling station details.'}
          </p>
        </div>
      </div>

      {/* Map */}
      <div
        role="application"
        aria-label="Interactive India map with state capital markers"
        className="flex-1 w-full min-h-[500px] rounded-2xl overflow-hidden border-2 border-gray-200 relative bg-[#e8f4f8] cursor-crosshair"
      >
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: 1150, center: [82.5, 22.5] }}
          width={500}
          height={520}
          style={{ width: "100%", height: "100%" }}
          aria-hidden="true"
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#c8dae8"
                  stroke="#90afc4"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: "none" },
                    hover:   { fill: "#a8c8dc", outline: "none" },
                    pressed: { fill: "#7aafcb", outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>

          {cities.map((city) => {
            const isActive = activeCity?.id === city.id;
            return (
              <Marker
                key={city.id}
                coordinates={city.coordinates}
                onClick={() => handleCityClick(city)}
                style={{ cursor: "pointer" }}
              >
                {isActive && <circle r={9} fill="#22c55e" opacity={0.25} />}
                <circle
                  r={isActive ? 5 : 4}
                  fill={isActive ? "#16a34a" : "#1d4ed8"}
                  stroke="#ffffff"
                  strokeWidth={1.5}
                />
                <text
                  textAnchor="middle"
                  y={14}
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "5px",
                    fontWeight: 600,
                    fill: isActive ? "#15803d" : "#1e3a5f",
                    pointerEvents: "none",
                    paintOrder: "stroke",
                    stroke: "white",
                    strokeWidth: "2px",
                    strokeLinejoin: "round",
                  }}
                >
                  {city.name}
                </text>
              </Marker>
            );
          })}
        </ComposableMap>

        {/* Screen-reader accessible list of cities */}
        <ul className="sr-only" aria-label="State capitals. Click on a city to view polling details.">
          {cities.map((city) => (
            <li key={city.id}>
              <button onClick={() => handleCityClick(city)}>
                {city.name}, {city.type}
              </button>
            </li>
          ))}
        </ul>

        {/* Result Card */}
        {activeCity && !showFakeLoading && (
          <div
            role="region"
            aria-live="polite"
            aria-label={`Result for ${activeCity.name}`}
            className="absolute bottom-4 left-4 right-4 bg-white/97 backdrop-blur-sm p-4 rounded-2xl shadow-2xl border border-gray-200 z-30 animate-in slide-in-from-bottom-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-bold text-green-600 flex items-center gap-2 text-sm mb-1">
                  <CheckCircle2 size={15} aria-hidden="true" />
                  {isNRI ? (results.embassyFound || 'Embassy Found') : (results.stationFound || 'Polling Station Found')}
                </p>
                <p className="text-base font-extrabold text-gray-900">
                  {activeCity.name} {isNRI ? (results.consulateGeneral || 'Consulate General') : (results.centralBooth || 'Central Polling Booth')}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  {activeCity.address}, {activeCity.name} — {activeCity.type}
                </p>
              </div>
              <button
                onClick={() => setActiveCity(null)}
                aria-label="Close result"
                className="text-gray-400 hover:text-gray-700 text-2xl leading-none font-bold flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 rounded"
              >
                &times;
              </button>
            </div>
          </div>
        )}

        {/* Loading spinner */}
        {showFakeLoading && (
          <div
            role="status"
            aria-live="polite"
            aria-label="Searching for location..."
            className="absolute inset-0 flex items-center justify-center bg-white/60 backdrop-blur-sm z-30 rounded-2xl"
          >
            <div className="flex flex-col items-center bg-white p-5 rounded-2xl shadow-xl border border-gray-100">
              <div className="w-9 h-9 border-4 border-green-500 border-t-transparent rounded-full animate-spin mb-3" aria-hidden="true" />
              <span className="text-sm font-bold text-green-700">
                {t?.searchingFor || 'Searching'} {searchPrefix}…
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
