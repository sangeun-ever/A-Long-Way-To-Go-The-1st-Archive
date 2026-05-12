const numberGrid = document.getElementById('numberGrid');
const photoContainer = document.getElementById('photoContainer');

const deco4 = document.getElementById('deco4');
const deco5 = document.getElementById('deco5');
const decoLink = document.getElementById('decoLink');

const buttonList = [
    "1", "2", "3", "4-5", "6", "7", "8", "9", "10",
    "11", "12", "13", "14", "15", "16", "17-18", "19", "20",
    "21", "22", "23", "24-25", "26", "27", "28-29", "30",
    "31", "32", "33", "34", "35", "36", "37", "38", "39", "40",
    "41", "42", "43", "44-45", "46", "47", "48", "49", "50",
    "51-54", "55", "56", "57", "58", "59-60", "61", "62", "63",
    "64", "65", "66", "67-68", "69", "70", "71-73", "74-75", "76",
    "77-78", "79"
];

buttonList.forEach(item => {
    const link = document.createElement('a');
    link.href = "#";

    if (item.includes('-')) {
        const parts = item.split('-');
        const start = parseInt(parts[0]);
        const end = parseInt(parts[1]);
        
        let label = "";
        for (let n = start; n <= end; n++) {
            label += `(${n}) `;
        }
        link.textContent = label.trim(); 
        
        const spanCount = end - start + 1;
        link.style.gridColumn = `span ${spanCount}`; 
        link.style.whiteSpace = "nowrap"; 
    } else {
        link.textContent = `(${item})`;
    }

    link.addEventListener('click', function(e) {
        e.preventDefault();
        link.classList.add('visited');

        deco5.style.display = 'none';
        decoLink.style.display = 'none'; 
        deco4.style.display = 'block';

        // ★ 핵심 변경: 기존 화면을 비우는 코드(innerHTML = '')를 삭제했습니다!
        // 이제 새 이미지를 부르면 기존 이미지들 위로 계속 쌓입니다.

        const img = document.createElement('img');
        img.src = `images/${item}.png`; 

        img.onload = () => {
            photoContainer.appendChild(img);
        };
    });

    numberGrid.appendChild(link);
});

const resetBtn = document.createElement('a');
resetBtn.href = "#";
resetBtn.textContent = "R";
resetBtn.className = "reset-btn"; 
numberGrid.appendChild(resetBtn);

resetBtn.addEventListener('click', function(e) {
    e.preventDefault();
    resetBtn.classList.add('visited');
    
    // ★ R(초기화) 버튼을 누를 때만 쌓인 사진들을 전부 삭제합니다.
    photoContainer.innerHTML = ''; 

    document.querySelectorAll('.number-grid a').forEach(link => {
        link.classList.remove('visited');
    });

    deco4.style.display = 'none';
    deco5.style.display = 'block';
    decoLink.style.display = 'block'; 
});