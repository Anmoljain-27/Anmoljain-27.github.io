document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle booking logic here
});

let map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map-container'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
    });

    // Add marker for ambulance location
    let ambulanceMarker = new google.maps.Marker({
        position: { lat: -34.397, lng: 150.644 },
        map: map
    });

    // Update marker position based on ambulance location
    function updateMarkerPosition(lat, lng) {
        ambulanceMarker.setPosition(new google.maps.LatLng(lat, lng));
    }

    // Call for help logic
    document.getElementById('call-help').addEventListener('click', function() {
        // Handle call for help logic here
    });
}

initMap();

document.getElementById('call-help').addEventListener('click', function() {
    window.open('tel:1234567890', '_self');
});