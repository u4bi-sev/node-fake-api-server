axios({
    method:'GET',
    url:'http://localhost:7777/item'
})
.then(function(response) {
    console.log(response.data)   ;
});

axios({
    method:'GET',
    url:'http://localhost:7777/item/1'
})
.then(function(response) {
    console.log(response.data);
});            

axios({
    method:'GET',
    url:'http://localhost:7777/item?name=Rifle'
})
.then(function(response) {
    console.log(response.data);
});



axios({
    method:'POST',
    url:'http://localhost:7777/item',
    data: {
        name: 'ABCD',
        price: 1234
    }
})
.then(function(response) {
    console.log(response.data);
});
        