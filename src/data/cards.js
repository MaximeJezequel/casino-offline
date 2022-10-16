const coins_EUR = ["50cts", "1€", "2€", "10€"]
const coins_EUR2 = ["50ct", "€1", "€2", "€10"]
const coins_GBP = ["50p", "£1", "£2", "£10"]
const coins_USD = ["nickel", "dime", "quarter", "$10"]

const cards = {
  FR_EUR: [
    {
      line1: "",
      line2: "CASINO",
      line3: "Prêt à défier le hasard ?",
    },
    {
      line1: "Avant de commencer,",
      line2: "échangez chaque pièce",
      line3: "avec un billet",
      line4: "en suivant une flèche.",
    },
    {
      line1: "Echangez",
      line2: `la pièce de ${coins_EUR[2]}`,
      line3: `avec le billet de ${coins_EUR[3]}.`,
    },
    {
      line1: "Echangez",
      line2: `la pièce de ${coins_EUR[0]}`,
      line3: `avec celle de ${coins_EUR[1]}.`,
    },
    {
      line1: "Donnez-moi l'argent",
      line2: "qui se trouve sur le",
      line3: "MGM GRAND.",
    },
    {
      line1: "Echangez",
      line2: `la pièce de ${coins_EUR[0]}`,
      line3: "en suivant une flèche.",
    },
    {
      line1: "Donnez-moi l'argent",
      line2: "qui se trouve sur le",
      line3: "CAESARS PALACE.",
    },
    {
      line1: "Echangez",
      line2: `la pièce de ${coins_EUR[0]}`,
      line3: "en suivant une flèche.",
    },
    {
      line1: "Donnez-moi l'argent",
      line2: "qui se trouve sur le",
      line3: "BELLAGIO.",
    },
    {
      line1: "Echangez",
      line2: `la pièce de ${coins_EUR[0]}`,
      line3: "en suivant une flèche.",
    },
    {
      line1: "Donnez-moi l'argent",
      line2: "qui se trouve sur le",
      line3: "PARIS.",
    },
    {
      line1: "Prenez l'argent",
      line2: "qui se trouve sur le",
      line3: "MANDALAY BAY...",
    },
    {
      line1: "... et donnez-le moi.",
      line2: " ",
      line3: " ",
    },
    {
      line1: "Vous pouvez garder",
      line2: "l'argent qui se trouve",
      line3: "sur la table.",
    },
  ],
  EN_EUR: [
    {
      line1: "",
      line2: "CASINO",
      line3: "Ready to defy the odds ?",
    },
    {
      line1: "Before you start,",
      line2: "Switch every coin",
      line3: "with a bill,",
      line4: "following an arrow.",
    },
    {
      line1: `Switch the ${coins_EUR2[2]} coin`,
      line2: `with the ${coins_EUR2[3]} bill.`,
      line3: " ",
    },
    {
      line1: `Switch the ${coins_EUR2[0]} coin`,
      line2: `with the ${coins_EUR2[1]} coin.`,
      line3: " ",
    },
    {
      line1: "Give me the money",
      line2: "on the MGM GRAND.",
      line3: " ",
    },
    {
      line1: `Switch the ${coins_EUR2[0]} coin`,
      line2: "following an arrow.",
      line3: " ",
    },
    {
      line1: "Give me the money",
      line2: "on the CAESARS PALACE.",
      line3: " ",
    },
    {
      line1: `Switch the ${coins_EUR2[0]} coin`,
      line2: "following an arrow.",
      line3: " ",
    },
    {
      line1: "Give me the money",
      line2: "on the BELLAGIO.",
      line3: " ",
    },
    {
      line1: `Switch the ${coins_EUR2[0]} coin`,
      line2: "following an arrow.",
      line3: " ",
    },
    {
      line1: "Give me the money",
      line2: "on the PARIS.",
      line3: " ",
    },
    {
      line1: "Take the money",
      line2: "on the MANDALAY BAY...",
      line3: " ",
    },
    {
      line1: "... and give it to me.",
      line2: " ",
      line3: " ",
    },
    {
      line1: "You can keep the money",
      line2: "which is on the table.",
      line3: " ",
    },
  ],
  EN_GBP: [
    {
      line1: "",
      line2: "CASINO",
      line3: "Ready to defy the odds ?",
    },
    {
      line1: "Before you start,",
      line2: "Switch every coin",
      line3: "with a bill,",
      line4: "following an arrow.",
    },
    {
      line1: `Switch the ${coins_GBP[2]} coin`,
      line2: `with the ${coins_GBP[3]} bill.`,
      line3: " ",
    },
    {
      line1: `Switch the ${coins_GBP[0]} coin`,
      line2: `with the ${coins_GBP[1]} coin.`,
      line3: " ",
    },
    {
      line1: "Give me the money",
      line2: "on the MGM GRAND.",
      line3: " ",
    },
    {
      line1: `Switch the ${coins_GBP[0]} coin`,
      line2: "following an arrow.",
      line3: " ",
    },
    {
      line1: "Give me the money",
      line2: "on the CAESARS PALACE.",
      line3: " ",
    },
    {
      line1: `Switch the ${coins_GBP[0]} coin`,
      line2: "following an arrow.",
      line3: " ",
    },
    {
      line1: "Give me the money",
      line2: "on the BELLAGIO.",
      line3: " ",
    },
    {
      line1: `Switch the ${coins_GBP[0]} coin`,
      line2: "following an arrow.",
      line3: " ",
    },
    {
      line1: "Give me the money",
      line2: "on the PARIS.",
      line3: " ",
    },
    {
      line1: "Take the money",
      line2: "on the MANDALAY BAY...",
      line3: " ",
    },
    {
      line1: "... and give it to me.",
      line2: " ",
      line3: " ",
    },
    {
      line1: "You can keep the money",
      line2: "which is on the table.",
      line3: " ",
    },
  ],
  EN_USD: [
    {
      line1: "",
      line2: "CASINO",
      line3: "Ready to defy the odds ?",
    },
    {
      line1: "Before you start,",
      line2: "Switch every coin",
      line3: "with a bill,",
      line4: "following an arrow.",
    },
    {
      line1: `Switch the ${coins_USD[2]}`,
      line2: `with the ${coins_USD[3]} bill.`,
      line3: " ",
    },
    {
      line1: `Switch the ${coins_USD[0]}`,
      line2: `with the ${coins_USD[1]}.`,
      line3: " ",
    },
    {
      line1: "Give me the money",
      line2: "on the MGM GRAND.",
      line3: " ",
    },
    {
      line1: `Switch the ${coins_USD[0]}`,
      line2: "following an arrow.",
      line3: " ",
    },
    {
      line1: "Give me the money",
      line2: "on the CAESARS PALACE.",
      line3: " ",
    },
    {
      line1: `Switch the ${coins_USD[0]}`,
      line2: "following an arrow.",
      line3: " ",
    },
    {
      line1: "Give me the money",
      line2: "on the BELLAGIO.",
      line3: " ",
    },
    {
      line1: `Switch the ${coins_USD[0]}`,
      line2: "following an arrow.",
      line3: " ",
    },
    {
      line1: "Give me the money",
      line2: "on the PARIS.",
      line3: " ",
    },
    {
      line1: "Take the money",
      line2: "on the MANDALAY BAY...",
      line3: " ",
    },
    {
      line1: "... and give it to me.",
      line2: " ",
      line3: " ",
    },
    {
      line1: "You can keep the money",
      line2: "which is on the table.",
      line3: " ",
    },
  ],
}

export default cards
