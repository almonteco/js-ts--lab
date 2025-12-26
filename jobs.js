//jobs.js

// Seasonal mowing frequencies by month
const mowingCycles = {
    //fast growth season
    springSummer: {
        label: "Spring/Summer",
        months: ["March", "April", "May", "June", "July", "August", "September", "October"],
        defaultFrequency: "Weekly"
        },
    //slow growth season
    fallWinter: {
        label: "Fall/Winter",
        months: ["November", "December", "January", "February"],
        defaultFrequency: "biweekly" //can be overwritten to monthly
        },
    };

//Offered services list
const jobTypes = Object.freeze({
    MOWING: "Mowing",
    BUSHES: "Bushes",
    TREES: "Trees",
    });

//This is our "database" for now
const jobs = [
    {
        id: 1
        customerName: "Sanja Kosak",
        address: "4108 Piney Branch Court",
        
        //Services at this location
        services: [jobTypes.MOWING] 
        
        //Estimared toral time on-site (minutes)
        servicesDurationMinutes: "15",  //Time duration per service. will update based on activity.
        
        subscriptionType: "Recurring",
        subscriptionStatus: "Pending",  //Pending | Active | Inactive | One-Time(changes to inactive after complete)
        frequency: "Auto-Seasonal",  //refers to mowingCycles rules
        scheduledDate: "2026-01-05",
        lastCompletedDate: null
    },
    {
        id: 2
        customerName: "Donny Almonte",
        address: "2708 Chelton Rd",
        
        //Services at this location
        services: [jobTypes.MOWING],
        
        //Estimared toral time on-site (minutes)
        servicesDurationMinutes: "30",

        subscriptionType: "Pending",
        subscriptionStatus: "Pending",
        frequency: "Auto-Seasonal",
        scheduleDate: "2026-01-05",
        lastCompleteDate: null
    },
    {
        id: 3
        customerName: "Donny Almonte",
        address: "2582 Alexia Circle",
        
        //Services at this location
        services: [jobTypes.MOWING, jobtypes.BUSHES],
        
        //Estimared toral time on-site (minutes)
        servicesDurationMinutes: "30",

        subscriptionType: "Pending",
        subscriptionStatus: "Pending",
        frequency: "Auto-Seasonal",
        scheduleDate: "2026-01-05",
        lastCompleteDate: null
    }
];

console.log("Jobs Loaded:", jobs);
