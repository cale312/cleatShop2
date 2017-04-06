document.querySelector('.display').innerHTML = localStorage.getItem('dropDown');
var list = document.querySelector('.dropDown');
var names = [
    {name: 'Cale', className: 'cale'}
];
document.querySelector('.search-btn').addEventListener('click', function () {
    'use strict';
    var nameText = document.querySelector('.name-searcher');
    var newTemplate = document.querySelector('.drop-down').innerHTML,
        temp = Handlebars.compile(newTemplate);
    var stockFound = false;
    
    for (var i = 0; i < names.length; i++) {
//        alert(JSON.stringify(names[i]));
        if (nameText.value === names[i].name) {
//            alert(names[i]);
            document.querySelector('.tableDisplay').innerHTML = temp(names[i]);
            stockFound = true;
        } else if (stockFound === false) {
            document.querySelector('.tableDisplay').innerHTML = '<h2>Name not found!!</h2>';
        }
    }
    
    nameText.value = "";
});

document.querySelector('.add-btn').addEventListener('click', function () {
    'use strict';
    var nameAdd = [],
        addedName = document.querySelector('.add-name'),
        newName = {name: addedName.value, className: addedName.value};
    nameAdd = newName;
    names.push(nameAdd);
    
    addedName.value = '';
    var myTemplate = document.querySelector('.myTemplate').innerHTML;
    var template = Handlebars.compile(myTemplate);
    var data = {nameList: names};

    document.querySelector('.display').innerHTML = template(data);
    localStorage.setItem('dropDown', document.querySelector('.display').innerHTML);
});

document.querySelector('.showNames-btn').addEventListener('click', function () {
    'use strict';
    var newTemplate = document.querySelector('.newTemplate').innerHTML,
        temp = Handlebars.compile(newTemplate),
    
        listNames = {data: names};
    
    document.querySelector('.tableDisplay').innerHTML = temp(listNames);
});