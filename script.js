// Complete scale data for all 12 major and minor scales
const SCALES_DATA = {
    major: {
        'C': {
            name: 'C Major',
            keySignature: 'No sharps or flats',
            degrees: [
                { degree: '1st', note: 'C', position: 'A3', shape: 'A-shape', quality: 'Major' },
                { degree: '2nd', note: 'D', position: 'E10', shape: 'E-shape', quality: 'Minor' },
                { degree: '3rd', note: 'E', position: 'E12', shape: 'E-shape', quality: 'Minor' },
                { degree: '4th', note: 'F', position: 'E1', shape: 'E-shape', quality: 'Major' },
                { degree: '5th', note: 'G', position: 'E3', shape: 'E-shape', quality: 'Major' },
                { degree: '6th', note: 'A', position: 'E5', shape: 'E-shape', quality: 'Minor' },
                { degree: '7th', note: 'B', position: 'E7', shape: 'E-shape', quality: 'Diminished' }
            ]
        },
        'C#': {
            name: 'C♯ Major',
            keySignature: '7 sharps: F♯, C♯, G♯, D♯, A♯, E♯, B♯',
            degrees: [
                { degree: '1st', note: 'C♯', position: 'A4', shape: 'A-shape', quality: 'Major' },
                { degree: '2nd', note: 'D♯', position: 'A6', shape: 'A-shape', quality: 'Minor' },
                { degree: '3rd', note: 'E♯', position: 'A8', shape: 'A-shape', quality: 'Minor' },
                { degree: '4th', note: 'F♯', position: 'E2', shape: 'E-shape', quality: 'Major' },
                { degree: '5th', note: 'G♯', position: 'E4', shape: 'E-shape', quality: 'Major' },
                { degree: '6th', note: 'A♯', position: 'E6', shape: 'E-shape', quality: 'Minor' },
                { degree: '7th', note: 'B♯', position: 'E8', shape: 'E-shape', quality: 'Diminished' }
            ]
        },
        'D': {
            name: 'D Major',
            keySignature: '2 sharps: F♯, C♯',
            degrees: [
                { degree: '1st', note: 'D', position: 'A5', shape: 'A-shape', quality: 'Major' },
                { degree: '2nd', note: 'E', position: 'A7', shape: 'A-shape', quality: 'Minor' },
                { degree: '3rd', note: 'F♯', position: 'A9', shape: 'A-shape', quality: 'Minor' },
                { degree: '4th', note: 'G', position: 'E3', shape: 'E-shape', quality: 'Major' },
                { degree: '5th', note: 'A', position: 'E5', shape: 'E-shape', quality: 'Major' },
                { degree: '6th', note: 'B', position: 'E7', shape: 'E-shape', quality: 'Minor' },
                { degree: '7th', note: 'C♯', position: 'A4', shape: 'A-shape', quality: 'Diminished' }
            ]
        },
        'D#': {
            name: 'D♯ Major',
            keySignature: '9 sharps: F♯, C♯, G♯, D♯, A♯, E♯, B♯, F𝄪, C𝄪',
            degrees: [
                { degree: '1st', note: 'D♯', position: 'A6', shape: 'A-shape', quality: 'Major' },
                { degree: '2nd', note: 'E♯', position: 'A8', shape: 'A-shape', quality: 'Minor' },
                { degree: '3rd', note: 'F𝄪', position: 'A10', shape: 'A-shape', quality: 'Minor' },
                { degree: '4th', note: 'G♯', position: 'E4', shape: 'E-shape', quality: 'Major' },
                { degree: '5th', note: 'A♯', position: 'E6', shape: 'E-shape', quality: 'Major' },
                { degree: '6th', note: 'B♯', position: 'E8', shape: 'E-shape', quality: 'Minor' },
                { degree: '7th', note: 'C𝄪', position: 'A5', shape: 'A-shape', quality: 'Diminished' }
            ]
        },
        'E': {
            name: 'E Major',
            keySignature: '4 sharps: F♯, C♯, G♯, D♯',
            degrees: [
                { degree: '1st', note: 'E', position: 'E12/E0', shape: 'E-shape', quality: 'Major' },
                { degree: '2nd', note: 'F♯', position: 'A9', shape: 'A-shape', quality: 'Minor' },
                { degree: '3rd', note: 'G♯', position: 'A11', shape: 'A-shape', quality: 'Minor' },
                { degree: '4th', note: 'A', position: 'E5', shape: 'E-shape', quality: 'Major' },
                { degree: '5th', note: 'B', position: 'E7', shape: 'E-shape', quality: 'Major' },
                { degree: '6th', note: 'C♯', position: 'A4', shape: 'A-shape', quality: 'Minor' },
                { degree: '7th', note: 'D♯', position: 'A6', shape: 'A-shape', quality: 'Diminished' }
            ]
        },
        'F': {
            name: 'F Major',
            keySignature: '1 flat: B♭',
            degrees: [
                { degree: '1st', note: 'F', position: 'E1', shape: 'E-shape', quality: 'Major' },
                { degree: '2nd', note: 'G', position: 'E3', shape: 'E-shape', quality: 'Minor' },
                { degree: '3rd', note: 'A', position: 'E5', shape: 'E-shape', quality: 'Minor' },
                { degree: '4th', note: 'B♭', position: 'A1', shape: 'A-shape', quality: 'Major' },
                { degree: '5th', note: 'C', position: 'A3', shape: 'A-shape', quality: 'Major' },
                { degree: '6th', note: 'D', position: 'A5', shape: 'A-shape', quality: 'Minor' },
                { degree: '7th', note: 'E', position: 'A7', shape: 'A-shape', quality: 'Diminished' }
            ]
        },
        'F#': {
            name: 'F♯ Major',
            keySignature: '6 sharps: F♯, C♯, G♯, D♯, A♯, E♯',
            degrees: [
                { degree: '1st', note: 'F♯', position: 'E2', shape: 'E-shape', quality: 'Major' },
                { degree: '2nd', note: 'G♯', position: 'A6', shape: 'A-shape', quality: 'Minor' },
                { degree: '3rd', note: 'A♯', position: 'A1', shape: 'A-shape', quality: 'Minor' },
                { degree: '4th', note: 'B', position: 'E7', shape: 'E-shape', quality: 'Major' },
                { degree: '5th', note: 'C♯', position: 'A4', shape: 'A-shape', quality: 'Major' },
                { degree: '6th', note: 'D♯', position: 'A6', shape: 'A-shape', quality: 'Minor' },
                { degree: '7th', note: 'E♯', position: 'A9', shape: 'A-shape', quality: 'Diminished' }
            ]
        },
        'G': {
            name: 'G Major',
            keySignature: '1 sharp: F♯',
            degrees: [
                { degree: '1st', note: 'G', position: 'E3', shape: 'E-shape', quality: 'Major' },
                { degree: '2nd', note: 'A', position: 'E5', shape: 'E-shape', quality: 'Minor' },
                { degree: '3rd', note: 'B', position: 'E7', shape: 'E-shape', quality: 'Minor' },
                { degree: '4th', note: 'C', position: 'A3', shape: 'A-shape', quality: 'Major' },
                { degree: '5th', note: 'D', position: 'A5', shape: 'A-shape', quality: 'Major' },
                { degree: '6th', note: 'E', position: 'A7', shape: 'A-shape', quality: 'Minor' },
                { degree: '7th', note: 'F♯', position: 'A9', shape: 'A-shape', quality: 'Diminished' }
            ]
        },
        'G#': {
            name: 'G♯ Major',
            keySignature: '8 sharps: F♯, C♯, G♯, D♯, A♯, E♯, B♯, F𝄪',
            degrees: [
                { degree: '1st', note: 'G♯', position: 'E4', shape: 'E-shape', quality: 'Major' },
                { degree: '2nd', note: 'A♯', position: 'E6', shape: 'E-shape', quality: 'Minor' },
                { degree: '3rd', note: 'B♯', position: 'E8', shape: 'E-shape', quality: 'Minor' },
                { degree: '4th', note: 'C♯', position: 'A4', shape: 'A-shape', quality: 'Major' },
                { degree: '5th', note: 'D♯', position: 'A6', shape: 'A-shape', quality: 'Major' },
                { degree: '6th', note: 'E♯', position: 'A8', shape: 'A-shape', quality: 'Minor' },
                { degree: '7th', note: 'F𝄪', position: 'A10', shape: 'A-shape', quality: 'Diminished' }
            ]
        },
        'A': {
            name: 'A Major',
            keySignature: '3 sharps: F♯, C♯, G♯',
            degrees: [
                { degree: '1st', note: 'A', position: 'E5', shape: 'E-shape', quality: 'Major' },
                { degree: '2nd', note: 'B', position: 'E7', shape: 'E-shape', quality: 'Minor' },
                { degree: '3rd', note: 'C♯', position: 'A4', shape: 'A-shape', quality: 'Minor' },
                { degree: '4th', note: 'D', position: 'A5', shape: 'A-shape', quality: 'Major' },
                { degree: '5th', note: 'E', position: 'A7', shape: 'A-shape', quality: 'Major' },
                { degree: '6th', note: 'F♯', position: 'A9', shape: 'A-shape', quality: 'Minor' },
                { degree: '7th', note: 'G♯', position: 'A11', shape: 'A-shape', quality: 'Diminished' }
            ]
        },
        'A#': {
            name: 'A♯ Major',
            keySignature: '10 sharps: F♯, C♯, G♯, D♯, A♯, E♯, B♯, F𝄪, C𝄪, G𝄪',
            degrees: [
                { degree: '1st', note: 'A♯', position: 'E6', shape: 'E-shape', quality: 'Major' },
                { degree: '2nd', note: 'B♯', position: 'E8', shape: 'E-shape', quality: 'Minor' },
                { degree: '3rd', note: 'C𝄪', position: 'A5', shape: 'A-shape', quality: 'Minor' },
                { degree: '4th', note: 'D♯', position: 'A6', shape: 'A-shape', quality: 'Major' },
                { degree: '5th', note: 'E♯', position: 'A8', shape: 'A-shape', quality: 'Major' },
                { degree: '6th', note: 'F𝄪', position: 'A10', shape: 'A-shape', quality: 'Minor' },
                { degree: '7th', note: 'G𝄪', position: 'A12', shape: 'A-shape', quality: 'Diminished' }
            ]
        },
        'B': {
            name: 'B Major',
            keySignature: '5 sharps: F♯, C♯, G♯, D♯, A♯',
            degrees: [
                { degree: '1st', note: 'B', position: 'E7', shape: 'E-shape', quality: 'Major' },
                { degree: '2nd', note: 'C♯', position: 'A4', shape: 'A-shape', quality: 'Minor' },
                { degree: '3rd', note: 'D♯', position: 'A6', shape: 'A-shape', quality: 'Minor' },
                { degree: '4th', note: 'E', position: 'A7', shape: 'A-shape', quality: 'Major' },
                { degree: '5th', note: 'F♯', position: 'A9', shape: 'A-shape', quality: 'Major' },
                { degree: '6th', note: 'G♯', position: 'A11', shape: 'A-shape', quality: 'Minor' },
                { degree: '7th', note: 'A♯', position: 'A1', shape: 'A-shape', quality: 'Diminished' }
            ]
        }
    },
    minor: {
        'C': {
            name: 'C Minor',
            keySignature: '3 flats: B♭, E♭, A♭',
            degrees: [
                { degree: '1st', note: 'C', position: 'A3', shape: 'A-shape', quality: 'Minor' },
                { degree: '2nd', note: 'D', position: 'A5', shape: 'A-shape', quality: 'Diminished' },
                { degree: '♭3rd', note: 'E♭', position: 'A6', shape: 'A-shape', quality: 'Major' },
                { degree: '4th', note: 'F', position: 'E1', shape: 'E-shape', quality: 'Minor' },
                { degree: '5th', note: 'G', position: 'E3', shape: 'E-shape', quality: 'Minor' },
                { degree: '♭6th', note: 'A♭', position: 'A4', shape: 'A-shape', quality: 'Major' },
                { degree: '♭7th', note: 'B♭', position: 'A1', shape: 'A-shape', quality: 'Major' }
            ]
        },
        'C#': {
            name: 'C♯ Minor',
            keySignature: '4 sharps: F♯, C♯, G♯, D♯',
            degrees: [
                { degree: '1st', note: 'C♯', position: 'A4', shape: 'A-shape', quality: 'Minor' },
                { degree: '2nd', note: 'D♯', position: 'A6', shape: 'A-shape', quality: 'Diminished' },
                { degree: '♭3rd', note: 'E', position: 'A7', shape: 'A-shape', quality: 'Major' },
                { degree: '4th', note: 'F♯', position: 'E2', shape: 'E-shape', quality: 'Minor' },
                { degree: '5th', note: 'G♯', position: 'E4', shape: 'E-shape', quality: 'Minor' },
                { degree: '♭6th', note: 'A', position: 'E5', shape: 'E-shape', quality: 'Major' },
                { degree: '♭7th', note: 'B', position: 'E7', shape: 'E-shape', quality: 'Major' }
            ]
        },
        'D': {
            name: 'D Minor',
            keySignature: '1 flat: B♭',
            degrees: [
                { degree: '1st', note: 'D', position: 'A5', shape: 'A-shape', quality: 'Minor' },
                { degree: '2nd', note: 'E', position: 'A7', shape: 'A-shape', quality: 'Diminished' },
                { degree: '♭3rd', note: 'F', position: 'E1', shape: 'E-shape', quality: 'Major' },
                { degree: '4th', note: 'G', position: 'E3', shape: 'E-shape', quality: 'Minor' },
                { degree: '5th', note: 'A', position: 'E5', shape: 'E-shape', quality: 'Minor' },
                { degree: '♭6th', note: 'B♭', position: 'A1', shape: 'A-shape', quality: 'Major' },
                { degree: '♭7th', note: 'C', position: 'A3', shape: 'A-shape', quality: 'Major' }
            ]
        },
        'D#': {
            name: 'D♯ Minor',
            keySignature: '6 sharps: F♯, C♯, G♯, D♯, A♯, E♯',
            degrees: [
                { degree: '1st', note: 'D♯', position: 'A6', shape: 'A-shape', quality: 'Minor' },
                { degree: '2nd', note: 'E♯', position: 'A8', shape: 'A-shape', quality: 'Diminished' },
                { degree: '♭3rd', note: 'F♯', position: 'E2', shape: 'E-shape', quality: 'Major' },
                { degree: '4th', note: 'G♯', position: 'E4', shape: 'E-shape', quality: 'Minor' },
                { degree: '5th', note: 'A♯', position: 'E6', shape: 'E-shape', quality: 'Minor' },
                { degree: '♭6th', note: 'B', position: 'E7', shape: 'E-shape', quality: 'Major' },
                { degree: '♭7th', note: 'C♯', position: 'A4', shape: 'A-shape', quality: 'Major' }
            ]
        },
        'E': {
            name: 'E Minor',
            keySignature: '1 sharp: F♯',
            degrees: [
                { degree: '1st', note: 'E', position: 'E12/E0', shape: 'E-shape', quality: 'Minor' },
                { degree: '2nd', note: 'F♯', position: 'A9', shape: 'A-shape', quality: 'Diminished' },
                { degree: '♭3rd', note: 'G', position: 'E3', shape: 'E-shape', quality: 'Major' },
                { degree: '4th', note: 'A', position: 'E5', shape: 'E-shape', quality: 'Minor' },
                { degree: '5th', note: 'B', position: 'E7', shape: 'E-shape', quality: 'Minor' },
                { degree: '♭6th', note: 'C', position: 'A3', shape: 'A-shape', quality: 'Major' },
                { degree: '♭7th', note: 'D', position: 'A5', shape: 'A-shape', quality: 'Major' }
            ]
        },
        'F': {
            name: 'F Minor',
            keySignature: '4 flats: B♭, E♭, A♭, D♭',
            degrees: [
                { degree: '1st', note: 'F', position: 'E1', shape: 'E-shape', quality: 'Minor' },
                { degree: '2nd', note: 'G', position: 'E3', shape: 'E-shape', quality: 'Diminished' },
                { degree: '♭3rd', note: 'A♭', position: 'A4', shape: 'A-shape', quality: 'Major' },
                { degree: '4th', note: 'B♭', position: 'A1', shape: 'A-shape', quality: 'Minor' },
                { degree: '5th', note: 'C', position: 'A3', shape: 'A-shape', quality: 'Minor' },
                { degree: '♭6th', note: 'D♭', position: 'A4', shape: 'A-shape', quality: 'Major' },
                { degree: '♭7th', note: 'E♭', position: 'A6', shape: 'A-shape', quality: 'Major' }
            ]
        },
        'F#': {
            name: 'F♯ Minor',
            keySignature: '3 sharps: F♯, C♯, G♯',
            degrees: [
                { degree: '1st', note: 'F♯', position: 'E2', shape: 'E-shape', quality: 'Minor' },
                { degree: '2nd', note: 'G♯', position: 'E4', shape: 'E-shape', quality: 'Diminished' },
                { degree: '♭3rd', note: 'A', position: 'E5', shape: 'E-shape', quality: 'Major' },
                { degree: '4th', note: 'B', position: 'E7', shape: 'E-shape', quality: 'Minor' },
                { degree: '5th', note: 'C♯', position: 'A4', shape: 'A-shape', quality: 'Minor' },
                { degree: '♭6th', note: 'D', position: 'A5', shape: 'A-shape', quality: 'Major' },
                { degree: '♭7th', note: 'E', position: 'A7', shape: 'A-shape', quality: 'Major' }
            ]
        },
        'G': {
            name: 'G Minor',
            keySignature: '2 flats: B♭, E♭',
            degrees: [
                { degree: '1st', note: 'G', position: 'E3', shape: 'E-shape', quality: 'Minor' },
                { degree: '2nd', note: 'A', position: 'E5', shape: 'E-shape', quality: 'Diminished' },
                { degree: '♭3rd', note: 'B♭', position: 'A1', shape: 'A-shape', quality: 'Major' },
                { degree: '4th', note: 'C', position: 'A3', shape: 'A-shape', quality: 'Minor' },
                { degree: '5th', note: 'D', position: 'A5', shape: 'A-shape', quality: 'Minor' },
                { degree: '♭6th', note: 'E♭', position: 'A6', shape: 'A-shape', quality: 'Major' },
                { degree: '♭7th', note: 'F', position: 'E1', shape: 'E-shape', quality: 'Major' }
            ]
        },
        'G#': {
            name: 'G♯ Minor',
            keySignature: '5 sharps: F♯, C♯, G♯, D♯, A♯',
            degrees: [
                { degree: '1st', note: 'G♯', position: 'E4', shape: 'E-shape', quality: 'Minor' },
                { degree: '2nd', note: 'A♯', position: 'E6', shape: 'E-shape', quality: 'Diminished' },
                { degree: '♭3rd', note: 'B', position: 'E7', shape: 'E-shape', quality: 'Major' },
                { degree: '4th', note: 'C♯', position: 'A4', shape: 'A-shape', quality: 'Minor' },
                { degree: '5th', note: 'D♯', position: 'A6', shape: 'A-shape', quality: 'Minor' },
                { degree: '♭6th', note: 'E', position: 'A7', shape: 'A-shape', quality: 'Major' },
                { degree: '♭7th', note: 'F♯', position: 'A9', shape: 'A-shape', quality: 'Major' }
            ]
        },
        'A': {
            name: 'A Minor',
            keySignature: 'No sharps or flats',
            degrees: [
                { degree: '1st', note: 'A', position: 'E5', shape: 'E-shape', quality: 'Minor' },
                { degree: '2nd', note: 'B', position: 'E7', shape: 'E-shape', quality: 'Diminished' },
                { degree: '♭3rd', note: 'C', position: 'A3', shape: 'A-shape', quality: 'Major' },
                { degree: '4th', note: 'D', position: 'A5', shape: 'A-shape', quality: 'Minor' },
                { degree: '5th', note: 'E', position: 'A7', shape: 'A-shape', quality: 'Minor' },
                { degree: '♭6th', note: 'F', position: 'E1', shape: 'E-shape', quality: 'Major' },
                { degree: '♭7th', note: 'G', position: 'E3', shape: 'E-shape', quality: 'Major' }
            ]
        },
        'A#': {
            name: 'A♯ Minor',
            keySignature: '7 sharps: F♯, C♯, G♯, D♯, A♯, E♯, B♯',
            degrees: [
                { degree: '1st', note: 'A♯', position: 'E6', shape: 'E-shape', quality: 'Minor' },
                { degree: '2nd', note: 'B♯', position: 'E8', shape: 'E-shape', quality: 'Diminished' },
                { degree: '♭3rd', note: 'C♯', position: 'A4', shape: 'A-shape', quality: 'Major' },
                { degree: '4th', note: 'D♯', position: 'A6', shape: 'A-shape', quality: 'Minor' },
                { degree: '5th', note: 'E♯', position: 'A8', shape: 'A-shape', quality: 'Minor' },
                { degree: '♭6th', note: 'F♯', position: 'E2', shape: 'E-shape', quality: 'Major' },
                { degree: '♭7th', note: 'G♯', position: 'E4', shape: 'E-shape', quality: 'Major' }
            ]
        },
        'B': {
            name: 'B Minor',
            keySignature: '2 sharps: F♯, C♯',
            degrees: [
                { degree: '1st', note: 'B', position: 'E7', shape: 'E-shape', quality: 'Minor' },
                { degree: '2nd', note: 'C♯', position: 'A4', shape: 'A-shape', quality: 'Diminished' },
                { degree: '♭3rd', note: 'D', position: 'A5', shape: 'A-shape', quality: 'Major' },
                { degree: '4th', note: 'E', position: 'A7', shape: 'A-shape', quality: 'Minor' },
                { degree: '5th', note: 'F♯', position: 'A9', shape: 'A-shape', quality: 'Minor' },
                { degree: '♭6th', note: 'G', position: 'E3', shape: 'E-shape', quality: 'Major' },
                { degree: '♭7th', note: 'A', position: 'E5', shape: 'E-shape', quality: 'Major' }
            ]
        }
    }
};

// State management
let currentNote = 'C';
let currentMode = 'major';

// DOM elements
const scaleTitle = document.getElementById('scaleTitle');
const scaleInfo = document.getElementById('scaleInfo');
const scaleTableBody = document.getElementById('scaleTableBody');
const majorBtn = document.getElementById('majorBtn');
const minorBtn = document.getElementById('minorBtn');
const noteButtons = document.querySelectorAll('.note-btn');

// Initialize the app
function init() {
    setupEventListeners();
    updateDisplay();
}

// Event listeners
function setupEventListeners() {
    // Toggle buttons
    majorBtn.addEventListener('click', () => {
        if (currentMode !== 'major') {
            currentMode = 'major';
            updateToggleButtons();
            updateDisplay();
        }
    });

    minorBtn.addEventListener('click', () => {
        if (currentMode !== 'minor') {
            currentMode = 'minor';
            updateToggleButtons();
            updateDisplay();
        }
    });

    // Note buttons
    noteButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const note = btn.dataset.note;
            if (currentNote !== note) {
                currentNote = note;
                updateNoteButtons();
                updateDisplay();
            }
        });
    });
}

// Update toggle button states
function updateToggleButtons() {
    majorBtn.classList.toggle('active', currentMode === 'major');
    minorBtn.classList.toggle('active', currentMode === 'minor');
}

// Update note button states
function updateNoteButtons() {
    noteButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.note === currentNote);
    });
}

// Update the main display
function updateDisplay() {
    const scaleData = SCALES_DATA[currentMode][currentNote];
    
    if (!scaleData) {
        console.error(`Scale data not found for ${currentNote} ${currentMode}`);
        return;
    }

    // Update header with smooth fade-out/fade-in transition
    scaleTitle.style.opacity = '0';
    scaleInfo.style.opacity = '0';
    
    setTimeout(() => {
        scaleTitle.textContent = scaleData.name;
        scaleInfo.textContent = scaleData.keySignature;
        
        // Fade in after text is updated
        setTimeout(() => {
            scaleTitle.style.opacity = '1';
            scaleInfo.style.opacity = '1';
        }, 50); // Small delay to ensure text is updated
    }, 200); // Wait for fade-out to complete

    // Get existing rows for slide-out animation
    const existingRows = Array.from(scaleTableBody.querySelectorAll('tr'));
    
    if (existingRows.length > 0) {
        // Add slide-out class to existing rows
        existingRows.forEach((row, index) => {
            setTimeout(() => {
                row.classList.add('slide-out');
            }, index * 30); // Staggered slide-out
        });
        
        // Wait for slide-out to complete, then add new rows
        setTimeout(() => {
            populateNewRows(scaleData);
        }, 400); // Wait for slide-out animation to complete
    } else {
        // No existing rows, just populate immediately
        populateNewRows(scaleData);
    }
}

// Helper function to populate new table rows
function populateNewRows(scaleData) {
    scaleTableBody.innerHTML = '';
    
    scaleData.degrees.forEach((degree, index) => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td class="degree-cell">${degree.degree}</td>
            <td class="note-cell">${degree.note}</td>
            <td class="position-cell">${degree.position}</td>
            <td class="chord-shape-cell">${degree.shape}</td>
            <td class="chord-quality-cell chord-quality-${degree.quality.toLowerCase()}">${degree.quality}</td>
        `;
        
        // Add slide-in class for animation
        row.classList.add('slide-in');
        
        scaleTableBody.appendChild(row);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
