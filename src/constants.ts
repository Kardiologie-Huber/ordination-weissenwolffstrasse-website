export const EMAIL = 'office@ordination-weissenwolffstrasse.at';
export const PHONE = '+43 681 813 612 95';
export const WEB = 'https://ordination-weissenwolffstrasse.at';
export const SITE_NAME = 'Ordination Weißenwolffstraße';

// Praxen in der Ordination, überall alphabetisch nach `lastName` sortiert
// (Navigation, Fußzeile, Kacheln und Schema).
// `href` ist die eigene Seite hier, `website` die Website der Praxis.
export interface Practice {
  name: string;
  lastName: string;
  field: string;
  text: string;
  href: string;
  website: string;
  type: 'Physician' | 'MedicalBusiness';
  specialty?: string;
}

const practices: Practice[] = [
  {
    name: 'Dr. Peter Huber',
    lastName: 'Huber',
    field: 'Kardiologie',
    text: 'Facharzt für Innere Medizin und Kardiologie, Wahlarzt',
    href: '/aerzte-und-therapeuten/kardiologie-dr-peter-huber/',
    website: 'https://kardiologie-huber.at/',
    type: 'Physician',
    specialty: 'Cardiovascular',
  },
  {
    name: 'Dr. Violetta Kuře',
    lastName: 'Kuře',
    field: 'Neurologie',
    text: 'Fachärztin für Neurologie und Allgemeinmedizin',
    href: '/aerzte-und-therapeuten/neurologie-dr-violetta-kure/',
    website: 'https://neurologie-kure.at/',
    type: 'Physician',
    specialty: 'Neurologic',
  },
  {
    name: 'Dr. Beate Holler',
    lastName: 'Holler',
    field: 'Allgemeinmedizin',
    text: 'Fachärztin für Allgemeinmedizin, Wahlärztin',
    href: '/aerzte-und-therapeuten/allgemeinmedizin-dr-beate-holler/',
    website: 'https://praxis.holler.or.at/',
    type: 'Physician',
    specialty: 'PrimaryCare',
  },
  {
    name: 'Elke Schachinger, MMSc D.O.',
    lastName: 'Schachinger',
    field: 'Osteopathie & Ergotherapie',
    text: 'Osteopathin, Kinderosteopathin und Ergotherapeutin',
    href: '/aerzte-und-therapeuten/osteopathie-elke-schachinger/',
    website: 'https://www.ergotherapie-linz.at/',
    type: 'MedicalBusiness',
  },
];

export const PRACTICES = practices.sort((a, b) => a.lastName.localeCompare(b.lastName, 'de'));
