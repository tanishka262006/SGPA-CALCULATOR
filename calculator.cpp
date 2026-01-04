#include <iostream>

using namespace std;

int main() 
{
    int credits[11] = {4,3,1,3,2,2,1,2,2,1,1}; // Total = 22
    char grade;
    int gradePoint;
    float totalPoints = 0;

    cout << "SEMESTER 3 SGPA CALCULATOR\n";

    cout<<"\nEnter grade points for signals and systems: ";


        switch(grade) {
            case 'O': gradePoint = 10; break;
            case 'A': gradePoint = 9; break;
            case 'A+': gradePoint = 8; break;
            case 'B+': gradePoint = 7; break;
            case 'B': gradePoint = 6; break;
            case 'C': gradePoint = 5; break;
            case 'P': gradePoint = 4; break;
            
            default:  gradePoint = 0;
        }

        totalPoints += credits[i] * gradePoint;
    }

    float sgpa = totalPoints / 22;
    cout << "\nYour Semester 3 SGPA = " << sgpa << endl;

    return 0;
}
