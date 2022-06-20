console.log('Here are all the available people:', people);

$( document ).ready( onReady );

function onReady(){
    console.log( 'jQuery is on!' );
    appendDivs();
};

function appendDivs(){
    

    for( let i=0; i<people.length; i++ ){
        console.log( people[i] );
        $( 'body' ).append( `<img src="https://github.com/${people[i].githubUsername}.png?size=250" alt="Profile image of ${people[i].name}"></img>` )
    }

};