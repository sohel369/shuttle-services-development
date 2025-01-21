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
                    { station: "South Campus", time: "07h30" },
                    { station: "Central", time: "07h30" }
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
    },
    {
        location: 'SUMMERSTRAND CAMPUSES to MISSIONVALE CAMPUS',
        name: 'Route 3 (Summerstrand Campuses - Missionvale Campus)',
        trips: [
            {
                name: 'Morning Trip 1',
                stops: [
                    { station: 'South Campus', time: '07:00' },
                    { station: 'North Campus', time: '07:05' },
                    { station: '2nd Avenue', time: '07:10' },
                    { station: 'Humewood / Kings Beach', time: '07:15' },
                    { station: 'Bus Stop in Baakenś street, Central, opposite Feather Market Hall', time: '07:20' },
                    { station: 'Corner Parliament and Whitlock Streets, On Russell Road', time: '07:23' },
                    { station: 'opposite Aberdeens Furniture Factory and Shop', time: '07:25' },
                    { station: 'Corner of Myrtle / Govan Mbeki Ave - Pier 14 Bus stop', time: '07:30' },
                    { station: 'Corner Govan Mbeki and Harrower Rd', time: '07:33' },
                    { station: 'Corner Govan Mbeki Ave and Graham Street at the Law Courts', time: '07:35' },
                    { station: 'Corner of Durban and Drew Roads', time: '07:40' },
                    { station: 'Arrives at Missionvale Campus', time: '07:50' }
                ]
            },
            {
                name: 'Morning Trip 2',
                stops: [
                    { station: 'South Campus', time: '09:00' },
                    { station: 'North Campus', time: '09:05' },
                    { station: '2nd Avenue', time: '09:10' },
                    { station: 'Humewood / Kings Beach', time: '09:15' },
                    { station: 'Bus Stop in Baakenś street, Central, opposite Feather Market Hall', time: '09:20' },
                    { station: 'Corner Parliament and Whitlock Streets, On Russell Road', time: '09:23' },
                    { station: 'opposite Aberdeens Furniture Factory and Shop', time: '09:25' },
                    { station: 'Corner of Myrtle / Govan Mbeki Ave - Pier 14 Bus stop', time: '09:30' },
                    { station: 'Corner Govan Mbeki and Harrower Rd', time: '09:33' },
                    { station: 'Corner Govan Mbeki Ave and Graham Street at the Law Courts', time: '09:35' },
                    { station: 'Corner of Durban and Drew Roads', time: '09:40' },
                    { station: 'Arrives at Missionvale Campus', time: '09:50' }
                ]
            },
            {
                name: 'Return Trips',
                stops: [
                    { station: 'SUMMERSTRAND CAMPUSES - MISSIONVALE CAMPUS', time: '' }
                ]
            }
        ]
    },
    {
        location: 'KORSTEN',
        name: 'Route 4 (Korsten to Summerstrand Campuses)',
        trips: [
            {
                name: 'Morning Trip 1',
                stops: [
                    { station: 'Korsten - Corner of Durban and Drew Roads', time: '06:40' },
                    { station: '2nd Ave Campus, North Campus', time: '07:30' },
                    { station: 'Arrives at South Campus', time: '07:45' }
                ]
            },
            {
                name: 'Morning Trip 2',
                stops: [
                    { station: 'Corner of Durban and Drew Roads', time: '09:00' },
                    { station: '2nd Ave Campus, North Campus', time: '09:30' },
                    { station: 'Arrives at South Campus', time: '09:45' }
                ]
            },
            {
                name: 'Morning Trip 3',
                stops: [
                    { station: 'Corner of Durban and Drew Roads', time: '11:00' },
                    { station: '2nd Ave Campus, North Campus', time: '11:30' },
                    { station: 'Arrives at South Campus', time: '11:45' }
                ]
            },
            {
                name: 'Returning from South Campus at 12h30',
                stops: [
                    { station: 'South Campus', time: '12:30' },
                    { station: 'North Campus,2nd Avenue Campus', time: '12:35' },
                    { station: 'Corner of Durban and Drew Roads', time: '13:00' }
                ]
            },
            {
                name: 'Returning from South Campus at 14h30',
                stops: [
                    { station: 'South Campus', time: '14:30' },
                    { station: 'North Campus,2nd Avenue Campus', time: '14:35' },
                    { station: 'Corner of Durban and Drew Roads', time: '15:00' }
                ]
            },
            {
                name: 'Returning from South Campus at 17h30',
                stops: [
                    { station: 'South Campus', time: '17:30' },
                    { station: 'North Campus,2nd Avenue Campus', time: '17:35' },
                    { station: 'Corner of Durban and Drew Roads', time: '18:00' }
                ]
            }
        ]
    },
    {
        location: 'SYDENHAM-VARSITY PARK',
        name: 'Route 5 - PSA 10 on Smart Varsity Park, Smada Res, LAMGA, Pier 14',
        trips: [
            {
                name: 'Morning Trip 1',
                stops: [
                    { station: 'Sydenham - Corner of Smart Street and Sydenham Road', time: '08:40' },
                    { station: 'Corner Prince Alfred Rd and Quick St(Varsity Park)', time: '08:45' },
                    { station: 'Corner Govan Mbeki Ave and Gates Str- Law Courts', time: '08:50' },
                    { station: 'Corner Mount Rd and Govan Mbeki Ave', time: '09:00' },
                    { station: 'Corner Govan Mbeki Ave and Reed St(Pier 14)', time: '09:05' },
                    { station: '2nd Avenue Campus, North Campus', time: '09:30' },
                    { station: 'Arrives at South Campus', time: '09:45' }
                ]
            },
            {
                name: 'Morning Trip 2',
                stops: [
                    { station: 'Sydenham - Corner of Smart Street and Sydenham Road', time: '09:00' },
                    { station: 'Corner Prince Alfred Rd and Quick St(Varsity Park)', time: '09:05' },
                    { station: 'Corner Govan Mbeki Ave and Gates Str- Law Courts', time: '09:10' },
                    { station: 'Corner Mount Rd and Govan Mbeki Ave', time: '09:15' },
                    { station: 'Corner Govan Mbeki Ave and Reed St(Pier 14)', time: '09:20' },
                    { station: '2nd Avenue Campus, North Campus', time: '09:40' },
                    { station: 'Arrives at South Campus', time: '09:55' }
                ]
            },
            {
                name: 'Morning Trip 3',
                stops: [
                    { station: 'Sydenham - Corner of Smart Street and Sydenham Road', time: '11:00' },
                    { station: 'Corner Prince Alfred Rd and Quick St(Varsity Park)', time: '11:05' },
                    { station: 'Corner Govan Mbeki Ave and Gates Str- Law Courts', time: '11:10' },
                    { station: 'Corner Mount Rd and Govan Mbeki Ave', time: '11:15' },
                    { station: 'Corner Govan Mbeki Ave and Reed St(Pier 14)', time: '11:20' },
                    { station: '2nd Avenue Campus, North Campus', time: '11:40' },
                    { station: 'Arrives at South Campus', time: '11:45' }
                ]
            },
            {
                name: 'Returning from South Campus at 12h30',
                stops: [
                    { station: 'South Campus', time: '12:30' },
                    { station: 'North Campus,2nd Avenue Campus', time: '12:35' },
                    { station: 'Corner Govan Mbeki Ave and Reed St(Pier 14)', time: '12:55' },
                    { station: 'Corner Mount Rd and Govan Mbeki Ave', time: '13:00' },
                    { station: 'Corner Govan Mbeki Ave and Gates Str- Law Courts', time: '13:05' },
                    { station: 'Corner Prince Alfred Rd and Quick St(Varsity Park)', time: '13:10' },
                    { station: 'Sydenham - Corner of Smart Street and Sydenham Road', time: '13:15' }
                ]
            },
            {
                name: 'Returning from South Campus at 14h30',
                stops: [
                    { station: 'South Campus', time: '14:30' },
                    { station: 'North Campus,2nd Avenue Campus', time: '14:35' },
                    { station: 'Corner Govan Mbeki Ave and Reed St(Pier 14)', time: '14:50' },
                    { station: 'Corner Mount Rd and Govan Mbeki Ave', time: '15:00' },
                    { station: 'Corner Govan Mbeki Ave and Gates Str- Law Courts', time: '15:05' },
                    { station: 'Corner Prince Alfred Rd and Quick St(Varsity Park)', time: '15:10' },
                    { station: 'Sydenham - Corner of Smart Street and Sydenham Road', time: '15:15' }
                ]
            },
            {
                name: 'Returning from South Campus at 17h30',
                stops: [
                    { station: 'South Campus', time: '17:30' },
                    { station: 'North Campus,2nd Avenue Campus', time: '17:35' },
                    { station: 'Corner Govan Mbeki Ave and Reed St(Pier 14)', time: '17:40' },
                    { station: 'Corner Mount Rd and Govan Mbeki Ave', time: '18:00' },
                    { station: 'Corner Govan Mbeki Ave and Gates Str- Law Courts', time: '18:05' },
                    { station: 'Corner Prince Alfred Rd and Quick St(Varsity Park)', time: '18:10' },
                    { station: 'Sydenham - Corner of Smart Street and Sydenham Road', time: '18:15' }
                ]
            }
        ]
    },
    {
        location: 'CENTRAL TO SUMMERSTRAND CAMPUSES',
        name: 'Route 6 Central',
        trips: [
            {
                name: 'Morning Trip 1',
                stops: [
                    { station: 'On Russell Road opposite', time: '06:30' },
                    { station: 'Aberdeens Furniture Factory and Shop', time: '06:45' },
                    { station: 'Corner Parliament and Whitlock Str', time: '06:50' },
                    { station: 'Taxi parking area at the corner of Belmont Terrace and Victoria Str in Central to Central Donkin/King Edward to Feather Market', time: '07:00' },
                    { station: '2nd Ave Campus, North Campus,', time: '07:15' },
                    { station: 'Arrives at South campus', time: '07:30' }
                ]
            },
            {
                name: 'Morning Trip 2',
                stops: [
                    { station: 'On Russell Road opposite', time: '09:00' },
                    { station: 'Aberdeens Furniture Factory and Shop', time: '09:05' },
                    { station: 'Corner Parliament and Whitlock Str', time: '09:10' },
                    { station: 'Taxi parking area at the corner of Belmont Terrace and Victoria Str in Central to Central Donkin/King Edward to Feather Market', time: '09:15' },
                    { station: '2nd Ave Campus, North Campus,', time: '09:30' },
                    { station: 'Arrives at South campus', time: '09:40' }
                ]
            },
            {
                name: 'Morning Trip 3',
                stops: [
                    { station: 'On Russell Road opposite', time: '11:00' },
                    { station: 'Aberdeens Furniture Factory and Shop', time: '11:05' },
                    { station: 'Corner Parliament and Whitlock Str', time: '11:10' },
                    { station: 'Taxi parking area at the corner of Belmont Terrace and Victoria Str in Central to Central Donkin/King Edward to Feather Market', time: '11:15' },
                    { station: '2nd Ave Campus, North Campus,', time: '11:30' },
                    { station: 'Arrives at South campus', time: '11:40' }
                ]
            },
            {
                name: 'Returning from South Campus at 12h30',
                stops: [
                    { station: 'South Campus', time: '12:30' },
                    { station: 'North Campus,2nd Avenue Campus', time: '12:35' },
                    { station: 'King Edward, Belmont Terrace Shuttle Stop', time: '12:50' },
                    { station: 'Corner Parliament and Whitlock Str', time: '12:55' },
                    { station: 'On Russell Road opposite', time: '13:00' },
                    { station: 'Aberdeens Furniture Factory and Shop', time: '13:05' }
                ]
            },
            {
                name: 'Returning from South Campus at 14h30',
                stops: [
                    { station: 'South Campus', time: '14:30' },
                    { station: 'North Campus,2nd Avenue Campus', time: '14:35' },
                    { station: 'King Edward, Belmont Terrace Shuttle Stop', time: '14:50' },
                    { station: 'Corner Parliament and Whitlock Str', time: '14:55' },
                    { station: 'On Russell Road opposite', time: '15:00' },
                    { station: 'Aberdeens Furniture Factory and Shop', time: '15:05' }
                ]
            },
            {
                name: 'Returning from South Campus at 17h30',
                stops: [
                    { station: 'South Campus', time: '17:30' },
                    { station: 'North Campus,2nd Avenue Campus', time: '17:35' },
                    { station: 'King Edward, Belmont Terrace Shuttle Stop', time: '17:45' },
                    { station: 'Corner Parliament and Whitlock Str', time: '17:55' },
                    { station: 'On Russell Road opposite', time: '18:00' },
                    { station: 'Aberdeens Furniture Factory and Shop', time: '18:05' }
                ]
            }
        ]
    },
    {
        location: 'FEATHERMARKET',
        name: 'Route 7 - Feathermarket to NMU Campuses and return',
        trips: [
            {
                name: 'Morning Trip 1',
                stops: [
                    { station: 'Feather Market(Baakens Street)', time: '07:00' },
                    { station: '2nd Ave Campus, North Campus,', time: '07:15' },
                    { station: 'Arrives at South campus', time: '07:30' }
                ]
            },
            {
                name: 'Morning Trip 2',
                stops: [
                    { station: 'Feather Market(Baakens Street)', time: '09:00' },
                    { station: '2nd Ave Campus, North Campus,', time: '09:30' },
                    { station: 'Arrives at South campus', time: '09:40' }
                ]
            },
            {
                name: 'Morning Trip 3',
                stops: [
                    { station: 'Feather Market(Baakens Street)', time: '11:00' },
                    { station: '2nd Ave Campus, North Campus,', time: '11:30' },
                    { station: 'Arrives at South campus', time: '11:45' }
                ]
            },
            {
                name: 'Returning from South Campus at 12h30',
                stops: [
                    { station: 'South Campus', time: '12:30' },
                    { station: 'North Campus,2nd Avenue Campus', time: '12:35' },
                    { station: 'Feather Market(Baakens Street)', time: '13:00' }
                ]
            },
            {
                name: 'Returning from South Campus at 14h30',
                stops: [
                    { station: 'South Campus', time: '14:30' },
                    { station: 'North Campus,2nd Avenue Campus', time: '14:35' },
                    { station: 'Feather Market(Baakens Street)', time: '15:00' }
                ]
            },
            {
                name: 'Returning from South Campus at 17h30',
                stops: [
                    { station: 'South Campus', time: '17:30' },
                    { station: 'North Campus,2nd Avenue Campus', time: '17:35' },
                    { station: 'Feather Market(Baakens Street)', time: '18:00' }
                ]
            }
        ]
    },
    {
        location: 'WALMER',
        name: 'Route 8 Walmer Residences',
        trips: [
            {
                name: 'Morning Trip 1',
                stops: [
                    { station: '6th Avenue Walmer - PSA 8 on 6th', time: '06:40' },
                    { station: 'Huegh Rd Walmer - PSA 22 on Huegh', time: '06:45' },
                    { station: 'Shell Triangle Garage Walmer Boulevard', time: '06:50' },
                    { station: '2nd Ave Campus, North Campus', time: '07:10' },
                    { station: 'Arrives at South Campus', time: '07:20' }
                ]
            },
            {
                name: 'Morning Trip 2',
                stops: [
                    { station: '6th Avenue Walmer - PSA 8 on 6th', time: '09:00' },
                    { station: 'Huegh Rd Walmer - PSA 22 on Huegh', time: '09:05' },
                    { station: 'Shell Triangle Garage Walmer Boulevard', time: '09:10' },
                    { station: '2nd Ave Campus, North Campus', time: '09:20' },
                    { station: 'Arrives at South Campus', time: '09:40' }
                ]
            },
            {
                name: 'Morning Trip 3',
                stops: [
                    { station: '6th Avenue Walmer - PSA 8 on 6th', time: '11:00' },
                    { station: 'Huegh Rd Walmer - PSA 22 on Huegh', time: '11:05' },
                    { station: 'Shell Triangle Garage Walmer Boulevard', time: '11:10' },
                    { station: '2nd Ave Campus, North Campus', time: '11:20' },
                    { station: 'Arrives at South Campus', time: '11:40' }
                ]
            },
            {
                name: 'Returning from South Campus at 12h30',
                stops: [
                    { station: 'South Campus', time: '12:30' },
                    { station: 'North Campus,2nd Avenue Campus', time: '12:35' },
                    { station: 'Shell Triangle Garage Walmer Boulevard', time: '12:50' },
                    { station: 'Huegh Rd Walmer - PSA 22 on Huegh', time: '12:55' },
                    { station: '6th Avenue Walmer - PSA 8 on 6th', time: '13:00' }
                ]
            },
            {
                name: 'Returning from South Campus at 14h30',
                stops: [
                    { station: 'South Campus', time: '14:30' },
                    { station: 'North Campus,2nd Avenue Campus', time: '14:35' },
                    { station: 'Shell Triangle Garage Walmer Boulevard', time: '14:50' },
                    { station: 'Huegh Rd Walmer - PSA 22 on Huegh', time: '14:55' },
                    { station: '6th Avenue Walmer - PSA 8 on 6th', time: '15:00' }
                ]
            },
            {
                name: 'Returning from South Campus at 17h30',
                stops: [
                    { station: 'South Campus', time: '17:30' },
                    { station: 'North Campus,2nd Avenue Campus', time: '17:35' },
                    { station: 'Shell Triangle Garage Walmer Boulevard', time: '17:50' },
                    { station: 'Huegh Rd Walmer - PSA 22 on Huegh', time: '17:55' },
                    { station: '6th Avenue Walmer - PSA 8 on 6th', time: '18:00' }
                ]
            }
        ]
    },
    {
        location: 'HUMEWOOD/FORREST HILL',
        name: 'Route 9 Humewood and Forrest Hill',
        trips: [
            {
                name: 'Morning Trip 1',
                stops: [
                    { station: 'HUMEWOOD-Kings Beach Bus Stop', time: '07:00' },
                    { station: 'Forrest Hill', time: '07:10' },
                    { station: 'Forrest Hill Garage,Morestond Flats,Back of Stadium', time: '07:15' },
                    { station: '2nd Ave Campus, North Campus', time: '07:20' },
                    { station: 'Arrives at South Campus', time: '07:30' }
                ]
            },
            {
                name: 'Morning Trip 2',
                stops: [
                    { station: 'HUMEWOOD-Kings Beach Bus Stop', time: '09:00' },
                    { station: 'Forrest Hill', time: '09:10' },
                    { station: 'Forrest Hill Garage,Morestond Flats,Back of Stadium', time: '09:15' },
                    { station: '2nd Ave Campus, North Campus', time: '09:20' },
                    { station: 'Arrives at South Campus', time: '09:30' }
                ]
            },
            {
                name: 'Morning Trip 3',
                stops: [
                    { station: 'HUMEWOOD-Kings Beach Bus Stop', time: '11:00' },
                    { station: 'Forrest Hill', time: '11:10' },
                    { station: 'Forrest Hill Garage,Morestond Flats,Back of Stadium', time: '11:15' },
                    { station: '2nd Ave Campus, North Campus', time: '11:20' },
                    { station: 'Arrives at South Campus', time: '11:30' }
                ]
            },
            {
                name: 'Returning from South Campus at 12h30',
                stops: [
                    { station: 'South Campus', time: '12:30' },
                    { station: 'North Campus,2nd Avenue Campus', time: '12:35' },
                    { station: 'Forrest Hill', time: '12:45' },
                    { station: 'Forrest Hill Garage,Morestond Flats,Back of Stadium', time: '12:50' },
                    { station: 'HUMEWOOD-Kings Beach Bus Stop', time: '13:00' }
                ]
            },
            {
                name: 'Returning from South Campus at 14h30',
                stops: [
                    { station: 'South Campus', time: '14:30' },
                    { station: 'North Campus,2nd Avenue Campus', time: '14:35' },
                    { station: 'Forrest Hill', time: '14:45' },
                    { station: 'Forrest Hill Garage,Morestond Flats,Back of Stadium', time: '14:50' },
                    { station: 'HUMEWOOD-Kings Beach Bus Stop', time: '15:00' }
                ]
            },
            {
                name: 'Returning from South Campus at 17h30',
                stops: [
                    { station: 'South Campus', time: '17:30' },
                    { station: 'North Campus,2nd Avenue Campus', time: '17:35' },
                    { station: 'Forrest Hill', time: '17:45' },
                    { station: 'Forrest Hill Garage,Morestond Flats,Back of Stadium', time: '17:50' },
                    { station: 'HUMEWOOD-Kings Beach Bus Stop', time: '18:00' }
                ]
            }
        ]
    },
    {
        location: 'SUMMERSTRAND TO TOWN - NIGHT SHIFT',
        name: 'Night Shift - Summerstrand to Town',
        trips: [
            {
                name: 'Night Trip 1',
                stops: [
                    { station: 'South Campus Shuttle Stop', time: '18h30' },
                    { station: 'North and 2nd Ave campuses', time: '18h45' },
                    { station: 'Feather Market Hall', time: '19h00' }
                ]
            },
            {
                name: 'Night Trip 2',
                stops: [
                    { station: 'South Campus Shuttle Stop', time: '20h30' },
                    { station: 'North and 2nd Ave campuses', time: '20h45' },
                    { station: 'Feather Market Hall', time: '21h00' }
                ]
            },
            {
                name: 'Night Trip 3',
                stops: [
                    { station: 'South Campus Shuttle Stop', time: '22h00' },
                    { station: 'North and 2nd Ave campuses', time: '22h15' },
                    { station: 'Feather Market Hall', time: '22h30' }
                ]
            }
        ]
    },
    {
        location: 'SUMMERSTRAND AND HUMEWOOD - NIGHT SHIFT',
        name: 'Night Shift - Summerstrand and Humewood Route',
        trips: [
            {
                name: 'Night Trip 1',
                stops: [
                    { station: 'North and 2nd Ave Campuses', time: '18h30' },
                    { station: 'Alashan Drive / Amery Crescent', time: '18h45' },
                    { station: 'Via Spar', time: '18h50' },
                    { station: 'Via Nobbs Str', time: '18h55' },
                    { station: 'Via Pick n Pay, Summerstrand Village', time: '19h00' },
                    { station: 'Stops in Humewood', time: '19h10' },
                    { station: 'Forest Hill', time: '19h20' }
                ]
            },
            {
                name: 'Night Trip 2',
                stops: [
                    { station: 'North and 2nd Ave Campuses', time: '20h30' },
                    { station: 'Alashan Drive / Amery Crescent', time: '20h45' },
                    { station: 'Via Spar', time: '20h50' },
                    { station: 'Via Nobbs Str', time: '20h55' },
                    { station: 'Via Pick n Pay, Summerstrand Village', time: '21h00' },
                    { station: 'Stops in Humewood', time: '21h10' },
                    { station: 'Forest Hill', time: '21h20' }
                ]
            },
            {
                name: 'Night Trip 3',
                stops: [
                    { station: 'North and 2nd Ave Campuses', time: '22h00' },
                    { station: 'Alashan Drive / Amery Crescent', time: '22h15' },
                    { station: 'Via Spar', time: '22h20' },
                    { station: 'Via Nobbs Str', time: '22h25' },
                    { station: 'Via Pick n Pay, Summerstrand Village', time: '22h30' },
                    { station: 'Stops in Humewood', time: '22h40' },
                    { station: 'Forest Hill', time: '22h50' }
                ]
            }
        ]
    },
    {
        location: 'SUMMERSTRAND TO PIER 14 - NIGHT SHIFT',
        name: 'Night Shift - Summerstrand to Pier 14/Mount Road',
        trips: [
            {
                name: 'Night Trip 1',
                stops: [
                    { station: 'South Campus Shuttle Stop', time: '18h30' },
                    { station: 'North and 2nd Ave Campuses', time: '18h45' },
                    { station: 'Kings Res', time: '19h00' },
                    { station: 'Lavinia Res', time: '19h10' },
                    { station: 'Dynamic Accommodation', time: '19h20' },
                    { station: 'Rainbow House', time: '19h30' }
                ]
            },
            {
                name: 'Night Trip 2',
                stops: [
                    { station: 'South Campus Shuttle Stop', time: '20h30' },
                    { station: 'North and 2nd Ave Campuses', time: '20h45' },
                    { station: 'Kings Res', time: '21h00' },
                    { station: 'Lavinia Res', time: '21h10' },
                    { station: 'Dynamic Accommodation', time: '21h20' },
                    { station: 'Rainbow House', time: '21h30' }
                ]
            },
            {
                name: 'Night Trip 3',
                stops: [
                    { station: 'South Campus Shuttle Stop', time: '22h00' },
                    { station: 'North and 2nd Ave Campuses', time: '22h15' },
                    { station: 'Kings Res', time: '22h30' },
                    { station: 'Lavinia Res', time: '22h40' },
                    { station: 'Dynamic Accommodation', time: '22h50' },
                    { station: 'Rainbow House', time: '23h00' }
                ]
            }
        ]
    },
    {
        location: 'SUMMERSTRAND TO MISSIONVALE/UITENHAGE - NIGHT SHIFT',
        name: 'Night Shift - Summerstrand to Missionvale/Uitenhage',
        trips: [
            {
                name: 'Night Trip 1',
                stops: [
                    { station: 'Missionvale Campus', time: '18h30' },
                    { station: 'Uitenhage and surrounds pickup', time: '18h45' }
                ]
            },
            {
                name: 'Night Trip 2',
                stops: [
                    { station: 'Missionvale Campus', time: '20h30' },
                    { station: 'Uitenhage and surrounds pickup', time: '20h45' }
                ]
            }
        ]
    },
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

// Display the shuttle schedule
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