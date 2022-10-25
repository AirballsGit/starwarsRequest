
// this is the oldert bulky way of doing requests that noone really uses anymore

const firstReq = new XMLHttpRequest();
firstReq.addEventListener('load', function(){
    const data = JSON.parse(this.responseText)
    for(let planet of data.results){
        console.log(planet.name);
    }
    const nextUrl = data.next;
    secondReq = new XMLHttpRequest();
    secondReq.addEventListener('load', function(){
        const data = JSON.parse(this.responseText)
    for(let planet of data.results){
        console.log(planet.name);
    };
    });
    secondReq.addEventListener('error', function(){
        console.log('ERROR!')
    });
    secondReq.open('GET', nextUrl);
    secondReq.send();
    console.log('JUST SENT SECOND REQUEST!');
});

firstReq.addEventListener('error', () => {
    console.log('ERROR');
}); 

firstReq.open('GET', 'https://swapi.dev/api/planets/');
firstReq.send();
console.log('sending request......')