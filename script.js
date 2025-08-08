// Section content for each portfolio area
const portfolioContent = {
    projects: {
        title: "Projects",
        type: "folder",
        items: [
            {
                id: "proj-codenames",
                title: "AI Codenames Online Game (Ongoing)",
                content: `
                    <div class="window-content-main">
                        <h2>AI Codenames Online Game (Ongoing)</h2>
                        <div class="content">
                            <div class="tech-stack-container">
                                <div class="tech-tags">
                                    <span class="tech-tag">React</span>
                                    <span class="tech-tag">Node.js</span>
                                    <span class="tech-tag">Express</span>
                                    <span class="tech-tag">socket.io</span>
                                    <span class="tech-tag">OpenAI</span>
                                </div>
                            </div>
                            <ul style="margin-top: 15px; padding-left: 20px;">
                                <li style="margin-bottom: 10px;">Build a real-time multiplayer game using socket.io and Jotai, enabling live updates, team state management, and persistent sessions across page reloads, with a visually engaging UI</li>
                                <li style="margin-bottom: 10px;">Integrate OpenAI's API to generate smart clues based on target words and board context, simulating human spymaster</li>
                                <li style="margin-bottom: 10px;">Design a scalable room-based backend with role-based views, turn logic, and reconnection support for smooth gameplay</li>
                            </ul>
                            <br>
                            <p><a href="https://codenamesai.onrender.com" target="_blank" style="color: #0054e3; text-decoration: underline;">Live Demo (Render)</a></p>
                            <br>
                            <p><em>Source code can be viewed on GitHub.</em></p>
                        </div>
                    </div>
                    <div class="window-bottom-controls">
                        <button class="window-close-bottom js-window-close-bottom" data-section-to-close="projects-proj-codenames">Close</button>
                    </div>
                `
            },
            {
                id: "proj-mastermind",
                title: "Mastermind Online Game",
                content: `
                    <div class="window-content-main">
                        <h2>Mastermind Online Game</h2>
                        <div class="content">
                            <div class="tech-stack-container">
                                <div class="tech-tags">
                                    <span class="tech-tag">Node.js</span>
                                    <span class="tech-tag">Express</span>
                                    <span class="tech-tag">socket.io</span>
                                    <span class="tech-tag">JavaScript</span>
                                    <span class="tech-tag">HTML</span>
                                    <span class="tech-tag">CSS</span>
                                </div>
                            </div>
                            <p>Adapted the popular board game Mastermind into a two-player full-stack application hosted online. It is the only multiplayer version of this game on the internet. Engineered backend using Express and frontend with HTML, CSS, and JavaScript, providing a graphical user interface inspired by the board game. Facilitated real-time communication between clients and server via sockets using socket.io, enabling two-player gameplay.</p>
                            <p><a href="https://mastermind-e730.onrender.com/" target="_blank">Play it here: https://mastermind-e730.onrender.com/</a></p>
                            <br>
                            <p><em>Source code can be viewed on GitHub.</em></p>
                        </div>
                    </div>
                    <div class="window-bottom-controls">
                        <button class="window-close-bottom js-window-close-bottom" data-section-to-close="projects-proj-mastermind">Close</button>
                    </div>
                `
            }
        ]
    },
    experience: {
        title: "Experience",
        type: "folder",
        items: [
            {
                id: "exp-dssi",
                title: "DSSI Researcher (Pure Green Cement)",
                dateRange: "May 2024 — Jul 2024",
                content: `
                    <div class="window-content-main">
                        <h2>DSSI Researcher (Drew University Summer Science Institute)</h2>
                        <div class="content">
                            <p><em>Drew University | Client: Pure Green Cement</em></p>
                            <ul>
                                <li>Built multi-agent pipeline in Python utilizing LLMs and CrewAI agents for large-scale name matching across OpenAlex and Google Scholar, consolidating millions of academic records</li>
                                <li>Improved pipeline performance by 60% through parallel processing, prompt engineering, and optimized algorithm design</li>
                                <li>Maintained custom PostgreSQL database to manage millions of matched names, ensuring scalability and production readiness</li>
                            </ul>
                        </div>
                    </div>
                    <div class="window-bottom-controls">
                        <button class="window-close-bottom js-window-close-bottom" data-section-to-close="experience-exp-dssi">Close</button>
                    </div>
                `
            },
            {
                id: "exp-connectwise",
                title: "Software Engineering Intern (ConnectWise)",
                dateRange: "Jun 2023 — Aug 2023",
                content: `
                    <div class="window-content-main">
                        <h2>Software Engineering Intern</h2>
                        <div class="content">
                            <p><em>ConnectWise (American software company offering IT solutions)</em></p>
                            <ul>
                                <li>Automated offer letter generation, reducing turnaround time by 40% by building a Dockerized full‑stack web application (Python, Django, HTML/CSS) deployed on Render</li>
                                <li>Integrated Python libraries including <code>openpyxl</code> and <code>pandas</code> to extract candidate information from Excel, calculate salary structures, and generate personalized Excel files containing offer letters</li>
                                <li>Delivered a production‑ready internal system used daily by the HR team for recruitment; managed deployment, resolved issues, and iterated based on feedback</li>
                            </ul>
                        </div>
                    </div>
                    <div class="window-bottom-controls">
                        <button class="window-close-bottom js-window-close-bottom" data-section-to-close="experience-exp-connectwise">Close</button>
                    </div>
                `
            },
            {
                id: "exp-nykaa",
                title: "Software Engineering Intern (Nykaa)",
                dateRange: "Jun 2022 — Aug 2022",
                content: `
                    <div class="window-content-main">
                        <h2>Software Engineering Intern</h2>
                        <div class="content">
                            <p><em>Nykaa (Leading e‑commerce platform for fashion and beauty)</em></p>
                            <ul>
                                <li>Developed a machine learning program using Python's <code>scikit‑learn</code> to analyze product inventory in MySQL, identifying over 10,000 erroneous discount values</li>
                                <li>Created a program to generate suitable discount ranges for 1 million products, streamlining pricing strategies</li>
                                <li>Enhanced inventory management with data‑driven solutions, improving accuracy and efficiency in product discounting</li>
                            </ul>
                        </div>
                    </div>
                    <div class="window-bottom-controls">
                        <button class="window-close-bottom js-window-close-bottom" data-section-to-close="experience-exp-nykaa">Close</button>
                    </div>
                `
            }
        ]
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
        title: "Contact",
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
    },
    band: { // New section for Band
        title: "My Band",
        content: `
            <div class="window-content-main">
                <h2>Greyhound - My Blues & Rock Band</h2>
                <div class="content">
                    <div class="band-image-with-arrows">
                        <div class="scroll-arrow left" aria-hidden="true">↓</div>
                        <img src="https://i.ibb.co/HTXvFMrr/PT1.jpg" alt="Greyhound band performing" class="band-photo">
                        <div class="scroll-arrow right" aria-hidden="true">↓</div>
                    </div>
                    <p>We are Greyhound, a blues and rock band from Madison, NJ. We primarily play 1960s and 1970s blues, and some rock music from those decades. We have played gigs in the past with and without vocals.</p>
                    <p><strong>Check us out on YouTube and Instagram:</strong></p>
                    <div class="social-buttons-group">
                        <div class="social-link-button">
                            <img src="https://img.icons8.com/color/48/youtube-play.png" alt="YT" style="width: 20px; height: 20px; vertical-align: middle; margin-right: 8px;"><a href="https://www.youtube.com/channel/UCzB6EnLVQWWWYKmt3QTAf8w/" target="_blank">YouTube</a>
                        </div>
                        <div class="social-link-button">
                            <img src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="IG" style="width: 20px; height: 20px; vertical-align: middle; margin-right: 8px;"><a href="https://www.instagram.com/greyhound.the.band/" target="_blank">Instagram</a>
                        </div>
                    </div>
                    <p><strong>Past Performances (NJ):</strong></p>
                    <ul>
                        <li>Daddy Matty's BBQ (Madison, since shut down)</li>
                        <li>Stone and Rail (Glen Rock)</li>
                        <li>Blue Moon (South Amboy)</li>
                        <li>The Drew Pub (Madison)</li>
                        <li>Parkside Tavern (Morristown)</li>
                        <li>Ridgewood Eatery</li>
                        <li>Hamilton Pork (Jersey City)</li>
                        <li>Hamilton Inn (Jersey City)</li>
                    </ul>
                </div>
            </div>
            <div class="window-bottom-controls">
                <button class="window-close-bottom js-window-close-bottom" data-section-to-close="band">Close</button>
            </div>
        `
    }
};

const sectionIcons = {
    projects: "https://files.softicons.com/download/toolbar-icons/xp-artistic-icons-by-lokas-software/png/256x256/003-folder.png",
    experience: "https://files.softicons.com/download/web-icons/webtoys-icons-by-artdesigner.lv/png/64x64/Case.png",
    skills: "https://files.softicons.com/download/toolbar-icons/ravenna-3d-icons-by-double-j-design/png/256x256/Tools.png",
    education: "https://files.softicons.com/download/toolbar-icons/desktop-education-icons-by-aha-soft/png/96x96/education.png",
    contact: "https://files.softicons.com/download/application-icons/48x48-free-object-icons-by-aha-soft/png/48/Phone.png",
    band: "https://files.softicons.com/download/tv-movie-icons/back-to-the-future-icons-by-yellow-icon/png/256/guitar.png", // Updated icon for Band
    defaultFile: "https://icons.iconarchive.com/icons/custom-icon-design/mono-general-2/256/document-icon.png" // Default icon for files within folders
};

// (Removed: configurable Band photo URL) Using direct image link in content.

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
        icon.addEventListener('click', function() {
            const sectionKey = this.getAttribute('data-section'); // e.g., "projects"
            const sectionData = portfolioContent[sectionKey];
            if (sectionData) {
                // For top-level sections, the sectionKey is the idToOpen
                openWindow(sectionKey, sectionData.title, sectionData, sectionIcons[sectionKey]);
            }
        });
    });

    function createWindow(sectionId, windowTitle, htmlContent, iconUrl) {
        const windowEl = document.createElement('div');
        windowEl.className = 'window';
        windowEl.id = `window-${sectionId}`;
        windowEl.setAttribute('data-section', sectionId);
        windowEl.setAttribute('data-current-view', 'list'); 
        windowEl.setAttribute('data-base-folder-id', sectionId.split('-')[0]); 

        let fixedWindowWidth = 780; // Default width for folders
        if (sectionId === 'education') {
            fixedWindowWidth = 840; // Education window width
        } else if (sectionId === 'contact') {
            fixedWindowWidth = 450; // Contact window width
        } else if (sectionId === 'skills') {
            fixedWindowWidth = 690; // Skills window width
        } else if (sectionId === 'band') {
            fixedWindowWidth = 920; // Larger Band window width
        }

        let fixedWindowHeight = 500; // Default height
        if (sectionId === 'education') {
            fixedWindowHeight = 420; // Specific height for Education window
        } else if (sectionId === 'band') {
            fixedWindowHeight = 600; // Slightly shorter Band window
        }

        let newLeft, newTop;

        if (openWindows.size === 0 || initialScreenCenterLeft === null) {
            const desktopIconsAreaRightEdge = 20 + 80 + 20 + 80; // container.left + col1.width + col_gap + col2.width
            const marginFromIcons = 40; 
            initialScreenCenterLeft = desktopIconsAreaRightEdge + marginFromIcons;
            
            initialScreenCenterTop = (window.innerHeight / 2) - (fixedWindowHeight / 2); // Keep vertical centering
            
            currentCascadeLineBaseLeft = initialScreenCenterLeft;
            currentCascadeLineBaseTop = initialScreenCenterTop;
            newLeft = currentCascadeLineBaseLeft;
            newTop = currentCascadeLineBaseTop;
            windowsInCurrentLineCount = 1;
        } else {
            newTop = currentCascadeLineBaseTop; 
            newLeft = lastPlacedLeftInCurrentLine + TITLE_AREA_WIDTH;
            windowsInCurrentLineCount++;
            if ((newLeft + fixedWindowWidth > window.innerWidth - 20) || (windowsInCurrentLineCount > MAX_WINDOWS_PER_LINE)) {
                currentCascadeLineBaseTop += LINE_ADVANCE_Y_OFFSET;
                currentCascadeLineBaseLeft = initialScreenCenterLeft + LINE_ADVANCE_X_OFFSET; 
                if (currentCascadeLineBaseTop + fixedWindowHeight > window.innerHeight - 20) {
                    initialScreenCenterTop += LINE_ADVANCE_Y_OFFSET / 2; 
                    initialScreenCenterLeft += LINE_ADVANCE_X_OFFSET; 
                    currentCascadeLineBaseTop = initialScreenCenterTop;
                    currentCascadeLineBaseLeft = initialScreenCenterLeft;
                }
                newLeft = currentCascadeLineBaseLeft;
                newTop = currentCascadeLineBaseTop;
                windowsInCurrentLineCount = 1;
            }
        }
        // Override placement for Band window: top-right
        if (sectionId === 'band') {
            newLeft = Math.max(20, window.innerWidth - fixedWindowWidth - 20);
            newTop = 20;
        }
        lastPlacedLeftInCurrentLine = newLeft;
        windowEl.style.width = `${fixedWindowWidth}px`; 
        windowEl.style.height = `${fixedWindowHeight}px`; // This will now use the default 500px or any other specific height logic if added later
        windowEl.style.left = `${Math.max(20, newLeft)}px`;
        windowEl.style.top = `${Math.max(20, newTop)}px`;
        windowEl.style.zIndex = ++currentZIndex;
        
        windowEl.innerHTML = `
            <div class="window-header">
                <div class="window-title-area">
                    <img src="${iconUrl || sectionIcons.defaultFile}" alt="Icon" class="window-icon">
                    <span class="window-title">${windowTitle}</span>
                </div>
                <div class="window-controls">
                    <button class="window-btn minimize-btn" title="Minimize"></button>
                    <button class="window-btn close-btn" title="Close"></button>
                </div>
            </div>
            <div class="window-content">
                <div class="view-container"></div> <!-- Initial empty view container -->
                <div class="window-bottom-controls"></div> <!-- Sticky bottom controls area -->
            </div>`;
        
        document.querySelector('.desktop').appendChild(windowEl);
        
        const viewContainer = windowEl.querySelector('.view-container');
        const stickyBottomControls = windowEl.querySelector('.window-bottom-controls');

        // Parse the incoming htmlContent to separate main content and buttons
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = htmlContent;
        
        const mainContentElement = tempDiv.querySelector('.window-content-main, .folder-content-main');
        const buttonsFromHtmlContent = tempDiv.querySelectorAll('.window-bottom-controls > *');

        if (mainContentElement) {
            viewContainer.appendChild(mainContentElement.cloneNode(true));
        } else if (htmlContent.includes('<ul class="folder-items-list">')) { // Fallback for folder list if no main wrapper
             viewContainer.innerHTML = htmlContent; // Assume it's just the list then
        } else {
            // For simple content that might not have a .window-content-main wrapper
            // but also isn't a folder list, put it all in viewContainer.
            // The button handling below should still work if it has .window-bottom-controls
             viewContainer.innerHTML = htmlContent;
        }
        
        // Populate sticky bottom controls
        if (buttonsFromHtmlContent.length > 0) {
            buttonsFromHtmlContent.forEach(button => {
                const clonedButton = button.cloneNode(true);
                if (clonedButton.classList.contains('js-window-close-bottom')) {
                    clonedButton.addEventListener('click', function() {
                        const sectionToClose = this.getAttribute('data-section-to-close') || sectionId;
                        closeWindowFunction(sectionToClose);
                    });
                }
                stickyBottomControls.appendChild(clonedButton);
            });
        } else if (portfolioContent[sectionId] && portfolioContent[sectionId].type !== 'folder') {
            // For non-folder items that might not have predefined buttons in their HTML
            // Add a default close button
            const closeButton = document.createElement('button');
            closeButton.className = 'window-close-bottom js-window-close-bottom';
            closeButton.textContent = 'Close';
            closeButton.setAttribute('data-section-to-close', sectionId);
            closeButton.addEventListener('click', () => closeWindowFunction(sectionId));
            stickyBottomControls.appendChild(closeButton);
        }

        // Add event listeners for header buttons
        const minimizeBtn = windowEl.querySelector('.minimize-btn');
        const closeBtn = windowEl.querySelector('.close-btn');
        minimizeBtn.addEventListener('click', () => minimizeWindowFunction(sectionId)); 
        closeBtn.addEventListener('click', () => closeWindowFunction(sectionId)); 

        makeDraggable(windowEl);
        windowEl.addEventListener('mousedown', () => bringToFront(windowEl));
        makeResizable(windowEl);
        
        return windowEl;
    }

    function generateFolderListHTML(folderId, folderData) {
        let itemsHtml = '<div class="folder-content-main"><ul class="folder-items-list">';
        folderData.items.forEach(item => {
            itemsHtml += `<li data-item-id="${item.id}" data-parent-folder-id="${folderId}" class="folder-item">
                            <img src="${sectionIcons.defaultFile}" alt="File" class="folder-item-icon">
                            <div class="folder-item-text-content">
                                <span class="folder-item-title">${item.title}</span>
                                ${item.dateRange ? `<span class="folder-item-date">${item.dateRange}</span>` : ''}
                            </div>
                         </li>`;
        });
        itemsHtml += '</ul></div>';
        return itemsHtml;
    }

    // New Helper function to manage sticky bottom controls
    function updateStickyBottomControls(windowEl, currentSectionId, isItemView = false, itemData = null, parentFolderId = null) {
        const stickyBottomControls = windowEl.querySelector('.window-bottom-controls');
        if (!stickyBottomControls) return;
        stickyBottomControls.innerHTML = ''; // Clear existing buttons

        if (isItemView && itemData && parentFolderId) {
            // Add Back Button
            const backButtonImg = document.createElement('img');
            backButtonImg.className = 'folder-back-button';
            backButtonImg.src = 'https://preview.redd.it/whistler-xp-icons-redesigned-see-captions-v0-0u05lpyyffnc1.png?width=640&crop=smart&auto=webp&s=7f2276b769212d4621dada49eb1932abfd60a940';
            backButtonImg.alt = 'Back';
            backButtonImg.onclick = () => showFolderList(windowEl, parentFolderId);
            stickyBottomControls.appendChild(backButtonImg);

            // Add Close button (for the parent folder)
            const closeButton = document.createElement('button');
            closeButton.className = 'window-close-bottom js-window-close-bottom';
            closeButton.textContent = 'Close';
            // closeButton.setAttribute('data-section-to-close', parentFolderId); // Not needed as onclick is direct
            closeButton.onclick = () => closeWindowFunction(parentFolderId);
            stickyBottomControls.appendChild(closeButton);

        } else { // It's a Folder List view or a non-folder section
            const closeButton = document.createElement('button');
            closeButton.className = 'window-close-bottom js-window-close-bottom';
            closeButton.textContent = 'Close';
            // closeButton.setAttribute('data-section-to-close', currentSectionId); // Not needed
            closeButton.onclick = () => closeWindowFunction(currentSectionId);
            stickyBottomControls.appendChild(closeButton);
        }
    }

    function showFolderList(windowEl, folderId) {
        const folderData = portfolioContent[folderId];
        if (!windowEl || !folderData || folderData.type !== 'folder') return;

        const viewContainer = windowEl.querySelector('.view-container');
        if (!viewContainer) return;

        viewContainer.classList.add('content-fading');

        setTimeout(() => {
            viewContainer.innerHTML = generateFolderListHTML(folderId, folderData);
            windowEl.setAttribute('data-current-view', 'list');

            // Update sticky bottom controls for folder list view
            updateStickyBottomControls(windowEl, folderId, false);

            // Re-attach listeners for folder items
            viewContainer.querySelectorAll('.folder-item').forEach(itemEl => {
                itemEl.addEventListener('click', function() {
                    const pFolderId = this.getAttribute('data-parent-folder-id');
                    const itemId = this.getAttribute('data-item-id');
                    showItemInFolderWindow(windowEl, pFolderId, itemId);
                });
            });

            viewContainer.classList.remove('content-fading');
        }, 250); // Match CSS transition duration
    }

    function showItemInFolderWindow(windowEl, parentFolderId, itemId) {
        const parentData = portfolioContent[parentFolderId];
        const itemData = parentData ? parentData.items.find(i => i.id === itemId) : null;

        if (!windowEl || !itemData) return;

        const viewContainer = windowEl.querySelector('.view-container');
        if (!viewContainer) return;

        viewContainer.classList.add('content-fading');

        setTimeout(() => {
            // Parse itemData.content to get the main content for viewContainer
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = itemData.content;
            const mainContentForItem = tempDiv.querySelector('.window-content-main');
            
            if (mainContentForItem) {
                viewContainer.innerHTML = mainContentForItem.outerHTML;
            } else {
                viewContainer.innerHTML = itemData.content; // Fallback if no specific main wrapper
            }
            
            windowEl.setAttribute('data-current-view', 'item');
            windowEl.setAttribute('data-current-item-id', itemId);

            // Update sticky bottom controls for item view
            updateStickyBottomControls(windowEl, itemId, true, itemData, parentFolderId);
            
            viewContainer.classList.remove('content-fading');
        }, 250); // Match CSS transition duration
    }

    function openWindow(idToOpen, titleForWindow, data, iconForWindow) {
        if (openWindows.has(idToOpen)) {
            const existingWindow = openWindows.get(idToOpen);
            if (minimizedWindows.has(idToOpen)) {
                restoreWindow(idToOpen);
            } else {
                bringToFront(existingWindow);
                // If it's a folder window that was already open and showing an item, revert to list?
                // Or just bring to front. For now, just bring to front.
            }
            return;
        }

        let initialContentHtml;
        let mainContentForViewContainer;
        let buttonsForStickyControls = [];

        if (data.type === 'folder') {
            mainContentForViewContainer = generateFolderListHTML(idToOpen, data);
            // Buttons for folder list will be added by updateStickyBottomControls via createWindow -> showFolderList flow
        } else {
            // For non-folder types like Skills, Contact
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = data.content;
            const mainContentElement = tempDiv.querySelector('.window-content-main');
            const buttonsElements = tempDiv.querySelectorAll('.window-bottom-controls > *');

            if (mainContentElement) {
                mainContentForViewContainer = mainContentElement.outerHTML;
            } else {
                mainContentForViewContainer = data.content; // Assume whole content if no main part
            }
            
            buttonsElements.forEach(btn => buttonsForStickyControls.push(btn.cloneNode(true)));
        }
        
        // createWindow now expects full initialHTML and parses it.
        // For folders, generateFolderListHTML no longer includes bottom controls.
        // For non-folders, data.content should still have them.
        // createWindow's new logic will handle placing main content in viewContainer
        // and buttons in the sticky .window-bottom-controls.
        const windowEl = createWindow(idToOpen, titleForWindow, data.type === 'folder' ? mainContentForViewContainer : data.content, iconForWindow);
        
        // If it's a folder, ensure its specific close button is set up by updateStickyBottomControls
        // This is needed because createWindow's generic button handling might not wire it to the folderId correctly
        if (data.type === 'folder') {
            updateStickyBottomControls(windowEl, idToOpen, false);
        }
        
        openWindows.set(idToOpen, windowEl);
        // Taskbar only cares about the main idToOpen (folder ID or standalone section ID)
        updateTaskbar(idToOpen, titleForWindow, iconForWindow, false, true);
        
        // This needs to be scoped to the viewContainer now after windowEl is created and content is set
        const viewContainer = windowEl.querySelector('.view-container');
        if (viewContainer && data.type === 'folder') {
            viewContainer.querySelectorAll('.folder-item').forEach(itemEl => {
                itemEl.addEventListener('click', function() {
                    const parentFolderId = this.getAttribute('data-parent-folder-id');
                    const itemId = this.getAttribute('data-item-id');
                    // Get the window element for the parent folder
                    const folderWindowElement = openWindows.get(parentFolderId);
                    if (folderWindowElement) {
                        showItemInFolderWindow(folderWindowElement, parentFolderId, itemId);
                    }
                });
            });
        }

        windowEl.classList.add('opening');
        setTimeout(() => windowEl.classList.remove('opening'), 400);
    }

    function bringToFront(windowEl) {
        windowEl.style.zIndex = ++currentZIndex;
        const sectionId = windowEl.getAttribute('data-section');
        
        document.querySelectorAll('.taskbar-item').forEach(item => {
            item.classList.remove('active'); 
        });
        
        const taskbarItem = document.querySelector(`.taskbar-slot .taskbar-item[data-window="${sectionId}"]`);
        if (taskbarItem && !minimizedWindows.has(sectionId)) {
            taskbarItem.classList.add('active');
        }
    }

    // sectionId: The unique ID of the window (e.g., "projects" or "projects-proj-bogo-bite")
    // title: The title for the taskbar item
    // iconUrl: The icon URL for the taskbar item
    function updateTaskbar(sectionId, title, iconUrl, isMinimized, isNewInstance = false) {
        let taskbarSlot = document.querySelector(`.taskbar-slot[data-section-slot="${sectionId}"]`);
        let taskbarItem = taskbarSlot ? taskbarSlot.querySelector('.taskbar-item') : null;

        const displayTitle = title || sectionId; // Fallback to sectionId if title is not available
        const displayIcon = iconUrl || sectionIcons.defaultFile; // Fallback to defaultFile icon

        if (isNewInstance && !taskbarSlot) {
            taskbarSlot = document.createElement('div');
            taskbarSlot.className = 'taskbar-slot';
            taskbarSlot.setAttribute('data-section-slot', sectionId);
            taskbarSlot.style.display = 'flex';
            taskbarPrograms.appendChild(taskbarSlot);
        } else if (taskbarSlot && taskbarSlot.style.display === 'none') {
             taskbarSlot.style.display = 'flex';
        }
        
        if (!taskbarItem && taskbarSlot) { 
            taskbarSlot.innerHTML = ''; 
            taskbarItem = document.createElement('div');
            taskbarItem.className = 'taskbar-item';
            taskbarItem.setAttribute('data-window', sectionId);
            taskbarItem.innerHTML = `
                <img src="${displayIcon}" alt="Icon" class="taskbar-item-icon">
                <span class="taskbar-item-text">${displayTitle}</span>
            `;
            
            taskbarItem.addEventListener('click', function() {
                const currentClickedSectionId = this.getAttribute('data-window');
                const windowToInteractWith = openWindows.get(currentClickedSectionId);

                if (minimizedWindows.has(currentClickedSectionId)) {
                    restoreWindow(currentClickedSectionId);
                } else if (windowToInteractWith) {
                    // If the window is already the top one and not minimized, then minimize it
                    if (windowToInteractWith.style.zIndex == currentZIndex && !minimizedWindows.has(currentClickedSectionId)) { 
                        this.classList.add('active-and-clicked');
                        setTimeout(() => this.classList.remove('active-and-clicked'), 150);
                        minimizeWindowFunction(currentClickedSectionId);
                    } else { // Otherwise, bring it to front
                        bringToFront(windowToInteractWith);
                    }
                }
            });
            taskbarSlot.appendChild(taskbarItem);
        }
        
        // Update style based on state for the specific item
        if (taskbarItem) {
            const windowEl = openWindows.get(sectionId);
            const isActive = windowEl && windowEl.style.zIndex == currentZIndex && !minimizedWindows.has(sectionId);
            taskbarItem.className = `taskbar-item ${isMinimized ? 'minimized' : (isActive ? 'active' : '')}`;
            // Ensure other taskbar items are not marked active if this one is becoming active
            if (isActive) {
                document.querySelectorAll(`.taskbar-item.active:not([data-window="${sectionId}"])`).forEach(otherItem => {
                    otherItem.classList.remove('active');
                });
            }
        }
    }

    function minimizeWindowFunction(sectionId) { 
        const windowEl = openWindows.get(sectionId);
        if (!windowEl || minimizedWindows.has(sectionId)) return;
        
        const taskbarItem = document.querySelector(`.taskbar-slot[data-section-slot="${sectionId}"] .taskbar-item`);
        if (taskbarItem) setMinimizePosition(windowEl, taskbarItem);
        
        windowEl.classList.add('minimizing');
        minimizedWindows.add(sectionId);
        
        setTimeout(() => {
            windowEl.style.display = 'none';
            windowEl.classList.remove('minimizing');
            windowEl.style.removeProperty('--minimize-x');
            windowEl.style.removeProperty('--minimize-y');
            
            const title = windowEl.querySelector('.window-title').textContent;
            const iconSrc = windowEl.querySelector('.window-icon').src;
            updateTaskbar(sectionId, title, iconSrc, true);
        }, 400);
    }

    function restoreWindow(sectionId) { 
        const windowEl = openWindows.get(sectionId);
        if (!windowEl || !minimizedWindows.has(sectionId)) return;
        
        const taskbarItem = document.querySelector(`.taskbar-slot[data-section-slot="${sectionId}"] .taskbar-item`);
        if (taskbarItem) setRestorePosition(windowEl, taskbarItem);
        
        windowEl.style.display = 'block';
        windowEl.classList.add('restoring');
        minimizedWindows.delete(sectionId);
        
        setTimeout(() => {
            windowEl.classList.remove('restoring');
            windowEl.style.removeProperty('--restore-x');
            windowEl.style.removeProperty('--restore-y');
            bringToFront(windowEl);

            const title = windowEl.querySelector('.window-title').textContent;
            const iconSrc = windowEl.querySelector('.window-icon').src;
            updateTaskbar(sectionId, title, iconSrc, false);
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

    function closeWindowFunction(sectionId) { 
        const windowEl = openWindows.get(sectionId);
        if (!windowEl || windowEl.classList.contains('closing')) return;
        
        windowEl.classList.add('closing');
        
        setTimeout(() => {
            if (windowEl) windowEl.remove();
            openWindows.delete(sectionId);
            minimizedWindows.delete(sectionId);
            
            const taskbarSlot = document.querySelector(`.taskbar-slot[data-section-slot="${sectionId}"]`);
            if (taskbarSlot) taskbarSlot.remove();

            // If all windows are closed, reset cascading state
            if (openWindows.size === 0) {
                initialScreenCenterLeft = null; 
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
            // Close the topmost active (non-minimized) window
            const topWindow = Array.from(openWindows.values())
                .filter(w => w.style.display !== 'none' && !minimizedWindows.has(w.getAttribute('data-section')))
                .sort((a, b) => parseInt(b.style.zIndex) - parseInt(a.style.zIndex))[0];
            if (topWindow) {
                closeWindowFunction(topWindow.getAttribute('data-section'));
            }
        }
    });
});
