const scores = [82, 71, 62, 95, 55, 98, 88, 69, 72, 78, 84, 64, 58, 87, 60, 78, 85]
const grades = { "A": 0, "B": 0, "C":0,"D":0,"F":0} // You'll need to change this line of code

for (let i = 0; i < scores.length; i++) {
    /*
      If the score is greater than 90, increment grades.A by 1.

      You can use a series of `if/then` blocks, but you could
      also achieve this with a switch statement.
    */
    const grade = scores[i];
    
    switch (true) {
        case (grade >= 91):
            grades['A'] += 1;
            break;
        case (grade >= 81):
            grades['B'] += 1;
            break;
        case (grade >=71):
            grades['C'] += 1;
            break;
        case (grade >=61):
            grades['D'] += 1;
            break;
        default:
            grades['F'] += 1;
            break;
    }
}

console.log("How many of each grade:")
console.log(grades)
minScore = scores.sort();
console.log(`Lowest score: ${minScore[0]}`);
maxScore = scores.sort((f,l) => l-f);
console.log(`Highest score: ${maxScore[0]}`);

//Grades with max count
let currentGradeCount = 0;
for(let grade in grades) {
    if (grades[grade] > currentGradeCount) {
        currentGradeCount = grades[grade];
    }
}
let maxCount = currentGradeCount;

let gradesWithMaxCount = [];
for(let grade in grades) {
    if (grades[grade] === maxCount) {
        gradesWithMaxCount.push(grade);
    }
}
console.log("Grade(s) achieved by the most students:");
console.log(gradesWithMaxCount);

//Grades with min count
let currentMinGradeCount = scores.length;
for(let grade in grades) {
    if (grades[grade] < currentMinGradeCount) {
        currentMinGradeCount = grades[grade];
    }
}


let minCount = currentMinGradeCount;
let gradesWithMinCount = [];
for(let grade in grades) {
    if (grades[grade] === minCount) {
        gradesWithMinCount.push(grade);
    }
}
console.log("The fewest students achieved:");
console.log(gradesWithMinCount);



