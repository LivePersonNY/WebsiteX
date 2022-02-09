import $ from 'jquery';

window.documentReadyFn = function() {
	
	console.log('careers script loaded3');

   window.onload = (e) => {
    document.querySelectorAll('.comp-body-container a').forEach(function(lnk) {
        var href = lnk.href.concat("&gh_src=").concat(ghsrc ?? "");
         lnk.href = href;
    });
    document.querySelectorAll('resume-upload').forEach(function(lnk) {
        var href = lnk.href.concat("&gh_src=").concat(ghsrc ?? "");
         lnk.href = href;
    });
    
    let searchURL = 'http://careers.liveperson.com?source=campaignA'
    .concat("&gh_src=").concat(ghsrc ?? "");
    let keyWordQuery = document.getElementById('Job_Search').value;
    if (keyWordQuery !== '') {
        searchURL = searchURL.concat("&q=").concat(encodeURIComponent(keyWordQuery))
    }
    let submit = document.getElementById('Search_Submit_Button');
    submit.href = searchURL;
};

function handleKey(e) {
  e.preventDefault()
  e.stopPropagation()

  if (e.keyCode === 13) {
    let searchURL = 'http://careers.liveperson.com?source=campaignA'.concat("&gh_src=")
        .concat(ghsrc ?? "");
    let keyWordQuery = document.getElementById('Job_Search').value;
    if (keyWordQuery !== '') { 
      sendGA();
      searchURL = searchURL.concat("&q=")
          .concat(encodeURIComponent(keyWordQuery))
          

    }
    location.href = searchURL
  }
}
function sendGA() {
    ga('send', 'event', 'careers', 'click', 'Job search');
}

function setURLParams(e) {
  let keyWordQuery = document.getElementById('Job_Search').value;

  let searchURLParams = "https://careers.liveperson.com/?source=campaignA&q=";
  searchURLParams = searchURLParams.concat(encodeURIComponent(keyWordQuery))
      .concat("&gh_src=").concat(ghsrc ?? "");

  let a = document.getElementById('Search_Submit_Button');
      let b = document.getElementById('wf-form-Search-Form');
  
  a.href = searchURLParams;
  b.setAttribute('action', searchURLParams);
}

document.getElementById('Job_Search').addEventListener('keyup', handleKey);
document.getElementById('wf-form-Search-Form').addEventListener('keyup', handleKey);
document.getElementById('Job_Search').addEventListener('input', setURLParams);

document.querySelector('.resume-upload').addEventListener('click',function(){
  ga('send', 'event', 'careers', 'click', 'Match resume');
})

document.querySelector('.hero-or').addEventListener('click',function(){
  console.log('click test');
})

console.log('end of careers script');
	
}
