function findGoodStudentGroups(n, marks) {
    let goodGroups = [];
    let totalMarks = marks.reduce((a, b) => a + b);

    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let groupSum = marks.slice(i, j + 1).reduce((a, b) => a + b, 0);
            let groupSize = j - i + 1;
            let groupAvg = groupSum / groupSize;
            let remainingSum = totalMarks - groupSum;
            let remainingSize = n - groupSize;
            let remainingAvg = remainingSize === 0 ? 0 : remainingSum / remainingSize;

            if (groupAvg > remainingAvg) {
                goodGroups.push([i + 1, j + 1]);
            }
        }
    }

    goodGroups.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1];
        }
        return a[0] - b[0];
    });

    console.log("no. of groups= " + goodGroups.length);
    goodGroups.forEach(group => {
        console.log("roll. no." + group[0] + " & " + "roll. no." + group[1]);
    });
}

// Example usage:
findGoodStudentGroups(3, [5, 8, 9]);


/*The above code is a JavaScript function called findGoodStudentGroups that takes two parameters:

n: the total number of students in the class (i.e., the length of the marks array)
marks: an array of marks where marks[i] represents the mark of student with roll number i+1
The function then calculates all possible groups of students (i.e., all possible combinations
of contiguous elements in the marks array) and determines which of these groups are "good" groups based
on the following condition:

A group is considered "good" if its average mark is greater than the average mark of the
remaining students in the class.
For each "good" group, the function stores the start and end roll numbers of the group in a
2D array called goodGroups. This array is then sorted based on the start and end roll numbers of
each group and the function outputs the total number of "good" groups and the start and end roll 
numbers of each "good" group in sorted order. */