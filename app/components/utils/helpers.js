var axios = require("axios");  // will use axios for performing HTTP requests and use promises 

var API_KEY = "a4cfc83fdd764fc4be6a1cf4f1dc72a6";

var helper = {
    runuery: function(searchTerm, startDate, endDate) {
        console.log("search for:", searchTerm, startDate, endDate);

        // build the query url 
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json" + "?" + API_KEY + "?q=" + searchTerm;

        if (startDate){
            queryURL = queryURL + "?begin_date=" + startDate;
        };

        if (endDate){
            queryURL = queryURL + "?end_date=" + endDate;
        };

        return axios.get(queryURL)
            .then(function(response){
                if(response.data.results){
                    return response.data.results;
                } else {
                    return "";
                };
            })
    },

    getArticles: function(){
        return axios.get("/api/saved");
    },

    saveArticle: function(article) {
        return axios.post("/api/saved", {
            title: article.title,
            link: article.link,
        });

    },

    deleteArticle: function(article){
        return axios.delete("/api/saved", {
            link: article.link
        })
    }
}

module.exports = helper;