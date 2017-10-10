const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60, 75, 56, 75]
const grades = { "A": 0, "B": 0, "C":0,"D":0,"F":0} // You'll need to change this line of code

let convertScoresToGrades = (function() {

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
    };
}());

grades.gradingScale  = ['A', 'B', 'C','D', 'F'];

//print out the grades and frequencies
grades.getGradeFrequency = function() {
    // Limit the properties to only the true grade range
    
    for(let grade in grades) {
        let inScale = this.gradingScale.indexOf(grade) > -1;
        
        if (inScale) {
            console.log(`${grade}: ${grades[grade]}`);
        }
    }
};

// Functions that require the score
grades.getMinScore = (scores) => scores.sort()[0];
grades.getMaxScore = (scores) => scores.sort((f,l) => l-f)[0];

// Returns the highest property value among the grade scales
grades.maxGradeFrequency = function() {
    //Grades with max count
    let currentGradeCount = 0;
    for(let grade in grades) {
        let inScale = this.gradingScale.indexOf(grade) > -1;
        if (grades[grade] > currentGradeCount && inScale) {
            currentGradeCount = grades[grade];
        }
    }
    return currentGradeCount;
};


// Returns the lowest # of students that received a grade
grades.minGradeFrequency = function() {
    //Capture the least occurring frequency
    let minCount = this.maxGradeFrequency();
    
    for(let grade in grades) {
        let inScale = this.gradingScale.indexOf(grade) > -1;
        if (grades[grade] < minCount && inScale) {
            minCount = grades[grade];
        }
    }
    return minCount;
};

// Returns an array of the grades that had the highest number
// of students. All grades in the array will have the same
// number of students
grades.maxFrequencyGrades = function() {
    
    let maxCount = this.maxGradeFrequency();
    
    let gradesWithMaxCount = [];
    for(let grade in grades) {
        let inScale = this.gradingScale.indexOf(grade) > -1;
        if (grades[grade] === maxCount && inScale) {
            gradesWithMaxCount.push({"grade":grade,"freq": grades[grade]});
        }
    }
    return gradesWithMaxCount;
};

// Returns an array of the grades that had the lowest number
// of students. All grades in the array will have the same
// number of students
grades.minFrequencyGrades = function() {
    
    let minCount = this.minGradeFrequency();
    let minOccurances = [];
    
    for(let grade in grades) {
        let inScale = this.gradingScale.indexOf(grade) > -1;
        if (grades[grade] === minCount && inScale) {
            minOccurances.push({"grade":grade,"freq": grades[grade]});
        }
    }
    return minOccurances;
};

// <--- OUTPUT --->
console.log("How many of each grade:")
grades.getGradeFrequency();
console.log(`Lowest score: ${grades.getMinScore(scores)}`);
console.log(`Highest score: ${grades.getMaxScore(scores)}`);
console.log(`Grade(s) achieved by the most students, ${grades.maxGradeFrequency()} each:`);
console.log(grades.maxFrequencyGrades());
console.log(`The fewest students achieved, ${grades.minGradeFrequency()} each:`);
console.log(grades.minFrequencyGrades());
