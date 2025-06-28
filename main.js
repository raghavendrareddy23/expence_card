const chartData = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

const chart = document.getElementById("spending-chart");

const today = new Date().getDay();
const adjustedIndex = today === 0 ? 6 : today - 1; 

chartData.forEach((item, index) => {
  const bar = document.createElement("div");
  bar.classList.add("spending-chart__bar");
  if (index === adjustedIndex) bar.classList.add("active");
  bar.setAttribute("data-label", item.day);
  bar.setAttribute("data-amount", `$${item.amount}`);

  // Set height proportional to max height (say max is 100px)
  const maxAmount = Math.max(...chartData.map((d) => d.amount));
  bar.style.height = `${(item.amount / maxAmount) * 100}%`;

  chart.appendChild(bar);
});
