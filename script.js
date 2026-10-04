
const academicWorks = [

    
    {
        title: "Quiz",
        description: "Collection of my quizzes and short assessments.",
        files: [
            {
                name: "quiz 1",
                path: "quiz1.jpeg.JPG"
            },
            {
                name: "Quiz 2",
                path: 
            },
            {
                name: "Quiz Picture",
                path:
            }
        ]
    },

    // =========================
    // LONG QUIZ
    // =========================
    {
        title: "Long Quiz",
        description: "Collection of my long quizzes and assessments.",
        files: [
            {
                name: "Long Quiz 1",
                path: "files/long-quiz/long-quiz-1.pdf"
            },
            {
                name: "Long Quiz 2",
                path: "files/long-quiz/long-quiz-2.pdf"
            }
        ]
    },

    // =========================
    // MIDTERMS
    // =========================
    {
        title: "Midterms",
        description: "My midterm examination works and files.",
        files: [
            {
                name: "Midterm Examination",
                path: "files/midterms/midterm.pdf"
            },
            {
                name: "Midterm Picture",
                path: "files/midterms/midterm.jpg"
            }
        ]
    },

    // =========================
    // FINALS
    // =========================
    {
        title: "Finals",
        description: "My final examination works and requirements.",
        files: [
            {
                name: "Final Examination",
                path: "files/finals/final-examination.pdf"
            },
            {
                name: "Final Exam Picture",
                path: "files/finals/final-picture.jpg"
            }
        ]
    },

    // =========================
    // ACTIVITY
    // =========================
    {
        title: "Activity",
        description: "Collection of my academic activities and assignments.",
        files: [
            {
                name: "Activity 1",
                path: "DCIT 26_ Activity 1.docx (1).pdf"
            },
            {
                name: "Activity 2",
                path: "DCIT26_ Act 2.docx (1).pdf"
            },
            {
                name: "Activity Picture",
                path: "files/activity/activity-picture.jpg"
            }
        ]
    },

    // =========================
    // PROJECT
    // =========================
    {
        title: "Project",
        description: "Collection of my projects and major academic outputs.",
        files: [
            {
                name: "Project 1",
                path: "files/project/project-1.pdf"
            },
            {
                name: "Project Picture",
                path: "files/project/project-picture.jpg"
            }
        ]
    }
];


/* =====================================================
   CREATE CATEGORY CARDS
===================================================== */

const categoriesContainer = document.getElementById("categories");


function createCategories() {

    // Check if categories element exists
    if (!categoriesContainer) {
        console.error("ERROR: Element with id='categories' was not found.");
        return;
    }

    categoriesContainer.innerHTML = "";

    academicWorks.forEach((category, index) => {

        const card = document.createElement("div");

        card.className = "category-card";


        /* =================================================
           FILE LIST
        ================================================= */

        let fileHTML = "";

        if (!category.files || category.files.length === 0) {

            fileHTML = `
                <div class="empty">
                    No files available yet.
                </div>
            `;

        } else {

            category.files.forEach(file => {

                fileHTML += `
                    <div class="work-item">

                        <span class="work-name">
                            ${file.name}
                        </span>

                        <a
                            class="view-button"
                            href="${file.path}"
                            target="_blank"
                            download
                        >
                            View / Download
                        </a>

                    </div>
                `;

            });

        }


        /* =================================================
           CATEGORY CARD
        ================================================= */

        card.innerHTML = `

            <div class="category-number">
                ${String(index + 1).padStart(2, "0")}
            </div>

            <h3>
                ${category.title}
            </h3>

            <p>
                ${category.description}
            </p>

            <div class="work-list">
                ${fileHTML}
            </div>

        `;


        categoriesContainer.appendChild(card);

    });

}


/* =====================================================
   DISPLAY ACADEMIC WORKS
===================================================== */

createCategories();
```
