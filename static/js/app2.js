const tableData = data;

console.log(tableData);

var assignees = ['Bob', 'Allan', 'Charlotte', 'Sebastian', 'Martina', 'Sylviya',
'Benny', 'Robbin', 'Sean', 'Kareema', 'Cinderalla', 'Aleena',
'Charles', 'Michael', 'Veronica']
var categories = ['Data Privacy', 'Cyber Consultation', 'Cyber Security Breach',
'Security Gap', 'Data Leak']
var subcategories = ['GDPR', 'BCP/DR', 'Firewall', 'Password non-expiry',
'Malware Attack', 'New Application Launch',
'Application Offboarding', 'Insider Threat', 'HIPAA',
'Segregation of Duties', 'Database Security', 'Secure Development',
'PCI-DSS', 'Privacy Assessment', 'Obsolete Software', 'Spyware',
'Unauthorized software', 'Trojan Attack', 'Phishing', 'Vishing',
'Encryption', 'Access Management', 'Unauthorized access',
'Third Party Engagement', 'Network Security']

//build assignees options list
for (i=0; i < assignees.length; i++){
    var opt = document.createElement("option");
    document.getElementById("holders").innerHTML += '<option id="' + i + '" value="' + assignees[i] + '">'+assignees[i]+'</option>';
}

//build categories options list
for (i=0; i < categories.length; i++){
    var opt = document.createElement("option");
    document.getElementById("cats").innerHTML += '<option id="' + i + '" value="' + categories[i] + '">'+categories[i]+'</option>';
}

//build assignees options list
for (i=0; i < subcategories.length; i++){
    var opt = document.createElement("option");
    document.getElementById("subcats").innerHTML += '<option id="' + i + '" value="' + subcategories[i] + '">'+subcategories[i]+'</option>';
}

// get table references
//var tbody = d3.select("tbody");

//function buildTable

// function init() {
//     // Grab a reference to the dropdown select element
//     var selectorSubcat = d3.select("#selSubcat");
//     var selectorState = d3.select("#selState");

//     // Populate the select options
//     d3.json("Tickets.json").then((data) => {
//         //console.log(data);
//         var subcategories = data.Subcategory;
//         //console.log(subcategories)
//         var states = data.State;
//         //console.log(states)
        
//     //Build options lists
//     subcategories.forEach((subcategory) => {
//         selectorSubcat
//             .append("option")
//             .text(subcategory)
//             .property("value", subcategory);
//         });
    
//     states.forEach((state) => {
//         selectorState
//             .append("option")
//             .text(state)
//             .property("value", state);
//         });

//     // Use first state to build initial plots and table
//     var firstState = states[0];
//     console.log(firstState)    ;
//     // buildCharts(firstState);
//     // buildTable(firstState);
    
//     });
        
// }

// Initialize the dashboard
//init();

//buildCharts();

//function optionChanged(newSelection) {
//    buildCharts(newSelection);
//}

// Create subcat function
//function subcat(category) {
//    d3.json("Tickets.json").then((data) => {
//        var groupCat = categories.groupBy();
        //console.log(tickets);


//})
//}