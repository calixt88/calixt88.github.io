const space = document.getElementById('space');
const numStars = 1000;
const maxStarSize = 5;
const blinkDelay = 10000; // in milliseconds

function createStar() {
  const star = document.createElement('div');
  star.className = 'star';
  star.style.width = `${Math.random() * maxStarSize}px`;
  star.style.height = star.style.width;
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  space.appendChild(star);

  // Blinking effect
  if (Math.random() < 0.1) {
    setInterval(() => {
      star.style.opacity = star.style.opacity === '1' ? '0.5' : '1';
    }, blinkDelay);
  }
}

function createStars() {
  for (let i = 0; i < numStars; i++) {
    createStar();
  }
}

createStars();

document.addEventListener("DOMContentLoaded", function() {
    const nameElement = document.getElementById('name');
    const cursorElement = document.getElementById('cursor');
    const nameText = "Calixt Charlebois";
    const jobTitle = document.createElement('span');
    let index = 0;
    let blinkCount = 0;

    // Cursor blink function
    function blinkCursor() {
        cursorElement.style.opacity = cursorElement.style.opacity === '1' ? '0' : '1';
        blinkCount++;
        if (blinkCount < 3) { // blink 5 times before typing
            setTimeout(blinkCursor, 500); // blink every 500ms
        } else {
            typeText();
        }
    }

    function typeText() {
        if (index < nameText.length) {
            cursorElement.before(nameText[index]);
            index++;
            setTimeout(typeText, 200); // Adjust this value to change typing speed
        } else {
            cursorElement.style.display = 'none'; // Hide the cursor after typing

            jobTitle.textContent = "Software Engineer";
            jobTitle.style.color = 'white';
            jobTitle.style.fontSize = '50px';
            jobTitle.style.fontFamily = 'monospace';
            
            jobTitle.style.position = 'absolute';
            jobTitle.style.top = '500px'; // Adjust this value to move the element down

            document.body.appendChild(jobTitle);
        }
    }

    // Start the cursor blinking effect
    blinkCursor();
});


aboutBtn = document.getElementById('aboutBtn');
aboutBtn.addEventListener("click", function() {
    window.scroll({
        top: 1250,
        behavior: 'smooth'
  });
  });


projectsBtn = document.getElementById('projectsBtn');
projectsBtn.addEventListener("click", function() {
    window.scroll({
        top: 2500,
        behavior: 'smooth'
  });
  });

skillsBtn = document.getElementById('skillsBtn');
skillsBtn.addEventListener("click", function() {
    window.scroll({
        top: 3750,
        behavior: 'smooth'
  });
  });

contactBtn = document.getElementById('contactBtn');
contactBtn.addEventListener("click", function() {
    window.scroll({
        top: 5000,
        behavior: 'smooth'
    });
    });
