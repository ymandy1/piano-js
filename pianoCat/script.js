// document.addEventListener('DOMContentLoaded', () => {
//     const keys = document.querySelectorAll('.key');
//     const notes = {
//         'C': new Audio('sounds/C.mp3'),
//         'Csharp': new Audio('sounds/Csharp.mp3'),
//         'D': new Audio('sounds/D.mp3'),
//         'Dsharp': new Audio('sounds/Dsharp.mp3'),
//         'E': new Audio('sounds/E.mp3'),
//         'F': new Audio('sounds/F.mp3'),
//         'Fsharp': new Audio('sounds/Fsharp.mp3'),
//         'G': new Audio('sounds/G.mp3'),
//         'Gsharp': new Audio('sounds/Gsharp.mp3'),
//         'A': new Audio('sounds/A.mp3'),
//         'Asharp': new Audio('sounds/Asharp.mp3'),
//         'B': new Audio('sounds/B.mp3'),
//         'C2': new Audio('sounds/C2.mp3')
//     };

//     const songs = [
//         ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C2'],
//         ['E', 'D', 'C', 'D', 'E', 'E', 'E'],
//         ['C', 'C', 'G', 'G', 'A', 'A', 'G']
//     ];

//     function playNote(note) {
//         const audio = notes[note];
//         audio.currentTime = 0;
//         audio.play();
//     }

//     function highlightKey(key) {
//         key.classList.add('playing');
//         setTimeout(() => {
//             key.classList.remove('playing');
//         }, 200);
//     }

//     function playSong(song) {
//         song.forEach((note, index) => {
//             setTimeout(() => {
//                 const keyElement = document.querySelector(`.key[data-note="${note}"]`);
//                 playNote(note);
//                 highlightKey(keyElement);
//             }, index * 500);
//         });
//     }

//     keys.forEach(key => {
//         key.addEventListener('click', () => {
//             const note = key.dataset.note;
//             playNote(note);
//             highlightKey(key);
//         });
//     });

//     document.addEventListener('keydown', e => {
//         const key = e.key.toUpperCase();
//         let note = null;
//         switch (key) {
//             case 'A':
//                 note = 'C';
//                 break;
//             case 'W':
//                 note = 'Csharp';
//                 break;
//             case 'S':
//                 note = 'D';
//                 break;
//             case 'E':
//                 note = 'Dsharp';
//                 break;
//             case 'D':
//                 note = 'E';
//                 break;
//             case 'F':
//                 note = 'F';
//                 break;
//             case 'T':
//                 note = 'Fsharp';
//                 break;
//             case 'G':
//                 note = 'G';
//                 break;
//             case 'Y':
//                 note = 'Gsharp';
//                 break;
//             case 'H':
//                 note = 'A';
//                 break;
//             case 'U':
//                 note = 'Asharp';
//                 break;
//             case 'J':
//                 note = 'B';
//                 break;
//             case 'K':
//                 note = 'C2';
//                 break;
//         }

//         if (note) {
//             const keyElement = document.querySelector(`.key[data-note="${note}"]`);
//             playNote(note);
//             highlightKey(keyElement);
//         }
//     });

//     document.getElementById('playRandom').addEventListener('click', () => {
//         const randomIndex = Math.floor(Math.random() * songs.length);
//         playSong(songs[randomIndex]);
//     });
// });
