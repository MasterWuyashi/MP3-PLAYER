let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume = document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');
let timer;
let autoplay = 0;
let index_no = 0;
let playing_song = false;
let track = document.createElement('audio');

let All_song = [
{
name: "Kad si rekla da me voliš",
path: "music/Dino Merlin - Kad si rekla da me voliš (Official Audio) [2000].mp3",
img: "img/Dino Merlin.jpg",
singer: "Dino Merlin"

},
{
    name: "Cesarica",
    path: "music/Oliver Dragojević - Cesarica.mp3",
    img: "img/Oliver.jpg",
    singer: "Oliver Dragojević"
    
    },
    {
        name: "Tugo Nesrećo",
        path: "music/Y2Mate.is - Tugo Nesrećo-qD8MR5U5bvQ-160k-1655873880371.mp3",
        img: "img/crvena jabuka.jpg",
        singer: "Dino Merlin"
        
        },
        {
            name: "Tu noć kad si se udavala",
            path: "music/PRLJAVO KAZALIŠTE - TU NOĆ KAD SI SE UDAVALA (OFFICIAL VIDEO).mp3",
            img: "img/Prljavo kazaliste.jpg",
            singer: "Prljavo kazalište"
            
            },
            {
                name: "Kad sam bio mlad",
                path: "music/Riblja Corba - Kad Sam Bio Mlad.mp3",
                img: "img/Riblja corba.jpg",
                singer: "Riblja čorba"
                
                },
                {
                    name: "Kada padne noć",
                    path: "music/Riblja Čorba Kada padne noć Tekst HD.mp3",
                    img: "img/Riblja corba.jpg",
                    singer: "Riblja čorba"
                    
                    },
                    {
                        name: "život je nekad siv nekad žut",
                        path: "music/Y2Mate.is - Bajaga i Instruktori - Zivot je nekad siv nekad zut - (Audio 1988)-BwHenRthXT8-160k-1655942005833.mp3",
                        img: "img/bajaga cover.jpg",
                        singer: "Bajaga i Instuktori"
                        
                        },
                        {
                            name: "Galija da li si spavala",
                            path: "music/Y2Mate.is - Galija - Da li si spavala (Acoustic, 6.1.1995)-v5P4LsUyXV4-128k-1655132764610.mp3",
                            img: "img/galija.jpg",
                            singer: "Galija da li si spavala"
                            
                            },
                            {
                                name: "Dodirni me",
                                path: "music/Galija - Dodirni me.mp3",
                                img: "img/galija.jpg",
                                singer: "Galija"
                                
                                },
                                {
                                    name: "Katushya",
                                    path: "music/Y2Mate.is - Red Army Choir Katusha-MLg83QMmlGs-160k-1655133104382.mp3",
                                    img: "img/Katushya.webp",
                                    singer: "Katushja"
                                    
                                    },
                                    {
                                        name: "Ti si sav moj bol",
                                        path: "music/Y2Mate.is - Ti si sav moj bol-LdD8FtrsTfc-160k-1655132848570.mp3",
                                        img: "img/Ti si sav moj bol.jpg",
                                        singer: "Ekaterina velika"
                                        
                                        },

                                        {
                                            name: "Mix za dobro raspoloženje #1",
                                            path: "music/EX-YU mix za dobro raspoloženje Muzički tramvaj (mp3cut.net).mp3",
                                            img: "img/Ex yu.png",
                                            singer: "Ex Yu mix"
                                            
                                            },
                                            {
                                                name: "Mix za dobro raspoloženje #2",
                                                path: "music/EX-YU mix za dobro raspoloženje Muzički tramvaj (mp3cut.net)(1).mp3",
                                                img: "img/Ex yu.png",
                                                singer: "Ex Yu mix"
                                                
                                                },
                                                {
                                                    name: "Mix za dobro raspoloženje #3",
                                                    path: "music/EX-YU mix za dobro raspoloženje Muzički tramvaj (mp3cut.net)(2).mp3",
                                                    img: "img/Ex yu.png",
                                                    singer: "Ex Yu mix"
                                                    
                                                    },
                                                    {
                                                        name: "Mix za dobro raspoloženje #4",
                                                        path: "music/EX-YU mix za dobro raspoloženje Muzički tramvaj (mp3cut.net)(3).mp3",
                                                        img: "img/Ex yu.png",
                                                        singer: "Ex Yu mix"
                                                        
                                                        },
                                            {
                                                name: "Money for nothing instumental",
                                                path: "music/Dire Straits - Money For Nothing (instrumental).mp4",
                                                img: "img/Money for nothing.jpg",
                                                singer: "Dire Straits"
                                                
                                                }

]

function load_track(index_no){
clearInterval(timer);
reset_slider();
track.src = All_song[index_no].path;
title.innerHTML = All_song[index_no].name;
track_image.src = All_song[index_no].img;
artist.innerHTML = All_song[index_no].singer;
track.load();
total.innerHTML = All_song.length;
present.innerHTML = index_no + 1;
timer = setInterval(range_slider, 1000)
}
load_track(index_no);


function reset_slider(){
slider.value = 0;



}


function mute_sound(){
track.volume = 0;
volume.value = 0;
volume_show.innerHTML =  '<i class="fa-solid fa-volume-xmark"></i>';



}





function justplay(){

if(playing_song==false){

playsong();

}else{

    pausesong();
}


}

function playsong(){
track.play();
playing_song = true;
play.innerHTML = '<i class="fa-solid fa-pause"></i>'


}


function pausesong(){
track.pause();
playing_song = false;
play.innerHTML = '<i class="fa-solid fa-play"></i>'

}
function next_song(){
if(index_no < All_song.length - 1)
{
    index_no += 1;
    load_track(index_no);
    playsong();
}


}


function previous_song(){

if(index_no > 0){index_no-=1;
load_track(index_no);
playsong();}
else{
index_no = All_song.length;
load_track(index_no);
playsong();

}


}

function volume_change() {
volume_show.innerHTML = recent_volume.value; 
track.volume = recent_volume.value / 100;

if(recent_volume.value==0) {track.volume = 0;
    volume.value = 0;
    volume_show.innerHTML =  '<i class="fa-solid fa-volume-xmark"></i>';
    }

}

function change_duration(){
slider_position = track.duration * (slider.value / 100);
track.currentTime = slider_position;
}

function autoplay_switch(){
if(autoplay==1) {autoplay=0;

auto_play.style.background= "#ed8309";}
else{autoplay=1; 
auto_play.style.background= "#808080";}
}


function range_slider(){
let position=0;
if(!isNaN(track.duration)){
position = track.currentTime * (100 / track.duration);
slider.value = position;



}

if(track.ended){
    play.innerHTML= '<i class="fa-solid fa-play"></i>';
    if(autoplay==1){index_no += 1;
    load_track(index_no);
playsong();}
}




}