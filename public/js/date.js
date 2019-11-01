// The date parameter is actually the day of month, if absent then 1 is assumed.
// Same for days.
const lastScandalDate = new Date(2019, 9, 1);
const currentDate = Date.now();

let outputDate = Math.floor((currentDate - lastScandalDate) / 24 / 3600 / 1000);
