import React, { useState } from "react";
import blueLine from "../assets/blue-line.png";

const CanadianSchools = [
  { id: 1, name: "Brock University" },
  { id: 2, name: "Carleton University" },
  { id: 3, name: "Dalhousie University" },
  { id: 4, name: "Lakehead University" },
  { id: 5, name: "McMaster University" },
  { id: 6, name: "New York Institute of Technology (NYIT)" },
  { id: 7, name: "Northeastern University" },
  { id: 8, name: "Queens University at Kingston" },
  { id: 9, name: "Ryerson University" },
  { id: 10, name: "Trent University" },
  { id: 11, name: "Toronto Metropolitan University" },
  { id: 12, name: "University of Alberta" },
  { id: 13, name: "University of Calgary" },
  { id: 14, name: "University of Guelph" },
  { id: 15, name: "University of Lethbridge" },
  { id: 16, name: "University of Ottawa" },
  { id: 17, name: "University of Toronto" },
  { id: 18, name: "University of Victoria" },
  { id: 19, name: "University of Waterloo" },
  { id: 20, name: "University of Windsor" },
  { id: 21, name: "Western University – University of Western Ontario" },
  { id: 22, name: "Wilfrid Laurier University" },
  { id: 23, name: "York University" },
  { id: 24, name: "University of New Brunswick" },
  { id: 25, name: "University of Saskatchewan" },
  { id: 26, name: "University of Manitoba" },
];

const NigerianSchools = [
  { id: 1, name: "Achievers University, Owo" },
  { id: 2, name: "Adeleke University, Ede" },
  { id: 3, name: "Afe Babalola University, Ado-Ekiti – Ekiti State" },
  { id: 4, name: "African University of Science & Technology, Abuja" },
  { id: 5, name: "Ahman Pategi University, Kwara State" },
  { id: 6, name: "Ajayi Crowther University, Ibadan" },
  { id: 7, name: "Al-Ansar University, Maiduguri, Borno" },
  { id: 8, name: "Al-Bayan University, Ankpa, Kogi State" },
  { id: 9, name: "Al-Hikmah University, Ilorin" },
  { id: 10, name: "Al-Istiqama University, Sumaila, Kano State" },
  { id: 11, name: "Al-Muhibbah Open University, Abuja" },
  { id: 12, name: "Al-Qalam University, Katsina" },
  { id: 13, name: "Aletheia University, Ago-Iwoye Ogun State" },
  { id: 14, name: "Amadeus University, Amizi, Abia State" },
  { id: 15, name: "Amaj University, Kwali, Abuja" },
  { id: 16, name: "American University of Nigeria, Yola" },
  { id: 17, name: "Anan University, Kwall, Plateau State" },
  { id: 18, name: "Anchor University Ayobo Lagos State" },
  { id: 19, name: "Arthur Javis University Akpoyubo Cross river State" },
  { id: 20, name: "Atiba University Oyo" },
  { id: 21, name: "Augustine University" },
  { id: 22, name: "Ave Maria University, Piyanko, Nasarawa State" },
  { id: 23, name: "Azman University, Kano State" },
  { id: 24, name: "Baba Ahmed University, Kano State" },
  { id: 25, name: "Babcock University, Ilishan-Remo" },
  { id: 26, name: "Baze University" },
  { id: 27, name: "Bells University of Technology, Otta" },
  { id: 28, name: "Benson Idahosa University, Benin City" },
  { id: 29, name: "Bingham University, New Karu" },
  { id: 30, name: "Bowen University, Iwo" },
  { id: 31, name: "British Canadian University, Obufu Cross River State" },
  { id: 32, name: "Caleb University, Lagos" },
  { id: 33, name: "Canadian University of Nigeria, Abuja" },
  { id: 34, name: "Capital City University, Kano State" },
  { id: 35, name: "Caritas University, Enugu" },
  { id: 36, name: "Chrisland University" },
  { id: 37, name: "Christopher University Mowe" },
  { id: 38, name: "Claretian University of Nigeria, Nekede, Imo State" },
  { id: 39, name: "Clifford University Owerrinta Abia State" },
  { id: 40, name: "Coal City University Enugu State" },
  { id: 41, name: "College of Petroleum and Energy Studies, Kaduna State" },
  { id: 42, name: "Cosmopolitan University Abuja" },
  { id: 43, name: "Covenant University Ota" },
  { id: 44, name: "Crawford University Igbesa" },
  { id: 45, name: "Crescent University" },
  { id: 46, name: "Dominican University Ibadan Oyo State" },
  { id: 47, name: "Dominion University Ibadan, Oyo State" },
  { id: 48, name: "Edusoko University, Bida, Niger State" },
  { id: 49, name: "Edwin Clark University, Kaigbodo" },
  {
    id: 50,
    name: "Eko University of Medical and Health Sciences Ijanikin, Lagos",
  },
  { id: 51, name: "El-Amin University, Minna, Niger State" },
  { id: 52, name: "Elizade University, Ilara-Mokin" },
  { id: 53, name: "Elrazi Medical University Yargaya University, Kano State" },
  { id: 54, name: "European University of Nigeria, Duboyi, FCT" },
  { id: 55, name: "Evangel University, Akaeze" },
  { id: 56, name: "Fountain Unveristy, Oshogbo" },
  { id: 57, name: "Franco British International University, Kaduna State" },
  {
    id: 58,
    name: "Gerar University of Medical Science Imope Ijebu, Ogun State.",
  },
  { id: 59, name: "Glorious Vision University, Ogwa, Edo State." },
  { id: 60, name: "Godfrey Okoye University, Ugwuomu-Nike – Enugu State" },
  { id: 61, name: "Iconic Open University, Sokoto State." },
  { id: 62, name: "Igbinedion University Okada" },
  { id: 63, name: "James Hope University, Lagos, Lagos State" },
  { id: 64, name: "Jewel University, Gombe state" },
  { id: 65, name: "Joseph Ayo Babalola University, Ikeji-Arakeji" },
  { id: 66, name: "Karl-Kumm University, Vom, Plateau State" },
  { id: 67, name: "Khadija University, Majia, Jigawa State" },
  { id: 68, name: "Khalifa Isiyaku Rabiu University, Kano" },
  { id: 69, name: "Kings University, Ode Omu" },
  { id: 70, name: "Kola Daisi University Ibadan, Oyo State" },
  { id: 71, name: "Kwararafa University, Wukari" },
  { id: 72, name: "Landmark University, Omu-Aran." },
  { id: 73, name: "Lead City University, Ibadan" },
  { id: 74, name: "Legacy University, Okija Anambra State" },
  { id: 75, name: "Lux Mundi University Umuahia, Abia State" },
  { id: 76, name: "Madonna University, Okija" },
  { id: 77, name: "Maduka University, Ekwegbe, Enugu State" },
  { id: 78, name: "Maranathan University, Mgbidi, Imo State" },
  { id: 79, name: "Margaret Lawrence University, Umunede, Delta State" },
  { id: 80, name: "Maryam Abacha American University of Nigeria, Kano State" },
  { id: 81, name: "Mcpherson University, Seriki Sotayo, Ajebo" },
  { id: 82, name: "Mercy Medical University, Iwo, Ogun State" },
  { id: 83, name: "Mewar International University, Masaka, Nasarawa State" },
  { id: 84, name: "Micheal & Cecilia Ibru University" },
  { id: 85, name: "Miva Open University, Abuja FCT" },
  { id: 86, name: "Mountain Top University" },
  { id: 87, name: "Mudiame University, Irrua, Edo State" },
  { id: 88, name: "Muhammad Kamalud University Kwara" },
  { id: 89, name: "Newgate University, MInna, Niger State." },
  { id: 90, name: "Nigerian British University, Asa, Abia State" },
  {
    id: 91,
    name: "Nigerian University of Technology and Management, Apapa, Lagos State",
  },
  { id: 92, name: "Nile University of Nigeria, Abuja" },
  { id: 93, name: "NOK University, Kachia, Kaduna State" },
  { id: 94, name: "NorthWest University Sokoto State" },
  { id: 95, name: "Novena University, Ogume" },
  { id: 96, name: "Obong University, Obong Ntak" },
  { id: 97, name: "Oduduwa University, Ipetumodu – Osun State" },
  { id: 98, name: "Ojaja University Eiyenkorin, Kwara State" },
  { id: 99, name: "PAMO University of Medical Sciences, Portharcourt" },
  { id: 100, name: "Pan-Atlantic University, Lagos" },
  { id: 101, name: "Paul University, Awka – Anambra State" },
  { id: 102, name: "PeaceLand University, Enugu State" },
  { id: 103, name: "PEN Resource University, Gombe" },
  { id: 104, name: "Peter University, Achina-Onneh Anambra State" },
  { id: 105, name: "Philomath University, Kuje, Abuja" },
  { id: 106, name: "Phoenix University, Agwada, Nasarawa State" },
  { id: 107, name: "Precious Cornerstone University, Oyo" },
  { id: 108, name: "Prime University, Kuje, FCT Abuja" },
  { id: 109, name: "Rayhaan University, Kebbi" },
  { id: 110, name: "Redeemer’s University, Ede" },
  { id: 111, name: "Renaissance University, Enugu" },
  { id: 112, name: "Rhema University, Obeama-Asa – Rivers State" },
  { id: 113, name: "Ritman University, Ikot Ekpene, Akwa Ibom" },
  {
    id: 114,
    name: "Saisa University of Medical Sciences and Technology, Sokoto State",
  },
  { id: 115, name: "Salem University, Lokoja" },
  { id: 116, name: "Sam Maris University, Ondo" },
  { id: 117, name: "Shanahan University Onitsha, Anambra State" },
  { id: 118, name: "Skyline University, Kano" },
  { id: 119, name: "Southwestern University, Oku Owa" },
  { id: 120, name: "Spiritan University, Nneochi Abia State" },
  { id: 121, name: "Sports University, Idumuje, Ugboko, Delta State" },
  { id: 122, name: "Summit University, Offa" },
  { id: 123, name: "Tansian University, Umunya" },
  { id: 124, name: "The Duke Medical University, Calabar, Cross River State" },
  { id: 125, name: "Thomas Adewumi University, Oko-Irese, Kwara State" },
  { id: 126, name: "Topfaith University, Mkpatak, Akwa Ibom State" },
  { id: 127, name: "Trinity University Ogun State" },
  { id: 128, name: "University of Mkar, Mkar" },
  { id: 129, name: "University of Offa, Kwara State" },
  { id: 130, name: "University on the Niger, Umunya, Anambra state" },
  { id: 131, name: "Venite University, Iloro-Ekiti, Ekiti State" },
  { id: 132, name: "Veritas University, Abuja" },
  { id: 133, name: "Vision University, Ikogbo, Ogun State" },
  { id: 134, name: "Wellspring University, Evbuobanosa – Edo State" },
  { id: 135, name: "Wesley University Ondo" },
  { id: 136, name: "West Midlands Open University, Ibadan, Oyo State" },
  { id: 137, name: "Western Delta University, Oghara Delta State" },
  { id: 138, name: "Westland University Iwo, Osun State" },
  { id: 139, name: "Wigwe University, Isiokpo Rivers State" },
];

const ProfessionalBodies = [
  { id: 1, name: "Association of Certified Fraud Examiners" },
  { id: 2, name: "British Council" },
  { id: 3, name: "CFA EXAMS (ALL LEVELS)" },
  { id: 4, name: "Cambridge IGCSE qualification" },
  {
    id: 5,
    name: "Certiﬁcation Edge/Vantage Certifications (SPHRI, aPHRi | PHRi | SPHRi CERTIFICATIONS)",
  },
  { id: 6, name: "Chartered Governance Institute" },
  { id: 7, name: "Chartered Institute of Bankers of Nigeria" },
  { id: 8, name: "Chartered Institute of Stockbrokers" },
  { id: 9, name: "Chartered Institute of Personnel Management of Nigeria" },
  { id: 10, name: "Chartered Insurance Institute Of Nigeria" },
  {
    id: 11,
    name: "Chartered institute for Securities and Investment (Global Financial Compliance)",
  },
  { id: 12, name: "Homeworks.NG for GRE Examination" },
  { id: 13, name: "Institute of Chartered Accountants of Nigeria" },
  {
    id: 15,
    name: "Simon Page College of Marketing for Chartered Institute of Marketing",
  },
  { id: 16, name: "Teachers Registration Council of Nigeria" },
  {
    id: 14,
    name: "OTHER PROFESSIONALS INSTITUTES, BODIES AND EXAMS NOT LISTED",
  },
];

const USSchools = [
  { id: 1, name: "A. T. Still University of Health Sciences" },
  { id: 2, name: "Adelphi University" },
  { id: 3, name: "Albany College of Pharmacy and Health Sciences" },
  { id: 4, name: "Albany Medical College" },
  { id: 5, name: "Allen College" },
  { id: 6, name: "American University" },
  { id: 7, name: "American University of Antigua (AUA) College of Medicine" },
  { id: 8, name: "Amherst College" },
  { id: 9, name: "Appalachian State University" },
  { id: 10, name: "Arcadia University" },
  { id: 11, name: "Arizona State University" },
  { id: 12, name: "Arizona State University- Downtown Phoenix" },
  { id: 13, name: "Arizona State University- Polytechnic" },
  { id: 14, name: "Arizona State University- Skysong" },
  { id: 15, name: "Arizona State University- West" },
  { id: 16, name: "Auburn University" },
  { id: 17, name: "Babson College" },
  { id: 18, name: "Ball State University" },
  { id: 19, name: "Barnard College" },
  { id: 20, name: "Baruch College of the City University of New York" },
  { id: 21, name: "Bates College" },
  { id: 22, name: "Baylor College of Medicine" },
  { id: 23, name: "Baylor University" },
  { id: 24, name: "Bellin College" },
  { id: 25, name: "Belmont University" },
  { id: 26, name: "Bentley University" },
  { id: 27, name: "Berry College" },
  { id: 28, name: "Biola University" },
  { id: 29, name: "Bon Secours Memorial College of Nursing" },
  { id: 30, name: "Boston College" },
  { id: 31, name: "Boston University" },
  { id: 32, name: "Bowdoin College" },
  { id: 33, name: "Bradley University" },
  { id: 34, name: "Brandeis University" },
  { id: 35, name: "Brigham Young University – Provo | BYU" },
  { id: 36, name: "Brown University" },
  { id: 37, name: "Bryan College of Health Sciences" },
  { id: 38, name: "Bryant University" },
  { id: 39, name: "Bryn Mawr College" },
  { id: 40, name: "Bucknell University" },
  { id: 41, name: "Butler University" },
  { id: 42, name: "California Institute of Technology" },
  {
    id: 43,
    name: "California State University Maritime Academy (Cal Maritime)",
  },
  {
    id: 44,
    name: "California Polytechnic State University-San Luis Obispo – Cal Poly",
  },
  { id: 45, name: "California State University – Long Beach" },
  { id: 46, name: "California State University – Los Angeles" },
  { id: 47, name: "Calvin College" },
  { id: 48, name: "Carleton College" },
  { id: 49, name: "Carnegie Mellon University" },
  { id: 50, name: "Catholic University of America" },
  { id: 51, name: "Centra College of Nursing" },
  { id: 52, name: "Centre College" },
  { id: 53, name: "Chapman University" },
  { id: 54, name: "Chatham University" },
  { id: 55, name: "City College of New York – University of New York" },
  { id: 56, name: "Claremont Graduate University" },
  { id: 57, name: "Claremont McKenna College" },
  { id: 58, name: "Clark University" },
  { id: 59, name: "Clarkson College" },
  { id: 60, name: "Clarkson University" },
  { id: 61, name: "Clemson University" },
  { id: 62, name: "Colby College" },
  { id: 63, name: "Colgate University" },
  { id: 64, name: "College of Charleston" },
  { id: 65, name: "College of the Holy Cross" },
  { id: 66, name: "College of William and Mary" },
  { id: 67, name: "Colorado College" },
  { id: 68, name: "Colorado School of Mines" },
  { id: 69, name: "Colorado State University-Fort Collins" },
  { id: 70, name: "Columbia University" },
  { id: 71, name: "Connecticut College" },
  { id: 72, name: "Cooper Union for the Advancement of Science and Art" },
  { id: 73, name: "Cornell University" },
  { id: 74, name: "Creighton University" },
  { id: 75, name: "Dartmouth College" },
  { id: 76, name: "Davidson College" },
  { id: 77, name: "Denison University" },
  { id: 78, name: "Denver College of Nursing" },
  { id: 79, name: "DePaul University" },
  { id: 80, name: "DePauw University" },
  { id: 81, name: "Des Moines University – Osteopathic Medical Center" },
  { id: 82, name: "DeSales University" },
  { id: 83, name: "Dickinson College" },
  { id: 84, name: "Dordt College" },
  { id: 85, name: "Drake University" },
  { id: 86, name: "Drexel University" },
  { id: 87, name: "Duke University" },
  { id: 88, name: "Duquesne University" },
  { id: 89, name: "Eastern Virginia Medical School" },
  { id: 90, name: "Edgewood College" },
  { id: 91, name: "Elon University" },
  { id: 92, name: "Emerson College" },
  { id: 93, name: "Emory University" },
  { id: 94, name: "Fairfield University" },
  { id: 95, name: "Florida Atlantic University" },
  { id: 96, name: "Florida International University" },
  { id: 97, name: "Florida State University – FSU" },
  { id: 98, name: "Fordham University" },
  { id: 99, name: "University of Iowa" },
  { id: 100, name: "University of Kansas" },
  { id: 101, name: "University of Kentucky" },
  { id: 102, name: "University of La Verne" },
  { id: 103, name: "University of Louisville" },
  { id: 104, name: "University of Maine" },
  { id: 105, name: "University of Maryland – Baltimore" },
  { id: 106, name: "University of Maryland – Baltimore County" },
  { id: 107, name: "University of Maryland – College Park" },
  { id: 108, name: "University of Massachusetts – Lowell" },
  { id: 109, name: "University of Massachusetts Amherst – UMass Amherst" },
  { id: 110, name: "University of Massachusetts Medical School (UMMS)" },
  { id: 111, name: "University of Miami" },
  { id: 112, name: "University of Michigan – Ann Arbor" },
  { id: 113, name: "University of Minnesota – Twin Cities" },
  { id: 114, name: "University of Missouri – Columbia" },
  { id: 115, name: "University of Mount Union" },
  { id: 116, name: "University of Nebraska – Lincoln" },
  { id: 117, name: "University of Nebraska Medical Center" },
  { id: 118, name: "University of New England" },
  { id: 119, name: "University of New Hampshire" },
  { id: 120, name: "University of North Carolina – Wilmington" },
  { id: 121, name: "University of North Carolina at Chapel Hill – UNC" },
  { id: 122, name: "University of North Dakota" },
  {
    id: 123,
    name: "University of North Texas Health Science Center at Fort Worth",
  },
  { id: 124, name: "University of Northern Iowa" },
  { id: 125, name: "University of Notre Dame" },
  { id: 126, name: "University of Oklahoma" },
  { id: 127, name: "University of Oregon" },
  { id: 128, name: "University of Pennsylvania (including Wharton)" },
  { id: 129, name: "University of Pittsburgh" },
  { id: 130, name: "University of Portland" },
  { id: 131, name: "Wake Forest University" },
  { id: 132, name: "Washington and Lee University" },
  { id: 133, name: "Washington State University" },
  { id: 134, name: "Washington University in St Louis" },
  { id: 135, name: "Wellesley College" },
  { id: 136, name: "Wesleyan University" },
  { id: 137, name: "Western University of Health Sciences" },
  { id: 138, name: "Western Washington University" },
  { id: 139, name: "Whitman College" },
  { id: 140, name: "Whitworth University" },
  { id: 141, name: "Widener University – Main Campus" },
  { id: 142, name: "William Jessup University" },
  { id: 143, name: "Williams College" },
  { id: 144, name: "Worcester Polytechnic Institute" },
  { id: 145, name: "Yale University" },
  { id: 146, name: "Yeshiva University" },
  { id: 147, name: "University of Alabama at Birmingham" },
  { id: 148, name: "University of Arizona" },
  { id: 149, name: "University of Arkansas Fayetteville" },
  { id: 150, name: "University of Arkansas for Medical Sciences" },
  { id: 151, name: "University of California – Berkeley" },
  { id: 152, name: "University of California – Davis" },
  { id: 153, name: "University of California – Irvine" },
  { id: 154, name: "University of California – Los Angeles – UCLA" },
  { id: 155, name: "University of California – Merced" },
  { id: 156, name: "University of California – Riverside" },
  { id: 157, name: "University of California – San Diego – UCSD" },
  { id: 158, name: "University of California – San Francisco – UCSF" },
  { id: 159, name: "University of California – Santa Barbara – UCSB" },
  { id: 160, name: "University of California – Santa Cruz" },
  { id: 161, name: "University of California College of Law" },
  { id: 162, name: "University of Central Florida" },
  { id: 163, name: "University of Chicago (incl. Booth)" },
  { id: 164, name: "University of Cincinnati" },
  { id: 165, name: "University of Colorado at Boulder" },
  { id: 166, name: "University of Colorado at Colorado Springs" },
  { id: 167, name: "University of Colorado Denver" },
  { id: 168, name: "University of Connecticut – Uconn" },
  { id: 169, name: "University of Dayton" },
  { id: 170, name: "University of Delaware" },
  { id: 171, name: "University of Denver" },
  { id: 172, name: "University of Detroit Mercy" },
  { id: 173, name: "University of Florida" },
  { id: 174, name: "University of Georgia" },
  { id: 175, name: "University of Hartford" },
  { id: 176, name: "University of Hawaii at Manoa" },
  { id: 177, name: "University of Health Sciences and Pharmacy in St Louis" },
  { id: 178, name: "University of Houston" },
  { id: 179, name: "University of Idaho" },
  { id: 180, name: "University of Illinois at Chicago" },
  { id: 181, name: "University of Illinois at Urbana-Champaign" },
  { id: 182, name: "University of Iowa" },
  { id: 183, name: "University of Kansas" },
  { id: 184, name: "University of Kentucky" },
  { id: 185, name: "University of La Verne" },
  { id: 186, name: "University of Louisville" },
  { id: 187, name: "University of Maine" },
  { id: 188, name: "University of Maryland – Baltimore" },
  { id: 189, name: "University of Maryland – Baltimore County" },
  { id: 190, name: "University of Maryland – College Park" },
  { id: 191, name: "University of Massachusetts – Lowell" },
  { id: 192, name: "University of Massachusetts Amherst – UMass Amherst" },
  { id: 193, name: "University of Massachusetts Medical School (UMMS)" },
  { id: 194, name: "University of Miami" },
  { id: 195, name: "University of Michigan – Ann Arbor" },
  { id: 196, name: "University of Minnesota – Twin Cities" },
  { id: 197, name: "University of Missouri – Columbia" },
  { id: 198, name: "University of Mount Union" },
  { id: 199, name: "University of Nebraska – Lincoln" },
  { id: 200, name: "University of Nebraska Medical Center" },
  { id: 201, name: "University of New England" },
  { id: 202, name: "University of Virginia" },
  { id: 203, name: "University of Washington- Seattle" },
  { id: 204, name: "University of Wisconsin – Madison" },
  { id: 205, name: "University of Wyoming" },
  { id: 206, name: "Utah College of Dental Hygiene" },
  { id: 207, name: "Valparaiso University" },
  { id: 208, name: "Vanderbilt University" },
  { id: 209, name: "Vassar College" },
  { id: 210, name: "Villanova University" },
  { id: 211, name: "Virginia Commonwealth University" },
  { id: 212, name: "Virginia Polytechnic Institute and State University" },
  { id: 213, name: "Wake Forest University" },
  { id: 214, name: "Washington and Lee University" },
  { id: 215, name: "Washington State University" },
  { id: 216, name: "Washington University in St Louis" },
  { id: 217, name: "Wellesley College" },
  { id: 218, name: "Wesleyan University" },
  { id: 219, name: "Western University of Health Sciences" },
  { id: 220, name: "Western Washington University" },
  { id: 221, name: "Whitman College" },
  { id: 222, name: "Whitworth University" },
  { id: 223, name: "Widener University – Main Campus" },
  { id: 224, name: "William Jessup University" },
  { id: 225, name: "Williams College" },
  { id: 226, name: "Worcester Polytechnic Institute" },
  { id: 227, name: "Yale University" },
  { id: 228, name: "Yeshiva University" },
];

const SupportedSchools = () => {
  const [selectedCategory, setSelectedCategory] = useState("Canadian");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  return (
    <div className="px-10 lg:px-20 lg:py-10 flex flex-col items-center justify-center">
      <span className="relative my-12">
        <p className="font-bold text-center text-3xl text-[#323232]">
          List of <span className="text-[#DB251A]">Supported Schools </span>
        </p>
        <img
          src={blueLine}
          alt="line"
          className="hidden sm:flex absolute right-0 top-10"
        />
      </span>

      {/* SELECT FIELD */}
      <div className="flex flex-col items-start">
        <label
          htmlFor=""
          className="my-4 text-[#646464] font-medium text-lg text-left"
        >
          Select your Preferred Category
        </label>
        <select
          name=""
          id=""
          className="w-[340px] lg:w-[500px] border border-black gap-4 bg-white shadow-xl font-medium text-black p-4 rounded-xl"
          onChange={handleCategoryChange}
        >
          <option value="Canadian" className="my-4 text-black font-medium">
            Canadian Schools
          </option>
          <option value="US" className="my-4 text-black font-medium">
            US Schools
          </option>
          <option value="Nigerian" className="my-4 text-black font-medium">
            Nigerian Schools
          </option>
          <option value="Professional" className="my-4 text-black font-medium">
            Professional Bodies
          </option>
        </select>
      </div>

      <div className="my-8 border font-medium border-black rounded-lg py-4 shadow-2xl">
        {/* FOR CANADIAN SCHOOLS */}
        {selectedCategory === "Canadian" && (
          <div className="flex flex-col">
            {CanadianSchools.map((school, index) => (
              <i
                key={school.id}
                className={`border-black ${
                  index !== CanadianSchools.length - 1 ? "border-b shadow-lg" : ""
                } px-8 py-4`}
              >
                {school.name}
              </i>
            ))}
          </div>
        )}

        {/* FOR NIGERRIAN SCHOOLS */}
        {selectedCategory === "Nigerian" && (
          <div className="flex flex-col">
            {NigerianSchools.map((school, index) => {
              return (
                <i
                  key={school.id}
                  className={`border-black ${
                    index !== NigerianSchools.length - 1 ? "border-b shadow-lg" : ""
                  } px-8 py-4`}
                >
                  {school.name}
                </i>
              );
            })}
          </div>
        )}

        {/* PROFESSIONAL BODIES */}
        {selectedCategory === "Professional" && (
          <div className="flex flex-col">
            {ProfessionalBodies.map((school, index) => {
              return (
                <i
                  key={school.id}
                  className={`border-black ${
                    index !== ProfessionalBodies.length - 1 ? "border-b shadow-lg" : ""
                  } px-8 py-4`}
                >
                  {school.name}
                </i>
              );
            })}
          </div>
        )}

        {/* US SCHOOLS */}
        {selectedCategory === "US" && (
          <div className="flex flex-col">
            {USSchools.map((school, index) => {
              return (
                <i
                  key={school.id}
                  className={`border-black ${
                    index !== USSchools.length - 1 ? "border-b shadow-lg" : ""
                  } px-8 py-4`}
                >
                  {school.name}
                </i>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SupportedSchools;
