/**
 * 威力彩 遊戲介紹
 * https://www.taiwanlottery.com.tw/Superlotto638/index.asp
 */

// 取得亂數
function getRandom (x) {
    /**
     * 假設 x 為 38，產生的值就落在 0 - 37 之間，
     * 此時程式後面再加 1，
     * 代表產生的值落在 1 - 38 之間，
     * 再進行回傳
     */

    return Math.floor ( Math.random() * x ) + 1;
}

//產生威力彩號碼
function getPowerNum () {
    //放置第一區 6 個號碼的陣列變數 
    let arr = [];

    //一注威力彩號碼有 6 個所以我們讓迴圈跑六次
    for (let i = 1; i <= 6; i++) {
        /** 
         * 用 indexOf 判斷該數字之前有沒有出現過，
         * 如果有，就將 i 遞減，等於讓這輪重跑一次。
         */

        //隨機取得 1 ~ 38 之間的數字
        let num = getRandom(38);

        //檢查是否有出現過(重複)
        if ( arr.indexOf(num) > -1) {
            i--;
            continue;
        } else {
            //沒出現過的話就寫進陣列裡
            arr.push(num);
        }
    };
    // 回傳前做排序
    arr.sort(function(a, b) {
        // 從小排到大
        return a - b;
    });

    return arr;
};

// 取得第一區號碼
let arr = getPowerNum();
let num1 = arr.join(", ");

// 取得第二區號碼
let num2 = getRandom(8);

console.log(`第一區號碼為：${num1}，第二區號碼為：${num2}`);