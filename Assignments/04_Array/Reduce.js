//* ตัวอย่างที่ 2 = การใช้สร้าง Function reduce()
/**
 * เป็น Function คำนวณผลรวมของผลไม้ทั้งหมด
 * @param {Array} array เป็น Array ของผลไม้
 * @returns {number} ผลรวมของไม้ผลไม้ทั้ง
 */
function sum_fruit(array = []) {
    /**
     * reduce = คำนวณผลรวมของ Array
     * @param {number} prev ผลรวมของจำนวนก่อนหน้า
     * @param {object} fruit element ของ Array ณ ที่นี่คือ Object
     * @param {number} currentIndex ตำแหน่งล่าสุดที่กำลัง execute
     * @param {Array<any>} array Array ของ Parrent
     * @returns {number} ผลรวมทั้งหมด
     */
    return array.reduce((prev, fruit, currentIndex, array) => {
        console.table(array);
        console.log(`CurrentIndex: ${currentIndex}`);
        console.log();
        return prev + fruit.qty;
    }, 0);
}

//* ตัวอย่างที่ 3 = การ Pass Array และเรียกใช้งาน Function sum_fruit
let s10_have_fruit = [
    { name: "🥭", qty: 5 },
    { name: "🥥", qty: 2 },
    { name: "🍓", qty: 3 },
]; //* กำนหดให้ s10_have_fruit เป็น Array Object ที่มัผลไม้

//* เรียกใช้ Function sum_fruit()
let sum_total_fruits = sum_fruit(s10_have_fruit);
console.log("================================");
console.log(`Sum: ${sum_total_fruits}`); //* Output: 10
