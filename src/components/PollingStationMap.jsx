import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Info, CheckCircle2 } from 'lucide-react';

const cities = [
  { id: 'srinagar',         name: 'Srinagar',          lat: 34.0837, lng: 74.7973, type: 'Jammu & Kashmir',            address: '12 J&K Secretariat Road' },
  { id: 'shimla',           name: 'Shimla',             lat: 31.1048, lng: 77.1734, type: 'Himachal Pradesh',            address: '45 Mall Road' },
  { id: 'chandigarh',       name: 'Chandigarh',         lat: 30.7333, lng: 76.7794, type: 'Punjab/Haryana',              address: 'Sector 17 Plaza' },
  { id: 'dehradun',         name: 'Dehradun',           lat: 30.3165, lng: 78.0322, type: 'Uttarakhand',                 address: '9 Rajpur Road' },
  { id: 'delhi',            name: 'New Delhi',          lat: 28.6139, lng: 77.2090, type: 'National Capital Territory',  address: '1 Parliament Street' },
  { id: 'jaipur',           name: 'Jaipur',             lat: 26.9124, lng: 75.7873, type: 'Rajasthan',                   address: '22 MI Road' },
  { id: 'lucknow',          name: 'Lucknow',            lat: 26.8467, lng: 80.9462, type: 'Uttar Pradesh',               address: '5 Hazratganj Marg' },
  { id: 'patna',            name: 'Patna',              lat: 25.5941, lng: 85.1376, type: 'Bihar',                       address: '11 Bailey Road' },
  { id: 'gangtok',          name: 'Gangtok',            lat: 27.3389, lng: 88.6138, type: 'Sikkim',                      address: '7 MG Marg' },
  { id: 'itanagar',         name: 'Itanagar',           lat: 27.0844, lng: 93.6053, type: 'Arunachal Pradesh',           address: '3 VIP Road' },
  { id: 'dispur',           name: 'Dispur',             lat: 26.1433, lng: 91.7983, type: 'Assam',                       address: 'GS Road Secretariat' },
  { id: 'kohima',           name: 'Kohima',             lat: 25.6701, lng: 94.1086, type: 'Nagaland',                    address: '14 PR Hill' },
  { id: 'shillong',         name: 'Shillong',           lat: 25.5788, lng: 91.8933, type: 'Meghalaya',                   address: 'Police Bazar Square' },
  { id: 'imphal',           name: 'Imphal',             lat: 24.8170, lng: 93.9368, type: 'Manipur',                     address: '8 Kangla Road' },
  { id: 'aizawl',           name: 'Aizawl',             lat: 23.7271, lng: 92.7176, type: 'Mizoram',                     address: 'Treasury Square' },
  { id: 'agartala',         name: 'Agartala',           lat: 23.8315, lng: 91.2868, type: 'Tripura',                     address: '22 Akhaura Road' },
  { id: 'ranchi',           name: 'Ranchi',             lat: 23.3441, lng: 85.3096, type: 'Jharkhand',                   address: '5 Main Road' },
  { id: 'kolkata',          name: 'Kolkata',            lat: 22.5726, lng: 88.3639, type: 'West Bengal',                 address: '15 Chowringhee Road' },
  { id: 'gandhinagar',      name: 'Gandhinagar',        lat: 23.2156, lng: 72.6369, type: 'Gujarat',                     address: 'Sector 10 CHH Road' },
  { id: 'bhopal',           name: 'Bhopal',             lat: 23.2599, lng: 77.4126, type: 'Madhya Pradesh',              address: '12 MP Nagar' },
  { id: 'raipur',           name: 'Raipur',             lat: 21.2514, lng: 81.6296, type: 'Chhattisgarh',                address: 'GE Road Complex' },
  { id: 'bhubaneswar',      name: 'Bhubaneswar',        lat: 20.2961, lng: 85.8245, type: 'Odisha',                      address: 'Janpath Road' },
  { id: 'mumbai',           name: 'Mumbai',             lat: 19.0760, lng: 72.8777, type: 'Maharashtra',                 address: 'Marine Drive Blvd' },
  { id: 'hyderabad',        name: 'Hyderabad',          lat: 17.3850, lng: 78.4867, type: 'Telangana',                   address: 'Jubilee Hills Road 36' },
  { id: 'amaravati',        name: 'Amaravati',          lat: 16.5131, lng: 80.5186, type: 'Andhra Pradesh',              address: 'Secretariat Complex' },
  { id: 'panaji',           name: 'Panaji',             lat: 15.4909, lng: 73.8278, type: 'Goa',                         address: 'DB Marg Riverside' },
  { id: 'bengaluru',        name: 'Bengaluru',          lat: 12.9716, lng: 77.5946, type: 'Karnataka',                   address: 'MG Road Junction' },
  { id: 'chennai',          name: 'Chennai',            lat: 13.0827, lng: 80.2707, type: 'Tamil Nadu',                  address: 'Anna Salai Mount Road' },
  { id: 'thiruvananthapuram', name: 'Thiruvananthapuram', lat: 8.5241, lng: 76.9366, type: 'Kerala',                      address: 'MG Road Palayam' },
];

export default function PollingStationMap({ vertical, t, language }) {
  const [activeCity, setActiveCity] = useState(null);
  const [showLoading, setShowLoading] = useState(false);
  const mapRef = useRef(null);
  const googleMap = useRef(null);
  const markers = useRef([]);

  useEffect(() => {
    if (!window.google || !mapRef.current) return;

    // Initialize Map
    googleMap.current = new window.google.maps.Map(mapRef.current, {
      center: { lat: 20.5937, lng: 78.9629 }, // Center of India
      zoom: 5,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false,
      styles: [
        {
          "featureType": "administrative",
          "elementType": "geometry",
          "stylers": [{ "visibility": "on" }]
        },
        {
          "featureType": "poi",
          "stylers": [{ "visibility": "off" }]
        }
      ]
    });

    // Add Markers
    cities.forEach(city => {
      const marker = new window.google.maps.Marker({
        position: { lat: city.lat, lng: city.lng },
        map: googleMap.current,
        title: city.name,
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          fillColor: '#1d4ed8',
          fillOpacity: 1,
          strokeColor: '#ffffff',
          strokeWeight: 2,
          scale: 6
        }
      });

      marker.addListener('click', () => {
        handleCityClick(city);
        googleMap.current.panTo({ lat: city.lat, lng: city.lng });
        googleMap.current.setZoom(10);
      });

      markers.current.push(marker);
    });

    return () => {
      markers.current.forEach(m => m.setMap(null));
      markers.current = [];
    };
  }, []);

  const handleCityClick = (city) => {
    setShowLoading(true);
    // Update marker colors
    markers.current.forEach(m => {
      if (m.getTitle() === city.name) {
        m.setIcon({
          path: window.google.maps.SymbolPath.CIRCLE,
          fillColor: '#16a34a',
          fillOpacity: 1,
          strokeColor: '#ffffff',
          strokeWeight: 2,
          scale: 8
        });
      } else {
        m.setIcon({
          path: window.google.maps.SymbolPath.CIRCLE,
          fillColor: '#1d4ed8',
          fillOpacity: 1,
          strokeColor: '#ffffff',
          strokeWeight: 2,
          scale: 6
        });
      }
    });

    setActiveCity(city);
    setShowLoading(false);
  };

  if (!vertical) return null;

  const loc = t?.guide || {};
  const tips = t?.mapTips || {};
  const results = t?.results || {};
  const isNRI = vertical?.name?.includes('NRI');
  const searchPrefix = isNRI ? (language === 'hi' ? 'भारतीय दूतावास' : 'Indian embassy near') : (language === 'hi' ? 'मतदान केंद्र' : 'polling booth near');
  const tip = isNRI ? tips.nri : tips.default;

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
      </div>

      {/* Map Container */}
      <div
        className="flex-1 w-full min-h-[500px] rounded-2xl overflow-hidden border-2 border-gray-200 relative bg-gray-100"
        role="application"
        aria-label="Google Map showing polling locations"
      >
        <div ref={mapRef} className="w-full h-full" />

        {/* Result Card Overlay */}
        {activeCity && !showLoading && (
          <div
            className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-2xl border border-gray-200 z-30 animate-in slide-in-from-bottom-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-bold text-green-600 flex items-center gap-2 text-sm mb-1">
                  <CheckCircle2 size={15} />
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
                className="text-gray-400 hover:text-gray-700 text-2xl leading-none font-bold"
              >
                &times;
              </button>
            </div>
          </div>
        )}

        {/* Loading Spinner */}
        {showLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/60 backdrop-blur-sm z-30 rounded-2xl">
            <div className="flex flex-col items-center bg-white p-5 rounded-2xl shadow-xl border border-gray-100">
              <div className="w-9 h-9 border-4 border-green-500 border-t-transparent rounded-full animate-spin mb-3" />
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
