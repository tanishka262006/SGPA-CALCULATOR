document.addEventListener("DOMContentLoaded", function () {

    const credits = [3,1,3,1,2,1,2,2,1,2,2,1,1];
    const grades = document.querySelectorAll(".grade");

    const gradeOptions = `
         <option value="">select</option>
        <option value="10">O</option>
        <option value="9">A+</option>
        <option value="8">A</option>
        <option value="7">B+</option>
        <option value="6">B</option>
        <option value="5">C</option>
        <option value="4">P</option>
        <option value="0">F</option>
    `;

    // Always populate dropdowns
    grades.forEach(g => g.innerHTML = gradeOptions);

    document.getElementById("calcBtn").addEventListener("click", function () {

        if (grades.length !== credits.length) {
            alert("Subject–credit mismatch!");
            return;
        }

        let totalPoints = 0;
        let totalCredits = 0;

        for (let i = 0; i < grades.length; i++) {
            const gp = Number(grades[i].value);

            if (grades[i].value === "") {
                alert("Please select all grades!");
                return;
            }

            totalPoints += gp * credits[i];
            totalCredits += credits[i];
        }

        const sgpa = totalPoints / totalCredits;

        // Add this line at the end of your calculate function
const resultDiv = document.getElementById("result");
resultDiv.innerText = "Your SGPA: " + sgpa.toFixed(2);
resultDiv.style.display = "block"; // Show the box
    });
});
