var DESIGNATION;
(function (DESIGNATION) {
    DESIGNATION[DESIGNATION["Analyst"] = 1] = "Analyst";
    DESIGNATION[DESIGNATION["SoftwareEngineer"] = 2] = "SoftwareEngineer";
    DESIGNATION[DESIGNATION["AssociateSoftwareEngineer"] = 3] = "AssociateSoftwareEngineer";
    DESIGNATION[DESIGNATION["SeniorEngineer"] = 4] = "SeniorEngineer";
    DESIGNATION[DESIGNATION["Lead"] = 5] = "Lead";
    DESIGNATION[DESIGNATION["Manager"] = 6] = "Manager";
})(DESIGNATION || (DESIGNATION = {}));
var manager = DESIGNATION.Manager;
console.log('Manager is ' + manager);
