document.body.addEventListener('keyup', (event)=> {
    playSound(event.code.toLocaleLowerCase());
});

document.querySelector('.composer button').addEventListener('click', ()=>{
    let song = document.querySelector('#input').value;

    if(song !== ''){
        let songArray = song.split('');
        playComposition(songArray);
    }
});

function playSound(sound){
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);


    if (audioElement) {
        audioElement.CurrentTime = 0;
        audioElement.play();
    }

    if (keyElement) {
        keyElement.classList.add('active');

        setTimeout(()=> {
            keyElement.classList.remove('active');
        },300);
    }
}

function playComposition(ssongArray){
    let wait =  0;

    for (let songItem of ssongArray){

        setTimeout(()=> {
            playSound(`key${songItem}`);
        }, wait);
        
        wait += 250;
    }
}