/* Content created by TruzzBlogg - Ricardo */
/* Check our videos on Youtube: https://www.youtube.com/c/TruzzBlogg/videos */

function enableDarkMode() {
    let main_body = document.body;
    main_body.classList.toggle("dark-mode");

    // Check if checkbox is checked or not
    if (document.getElementById('checkitem').checked) {
        console.log("checked");
    } else {
        console.log("NOT checked");
    }


}
