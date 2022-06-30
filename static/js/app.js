// from CleanedTickets.js
const tableData = data;

// var ticketno = ['', 'T01', 'T02', 'T03', 'T04', 'T05', 'T06', 'T07', 'T08', 'T09',
// 'T10', 'T100', 'T101', 'T102', 'T103', 'T104', 'T105', 'T106',
// 'T107', 'T108', 'T109', 'T11', 'T110', 'T111', 'T112', 'T113',
// 'T114', 'T115', 'T116', 'T117', 'T118', 'T119', 'T12', 'T120',
// 'T121', 'T122', 'T123', 'T124', 'T125', 'T126', 'T127', 'T128',
// 'T129', 'T13', 'T130', 'T131', 'T132', 'T133', 'T134', 'T135',
// 'T136', 'T137', 'T138', 'T139', 'T14', 'T140', 'T141', 'T142',
// 'T143', 'T144', 'T145', 'T146', 'T147', 'T148', 'T149', 'T15',
// 'T150', 'T151', 'T152', 'T153', 'T154', 'T155', 'T156', 'T157',
// 'T158', 'T159', 'T16', 'T160', 'T161', 'T162', 'T163', 'T164',
// 'T165', 'T166', 'T167', 'T168', 'T169', 'T17', 'T170', 'T171',
// 'T172', 'T173', 'T174', 'T175', 'T176', 'T177', 'T178', 'T179',
// 'T18', 'T180', 'T181', 'T182', 'T183', 'T184', 'T185', 'T186',
// 'T187', 'T188', 'T189', 'T19', 'T190', 'T191', 'T192', 'T193',
// 'T194', 'T195', 'T196', 'T197', 'T198', 'T199', 'T20', 'T200',
// 'T201', 'T202', 'T203', 'T204', 'T205', 'T206', 'T207', 'T208',
// 'T209', 'T21', 'T210', 'T211', 'T212', 'T213', 'T214', 'T215',
// 'T216', 'T217', 'T218', 'T219', 'T22', 'T220', 'T221', 'T222',
// 'T223', 'T224', 'T225', 'T226', 'T227', 'T228', 'T229', 'T23',
// 'T230', 'T231', 'T232', 'T233', 'T234', 'T235', 'T236', 'T237',
// 'T238', 'T239', 'T24', 'T240', 'T241', 'T242', 'T243', 'T244',
// 'T245', 'T246', 'T247', 'T248', 'T249', 'T25', 'T250', 'T251',
// 'T252', 'T253', 'T254', 'T255', 'T256', 'T257', 'T258', 'T259',
// 'T26', 'T260', 'T261', 'T262', 'T263', 'T264', 'T265', 'T266',
// 'T267', 'T268', 'T269', 'T27', 'T270', 'T271', 'T272', 'T273',
// 'T274', 'T275', 'T276', 'T277', 'T278', 'T279', 'T28', 'T280',
// 'T281', 'T282', 'T283', 'T284', 'T285', 'T286', 'T287', 'T288',
// 'T289', 'T29', 'T290', 'T291', 'T292', 'T293', 'T294', 'T295',
// 'T296', 'T297', 'T298', 'T299', 'T30', 'T300', 'T301', 'T302',
// 'T303', 'T304', 'T305', 'T306', 'T307', 'T308', 'T309', 'T31',
// 'T310', 'T311', 'T312', 'T313', 'T314', 'T315', 'T316', 'T317',
// 'T318', 'T319', 'T32', 'T320', 'T321', 'T322', 'T323', 'T324',
// 'T325', 'T326', 'T327', 'T328', 'T329', 'T33', 'T330', 'T331',
// 'T332', 'T333', 'T334', 'T335', 'T336', 'T337', 'T338', 'T339',
// 'T34', 'T340', 'T341', 'T342', 'T343', 'T344', 'T345', 'T346',
// 'T347', 'T348', 'T349', 'T35', 'T350', 'T351', 'T352', 'T353',
// 'T354', 'T355', 'T356', 'T357', 'T358', 'T359', 'T36', 'T360',
// 'T361', 'T362', 'T363', 'T364', 'T365', 'T366', 'T367', 'T368',
// 'T369', 'T37', 'T370', 'T371', 'T372', 'T373', 'T374', 'T375',
// 'T376', 'T377', 'T378', 'T379', 'T38', 'T380', 'T381', 'T382',
// 'T383', 'T384', 'T385', 'T386', 'T387', 'T388', 'T389', 'T39',
// 'T390', 'T391', 'T392', 'T393', 'T394', 'T395', 'T396', 'T397',
// 'T398', 'T399', 'T40', 'T400', 'T401', 'T402', 'T403', 'T404',
// 'T405', 'T406', 'T407', 'T408', 'T409', 'T41', 'T410', 'T411',
// 'T412', 'T413', 'T414', 'T415', 'T416', 'T417', 'T418', 'T419',
// 'T42', 'T420', 'T421', 'T422', 'T423', 'T424', 'T425', 'T426',
// 'T427', 'T428', 'T429', 'T43', 'T430', 'T431', 'T432', 'T433',
// 'T434', 'T435', 'T436', 'T437', 'T438', 'T439', 'T44', 'T440',
// 'T441', 'T442', 'T443', 'T444', 'T445', 'T446', 'T447', 'T448',
// 'T449', 'T45', 'T450', 'T451', 'T452', 'T453', 'T454', 'T455',
// 'T456', 'T457', 'T458', 'T459', 'T46', 'T460', 'T461', 'T462',
// 'T463', 'T464', 'T465', 'T466', 'T467', 'T468', 'T469', 'T47',
// 'T470', 'T471', 'T472', 'T473', 'T474', 'T475', 'T476', 'T477',
// 'T478', 'T479', 'T48', 'T480', 'T481', 'T482', 'T483', 'T484',
// 'T485', 'T486', 'T487', 'T488', 'T489', 'T49', 'T490', 'T491',
// 'T492', 'T493', 'T494', 'T495', 'T496', 'T497', 'T498', 'T499',
// 'T50', 'T500', 'T501', 'T502', 'T503', 'T504', 'T505', 'T506',
// 'T507', 'T508', 'T509', 'T51', 'T510', 'T511', 'T512', 'T513',
// 'T514', 'T515', 'T516', 'T517', 'T518', 'T519', 'T52', 'T520',
// 'T521', 'T522', 'T523', 'T524', 'T525', 'T526', 'T527', 'T528',
// 'T529', 'T53', 'T530', 'T531', 'T532', 'T533', 'T534', 'T535',
// 'T536', 'T537', 'T538', 'T539', 'T54', 'T540', 'T541', 'T542',
// 'T543', 'T544', 'T545', 'T546', 'T547', 'T548', 'T549', 'T55',
// 'T550', 'T551', 'T552', 'T553', 'T554', 'T555', 'T556', 'T557',
// 'T558', 'T559', 'T56', 'T560', 'T561', 'T562', 'T563', 'T564',
// 'T565', 'T566', 'T567', 'T568', 'T569', 'T57', 'T570', 'T571',
// 'T572', 'T573', 'T574', 'T575', 'T576', 'T577', 'T578', 'T579',
// 'T58', 'T580', 'T581', 'T582', 'T583', 'T584', 'T585', 'T586',
// 'T587', 'T588', 'T589', 'T59', 'T590', 'T591', 'T592', 'T593',
// 'T594', 'T595', 'T596', 'T597', 'T598', 'T599', 'T60', 'T600',
// 'T601', 'T602', 'T603', 'T604', 'T605', 'T606', 'T607', 'T608',
// 'T609', 'T61', 'T610', 'T611', 'T612', 'T613', 'T614', 'T615',
// 'T616', 'T617', 'T618', 'T619', 'T62', 'T620', 'T621', 'T622',
// 'T623', 'T624', 'T625', 'T626', 'T627', 'T63', 'T64', 'T65', 'T66',
// 'T67', 'T68', 'T69', 'T70', 'T71', 'T72', 'T73', 'T74', 'T75',
// 'T76', 'T77', 'T78', 'T79', 'T80', 'T81', 'T82', 'T83', 'T84',
// 'T85', 'T86', 'T87', 'T88', 'T89', 'T90', 'T91', 'T92', 'T93',
// 'T94', 'T95', 'T96', 'T97', 'T98', 'T99'];
// var priorities = ['', 'Low', 'Medium', 'High'];
// var states = ['', 'California', 'Minnesota', 'Maryland', 'New York', 'Texas', 'Utah',
// 'New Jersey', 'Iowa', 'Florida', 'Michigan', 'Georgia',
// 'Louisiana', 'Connecticut', 'Wisconsin', 'Oregon', 'Virginia',
// 'Pennsylvania', 'Rhode Island', 'Ohio', 'Arizona', 'Massachusetts',
// 'New Mexico', 'Nevada', 'Illinois', 'North Carolina', 'Missouri',
// 'Tennessee', 'Kansas', 'Colorado', 'Indiana', 'Delaware',
// 'District of Columbia', 'Mississippi', 'Alabama', 'Washington',
// 'Kentucky', 'South Carolina', 'Nebraska', 'Hawaii',
// 'New Hampshire', 'Idaho', 'West Virginia', 'Maine', 'Oklahoma',
// 'Montana'];
// var categories = ['', 'Data Privacy', 'Cyber Consultation', 'Cyber Security Breach',
// 'Security Gap', 'Data Leak'];
// var subcategories = ['', 'GDPR', 'BCP/DR', 'Firewall', 'Password non-expiry',
// 'Malware Attack', 'New Application Launch',
// 'Application Offboarding', 'Insider Threat', 'HIPAA',
// 'Segregation of Duties', 'Database Security', 'Secure Development',
// 'PCI-DSS', 'Privacy Assessment', 'Obsolete Software', 'Spyware',
// 'Unauthorized software', 'Trojan Attack', 'Phishing', 'Vishing',
// 'Encryption', 'Access Management', 'Unauthorized access',
// 'Third Party Engagement', 'Network Security'];
// var assignees = ['', 'Bob', 'Allan', 'Charlotte', 'Sebastian', 'Martina', 'Sylviya',
// 'Benny', 'Robbin', 'Sean', 'Kareema', 'Cinderalla', 'Aleena',
// 'Charles', 'Michael', 'Veronica'];

// //build ticket number options list
// for (i=0; i < ticketno.length; i++){
//     var opt = document.createElement("option");
//     document.getElementById("ticketno").innerHTML += '<option id="' + i + '" value="' + ticketno[i] + '">'+ ticketno[i]+'</option>';
// }

// //build priorities options list
// for (i=0; i < priorities.length; i++){
//     var opt = document.createElement("option");
//     document.getElementById("priorities").innerHTML += '<option id="' + i + '" value="' + priorities[i] + '">'+ priorities[i]+'</option>';
// }

// //build states options list
// for (i=0; i < states.length; i++){
//     var opt = document.createElement("option");
//     document.getElementById("states").innerHTML += '<option id="' + i + '" value="' + states[i] + '">'+ states[i]+'</option>';
// }

// //build categories options list
// for (i=0; i < categories.length; i++){
//     var opt = document.createElement("option");
//     document.getElementById("cats").innerHTML += '<option id="' + i + '" value="' + categories[i] + '">'+ categories[i]+'</option>';
// }

// //build subcategories options list
// for (i=0; i < subcategories.length; i++){
//     var opt = document.createElement("option");
//     document.getElementById("subcats").innerHTML += '<option id="' + i + '" value="' + subcategories[i] + '">'+ subcategories[i]+'</option>';
// }

// //build assignees options list
// for (i=0; i < assignees.length; i++){
//     var opt = document.createElement("option");
//     document.getElementById("holders").innerHTML += '<option id="' + i + '" value="' + assignees[i] + '">'+ assignees[i]+'</option>';
// }

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");
  
  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// Create a variable to keep track of all the filters as an object.
var filters = {};

// Use this function to update the filters. 
function updateFilters() {

    // Save the element that was changed as a variable.
    let changedElement = d3.select(this);
    console.log(changedElement);
    
    // Save the value that was changed as a variable.
    let changedValue = changedElement.property("value");
    console.log(changedValue);

    // Save the id of the filter that was changed as a variable.
    let filterID = changedElement.attr("id");
    console.log(filterID);

    console.log(filters);
    // If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    if (changedValue) {
      filters[filterID] = changedValue;
      console.log(filters[filterID]);
    }
    else {
      delete filters;
    }
    //console.log(filters);
    // Call function to apply all filters and rebuild the table
    filterTable();
  
  }
  
    // Use this function to filter the table when data is entered.
    function filterTable() {
  
     // Set the filtered data to the tableData.
     let filteredData = tableData;
     //console.log(filteredData);
  
    // Loop through all of the filters and keep any data that
    // matches the filter values
    for (var key in filters) {
      filteredData = filteredData.filter(row => row[key] === filters[key]);
    };
    
    // Rebuild the table using the filtered data
    buildTable(filteredData);
  }

// Attach an event to listen for changes to each filter
d3.selectAll("input").on("change", updateFilters); 

// Build the table when the page loads
buildTable(tableData);




