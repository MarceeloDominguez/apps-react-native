export interface Doctor {
  address: string;
  biography: string;
  expriense: number;
  id: number;
  location: string;
  mobile: string;
  name: string;
  patiens: string;
  picture: string;
  rating: number;
  site: string;
  special: string;
}

export const doctors: Doctor[] = [
  {
    address: "8502 Preston Rd, Inglewood, Maine 98380",
    biography:
      "A board-certified with over 25 years of experience, specializing in heart conditions such as coronary artery disease and arrhythmias. Known for patient-centered care and a commitment to the latest medical advancements.",
    expriense: 20,
    id: 0,
    location:
      "http://maps.google.com/maps?q=loc:31.995801008207952,44.31452133516133",
    mobile: "00123456789",
    name: "Dr. Michael Roberts",
    patiens: "1200+",
    picture: require("@/assets/appointment-doctor/dr-1.png"),
    rating: 4.2,
    site: "http://www.test.com",
    special: "Orthopedics",
  },
  {
    address: "4829 New Street, Springfield, Illinois 62704",
    biography:
      "Expert in pediatrics with a passion for child health and wellness. Over 15 years of experience providing top-notch care for children of all ages.",
    expriense: 15,
    id: 1,
    location: "http://maps.google.com/maps?q=loc:39.78172130000001,-89.6501481",
    mobile: "00198765432",
    name: "Dr. Susan Carter",
    patiens: "900+",
    picture: require("@/assets/appointment-doctor/dr-2.png"),
    rating: 4.8,
    site: "http://www.childcare.com",
    special: "Pediatrics",
  },
  {
    address: "104 North Avenue, Brooklyn, New York 11211",
    biography:
      "A highly skilled dermatologist with over 18 years of experience in treating skin conditions and performing cosmetic procedures.",
    expriense: 18,
    id: 2,
    location: "http://maps.google.com/maps?q=loc:40.712776,-73.963401",
    mobile: "00111223344",
    name: "Dr. Emily White",
    patiens: "1500+",
    picture: require("@/assets/appointment-doctor/dr-5.png"),
    rating: 4.7,
    site: "http://www.skincareexperts.com",
    special: "Dermatology",
  },
  {
    address: "902 Main Street, Austin, Texas 73301",
    biography:
      "A leading neurologist with a focus on treating epilepsy, migraines, and other neurological disorders. Known for innovative treatments and compassionate care.",
    expriense: 22,
    id: 3,
    location: "http://maps.google.com/maps?q=loc:30.267153,-97.743057",
    mobile: "00144556677",
    name: "Dr. James Wilson",
    patiens: "2000+",
    picture: require("@/assets/appointment-doctor/dr-3.png"),
    rating: 4.9,
    site: "http://www.neurocare.com",
    special: "Neurology",
  },
  {
    address: "123 Elm Street, San Francisco, California 94103",
    biography:
      "An experienced cardiologist specializing in preventative care and advanced treatments for heart conditions. Dedicated to improving patient outcomes.",
    expriense: 25,
    id: 4,
    location: "http://maps.google.com/maps?q=loc:37.774929,-122.419416",
    mobile: "00155667788",
    name: "Dr. Lis Brown",
    patiens: "1800+",
    picture: require("@/assets/appointment-doctor/dr-4.png"),
    rating: 4.6,
    site: "http://www.hearthealth.com",
    special: "Cardiology",
  },
];
