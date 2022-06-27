function init() {
    // Grab a reference to the dropdown select element
    var selectorA = d3.select("#selAssignee");
    var selectorC = d3.select("#selCategory");
    var selectorS = d3.select("#selSubcat");

    // Populate the select options
    d3.json("Tickets.json").then((data) => {
        //console.log(data);
        var assignees = data.Assignee;
        //console.log(assignees)
        var categories = data.Category;
        //console.log(categories)
        var subcategories = data.Subcategory;
        //console.log(subcategories)

    //Build options lists
    assignees.forEach((assignee) => {
        selectorA
            .append("option")
            .text(assignee)
            .property("value", assignee);
        })
    
    categories.forEach((category) => {
        selectorC
            .append("option")
            .text(category)
            .property("value", category);
        })
    
    subcategories.forEach((subcategory) => {
        selectorS
            .append("option")
            .text(subcategory)
            .property("value", subcategory);
        })
    
    })
        
}

// Initialize the dashboard
init();

buildCharts();

function optionChanged(newSelection) {
    buildCharts(newSelection);
}

// Create buildCharts function
function buildCharts(category) {
    d3.json("Tickets.json").then((data) => {
        var groupCat = categories.groupBy();
        //console.log(tickets);


})
}