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
- OpenWeather API
- HTML
- CSS
- Local Storage
- Git / GitHub

---

## Eksterni servisi

### OpenWeather API

Aplikacija koristi OpenWeather API za prikaz petodnevne vremenske prognoze za lokacije na kojima se nalaze staze.

Za svaku lokaciju prikazuju se:

- dan prognoze
- vremenski uslovi
- maksimalna temperatura
- minimalna temperatura

Za korišćenje vremenske prognoze potreban je **OpenWeather API key**.

API key se ne nalazi u Git repozitorijumu, već se podešava lokalno pomoću `.env` fajla.

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
git clone https://github.com/elab-development/klijentske-veb-tehnologije-2024-2022-0211-veb-aplikacija-za-planinare.git react2026
```

Zatim ući u direktorijum projekta:

```bash
cd react2026
```

### 2. Instaliranje dependencies

Nakon kloniranja projekta potrebno je instalirati sve potrebne pakete:

```bash
npm install
```

## 3. Kreiranje OpenWeather API ključa

Za korišćenje vremenske prognoze potrebno je napraviti nalog na OpenWeather platformi i kreirati API key.

OpenWeather:

https://openweathermap.org/

Nakon kreiranja API ključa potrebno ga je dodati u projekat.

---

## 4. Kreiranje `.env` fajla

U root direktorijumu projekta, na istom nivou gde se nalazi `package.json`, napraviti fajl:

```text
.env
```

Struktura projekta treba da izgleda približno ovako:

```text
HIGHKING/
│
├── public/
├── src/
├── .env
├── .env.example
├── .gitignore
├── package.json
├── vite.config.ts
└── index.html
```

U `.env` fajl dodati:

```env
VITE_WEATHER_API_KEY=YOUR_API_KEY
```

`YOUR_API_KEY` zameniti svojim OpenWeather API ključem.

Na primer:

```env
VITE_WEATHER_API_KEY=ovde_uneti_api_key
```

API ključ se u aplikaciji učitava pomoću:

```ts
import.meta.env.VITE_WEATHER_API_KEY;
```

> Nakon kreiranja ili izmene `.env` fajla potrebno je ponovo pokrenuti Vite development server.

---

## 5. `.env.example`

U repozitorijumu se nalazi `.env.example` koji pokazuje koje environment promenljive su potrebne za pokretanje projekta.

Sadržaj fajla:

```env
VITE_WEATHER_API_KEY=YOUR_API_KEY_HERE
```

`.env.example` ne sadrži pravi API key.

---

## 6. Pokretanje projekta

Nakon instaliranja dependencies i podešavanja API ključa, projekat se pokreće komandom:

```bash
npm run dev
```

Vite će u terminalu prikazati lokalnu adresu aplikacije, na primer:

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

## Vremenska prognoza

Vremenska prognoza se dobija pomoću OpenWeather API-ja.

Aplikacija šalje zahtev za svaku podržanu lokaciju koristeći njenu geografsku širinu i dužinu.

OpenWeather vraća prognozu u intervalima od tri sata. Podaci se zatim grupišu po datumima kako bi aplikacija prikazala petodnevnu prognozu.

Za svaki dan prikazuju se:

- odgovarajuća ikonica vremenskih uslova
- maksimalna temperatura
- minimalna temperatura

Korisnik može pomoću filtera izabrati lokaciju za koju želi da vidi prognozu.

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
