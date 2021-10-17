let thai_fruit = ["🥭", "🍍", "🥥"]; //กำหนด Array ผลไม้ของประเทศไทย
let other_fruit = ["🍇", "🥝", "🫐"]; //กำหนด Array ของผลไม้นอกประเทศไทย

/*
    join() คือการนำ String หรือ Separator มาต่อกัน เพื่อให้เกิด Output รูปแบบใหม่
    return String
*/

//* ตัวอย่างที่ 1
//* นำ thai_fruit กับ other_fruit มารวมกันด้วย Separator และ join (แบ่ง) ด้วย comma (,)
let all_fruit = [...thai_fruit].join(...other_fruit);

console.log(all_fruit); //* Output: 🥭, 🍍, 🥥, 🍇, 🥝, 🫐

//*คำถาม join
//*มีตัวอย่าง Array ชุดตัวเลข [1,2,3,5] โจทย์ต้องการให้ชุดตัวเลขนี้ดำเนินการด้วย +

let numbers = [1, 2, 3, 5];
console.log(numbers.join("+"));

//*คำถาม reduce
//*จงหาจำนวนไอติมทั้งหมด ว่ามีทั้งหมดเท่าไหร่
let icreams = [
    { name: "vanilla", qty: 6 },
    { name: "chocolate", qty: 4 },
    { name: "lemon", qty: 10 },
];
console.log(
    `${icreams.reduce((prev, curv) => {
        console.log(prev);
        return prev + curv.qty;
    }, 0)} แท่ง`
);
