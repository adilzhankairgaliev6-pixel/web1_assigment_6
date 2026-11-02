# My jQuery Portfolio — Web Assignment 6

## Student Info
- **Name:** Adilzhan Kairgaliyev
- **Group:** SE-2540
---

## Project Overview
An interactive personal portfolio page built with HTML, CSS and **jQuery 3.7.1**. The project demonstrates jQuery selectors, effects, DOM manipulation and animations.

---

## Tasks & Implementation

### Part 1. Getting Started with jQuery

- **Task 0. Setup:** Included jQuery from the CDN (`code.jquery.com`), wrote a `$(document).ready(function() { ... })` function and tested it by printing "jQuery is ready!" in the console.

<img width="420" height="117" alt="image" src="https://github.com/user-attachments/assets/f8fe7dd2-edc0-4e27-b6e1-65286316bdbe" />


- **Task 1. Selectors & CSS:** Created a profile section with the title "Welcome to My Portfolio", my name, a headline and a short introduction. Used tag (`h1`), ID (`#name`) and class (`.headline`) selectors, updated the greeting and headline with `.text()` and `.html()`, changed styles with `.css()`, and added buttons to switch between light and dark themes.

**Screenshots for Task 1:**

<img width="1008" height="359" alt="image" src="https://github.com/user-attachments/assets/17c2a30e-56ec-4abd-9955-6604b0792476" />
<img width="1009" height="355" alt="image" src="https://github.com/user-attachments/assets/181d73a6-7e45-4786-a8e8-093721ffeaa8" />

---

### Part 2. jQuery Effects

- **Task 2. Visibility Methods:** Built an "About Me" section with a biography, the status message "Currently learning jQuery!" and fun facts. The Hide, Show and Toggle buttons control the visibility of the status message and the fun facts using `.hide()`, `.show()` and `.toggle()`.

**Screenshots for Task 2:**
<img width="1041" height="291" alt="image" src="https://github.com/user-attachments/assets/9859d6c4-f9e2-4fd2-b76e-3c9dfaf75ec5" />
<img width="1011" height="432" alt="image" src="https://github.com/user-attachments/assets/0aef5a55-5a77-4c77-a921-be84855b97f5" />

- **Task 3. Fade Methods:** Added a gallery with three images. The buttons control them with `.fadeIn()`, `.fadeOut()` and `.fadeToggle()`.

**Screenshots for Task 3:**
<img width="1010" height="413" alt="image" src="https://github.com/user-attachments/assets/47302d19-ba05-4285-a3cc-0085b760c1b7" />
<img width="1029" height="210" alt="image" src="https://github.com/user-attachments/assets/ee4ab9c0-36c4-46fa-ae0d-328e83d2646c" />

- **Task 4. Slide Methods:** Created three clickable headings (Favorite Music, Movie and Fruit), each with a collapsible panel. Clicking a heading uses `.slideToggle()`, and extra buttons use `.slideUp()`, `.slideDown()` and `.slideToggle()` for all panels.

**Screenshots for Task 4:**
<img width="1020" height="415" alt="image" src="https://github.com/user-attachments/assets/4d458bad-cb50-4d43-bd52-51f1cb72c688" />
<img width="1025" height="655" alt="image" src="https://github.com/user-attachments/assets/a287f0ea-5e22-4211-b954-41fed4119600" />

---

### Part 3. DOM Manipulation with jQuery

- **Task 5. Add & Remove Elements:** Displayed a list of four technical skills (HTML, CSS, JavaScript, jQuery) with a text input and three buttons: "Add Skill" (`.append()`), "Prepend Skill" (`.prepend()`) and "Remove Skill" (`.remove()`). Empty skills are rejected and an error message is shown.

**Screenshots for Task 5:**
<img width="496" height="440" alt="image" src="https://github.com/user-attachments/assets/5e74bedb-8997-488d-8f90-1e0e2cd24769" />
<img width="547" height="475" alt="image" src="https://github.com/user-attachments/assets/1acb669f-9593-4a43-bc3a-e367b042b154" />
<img width="568" height="389" alt="image" src="https://github.com/user-attachments/assets/b379427e-b8e4-4161-97bd-84397c3e77bd" />


- **Task 6. Modifying Attributes:** Added a social media link and a button that switches its destination between GitHub and Instagram using `.attr("href", ...)`. The current URL is shown below the link.

**Screenshots for Task 6:**
<img width="1019" height="285" alt="image" src="https://github.com/user-attachments/assets/0771428f-ebb8-4d86-8b26-a69626703c3c" />
<img width="1019" height="300" alt="image" src="https://github.com/user-attachments/assets/eab4a136-719a-4fe2-a2ee-be2ac1942b20" />

- **Task 7. Form Interaction:** Created a form with Name and Email inputs. While the user types, the values are read with `.val()` and displayed live below the form with `.text()`. An email format hint is shown for invalid addresses.

**Screenshot for Task 7:**
<img width="999" height="446" alt="image" src="https://github.com/user-attachments/assets/adf88ffe-3ec1-482f-89a6-be8e1512459c" />

---

### Part 4. Animations

- **Task 8. Basic Animation:** Extended Task 5 with skill bars for HTML, CSS, JavaScript and jQuery. The bars start at zero width. The "Animate My Skills" button uses `.animate()` to expand each bar to a different width (90%, 80%, 65%, 50%). Clicking it again animates the bars back to zero.

**Screenshots for Task 8:**
<img width="958" height="226" alt="image" src="https://github.com/user-attachments/assets/a8de652a-3c47-4888-aed9-17a26aeaede0" />
<img width="980" height="248" alt="image" src="https://github.com/user-attachments/assets/85ec8b58-1020-41b7-9fc8-bd2f5a5b78d9" />

---

## Summary of Work Process
1. Started with the HTML structure: one `section` per task, so every part could be tested separately.
2. Wrote the base CSS (cards, buttons, bars) and set the skill bars and collapsible panels to be hidden or zero-width by default.
3. Added the jQuery code task by task, checking each one in the browser and the console before moving on.
4. Uploaded the project to GitHub, enabled GitHub Pages and added screenshots for all tasks.

## Technologies
HTML5, CSS3, JavaScript, jQuery 3.7.1
