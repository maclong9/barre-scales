// CAGED System Reference:
// C-shape: Root note on A string (5th string) - barre at 3rd fret for C Major
// A-shape: Root note on A string (5th string) - open A chord moved up
// G-shape: Root note on E string (6th string) - open G chord moved up  
// E-shape: Root note on E string (6th string) - open E chord moved up
// D-shape: Root note on D string (4th string) - open D chord moved up

// Each position shows: 'fret number (root string)'
// Complete scale data for all 12 major and minor scales with CAGED shapes

const SCALES_DATA = {
    major: {
        'C': {
            name: 'C Major',
            keySignature: 'No sharps or flats',
            degrees: [
                { degree: '1st', note: 'C', positions: { 'C': '3rd (A)', 'A': '3rd (A)', 'G': '10th (E)', 'E': '8th (E)', 'D': '10th (D)' }, quality: 'Major' },
                { degree: '2nd', note: 'D', positions: { 'C': '5th (A)', 'A': '5th (A)', 'G': '12th (E)', 'E': '10th (E)', 'D': '12th (D)' }, quality: 'Minor' },
                { degree: '3rd', note: 'E', positions: { 'C': '7th (A)', 'A': '7th (A)', 'G': '2nd (E)', 'E': '12th (E)', 'D': '2nd (D)' }, quality: 'Minor' },
                { degree: '4th', note: 'F', positions: { 'C': '8th (A)', 'A': '8th (A)', 'G': '3rd (E)', 'E': '1st (E)', 'D': '3rd (D)' }, quality: 'Major' },
                { degree: '5th', note: 'G', positions: { 'C': '10th (A)', 'A': '10th (A)', 'G': '5th (E)', 'E': '3rd (E)', 'D': '5th (D)' }, quality: 'Major' },
                { degree: '6th', note: 'A', positions: { 'C': '12th (A)', 'A': '12th (A)', 'G': '7th (E)', 'E': '5th (E)', 'D': '7th (D)' }, quality: 'Minor' },
                { degree: '7th', note: 'B', positions: { 'C': '2nd (A)', 'A': '2nd (A)', 'G': '9th (E)', 'E': '7th (E)', 'D': '9th (D)' }, quality: 'Diminished' }
            ]
        },
        'C#': {
            name: 'C♯ Major',
            keySignature: '7 sharps: F♯, C♯, G♯, D♯, A♯, E♯, B♯',
            degrees: [
                { degree: '1st', note: 'C♯', positions: { 'C': '4th (A)', 'A': '9th (A)', 'G': '11th (E)', 'E': '9th (E)', 'D': '11th (D)' }, quality: 'Major' },
                { degree: '2nd', note: 'D♯', positions: { 'C': '6th (A)', 'A': '11th (A)', 'G': '1st (E)', 'E': '11th (E)', 'D': '1st (D)' }, quality: 'Minor' },
                { degree: '3rd', note: 'E♯', positions: { 'C': '8th (A)', 'A': '1st (A)', 'G': '3rd (E)', 'E': '1st (E)', 'D': '3rd (D)' }, quality: 'Minor' },
                { degree: '4th', note: 'F♯', positions: { 'C': '9th (A)', 'A': '2nd (A)', 'G': '4th (E)', 'E': '2nd (E)', 'D': '4th (D)' }, quality: 'Major' },
                { degree: '5th', note: 'G♯', positions: { 'C': '11th (A)', 'A': '4th (A)', 'G': '6th (E)', 'E': '4th (E)', 'D': '6th (D)' }, quality: 'Major' },
                { degree: '6th', note: 'A♯', positions: { 'C': '1st (A)', 'A': '6th (A)', 'G': '8th (E)', 'E': '6th (E)', 'D': '8th (D)' }, quality: 'Minor' },
                { degree: '7th', note: 'B♯', positions: { 'C': '3rd (A)', 'A': '8th (A)', 'G': '10th (E)', 'E': '8th (E)', 'D': '10th (D)' }, quality: 'Diminished' }
            ]
        },
        'D': {
            name: 'D Major',
            keySignature: '2 sharps: F♯, C♯',
            degrees: [
                { degree: '1st', note: 'D', positions: { 'C': '5th (A)', 'A': '10th (A)', 'G': '12th (E)', 'E': '10th (E)', 'D': '12th (D)' }, quality: 'Major' },
                { degree: '2nd', note: 'E', positions: { 'C': '7th (A)', 'A': '12th (A)', 'G': '2nd (E)', 'E': '12th (E)', 'D': '2nd (D)' }, quality: 'Minor' },
                { degree: '3rd', note: 'F♯', positions: { 'C': '9th (A)', 'A': '2nd (A)', 'G': '4th (E)', 'E': '2nd (E)', 'D': '4th (D)' }, quality: 'Minor' },
                { degree: '4th', note: 'G', positions: { 'C': '10th (A)', 'A': '3rd (A)', 'G': '5th (E)', 'E': '3rd (E)', 'D': '5th (D)' }, quality: 'Major' },
                { degree: '5th', note: 'A', positions: { 'C': '12th (A)', 'A': '5th (A)', 'G': '7th (E)', 'E': '5th (E)', 'D': '7th (D)' }, quality: 'Major' },
                { degree: '6th', note: 'B', positions: { 'C': '2nd (A)', 'A': '7th (A)', 'G': '9th (E)', 'E': '7th (E)', 'D': '9th (D)' }, quality: 'Minor' },
                { degree: '7th', note: 'C♯', positions: { 'C': '4th (A)', 'A': '9th (A)', 'G': '11th (E)', 'E': '9th (E)', 'D': '11th (D)' }, quality: 'Diminished' }
            ]
        },
        'D#': {
            name: 'D♯ Major',
            keySignature: '9 sharps: F♯, C♯, G♯, D♯, A♯, E♯, B♯, F𝄪, C𝄪',
            degrees: [
                { degree: '1st', note: 'D♯', positions: { 'C': '11th (A)', 'A': '6th (A)', 'G': '1st (E)', 'E': '11th (E)', 'D': '1st (D)' }, quality: 'Major' },
                { degree: '2nd', note: 'E♯', positions: { 'C': '1st (A)', 'A': '8th (A)', 'G': '3rd (E)', 'E': '1st (E)', 'D': '3rd (D)' }, quality: 'Minor' },
                { degree: '3rd', note: 'F𝄪', positions: { 'C': '3rd (A)', 'A': '10th (A)', 'G': '5th (E)', 'E': '3rd (E)', 'D': '5th (D)' }, quality: 'Minor' },
                { degree: '4th', note: 'G♯', positions: { 'C': '4th (A)', 'A': '11th (A)', 'G': '6th (E)', 'E': '4th (E)', 'D': '6th (D)' }, quality: 'Major' },
                { degree: '5th', note: 'A♯', positions: { 'C': '6th (A)', 'A': '1st (A)', 'G': '8th (E)', 'E': '6th (E)', 'D': '8th (D)' }, quality: 'Major' },
                { degree: '6th', note: 'B♯', positions: { 'C': '8th (A)', 'A': '3rd (A)', 'G': '10th (E)', 'E': '8th (E)', 'D': '10th (D)' }, quality: 'Minor' },
                { degree: '7th', note: 'C𝄪', positions: { 'C': '10th (A)', 'A': '5th (A)', 'G': '12th (E)', 'E': '10th (E)', 'D': '12th (D)' }, quality: 'Diminished' }
            ]
        },
        'E': {
            name: 'E Major',
            keySignature: '4 sharps: F♯, C♯, G♯, D♯',
            degrees: [
                { degree: '1st', note: 'E', positions: { 'C': '12th (A)', 'A': '7th (A)', 'G': '2nd (E)', 'E': '12th (E)', 'D': '2nd (D)' }, quality: 'Major' },
                { degree: '2nd', note: 'F♯', positions: { 'C': '2nd (A)', 'A': '9th (A)', 'G': '4th (E)', 'E': '2nd (E)', 'D': '4th (D)' }, quality: 'Minor' },
                { degree: '3rd', note: 'G♯', positions: { 'C': '4th (A)', 'A': '11th (A)', 'G': '6th (E)', 'E': '4th (E)', 'D': '6th (D)' }, quality: 'Minor' },
                { degree: '4th', note: 'A', positions: { 'C': '5th (A)', 'A': '12th (A)', 'G': '7th (E)', 'E': '5th (E)', 'D': '7th (D)' }, quality: 'Major' },
                { degree: '5th', note: 'B', positions: { 'C': '7th (A)', 'A': '2nd (A)', 'G': '9th (E)', 'E': '7th (E)', 'D': '9th (D)' }, quality: 'Major' },
                { degree: '6th', note: 'C♯', positions: { 'C': '9th (A)', 'A': '4th (A)', 'G': '11th (E)', 'E': '9th (E)', 'D': '11th (D)' }, quality: 'Minor' },
                { degree: '7th', note: 'D♯', positions: { 'C': '11th (A)', 'A': '6th (A)', 'G': '1st (E)', 'E': '11th (E)', 'D': '1st (D)' }, quality: 'Diminished' }
            ]
        },
        'F': {
            name: 'F Major',
            keySignature: '1 flat: B♭',
            degrees: [
                { degree: '1st', note: 'F', positions: { 'C': '8th (A)', 'A': '8th (A)', 'G': '3rd (E)', 'E': '1st (E)', 'D': '3rd (D)' }, quality: 'Major' },
                { degree: '2nd', note: 'G', positions: { 'C': '10th (A)', 'A': '10th (A)', 'G': '5th (E)', 'E': '3rd (E)', 'D': '5th (D)' }, quality: 'Minor' },
                { degree: '3rd', note: 'A', positions: { 'C': '12th (A)', 'A': '12th (A)', 'G': '7th (E)', 'E': '5th (E)', 'D': '7th (D)' }, quality: 'Minor' },
                { degree: '4th', note: 'B♭', positions: { 'C': '1st (A)', 'A': '1st (A)', 'G': '8th (E)', 'E': '6th (E)', 'D': '8th (D)' }, quality: 'Major' },
                { degree: '5th', note: 'C', positions: { 'C': '3rd (A)', 'A': '3rd (A)', 'G': '10th (E)', 'E': '8th (E)', 'D': '10th (D)' }, quality: 'Major' },
                { degree: '6th', note: 'D', positions: { 'C': '5th (A)', 'A': '5th (A)', 'G': '12th (E)', 'E': '10th (E)', 'D': '12th (D)' }, quality: 'Minor' },
                { degree: '7th', note: 'E', positions: { 'C': '7th (A)', 'A': '7th (A)', 'G': '2nd (E)', 'E': '12th (E)', 'D': '2nd (D)' }, quality: 'Diminished' }
            ]
        },
        'F#': {
            name: 'F♯ Major',
            keySignature: '6 sharps: F♯, C♯, G♯, D♯, A♯, E♯',
            degrees: [
                { degree: '1st', note: 'F♯', positions: { 'C': '2nd (A)', 'A': '9th (A)', 'G': '4th (E)', 'E': '2nd (E)', 'D': '4th (D)' }, quality: 'Major' },
                { degree: '2nd', note: 'G♯', positions: { 'C': '4th (A)', 'A': '11th (A)', 'G': '6th (E)', 'E': '4th (E)', 'D': '6th (D)' }, quality: 'Minor' },
                { degree: '3rd', note: 'A♯', positions: { 'C': '6th (A)', 'A': '1st (A)', 'G': '8th (E)', 'E': '6th (E)', 'D': '8th (D)' }, quality: 'Minor' },
                { degree: '4th', note: 'B', positions: { 'C': '7th (A)', 'A': '2nd (A)', 'G': '9th (E)', 'E': '7th (E)', 'D': '9th (D)' }, quality: 'Major' },
                { degree: '5th', note: 'C♯', positions: { 'C': '9th (A)', 'A': '4th (A)', 'G': '11th (E)', 'E': '9th (E)', 'D': '11th (D)' }, quality: 'Major' },
                { degree: '6th', note: 'D♯', positions: { 'C': '11th (A)', 'A': '6th (A)', 'G': '1st (E)', 'E': '11th (E)', 'D': '1st (D)' }, quality: 'Minor' },
                { degree: '7th', note: 'E♯', positions: { 'C': '1st (A)', 'A': '8th (A)', 'G': '3rd (E)', 'E': '1st (E)', 'D': '3rd (D)' }, quality: 'Diminished' }
            ]
        },
        'G': {
            name: 'G Major',
            keySignature: '1 sharp: F♯',
            degrees: [
                { degree: '1st', note: 'G', positions: { 'C': '10th (A)', 'A': '10th (A)', 'G': '5th (E)', 'E': '3rd (E)', 'D': '5th (D)' }, quality: 'Major' },
                { degree: '2nd', note: 'A', positions: { 'C': '12th (A)', 'A': '12th (A)', 'G': '7th (E)', 'E': '5th (E)', 'D': '7th (D)' }, quality: 'Minor' },
                { degree: '3rd', note: 'B', positions: { 'C': '2nd (A)', 'A': '2nd (A)', 'G': '9th (E)', 'E': '7th (E)', 'D': '9th (D)' }, quality: 'Minor' },
                { degree: '4th', note: 'C', positions: { 'C': '3rd (A)', 'A': '3rd (A)', 'G': '10th (E)', 'E': '8th (E)', 'D': '10th (D)' }, quality: 'Major' },
                { degree: '5th', note: 'D', positions: { 'C': '5th (A)', 'A': '5th (A)', 'G': '12th (E)', 'E': '10th (E)', 'D': '12th (D)' }, quality: 'Major' },
                { degree: '6th', note: 'E', positions: { 'C': '7th (A)', 'A': '7th (A)', 'G': '2nd (E)', 'E': '12th (E)', 'D': '2nd (D)' }, quality: 'Minor' },
                { degree: '7th', note: 'F♯', positions: { 'C': '9th (A)', 'A': '9th (A)', 'G': '4th (E)', 'E': '2nd (E)', 'D': '4th (D)' }, quality: 'Diminished' }
            ]
        },
        'G#': {
            name: 'G♯ Major',
            keySignature: '8 sharps: F♯, C♯, G♯, D♯, A♯, E♯, B♯, F𝄪',
            degrees: [
                { degree: '1st', note: 'G♯', positions: { 'C': '4th (A)', 'A': '11th (A)', 'G': '6th (E)', 'E': '4th (E)', 'D': '6th (D)' }, quality: 'Major' },
                { degree: '2nd', note: 'A♯', positions: { 'C': '6th (A)', 'A': '1st (A)', 'G': '8th (E)', 'E': '6th (E)', 'D': '8th (D)' }, quality: 'Minor' },
                { degree: '3rd', note: 'B♯', positions: { 'C': '8th (A)', 'A': '3rd (A)', 'G': '10th (E)', 'E': '8th (E)', 'D': '10th (D)' }, quality: 'Minor' },
                { degree: '4th', note: 'C♯', positions: { 'C': '9th (A)', 'A': '4th (A)', 'G': '11th (E)', 'E': '9th (E)', 'D': '11th (D)' }, quality: 'Major' },
                { degree: '5th', note: 'D♯', positions: { 'C': '11th (A)', 'A': '6th (A)', 'G': '1st (E)', 'E': '11th (E)', 'D': '1st (D)' }, quality: 'Major' },
                { degree: '6th', note: 'E♯', positions: { 'C': '1st (A)', 'A': '8th (A)', 'G': '3rd (E)', 'E': '1st (E)', 'D': '3rd (D)' }, quality: 'Minor' },
                { degree: '7th', note: 'F𝄪', positions: { 'C': '3rd (A)', 'A': '10th (A)', 'G': '5th (E)', 'E': '3rd (E)', 'D': '5th (D)' }, quality: 'Diminished' }
            ]
        },
        'A': {
            name: 'A Major',
            keySignature: '3 sharps: F♯, C♯, G♯',
            degrees: [
                { degree: '1st', note: 'A', positions: { 'C': '5th (A)', 'A': '12th (A)', 'G': '7th (E)', 'E': '5th (E)', 'D': '7th (D)' }, quality: 'Major' },
                { degree: '2nd', note: 'B', positions: { 'C': '7th (A)', 'A': '2nd (A)', 'G': '9th (E)', 'E': '7th (E)', 'D': '9th (D)' }, quality: 'Minor' },
                { degree: '3rd', note: 'C♯', positions: { 'C': '9th (A)', 'A': '4th (A)', 'G': '11th (E)', 'E': '9th (E)', 'D': '11th (D)' }, quality: 'Minor' },
                { degree: '4th', note: 'D', positions: { 'C': '10th (A)', 'A': '5th (A)', 'G': '12th (E)', 'E': '10th (E)', 'D': '12th (D)' }, quality: 'Major' },
                { degree: '5th', note: 'E', positions: { 'C': '12th (A)', 'A': '7th (A)', 'G': '2nd (E)', 'E': '12th (E)', 'D': '2nd (D)' }, quality: 'Major' },
                { degree: '6th', note: 'F♯', positions: { 'C': '2nd (A)', 'A': '9th (A)', 'G': '4th (E)', 'E': '2nd (E)', 'D': '4th (D)' }, quality: 'Minor' },
                { degree: '7th', note: 'G♯', positions: { 'C': '4th (A)', 'A': '11th (A)', 'G': '6th (E)', 'E': '4th (E)', 'D': '6th (D)' }, quality: 'Diminished' }
            ]
        },
        'A#': {
            name: 'A♯ Major',
            keySignature: '10 sharps: F♯, C♯, G♯, D♯, A♯, E♯, B♯, F𝄪, C𝄪, G𝄪',
            degrees: [
                { degree: '1st', note: 'A♯', positions: { 'C': '6th (A)', 'A': '1st (A)', 'G': '8th (E)', 'E': '6th (E)', 'D': '8th (D)' }, quality: 'Major' },
                { degree: '2nd', note: 'B♯', positions: { 'C': '8th (A)', 'A': '3rd (A)', 'G': '10th (E)', 'E': '8th (E)', 'D': '10th (D)' }, quality: 'Minor' },
                { degree: '3rd', note: 'C𝄪', positions: { 'C': '10th (A)', 'A': '5th (A)', 'G': '12th (E)', 'E': '10th (E)', 'D': '12th (D)' }, quality: 'Minor' },
                { degree: '4th', note: 'D♯', positions: { 'C': '11th (A)', 'A': '6th (A)', 'G': '1st (E)', 'E': '11th (E)', 'D': '1st (D)' }, quality: 'Major' },
                { degree: '5th', note: 'E♯', positions: { 'C': '1st (A)', 'A': '8th (A)', 'G': '3rd (E)', 'E': '1st (E)', 'D': '3rd (D)' }, quality: 'Major' },
                { degree: '6th', note: 'F𝄪', positions: { 'C': '3rd (A)', 'A': '10th (A)', 'G': '5th (E)', 'E': '3rd (E)', 'D': '5th (D)' }, quality: 'Minor' },
                { degree: '7th', note: 'G𝄪', positions: { 'C': '5th (A)', 'A': '12th (A)', 'G': '7th (E)', 'E': '5th (E)', 'D': '7th (D)' }, quality: 'Diminished' }
            ]
        },
        'B': {
            name: 'B Major',
            keySignature: '5 sharps: F♯, C♯, G♯, D♯, A♯',
            degrees: [
                { degree: '1st', note: 'B', positions: { 'C': '7th (A)', 'A': '2nd (A)', 'G': '9th (E)', 'E': '7th (E)', 'D': '9th (D)' }, quality: 'Major' },
                { degree: '2nd', note: 'C♯', positions: { 'C': '9th (A)', 'A': '4th (A)', 'G': '11th (E)', 'E': '9th (E)', 'D': '11th (D)' }, quality: 'Minor' },
                { degree: '3rd', note: 'D♯', positions: { 'C': '11th (A)', 'A': '6th (A)', 'G': '1st (E)', 'E': '11th (E)', 'D': '1st (D)' }, quality: 'Minor' },
                { degree: '4th', note: 'E', positions: { 'C': '12th (A)', 'A': '7th (A)', 'G': '2nd (E)', 'E': '12th (E)', 'D': '2nd (D)' }, quality: 'Major' },
                { degree: '5th', note: 'F♯', positions: { 'C': '2nd (A)', 'A': '9th (A)', 'G': '4th (E)', 'E': '2nd (E)', 'D': '4th (D)' }, quality: 'Major' },
                { degree: '6th', note: 'G♯', positions: { 'C': '4th (A)', 'A': '11th (A)', 'G': '6th (E)', 'E': '4th (E)', 'D': '6th (D)' }, quality: 'Minor' },
                { degree: '7th', note: 'A♯', positions: { 'C': '6th (A)', 'A': '1st (A)', 'G': '8th (E)', 'E': '6th (E)', 'D': '8th (D)' }, quality: 'Diminished' }
            ]
        }
    },
    minor: {
        'C': {
            name: 'C Minor',
            keySignature: '3 flats: B♭, E♭, A♭',
            degrees: [
                { degree: '1st', note: 'C', positions: { 'C': '3rd (A)', 'A': '3rd (A)', 'G': '10th (E)', 'E': '8th (E)', 'D': '10th (D)' }, quality: 'Minor' },
                { degree: '2nd', note: 'D', positions: { 'C': '5th (A)', 'A': '5th (A)', 'G': '12th (E)', 'E': '10th (E)', 'D': '12th (D)' }, quality: 'Diminished' },
                { degree: '♭3rd', note: 'E♭', positions: { 'C': '6th (A)', 'A': '6th (A)', 'G': '1st (E)', 'E': '11th (E)', 'D': '1st (D)' }, quality: 'Major' },
                { degree: '4th', note: 'F', positions: { 'C': '8th (A)', 'A': '8th (A)', 'G': '3rd (E)', 'E': '1st (E)', 'D': '3rd (D)' }, quality: 'Minor' },
                { degree: '5th', note: 'G', positions: { 'C': '10th (A)', 'A': '10th (A)', 'G': '5th (E)', 'E': '3rd (E)', 'D': '5th (D)' }, quality: 'Minor' },
                { degree: '♭6th', note: 'A♭', positions: { 'C': '11th (A)', 'A': '11th (A)', 'G': '6th (E)', 'E': '4th (E)', 'D': '6th (D)' }, quality: 'Major' },
                { degree: '♭7th', note: 'B♭', positions: { 'C': '1st (A)', 'A': '1st (A)', 'G': '8th (E)', 'E': '6th (E)', 'D': '8th (D)' }, quality: 'Major' }
            ]
        },
        'C#': {
            name: 'C♯ Minor',
            keySignature: '4 sharps: F♯, C♯, G♯, D♯',
            degrees: [
                { degree: '1st', note: 'C♯', positions: { 'C': '9th (A)', 'A': '4th (A)', 'G': '11th (E)', 'E': '9th (E)', 'D': '11th (D)' }, quality: 'Minor' },
                { degree: '2nd', note: 'D♯', positions: { 'C': '11th (A)', 'A': '6th (A)', 'G': '1st (E)', 'E': '11th (E)', 'D': '1st (D)' }, quality: 'Diminished' },
                { degree: '♭3rd', note: 'E', positions: { 'C': '12th (A)', 'A': '7th (A)', 'G': '2nd (E)', 'E': '12th (E)', 'D': '2nd (D)' }, quality: 'Major' },
                { degree: '4th', note: 'F♯', positions: { 'C': '2nd (A)', 'A': '9th (A)', 'G': '4th (E)', 'E': '2nd (E)', 'D': '4th (D)' }, quality: 'Minor' },
                { degree: '5th', note: 'G♯', positions: { 'C': '4th (A)', 'A': '11th (A)', 'G': '6th (E)', 'E': '4th (E)', 'D': '6th (D)' }, quality: 'Minor' },
                { degree: '♭6th', note: 'A', positions: { 'C': '5th (A)', 'A': '12th (A)', 'G': '7th (E)', 'E': '5th (E)', 'D': '7th (D)' }, quality: 'Major' },
                { degree: '♭7th', note: 'B', positions: { 'C': '7th (A)', 'A': '2nd (A)', 'G': '9th (E)', 'E': '7th (E)', 'D': '9th (D)' }, quality: 'Major' }
            ]
        },
        'D': {
            name: 'D Minor',
            keySignature: '1 flat: B♭',
            degrees: [
                { degree: '1st', note: 'D', positions: { 'C': '5th (A)', 'A': '5th (A)', 'G': '12th (E)', 'E': '10th (E)', 'D': '12th (D)' }, quality: 'Minor' },
                { degree: '2nd', note: 'E', positions: { 'C': '7th (A)', 'A': '7th (A)', 'G': '2nd (E)', 'E': '12th (E)', 'D': '2nd (D)' }, quality: 'Diminished' },
                { degree: '♭3rd', note: 'F', positions: { 'C': '8th (A)', 'A': '8th (A)', 'G': '3rd (E)', 'E': '1st (E)', 'D': '3rd (D)' }, quality: 'Major' },
                { degree: '4th', note: 'G', positions: { 'C': '10th (A)', 'A': '10th (A)', 'G': '5th (E)', 'E': '3rd (E)', 'D': '5th (D)' }, quality: 'Minor' },
                { degree: '5th', note: 'A', positions: { 'C': '12th (A)', 'A': '12th (A)', 'G': '7th (E)', 'E': '5th (E)', 'D': '7th (D)' }, quality: 'Minor' },
                { degree: '♭6th', note: 'B♭', positions: { 'C': '1st (A)', 'A': '1st (A)', 'G': '8th (E)', 'E': '6th (E)', 'D': '8th (D)' }, quality: 'Major' },
                { degree: '♭7th', note: 'C', positions: { 'C': '3rd (A)', 'A': '3rd (A)', 'G': '10th (E)', 'E': '8th (E)', 'D': '10th (D)' }, quality: 'Major' }
            ]
        },
        'D#': {
            name: 'D♯ Minor',
            keySignature: '6 sharps: F♯, C♯, G♯, D♯, A♯, E♯',
            degrees: [
                { degree: '1st', note: 'D♯', positions: { 'C': '11th (A)', 'A': '6th (A)', 'G': '1st (E)', 'E': '11th (E)', 'D': '1st (D)' }, quality: 'Minor' },
                { degree: '2nd', note: 'E♯', positions: { 'C': '1st (A)', 'A': '8th (A)', 'G': '3rd (E)', 'E': '1st (E)', 'D': '3rd (D)' }, quality: 'Diminished' },
                { degree: '♭3rd', note: 'F♯', positions: { 'C': '2nd (A)', 'A': '9th (A)', 'G': '4th (E)', 'E': '2nd (E)', 'D': '4th (D)' }, quality: 'Major' },
                { degree: '4th', note: 'G♯', positions: { 'C': '4th (A)', 'A': '11th (A)', 'G': '6th (E)', 'E': '4th (E)', 'D': '6th (D)' }, quality: 'Minor' },
                { degree: '5th', note: 'A♯', positions: { 'C': '6th (A)', 'A': '1st (A)', 'G': '8th (E)', 'E': '6th (E)', 'D': '8th (D)' }, quality: 'Minor' },
                { degree: '♭6th', note: 'B', positions: { 'C': '7th (A)', 'A': '2nd (A)', 'G': '9th (E)', 'E': '7th (E)', 'D': '9th (D)' }, quality: 'Major' },
                { degree: '♭7th', note: 'C♯', positions: { 'C': '9th (A)', 'A': '4th (A)', 'G': '11th (E)', 'E': '9th (E)', 'D': '11th (D)' }, quality: 'Major' }
            ]
        },
        'E': {
            name: 'E Minor',
            keySignature: '1 sharp: F♯',
            degrees: [
                { degree: '1st', note: 'E', positions: { 'C': '12th (A)', 'A': '7th (A)', 'G': '2nd (E)', 'E': '12th (E)', 'D': '2nd (D)' }, quality: 'Minor' },
                { degree: '2nd', note: 'F♯', positions: { 'C': '2nd (A)', 'A': '9th (A)', 'G': '4th (E)', 'E': '2nd (E)', 'D': '4th (D)' }, quality: 'Diminished' },
                { degree: '♭3rd', note: 'G', positions: { 'C': '3rd (A)', 'A': '10th (A)', 'G': '5th (E)', 'E': '3rd (E)', 'D': '5th (D)' }, quality: 'Major' },
                { degree: '4th', note: 'A', positions: { 'C': '5th (A)', 'A': '12th (A)', 'G': '7th (E)', 'E': '5th (E)', 'D': '7th (D)' }, quality: 'Minor' },
                { degree: '5th', note: 'B', positions: { 'C': '7th (A)', 'A': '2nd (A)', 'G': '9th (E)', 'E': '7th (E)', 'D': '9th (D)' }, quality: 'Minor' },
                { degree: '♭6th', note: 'C', positions: { 'C': '8th (A)', 'A': '3rd (A)', 'G': '10th (E)', 'E': '8th (E)', 'D': '10th (D)' }, quality: 'Major' },
                { degree: '♭7th', note: 'D', positions: { 'C': '10th (A)', 'A': '5th (A)', 'G': '12th (E)', 'E': '10th (E)', 'D': '12th (D)' }, quality: 'Major' }
            ]
        },
        'F': {
            name: 'F Minor',
            keySignature: '4 flats: B♭, E♭, A♭, D♭',
            degrees: [
                { degree: '1st', note: 'F', positions: { 'C': '8th (A)', 'A': '8th (A)', 'G': '3rd (E)', 'E': '1st (E)', 'D': '3rd (D)' }, quality: 'Minor' },
                { degree: '2nd', note: 'G', positions: { 'C': '10th (A)', 'A': '10th (A)', 'G': '5th (E)', 'E': '3rd (E)', 'D': '5th (D)' }, quality: 'Diminished' },
                { degree: '♭3rd', note: 'A♭', positions: { 'C': '11th (A)', 'A': '11th (A)', 'G': '6th (E)', 'E': '4th (E)', 'D': '6th (D)' }, quality: 'Major' },
                { degree: '4th', note: 'B♭', positions: { 'C': '1st (A)', 'A': '1st (A)', 'G': '8th (E)', 'E': '6th (E)', 'D': '8th (D)' }, quality: 'Minor' },
                { degree: '5th', note: 'C', positions: { 'C': '3rd (A)', 'A': '3rd (A)', 'G': '10th (E)', 'E': '8th (E)', 'D': '10th (D)' }, quality: 'Minor' },
                { degree: '♭6th', note: 'D♭', positions: { 'C': '4th (A)', 'A': '4th (A)', 'G': '11th (E)', 'E': '9th (E)', 'D': '11th (D)' }, quality: 'Major' },
                { degree: '♭7th', note: 'E♭', positions: { 'C': '6th (A)', 'A': '6th (A)', 'G': '1st (E)', 'E': '11th (E)', 'D': '1st (D)' }, quality: 'Major' }
            ]
        },
        'F#': {
            name: 'F♯ Minor',
            keySignature: '3 sharps: F♯, C♯, G♯',
            degrees: [
                { degree: '1st', note: 'F♯', positions: { 'C': '2nd (A)', 'A': '9th (A)', 'G': '4th (E)', 'E': '2nd (E)', 'D': '4th (D)' }, quality: 'Minor' },
                { degree: '2nd', note: 'G♯', positions: { 'C': '4th (A)', 'A': '11th (A)', 'G': '6th (E)', 'E': '4th (E)', 'D': '6th (D)' }, quality: 'Diminished' },
                { degree: '♭3rd', note: 'A', positions: { 'C': '5th (A)', 'A': '12th (A)', 'G': '7th (E)', 'E': '5th (E)', 'D': '7th (D)' }, quality: 'Major' },
                { degree: '4th', note: 'B', positions: { 'C': '7th (A)', 'A': '2nd (A)', 'G': '9th (E)', 'E': '7th (E)', 'D': '9th (D)' }, quality: 'Minor' },
                { degree: '5th', note: 'C♯', positions: { 'C': '9th (A)', 'A': '4th (A)', 'G': '11th (E)', 'E': '9th (E)', 'D': '11th (D)' }, quality: 'Minor' },
                { degree: '♭6th', note: 'D', positions: { 'C': '10th (A)', 'A': '5th (A)', 'G': '12th (E)', 'E': '10th (E)', 'D': '12th (D)' }, quality: 'Major' },
                { degree: '♭7th', note: 'E', positions: { 'C': '12th (A)', 'A': '7th (A)', 'G': '2nd (E)', 'E': '12th (E)', 'D': '2nd (D)' }, quality: 'Major' }
            ]
        },
        'G': {
            name: 'G Minor',
            keySignature: '2 flats: B♭, E♭',
            degrees: [
                { degree: '1st', note: 'G', positions: { 'C': '10th (A)', 'A': '10th (A)', 'G': '5th (E)', 'E': '3rd (E)', 'D': '5th (D)' }, quality: 'Minor' },
                { degree: '2nd', note: 'A', positions: { 'C': '12th (A)', 'A': '12th (A)', 'G': '7th (E)', 'E': '5th (E)', 'D': '7th (D)' }, quality: 'Diminished' },
                { degree: '♭3rd', note: 'B♭', positions: { 'C': '1st (A)', 'A': '1st (A)', 'G': '8th (E)', 'E': '6th (E)', 'D': '8th (D)' }, quality: 'Major' },
                { degree: '4th', note: 'C', positions: { 'C': '3rd (A)', 'A': '3rd (A)', 'G': '10th (E)', 'E': '8th (E)', 'D': '10th (D)' }, quality: 'Minor' },
                { degree: '5th', note: 'D', positions: { 'C': '5th (A)', 'A': '5th (A)', 'G': '12th (E)', 'E': '10th (E)', 'D': '12th (D)' }, quality: 'Minor' },
                { degree: '♭6th', note: 'E♭', positions: { 'C': '6th (A)', 'A': '6th (A)', 'G': '1st (E)', 'E': '11th (E)', 'D': '1st (D)' }, quality: 'Major' },
                { degree: '♭7th', note: 'F', positions: { 'C': '8th (A)', 'A': '8th (A)', 'G': '3rd (E)', 'E': '1st (E)', 'D': '3rd (D)' }, quality: 'Major' }
            ]
        },
        'G#': {
            name: 'G♯ Minor',
            keySignature: '5 sharps: F♯, C♯, G♯, D♯, A♯',
            degrees: [
                { degree: '1st', note: 'G♯', positions: { 'C': '4th (A)', 'A': '11th (A)', 'G': '6th (E)', 'E': '4th (E)', 'D': '6th (D)' }, quality: 'Minor' },
                { degree: '2nd', note: 'A♯', positions: { 'C': '6th (A)', 'A': '1st (A)', 'G': '8th (E)', 'E': '6th (E)', 'D': '8th (D)' }, quality: 'Diminished' },
                { degree: '♭3rd', note: 'B', positions: { 'C': '7th (A)', 'A': '2nd (A)', 'G': '9th (E)', 'E': '7th (E)', 'D': '9th (D)' }, quality: 'Major' },
                { degree: '4th', note: 'C♯', positions: { 'C': '9th (A)', 'A': '4th (A)', 'G': '11th (E)', 'E': '9th (E)', 'D': '11th (D)' }, quality: 'Minor' },
                { degree: '5th', note: 'D♯', positions: { 'C': '11th (A)', 'A': '6th (A)', 'G': '1st (E)', 'E': '11th (E)', 'D': '1st (D)' }, quality: 'Minor' },
                { degree: '♭6th', note: 'E', positions: { 'C': '12th (A)', 'A': '7th (A)', 'G': '2nd (E)', 'E': '12th (E)', 'D': '2nd (D)' }, quality: 'Major' },
                { degree: '♭7th', note: 'F♯', positions: { 'C': '2nd (A)', 'A': '9th (A)', 'G': '4th (E)', 'E': '2nd (E)', 'D': '4th (D)' }, quality: 'Major' }
            ]
        },
        'A': {
            name: 'A Minor',
            keySignature: 'No sharps or flats',
            degrees: [
                { degree: '1st', note: 'A', positions: { 'C': '5th (A)', 'A': '12th (A)', 'G': '7th (E)', 'E': '5th (E)', 'D': '7th (D)' }, quality: 'Minor' },
                { degree: '2nd', note: 'B', positions: { 'C': '7th (A)', 'A': '2nd (A)', 'G': '9th (E)', 'E': '7th (E)', 'D': '9th (D)' }, quality: 'Diminished' },
                { degree: '♭3rd', note: 'C', positions: { 'C': '8th (A)', 'A': '3rd (A)', 'G': '10th (E)', 'E': '8th (E)', 'D': '10th (D)' }, quality: 'Major' },
                { degree: '4th', note: 'D', positions: { 'C': '10th (A)', 'A': '5th (A)', 'G': '12th (E)', 'E': '10th (E)', 'D': '12th (D)' }, quality: 'Minor' },
                { degree: '5th', note: 'E', positions: { 'C': '12th (A)', 'A': '7th (A)', 'G': '2nd (E)', 'E': '12th (E)', 'D': '2nd (D)' }, quality: 'Minor' },
                { degree: '♭6th', note: 'F', positions: { 'C': '1st (A)', 'A': '8th (A)', 'G': '3rd (E)', 'E': '1st (E)', 'D': '3rd (D)' }, quality: 'Major' },
                { degree: '♭7th', note: 'G', positions: { 'C': '3rd (A)', 'A': '10th (A)', 'G': '5th (E)', 'E': '3rd (E)', 'D': '5th (D)' }, quality: 'Major' }
            ]
        },
        'A#': {
            name: 'A♯ Minor',
            keySignature: '7 sharps: F♯, C♯, G♯, D♯, A♯, E♯, B♯',
            degrees: [
                { degree: '1st', note: 'A♯', positions: { 'C': '6th (A)', 'A': '1st (A)', 'G': '8th (E)', 'E': '6th (E)', 'D': '8th (D)' }, quality: 'Minor' },
                { degree: '2nd', note: 'B♯', positions: { 'C': '8th (A)', 'A': '3rd (A)', 'G': '10th (E)', 'E': '8th (E)', 'D': '10th (D)' }, quality: 'Diminished' },
                { degree: '♭3rd', note: 'C♯', positions: { 'C': '9th (A)', 'A': '4th (A)', 'G': '11th (E)', 'E': '9th (E)', 'D': '11th (D)' }, quality: 'Major' },
                { degree: '4th', note: 'D♯', positions: { 'C': '11th (A)', 'A': '6th (A)', 'G': '1st (E)', 'E': '11th (E)', 'D': '1st (D)' }, quality: 'Minor' },
                { degree: '5th', note: 'E♯', positions: { 'C': '1st (A)', 'A': '8th (A)', 'G': '3rd (E)', 'E': '1st (E)', 'D': '3rd (D)' }, quality: 'Minor' },
                { degree: '♭6th', note: 'F♯', positions: { 'C': '2nd (A)', 'A': '9th (A)', 'G': '4th (E)', 'E': '2nd (E)', 'D': '4th (D)' }, quality: 'Major' },
                { degree: '♭7th', note: 'G♯', positions: { 'C': '4th (A)', 'A': '11th (A)', 'G': '6th (E)', 'E': '4th (E)', 'D': '6th (D)' }, quality: 'Major' }
            ]
        },
        'B': {
            name: 'B Minor',
            keySignature: '2 sharps: F♯, C♯',
            degrees: [
                { degree: '1st', note: 'B', positions: { 'C': '7th (A)', 'A': '2nd (A)', 'G': '9th (E)', 'E': '7th (E)', 'D': '9th (D)' }, quality: 'Minor' },
                { degree: '2nd', note: 'C♯', positions: { 'C': '9th (A)', 'A': '4th (A)', 'G': '11th (E)', 'E': '9th (E)', 'D': '11th (D)' }, quality: 'Diminished' },
                { degree: '♭3rd', note: 'D', positions: { 'C': '10th (A)', 'A': '5th (A)', 'G': '12th (E)', 'E': '10th (E)', 'D': '12th (D)' }, quality: 'Major' },
                { degree: '4th', note: 'E', positions: { 'C': '12th (A)', 'A': '7th (A)', 'G': '2nd (E)', 'E': '12th (E)', 'D': '2nd (D)' }, quality: 'Minor' },
                { degree: '5th', note: 'F♯', positions: { 'C': '2nd (A)', 'A': '9th (A)', 'G': '4th (E)', 'E': '2nd (E)', 'D': '4th (D)' }, quality: 'Minor' },
                { degree: '♭6th', note: 'G', positions: { 'C': '3rd (A)', 'A': '10th (A)', 'G': '5th (E)', 'E': '3rd (E)', 'D': '5th (D)' }, quality: 'Major' },
                { degree: '♭7th', note: 'A', positions: { 'C': '5th (A)', 'A': '12th (A)', 'G': '7th (E)', 'E': '5th (E)', 'D': '7th (D)' }, quality: 'Major' }
            ]
        }
    }
};

// State management
let currentNote = 'C';
let currentMode = 'major';
let highlightedDegrees = new Set(); // Track multiple highlighted degrees
let degreeDefaultPositions = {}; // Track default position per degree (e.g., {0: 'E', 1: 'A', ...})
let degreeSelectedPositions = {}; // Track currently selected position per degree (e.g., {0: 'A', 1: 'G', ...})
let degreeSelectionOrder = []; // Track the order in which degrees are selected

// Performance optimization: Cache DOM references
let cachedTableRows = [];
let cachedColorKeyItems = [];
let needsRowCacheUpdate = true;

// DOM elements
const scaleTitle = document.getElementById('scaleTitle');
// const scaleInfo = document.getElementById('scaleInfo'); // Removed - profile links now in header
const scaleTableBody = document.getElementById('scaleTableBody');
const majorBtn = document.getElementById('majorBtn');
const minorBtn = document.getElementById('minorBtn');
const noteButtons = document.querySelectorAll('.note-btn');
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebarClose = document.getElementById('sidebarClose');
const sidebar = document.getElementById('sidebar');
const appContainer = document.querySelector('.app-container');

// Initialize the app
function init() {
    setupEventListeners();
    updateDisplay();
    // Initialize cache after first display update
    setTimeout(() => {
        updateRowCache();
    }, 100);
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

    // Sidebar toggle buttons
    sidebarToggle.addEventListener('click', () => {
        toggleSidebar();
    });
    
    sidebarClose.addEventListener('click', () => {
        closeSidebar();
    });
    
    // Close sidebar on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sidebar.classList.contains('open')) {
            closeSidebar();
        }
    });
    
    
    // Color key items
    document.querySelectorAll('.color-key-item').forEach(item => {
        item.addEventListener('click', () => {
            const degreeIndex = parseInt(item.dataset.degree);
            highlightDegree(degreeIndex);
        });
    });
    
    // Progression cards
    document.querySelectorAll('.progression-card').forEach(card => {
        card.addEventListener('click', () => {
            const progressionDegreesElement = card.querySelector('.progression-degrees');
            if (progressionDegreesElement) {
                const progressionDegrees = progressionDegreesElement.textContent;
                applyProgression(progressionDegrees);
            }
        });
    });
}

// Update toggle button states
function updateToggleButtons() {
    const isMajorActive = currentMode === 'major';
    const isMinorActive = currentMode === 'minor';
    
    majorBtn.classList.toggle('active', isMajorActive);
    minorBtn.classList.toggle('active', isMinorActive);
    
    // Update ARIA attributes
    majorBtn.setAttribute('aria-pressed', isMajorActive.toString());
    minorBtn.setAttribute('aria-pressed', isMinorActive.toString());
}

// Update note button states
function updateNoteButtons() {
    noteButtons.forEach(btn => {
        const isActive = btn.dataset.note === currentNote;
        btn.classList.toggle('active', isActive);
        // Update ARIA attributes
        btn.setAttribute('aria-pressed', isActive.toString());
    });
}


// OPTIMIZED: Function to select a specific position for a specific degree
function selectDegreePosition(degreeIndex, shape) {
    const previousShape = degreeSelectedPositions[degreeIndex];
    
    // Toggle selection: if clicking the already selected shape, unselect it
    if (previousShape === shape) {
        delete degreeSelectedPositions[degreeIndex];
        updateSpecificDegreePositionHighlighting(degreeIndex, previousShape, null);
    } else {
        degreeSelectedPositions[degreeIndex] = shape;
        updateSpecificDegreePositionHighlighting(degreeIndex, previousShape, shape);
    }
}

// OPTIMIZED: Function to set default position for a specific degree
function setDegreeDefaultPosition(degreeIndex, shape) {
    const previousShape = degreeDefaultPositions[degreeIndex];
    degreeDefaultPositions[degreeIndex] = shape;
    
    // Only update the specific row instead of entire display
    updateSpecificDegreePositionHighlighting(degreeIndex, previousShape, shape);
}

// Function to highlight a specific chord degree (allows multiple)
function highlightDegree(degreeIndex) {
    const wasHighlighted = highlightedDegrees.has(degreeIndex);
    
    // Toggle highlighting - if degree is highlighted, unhighlight it
    if (wasHighlighted) {
        highlightedDegrees.delete(degreeIndex);
        // Remove from selection order
        const orderIndex = degreeSelectionOrder.indexOf(degreeIndex);
        if (orderIndex > -1) {
            degreeSelectionOrder.splice(orderIndex, 1);
        }
    } else {
        highlightedDegrees.add(degreeIndex);
        // Add to selection order
        degreeSelectionOrder.push(degreeIndex);
    }
    
    // Optimized: Only update the specific degree that changed
    updateSpecificDegreeHighlighting(degreeIndex, !wasHighlighted);
    
    // Update order numbers for all highlighted degrees (more efficient than full update)
    updateHighlightOrderNumbers();
}

// Function to apply a chord progression by highlighting degrees in order
function applyProgression(progressionDegrees) {
    // Clear existing highlights
    highlightedDegrees.clear();
    degreeSelectionOrder.length = 0;
    
    // Parse progression degrees (e.g., "1 - 5 - 6 - 4" -> [0, 4, 5, 3])
    const degrees = progressionDegrees
        .split('-')
        .map(d => d.trim())
        .filter(d => d && !isNaN(d))
        .map(d => parseInt(d) - 1); // Convert to 0-based index
    
    // Apply highlights in order
    degrees.forEach(degreeIndex => {
        if (degreeIndex >= 0 && degreeIndex < 7) {
            highlightedDegrees.add(degreeIndex);
            degreeSelectionOrder.push(degreeIndex);
        }
    });
    
    // Update all visual highlighting
    updateDegreeHighlighting();
}

// OPTIMIZED: Update visual highlighting of table rows (legacy function for full updates)
function updateDegreeHighlighting() {
    // Update cache if needed
    if (needsRowCacheUpdate) {
        updateRowCache();
    }
    
    // Use cached rows instead of querySelectorAll
    cachedTableRows.forEach((row, index) => {
        if (row && row.parentNode) { // Ensure row is still in DOM
            updateRowHighlighting(row, index);
        }
    });
    
    // Update color key visual state using cached items
    cachedColorKeyItems.forEach((item, index) => {
        if (item && item.parentNode) { // Ensure item is still in DOM
            updateColorKeyItemHighlighting(item, index);
        }
    });
}

// OPTIMIZED: Update only a specific degree's highlighting
function updateSpecificDegreeHighlighting(degreeIndex, isHighlighted) {
    // Update cache if needed
    if (needsRowCacheUpdate) {
        updateRowCache();
    }
    
    // Update only the specific table row
    const row = cachedTableRows[degreeIndex];
    if (row && row.parentNode) {
        updateRowHighlighting(row, degreeIndex);
    }
    
    // Update only the specific color key item
    const colorKeyItem = cachedColorKeyItems[degreeIndex];
    if (colorKeyItem && colorKeyItem.parentNode) {
        updateColorKeyItemHighlighting(colorKeyItem, degreeIndex);
    }
}

// OPTIMIZED: Update row highlighting classes efficiently
function updateRowHighlighting(row, index) {
    // Remove all previous highlighting classes in one operation
    row.className = row.className.replace(/\bhighlighted(-order-\d+)?\b/g, '');
    
    // Add specific order highlighting class if highlighted
    if (highlightedDegrees.has(index)) {
        const orderIndex = degreeSelectionOrder.indexOf(index);
        if (orderIndex > -1) {
            row.classList.add(`highlighted-order-${orderIndex}`);
        }
    }
}

// OPTIMIZED: Update color key item highlighting efficiently
function updateColorKeyItemHighlighting(item, index) {
    const isActive = highlightedDegrees.has(index);
    item.classList.toggle('active', isActive);
    
    // Update the order number display
    const orderIndex = degreeSelectionOrder.indexOf(index);
    const orderLabel = item.querySelector('.order-number');
    if (orderLabel) {
        if (orderIndex > -1) {
            orderLabel.textContent = orderIndex + 1;
            orderLabel.style.display = 'block';
        } else {
            orderLabel.style.display = 'none';
        }
    }
}

// OPTIMIZED: Update only order numbers for highlighted degrees
function updateHighlightOrderNumbers() {
    // Only update rows that are currently highlighted
    for (const degreeIndex of highlightedDegrees) {
        const row = cachedTableRows[degreeIndex];
        if (row && row.parentNode) {
            const orderIndex = degreeSelectionOrder.indexOf(degreeIndex);
            if (orderIndex > -1) {
                // Remove old order classes
                row.className = row.className.replace(/\bhighlighted-order-\d+\b/g, '');
                // Add new order class
                row.classList.add(`highlighted-order-${orderIndex}`);
            }
        }
        
        const colorKeyItem = cachedColorKeyItems[degreeIndex];
        if (colorKeyItem && colorKeyItem.parentNode) {
            const orderLabel = colorKeyItem.querySelector('.order-number');
            if (orderLabel) {
                const orderIndex = degreeSelectionOrder.indexOf(degreeIndex);
                if (orderIndex > -1) {
                    orderLabel.textContent = orderIndex + 1;
                    orderLabel.style.display = 'block';
                } else {
                    orderLabel.style.display = 'none';
                }
            }
        }
    }
}

// OPTIMIZED: Update DOM element caches
function updateRowCache() {
    cachedTableRows = Array.from(scaleTableBody.querySelectorAll('tr'));
    cachedColorKeyItems = Array.from(document.querySelectorAll('.color-key-item'));
    needsRowCacheUpdate = false;
}

// OPTIMIZED: Update position highlighting for a specific degree
function updateSpecificDegreePositionHighlighting(degreeIndex, previousShape, newShape) {
    // Update cache if needed
    if (needsRowCacheUpdate) {
        updateRowCache();
    }
    
    const row = cachedTableRows[degreeIndex];
    if (!row || !row.parentNode) return;
    
    const positionCell = row.querySelector('.position-cell');
    if (!positionCell) return;
    
    // Remove previous selection highlighting
    if (previousShape) {
        const previousElement = positionCell.querySelector(`[data-shape="${previousShape}"]`);
        if (previousElement) {
            previousElement.classList.remove('selected');
        }
    }
    
    // Add new selection highlighting
    if (newShape) {
        const newElement = positionCell.querySelector(`[data-shape="${newShape}"]`);
        if (newElement) {
            newElement.classList.add('selected');
        }
    }
}

// Sidebar functionality
function toggleSidebar() {
    const isOpen = sidebar.classList.contains('open');
    if (isOpen) {
        closeSidebar();
    } else {
        openSidebar();
    }
}

function openSidebar() {
    // Force a reflow to ensure starting state is applied
    sidebar.offsetHeight;
    
    sidebar.classList.add('open');
    sidebarToggle.classList.add('active');
    appContainer.classList.add('sidebar-open');
    
    // Update ARIA attributes
    sidebarToggle.setAttribute('aria-expanded', 'true');
    sidebar.setAttribute('aria-hidden', 'false');
    
    // Focus management - delay to ensure animation starts smoothly
    requestAnimationFrame(() => {
        sidebarClose.focus();
    });
}

function closeSidebar() {
    sidebar.classList.remove('open');
    sidebarToggle.classList.remove('active');
    appContainer.classList.remove('sidebar-open');
    
    // Update ARIA attributes
    sidebarToggle.setAttribute('aria-expanded', 'false');
    sidebar.setAttribute('aria-hidden', 'true');
    
    // Return focus to toggle button after animation starts
    requestAnimationFrame(() => {
        sidebarToggle.focus();
    });
}

// Update the main display
function updateDisplay() {
    try {
        const scaleData = SCALES_DATA[currentMode]?.[currentNote];
        
        if (!scaleData) {
            console.error(`Scale data not found for ${currentNote} ${currentMode}`);
            return;
        }

        // Update header with simple transition
        scaleTitle.style.opacity = '0';
        
        setTimeout(() => {
            scaleTitle.textContent = scaleData.name;
            scaleTitle.style.opacity = '1';
        }, 150);

        // Update table content
        const existingRows = scaleTableBody.querySelectorAll('tr');
        if (existingRows.length > 0) {
            // Simple slide-out for existing rows
            existingRows.forEach(row => row.classList.add('slide-out'));
            setTimeout(() => populateNewRows(scaleData), 300);
        } else {
            populateNewRows(scaleData);
        }
    } catch (error) {
        console.error('Error updating display:', error);
    }
}

// Helper function to populate new table rows
function populateNewRows(scaleData) {
    try {
        scaleTableBody.innerHTML = '';
        
        if (!scaleData?.degrees || !Array.isArray(scaleData.degrees)) {
            console.warn('Invalid scale data provided');
            return;
        }
        
        scaleData.degrees.forEach((degree, index) => {
            if (!degree || typeof degree !== 'object') {
                console.warn(`Invalid degree data at index ${index}`);
                return;
            }
            
            const row = document.createElement('tr');
            
            // Sanitize data to prevent XSS
            const sanitizedDegree = {
                degree: String(degree.degree || ''),
                note: String(degree.note || ''),
                position: String(degree.position || ''),
                shape: String(degree.shape || ''),
                quality: String(degree.quality || '')
            };
            
            // Generate all positions with individual degree selection and default position highlighted
            let allPositionsHtml = '';
            if (degree.positions) {
                const shapes = ['C', 'A', 'G', 'E', 'D'];
                const defaultShape = degreeDefaultPositions[index];
                const selectedShape = degreeSelectedPositions[index];
                const positionElements = shapes.map(shape => {
                    const position = degree.positions[shape] || 'N/A';
                    const isSelected = shape === selectedShape;
                    const isDefault = shape === defaultShape;
                    const classes = `position-item ${isSelected ? 'selected' : ''} ${isDefault ? 'default' : ''}`;
                    return `<span class="${classes}" data-shape="${shape}" 
                        onclick="event.stopPropagation(); selectDegreePosition(${index}, '${shape}')"
                        oncontextmenu="event.preventDefault(); event.stopPropagation(); setDegreeDefaultPosition(${index}, '${shape}')"
                        title="Left click: Select position for this degree | Right click: Set as default for this degree">
                        <strong>${shape}:</strong> ${position}
                    </span>`;
                });
                allPositionsHtml = positionElements.join('');
            } else {
                allPositionsHtml = degree.position || 'N/A';
            }
            
            row.innerHTML = `
                <td class="degree-cell">${sanitizedDegree.degree}</td>
                <td class="note-cell">${sanitizedDegree.note}</td>
                <td class="position-cell">${allPositionsHtml}</td>
                <td class="chord-quality-cell chord-quality-${sanitizedDegree.quality.toLowerCase()}"><span>${sanitizedDegree.quality}</span></td>
            `;
            
            // Add click handler for degree highlighting
            row.addEventListener('click', () => {
                highlightDegree(index);
            });
            
            // Add slide-in class for animation
            row.classList.add('slide-in');
            
            scaleTableBody.appendChild(row);
        });
        
        // Mark cache as needing update after rows are populated
        needsRowCacheUpdate = true;
        
        // Update degree highlighting after rows are populated
        setTimeout(() => {
            updateDegreeHighlighting();
        }, 50);
    } catch (error) {
        console.error('Error populating table rows:', error);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    try {
        init();
        // Initialize sidebar state
        sidebar.setAttribute('aria-hidden', 'true');
        sidebarToggle.setAttribute('aria-expanded', 'false');
    } catch (error) {
        console.error('Failed to initialize application:', error);
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    // Close sidebar on desktop if it's open
    if (window.innerWidth >= 1024 && sidebar.classList.contains('open')) {
        closeSidebar();
    }
});
