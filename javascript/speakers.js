// Implement the section "Featured speakers" with dynamic HTML.
const speakerFeatures = [
  {
    name: 'Yochai Benkler',
    image: './images/4A_speaker_01.png',
    imagename: 'Speaker one Yochai Benkler',
    occupation: 'Director of Art Centre Nabi and a board member of CC Indonesia',
    details: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    name: 'Kilnam Chon',
    image: './images/4B_speaker_02.png',
    imagename: 'Speaker two Kilnam Chon',
    occupation: 'Not Available',
    details: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame',
  },
  {
    name: 'SohYeong Noh',
    image: './images/4C_speaker_03.png',
    imagename: 'Speaker three SohYeong Noh',
    occupation: 'Director of Art Centre Nabi and a board member of CC Korea',
    details: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },
  {
    name: 'Julia Leda',
    image: './images/4D_speaker_04.png',
    imagename: 'Speaker four Julia Leda',
    occupation: 'President of Young Pirates of Europe',
    details: 'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July',
  },
  {
    name: 'Lila tretikov',
    image: './images/4E_speaker_05.png',
    imagename: 'Speaker five Lila tretikov',
    occupation: 'Executive Director of the Wikimedia Foundation',
    details: 'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languag-es and used by nearly half a billion people around the world every month.',
  },
  {
    name: 'Ryan Merkley',
    image: './images/4F_speaker_06.png',
    imagename: 'Speaker six Ryan Merkley',
    occupation: 'CEO of Creativve Commons, ex COO of the Mozilla Foundation',
    details: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment',
  },
];

// Create Feature  dynamically on page load
const master = document.querySelector('.first-row');
speakerFeatures.forEach((item) => {
  const card = `<div class="first-row-card">
                    <div class="picture-master">
                      <img class="speaker-pic" src="${item.image}" alt="${item.imagename}">
                    </div>
                    <div class="description-details">
                      <div class = "speaker-title">
                        <h1>${item.name}</h1>
                      </div>
                      <div class="occupation">
                        <p>${item.occupation}</p>
                      </div>
                      <div class="details">
                        <p>${item.details}</p>
                      </div>
                    </div>
                </div>`;

  master.innerHTML += card;
});
