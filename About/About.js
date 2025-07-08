document.addEventListener('DOMContentLoaded', function() {
    const img = document.getElementById('AboutJaidenImgEasterEgg');
    img.addEventListener('click', function()
{
    this.classList.toggle("AboutJaidenImageWasClicked");
    alert("you found the easter egg! :D");
});
});