# 🚀 SEO Setup Guide - Jugometal

## ✅ ŠTO JE URAĐENO:

### 1. SEO Optimizacija ✅
- ✅ Meta tags sa ključnim rečima (IMT, Solis, John Deere, YTO, Mahindra, Carraro, Belarus, Jugometal)
- ✅ Canonical URLs na svim stranicama
- ✅ Breadcrumbs sa Schema.org structured data
- ✅ Alt tags za slike sa brendovima
- ✅ Open Graph tags (Facebook, LinkedIn, WhatsApp)
- ✅ Twitter Card tags
- ✅ JSON-LD Structured Data (LocalBusiness schema)
- ✅ Sitemap.xml automatski generisan
- ✅ Robots.txt konfigurisan
- ✅ Next.js Image optimization

---

## 📊 SLEDEĆI KORACI - GOOGLE INDEXIRANJE:

### 1. **Google Search Console Setup** (5-10 min)

#### Korak 1: Registracija
1. Idi na: https://search.google.com/search-console
2. Prijavi se sa Google nalogom
3. Klikni **"Add Property"** → **"URL prefix"**
4. Unesi: `https://jugometal.co.rs`

#### Korak 2: Verifikacija sajta
**Metod 1: HTML Meta Tag (PREPORUČENO)**
1. U Google Search Console izaberi "HTML tag" metod
2. Dobićeš kod sličan ovom: `<meta name="google-site-verification" content="tvoj_kod_ovde" />`
3. Kopiraj samo **content** vrednost (npr: `xPtQ_7mfT8JYWtTlWS2fPFndqexNXJf9QXBqfGgtknI`)
4. Otvori: `src/app/layout.tsx`
5. Pronađi liniju:
   ```typescript
   verification: {
     google: 'xPtQ_7mfT8JYWtTlWS2fPFndqexNXJf9QXBqfGgtknI', // ZAMENI OVO
   },
   ```
6. Zameni sa svojim kodom
7. Deploy sajt
8. Vrati se u Google Search Console i klikni **"Verify"**

**Metod 2: HTML File Upload**
1. Download HTML fajl iz Google Search Console
2. Ubaci ga u `/public` folder
3. Deploy sajt
4. Klikni "Verify"

#### Korak 3: Submit Sitemap
1. Nakon verifikacije, idi na **"Sitemaps"** u левом meniju
2. Unesi: `sitemap.xml`
3. Klikni **"Submit"**
4. ✅ Google će početi da indeksira sajt!

---

### 2. **Google Business Profile** (Lokalno SEO)

1. Idi na: https://www.google.com/business/
2. Kreiraj profil za:
   - **Naziv:** Jugometal
   - **Adresa:** Kneza Miloša 51, 35210 Svilajnac
   - **Telefon:** 035/312-391
   - **Website:** https://jugometal.co.rs
   - **Kategorija:** Poljoprivredna oprema, Prodavnica traktora
3. Verifikuj preko SMS/pošte
4. Dodaj slike (traktori, magacin, proizvode)
5. ✅ Bolje rangiranje u lokalnim pretragama!

---

### 3. **Google Analytics 4** (Opcionalno ali preporučeno)

1. Idi na: https://analytics.google.com
2. Kreiraj nalog i property
3. Dobićeš **Measurement ID** (npr: `G-XXXXXXXXXX`)
4. Instaliraj:
   ```bash
   npm install @next/third-parties
   ```
5. Dodaj u `src/app/layout.tsx`:
   ```typescript
   import { GoogleAnalytics } from '@next/third-parties/google'
   
   export default function RootLayout({ children }) {
     return (
       <html>
         <body>
           {children}
           <GoogleAnalytics gaId="G-XXXXXXXXXX" />
         </body>
       </html>
     )
   }
   ```

---

### 4. **Test & Validation Tools**

#### A. Google Rich Results Test
- URL: https://search.google.com/test/rich-results
- Test: `https://jugometal.co.rs`
- Proveri da li su Breadcrumbs i LocalBusiness schema prikazani ✅

#### B. Facebook Sharing Debugger
- URL: https://developers.facebook.com/tools/debug/
- Test: `https://jugometal.co.rs`
- Proveri Open Graph tags

#### C. Schema.org Validator
- URL: https://validator.schema.org
- Test structured data

#### D. PageSpeed Insights
- URL: https://pagespeed.web.dev
- Test: `https://jugometal.co.rs`
- Target: 90+ score

---

### 5. **Request Indexing (Brže indeksiranje)**

Nakon što je sajt verifikovan u Google Search Console:

1. Idi u **"URL Inspection"** tool (top search bar)
2. Unesi: `https://jugometal.co.rs`
3. Klikni **"Request Indexing"**
4. Ponovi za važne stranice:
   - `/traktori`
   - `/traktori/imt`
   - `/traktori/solis`
   - `/traktori/john-deere`
   - `/rezervni-delovi`
   - `/prikljucne-masine`

**Napomena:** Google može da indexira sajt za 1-7 dana (ponekad do 2 nedelje za nove sajtove).

---

### 6. **Dodatne SEO Optimizacije (Opcionalno)**

#### A. robots.txt Enhancement
Trenutno:
```
User-agent: *
Allow: /
Disallow: /admin
Sitemap: https://jugometal.co.rs/sitemap.xml
```

Možeš dodati (opcionalno):
```
User-agent: *
Allow: /
Disallow: /admin
Disallow: /cart
Disallow: /login
Disallow: /api/

# Specific crawlers
User-agent: Googlebot
Allow: /

Sitemap: https://jugometal.co.rs/sitemap.xml
```

#### B. Content Enhancement
- Dodaj FAQ sekciju sa pitanjima o traktorima
- Blog posts o održavanju traktora
- Video galerija proizvoda
- Customer reviews/testimonials

#### C. Link Building
- Registruj se na:
  - Kupujem Prodajem
  - KupujemProdajem.com
  - Poslovni imenik Srbije
  - Lokalni direktorijumi (Svilajnac, Pomoravski okrug)

---

## 📊 MONITORING (Nakon Deploy-a)

### Google Search Console - Šta pratiti:
1. **Coverage** - Koliko stranica je indeksirano
2. **Performance** - Clicks, Impressions, CTR, Position
3. **Search Queries** - Koje ključne reči donose promet
4. **Mobile Usability** - Da li je sajt mobile-friendly

### Target Ključne Reči - Top 10 na Google:
- ✅ "IMT traktori"
- ✅ "Solis traktori Srbija"
- ✅ "John Deere Srbija"
- ✅ "Rezervni delovi za traktor"
- ✅ "YTO traktori"
- ✅ "Mahindra traktori"
- ✅ "Jugometal Svilajnac"
- ✅ "Traktori Svilajnac"

---

## 🎯 TIMELINE

| Akcija | Vreme | Prioritet |
|--------|-------|-----------|
| Google Search Console setup | 10 min | 🔴 Urgent |
| Submit sitemap.xml | 2 min | 🔴 Urgent |
| Request indexing | 5 min | 🔴 Urgent |
| Google Business Profile | 15 min | 🟡 Visok |
| Google Analytics setup | 10 min | 🟢 Srednji |
| Rich Results testing | 5 min | 🟢 Srednji |
| Link building | Kontinuirano | 🔵 Nizak |

---

## 🚨 VAŽNE NAPOMENE:

1. **Ne menjaj URL strukturu** nakon što Google indeksira sajt (canonical URLs štite od ovoga)
2. **Čuvaj backup** sitemap.xml fajla
3. **Proveri HTTPS** - sajt mora biti siguran (SSL certifikat)
4. **Mobile-first** - Google prioritizuje mobilnu verziju
5. **Page Speed** - Brži sajt = bolje rangiranje

---

## ✅ CHECKLIST

- [ ] Deploy production build
- [ ] Proveri da sajt radi na https://jugometal.co.rs
- [ ] Google Search Console - registracija
- [ ] Zameni Google verification kod u layout.tsx
- [ ] Verifikuj sajt u GSC
- [ ] Submit sitemap.xml
- [ ] Request indexing za glavne stranice
- [ ] Google Business Profile setup
- [ ] Test Rich Results
- [ ] Google Analytics (opcionalno)
- [ ] Monitor rezultate nakon 7-14 dana

---

## 📞 KONTAKT ZA PODRŠKU

Ako trebaš pomoć sa bilo kojim korakom, javi se!

---

**Svi tehnički aspekti SEO-a su završeni!** ✅  
**Sada je na tebi da registruješ sajt u Google alatima.** 🚀
