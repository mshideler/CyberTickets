function init() {
    // Grab a reference to the dropdown select element
    var selectorA = d3.select("#selAssignee");
    var selectorC = d3.select("#selCategory");
    var selectorS = d3.select("#selSubcat");

    // Populate the select options
    d3.json("Tickets.json").then((data) => {
        var assignees = data.Assignee;

    });



}