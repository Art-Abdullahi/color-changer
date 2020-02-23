const changeColor = () =>{
    
        bg.style.backgroundColor = colors[i]
        i = (i + 1) % colors.length// increment index to point to the next color (if it goes beyond the length of the coices array get it back to 0 using the modulo %)


        
    
}
var i = 0;
var colors = ['blue', 'yellow', 'green', 'purple', 'red', 'brown', 'aqua', 'pink', 'orange',]
var bg = document.getElementById('bg')
var button = document.getElementById('button')
button.addEventListener('click' , changeColor);
