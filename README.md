# 日本語ノート · Japanese study notes

Phone version of Romain's Japanese study notes (Pimsleur): hiragana, phrases, lesson by lesson.
A static web app for GitHub Pages: works offline once opened, and can be added to the iPhone Home Screen.

## Files

- `index.html` : the app (layout, styles, logic). No build step, no external dependencies.
- `data.js` : **all the content**. Edit only this file to add phrases or lessons.
- `sw.js` : offline support (network first, saved copy when offline).
- `manifest.webmanifest`, `icons/` : Home Screen app settings.

## Adding a lesson

Append to `NOTES.lessons` in `data.js` and bump `NOTES.updated`:

```js
{ number: 4, jp: "第4課",
  words: [ ["japanese (hiragana/katakana)", "note or 'Pimsleur shows: …'", "romaji", "English", "sounds like (English phonetics)"] ],
  dialogue: [ ["A", "japanese", "romaji", "English"] ] }
```

Conventions: hiragana first (kanji form in the note as "Pimsleur shows: …"), long vowels written ō, "sounds like" in English phonetics.
The same content is mirrored in the printable PDF version (Claude canvas "Japanese Study Notes").
