// Shuttle route data
let searchInput = document.querySelector('#searchInput');


const routes = [
    {
        id: 1,
        name: "ROUTE 1 (UITENHAGE TO SUMMERSTRAND CAMPUSES)",
        location: "UITENHAGE",
        trips: [
            {
                name: "Morning Trip 1",
                location: "UITENHAGE",
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
                location: "UITENHAGE",
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
                location: "UITENHAGE",
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
                location: "UITENHAGE",
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
                location: "UITENHAGE",
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

    // route 2
    {
        id: 2,
        name: "ROUTE 2 ( MISSIONVALE TO SUMMERSTRAND CAMPUSES)",
        location: "MISSIONVALE TO SUMMERSTRAND CAMPUSES",
        trips: [
            {
                name: "Morning Trip 1",
                location: "MISSIONVALE TO SUMMERSTRAND CAMPUSES",
                stops: [
                    { station: "Missionvale Campus to", time: "06h30" },
                    { station: "Shatterproof", time: "06h35" },
                    { station: "2nd Ave Campus, North Campus,", time: "07h05" },
                    { station: "Arrives at South Campus", time: "07h10" }
                ]
            },
            {
                name: "Morning Trip 2",
                location: "MISSIONVALE to SUMMERSTRAND CAMPUSES",
                stops: [
                    { station: "Missionvale Campus to", time: "07h30" },
                    { station: "Shatterproof", time: "07h35" },
                    { station: "2nd Ave Campus, North Campus,", time: "08h15" },
                    { station: "Arrives at South Campus", time: "08h30" }
                ]
            },
            {
                name: "Depart from South Campus at 12h00",
                location: "MISSIONVALE to SUMMERSTRAND CAMPUSES",
                stops: [
                    { station: "South Campus", time: "12h30" },
                    { station: "North Campus", time: "12h32" },
                    { station: "2nd Avenue Campus", time: "12h35" },
                    { station: "Returning From Missionvale Campus", time: "13h00" }
                ]
            },
            {
                name: "Depart from South Campus at 14h30",
                location: "MISSIONVALE to SUMMERSTRAND CAMPUSES",
                stops: [
                    { station: "South Campus", time: "14h30" },
                    { station: "North Campus", time: "14h32" },
                    { station: "2nd Avenue Campus", time: "14h35" },
                    { station: "Returning From Missionvale Campus", time: "15h00" }
                ]
            },
            {
                name: "Depart from South Campus at 17h30",
                location: "MISSIONVALE to SUMMERSTRAND CAMPUSES",
                stops: [
                    { station: "South Campus", time: "17h30" },
                    { station: "North Campus", time: "17h35" },
                    { station: "2nd Avenue Campus", time: "17h40" },
                    { station: "Missionvale Campus", time: "18h10" }
                ]
            }
        ]
    },

    // route 3
    {
        location: 'SUMMERSTRAND CAMPUSES to MISSIONVALE CAMPUS',
        name: 'Route 3 (Summerstrand Campuses - Missionvale Campus)',
        trips: [
            {
                name: 'Morning Trip 1',
                location: 'SUMMERSTRAND CAMPUSES to MISSIONVALE CAMPUS',
                stops: [
                    { station: 'South Campus', time: '07h00' },
                    { station: 'North Campus', time: '07h05' },
                    { station: '2nd Avenue', time: '07h10' },
                    { station: 'Humewood / Kings Beach', time: '07h15' },
                    { station: 'Bus Stop in Baakenś street, Central, opposite Feather Market Hall', time: '07h20' },
                    { station: 'Corner Parliament and Whitlock Streets, On Russell Road', time: '07h23' },
                    { station: 'opposite Aberdeens Furniture Factory and Shop', time: '07h25' },
                    { station: 'Corner of Myrtle / Govan Mbeki Ave - Pier 14 Bus stop', time: '07h30' },
                    { station: 'Corner Govan Mbeki and Harrower Rd', time: '07h33' },
                    { station: 'Corner Govan Mbeki Ave and Graham Street at the Law Courts', time: '07h35' },
                    { station: 'Corner of Durban and Drew Roads', time: '07h40' },
                    { station: 'Arrives at Missionvale Campus', time: '07h50' }
                ]
            },
            {
                name: 'Morning Trip 2',
                location: 'SUMMERSTRAND CAMPUSES to MISSIONVALE CAMPUS',
                stops: [
                    { station: 'South Campus', time: '09h00' },
                    { station: 'North Campus', time: '09h05' },
                    { station: '2nd Avenue', time: '09h10' },
                    { station: 'Humewood / Kings Beach', time: '09h15' },
                    { station: 'Bus Stop in Baakenś street, Central, opposite Feather Market Hall', time: '09h20' },
                    { station: 'Corner Parliament and Whitlock Streets, On Russell Road', time: '09h23' },
                    { station: 'opposite Aberdeens Furniture Factory and Shop', time: '09h25' },
                    { station: 'Corner of Myrtle / Govan Mbeki Ave - Pier 14 Bus stop', time: '09h30' },
                    { station: 'Corner Govan Mbeki and Harrower Rd', time: '09h33' },
                    { station: 'Corner Govan Mbeki Ave and Graham Street at the Law Courts', time: '09h35' },
                    { station: 'Corner of Durban and Drew Roads', time: '09h40' },
                    { station: 'Arrives at Missionvale Campus', time: '09h50' }
                ]
            },
            {
                name: 'Return Trips',
                location: 'SUMMERSTRAND CAMPUSES to MISSIONVALE CAMPUS',
                stops: [
                    { station: 'SUMMERSTRAND CAMPUSES - MISSIONVALE CAMPUS', time: '13h15, 15h30, 17h15' }
                ]
            }
        ]
    },
    {
        location: 'KORSTEN TO SUMMERSTRAND CAMPUSES',
        name: 'Route 4 (Korsten to Summerstrand Campuses)',
        trips: [
            {
                name: 'Morning Trip 1',
                location: 'KORSTEN to SUMMERSTRAND CAMPUSES',
                stops: [
                    { station: 'Corner of Durban and Drew Roads', time: '06h45' },
                    { station: '2nd Ave Campus, North Campus', time: '07h05' },
                    { station: 'Arrives at South Campus', time: '07h15' }
                ]
            },
            {
                name: 'Morning Trip 2',
                location: 'KORSTEN to SUMMERSTRAND CAMPUSES',
                stops: [
                    { station: 'Corner of Durban and Drew Roads', time: '07h45' },
                    { station: '2nd Ave Campus, North Campus', time: '08h05' },
                    { station: 'Arrives at South Campus', time: '08h15' }
                ]
            },
            {
                name: 'Morning Trip 3',
                location: 'KORSTEN to SUMMERSTRAND CAMPUSES',
                stops: [
                    { station: 'Corner of Durban and Drew Roads', time: '08h45' },
                    { station: '2nd Ave Campus, North Campus', time: '09h05' },
                    { station: 'Arrives at South Campus', time: '09h15' }
                ]
            },
            {
                name: 'Morning Trip 4',
                location: 'KORSTEN to SUMMERSTRAND CAMPUSES',
                stops: [
                    { station: 'Corner of Durban and Drew Roads', time: '09h45' },
                    { station: '2nd Ave Campus, North Campus', time: '10h05' },
                    { station: 'Arrives at South Campus', time: '10h15' }
                ]
            },
            {
                name: 'Returning from South Campus at 12h30',
                location: 'KORSTEN to SUMMERSTRAND CAMPUSES',
                stops: [
                    { station: 'South Campus', time: '12h30' },
                    { station: 'North Campus,2nd Avenue Campus', time: '12h35' },
                    { station: 'Corner of Durban and Drew Roads', time: '13h00' }
                ]
            },
            {
                name: 'Returning from South Campus at 14h30',
                location: 'KORSTEN to SUMMERSTRAND CAMPUSES',
                stops: [
                    { station: 'South Campus', time: '14h30' },
                    { station: 'North Campus,2nd Avenue Campus', time: '14h35' },
                    { station: 'Corner of Durban and Drew Roads', time: '15h00' }
                ]
            },

            {
                name: 'Returning from South Campus at 16h00',
                location: 'KORSTEN to SUMMERSTRAND CAMPUSES',
                stops: [
                    { station: 'South Campus', time: '16h00' },
                    { station: 'North Campus,2nd Avenue Campus', time: '16h35' },
                    { station: 'Corner of Durban and Drew Roads', time: '17h00' }
                ]
            }, {
                name: 'Returning from South Campus at 17h30',
                location: 'KORSTEN to SUMMERSTRAND CAMPUSES',
                stops: [
                    { station: 'South Campus', time: '17h30' },
                    { station: 'North Campus,2nd Avenue Campus', time: '17h35' },
                    { station: 'Corner of Durban and Drew Roads', time: '18h00' }
                ]
            },
        ]
    },
    {
        location: 'SYDENHAM-VARSITY PARK- LAW COURTS – PIER 14',
        name: 'Route 5 - PSA 10 on Smart Varsity Park, Smada Res, LAMGA, Pier 14',
        trips: [
            {
                name: 'Morning Trip 1',
                location: 'SYDENHAM-VARSITY PARK- LAW COURTS- PIER 14',
                stops: [
                    { station: 'Sydenham - Corner of Smart Street and Sydenham Road', time: '06h45' },
                    { station: 'Corner Prince Alfred Rd and Quick St(Varsity Park)', time: '06h45' },
                    { station: 'Corner Govan Mbeki Ave and Gates Str- Law Courts', time: '06h45' },
                    { station: 'Corner Govan Mbeki Ave and Reed Str(Pier 14)', time: '06h45' },
                    { station: '2nd Avenue Campus, North Campus', time: '07h05' },
                    { station: 'Arrives at South Campus', time: '07h15' }
                ]
            },
            {
                name: 'Morning Trip 2',
                location: 'SYDENHAM-VARSITY PARK- LAW COURTS- PIER 14',
                stops: [
                    { station: 'Sydenham - Corner of Smart Street and Sydenham Road', time: '07h45' },
                    { station: 'Corner Prince Alfred Rd and Quick St(Varsity Park)', time: '07h45' },
                    { station: 'Corner Govan Mbeki Ave and Gates Str- Law Courts', time: '07h45' },
                    { station: 'Corner Govan Mbeki Ave and Reed Str(Pier 14)', time: '07h45' },
                    { station: '2nd Avenue Campus, North Campus', time: '08h05' },
                    { station: 'Arrives at South Campus', time: '08h15' }
                ]
            },
            {
                name: 'Morning Trip 3',
                location: 'SYDENHAM-VARSITY PARK- LAW COURTS- PIER 14',
                stops: [
                    { station: 'Sydenham - Corner of Smart Street and Sydenham Road', time: '08h45' },
                    { station: 'Corner Prince Alfred Rd and Quick Str(Varsity Park)', time: '08h45' },
                    { station: 'Corner Govan Mbeki Ave and Gates Str- Law Courts', time: '08h45' },
                    { station: 'Corner Govan Mbeki Ave and Reed St(Pier 14)', time: '08h45' },
                    { station: '2nd Avenue Campus, North Campus', time: '09h05' },
                    { station: 'Arrives at South Campus', time: '09h15' }
                ]
            },
            {
                name: 'Morning Trip 4',
                location: 'SYDENHAM-VARSITY PARK- LAW COURTS- PIER 14',
                stops: [
                    { station: 'Sydenham - Corner of Smart Street and Sydenham Road', time: '09h45' },
                    { station: 'Corner Prince Alfred Rd and Quick Str(Varsity Park)', time: '09h45' },
                    { station: 'Corner Govan Mbeki Ave and Gates Str- Law Courts', time: '09h45' },
                    { station: 'Corner Govan Mbeki Ave and Reed St(Pier 14)', time: '09h45' },
                    { station: '2nd Avenue Campus, North Campus', time: '10h05' },
                    { station: 'Arrives at South Campus', time: '10h15' }
                ]
            },
            {
                name: 'Returning from South, North and 2nd Ave Campuses',
                location: 'SYDENHAM-VARSITY PARK- LAW COURTS- PIER 14',
                stops: [
                    { station: 'Returning from South, North and 2nd Ave Campuses', time: '12h30,14h30,16h00 and 17h30' },
                ]
            },
            // {
            //     name: 'Returning from South Campus at 12h30',
            //     location: 'SYDENHAM-VARSITY PARK- LAW COURTS- PIER 14',
            //     stops: [
            //         { station: 'South Campus', time: '12:30' },
            //         { station: 'North Campus,2nd Avenue Campus', time: '12:35' },
            //         { station: 'Corner Govan Mbeki Ave and Reed St(Pier 14)', time: '12:55' },
            //         { station: 'Corner Mount Rd and Govan Mbeki Ave', time: '13:00' },
            //         { station: 'Corner Govan Mbeki Ave and Gates Str- Law Courts', time: '13:05' },
            //         { station: 'Corner Prince Alfred Rd and Quick St(Varsity Park)', time: '13:10' },
            //         { station: 'Sydenham - Corner of Smart Street and Sydenham Road', time: '13:15' }
            //     ]
            // },
            // {
            //     name: 'Returning from South Campus at 14:30',
            //     location: 'SYDENHAM-VARSITY PARK- LAW COURTS- MOUNT ROAD- PIER 14',
            //     stops: [
            //         { station: 'South Campus', time: '14:30' },
            //         { station: 'North Campus,2nd Avenue Campus', time: '14:35' },
            //         { station: 'Corner Govan Mbeki Ave and Reed St(Pier 14)', time: '14:50' },
            //         { station: 'Corner Mount Rd and Govan Mbeki Ave', time: '15:00' },
            //         { station: 'Corner Govan Mbeki Ave and Gates Str- Law Courts', time: '15:05' },
            //         { station: 'Corner Prince Alfred Rd and Quick St(Varsity Park)', time: '15:10' },
            //         { station: 'Sydenham - Corner of Smart Street and Sydenham Road', time: '15:15' }
            //     ]
            // },
            // {
            //     name: 'Returning from South Campus at 17:30',
            //     location: 'SYDENHAM-VARSITY PARK- LAW COURTS- MOUNT ROAD- PIER 14',
            //     stops: [
            //         { station: 'South Campus', time: '17:30' },
            //         { station: 'North Campus,2nd Avenue Campus', time: '17:35' },
            //         { station: 'Corner Govan Mbeki Ave and Reed St(Pier 14)', time: '17:40' },
            //         { station: 'Corner Mount Rd and Govan Mbeki Ave', time: '18:00' },
            //         { station: 'Corner Govan Mbeki Ave and Gates Str- Law Courts', time: '18:05' },
            //         { station: 'Corner Prince Alfred Rd and Quick St(Varsity Park)', time: '18:10' },
            //         { station: 'Sydenham - Corner of Smart Street and Sydenham Road', time: '18:15' }
            //     ]
            // }
        ]
    },
    // CENTRAL RESIDENCES(RUSSEL ROAD) TO SUMMERSTRAND CAMPUSES
    {
        location: 'CENTRAL RESIDENCES(RUSSEL ROAD) TO SUMMERSTRAND CAMPUSES',
        name: 'Route 6 Central',
        trips: [
            {
                name: 'Morning Trip 1',
                location: 'CENTRAL TO SUMMERSTRAND CAMPUSES',
                stops: [
                    { station: 'Corner Parliament and Whitlock Str', time: '06h45' },
                    { station: 'Cape Suites Res - Cnr Rink St & Parliament St', time: '06h45' },
                    { station: 'Kalinga House - Richmond Hill', time: '06h45' },
                    { station: 'Russel Road', time: '06h45' },
                    { station: '2nd Ave Campus, North Campus,', time: '07h05' },
                    { station: 'Arrives at South campus', time: '07h15' }
                ]
            },
            {
                name: 'Morning Trip 2',
                location: 'CENTRAL TO SUMMERSTRAND CAMPUSES',
                stops: [
                    { station: 'Corner Parliament and Whitlock Str', time: '07h45' },
                    { station: 'Cape Suites Res - Cnr Rink St & Parliament St', time: '07h45' },
                    { station: 'Kalinga House - Richmond Hill', time: '07h45' },
                    { station: 'Russel Road', time: '07h45' },
                    { station: '2nd Ave Campus, North Campus,', time: '08h05' },
                    { station: 'Arrives at South campus', time: '08h15' }
                ]
            },
            {
                name: 'Morning Trip 3',
                location: 'CENTRAL TO SUMMERSTRAND CAMPUSES',
                stops: [
                    { station: 'Corner Parliament and Whitlock Str', time: '08h45' },
                    // { station: 'Cape Suites Res - Cnr Rink St & Parliament St', time: '08h45' },
                    { station: 'Taxi parking area at the corner of Belmont Terrace and Victoria Str in Central to Central Donkin/King Edward to', time: '08h45' },
                    { station: 'Feather Market', time: '08h45' },
                    { station: '2nd Ave Campus, North Campus,', time: '09h05' },
                    { station: 'Arrives at South campus', time: '09h15' }
                ]
            },
            {
                name: 'Morning Trip 4',
                location: 'CENTRAL TO SUMMERSTRAND CAMPUSES',
                stops: [
                    { station: 'Corner Parliament and Whitlock Str', time: '09h45' },
                    // { station: 'Cape Suites Res - Cnr Rink St & Parliament St', time: '09h45' },
                    { station: 'Taxi parking area at the corner of Belmont Terrace and Victoria Str in Central to Central Donkin/King Edward to', time: '09h45' },
                    { station: 'Feather Market', time: '09h45' },
                    { station: '2nd Ave Campus, North Campus,', time: '10h05' },
                    { station: 'Arrives at South campus', time: '10h15' }
                ]
            },
            {
                name: 'Returning from South, North and 2nd Ave Campuses',
                location: 'CENTRAL TO SUMMERSTRAND CAMPUSES',
                stops: [
                    { station: 'Returning from South, North and 2nd Ave Campuses.', time: '12h30 </br>14h30 </br> 16h00 </br> 17h30' },
                ]
            },
            // {
            //     name: 'Returning from South Campus at 14:30',
            //     location: 'CENTRAL TO SUMMERSTRAND CAMPUSES',
            //     stops: [
            //         { station: 'South Campus', time: '14:30' },
            //         { station: 'North Campus,2nd Avenue Campus', time: '14:35' },
            //         { station: 'King Edward, Belmont Terrace Shuttle Stop', time: '14:50' },
            //         { station: 'Corner Parliament and Whitlock Str', time: '14:55' },
            //         { station: 'On Russell Road opposite', time: '15:00' },
            //         { station: 'Aberdeens Furniture Factory and Shop', time: '15:00' }
            //     ]
            // },
            // {
            //     name: 'Returning from South Campus at 17:30',
            //     location: 'CENTRAL TO SUMMERSTRAND CAMPUSES',
            //     stops: [
            //         { station: 'South Campus', time: '17:30' },
            //         { station: 'North Campus,2nd Avenue Campus', time: '17:35' },
            //         { station: 'King Edward, Belmont Terrace Shuttle Stop', time: '17:50' },
            //         { station: 'Corner Parliament and Whitlock Str', time: '17:55' },
            //         { station: 'On Russell Road opposite', time: '18:00' },
            //         { station: 'Aberdeens Furniture Factory and Shop', time: '18:00' }
            //     ]
            // }
        ]
    },

    // route 9
    {
        location: 'FEATHERMARKET TO SUMMERSTRAND CAMPUSES',
        name: 'Route 9 - Feathermarket to NMU Campuses and return',
        trips: [
            {
                name: 'Morning Trip 1',
                location: 'FEATHERMARKET TO SUMMERSTRAND CAMPUSES',
                stops: [
                    { station: 'Feather Market(Baakens Street)', time: '06h45' },
                    { station: '2nd Ave Campus, North Campus,', time: '07h05' },
                    { station: 'Arrives at South campus', time: '07h15' }
                ]
            },
            {
                name: 'Morning Trip 2',
                location: 'FEATHERMARKET TO SUMMERSTRAND CAMPUSES',
                stops: [
                    { station: 'Feather Market(Baakens Street)', time: '07h45' },
                    { station: '2nd Ave Campus, North Campus,', time: '08h05' },
                    { station: 'Arrives at South campus', time: '08h15' }
                ]
            },
            {
                name: 'Morning Trip 3',
                location: 'FEATHERMARKET TO SUMMERSTRAND CAMPUSES',
                stops: [
                    { station: 'Feather Market(Baakens Street)', time: '08h45' },
                    { station: '2nd Ave Campus, North Campus,', time: '09h05' },
                    { station: 'Arrives at South campus', time: '09h15' }
                ]
            },

            {
                name: 'Morning Trip 4',
                location: 'FEATHERMARKET TO SUMMERSTRAND CAMPUSES',
                stops: [
                    { station: 'Feather Market(Baakens Street)', time: '09h45' },
                    { station: '2nd Ave Campus, North Campus,', time: '10h05' },
                    { station: 'Arrives at South campus', time: '10h15' }
                ]
            },
            {
                name: 'Returning from South Campus at 12h30',
                location: 'FEATHERMARKET TO SUMMERSTRAND CAMPUSES',
                stops: [
                    { station: 'South Campus', time: '12h30' },
                    { station: 'North Campus,2nd Avenue Campus', time: '12h35' },
                    { station: 'Feather Market(Baakens Street)', time: '13h00' }
                ]
            },
            {
                name: 'Returning from South Campus at 14h30',
                location: 'FEATHERMARKET TO SUMMERSTRAND CAMPUSES',
                stops: [
                    { station: 'South Campus', time: '14h30' },
                    { station: 'North Campus,2nd Avenue Campus', time: '14h35' },
                    { station: 'Feather Market(Baakens Street)', time: '15h00' }
                ]
            },
            {
                name: 'Returning from South Campus at 16h00',
                location: 'FEATHERMARKET TO SUMMERSTRAND CAMPUSES',
                stops: [
                    { station: 'South Campus', time: '16h00' },
                    { station: 'North Campus,2nd Avenue Campus', time: '16h05' },
                    { station: 'Feather Market(Baakens Street)', time: '16h30' }
                ]
            }, {
                name: 'Returning from South Campus at 17h30',
                location: 'FEATHERMARKET TO SUMMERSTRAND CAMPUSES',
                stops: [
                    { station: 'South Campus', time: '17h30' },
                    { station: 'North Campus,2nd Avenue Campus', time: '17h35' },
                    { station: 'Feather Market(Baakens Street)', time: '18h00' }
                ]
            },
        ]
    },


    // WALMER TO SUMMERSTRAND CAMPUSES
    {
        location: 'WALMER TO SUMMERSTRAND CAMPUSES',
        name: 'Route 10 Walmer Residences',
        trips: [
            {
                name: 'Morning Trip 1',
                location: 'WALMER TO SUMMERSTRAND CAMPUSES',
                stops: [
                    { station: '6th Avenue Walmer - PSA 8 on 6th', time: '06h45' },
                    { station: 'Huegh Rd Walmer - PSA 22 on Huegh', time: '06h50' },
                    { station: 'Shell Triangle Garage Walmer Boulevard', time: '06h55' },
                    { station: '2nd Ave Campus, North Campus', time: '07h05' },
                    { station: 'Arrives at South Campus', time: '07h15' }
                ]
            },
            {
                name: 'Morning Trip 2',
                location: 'WALMER TO SUMMERSTRAND CAMPUSES',
                stops: [
                    { station: '6th Avenue Walmer - PSA 8 on 6th', time: '07h45' },
                    { station: 'Huegh Rd Walmer - PSA 22 on Huegh', time: '07h50' },
                    { station: 'Shell Triangle Garage Walmer Boulevard', time: '07h55' },
                    { station: '2nd Ave Campus, North Campus', time: '08h05' },
                    { station: 'Arrives at South Campus', time: '08h15' }
                ]
            },
            {
                name: 'Morning Trip 3',
                location: 'WALMER TO SUMMERSTRAND CAMPUSES',
                stops: [
                    { station: '6th Avenue Walmer - PSA 8 on 6th', time: '08h45' },
                    { station: 'Huegh Rd Walmer - PSA 22 on Huegh', time: '08h50' },
                    { station: 'Shell Triangle Garage Walmer Boulevard', time: '08h55' },
                    { station: '2nd Ave Campus, North Campus', time: '09h05' },
                    { station: 'Arrives at South Campus', time: '09h15' }
                ]
            },
            {
                name: 'Returning from South Campus at 12h30',
                location: 'WALMER TO SUMMERSTRAND CAMPUSES',
                stops: [
                    { station: 'South Campus', time: '12h30' },
                    { station: 'North Campus,2nd Avenue Campus', time: '12h35' },
                    { station: 'Shell Triangle Garage Walmer Boulevard', time: '12h50' },
                    { station: 'Huegh Rd Walmer - PSA 22 on Huegh', time: '12h55' },
                    { station: '6th Avenue Walmer - PSA 8 on 6th', time: '13h00' }
                ]
            },
            {
                name: 'Returning from South Campus at 14h30',
                location: 'WALMER TO SUMMERSTRAND CAMPUSES',
                stops: [
                    { station: 'South Campus', time: '14h30' },
                    { station: 'North Campus,2nd Avenue Campus', time: '14h35' },
                    { station: 'Shell Triangle Garage Walmer Boulevard', time: '14h40' },
                    { station: 'Huegh Rd Walmer - PSA 22 on Huegh', time: '14h45' },
                    { station: '6th Avenue Walmer - PSA 8 on 6th', time: '14h50' }
                ]
            },
            {
                name: 'Returning from South Campus at 16h00',
                location: 'WALMER TO SUMMERSTRAND CAMPUSES',
                stops: [
                    { station: 'South Campus', time: '16h00' },
                    { station: 'North Campus,2nd Avenue Campus', time: '16h05' },
                    { station: 'Shell Triangle Garage Walmer Boulevard', time: '16h15' },
                    { station: 'Huegh Rd Walmer - PSA 22 on Huegh', time: '16h20' },
                    { station: '6th Avenue Walmer - PSA 8 on 6th', time: '16h30' }
                ]
            },
            {
                name: 'Returning from South Campus at 17h30',
                location: 'WALMER TO SUMMERSTRAND CAMPUSES',
                stops: [
                    { station: 'South Campus', time: '17h30' },
                    { station: 'North Campus,2nd Avenue Campus', time: '17h35' },
                    { station: 'Shell Triangle Garage Walmer Boulevard', time: '17h40' },
                    { station: 'Huegh Rd Walmer - PSA 22 on Huegh', time: '17h45' },
                    { station: '6th Avenue Walmer - PSA 8 on 6th', time: '17h50' }
                ]
            },
        ]
    },
    {
        location: 'CENTRAL (BELMONT TERRACE) TO SUMMERSTRAND CAMPUSES',
        name: 'Route 8 Central',
        trips: [
            {
                name: 'Morning Trip 1',
                location: 'CENTRAL(BELMONT TERRACE) TO SUMMERSTRAND CAMPUSES',
                stops: [
                    { station: 'Belmont Terrace', time: '06h45' },
                    { station: '2nd Ave Campus, North Campus,', time: '07h05' },
                    { station: 'Arrives at South campus', time: '07h15' },
                ]
            },

            {
                name: 'Morning Trip 2',
                location: 'CENTRAL(BELMONT TERRACE) TO SUMMERSTRAND CAMPUSES',
                stops: [
                    { station: 'Belmont Terrace', time: '07h45' },
                    { station: '2nd Ave Campus, North Campus,', time: '08h05' },
                    { station: 'Arrives at South campus', time: '08h15' },
                ]
            },

            {
                name: 'Morning Trip 3',
                location: 'CENTRAL(BELMONT TERRACE) TO SUMMERSTRAND CAMPUSES',
                stops: [
                    { station: 'Belmont Terrace', time: '08h45' },
                    { station: '2nd Ave Campus, North Campus,', time: '09h05' },
                    { station: 'Arrives at South campus', time: '09h15' },
                ]
            },

            {
                name: 'Morning Trip 4',
                location: 'CENTRAL(BELMONT TERRACE) TO SUMMERSTRAND CAMPUSES',
                stops: [
                    { station: 'Belmont Terrace', time: '09h45' },
                    { station: '2nd Ave Campus, North Campus,', time: '10h05' },
                    { station: 'Arrives at South campus', time: '10h15' },
                ]
            },

            {
                name: 'Returning from South Campus at 12h30',
                location: 'CENTRAL(BELMONT TERRACE) TO SUMMERSTRAND CAMPUSES',
                stops: [
                    { station: 'South Campus', time: '12h30' },
                    { station: 'North Campus,2nd Avenue Campus,', time: '12h35' },
                    { station: 'Belmont Terrace', time: '13h00' },
                ]
            },

            {
                name: 'Returning from South Campus at 14h30',
                location: 'CENTRAL(BELMONT TERRACE) TO SUMMERSTRAND CAMPUSES',
                stops: [
                    { station: 'South Campus', time: '14h30' },
                    { station: 'North Campus,2nd Avenue Campus,', time: '12h35' },
                    { station: 'Belmont Terrace', time: '15h00' },
                ]
            },

            {
                name: 'Returning from South Campus at 16h00',
                location: 'CENTRAL(BELMONT TERRACE) TO SUMMERSTRAND CAMPUSES',
                stops: [
                    { station: 'South Campus', time: '16h00' },
                    { station: 'North Campus,2nd Avenue Campus,', time: '16h05' },
                    { station: 'Belmont Terrace', time: '16h30' },
                ]
            },

            {
                name: 'Returning from South Campus at 17h30',
                location: 'CENTRAL(BELMONT TERRACE) TO SUMMERSTRAND CAMPUSES',
                stops: [
                    { station: 'South Campus', time: '17h30' },
                    { station: 'North Campus,2nd Avenue Campus,', time: '17h35' },
                    { station: 'Belmont Terrace', time: '18h00' },
                ]
            },

        ]
    },


    // HUMEWOOD/FORREST HILL TO SUMMERSTRAND CAMPUSES

    {
        location: 'HUMEWOOD/FORREST HILL TO SUMMERSTRAND CAMPUSES',
        name: 'ROUTE 11 HUMEWOOD AND FORREST HILL',
        trips: [
            {
                name: 'Morning Trip 1',
                location: 'HUMEWOOD/FORREST HILL TO SUMMERSTRAND CAMPUSES',
                stops: [
                    { station: 'HUMEWOOD-Kings Beach Bus Stop', time: '06h45' },
                    { station: 'Forrest Hill', time: '06h55' },
                    { station: 'Forrest Hill Garage,Morestond Flats,Back of Stadium', time: '' },
                    { station: '2nd Ave Campus, North Campus', time: '07h05' },
                    { station: 'Arrives at South Campus', time: '07h15' }
                ]
            },
            {
                name: 'Morning Trip 2',
                location: 'HUMEWOOD/FORREST HILL TO SUMMERSTRAND CAMPUSES',
                stops: [
                    { station: 'HUMEWOOD-Kings Beach Bus Stop', time: '07h45' },
                    { station: 'Forrest Hill', time: '07h55' },
                    { station: 'Forrest Hill Garage,Morestond Flats,Back of Stadium', time: '' },
                    { station: '2nd Ave Campus, North Campus', time: '08h05' },
                    { station: 'Arrives at South Campus', time: '08h15' }
                ]
            },
            {
                name: 'Morning Trip 3',
                location: 'HUMEWOOD/FORREST HILL TO SUMMERSTRAND CAMPUSES',
                stops: [
                    { station: 'HUMEWOOD-Kings Beach Bus Stop', time: '08h45' },
                    { station: 'Forrest Hill', time: '08h55' },
                    { station: 'Forrest Hill Garage,Morestond Flats,Back of Stadium', time: '' },
                    { station: '2nd Ave Campus, North Campus', time: '09h05' },
                    { station: 'Arrives at South Campus', time: '09h15' }
                ]
            },
            {
                name: 'Morning Trip 4',
                location: 'HUMEWOOD/FORREST HILL TO SUMMERSTRAND CAMPUSES',
                stops: [
                    { station: 'HUMEWOOD-Kings Beach Bus Stop', time: '09h45' },
                    { station: 'Forrest Hill', time: '09h55' },
                    { station: 'Forrest Hill Garage,Morestond Flats,Back of Stadium', time: '' },
                    { station: '2nd Ave Campus, North Campus', time: '10h05' },
                    { station: 'Arrives at South Campus', time: '10h15' }
                ]
            },
            {
                name: 'Returning from South Campus at 12h30',
                location: 'HUMEWOOD/FORREST HILL TO SUMMERSTRAND CAMPUSES',
                stops: [
                    { station: 'South Campus', time: '12h30' },
                    { station: 'North Campus,2nd Avenue Campus', time: '12h35' },
                    { station: 'Forrest Hill', time: '' },
                    { station: 'Forrest Hill Garage,Morestond Flats,Back of Stadium', time: '12h50' },
                    { station: 'HUMEWOOD-Kings Beach Bus Stop', time: '13h00' }
                ]
            },
            {
                name: 'Returning from South Campus at 14h30',
                location: 'HUMEWOOD/FORREST HILL TO SUMMERSTRAND CAMPUSES',
                stops: [
                    { station: 'South Campus', time: '14h30' },
                    { station: 'North Campus,2nd Avenue Campus', time: '14h35' },
                    { station: 'Forrest Hill', time: '' },
                    { station: 'Forrest Hill Garage,Morestond Flats,Back of Stadium', time: '14h50' },
                    { station: 'HUMEWOOD-Kings Beach Bus Stop', time: '15h00' }
                ]
            }, {
                name: 'Returning from South Campus at 16h00',
                location: 'HUMEWOOD/FORREST HILL TO SUMMERSTRAND CAMPUSES',
                stops: [
                    { station: 'South Campus', time: '16h00' },
                    { station: 'North Campus,2nd Avenue Campus', time: '16h05' },
                    { station: 'Forrest Hill', time: '' },
                    { station: 'Forrest Hill Garage,Morestond Flats,Back of Stadium', time: '16h20' },
                    { station: 'HUMEWOOD-Kings Beach Bus Stop', time: '16h30' }
                ]
            }, {
                name: 'Returning from South Campus at 17h30',
                location: 'HUMEWOOD/FORREST HILL TO SUMMERSTRAND CAMPUSES',
                stops: [
                    { station: 'South Campus', time: '17h30' },
                    { station: 'North Campus,2nd Avenue Campus', time: '17h35' },
                    { station: 'Forrest Hill', time: '' },
                    { station: 'Forrest Hill Garage,Morestond Flats,Back of Stadium', time: '17h50' },
                    { station: 'HUMEWOOD-Kings Beach Bus Stop', time: '18h00' }
                ]
            },
        ]
    },
    {
        location: 'SUMMERSTRAND TO TOWN - NIGHT SHIFT',
        name: 'Night Shift - Summerstrand to Town',
        trips: [
            {
                name: 'Night Trip 1',
                location: 'SUMMERSTRAND TO TOWN - NIGHT SHIFT',
                stops: [
                    { station: 'South Campus Shuttle Stop indicated time', time: '' },
                    { station: 'To Shuttle Stop in Baakens Str at the Feather Market Hall', time: '20h30' },
                    {
                        station: 'From Feather Market Hall 16 Seaters will transport students  to accredited residences in Town and Central along an inner city route', time: '22h00'
                    },
                ]
            },
            {
                name: 'Night Trip 2',
                location: 'SUMMERSTRAND AND HUMEWOOD - NIGHT SHIFT',
                stops: [
                    { station: 'Alashan Drive / Amery Crescent', time: '18h30' },
                    { station: 'Via Nobbs Str Via Spar', time: '20h30' },
                    {
                        station: 'Stops in Humewood Forest Hill', time: '22h00'
                    }
                ]
            },
            {
                name: 'Night Trip 3',
                location: 'SUMMERSTRAND TO PIER 14, MOUNT ROAD, LAW COURTS, VARSITY PARK, SYDENHAM, KORSTEN - NIGHT SHIFT',
                stops: [
                    { station: 'Stopping at North and 2nd Ave Campuses ', time: '18h30' },
                    { station: 'And proceeding to all stops', time: '20h30' },
                    {
                        station: '16 Seater vehicles will transport students to Kings Res, Lavinia Res, Dynamic Accommodation and Rainbow House', time: '22h00'
                    }
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
                location: 'SUMMERSTRAND AND HUMEWOOD - NIGHT SHIFT',
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
                location: 'SUMMERSTRAND AND HUMEWOOD - NIGHT SHIFT',
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
                location: 'SUMMERSTRAND AND HUMEWOOD - NIGHT SHIFT',
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
                location: 'SUMMERSTRAND TO PIER 14 - NIGHT SHIFT',
                stops: [
                    { station: 'South Campus Shuttle Stop', time: '18h30' },
                    { station: 'North and 2nd Ave campuses', time: '18h45' },
                    { station: 'Kings Res', time: '19h00' },
                    { station: 'Lavinia Res', time: '19h10' },
                    { station: 'Dynamic Accommodation', time: '19h20' },
                    { station: 'Rainbow House', time: '19h30' }
                ]
            },
            {
                name: 'Night Trip 2',
                location: 'SUMMERSTRAND TO PIER 14 - NIGHT SHIFT',
                stops: [
                    { station: 'South Campus Shuttle Stop', time: '20h30' },
                    { station: 'North and 2nd Ave campuses', time: '20h45' },
                    { station: 'Kings Res', time: '21h00' },
                    { station: 'Lavinia Res', time: '21h10' },
                    { station: 'Dynamic Accommodation', time: '21h20' },
                    { station: 'Rainbow House', time: '21h30' }
                ]
            },
            {
                name: 'Night Trip 3',
                location: 'SUMMERSTRAND TO PIER 14 - NIGHT SHIFT',
                stops: [
                    { station: 'South Campus Shuttle Stop', time: '22h00' },
                    { station: 'North and 2nd Ave campuses', time: '22h15' },
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
                location: 'SUMMERSTRAND TO MISSIONVALE/UITENHAGE - NIGHT SHIFT',
                stops: [
                    { station: 'Missionvale Campus', time: '18h30' },
                    { station: 'Uitenhage and surrounds pickup', time: '18h45' }
                ]
            },
            {
                name: 'Night Trip 2',
                location: 'SUMMERSTRAND TO MISSIONVALE/UITENHAGE - NIGHT SHIFT',
                stops: [
                    { station: 'Missionvale Campus', time: '20h30' },
                    { station: 'Uitenhage and surrounds pickup', time: '20h45' }
                ]
            }
        ]
    },
    {
        id: 12,
        name: "ROUTE 13 - SUMMERSTRAND STUDENT VILLAGE TO SUMMERSTRAND CAMPUSES",
        location: "SUMMERSTRAND STUDENT VILLAGE TO SUMMERSTRAND CAMPUSES",
        trips: [
            {
                name: "Morning Trip 1",
                location: "SUMMERSTRAND STUDENT VILLAGE TO SUMMERSTRAND CAMPUSES",
                stops: [
                    { station: "Summerstrand Student Village", time: "06h45" },
                    { station: "North Campus", time: "06h50" },
                    { station: "Arrives at South campus", time: "06h55" }
                ]
            },
            {
                name: "Morning Trip 2",
                location: "SUMMERSTRAND STUDENT VILLAGE TO SUMMERSTRAND CAMPUSES",
                stops: [
                    { station: "Summerstrand Student Village", time: "07h45" },
                    { station: "North Campus", time: "07h50" },
                    { station: "Arrives at South campus", time: "07h55" }
                ]
            },
            {
                name: "Morning Trip 3",
                location: "SUMMERSTRAND STUDENT VILLAGE TO SUMMERSTRAND CAMPUSES",
                stops: [
                    { station: "Summerstrand Student Village", time: "08h45" },
                    { station: "North Campus", time: "08h50" },
                    { station: "Arrives at South campus", time: "08h55" }
                ]
            },

            {
                name: "Morning Trip 4",
                location: "SUMMERSTRAND STUDENT VILLAGE TO SUMMERSTRAND CAMPUSES",
                stops: [
                    { station: "Summerstrand Student Village", time: "09h45" },
                    { station: "North Campus", time: "09h50" },
                    { station: "Arrives at South campus", time: "09h55" }
                ]
            },

            {
                name: "Returning from South Campus at 12h30",
                location: "SUMMERSTRAND STUDENT VILLAGE TO SUMMERSTRAND CAMPUSES",
                stops: [
                    { station: "South Campus", time: "12h30" },
                    { station: "North Campus", time: "12h40" },
                    { station: "Summerstrand Student Village", time: "12h50" }
                ]
            },
            {
                name: "Returning from South Campus at 14h30",
                location: "SUMMERSTRAND STUDENT VILLAGE TO SUMMERSTRAND CAMPUSES",
                stops: [
                    { station: "South Campus", time: "14h30" },
                    { station: "North Campus", time: "14h50" },
                    { station: "Summerstrand Student Village", time: "15h00" }
                ]
            },
            {
                name: "Returning from South Campus at 16h00",
                location: "SUMMERSTRAND STUDENT VILLAGE TO SUMMERSTRAND CAMPUSES",
                stops: [
                    { station: "South Campus", time: "16h00" },
                    { station: "North Campus", time: "16h05" },
                    { station: "Summerstrand Student Village", time: "16h10" }
                ]
            },
            {
                name: "Returning from South Campus at 17h30",
                location: "SUMMERSTRAND STUDENT VILLAGE TO SUMMERSTRAND CAMPUSES",
                stops: [
                    { station: "South Campus", time: "17h30" },
                    { station: "North Campus", time: "17h35" },
                    { station: "Summerstrand Student Village", time: "17h40" }
                ]
            },
        ]
    },
    {
        id: 13,
        name: "ROUTE 12 - SummerStrand and Intercampus Hopper",
        location: "SUMMERSTRAND INTERCAMPUS HOPPER",
        trips: [
            {
                name: "From South Campus - Morning Route",
                location: "SUMMERSTRAND INTERCAMPUS HOPPER",
                stops: [
                    { station: "From South Campus", time: "07h00" },
                    { station: "Via South Campus", time: "" },
                    { station: "Via Sanlam Student Village", time: "07h00" },
                    { station: "Via Gomery", time: "TO" },
                    { station: "Via Summerbreeze Spar", time: "" },
                    { station: "Arrives at Second Avenue Campus", time: "17h30" }
                ],
                allocatedTimes: ["7h00", "9h00", "11h00", "12h30", "14h30", "15h15", "16h00", "17h00"]
            },
            {
                name: "From South Campus - Afternoon Route",
                location: "SUMMERSTRAND INTERCAMPUS HOPPER",
                stops: [
                    { station: "From South Campus", time: "07h00" },
                    { station: "Via South Campus", time: "" },
                    { station: "Via Sanlam Student Village", time: "07h00" },
                    { station: "Via Admiralty", time: "TO" },
                    { station: "Via Pick n Pay, Summerstrand Village", time: "" },
                    { station: "Arrives at Second Avenue Campus", time: "17h30" }
                ],
                allocatedTimes: ["7h00", "9h00", "11h00", "12h30", "14h30", "15h15", "16h00", "17h00"]
            },
            {
                name: "From Second Avenue - Morning Route",
                location: "SUMMERSTRAND INTERCAMPUS HOPPER",
                stops: [
                    { station: "From Second Avenue", time: "07h00" },
                    { station: "Via Summerbreeze Spar", time: "" },
                    { station: "Via Gomery", time: "TO" },
                    { station: "Via North Campus", time: "" },
                    { station: "Arrives at South Campus", time: "17h00" }
                ],
                allocatedTimes: ["7h00", "9h00", "11h00", "12h30", "14h30", "15h15", "16h00", "17h00"]
            },
            {
                name: "From Second Avenue - Afternoon Route",
                location: "SUMMERSTRAND INTERCAMPUS HOPPER",
                stops: [
                    { station: "From Second Avenue", time: "07h00" },
                    { station: "Via Pick n Pay, Summerstrand Village", time: "" },
                    { station: "Via Admiralty", time: "TO" },
                    { station: "Via North Campus", time: "" },
                    { station: "Arrives at South Campus", time: "17h00" }
                ],
                allocatedTimes: ["7h00", "9h00", "11h00", "12h30", "14h30", "15h15", "16h00", "17h00"]
            }
        ]
    }
];

// Update the last update time
function updateLastUpdateTime() {
    const now = new Date();
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    const formattedDate = now.toLocaleDateString('en-US', options);
    // document.getElementById('lastUpdate').textContent = formattedDate;
}

// Sample schedule data
const scheduleData = [
    {
        time: '08:00 AM',
        route: 'Campus A → Campus B',
        status: 'on-time',
        statusText: 'On Time'
    },
    {
        time: '09:30 AM',
        route: 'Campus B → Campus C',
        status: 'on-time',
        statusText: 'On Time'
    },
    {
        time: '11:00 AM',
        route: 'Campus C → Campus A',
        status: 'delayed',
        statusText: '5 min delay'
    }
];

// Update schedule list
function updateScheduleList() {
    const scheduleList = document.querySelector('.schedule-list');
    scheduleList.innerHTML = '';

    scheduleData.forEach(item => {
        const scheduleItem = document.createElement('div');
        scheduleItem.className = 'schedule-item';
        scheduleItem.innerHTML = `
            <span class="time">${item.time}</span>
            <span class="route">${item.route}</span>
            <span class="status ${item.status}">${item.statusText}</span>`;
        scheduleList.appendChild(scheduleItem);
    });
}

// Update service status
function updateServiceStatus() {
    const statusIndicator = document.querySelector('.status-indicator');
    const statusDot = statusIndicator.querySelector('.status-dot');
    const statusText = statusIndicator.querySelector('p');

    // You can modify this based on actual service status
    const isServiceActive = true;

    if (isServiceActive) {
        statusDot.style.backgroundColor = 'var(--success-color)';
        statusText.textContent = 'Service Operating Normally';
        statusIndicator.classList.add('active');
    } else {
        statusDot.style.backgroundColor = 'var(--danger-color)';
        statusText.textContent = 'Service Disrupted';
        statusIndicator.classList.remove('active');
    }
}

// Initialize the page
function init() {
    updateLastUpdateTime();
    updateScheduleList();
    updateServiceStatus();

    // Update the time every minute
    setInterval(updateLastUpdateTime, 60000);
}

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Display the shuttle schedule
function displaySchedule() {
    const scheduleContainer = document.querySelector('.schedule-container');
    let scheduleHTML = '';

    // Add the 'visible' class to make the container visible

    // Populate the schedule HTML
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
                            ${trip.allocatedTimes ? `
                            <div class="allocated-times">
                                <h5>Available Times:</h5>
                                <div class="time-slots">
                                    ${trip.allocatedTimes.map(time => `<span class="time-slot">${time}</span>`).join('')}
                                </div>
                            </div>
                            ` : ''}
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

        };


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

    const filteredLocations = routes.filter(route =>
        route.location.toLowerCase().includes(searchTerm)
    );

    if (filteredStations.length === 0 && filteredLocations.length === 0) {
        dropdown.innerHTML = '<div class="dropdown-item">No locations found</div>';
    } else {
        // Add stations
        filteredStations.forEach(station => {
            const routeInfo = findRouteInfo(station);
            const routeLocation = findRouteLocation(station);
            const div = document.createElement('div');
            div.className = 'dropdown-item';
            div.innerHTML = `
                <div class="station-name">${routeLocation}</div>
                <div class="route-info">${routeInfo}</div>
            `;
            div.addEventListener('click', () => selectStation(station));
            dropdown.appendChild(div);
        });

        // Add locations
        filteredLocations.forEach(route => {
            const div = document.createElement('div');
            div.className = 'dropdown-item';
            div.innerHTML = `
                <div class="station-name">${route.location}</div>
                <div class="route-info">${route.name}</div>
            `;
            div.addEventListener('click', () => selectStation(route.location));
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

function findRouteLocation(station) {
    const routeInfo = [];
    routes.forEach(route => {
        route.trips.forEach(trip => {
            const stop = trip.stops.find(stop => stop.station === station);
            if (stop) {
                routeInfo.push(`${trip.location}`);
            }
        });
    });
    return routeInfo.length > 0 ? routeInfo[0] : 'No schedule location';
}

// Handle station selection
function selectStation(station) {
    const searchInput = document.getElementById('searchInput');
    const dropdown = document.getElementById('searchDropdown');

    searchInput.value = station;
    dropdown.classList.remove('show');

    // Show relevant route sections
    showRelevantRoutes(station);

    // here box added nl: 25 jan 2025
    let schedule_container_wrapper = document.querySelector('#schedule_container_wrapper');
    schedule_container_wrapper.classList.remove('hide');
}

// Show routes relevant to selected station
function showRelevantRoutes(station) {
    const routeSections = document.querySelectorAll('.route-section');
    let found = false;

    routeSections.forEach(section => {
        section.style.display = 'none';
        const routeLocation = section.querySelector('.location-title')?.textContent;
        const routeName = section.querySelector('.route-title')?.textContent;
        const routeTrips = section.querySelectorAll('.schedule-table tr');
        let hasMatch = false;

        // Check if the search matches the route location or name
        if ((routeLocation && routeLocation.toLowerCase().includes(station.toLowerCase())) ||
            (routeName && routeName.toLowerCase().includes(station.toLowerCase()))) {
            hasMatch = true;
            found = true;
        }

        // Check individual stations in the route
        routeTrips.forEach(row => {
            const stationCell = row.querySelector('td:first-child');
            if (stationCell && stationCell.textContent.toLowerCase() === station.toLowerCase()) {
                hasMatch = true;
                found = true;
                row.classList.add('highlighted');
            } else if (stationCell) {
                row.classList.remove('highlighted');
            }
        });

        if (hasMatch) {
            section.style.display = 'block';
        }
    });

    // Scroll to the first visible route section
    if (found) {
        const firstVisibleRoute = document.querySelector('.route-section[style="display: block;"]');
        if (firstVisibleRoute) {
            firstVisibleRoute.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}

function showSchedule(scheduleType) {
    // Hide all schedule contents
    document.querySelectorAll('.schedule-content').forEach(content => {
        content.style.display = 'none';
    });

    // Remove active class from all buttons
    document.querySelectorAll('.schedule-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Show selected schedule content
    document.getElementById(scheduleType + '-schedule').style.display = 'block';

    // Add active class to clicked button
    event.target.classList.add('active');

    // Clear any existing intervals
    if (window.timeInterval) {
        clearInterval(window.timeInterval);
    }

    // Show modal based on schedule type
    switch (scheduleType) {
        case 'exam':
            showModal('examScheduleModal', 'modalExamTimeDisplay');
            break;
        case 'semester1':
            showModal('semester1Modal', 'semester1TimeDisplay');
            break;
        case 'semester2':
            showModal('semester2Modal', 'semester2TimeDisplay');
            break;
        case 'morning':
            showModal('morningModal', 'morningTimeDisplay');
            break;
        case 'evening':
            showModal('eveningModal', 'eveningTimeDisplay');
            break;
        case 'night':
            showModal('nightModal', 'nightTimeDisplay');
            break;
    }
}

function showModal(modalId, timeDisplayId) {
    // Show the modal and overlay
    document.getElementById(modalId).style.display = 'block';
    document.getElementById('modalOverlay').style.display = 'block';

    // Update and start the time display
    function updateTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        document.getElementById(timeDisplayId).textContent = `${hours}:${minutes}:${seconds}`;
    }

    // Update time immediately and start interval
    updateTime();
    window.timeInterval = setInterval(updateTime, 1000);
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    document.getElementById('modalOverlay').style.display = 'none';

    // Clear the time interval
    if (window.timeInterval) {
        clearInterval(window.timeInterval);
    }
}

// Close modal when clicking overlay
document.getElementById('modalOverlay').onclick = function () {
    document.getElementById('examScheduleModal').style.display = 'none';
    document.getElementById('semester1Modal').style.display = 'none';
    document.getElementById('semester2Modal').style.display = 'none';
    document.getElementById('morningModal').style.display = 'none';
    document.getElementById('eveningModal').style.display = 'none';
    document.getElementById('nightModal').style.display = 'none';
    document.getElementById('modalOverlay').style.display = 'none';

    // Clear the time interval
    if (window.timeInterval) {
        clearInterval(window.timeInterval);
    }
};

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displaySchedule();
    initializeSearch();

    // Hide all routes initially
    document.querySelectorAll('.route-section').forEach(section => {
        section.style.display = 'none';
    });
});
// button fuction
const capeTown = { latitude: -33.9249, longitude: 18.4241 }; // Cape Town coordinates

// GPS Button Functionality
document.getElementById('gpsButton').addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                alert(`Your location:\nLatitude: ${latitude}\nLongitude: ${longitude}`);
                const distance = calculateDistance(latitude, longitude, capeTown.latitude, capeTown.longitude);
                alert(`You are approximately ${distance.toFixed(2)} km from Cape Town.`);
            },
            (error) => {
                alert('Unable to retrieve your location. Please check your settings.');
            }
        );
    } else {
        alert('Geolocation is not supported by your browser.');
    }
});

// Shuttle Button Functionality
document.getElementById('shuttleButton').addEventListener('click', () => {
    alert('Shuttle service is available at this time. Please check below.');
});

// Function to calculate distance between two points (Haversine formula)
function calculateDistance(lat1, lon1, lat2, lon2) {
    const toRad = (value) => (value * Math.PI) / 180;
    const R = 6371; // Radius of Earth in km
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}
