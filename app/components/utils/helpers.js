var axios = require("axios");  // will use axios for performing HTTP requests and use promises 

var API_KEY = "a4cfc83fdd764fc4be6a1cf4f1dc72a6";

var helper = {
    runQuery: function(searchTerm, startDate, endDate) {
        console.log("search for:", searchTerm, startDate, endDate);

        // build the query url 
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json" + "?api-key=" + API_KEY + "&q=" + searchTerm;

        if (startDate){
            queryURL = queryURL + "?begin_date=" + startDate;
        };

        if (endDate){
            queryURL = queryURL + "?end_date=" + endDate;
        };

        return axios.get(queryURL)
            .then(function(response){
                //console.log("nyt response:", response)
                if(response.data.response.docs){
                    return response.data.response.docs;
                } else {
                    return "no results";
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
    },

    updateArticle: function(article){
        return axios.put("/api/saved", {
            link: article.link
        })
    }
}

module.exports = helper;