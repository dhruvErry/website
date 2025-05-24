// Section content for each portfolio area
const portfolioContent = {
    projects: {
        title: "Projects",
        content: `
            <div class="window-content-main">
                <h2>My Projects</h2>
                <div class="content">
                    <p><strong>BOGO Bite App</strong> | Django·Python·React Native·JavaScript·MySQL (Jan 2024 — May 2024)</p>
                    <p>Developed full-stack mobile application for restaurants to offer and manage coupons. Engineered robust Django backend serving RESTful APIs for seamless communication with React Native frontend. Built endpoints for account authorization, password validation, and data storage/retrieval from MySQL database.</p>
                    <br>
                    <p><strong>Mastermind Online Game</strong> | Node.js·Express·socket.io·JavaScript·HTML·CSS (Aug 2020 — Dec 2020)</p>
                    <p>Adapted the popular board game Mastermind into a two-player full-stack application hosted online. It is the only multiplayer version of this game on the internet. Engineered backend using Express and frontend with HTML, CSS, and JavaScript, providing a graphical user interface inspired by the board game. Facilitated real-time communication between clients and server via sockets using socket.io, enabling two-player gameplay.</p>
                    <p><a href="https://mastermind-e730.onrender.com/" target="_blank">Play it here: https://mastermind-e730.onrender.com/</a></p>
                    <br>
                    <p><em>Source code of both projects can be viewed on GitHub.</em></p>
                </div>
            </div>
            <div class="window-bottom-controls">
                <button class="window-close-bottom js-window-close-bottom" data-section-to-close="projects">Close</button>
            </div>
        `
    },
    experience: {
        title: "Experience",
        content: `
            <div class="window-content-main">
                <h2>Work Experience</h2>
                <div class="content">
                    <p><strong>DSSI Researcher (Drew University Summer Science Institute)</strong> | Drew University | Client: Pure Green Cement (May 2024 — Jul 2024)</p>
                    <p>Developed Python script utilizing LLMs and CrewAI agents for large-scale name matching tasks across OpenAlex and Google Scholar databases, enabling seamless consolidation of millions of academic records. Improved script performance by 60% through optimized code logic and efficient algorithm design. Created and maintained custom PostgreSQL database for matched names from millions of rows of data.</p>
                    <br>
                    <p><strong>Software Engineering Intern</strong> | ConnectWise (American software company offering IT solutions) (Jun 2023 — Aug 2023)</p>
                    <p>Built a Dockerized full-stack web application using Django, Python, and HTML/CSS, hosted on Render, to automate the creation of offer letters for prospective candidates - resulting in a 40% reduction in letter generation time. Integrated Python libraries including openpyxl and pandas to extract candidate information from Excel files, calculate salary structures, and generate personalized Excel files containing offer letters. Streamlined HR operations by independently developing app for offer letter generation, now actively used for recruitment.</p>
                    <br>
                    <p><strong>Software Engineering Intern</strong> | Nykaa (Leading e-commerce platform for fashion and beauty) (Jun 2022 — Aug 2022)</p>
                    <p>Developed a machine learning program using Python's scikit-learn library to analyze product inventory in MySQL database, identifying over 1000 erroneous discount values. Created a program to generate suitable discount ranges for 1 million products, streamlining pricing strategies. Enhanced inventory management using data-driven solutions, improving accuracy and efficiency in product discounting.</p>
                </div>
            </div>
            <div class="window-bottom-controls">
                <button class="window-close-bottom js-window-close-bottom" data-section-to-close="experience">Close</button>
            </div>
        `
    },
    skills: {
        title: "Skills",
        content: `
            <div class="window-content-main">
                <h2>Technical Skills</h2>
                <div class="content">
                    <p><strong>Programming Languages:</strong></p>
                    <p>Python, Java, JavaScript, TypeScript, HTML, CSS, SQL, R, C</p>
                    <br>
                    <p><strong>Frameworks & Libraries:</strong></p>
                    <p>Django, RESTful APIs, scikit-learn, socket.io, Node.js, Express, React, CrewAI agents</p>
                    <br>
                    <p><strong>Tools & Platforms:</strong></p>
                    <p>Git, MySQL, PostgreSQL, Docker, Render, Agile methodology, Object-oriented design</p>
                </div>
            </div>
            <div class="window-bottom-controls">
                <button class="window-close-bottom js-window-close-bottom" data-section-to-close="skills">Close</button>
            </div>
        `
    },
    education: {
        title: "Education",
        content: `
            <div class="window-content-main">
                <h2>Educational Background</h2>
                <div class="content">
                    <p><strong>B.Sc. in Computer Science, Minors in Data Science and Business</strong> (Aug 2021 — May 2025)</p>
                    <p>Drew University, Madison, NJ</p>
                    <p>Cumulative GPA: 3.98/4.0 | Summa cum laude · Phi Beta Kappa · Dean's List Award (every semester)</p>
                    <br>
                    <p><strong>Relevant Coursework:</strong></p>
                    <p>Data Structures, Algorithms, Software Engineering, Databases, Systems and Architecture, Networking</p>
                </div>
            </div>
            <div class="window-bottom-controls">
                <button class="window-close-bottom js-window-close-bottom" data-section-to-close="education">Close</button>
            </div>
        `
    },
    contact: {
        title: "Contact Me",
        content: `
            <div class="window-content-main">
                <h2>Get In Touch</h2>
                <div class="content">
                    <p><strong>Name:</strong> Dhruv Erry</p>
                    <br>
                    <p><strong>Phone:</strong> <a href="tel:+19734623033">+1 (973) 462-3033</a></p>
                    <br>
                    <p><strong>Email:</strong> <a href="mailto:derry@drew.edu">derry@drew.edu</a></p>
                    <br>
                    <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/dhruverry" target="_blank">linkedin.com/in/dhruverry</a></p>
                    <br>
                    <p><strong>GitHub:</strong> <a href="https://github.com/dhruverry" target="_blank">github.com/dhruverry</a></p>
                </div>
            </div>
            <div class="window-bottom-controls">
                <button class="window-close-bottom js-window-close-bottom" data-section-to-close="contact">Close</button>
            </div>
        `
    }
};

const sectionIcons = {
    projects: "https://files.softicons.com/download/toolbar-icons/xp-artistic-icons-by-lokas-software/png/256x256/003-folder.png",
    experience: "https://files.softicons.com/download/web-icons/webtoys-icons-by-artdesigner.lv/png/64x64/Case.png",
    skills: "https://files.softicons.com/download/toolbar-icons/ravenna-3d-icons-by-double-j-design/png/256x256/Tools.png",
    education: "https://files.softicons.com/download/toolbar-icons/desktop-education-icons-by-aha-soft/png/96x96/education.png",
    contact: "https://files.softicons.com/download/application-icons/48x48-free-object-icons-by-aha-soft/png/48/Phone.png"
};

// Global variables for window management
let openWindows = new Map();
let minimizedWindows = new Set();
let currentZIndex = 1000;

// New globals for intelligent cascading window positions
let initialScreenCenterLeft = null;
let initialScreenCenterTop = null;
let currentCascadeLineBaseLeft = null;
let currentCascadeLineBaseTop = null;
let lastPlacedLeftInCurrentLine = 0;
let windowsInCurrentLineCount = 0;

const TITLE_AREA_WIDTH = 120; // Pixels of previous window title to keep visible
const MAX_WINDOWS_PER_LINE = 5; // Max windows in one horizontal line
const LINE_ADVANCE_Y_OFFSET = 40; // Pixels to move down for a new line
const LINE_ADVANCE_X_OFFSET = 30; // Pixels to offset new line from initial left

// Global functions for button onclick handlers
window.closeWindow = function(section) {
    closeWindowFunction(section);
};

window.minimizeWindow = function(section) {
    minimizeWindowFunction(section);
};

document.addEventListener('DOMContentLoaded', function() {
    const desktopIcons = document.querySelectorAll('.desktop-icon');
    const taskbarPrograms = document.querySelector('.taskbar .taskbar-programs');
    const startButton = document.querySelector('.start-button'); // Get Start button
    const startMenu = document.getElementById('start-menu'); // Get Start menu

    desktopIcons.forEach(icon => {
        icon.addEventListener('dblclick', function() {
            const section = this.getAttribute('data-section');
            const content = portfolioContent[section];
            if (content) {
                openWindow(content, section);
            }
        });
    });

    function createWindow(content, section) {
        const windowEl = document.createElement('div');
        windowEl.className = 'window';
        windowEl.id = `window-${section}`;
        windowEl.setAttribute('data-section', section);
        
        const fixedWindowWidth = 700; // Default window width
        const fixedWindowHeight = 500; // Default window height
        let newLeft, newTop;

        if (openWindows.size === 0 || initialScreenCenterLeft === null) {
            // This is the very first window OR a full reset scenario
            initialScreenCenterLeft = (window.innerWidth / 2) - (fixedWindowWidth / 2);
            initialScreenCenterTop = (window.innerHeight / 2) - (fixedWindowHeight / 2);
            
            currentCascadeLineBaseLeft = initialScreenCenterLeft;
            currentCascadeLineBaseTop = initialScreenCenterTop;
            
            newLeft = currentCascadeLineBaseLeft;
            newTop = currentCascadeLineBaseTop;
            windowsInCurrentLineCount = 1;
        } else {
            // Subsequent window
            newTop = currentCascadeLineBaseTop; // Keep same vertical alignment for the line
            newLeft = lastPlacedLeftInCurrentLine + TITLE_AREA_WIDTH;
            windowsInCurrentLineCount++;

            // Check if this new window would go off-screen OR if we've hit max per line
            if ((newLeft + fixedWindowWidth > window.innerWidth - 20) || (windowsInCurrentLineCount > MAX_WINDOWS_PER_LINE)) {
                // Start a new "row" of cascade
                currentCascadeLineBaseTop += LINE_ADVANCE_Y_OFFSET;
                currentCascadeLineBaseLeft = initialScreenCenterLeft + LINE_ADVANCE_X_OFFSET;

                // Boundary check for the new line's top position
                if (currentCascadeLineBaseTop + fixedWindowHeight > window.innerHeight - 20) {
                    // If new line also goes too far down, reset to near initial screen center but further offset
                    initialScreenCenterTop += LINE_ADVANCE_Y_OFFSET / 2; // Nudge initial reference down slightly
                    initialScreenCenterLeft += LINE_ADVANCE_X_OFFSET; // Nudge initial reference right slightly
                    currentCascadeLineBaseTop = initialScreenCenterTop;
                    currentCascadeLineBaseLeft = initialScreenCenterLeft;
                }
                newLeft = currentCascadeLineBaseLeft;
                newTop = currentCascadeLineBaseTop;
                windowsInCurrentLineCount = 1;
            }
        }
        
        lastPlacedLeftInCurrentLine = newLeft; // Update for the next window in this line

        windowEl.style.left = `${Math.max(20, newLeft)}px`;
        windowEl.style.top = `${Math.max(20, newTop)}px`;
        windowEl.style.zIndex = ++currentZIndex;
        
        windowEl.innerHTML = `
            <div class="window-header">
                <div class="window-title-area">
                    <img src="${sectionIcons[section] || 'https://icons.iconarchive.com/icons/icojam/blue-bits/256/document-icon.png'}" alt="Icon" class="window-icon">
                    <span class="window-title">${content.title}</span>
                </div>
                <div class="window-controls">
                    <button class="window-btn minimize-btn" title="Minimize"></button>
                    <button class="window-btn close-btn" title="Close"></button>
                </div>
            </div>
            <div class="window-content">
                ${content.content} 
            </div>
        `;
        
        document.querySelector('.desktop').appendChild(windowEl);
        
        const minimizeBtn = windowEl.querySelector('.minimize-btn');
        const closeBtn = windowEl.querySelector('.close-btn');
        
        minimizeBtn.addEventListener('click', () => minimizeWindowFunction(section));
        closeBtn.addEventListener('click', () => closeWindowFunction(section));

        const bottomCloseBtn = windowEl.querySelector('.js-window-close-bottom');
        if (bottomCloseBtn) {
            bottomCloseBtn.addEventListener('click', function() {
                const sectionToClose = this.getAttribute('data-section-to-close');
                if (sectionToClose) {
                    closeWindowFunction(sectionToClose);
                }
            });
        }
        
        makeDraggable(windowEl);
        windowEl.addEventListener('mousedown', () => bringToFront(windowEl));
        makeResizable(windowEl);
        
        return windowEl;
    }

    function openWindow(content, section) {
        if (openWindows.has(section)) {
            const existingWindow = openWindows.get(section);
            if (minimizedWindows.has(section)) {
                restoreWindow(section);
            } else {
                bringToFront(existingWindow);
            }
            return;
        }
        
        const windowEl = createWindow(content, section);
        openWindows.set(section, windowEl);
        updateTaskbar(section, false, true);
        
        windowEl.classList.add('opening');
        setTimeout(() => windowEl.classList.remove('opening'), 400);
    }

    function bringToFront(windowEl) {
        windowEl.style.zIndex = ++currentZIndex;
        const section = windowEl.getAttribute('data-section');
        
        document.querySelectorAll('.taskbar-item').forEach(item => {
            item.classList.remove('active'); // Remove active from all first
        });
        
        // Then add active to the current one if it's not minimized
        const taskbarItem = document.querySelector(`.taskbar-slot .taskbar-item[data-window="${section}"]`);
        if (taskbarItem && !minimizedWindows.has(section)) {
            taskbarItem.classList.add('active');
        }
    }

    function updateTaskbar(section, isMinimized, isNewInstance = false) {
        let taskbarSlot = document.querySelector(`.taskbar-slot[data-section-slot="${section}"]`);
        let taskbarItem = taskbarSlot ? taskbarSlot.querySelector('.taskbar-item') : null;

        if (isNewInstance && !taskbarSlot) {
            // Create a new slot and append it for new window instances
            taskbarSlot = document.createElement('div');
            taskbarSlot.className = 'taskbar-slot';
            taskbarSlot.setAttribute('data-section-slot', section);
            taskbarSlot.style.display = 'flex'; // Make visible
            taskbarPrograms.appendChild(taskbarSlot); // This ensures order of opening
            // taskbarItem will be null, so it gets created below
        } else if (taskbarSlot && taskbarSlot.style.display === 'none') {
            // If slot exists but was hidden (e.g. window closed and reopened), make it visible
             taskbarSlot.style.display = 'flex';
        }
        
        if (!taskbarItem && taskbarSlot) { // Create item if it doesn't exist in the slot
            taskbarSlot.innerHTML = ''; 
            taskbarItem = document.createElement('div');
            taskbarItem.className = 'taskbar-item'; // Base class
            taskbarItem.setAttribute('data-window', section);
            taskbarItem.innerHTML = `
                <img src="${sectionIcons[section] || 'https://icons.iconarchive.com/icons/fatcow/farm-fresh/16/application-blue-icon.png'}" alt="Icon" class="taskbar-item-icon">
                <span class="taskbar-item-text">${portfolioContent[section].title}</span>
            `;
            
            taskbarItem.addEventListener('click', function() {
                const currentClickedSection = this.getAttribute('data-window');
                const windowEl = openWindows.get(currentClickedSection);

                if (minimizedWindows.has(currentClickedSection)) {
                    restoreWindow(currentClickedSection);
                } else if (windowEl) {
                    if (windowEl.style.zIndex == currentZIndex) { 
                        this.classList.add('active-and-clicked');
                        setTimeout(() => this.classList.remove('active-and-clicked'), 150);
                        minimizeWindowFunction(currentClickedSection);
                    } else { 
                        bringToFront(windowEl);
                    }
                }
            });
            taskbarSlot.appendChild(taskbarItem);
        }
        
        // Update style based on state for the specific item
        if (taskbarItem) {
            taskbarItem.className = `taskbar-item ${isMinimized ? 'minimized' : (openWindows.get(section)?.style.zIndex == currentZIndex ? 'active' : '')}`;
            // Ensure other taskbar items are not marked active if this one is becoming active
            if (taskbarItem.classList.contains('active')) {
                document.querySelectorAll(`.taskbar-item.active:not([data-window="${section}"])`).forEach(otherItem => {
                    otherItem.classList.remove('active');
                });
            }
        }
    }

    function minimizeWindowFunction(section) {
        const windowEl = openWindows.get(section);
        if (!windowEl || minimizedWindows.has(section)) return;
        
        const taskbarItem = document.querySelector(`.taskbar-slot[data-section-slot="${section}"] .taskbar-item`);
        if (taskbarItem) setMinimizePosition(windowEl, taskbarItem);
        
        windowEl.classList.add('minimizing');
        minimizedWindows.add(section);
        
        setTimeout(() => {
            windowEl.style.display = 'none';
            windowEl.classList.remove('minimizing');
            windowEl.style.removeProperty('--minimize-x');
            windowEl.style.removeProperty('--minimize-y');
            updateTaskbar(section, true);
        }, 400);
    }

    function restoreWindow(section) {
        const windowEl = openWindows.get(section);
        if (!windowEl || !minimizedWindows.has(section)) return;
        
        const taskbarItem = document.querySelector(`.taskbar-slot[data-section-slot="${section}"] .taskbar-item`);
        if (taskbarItem) setRestorePosition(windowEl, taskbarItem);
        
        windowEl.style.display = 'block';
        windowEl.classList.add('restoring');
        minimizedWindows.delete(section);
        
        setTimeout(() => {
            windowEl.classList.remove('restoring');
            windowEl.style.removeProperty('--restore-x');
            windowEl.style.removeProperty('--restore-y');
            bringToFront(windowEl);
            updateTaskbar(section, false);
        }, 400);
    }

    function setMinimizePosition(windowEl, taskbarItem) {
        const windowRect = windowEl.getBoundingClientRect();
        const taskbarRect = taskbarItem.getBoundingClientRect();
        const deltaX = (taskbarRect.left + taskbarRect.width / 2) - (windowRect.left + windowRect.width / 2);
        const deltaY = (taskbarRect.top + taskbarRect.height / 2) - (windowRect.top + windowRect.height / 2);
        windowEl.style.setProperty('--minimize-x', `${deltaX}px`);
        windowEl.style.setProperty('--minimize-y', `${deltaY}px`);
    }

    function setRestorePosition(windowEl, taskbarItem) {
        const windowRect = windowEl.getBoundingClientRect();
        const taskbarRect = taskbarItem.getBoundingClientRect();
        const deltaX = (taskbarRect.left + taskbarRect.width / 2) - (windowRect.left + windowRect.width / 2);
        const deltaY = (taskbarRect.top + taskbarRect.height / 2) - (windowRect.top + windowRect.height / 2);
        windowEl.style.setProperty('--restore-x', `${deltaX}px`);
        windowEl.style.setProperty('--restore-y', `${deltaY}px`);
    }

    function closeWindowFunction(section) {
        const windowEl = openWindows.get(section);
        if (!windowEl || windowEl.classList.contains('closing')) return;
        
        windowEl.classList.add('closing');
        
        setTimeout(() => {
            if (windowEl) windowEl.remove();
            openWindows.delete(section);
            minimizedWindows.delete(section);
            
            const taskbarSlot = document.querySelector(`.taskbar-slot[data-section-slot="${section}"]`);
            if (taskbarSlot) taskbarSlot.remove();

            // If all windows are closed, reset cascading state for the next first window
            if (openWindows.size === 0) {
                initialScreenCenterLeft = null; // Allows re-centering of the very next window
                initialScreenCenterTop = null;
                currentCascadeLineBaseLeft = null;
                currentCascadeLineBaseTop = null;
                lastPlacedLeftInCurrentLine = 0;
                windowsInCurrentLineCount = 0;
            }
        }, 400);
    }

    function makeDraggable(windowEl) {
        let isDragging = false, currentX, currentY, initialX, initialY;
        const windowHeader = windowEl.querySelector('.window-header');
        let animationFrameId = null;

        windowHeader.addEventListener('mousedown', e => {
            if (e.target.classList.contains('window-btn')) return;
            bringToFront(windowEl);
            const rect = windowEl.getBoundingClientRect();
            initialX = e.clientX - rect.left;
            initialY = e.clientY - rect.top;
            isDragging = true;
            windowEl.style.cursor = 'grabbing';
            windowEl.style.userSelect = 'none'; // Prevent text selection during drag
            document.body.style.cursor = 'grabbing';

            function onMouseMove(e_move) {
                if (!isDragging) return;
                currentX = e_move.clientX - initialX;
                currentY = e_move.clientY - initialY;

                if (animationFrameId) cancelAnimationFrame(animationFrameId);

                animationFrameId = requestAnimationFrame(() => {
                    windowEl.style.left = currentX + 'px';
                    windowEl.style.top = currentY + 'px';
                });
            }

            function onMouseUp() {
                if (animationFrameId) cancelAnimationFrame(animationFrameId);
                isDragging = false;
                windowEl.style.cursor = 'default';
                windowEl.style.userSelect = '';
                document.body.style.cursor = 'default';
                document.removeEventListener('mousemove', onMouseMove);
                document.removeEventListener('mouseup', onMouseUp);
            }

            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        });
    }

    function makeResizable(windowEl) {
        let isResizing = false;
        let currentResizeMode = null; // e.g., 'right', 'bottom', 'bottom-right'
        let lastMouseDownX, lastMouseDownY;
        let initialWidth, initialHeight, initialX, initialY;
        const edgeThreshold = 8; // Pixels from edge to trigger resize cursor
        const minWidth = 200;
        const minHeight = 150;
        let animationFrameId = null;

        windowEl.addEventListener('mousemove', e => {
            if (isResizing) return; // Don't change cursor while actively resizing

            const rect = windowEl.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            let onRightEdge = Math.abs(mouseX - rect.width) < edgeThreshold;
            let onBottomEdge = Math.abs(mouseY - rect.height) < edgeThreshold;

            if (onRightEdge && onBottomEdge) {
                windowEl.style.cursor = 'nwse-resize';
                currentResizeMode = 'bottom-right';
            } else if (onRightEdge) {
                windowEl.style.cursor = 'ew-resize';
                currentResizeMode = 'right';
            } else if (onBottomEdge) {
                windowEl.style.cursor = 'ns-resize';
                currentResizeMode = 'bottom';
            } else {
                windowEl.style.cursor = 'default';
                currentResizeMode = null;
            }
        });

        windowEl.addEventListener('mouseleave', () => {
            if (!isResizing) {
                windowEl.style.cursor = 'default';
                currentResizeMode = null;
            }
        });

        windowEl.addEventListener('mousedown', e => {
            // Do not trigger resize if clicking on scrollbars or window controls
            if (e.target !== windowEl && e.target.closest('.window-content-main, .window-header, .window-bottom-controls')){
                 if (!currentResizeMode || (e.target.closest('.window-header') && !e.target.classList.contains('window-btn'))) {
                     // if it's header but not a button, it means drag, not resize.
                 } else {
                    return;
                 }
            }
            
            if (!currentResizeMode) return; // Only start resize if a mode is set by mousemove
            if (e.target.classList.contains('window-btn')) return; // Don't resize when clicking window buttons
             // If the click is on the header and not a button, let drag handler take over
            if (e.target.closest('.window-header') && !e.target.classList.contains('window-btn')) {
                return;
            }


            isResizing = true;
            lastMouseDownX = e.clientX;
            lastMouseDownY = e.clientY;
            const rect = windowEl.getBoundingClientRect();
            initialWidth = rect.width;
            initialHeight = rect.height;
            initialX = rect.left;
            initialY = rect.top;
            
            windowEl.style.userSelect = 'none';
            document.body.style.cursor = windowEl.style.cursor; // Use the cursor already set by mousemove

            function onDocumentMouseMove(e_move) {
                if (!isResizing) return;

                const deltaX = e_move.clientX - lastMouseDownX;
                const deltaY = e_move.clientY - lastMouseDownY;
                let newWidth = initialWidth;
                let newHeight = initialHeight;

                if (currentResizeMode === 'right' || currentResizeMode === 'bottom-right') {
                    newWidth = initialWidth + deltaX;
                }
                if (currentResizeMode === 'bottom' || currentResizeMode === 'bottom-right') {
                    newHeight = initialHeight + deltaY;
                }

                newWidth = Math.max(newWidth, minWidth);
                newHeight = Math.max(newHeight, minHeight);

                if (animationFrameId) cancelAnimationFrame(animationFrameId);
                animationFrameId = requestAnimationFrame(() => {
                    if (currentResizeMode === 'right' || currentResizeMode === 'bottom-right') {
                        windowEl.style.width = `${newWidth}px`;
                    }
                    if (currentResizeMode === 'bottom' || currentResizeMode === 'bottom-right') {
                        windowEl.style.height = `${newHeight}px`;
                    }
                });
            }

            function onDocumentMouseUp() {
                if (animationFrameId) cancelAnimationFrame(animationFrameId);
                isResizing = false;
                windowEl.style.userSelect = '';
                document.body.style.cursor = 'default';
                // Keep windowEl.style.cursor as it might be over an edge, let mousemove reset it.
                document.removeEventListener('mousemove', onDocumentMouseMove);
                document.removeEventListener('mouseup', onDocumentMouseUp);
            }

            document.addEventListener('mousemove', onDocumentMouseMove);
            document.addEventListener('mouseup', onDocumentMouseUp);
        });
    }

    function updateClock() {
        const now = new Date();
        document.getElementById('clock').textContent = now.toLocaleTimeString('en-US', {
            hour12: false, hour: '2-digit', minute: '2-digit'
        });
    }
    updateClock();
    setInterval(updateClock, 1000);

    // Start Menu Toggle Logic
    if (startButton && startMenu) {
        startButton.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent click from closing menu immediately
            startMenu.classList.toggle('start-menu-open');
            // Optional: change start button appearance when menu is open
            if (startMenu.classList.contains('start-menu-open')) {
                startButton.classList.add('active');
            } else {
                startButton.classList.remove('active');
            }
        });

        // Close Start Menu if clicking outside
        document.addEventListener('click', (event) => {
            if (startMenu.classList.contains('start-menu-open') && !startMenu.contains(event.target) && event.target !== startButton && !startButton.contains(event.target)) {
                startMenu.classList.remove('start-menu-open');
                startButton.classList.remove('active');
            }
        });

        // Close Start Menu with Escape key
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && startMenu.classList.contains('start-menu-open')) {
                startMenu.classList.remove('start-menu-open');
                startButton.classList.remove('active');
            }
        });

        // Prevent clicks inside the start menu from closing it via the document listener
        startMenu.addEventListener('click', (event) => {
            event.stopPropagation();
            // Add logic here if you want menu items to do something and then close the menu
            // For example, if an item is clicked: 
            // startMenu.classList.remove('start-menu-open');
            // startButton.classList.remove('active');
        });
    }

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            const topWindow = Array.from(openWindows.values())
                .filter(w => !minimizedWindows.has(w.getAttribute('data-section')))
                .sort((a, b) => parseInt(b.style.zIndex) - parseInt(a.style.zIndex))[0];
            if (topWindow) closeWindowFunction(topWindow.getAttribute('data-section'));
        }
    });
}); 