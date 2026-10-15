
/* =========================================
   ACADEMIC WORKS
========================================= */

const academicWorks = [
    {
        title: "Quiz",
        description: "Collection of my quizzes and short assessments.",
        files: [
            {
                name: "Quiz 1"
                path: "quiz1.jpeg.JPG",
            },
            {
                name: "Quiz 2",
                path: "quiz1.jpeg.JPG"
            },
            {
                name: "Quiz Picture",
                path: "quiz1.jpeg.JPG"
            }
        ]
    },

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

    {
        title: "Laboratory",
        description: "My programming laboratory activities and outputs.",
        files: []
    },

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


/* =========================================
   CREATE CATEGORY CARDS
========================================= */

const categoriesContainer = document.getElementById("categories");

function createCategories() {
    if (!categoriesContainer) {
        console.error(
            "Element with id='categories' was not found."
        );
        return;
    }

    categoriesContainer.innerHTML = "";

    academicWorks.forEach((category, index) => {
        const card = document.createElement("div");
        card.className = "category-card";

        const number = document.createElement("div");
        number.className = "category-number";
        number.textContent = String(index + 1).padStart(2, "0");

        const heading = document.createElement("h3");
        heading.textContent = category.title;

        const description = document.createElement("p");
        description.textContent = category.description;

        const workList = document.createElement("div");
        workList.className = "work-list";

        if (!category.files || category.files.length === 0) {
            const empty = document.createElement("div");
            empty.className = "empty";
            empty.textContent = "No files available yet.";
            workList.appendChild(empty);
        } else {
            category.files.forEach(file => {
                const item = document.createElement("div");
                item.className = "work-item";

                const name = document.createElement("span");
                name.className = "work-name";
                name.textContent = file.name;

                const link = document.createElement("a");
                link.className = "view-button";
                link.href = file.path;
                link.textContent = "View / Download";
                link.target = "_blank";
                link.rel = "noopener noreferrer";
                link.download = "";

                // Show a message if the file cannot be found.
                link.addEventListener("click", () => {
                    console.log("Opening file:", file.path);
                });

                item.appendChild(name);
                item.appendChild(link);
                workList.appendChild(item);
            });
        }

        // Display the number of files in each category.
        const count = document.createElement("p");
        count.className = "file-count";
        count.textContent =
            `${category.files.length} file(s) uploaded`;

        card.appendChild(number);
        card.appendChild(heading);
        card.appendChild(description);
        card.appendChild(count);
        card.appendChild(workList);

        categoriesContainer.appendChild(card);
    });
}


/* =========================================
   INITIALIZE
========================================= */

if (document.readyState === "loading") {
    document.addEventListener(
        "DOMContentLoaded",
        createCategories
    );
} else {
    createCategories();
}
