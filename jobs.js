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


//This is our "database" for now
const jobs = [
    {
        id: 1
        customerName: "Sanja Kosak",
        jobType: "Mowing",
        address: "4108 Piney Branch Court",
        subscriptionType: "Recurring"
        subscriptionStatus: "Pending",  //Pending | Active | Inactive | On-Time(changes to inactive after complete)
        frequency: "Auto-Seasonal",  //refers to mowingCycles rules
        scheduledDate: "2026-01-05",
        lastCompletedDate: null
    }
];
