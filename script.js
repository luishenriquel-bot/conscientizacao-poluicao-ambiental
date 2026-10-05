* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --bg: #071b1c;
  --bg-soft: #0d2d2d;
  --card: #113535;
  --primary: #2ecc71;
  --primary-dark: #1d9a58;
  --secondary: #dff7e6;
  --text: #f4f9f7;
  --muted: #c9e7d4;
  --accent: #a7f3d0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(180deg, #061b1d 0%, #0a2b2b 100%);
  color: var(--text);
  line-height: 1.6;
}

img {
  max-width: 100%;
  display: block;
}

.hero {
  padding: 20px 8% 60px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 0;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

.logo {
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--accent);
}

.navbar ul {
  display: flex;
  list-style: none;
  gap: 24px;
}

.navbar a {
  color: var(--text);
  text-decoration: none;
  opacity: 0.9;
}

.hero-content {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  align-items: center;
  gap: 40px;
  padding-top: 60px;
}

.tag {
  display: inline-block;
  background: rgba(46, 204, 113, 0.12);
  border: 1px solid rgba(46, 204, 113, 0.4);
  color: var(--accent);
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 0.82rem;
  margin-bottom: 16px;
}

.hero-content h1 {
  font-size: clamp(2.5rem, 4vw, 4.5rem);
  line-height: 1.1;
  margin-bottom: 18px;
}

.hero-content p {
  font-size: 1.08rem;
  color: var(--muted);
  max-width: 620px;
  margin-bottom: 28px;
}

.buttons {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
}

.btn {
  display: inline-block;
  padding: 14px 24px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  transition: 0.3s ease;
}

.btn.primary {
  background: var(--primary);
  color: #06210d;
}

.btn.secondary {
  border: 1px solid rgba(255,255,255,0.2);
  color: var(--text);
}

.btn:hover {
  transform: translateY(-2px);
}

.image-box {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-box img {
  width: 100%;
  max-width: 560px;
  border-radius: 26px;
  box-shadow: 0 25px 60px rgba(0,0,0,0.35);
}

.circle {
  position: absolute;
  width: 90%;
  height: 90%;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(46,204,113,0.25), rgba(46,204,113,0));
  z-index: 0;
}

.section {
  padding: 90px 8%;
}

.section-title {
  text-align: center;
  margin-bottom: 42px;
}

.section-title.left {
  text-align: left;
}

.section-title span {
  color: var(--accent);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.8rem;
}

.section-title h2 {
  font-size: clamp(2rem, 3vw, 3rem);
  margin-top: 12px;
}

.cards-grid,
.actions-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(220px, 1fr));
  gap: 24px;
}

.card,
.action-box {
  background: rgba(17, 53, 53, 0.9);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 18px;
  padding: 28px 22px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.12);
}

.card h3,
.action-box h3 {
  font-size: 1.4rem;
  margin-bottom: 12px;
}

.card p,
.action-box p,
.impact-list p {
  color: var(--muted);
}

.impact-section {
  background: rgba(255,255,255,0.02);
}

.impact-list {
  display: grid;
  grid-template-columns: repeat(3, minmax(220px, 1fr));
  gap: 24px;
}

.impact-list div {
  background: rgba(17, 53, 53, 0.8);
  border-radius: 16px;
  padding: 24px;
  border: 1px solid rgba(255,255,255,0.08);
}

.impact-list strong {
  display: block;
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.footer {
  text-align: center;
  padding: 24px 16px 42px;
  color: var(--muted);
}

@media (max-width: 900px) {
  .hero-content,
  .cards-grid,
  .actions-grid,
  .impact-list {
    grid-template-columns: 1fr 1fr;
  }

  .hero-content {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 620px) {
  .navbar {
    flex-direction: column;
    gap: 10px;
  }

  .navbar ul {
    flex-wrap: wrap;
    justify-content: center;
  }

  .cards-grid,
  .actions-grid,
  .impact-list {
    grid-template-columns: 1fr;
  }

  .section {
    padding-left: 6%;
    padding-right: 6%;
  }
}
