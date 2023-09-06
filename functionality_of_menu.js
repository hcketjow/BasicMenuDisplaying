// Programy operacyjne li:
const program_oper_1 = document.querySelector('.program_oper_1');
const program_oper_2 = document.querySelector('.program_oper_2'); 
const program_oper_3 = document.querySelector('.program_oper_3'); 

//Button do strzałki dla programów operacyjnych:
const program_oper_1_drop = document.querySelector('.program_oper_1_drop');
const program_oper_2_drop = document.querySelector('.program_oper_2_drop');
const program_oper_3_drop = document.querySelector('.program_oper_3_drop');

//Powrót do wszystkich programów operacyjnych:
const back_program_oper_1 = document.querySelector('.back_program_oper_1');
const back_program_oper_2 = document.querySelector('.back_program_oper_2');
const back_program_oper_3 = document.querySelector('.back_program_oper_3');

// Ogólny navbar to pokazywania i chowanie priorytetów i programów operacyjnych
const drop_btn = document.querySelector('.drop-btn');
const menu_wrapper = document.querySelector('.wrapper');
const menu_bar = document.querySelector('.menu-bar');

drop_btn.onclick = (() => {
    menu_wrapper.classList.toggle('show');
});

// Metody do chowania oraz wyświetlania priorytetów
function show_priorities(button_arrow, drop_arrow){
    button_arrow.onclick = ((e) => {
        e.preventDefault();
        menu_bar.style.marginLeft = '-400px';
        setTimeout(()=>{
            drop_arrow.style.display = 'block';
        }, 100);
    });
}

function hide_priorities(back_button_arrow, drop_arrow){
    back_button_arrow.onclick = ((e) => {
        e.preventDefault();
        menu_bar.style.marginLeft = '0px';
        drop_arrow.style.display = 'none';
    });
}

// Call method to show priorities: 
show_priorities(program_oper_1,program_oper_1_drop);
show_priorities(program_oper_2,program_oper_2_drop);
show_priorities(program_oper_3,program_oper_3_drop);

// Call method to hide priorities: 
hide_priorities(back_program_oper_1, program_oper_1_drop);
hide_priorities(back_program_oper_2, program_oper_2_drop);
hide_priorities(back_program_oper_3, program_oper_3_drop);