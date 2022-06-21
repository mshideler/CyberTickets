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