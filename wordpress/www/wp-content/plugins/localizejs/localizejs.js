!function(a){if(!a.Localize){a.Localize={};for(var e=["translate","untranslate","phrase","initialize","translatePage","setLanguage","getLanguage","detectLanguage","getAvailableLanguages","untranslatePage","bootstrap","prefetch","on","off"],t=0;t<e.length;t++)a.Localize[e[t]]=function(){}}}(window);

// Localize.on("initialize", function(data) {
//     console.log("Localize was initialized: ");
//     console.log(data);
// });

Localize.on('setLanguage', function(data, event) {
    if (localStorage.getItem('loadedLang') !== data.to) {
        switch (URL_OPTIONS) {
            case "0": // No SEO option
                break;
            case "1": // Subdirectories
                localStorage.setItem('loadedLang', data.to);

                let pathArr = window.location.pathname.split('/');
                let search = window.location.search;
                let lang = pathArr[1];

                if(AVAILABLE_LANGUAGES.includes(lang)) {
                    pathArr.splice(0,2);
                }

                let finalPath = pathArr.join('/');
                finalPath = finalPath + search;

                if (data.to != SOURCE_LANGUAGE) {


                    if(localize_conf.permalink_plain=='1') {

                        window.location.href=setLanguageByQueryParams(data.to);

                    }
                    else { //if(finalPath!="") 

                        window.location.href=urlFilter('/'+data.to+"/"+finalPath);

                    }

                } else if (data.to === SOURCE_LANGUAGE) {

                    if (localize_conf.permalink_plain == '1') {

                        window.location.href=removeLanguageByQueryParams();

                    } else if (finalPath !== undefined && finalPath != "" && finalPath != "/") {

                        window.location.href=urlFilter("/"+finalPath);

                    } else {
                        window.location.href=urlFilter("/");
                    }

                }
                break;
            case "2": // Subdomains
                localStorage.setItem('loadedLang', data.to);
                if (AVAILABLE_LANGUAGES.includes(data.to)) {

                    let hostname = location.hostname.split('.');
                    let lang = hostname[0];

                    if(AVAILABLE_LANGUAGES.includes(lang)) {
                        hostname.shift();
                    }

                    let hostNameFinal = hostname.join('.');


                    if (data.to == SOURCE_LANGUAGE) {
                        if (localize_conf.permalink_plain == '1') {
                            window.location.href = location.protocol + "//" + hostNameFinal + getAllQueryParams();
                        } else {
                            window.location.href = location.protocol + "//" + hostNameFinal + window.location.pathname;
                        }

                    } else {
                        if (localize_conf.permalink_plain == '1') {
                            window.location.href = location.protocol + "//" + data.to + "." + hostNameFinal + getAllQueryParams();
                        } else {
                            window.location.href = location.protocol + "//" + data.to + "." + hostNameFinal + window.location.pathname;
                        }
                    }

                }
                break;
        }
    }
});

function urlFilter(url) {
    return url.replace(/\/+/g, '/');
}

function setLanguageByQueryParams(lng) {  
    
    var url = new URL(window.location.href);

    var query_string = url.search;

    var search_params = new URLSearchParams(query_string); 

    // new value of "lang" is set here if not exists
    if(!search_params.has('lang'))
        search_params.set('lang', lng);

    url.search = search_params.toString();

    var new_url = url.toString();
    return new_url;

}

function removeLanguageByQueryParams() {  
    
    var url = new URL(window.location.href);

    var query_string = url.search;

    var search_params = new URLSearchParams(query_string); 
    
    // new value of "lang" is set here if not exists
    if(search_params.has('lang'))
        search_params.delete('lang');
    
    var searchString = decodeURIComponent(search_params.toString());
    var newUrl = (searchString ? '?' : '' ) + searchString;

    // change the search property of the main url
    url.search = newUrl;
    
    // the new url string
    var new_url = url.toString();

    return new_url;

}

function getLanguageFromQueryParams() {  
    
    var url = new URL(window.location.href);

    var query_string = url.search;

    var search_params = new URLSearchParams(query_string); 
    
    return search_params.get('lang');

}

function getAllQueryParams(){
    var url = new URL(window.location.href);

    var query_string = url.search;
    
    return query_string;
}

if (PROJECT_KEY) {
    let params = {
        key: PROJECT_KEY,
        rememberLanguage: (URL_OPTIONS != 1),
        blockedIds: ['wpadminbar'],
    }
    try {
        if (OVERRIDE_LANG) {
            params.targetLanguage = OVERRIDE_LANG;
        }

    } catch (err) {}
    Localize.initialize(params);
}
