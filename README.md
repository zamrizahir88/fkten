# FKTEN website redesign (prototype)

Static HTML/CSS design prototype for the Faculty of Electronic Engineering & Technology (FKTEN), Universiti Malaysia Perlis. It uses content from the current site at https://fkten.unimap.edu.my/fkten2026/.

## Pages

- `index.html` (homepage)
- `about.html`
- `programmes.html`
- `programme-electronic-engineering.html` (template for programme pages)
- `contact.html`

## Run

Open `index.html` in a browser. Images load from the live FKTEN site, so an internet connection is needed.

## Structure

- `css/style.css`: all styles. Brand colours are variables at the top (FKTEN red, UniMAP blue, yellow and silver).
- `js/main.js`: shared header, footer and navigation, plus tabs, accordion and animations.

## Not yet functional

The enquiry form, staff search and BM/EN switch are visual only. When converted to PHP/MySQL, the header and footer become PHP includes, and news, announcements and programmes come from the database.
