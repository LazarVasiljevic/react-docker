# HIGHKING

HIGHKING je web aplikacija namenjena ljubiteljima šetnje, planinarenja i biciklizma.  
Aplikacija omogućava korisnicima da pregledaju različite staze u Srbiji, filtriraju ih prema određenim kriterijumima, pregledaju detaljne informacije o stazama, vremensku prognozu i sačuvaju omiljene staze.

Projekat je razvijen korišćenjem **React-a i TypeScript-a**.

---

## Funkcionalnosti

Aplikacija sadrži sledeće funkcionalnosti:

- pregled staza za šetnju i planinarenje
- pregled biciklističkih staza
- prikaz detaljnih informacija o izabranoj stazi
- filtriranje staza prema:
  - mestu
  - težini
  - tipu staze
- paginacija prilikom prikaza staza
- prikaz lokacije staze na interaktivnoj mapi
- prikaz vremenske prognoze za različite lokacije
- filtriranje vremenske prognoze prema lokaciji
- galerija fotografija
- registracija korisnika
- prijava i odjava korisnika
- korisnički profil
- dodavanje staza u omiljene
- uklanjanje staza iz omiljenih
- čuvanje korisničkih podataka i omiljenih staza u Local Storage-u
- responzivan dizajn prilagođen desktop, tablet i mobilnim uređajima

---

## Tehnologije

Za razvoj projekta korišćene su:

- React
- TypeScript
- React Router
- React Icons
- React Leaflet
- Leaflet
- OpenStreetMap
- Open-Meteo API
- HTML
- CSS
- Local Storage
- Git / GitHub

---

## Eksterni servisi

### Open-Meteo

Aplikacija koristi Open-Meteo API za prikaz sedmodnevne vremenske prognoze za lokacije na kojima se nalaze staze.

Prikazuju se informacije kao što su:

- vremenski uslovi
- maksimalna temperatura
- minimalna temperatura

Za korišćenje Open-Meteo API-ja u ovom projektu nije potreban API ključ.

### OpenStreetMap i Leaflet

Za prikaz lokacije staza koristi se interaktivna mapa implementirana pomoću biblioteka Leaflet i React Leaflet.

Podaci mape se prikazuju korišćenjem OpenStreetMap-a.

---

## Pokretanje projekta na lokalnoj mašini

Za pokretanje projekta potrebno je da na računaru budu instalirani:

- Node.js
- npm
- Git

### 1. Kloniranje repozitorijuma

Otvoriti terminal i izvršiti:

```bash
git clone https://github.com/elab-development/klijentske-veb-tehnologije-2024-2022-0211-veb-aplikacija-za-planinare.git
```

Zatim ući u direktorijum projekta:

```bash
cd //naziv-direktrotijum//
```

### 2. Instaliranje dependencies

Nakon kloniranja projekta potrebno je instalirati sve potrebne pakete:

```bash
npm install
```

### 3. Pokretanje projekta

Pokrenuti development server:

```bash
npm run dev
```

Nakon pokretanja terminal će prikazati lokalnu adresu aplikacije, na primer:

```text
http://localhost:5173/
```

Otvoriti prikazanu adresu u web browser-u.

---

## Struktura projekta

Osnovna struktura projekta organizovana je na sledeći način:

```text
src/
├── assets/
├── components/
├── models/
├── pages/
├── styles/
├── App.tsx
└── main.tsx
```

### `components`

Sadrži komponente koje se koriste na više mesta u aplikaciji, kao što su:

- Navbar
- Sidebar
- StazaCard
- ActivityCard
- FilterDugme
- Paginacija
- VremeCard
- StazaMapa
- GalerijaCard

### `pages`

Sadrži glavne stranice aplikacije, kao što su:

- Početna stranica
- Šetnja i planinarenje
- Biciklizam
- Detalji staze
- Galerija
- Vremenska prognoza
- Profil
- Prijava
- Registracija
- Not Found

### `models`

Sadrži TypeScript modele, klase i interfejse koji definišu strukturu podataka korišćenih u aplikaciji:

- GalerijaSlika
- Staza
- User
- Vreme

### `styles`

Sadrži CSS fajlove za stilizovanje komponenti i stranica aplikacije.

---

## Rutiranje

Za navigaciju između stranica koristi se `react-router-dom`.

Glavne rute aplikacije su:

| Ruta          | Stranica              |
| ------------- | --------------------- |
| `/`           | Početna               |
| `/setnja`     | Šetnja i planinarenje |
| `/biciklizam` | Biciklizam            |
| `/staza/:id`  | Detalji staze         |
| `/galerija`   | Galerija              |
| `/vreme`      | Vremenska prognoza    |
| `/profil`     | Korisnički profil     |
| `/login`      | Prijava               |
| `/signin`     | Registracija          |

---

## Local Storage

Local Storage se koristi za čuvanje podataka korisnika između sesija.

Čuvaju se podaci o:

- registrovanom korisniku
- trenutno prijavljenom korisniku
- omiljenim stazama

Na ovaj način omiljene staze ostaju sačuvane i nakon odjavljivanja korisnika.

---

## Autor

Projekat je izrađen u okviru fakultetskog projekta.

- Lazar Vasiljevic
