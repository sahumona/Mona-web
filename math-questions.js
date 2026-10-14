// Math Questions - MPSI PYQ Style
const mathQuestions = [
  // ===== Arithmetic =====
  { q: "What is the LCM of 12, 15 and 20?", options: ["60", "120", "180", "240"], answer: 0, exp: "LCM = 60." },
  { q: "What is the HCF of 36 and 84?", options: ["6", "12", "18", "24"], answer: 1, exp: "HCF = 12." },
  { q: "Sum of first 25 natural numbers is?", options: ["300", "325", "350", "375"], answer: 1, exp: "n(n+1)/2 = 25×26/2 = 325." },
  { q: "Which is the smallest prime number?", options: ["0", "1", "2", "3"], answer: 2, exp: "2 is the smallest prime." },
  { q: "Simplify: 15 ÷ 3 × 2 + 8 − 4", options: ["14", "16", "18", "20"], answer: 0, exp: "5×2 + 8 − 4 = 10 + 4 = 14." },
  { q: "The sum of first 30 odd numbers is?", options: ["600", "750", "900", "1080"], answer: 2, exp: "n² = 30² = 900." },
  { q: "How many prime numbers are between 1 and 30?", options: ["8", "9", "10", "11"], answer: 2, exp: "2,3,5,7,11,13,17,19,23,29 → 10 primes." },
  { q: "If a number is divisible by both 4 and 6, it must be divisible by?", options: ["8", "12", "18", "24"], answer: 1, exp: "LCM of 4 and 6 = 12." },

  // ===== Percentage =====
  { q: "What is 15% of 480?", options: ["60", "68", "72", "76"], answer: 2, exp: "15% of 480 = 72." },
  { q: "If 40% of a number is 200, find the number.", options: ["400", "450", "500", "550"], answer: 2, exp: "x × 40/100 = 200 → x = 500." },
  { q: "A number increased from 250 to 300. What is the % increase?", options: ["15%", "20%", "25%", "30%"], answer: 1, exp: "(50/250) × 100 = 20%." },
  { q: "Population increased by 10% then decreased by 10%. Net change?", options: ["No change", "1% decrease", "1% increase", "2% decrease"], answer: 1, exp: "100 → 110 → 99, so 1% decrease." },
  { q: "If A's income is 25% more than B's, then B's income is how much % less than A's?", options: ["15%", "18%", "20%", "25%"], answer: 2, exp: "25/125 × 100 = 20%." },
  { q: "What is 0.25% of 800?", options: ["1", "2", "2.5", "4"], answer: 1, exp: "0.25% of 800 = 2." },

  // ===== Profit & Loss =====
  { q: "An article bought for ₹500 is sold for ₹600. Profit %?", options: ["15%", "18%", "20%", "25%"], answer: 2, exp: "Profit% = 100/500 × 100 = 20%." },
  { q: "An item sold at ₹720 gives 20% profit. Find CP.", options: ["₹550", "₹600", "₹620", "₹650"], answer: 1, exp: "CP = 720 / 1.2 = ₹600." },
  { q: "If SP = ₹900 and loss = 10%, then CP is?", options: ["₹950", "₹980", "₹1000", "₹1100"], answer: 2, exp: "CP = 900 / 0.9 = ₹1000." },
  { q: "Successive discounts of 10% and 20% are equal to single discount of?", options: ["28%", "30%", "32%", "25%"], answer: 0, exp: "100 × 0.9 × 0.8 = 72 → 28% discount." },
  { q: "Shopkeeper marks goods 40% above CP and gives 25% discount. Profit %?", options: ["5%", "10%", "15%", "20%"], answer: 0, exp: "MP=140, SP=140×0.75=105 → Profit 5%." },
  { q: "If an article is sold at ₹450 with 10% loss, what was its CP?", options: ["₹475", "₹500", "₹525", "₹550"], answer: 1, exp: "CP = 450 / 0.9 = ₹500." },

  // ===== Ratio & Proportion =====
  { q: "If A:B = 3:4 and B:C = 2:5, find A:C.", options: ["3:10", "3:8", "6:20", "6:10"], answer: 0, exp: "A:B:C = 6:8:20 → A:C = 3:10." },
  { q: "Divide ₹1200 in ratio 2:3:5. Largest share?", options: ["₹240", "₹360", "₹600", "₹500"], answer: 2, exp: "Largest = 5/10 × 1200 = ₹600." },
  { q: "If a:b = 2:3, then (a+b) : (a−b) = ?", options: ["5:1", "5:−1", "1:5", "−5:1"], answer: 0, exp: "a=2,b=3 → 5 : −1, standard 5:1." },

  // ===== Average =====
  { q: "Average of 5 numbers is 18. If one number 24 is removed, new average?", options: ["15", "16", "16.5", "17"], answer: 2, exp: "Sum=90, after=66, avg=66/4=16.5." },
  { q: "The average of first 10 even numbers is?", options: ["10", "11", "12", "13"], answer: 1, exp: "2+4+...+20=110, avg=11." },
  { q: "Average age of 30 students is 15. With teacher, avg becomes 16. Teacher's age?", options: ["45", "46", "47", "48"], answer: 1, exp: "31×16 − 30×15 = 496 − 450 = 46." },

  // ===== Simple & Compound Interest =====
  { q: "SI on ₹5000 at 8% per annum for 3 years?", options: ["₹1000", "₹1200", "₹1400", "₹1500"], answer: 1, exp: "SI = 5000×8×3/100 = ₹1200." },
  { q: "CI on ₹1000 at 10% per annum for 2 years?", options: ["₹200", "₹210", "₹220", "₹230"], answer: 1, exp: "A = 1000(1.1)² = 1210 → CI = ₹210." },
  { q: "In how many years will ₹800 amount to ₹1000 at 5% SI?", options: ["3 yrs", "4 yrs", "5 yrs", "6 yrs"], answer: 2, exp: "t = 200×100/(800×5) = 5 years." },
  { q: "Difference between SI and CI on ₹1000 at 10% for 2 years is?", options: ["₹5", "₹10", "₹15", "₹20"], answer: 1, exp: "Diff = P(R/100)² = 1000 × 0.01 = ₹10." },

  // ===== Algebra =====
  { q: "If a+b = 12 and ab = 32, then a² + b² = ?", options: ["72", "76", "80", "84"], answer: 2, exp: "(a+b)² − 2ab = 144 − 64 = 80." },
  { q: "If x + 1/x = 5, then x² + 1/x² = ?", options: ["21", "23", "25", "27"], answer: 1, exp: "(x+1/x)² − 2 = 25 − 2 = 23." },
  { q: "If a³ + b³ = 152 and a+b = 8, ab = 5, find a² − ab + b².", options: ["17", "18", "19", "20"], answer: 2, exp: "152 = 8 × X → X = 19." },
  { q: "The roots of x² − 7x + 12 = 0 are?", options: ["2, 5", "3, 4", "−3, −4", "1, 12"], answer: 1, exp: "(x−3)(x−4) = 0 → x = 3, 4." },

  // ===== Geometry & Mensuration =====
  { q: "The sum of the angles of a quadrilateral is?", options: ["180°", "270°", "360°", "540°"], answer: 2, exp: "360°." },
  { q: "Area of a circle with radius 14 cm (π = 22/7)?", options: ["576 cm²", "596 cm²", "616 cm²", "636 cm²"], answer: 2, exp: "πr² = 22/7 × 196 = 616 cm²." },
  { q: "The volume of a cube with side 5 cm?", options: ["75 cm³", "100 cm³", "125 cm³", "150 cm³"], answer: 2, exp: "5³ = 125 cm³." },
  { q: "The diagonal of a square with side 8 cm is?", options: ["8√2", "8√3", "16", "8"], answer: 0, exp: "a√2 = 8√2 cm." },
  { q: "The area of an equilateral triangle with side 6 cm is?", options: ["9√3 cm²", "6√3 cm²", "12√3 cm²", "18√3 cm²"], answer: 0, exp: "(√3/4) × 36 = 9√3 cm²." },
  { q: "The curved surface area of a cylinder (r=7, h=10, π=22/7) is?", options: ["420 cm²", "440 cm²", "460 cm²", "480 cm²"], answer: 1, exp: "2πrh = 2 × 22/7 × 7 × 10 = 440 cm²." }
];
