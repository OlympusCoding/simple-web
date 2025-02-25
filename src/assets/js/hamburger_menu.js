let menuOpen = false;
function toggleMenu()
{
    if (!menuOpen)
    {
        let sidebar = document.getElementById('side-menu');
        sidebar.style.width = 200 + 'px';
        menuOpen = true;
        sidebar.classList.toggle('invisible');
        sidebar.classList.toggle('visible');
    }
    else 
    {
        let sidebar = document.getElementById('side-menu');
        sidebar.style.width = 0 + 'px';
        menuOpen = false;
        sidebar.classList.toggle('invisible');
        sidebar.classList.toggle('visible');
    }
    
    
}


