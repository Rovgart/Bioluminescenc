'use script';

const contClick= document.querySelectorAll('.cont');
const scroll= document.querySelectorAll('div.cont');

document.querySelector('.cont').addEventListener('click', function(){
    const ffly= document.querySelector('.texty');
    ffly.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    
})

document.querySelector('.second').addEventListener('click', function(){
    const ffly= document.querySelector('div.art_sec_part');
    ffly.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    
})
document.querySelector('.third').addEventListener('click', function(){
    const ffly= document.querySelector('div.pictr__article');
    ffly.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    
})
const authors= document.querySelector('#authors');
authors.addEventListener('click', function(){
    const end= document.querySelector('div.int-facts');
    end.scrollIntoView({block:"start", behavior:"smooth", inline:"nearest"});
})