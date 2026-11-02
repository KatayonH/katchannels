// All page copy that repeats lives here, so edits happen in one place.

export interface Session {
  id: string;
  moon: string;
  /** Intrinsic size of the moon image, so the page doesn't jump while it loads. */
  moonSize: [number, number];
  title: string;
  titleItalic: string;
  forWho: string;
  meta: string;
  text: string;
  price: string;
  cta: string;
  /** Short tab label in the booking panel. */
  tab: string;
  /** Which "You're booked" pop-up to show after paying. */
  kind: 'animal' | 'channeling';
  /** Stripe Payment Link (no time slot) or a Cal.com event (pick a time). */
  booking: Booking;
  /** Small line under the price, e.g. the extra-animal add-on. */
  extra?: string;
  /** Animal readings: one option per number of animals (1, 2, 3), each with its own price and booking. */
  options?: AnimalOption[];
}

export type Booking = { type: 'stripe'; url: string } | { type: 'cal'; calLink: string };

export interface AnimalOption {
  count: number;
  price: string;
  /** Call length for live readings. */
  length?: string;
  booking: Booking;
}

const EXTRA_ANIMAL = '+$80 per extra animal, up to 3';

export const sessions: Session[] = [
  {
    id: 'written',
    moon: '/images/moon-written.png',
    moonSize: [89, 134],
    title: 'Written',
    titleItalic: 'Reading',
    forWho: 'For living or passed animals',
    meta: 'Delivered within 7 days',
    text: 'I write down what your animal shares and send it to your inbox, for an animal beside you or one who has crossed over.',
    price: '$180',
    cta: 'Book written reading',
    tab: 'Written',
    kind: 'animal',
    booking: { type: 'stripe', url: 'https://buy.stripe.com/8x228rf2v72I5LK7zm67S00' },
    extra: EXTRA_ANIMAL,
    options: [
      { count: 1, price: '$180', booking: { type: 'stripe', url: 'https://buy.stripe.com/8x228rf2v72I5LK7zm67S00' } },
      { count: 2, price: '$260', booking: { type: 'stripe', url: 'https://buy.stripe.com/bJecN52fJ86Mb648Dq67S01' } },
      { count: 3, price: '$340', booking: { type: 'stripe', url: 'https://buy.stripe.com/8x26oH3jNaeU3DC9Hu67S02' } },
    ],
  },
  {
    id: 'live',
    moon: '/images/moon-live.png',
    moonSize: [94, 132],
    title: 'Live',
    titleItalic: 'Reading',
    forWho: 'For living or passed animals',
    meta: 'Live video · 1 hour',
    text: 'Talk with me on a live video call as I share what your animal tells me, whether they are with you or have crossed over.',
    price: '$200',
    cta: 'Book live reading',
    tab: 'Live',
    kind: 'animal',
    booking: { type: 'cal', calLink: 'katchannels/live-reading' },
    extra: EXTRA_ANIMAL,
    options: [
      { count: 1, price: '$200', length: '1 hour', booking: { type: 'cal', calLink: 'katchannels/live-reading' } },
      { count: 2, price: '$280', length: '1 hour', booking: { type: 'cal', calLink: 'katchannels/live-reading-2' } },
      { count: 3, price: '$360', length: '90 minutes', booking: { type: 'cal', calLink: 'katchannels/live-reading-3' } },
    ],
  },
  {
    id: 'channeling',
    moon: '/images/moon-channeling.png',
    moonSize: [153, 155],
    title: 'Channeling',
    titleItalic: 'Session',
    forWho: 'For you',
    meta: 'Live video · 1 hour',
    text: 'Bring your questions. I connect with your higher self and guides for the answers you seek, and anything that needs to come through for your highest good.',
    price: '$230',
    cta: 'Book channeling',
    tab: 'Channeling',
    kind: 'channeling',
    booking: { type: 'cal', calLink: 'katchannels/channeling' },
  },
];

export const steps = [
  {
    icon: '/images/step-1.png',
    title: 'Book and pay',
    text: 'Choose your session and a time that suits you. Payment is taken when you book.',
  },
  {
    icon: '/images/step-2.png',
    title: 'Send three things',
    text: "For each animal, a photo, their name and their species. For channeling, just bring your questions.",
  },
  {
    icon: '/images/step-3.png',
    title: 'Receive your message',
    text: 'Written readings arrive in your inbox within 7 days. For live sessions, we meet on video and I share everything as it comes through.',
  },
];

export const CONTACT_EMAIL = 'hello@katchannels.com';

// Tally intake form for animal readings (photo, name, species, up to 3 animals).
export const INTAKE_FORM_URL = 'https://tally.so/r/M1Xbxk';

export const social = {
  instagram: 'https://www.instagram.com/kat_channels/',
  tiktok: 'https://www.tiktok.com/@kat_channels',
};

export const DISCLAIMER =
  'Readings are intuitive and are not a substitute for veterinary, medical, legal or financial advice.';

export const faqGroups = [
  {
    title: 'Before your session',
    items: [
      {
        q: 'What do you need from me before a reading?',
        a: "For an animal reading, a clear photo of each animal, their name and their species. I don't need their history, symptoms or what you think is going on. Keeping those out lets the reading come through clearly. For a channeling session, there's nothing to send ahead. Just bring your questions.",
      },
      {
        q: 'Can you connect with an animal who has passed?',
        a: 'Yes. Written and live readings are both available for animals who have crossed over, at the same price as a reading for a living animal.',
      },
      {
        q: 'Can I include more than one animal?',
        a: 'Yes, up to three in one booking. Each extra animal is $80. A written reading is $180 for one animal, $260 for two and $340 for three. A live reading is $200 for one animal, $280 for two (both 1 hour) and $360 for three (90 minutes). Choose how many animals when you book.',
      },
      {
        q: 'How do I prepare for a live session?',
        a: "Find a quiet spot with a steady internet connection and have your animal's photo nearby. Bring any questions you'd like me to ask them.",
      },
      {
        q: 'Is a reading a substitute for my vet or doctor?',
        a: "No. Readings are intuitive and are not a substitute for veterinary, medical, legal or financial advice. If something physical comes up in a reading, please take it to your vet.",
      },
    ],
  },
  {
    title: 'Booking and policies',
    items: [
      {
        q: 'What is your cancellation policy?',
        a: 'Cancel a live session at least 48 hours before it starts and your payment is refunded in full, automatically. Within 48 hours, I can move your session once. Written readings can be refunded within 48 hours of purchase.',
      },
      {
        q: 'Are sessions refundable after they happen?',
        a: "Once a written reading has been delivered or a live session has taken place, it isn't refundable. Readings are intuitive, so I can't guarantee specific details or outcomes. If a technical problem on my end stops a live session from happening, I'll reschedule it at no cost.",
      },
      {
        q: 'What happens if I miss my appointment?',
        a: "A missed live session without notice counts as completed. Message me within 24 hours and I'll do my best to offer one new time.",
      },
      {
        q: 'How do I reach you?',
        a: 'Email me at hello@katchannels.com and I\'ll get back to you.',
      },
    ],
  },
];

// Session button style used in production. The dev-only switcher can override it on localhost.
export const design = {
  button: 'kb-arrow',
  hero: 'ivy-arch',
};

// Hero image options. The dev-only switcher in the hero lets you compare them on localhost.
export const heroImages = [
  { id: 'current', label: 'Current', src: '/images/hero-garden-arch.jpg', size: [1536, 1024], position: '50% 45%', alt: 'A stone garden archway draped in deep red roses, opening onto a lantern-lit path at dusk' },
  { id: 'misty-dusk', label: '1 Misty dusk', src: '/images/hero-1.jpg', size: [1672, 941], position: '50% 50%', alt: 'A stone archway framed by red roses, opening onto a misty garden path at dusk' },
  { id: 'golden-hour', label: '2 Golden hour', src: '/images/hero-2.jpg', size: [1536, 1024], position: '50% 50%', alt: 'A sunlit stone archway with white roses, opening onto a garden path and stone urn' },
  { id: 'open-gates', label: '3 Open gates', src: '/images/hero-3.jpg', size: [1536, 1024], position: '50% 55%', alt: 'Open iron gates in a rose-covered stone arch, with a lantern-lit path at sunset' },
  { id: 'crescent-moon', label: '4 Crescent moon', src: '/images/hero-4.jpg', size: [1670, 941], position: '50% 40%', alt: 'A stone archway at night with a crescent moon over cypress trees and lantern-lit steps' },
  { id: 'side-arch', label: '5 Side arch', src: '/images/hero-5.jpg', size: [1672, 941], position: '100% 50%', alt: 'A rose-covered stone archway on the right, opening onto a glowing garden path at dusk' },
  { id: 'ivy-arch', label: '6 Ivy arch', src: '/images/hero-6.jpg', size: [1358, 1159], position: '100% 25%', alt: 'An ivy-covered stone archway opening onto a lantern-lit garden path at sunset' },
];

export const buttonStyles = [
  { label: 'Glass', cls: 'kb-glass' },
  { label: '1 Hairline', cls: 'kb-hair' },
  { label: '2 Underline', cls: 'kb-line' },
  { label: '3 Slim pill', cls: 'kb-pill' },
  { label: '4 Diamonds', cls: 'kb-diamond' },
  { label: '5 Shine', cls: 'kb-shine' },
  { label: '6 Arrow', cls: 'kb-arrow' },
  { label: '7 Corners', cls: 'kb-corners' },
  { label: '8 Fill sweep', cls: 'kb-wipe' },
  { label: '9 Star', cls: 'kb-star' },
  { label: '10 Faded lines', cls: 'kb-fade' },
  { label: '11 Solid ivory', cls: 'kb-ivory' },
];
