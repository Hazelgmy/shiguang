const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');

const inspiration = fs.readFileSync('index.html', 'utf8');
const journal = fs.readFileSync('indexDiary.html', 'utf8');

test('both pages install the blue white theme', () => {
  for (const html of [inspiration, journal]) {
    assert.match(html, /<style id="blue-white-theme">/);
    assert.match(html, /--ui-primary:\s*#377cf6/);
    assert.match(html, /@media \(max-width:\s*768px\)/);
  }
});

test('existing business entry points remain available', () => {
  for (const id of ['notion-token', 'notion-db', 'save-btn', 'cards-area']) {
    assert.match(inspiration, new RegExp(`id="${id}"`));
  }
  for (const id of ['dateInput', 'titleInput', 'contentInput', 'saveBtn', 'eventWorkspace']) {
    assert.match(journal, new RegExp(`id="${id}"`));
  }
  for (const fn of ['saveNote', 'deleteNote', 'startEdit']) {
    assert.match(inspiration, new RegExp(`function ${fn}\\(`));
  }
  for (const fn of ['saveEntry', 'saveEventFromCalendar', 'showEventDetail']) {
    assert.match(journal, new RegExp(`function ${fn}\\(`));
  }
});

test('desktop journal main workspace owns vertical scrolling', () => {
  const theme = journal.match(/<style id="blue-white-theme">([\s\S]*?)<\/style>/)?.[1] || '';
  assert.match(theme, /@media \(min-width:\s*901px\)[\s\S]*?\.main\s*\{[\s\S]*?overflow-y:\s*auto/);
  assert.match(theme, /@media \(min-width:\s*901px\)[\s\S]*?\.editor\s*\{[\s\S]*?height:\s*auto/);
});
