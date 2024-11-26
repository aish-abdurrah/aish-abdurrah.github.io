function addRecommendation(){
    //Get the new recommendation input
    let recommendation = document.getElementById("new_recommendation");
    if(recommendation.value != null && recommendation.value.trim() != ""){
        console.log("New Recommendation added");
        //Create a new recommendation element and set value to user's message
        var element = document.createElement("div");
        element.setAttribute("class","recommendation");
        element.innerHTML = "\<span\>&#8220;\</span>" + recommendation.value + "\<span\>&#8221;\</span>";
        //Add this element to the end of the list of recommendation
        document.getElementById("all_recommendations").appendChild(element);
        //Reset the value of the textarea
        recommendation.value = "";
    }
}