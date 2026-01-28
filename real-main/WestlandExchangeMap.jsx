import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function WestlandExchangeMap() {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const currentLocationMarkerRef = useRef(null);
  const destinationMarkerRef = useRef(null);
  const polylineRef = useRef(null);
  const routeLineRef = useRef(null);
  const watchIdRef = useRef(null);
  
  const [isTracking, setIsTracking] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(null);
  const [trackingPath, setTrackingPath] = useState([]);
  const [error, setError] = useState(null);
  const [distance, setDistance] = useState(null);
  
  const destination = [-1.2707016530897761, 36.81055930967733]; // Westland Exchange

  useEffect(() => {
    if (mapInstanceRef.current) return;

    // Fix for default marker icons
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    });

    if (mapRef.current) {
      const map = L.map(mapRef.current, {
        center: destination,
        zoom: 13,
        scrollWheelZoom: false,
        zoomControl: true,
        dragging: true,
        touchZoom: true,
        doubleClickZoom: true,
        boxZoom: true,
        keyboard: true,
        trackResize: true
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      // Create destination marker (Westland Exchange)
      const destinationIcon = L.divIcon({
        className: 'destination-marker',
        html: `
          <div style="position: relative;">
            <div style="
              background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%);
              width: 40px;
              height: 40px;
              border-radius: 50% 50% 50% 0;
              transform: rotate(-45deg);
              display: flex;
              align-items: center;
              justify-content: center;
              border: 4px solid white;
              box-shadow: 0 4px 12px rgba(220, 38, 38, 0.5);
            ">
              <div style="
                width: 12px;
                height: 12px;
                background: white;
                border-radius: 50%;
                transform: rotate(45deg);
              "></div>
            </div>
          </div>
        `,
        iconSize: [40, 40],
        iconAnchor: [20, 40],
      });

      const destMarker = L.marker(destination, { icon: destinationIcon }).addTo(map);
      destMarker.bindPopup(`
        <div style="padding: 8px; min-width: 200px;">
          <h3 style="font-weight: bold; font-size: 18px; margin-bottom: 4px;">📍 Destination</h3>
          <p style="font-size: 16px; font-weight: 600; color: #dc2626;">Westland Exchange</p>
          <p style="font-size: 14px; color: #6b7280;">Nairobi, Kenya</p>
        </div>
      `);

      // Create current location marker
      const currentLocationIcon = L.divIcon({
        className: 'current-location-marker',
        html: `
          <div style="position: relative;">
            <div style="
              background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
              width: 40px;
              height: 40px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              border: 4px solid white;
              box-shadow: 0 4px 12px rgba(59, 130, 246, 0.5);
              animation: pulse 2s infinite;
            ">
              <div style="
                width: 12px;
                height: 12px;
                background: white;
                border-radius: 50%;
              "></div>
            </div>
            <div style="
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 60px;
              height: 60px;
              border-radius: 50%;
              background: rgba(59, 130, 246, 0.2);
              animation: ripple 2s infinite;
            "></div>
          </div>
        `,
        iconSize: [40, 40],
        iconAnchor: [20, 20],
      });

      // Create tracking path polyline
      const polyline = L.polyline([], {
        color: '#3b82f6',
        weight: 4,
        opacity: 0.7,
        smoothFactor: 1
      }).addTo(map);

      // Create route line (straight line to destination)
      const routeLine = L.polyline([], {
        color: '#dc2626',
        weight: 2,
        opacity: 0.5,
        dashArray: '10, 10',
        smoothFactor: 1
      }).addTo(map);

      destinationMarkerRef.current = destMarker;
      polylineRef.current = polyline;
      routeLineRef.current = routeLine;
      mapInstanceRef.current = map;

      setTimeout(() => {
        map.invalidateSize();
      }, 100);
    }

    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes pulse {
        0%, 100% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.1);
        }
      }
      @keyframes ripple {
        0% {
          transform: translate(-50%, -50%) scale(0.8);
          opacity: 0.5;
        }
        100% {
          transform: translate(-50%, -50%) scale(1.5);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
      if (watchIdRef.current) {
        navigator.geolocation.clearWatch(watchIdRef.current);
      }
      document.head.removeChild(style);
    };
  }, []);

  // Calculate distance between two coordinates
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of Earth in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const distance = R * c;
    return distance;
  };

  const startTracking = () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      return;
    }

    setError(null);
    setIsTracking(true);

    watchIdRef.current = navigator.geolocation.watchPosition(
      (position) => {
        const newPos = [position.coords.latitude, position.coords.longitude];
        setCurrentPosition(newPos);

        // Calculate distance to destination
        const dist = calculateDistance(newPos[0], newPos[1], destination[0], destination[1]);
        setDistance(dist);

        // Add or update current location marker
        if (!currentLocationMarkerRef.current && mapInstanceRef.current) {
          const currentLocationIcon = L.divIcon({
            className: 'current-location-marker',
            html: `
              <div style="position: relative;">
                <div style="
                  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
                  width: 40px;
                  height: 40px;
                  border-radius: 50%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  border: 4px solid white;
                  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.5);
                  animation: pulse 2s infinite;
                ">
                  <div style="
                    width: 12px;
                    height: 12px;
                    background: white;
                    border-radius: 50%;
                  "></div>
                </div>
              </div>
            `,
            iconSize: [40, 40],
            iconAnchor: [20, 20],
          });

          const marker = L.marker(newPos, { icon: currentLocationIcon }).addTo(mapInstanceRef.current);
          marker.bindPopup(`
            <div style="padding: 8px; min-width: 200px;">
              <h3 style="font-weight: bold; font-size: 18px; margin-bottom: 4px;">📍 Your Location</h3>
              <p style="font-size: 14px; color: #6b7280;">Live tracking active</p>
            </div>
          `);
          currentLocationMarkerRef.current = marker;
        } else if (currentLocationMarkerRef.current) {
          currentLocationMarkerRef.current.setLatLng(newPos);
        }

        // Update tracking path
        setTrackingPath(path => {
          const newPath = [...path, newPos];
          if (polylineRef.current) {
            polylineRef.current.setLatLngs(newPath);
          }
          return newPath;
        });

        // Update route line to destination
        if (routeLineRef.current) {
          routeLineRef.current.setLatLngs([newPos, destination]);
        }

        // Fit map to show both markers
        if (mapInstanceRef.current && currentLocationMarkerRef.current) {
          const bounds = L.latLngBounds([newPos, destination]);
          mapInstanceRef.current.fitBounds(bounds, { padding: [50, 50] });
        }
      },
      (error) => {
        setError(`Location error: ${error.message}`);
        setIsTracking(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      }
    );
  };

  const stopTracking = () => {
    if (watchIdRef.current) {
      navigator.geolocation.clearWatch(watchIdRef.current);
      watchIdRef.current = null;
    }
    setIsTracking(false);
  };

  const clearPath = () => {
    setTrackingPath([]);
    if (polylineRef.current) {
      polylineRef.current.setLatLngs([]);
    }
  };

  const centerOnLocation = () => {
    if (currentPosition && mapInstanceRef.current) {
      mapInstanceRef.current.setView(currentPosition, 15, { animate: true });
    }
  };

  const showFullRoute = () => {
    if (currentPosition && mapInstanceRef.current) {
      const bounds = L.latLngBounds([currentPosition, destination]);
      mapInstanceRef.current.fitBounds(bounds, { padding: [50, 50], animate: true });
    }
  };

  return (
    <div className="w-full h-screen flex flex-col">
      
      
      <div className="flex-1 relative bg-gray-100">
        <div 
          ref={mapRef} 
          style={{ 
            height: '100%', 
            width: '100%',
            minHeight: '400px'
          }}
        ></div>

        {/* Tracking Controls */}
        <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-4 z-[1000] max-w-xs">
          <h3 className="font-bold text-lg mb-3 text-gray-800">Navigation</h3>
          
          {error && (
            <div className="mb-3 p-2 bg-red-100 border border-red-300 rounded text-red-700 text-sm">
              {error}
            </div>
          )}

          <div className="space-y-2 mb-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Status:</span>
              <span className={`font-semibold ${isTracking ? 'text-green-600' : 'text-gray-500'}`}>
                {isTracking ? '🟢 Tracking' : '⚫ Stopped'}
              </span>
            </div>
            
            {distance !== null && (
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Distance:</span>
                <span className="font-semibold text-red-600">
                  {distance < 1 
                    ? `${(distance * 1000).toFixed(0)} m` 
                    : `${distance.toFixed(2)} km`}
                </span>
              </div>
            )}
            
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Points:</span>
              <span className="font-semibold text-blue-600">{trackingPath.length}</span>
            </div>
            
            {currentPosition && (
              <div className="text-xs text-gray-500 mt-2 p-2 bg-gray-50 rounded">
                <div>📍 Your Location:</div>
                <div>Lat: {currentPosition[0].toFixed(6)}</div>
                <div>Lng: {currentPosition[1].toFixed(6)}</div>
              </div>
            )}
          </div>

          <div className="space-y-2">
            {!isTracking ? (
              <button
                onClick={startTracking}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition-colors"
              >
                ▶ Start GPS Tracking
              </button>
            ) : (
              <button
                onClick={stopTracking}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition-colors"
              >
                ⏸ Stop Tracking
              </button>
            )}
            
            {currentPosition && (
              <>
                <button
                  onClick={showFullRoute}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded transition-colors"
                >
                  🗺 Show Full Route
                </button>
                
                <button
                  onClick={centerOnLocation}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded transition-colors"
                >
                  🎯 Center on Me
                </button>
              </>
            )}
            
            <button
              onClick={clearPath}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors"
            >
              🗑 Clear Path
            </button>
          </div>

          <div className="mt-4 pt-3 border-t border-gray-200 text-xs text-gray-500">
            💡 Allow location access when prompted
          </div>
        </div>
      </div>
      
      
    </div>
  );
}