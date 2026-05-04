// Paste this into the browser console while viewing the Heritage Wrapped site.
// It fetches every claudeusercontent image and downloads it to your computer.
// Add all downloaded files to project/assets/ in the GitHub repo.

const BASE = "https://019ddfa9-ba64-75fe-97af-cd0227cf96a7.claudeusercontent.com/v1/design/projects/019ddfa9-ba64-75fe-97af-cd0227cf96a7/serve/assets/";

// Grab the current token from an image that's already loaded on the page
const liveToken = (() => {
  const img = [...document.querySelectorAll("img")].find(i => i.src.includes("claudeusercontent"));
  if (!img) return null;
  const m = img.src.match(/[?&]t=([^&]+)/);
  return m ? "?t=" + m[1] : null;
})();

if (!liveToken) {
  console.error("No claudeusercontent image found on the page — make sure the site is open and images are visible.");
} else {
  console.log("Token found:", liveToken.slice(0, 40) + "...");

  const FILES = [
    // Labour Stories (ecamp)
    "Making Home.png",
    "The Company and the Combination.png",
    "The Grads Take Flight.png",
    "Hard Times.png",
    "Laura Lindsay, First Lady of Daytime TV in Alberta from 1955-68.png",
    "Station of Broken Promises.png",
    "More Than a Prize Scholar or Bookworm.png",
    "She Can Move Mountains.png",
    "Hot Wheelz.png",
    "Happyland.png",
    "Big Jim Stone.png",
    "the Mainframe Computer, and Women's Work.png",
    "Queen of the Link.png",
    "Bridging Alberta.png",
    "Working at Woodwards.png",
    "More than Half Day.png",
    "Chinese Hand Laundries.png",
    // ECAMP section images
    "August 7 Labour Tour strike 2.jpg",
    "Trivia Night September 2025 11.JPG",
    "Momentary Museum-Senses-223 2.jpg",
    // Fire
    "Tipi Confessions.png",
    // Partnerships
    "Fire Spotlight Series - King Charles III Coronation Medal Ceremony.jpg",
    "Black Heritage Caucus.jpg",
    "Black History Month Launch 2025.JPG",
    "Roots & Routes (Journey of the Horse).JPG",
  ];

  async function downloadAll() {
    for (const name of FILES) {
      const url = BASE + encodeURIComponent(name) + liveToken;
      try {
        const res = await fetch(url);
        if (!res.ok) { console.warn(`SKIP ${name} — ${res.status}`); continue; }
        const blob = await res.blob();
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = name;
        a.click();
        URL.revokeObjectURL(a.href);
        console.log(`Downloaded: ${name}`);
        await new Promise(r => setTimeout(r, 300)); // small pause between downloads
      } catch (e) {
        console.error(`FAIL ${name}:`, e);
      }
    }
    console.log("Done! Upload all downloaded files to project/assets/ in the GitHub repo.");
  }

  downloadAll();
}
