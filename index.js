function menu() {
    const hambug = document.querySelector('.hamburger');
    const mobilenav = document.querySelector('.mobile_links');
    const ham = document.querySelectorAll('.first_ham, .second_ham, .third_ham');


    hambug.addEventListener('click', toggleMenu);

    function toggleMenu() {
        ham.forEach(hams => {
            hams.classList.toggle('open')
        });

        mobilenav.classList.toggle('transparent');
    };
};

menu()