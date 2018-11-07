    
$(document).ready(function() {
    $(".getRxData").on("click", function() {
        console.log("button click")
        axios.get("https://rxnav.nlm.nih.gov/REST/rxcui.json?idtype=NDC&id=11523-7020-1")
        .then(function(response) { 
            console.log(response);

            var rxcui = response.data.idGroup.rxnormId[0];
            
            axios.get(`https://rxnav.nlm.nih.gov/REST/interaction/interaction.json?rxcui=${rxcui}`)
            .then(function(response) {
                console.log(response.request.response);
                displayResults(response);
            });
        });
    });

    function displayResults(response) {
        $("#results").text(JSON.stringify(response));
    }
});


// response.data.request.

https://rximage.nlm.nih.gov/api/rximage/1/rxnav?imprint=11523-7020-1