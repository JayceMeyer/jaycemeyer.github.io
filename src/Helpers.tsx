export function initializeTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        && !document.documentElement.classList.contains("light")
        && !document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.add("dark")
    }
    else if (!document.documentElement.classList.contains("light")
        && !document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.add("light")
    }
}

export function toggleTheme() {
    if (document.documentElement.classList.contains("light")) {
        document.documentElement.classList.remove("light")
        document.documentElement.classList.add("dark")
    }
    else if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark")
        document.documentElement.classList.add("light")
    }
}

export function openResume() {
    window.open('assets/Jayce Meyer Resume (Oct 2024).pdf', '_blank');
}
