// Buttons
const copyQuote = document.getElementById("copyQuote");
const newQuote = document.getElementById("newQuote");

// Texts
const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("author");

const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    text: "Do not wait for the perfect moment. Take the moment and make it perfect.",
    author: "Unknown",
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "A goal without a plan is just a wish.",
    author: "Antoine de Saint-Exupéry",
  },
  {
    text: "Discipline is choosing between what you want now and what you want most.",
    author: "Abraham Lincoln",
  },
  {
    text: "The future belongs to those who prepare for it today.",
    author: "Malcolm X",
  },
  {
    text: "Dream big. Start small. Act now.",
    author: "Unknown",
  },
  {
    text: "It always seems impossible until it is done.",
    author: "Nelson Mandela",
  },
  {
    text: "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steve Jobs",
  },
  {
    text: "Hard work beats talent when talent doesn’t work hard.",
    author: "Tim Notke",
  },
  {
    text: "Small progress is still progress.",
    author: "Unknown",
  },
  {
    text: "What we think, we become.",
    author: "Buddha",
  },
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
  },
  {
    text: "Don’t count the days, make the days count.",
    author: "Muhammad Ali",
  },
  {
    text: "Focus on being productive instead of busy.",
    author: "Tim Ferriss",
  },
  {
    text: "If you want to go fast, go alone. If you want to go far, go together.",
    author: "African Proverb",
  },
  {
    text: "Consistency creates confidence.",
    author: "Unknown",
  },
  {
    text: "Learning never exhausts the mind.",
    author: "Leonardo da Vinci",
  },
  {
    text: "Action is the foundational key to all success.",
    author: "Pablo Picasso",
  },
];

function getQuotes() {
  const randomQuotes = quotes[Math.floor(Math.random() * quotes.length)];
  quoteText.textContent = randomQuotes.text;
  quoteAuthor.textContent = randomQuotes.author;
}

newQuote.addEventListener("click", () => {
  getQuotes();
});

copyQuote.addEventListener("click", async () => {
  const copyText = quoteText.textContent;
  const copyAuthor = quoteAuthor.textContent;

  await navigator.clipboard.writeText(`"${copyText}" - ${copyAuthor}`);
  copyQuote.textContent = "Copied!";
  copyQuote.style.zIndex = "10";
});
