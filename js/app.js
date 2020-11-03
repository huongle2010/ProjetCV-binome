/* ------------------------------------ Dark mode ----------------------- */
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {        document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

/* ------------------------------------ Srcoll reveal ----------------------- */
const sr=ScrollReveal( {
    duration : 2000
 });
 ScrollReveal().reveal( '.exp',{
        delay : 500});
 ScrollReveal().reveal( '.compentence ', {
    delay : 600});

ScrollReveal().reveal( '.formation ' , {
   delay : 700});

ScrollReveal().reveal( '.language ',{
   delay: 600});

ScrollReveal().reveal( '.loisir',{
    delay: 600});
