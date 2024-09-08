"use strict";
const educationSection = document.getElementById('education');
const skillsSection = document.getElementById('skills');
const workExperienceSection = document.getElementById('work-experience');
const toggleEducationBtn = document.getElementById('toggle-education');
const toggleSkillsBtn = document.getElementById('toggle-skills');
const toggleExperienceBtn = document.getElementById('toggle-experience');
toggleEducationBtn?.addEventListener('click', () => {
    console.log('clicked');
    educationSection?.classList.toggle('hidden');
});
toggleSkillsBtn?.addEventListener('click', () => {
    skillsSection?.classList.toggle('hidden');
});
toggleExperienceBtn?.addEventListener('click', () => {
    workExperienceSection?.classList.toggle('hidden');
});
