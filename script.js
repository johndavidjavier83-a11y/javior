
const academicWorks = [
    // =========================
    // 5 QUIZZES
    // =========================
    {
        title: "Quiz 1",
        description: "My first quiz.",
        category: "Quiz",
        file: "files/quiz-1.pdf",
        type: "file"
    },
    {
        title: "Quiz 2",
        description: "My second quiz.",
        category: "Quiz",
        file: "files/quiz-2.pdf",
        type: "file"
    },
    {
        title: "Quiz 3",
        description: "My third quiz.",
        category: "Quiz",
        file: "files/quiz-3.pdf",
        type: "file"
    },
    {
        title: "Quiz 4",
        description: "My fourth quiz.",
        category: "Quiz",
        file: "files/quiz-4.pdf",
        type: "file"
    },
    {
        title: "Quiz 5",
        description: "My fifth quiz.",
        category: "Quiz",
        file: "files/quiz-5.pdf",
        type: "file"
    },

    // =========================
    // 5 LONG QUIZZES
    // =========================
    {
        title: "Long Quiz 1",
        description: "My first long quiz.",
        category: "Long Quiz",
        file: "files/long-quiz-1.pdf",
        type: "file"
    },
    {
        title: "Long Quiz 2",
        description: "My second long quiz.",
        category: "Long Quiz",
        file: "files/long-quiz-2.pdf",
        type: "file"
    },
    {
        title: "Long Quiz 3",
        description: "My third long quiz.",
        category: "Long Quiz",
        file: "files/long-quiz-3.pdf",
        type: "file"
    },
    {
        title: "Long Quiz 4",
        description: "My fourth long quiz.",
        category: "Long Quiz",
        file: "files/long-quiz-4.pdf",
        type: "file"
    },
    {
        title: "Long Quiz 5",
        description: "My fifth long quiz.",
        category: "Long Quiz",
        file: "files/long-quiz-5.pdf",
        type: "file"
    },

    // =========================
    // 5 ACTIVITIES
    // =========================
    {
        title: "Activity 1",
        description: "My first activity.",
        category: "Activity",
        file: "files/activity-1.pdf",
        type: "file"
    },
    {
        title: "Activity 2",
        description: "My second activity.",
        category: "Activity",
        file: "files/activity-2.pdf",
        type: "file"
    },
    {
        title: "Activity 3",
        description: "My third activity.",
        category: "Activity",
        file: "files/activity-3.pdf",
        type: "file"
    },
    {
        title: "Activity 4",
        description: "My fourth activity.",
        category: "Activity",
        file: "files/activity-4.pdf",
        type: "file"
    },
    {
        title: "Activity 5",
        description: "My fifth activity.",
        category: "Activity",
        file: "files/activity-5.pdf",
        type: "file"
    }
];

// Categories displayed on the portfolio
const categories = [
    "All Works",
    "Quiz",
    "Long Quiz",
    "Midterm Exam",
    "Final Exam",
    "Activity",
    "Project"
];

const categoryIcons = {
    "Quiz": "✎",
    "Long Quiz": "☷",
    "Midterm Exam": "▤",
    "Final Exam": "▣",
    "Activity": "✦",
    "Project": "⌘"
};

// Get the website elements
const filters = document.getElementById("filters");
const worksGrid = document.getElementById("worksGrid");
const emptyMessage = document.getElementById("emptyMessage");

let activeCategory = "All Works";

// Create category buttons
function createFilters() {
    filters.replaceChildren();

    categories.forEach(function(category) {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "filter-button";

        if (category === activeCategory) {
            button.classList.add("active");
        }

        button.textContent = category;
        button.setAttribute(
            "aria-pressed",
            String(category === activeCategory)
        );

        button.addEventListener("click", function() {
            activeCategory = category;
            createFilters();
            displayWorks();
        });

        filters.appendChild(button);
    });
}

// Display academic works
function displayWorks() {
    worksGrid.replaceChildren();

    const filteredWorks = academicWorks.filter(function(work) {
        return activeCategory === "All Works" ||
               work.category === activeCategory;
    });

    filteredWorks.forEach(function(work) {
        const card = document.createElement("article");
        card.className = "work-card";

        const icon = document.createElement("div");
        icon.className = "work-icon";
        icon.textContent = categoryIcons[work.category] || "▧";

        const category = document.createElement("p");
        category.className = "work-category";
        category.textContent = work.category;

        const title = document.createElement("h3");
        title.textContent = work.title;

        const description = document.createElement("p");
        description.className = "work-description";
        description.textContent = work.description;

        const actions = document.createElement("div");
        actions.className = "work-actions";

        const viewLink = document.createElement("a");
        viewLink.className = "work-link view";
        viewLink.href = work.file;
        viewLink.target = "_blank";
        viewLink.rel = "noopener noreferrer";
        viewLink.textContent =
            work.type === "image" ? "View Image ↗" : "View File ↗";

        const downloadLink = document.createElement("a");
        downloadLink.className = "work-link";
        downloadLink.href = work.file;
        downloadLink.setAttribute("download", "");
        downloadLink.textContent = "Download ↓";

        actions.appendChild(viewLink);
        actions.appendChild(downloadLink);

        card.appendChild(icon);
        card.appendChild(category);
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(actions);

        worksGrid.appendChild(card);
    });

    emptyMessage.hidden = filteredWorks.length > 0;
    worksGrid.hidden = filteredWorks.length === 0;
}

// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", function() {
    navbar.classList.toggle("open");
});

navbar.querySelectorAll("a").forEach(function(link) {
    link.addEventListener("click", function() {
        navbar.classList.remove("open");
    });
});

// Initialize the portfolio
createFilters();
displayWorks();
