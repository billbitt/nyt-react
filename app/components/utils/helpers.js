var Axios = require("axios");  // will use axios for performing HTTP requests and use promises 

var API_KEY = "a4cfc83fdd764fc4be6a1cf4f1dc72a6";

var helper = {
    runQuery: function(searchTerm, startDate, endDate) {
        

        // build the query url 
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json" + "?api-key=" + API_KEY + "&q=" + searchTerm;

        if (startDate){
            queryURL = queryURL + "&begin_date=" + startDate;
        };

        if (endDate){
            queryURL = queryURL + "&end_date=" + endDate;
        };

        return Axios.get(queryURL)
            .then(function(response){
                
                if(response.data.response.docs){
                    return response.data.response.docs;
                } else {
                    return "no results";
                };
            })
    },

    getArticles: function(){
        
        return Axios.get("/api/saved");
    },

    saveArticle: function(title, link) {
        return Axios.post("/api/saved", {
            title: title,
            link: link
        });

    },

    deleteArticle: function(id){
        
        return Axios({
            method: 'delete',
            url: '/api/saved',
            data: {
                articleId: id,
            }
        });

    },

    updateArticle: function(id, notes){
        
        return Axios({
            method: 'put',
            url: '/api/saved',
            data: {
                articleId: id,
                notes: notes
            }
        });
    }
}

module.exports = helper;