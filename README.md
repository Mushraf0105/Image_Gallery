# Responsive Image Gallery

This project is a responsive image gallery built as an assessment to practice CSS Grid, responsive layouts, JavaScript click events, and basic UI interaction. It features a modern, premium design with a lightbox preview functionality.

## Approach and Outcome

**Approach:**
1.  **Structure (HTML5):** Created a semantic foundation with a clear `header`, a `main` container for the gallery grid, and a hidden `div` structure for the lightbox modal.
2.  **Styling (CSS3):** Utilized **CSS Grid** to create a flexible, responsive layout that automatically adjusts the number of columns based on screen size (`grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`). Applied modern design principles including glassmorphism (backdrop filters), smooth hover transitions, and a dark theme aesthetic.
3.  **Interaction (JavaScript):** Implemented an event-driven script to handle user interactions. It listens for clicks on gallery thumbnails to dynamically update the lightbox image source and caption, then makes the modal visible. It handles multiple close triggers (X button, background click, Escape key) for a complete user experience.

**Outcome:**
A fully functional, responsive image gallery that provides a premium user experience. It successfully meets all project deliverables, including a minimum of 8 images, clickable previews, and appropriate accessibility measures.

---

## Technical Interview Questions

### Why is alt text important?
Alt text (alternative text) is critical for three main reasons:
1.  **Accessibility:** Screen readers use alt text to describe images to visually impaired users, ensuring the content is accessible to everyone.
2.  **SEO (Search Engine Optimization):** Search engine crawlers cannot "see" images. They rely on alt text to understand what the image depicts, which helps index the page correctly.
3.  **Fallback:** If an image fails to load due to a slow connection or a broken link, the browser displays the alt text in its place, providing context to the user.

### What is a CSS Grid?
CSS Grid is a powerful two-dimensional layout system built into CSS. Unlike Flexbox (which is primarily one-dimensional—either rows or columns), CSS Grid allows developers to manage layout in both columns and rows simultaneously. It enables the creation of complex, responsive web designs easily by defining grid tracks (rows and columns) and placing items within the resulting grid cells or areas.

### How can JavaScript show and hide an element?
JavaScript can show and hide elements by manipulating their CSS styles or classes in the Document Object Model (DOM). Common methods include:
1.  **Modifying Inline Styles:** Directly changing the `display` property (e.g., `element.style.display = 'none'` to hide, and `'block'` or `'flex'` to show) or the `opacity` property.
2.  **Toggling CSS Classes (Preferred):** Adding or removing a specific CSS class that controls visibility. For example, in this project, JavaScript uses `element.classList.add('active')` and `element.classList.remove('active')`. The `.active` class in the CSS file handles changing the opacity and `display` properties to show the modal smoothly.

---

## Deployment Configuration

Because this project consists entirely of static front-end assets (HTML, CSS, JavaScript), the deployment configuration is straightforward.

**Recommended Hosting Providers:**
*   Vercel
*   Netlify
*   GitHub Pages

**Deployment Steps:**
1.  Initialize a Git repository in the project folder.
2.  Commit all files (`index.html`, `styles.css`, `script.js`).
3.  Push the repository to a platform like GitHub.
4.  Connect the GitHub repository to the chosen hosting provider (e.g., Vercel).
5.  The provider will automatically detect the static files and deploy the site. No build steps (like `npm run build`) are required for this vanilla setup.

## Rollback Evidence / Strategy

In a production environment, rollback strategies rely on version control (Git) and the hosting platform's features.

**Scenario: A breaking change is deployed to the gallery (e.g., a JavaScript error breaks the modal).**

**Rollback Approach:**
1.  **Platform-level Rollback (Fastest):** Modern hosts like Vercel or Netlify keep a history of all deployments. Rolling back involves logging into the dashboard, navigating to the "Deployments" tab, locating the previous successful build, and clicking "Rollback" or "Publish this deploy". This instantly reverts the live site to the previous working state without touching code.
2.  **Git-level Rollback (Code Fix):** 
    *   Identify the bad commit.
    *   Use `git revert <commit-hash>` to create a new commit that undoes the changes of the faulty commit.
    *   Push the changes to the main branch. The hosting provider will automatically deploy the reverted code. 
    *   *(Evidence of this would be visible in the Git commit history showing a revert commit).*
