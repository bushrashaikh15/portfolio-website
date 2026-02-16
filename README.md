Perfect. Here is your complete, professional README content without emojis. You can copy and replace your current README.md with this.

---

# Portfolio Website

## Overview

This is my personal portfolio website developed using React.js to showcase my skills, projects, resume, and contact information. The website is designed to be clean, responsive, and professional, reflecting my frontend development abilities and technical knowledge.

---

## Tech Stack

* React.js
* JavaScript (ES6+)
* HTML5
* CSS3
* Vercel (for deployment)

---

## Features

* Responsive design compatible with mobile, tablet, and desktop devices
* About Me section
* Projects section
* Skills section
* Resume download functionality
* Contact section
* Lazy loading of components and images
* Optimized production build for better performance

---

## Development Process

1. The project was initialized using Create React App.
2. The application was structured into reusable and modular React components.
3. Separate sections were created for About, Projects, Skills, Resume, and Contact.
4. CSS and Flexbox were used to design a responsive layout.
5. React.lazy() and Suspense were implemented to enable lazy loading of components.
6. The loading="lazy" attribute was added to images to improve load performance.
7. The overall layout and styling were refined to ensure consistency and usability.

---

## Optimization Techniques

* Generated a production build using the command:

  npm run build

* The production build automatically minified JavaScript and CSS files.

* Implemented lazy loading to reduce initial load time.

* Ensured clean component structure to improve maintainability and performance.

---

## Deployment Process

1. The completed project was pushed to a GitHub repository.
2. The GitHub repository was connected to Vercel.
3. Build settings were configured appropriately for a React application.
4. A branch mismatch issue (main vs master) was identified and resolved.
5. The project was successfully deployed on Vercel with HTTPS enabled by default.

Live Website:
[https://portfolio-website-i81h5rq1n-bushra-shaikhs-projects.vercel.app/](https://portfolio-website-i81h5rq1n-bushra-shaikhs-projects.vercel.app/)

---

## Challenges Faced and Solutions Implemented

### 1. 404 Deployment Error

Issue: After deployment, the website displayed a 404 NOT_FOUND error.
Solution: The issue was caused by incorrect branch configuration and missing project files in the deployed branch. The correct branch was pushed and Vercel settings were updated.

### 2. Git Branch Mismatch

Issue: The local project was on the master branch while Vercel was deploying from the main branch.
Solution: The correct branch was pushed to GitHub and deployment settings were aligned with the correct branch.

### 3. Framework Detection Issue

Issue: Vercel initially did not detect the React framework automatically.
Solution: The framework preset and build configuration were manually adjusted to use the correct build command and output directory.

---

## Project Structure

src/
public/
package.json
README.md

---

## Author

Bushra Shaikh


