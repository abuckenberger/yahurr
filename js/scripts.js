// @codekit-prepend "jquery.js";
// @codekit-prepend "semantic.js";
// @codekit-prepend "airtable.js";



// get airtable data (api keys) configuration & handshake
var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyNyK2dVB4Da7Dzo'
});
var base = Airtable.base('appYjgGyxE7AXQYex');

//make sure airtale is working
console.log(base);



// get records from airtable

base('YaHURR').select({
    view: 'Grid view'
}).firstPage(function(err, records) {
    if (err) { console.error(err); return; }
    records.forEach(function(record) {
        //console.log('Retrieved', record.get('Name'));
    
        var students = `<h1>${record.get('Name')}</h1>`
    
        
        $('#students').html(students);
    
    });
    
});

// use base grap ('yaHURR') what do you wanna do? .select (SELECTOR ACTION OPTION)





//template literal
var students = ` <section class="ui card">
            <div class="name"> Name </div>
            <div class="image">
            <img src="http://placehold.it/400x400" alt="">
            </div>
            <div class="content">
            <p class="description"><a href=""> Github </a></p> and <a href="mailto:">Email</a>
            </div>
         
        </section>`



