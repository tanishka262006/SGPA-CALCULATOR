document.addEventListener("DOMContentLoaded", function () {

    const credits = [3,1,3,2,3,2,2,1,2,2,1,1]; // Total = 22
    const grades = document.querySelectorAll(".grade");

    const gradeOptions = `
        <option value="0">Select</option>
        <option value="10">O</option>
        <option value="9">A+</option>
        <option value="8">A</option>
        <option value="7">B+</option>
        <option value="6">B</option>
        <option value="5">C</option>
        <option value="4">P</option>
        <option value="0">F</option>
    `;

    grades.forEach(g => g.innerHTML = gradeOptions);

    document.getElementById("calcBtn").addEventListener("click", function () {
        let totalPoints = 0;

        for (let i = 0; i < grades.length; i++) {
            let gp = Number(grades[i].value);
            totalPoints += credits[i] * gp;
        }

        let sgpa = totalPoints / 22;
        document.getElementById("result").innerText =
            "SGPA: " + sgpa.toFixed(2);
    });

});
