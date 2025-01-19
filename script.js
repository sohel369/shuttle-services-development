// Shuttle route data
const routes = [
    {
        id: 1,
        name: "ROUTE 1 (UITENHAGE TO SUMMERSTRAND CAMPUSES)",
        location: "UITENHAGE",
        trips: [
            {
                name: "Morning Trip 1",
                stops: [
                    { station: "Uitenhage Metro railway station", time: "06h20" },
                    { station: "Missionvale Campus", time: "06h45" },
                    { station: "Shatterproof", time: "06h50" },
                    { station: "2nd Ave Campus, North Campus", time: "07h20" },
                    { station: "South Campus", time: "07h30" }
                ]
            },
            {
                name: "Morning Trip 2",
                stops: [
                    { station: "Uitenhage Metro railway station", time: "08h20" },
                    { station: "Missionvale Campus", time: "08h45" },
                    { station: "Shatterproof", time: "08h50" },
                    { station: "2nd Ave Campus, North Campus", time: "09h20" },
                    { station: "South Campus", time: "09h30" }
                ]
            },
            {
                name: "Return Trip 1",
                returnTrip: true,
                stops: [
                    { station: "South Campus", time: "12h30" },
                    { station: "North Campus", time: "12h35" },
                    { station: "2nd Avenue Campus", time: "12h40" },
                    { station: "Missionvale Campus", time: "13h10" },
                    { station: "Uitenhage Metro railway station", time: "13h30" }
                ]
            },
            {
                name: "Return Trip 2",
                returnTrip: true,
                stops: [
                    { station: "South Campus", time: "14h30" },
                    { station: "North Campus", time: "14h35" },
                    { station: "2nd Avenue Campus", time: "14h40" },
                    { station: "Missionvale Campus", time: "15h10" },
                    { station: "Uitenhage Metro railway station", time: "15h30" }
                ]
            },
            {
                name: "Return Trip 3",
                returnTrip: true,
                stops: [
                    { station: "South Campus", time: "17h30" },
                    { station: "North Campus", time: "17h35" },
                    { station: "2nd Avenue Campus", time: "17h40" },
                    { station: "Missionvale Campus", time: "18h10" },
                    { station: "Uitenhage Metro railway station", time: "18h30" }
                ]
            }
        ]
    }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displaySchedule();
    initializeSearch();
    // Hide all routes initially
    document.querySelectorAll('.route-section').forEach(section => {
        section.style.display = 'none';
    });
});

function displaySchedule() {
    const scheduleContainer = document.querySelector('.schedule-container');
    let scheduleHTML = '';

    routes.forEach(route => {
        scheduleHTML += `
            <div class="route-section">
                <h3 class="route-title">${route.name}</h3>
                <h4 class="location-title">${route.location}</h4>
                
                <div class="trips-container">
                    ${route.trips.map(trip => `
                        <div class="trip-card ${trip.returnTrip ? 'return-trip' : ''}">
                            <h4>${trip.name}</h4>
                            <table class="schedule-table">
                                <thead>
                                    <tr>
                                        <th>Station</th>
                                        <th>Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${trip.stops.map(stop => `
                                        <tr>
                                            <td>${stop.station}</td>
                                            <td>${stop.time}</td>
                                        </tr>
                                    `).join('')}
                                </tbody>
                            </table>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    });

    scheduleContainer.innerHTML = scheduleHTML;
}

// Get all unique stations
function getAllStations() {
    const stations = new Set();
    routes.forEach(route => {
        route.trips.forEach(trip => {
            trip.stops.forEach(stop => {
                stations.add(stop.station);
            });
        });
    });
    return Array.from(stations).sort();
}

// Initialize search functionality
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    const dropdown = document.getElementById('searchDropdown');
    const allStations = getAllStations();

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown-container')) {
            dropdown.classList.remove('show');
        }
    });

    // Handle input events
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        updateDropdown(searchTerm, allStations);
    });

    // Show dropdown when focusing on input
    searchInput.addEventListener('focus', () => {
        updateDropdown(searchInput.value.toLowerCase(), allStations);
        dropdown.classList.add('show');
    });
}

// Update dropdown content
function updateDropdown(searchTerm, stations) {
    const dropdown = document.getElementById('searchDropdown');
    dropdown.innerHTML = '';
    
    const filteredStations = stations.filter(station => 
        station.toLowerCase().includes(searchTerm)
    );

    if (filteredStations.length === 0) {
        dropdown.innerHTML = '<div class="dropdown-item">No stations found</div>';
    } else {
        filteredStations.forEach(station => {
            const routeInfo = findRouteInfo(station);
            const div = document.createElement('div');
            div.className = 'dropdown-item';
            div.innerHTML = `
                <div class="station-name">${station}</div>
                <div class="route-info">${routeInfo}</div>
            `;
            div.addEventListener('click', () => selectStation(station));
            dropdown.appendChild(div);
        });
    }

    dropdown.classList.add('show');
}

// Find route information for a station
function findRouteInfo(station) {
    const routeInfo = [];
    routes.forEach(route => {
        route.trips.forEach(trip => {
            const stop = trip.stops.find(stop => stop.station === station);
            if (stop) {
                routeInfo.push(`${trip.name}: ${stop.time}`);
            }
        });
    });
    return routeInfo.length > 0 ? routeInfo[0] : 'No schedule information';
}

// Handle station selection
function selectStation(station) {
    const searchInput = document.getElementById('searchInput');
    const dropdown = document.getElementById('searchDropdown');
    
    searchInput.value = station;
    dropdown.classList.remove('show');
    
    // Show relevant route sections
    showRelevantRoutes(station);
}

// Show routes relevant to selected station
function showRelevantRoutes(station) {
    const routeSections = document.querySelectorAll('.route-section');
    
    routeSections.forEach(section => {
        section.style.display = 'none';
        const routeTrips = section.querySelectorAll('.schedule-table tr');
        
        routeTrips.forEach(row => {
            const stationCell = row.querySelector('td:first-child');
            if (stationCell && stationCell.textContent === station) {
                section.style.display = 'block';
                row.classList.add('highlighted');
            } else if (stationCell) {
                row.classList.remove('highlighted');
            }
        });
    });

    // Scroll to the first visible route section
    const firstVisibleRoute = document.querySelector('.route-section[style="display: block;"]');
    if (firstVisibleRoute) {
        firstVisibleRoute.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Function to check if the selected city is available
function checkCity(city) {
    const availableCities = ['Cape Town']; // Add more cities as needed
    const topHeader = document.querySelector('.Top_header');
    
    if (!availableCities.includes(city)) {
        topHeader.classList.add('error');
        // Show error message
        const addressLocation = document.querySelector('.address_location');
        const errorMsg = document.createElement('span');
        errorMsg.className = 'error-message';
        errorMsg.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Service not available in this city';
        
        // Remove any existing error message
        const existingError = addressLocation.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        addressLocation.appendChild(errorMsg);
        
        // Remove error state after 5 seconds
        setTimeout(() => {
            topHeader.classList.remove('error');
            errorMsg.remove();
        }, 5000);
        
        return false;
    }
    
    return true;
}
