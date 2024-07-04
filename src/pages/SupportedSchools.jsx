import React, { useState } from "react";
import blueLine from "../assets/blue-line.png";

const ukSchools = [
  { id: 0, name: "Aberystwyth University" },
  { id: 1, name: "Anglia Ruskin University" },
  { id: 2, name: "Aston University" },
  { id: 3, name: "Bangor University" },
  { id: 4, name: "Birkbeck University of London" },
  { id: 5, name: "Bournemouth University" },
  { id: 6, name: "Brunel University" },
  { id: 7, name: "Cardiff University" },
  { id: 8, name: "City, University of London" },
  { id: 9, name: "Coventry University" },
  { id: 10, name: "Cranfield University" },
  { id: 11, name: "De Montfort University" },
  { id: 12, name: "Durham University" },
  { id: 13, name: "Edinburgh Napier University" },
  { id: 14, name: "Glasgow Caledonian University" },
  { id: 15, name: "Goldsmiths University of London" },
  { id: 16, name: "Henley Business School" },
  { id: 17, name: "Imperial College London" },
  { id: 18, name: "Keele University" },
  { id: 19, name: "King's College London" },
  { id: 20, name: "Kingston University" },
  { id: 21, name: "Lancaster University" },
  { id: 22, name: "Leeds Beckett University" },
  { id: 23, name: "Liverpool John Moores University" },
  { id: 24, name: "Liverpool School of Tropical Medicine" },
  { id: 25, name: "London Business School" },
  { id: 26, name: "London School of Economics" },
  { id: 27, name: "London School of Hygiene & Tropical Medicine" },
  { id: 28, name: "Loughborough University" },
  { id: 29, name: "Newcastle University" },
  { id: 30, name: "Northumbria University" },
  { id: 31, name: "Nottingham Trent University" },
  { id: 32, name: "Oxford Brookes University" },
  { id: 33, name: "Queen Mary University of London" },
  { id: 34, name: "Queen’s University Belfast" },
  { id: 35, name: "Roehampton University" },
  { id: 36, name: "Royal Holloway University of London" },
  { id: 37, name: "Royal Veterinary College" },
  { id: 38, name: "Sheffield Hallam" },
  { id: 39, name: "St George’s, University of London" },
  { id: 40, name: "Swansea University" },
  { id: 41, name: "The University of Edinburgh" },
  { id: 42, name: "University College London (UCL)" },
  { id: 43, name: "University of Aberdeen" },
  { id: 44, name: "University of Bath" },
  { id: 45, name: "University of Birmingham" },
  { id: 46, name: "University of Bradford" },
  { id: 47, name: "University of Brighton" },
  { id: 48, name: "University of Bristol" },
  { id: 49, name: "University of Cambridge" },
  { id: 50, name: "University of Central Lancashire" },
  { id: 51, name: "University of Derby" },
  { id: 52, name: "University of Dundee" },
  { id: 53, name: "University of East Anglia" },
  { id: 54, name: "University of Essex" },
  { id: 55, name: "University of Exeter" },
  { id: 56, name: "University of Glasgow" },
  { id: 57, name: "University of Greenwich" },
  { id: 58, name: "University of Hertfordshire" },
  { id: 59, name: "University of Huddersfield" },
  { id: 60, name: "University of Hull" },
  { id: 61, name: "University of Kent" },
  { id: 62, name: "University of Leeds" },
  { id: 63, name: "University of Leicester" },
  { id: 64, name: "University of Lincoln" },
  { id: 65, name: "University of Liverpool" },
  { id: 66, name: "University of London School Oriental and African Studies (SOAS)" },
  { id: 67, name: "University of Nottingham" },
  { id: 68, name: "University of Oxford" },
  { id: 69, name: "University of Portsmouth" },
  { id: 70, name: "University of Reading" },
  { id: 71, name: "University of Sheffield" },
  { id: 72, name: "University of Southampton" },
  { id: 73, name: "University of St Andrews" },
  { id: 74, name: "University of Stirling" },
  { id: 75, name: "University of Strathclyde" },
  { id: 76, name: "University of Surrey" },
  { id: 77, name: "University of Sussex" },
  { id: 78, name: "University of the West of England" },
  { id: 79, name: "University of the West of Scotland" },
  { id: 80, name: "University of Ulster" },
  { id: 81, name: "University of Warwick" },
  { id: 82, name: "University of Westminster" },
  { id: 83, name: "University of Wolverhampton" },
  { id: 84, name: "University of York" }
];


const CanadianSchools = [
  { id: 1, name: "Brock University" },
  { id: 2, name: "Carleton University" },
  { id: 3, name: "Dalhousie University" },
  { id: 4, name: "Lakehead University" },
  { id: 5, name: "McMaster University" },
  { id: 27, name: "Memorial University Of Newfoundland"},
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

const canadaPg = [
    { id: 0, name: "Brock University" },
    { id: 1, name: "Carleton University" },
    { id: 2, name: "Ecole de Technologie Superieure" },
    { id: 3, name: "Lakehead University" },
    { id: 4, name: "Laurentian University" },
    { id: 5, name: "McGill University" },
    { id: 6, name: "McMaster University" },
    { id: 7, name: "Ontario Tech University" },
    { id: 8, name: "Simon Fraser University" },
    { id: 9, name: "Toronto Metropolitan University" },
    { id: 10, name: "Trent University" },
    { id: 11, name: "University of British Columbia" },
    { id: 12, name: "University of Calgary" },
    { id: 13, name: "University of Guelph" },
    { id: 14, name: "University of Lethbridge" },
    { id: 15, name: "University of Montreal" },
    { id: 16, name: "University of Sherbrooke" },
    { id: 17, name: "University of Toronto" },
    { id: 18, name: "University of Victoria" },
    { id: 19, name: "University of Waterloo" },
    { id: 20, name: "University of Windsor" },
    { id: 21, name: "Western University" },
    { id: 22, name: "York University" }
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

const usSchools = [
  "A. T. Still University of Health Sciences",
  "Adelphi University",
  "Albany College of Pharmacy and Health Sciences",
  "Albany Medical College",
  "Allen College",
  "American University",
  "American University of Antigua (AUA) College of Medicine",
  "Amherst College",
  "Appalachian State University",
  "Arcadia University",
  "Arizona State University",
  "Arizona State University- Downtown Phoenix",
  "Arizona State University- Polytechnic",
  "Arizona State University- Skysong",
  "Arizona State University- West",
  "Auburn University",
  "Babson College",
  "Ball State University",
  "Barnard College",
  "Baruch College of the City University of New York",
  "Bates College",
  "Baylor College of Medicine",
  "Baylor University",
  "Bellin College",
  "Belmont University",
  "Bentley University",
  "Berry College",
  "Biola University",
  "Bon Secours Memorial College of Nursing",
  "Boston College",
  "Boston University",
  "Bowdoin College",
  "Bradley University",
  "Brandeis University",
  "Brigham Young University – Provo | BYU",
  "Brown University",
  "Bryan College of Health Sciences",
  "Bryant University",
  "Bryn Mawr College",
  "Bucknell University",
  "Butler University",
  "California Institute of Technology",
  "California State University Maritime Academy (Cal Maritime)",
  "California Polytechnic State University-San Luis Obispo – Cal Poly",
  "California State University – Long Beach",
  "California State University – Los Angeles",
  "California State University – San Bernardino",
  "California State University – Northridge",
  "Calvin College",
  "Carleton College",
  "Carnegie Mellon University",
  "Case Western Reserve University",
  "Catholic University of America",
  "Centra College of Nursing",
  "Central Michigan University",
  "Centre College",
  "Chapman University",
  "Chatham University",
  "City College of New York – University of New York",
  "Claremont Graduate University",
  "Claremont McKenna College",
  "Clark University",
  "Clarkson College",
  "Clarkson University",
  "Clemson University",
  "Colby College",
  "Colgate University",
  "College of Charleston",
  "College of the Holy Cross",
  "College of William and Mary",
  "Colorado College",
  "Colorado School of Mines",
  "Colorado State University-Fort Collins",
  "Columbia University",
  "Connecticut College",
  "Cooper Union for the Advancement of Science and Art",
  "Cornell University",
  "Creighton University",
  "Dartmouth College",
  "Davidson College",
  "Denison University",
  "Denver College of Nursing",
  "DePaul University",
  "DePauw University",
  "Des Moines University – Osteopathic Medical Center",
  "DeSales University",
  "Dickinson College",
  "Dordt College",
  "Drake University",
  "Drexel University",
  "Duke University",
  "Duquesne University",
  "Eastern Virginia Medical School",
  "Edgewood College",
  "Elon University",
  "Emerson College",
  "Emory University",
  "Fairfield University",
  "Florida Atlantic University",
  "Florida International University",
  "Florida State University – FSU",
  "Fordham University",
  "Franciscan Missionaries of Our Lady University",
  "Franklin and Marshall College",
  "Frontier Nursing University",
  "Furman University",
  "Gannon University",
  "George Mason University",
  "George Washington University – GWU",
  "Georgetown University",
  "Georgia Institute of Technology – Georgia Tech",
  "Gettysburg College",
  "Goldfarb School of Nursing at Barnes-Jewish College",
  "Gonzaga University",
  "Grand Valley State University",
  "Grinnell College",
  "Hamilton College",
  "Harvard University",
  "Harvey Mudd College",
  "Haverford College",
  "High Point University",
  "Hofstra University",
  "Howard University",
  "Hult International Business School",
  "Hunter College of the City – University of New York",
  "Illinois Institute of Technology",
  "Illinois State University",
  "Indiana University – Bloomington",
  "Indiana University-Purdue University Indianapolis",
  "INSEAD",
  "Iowa State University",
  "James Madison University – JMU",
  "Jefferson College of Health Sciences",
  "John Carroll University",
  "Johns Hopkins University",
  "Kansas State University",
  "Keck Graduate Institute",
  "Kenyon College",
  "Kettering College",
  "La Salle University",
  "Lafayette College",
  "Lakeview College of Nursing",
  "Lancaster General College of Nursing & Health Sciences",
  "Lehigh University",
  "Lesley University",
  "Lipscomb University",
  "Loma Linda University",
  "Louisiana State University – LSU",
  "Louisiana State University Health Sciences Center-New Orleans",
  "Loyola Marymount University",
  "Loyola University Maryland",
  "Loyola University New Orleans",
  "Loyola University of Chicago",
  "Macalester College",
  "Maine Maritime Academy",
  "Manhattan College",
  "Marquette University",
  "Massachusetts College of Pharmacy & Health Sciences",
  "Massachusetts Institute of Technology – MIT",
  "Massachusetts Maritime Academy",
  "Medical University of South Carolina",
  "Mercer University",
  "MGH Institute of Health Professions",
  "Miami University",
  "Michigan State University",
  "Michigan Technological University",
  "Middlebury College",
  "Midwestern University",
  "Missouri University of Science and Technology",
  "Montclair State University",
  "Mount Carmel College of Nursing",
  "Mount Holyoke College",
  "Mount Sinai School of Medicine",
  "Nebraska Methodist College of Nursing and Allied Health",
  "New Jersey Institute of Technology",
  "New York Institute of Technology (NYIT)",
  "New York Law School",
  "New York University – NYU",
  "North Carolina State University",
  "Northeastern University",
  "Northwestern College",
  "Northwestern University",
  "Nova Southeastern University",
  "Oak Point University (Resurrection University)",
  "Oberlin College",
  "Occidental College",
  "Ohio Northern University",
  "Ohio State University – OSU",
  "Oklahoma State University – Stillwater (Main campus)",
  "Oregon Health & Science University",
  "Oregon State University",
  "Pace University – New York",
  "Pacific University",
  "Pennsylvania State University",
  "Pepperdine University",
  "Philadelphia College of Osteopathic Medicine",
  "Philadelphia University (Thomas Jefferson University)",
  "Phillips Beth Israel School of Nursing",
  "Pitzer College",
  "Pomona College",
  "Princeton University",
  "Providence College",
  "Purdue University",
  "Quinnipiac University",
  "Rensselaer Polytechnic Institute",
  "Research College of Nursing",
  "Rhodes College",
  "Rice University",
  "Robert Morris University",
  "Rochester Institute of Technology",
  "Rollins College",
  "Rosalind Franklin University of Medicine and Science",
  "Roseman University of Health Sciences",
  "Rowan University",
  "Rush University",
  "Rutgers University",
  "Saint Francis Medical Center College of Nursing",
  "Saint Francis University",
  "Saint John Fisher College",
  "Saint Louis University-Main Campus",
  "Saint Lukes College of Health Sciences",
  "Saint Mary’s College of California",
  "Samford University",
  "Samuel Merritt University",
  "San Diego State University – SDSU",
  "Santa Clara University",
  "Scripps College",
  "Seattle Pacific University",
  "Seattle University",
  "Sentara College of Health Sciences",
  "Seton Hall University – New Jersey",
  "Seton Hill University – Pennsylvania",
  "Sewanee – The University of the South",
  "Shenandoah University",
  "Simmons College",
  "Skidmore College",
  "Smith College",
  "Soka University of America",
  "South Dakota School of Mines and Technology",
  "South Dakota State University",
  "Southern Methodist University – SMU",
  "St. James School of Medicine | Saint James School of Medicine",
  "St. John’s University – New York",
  "St. Louis College of Pharmacy",
  "St. Lukes College",
  "Stanford University",
  "Stetson University",
  "Stevens Institute of Technology",
  "Stonehill College",
  "Suffolk University",
  "SUNY at Albany",
  "SUNY at Binghamton",
  "SUNY at Stony Brook",
  "SUNY College of Environmental Science and Forestry",
  "SUNY Downstate Medical Center",
  "Swarthmore College",
  "Syracuse University",
  "Taylor University",
  "Teachers College at Columbia University",
  "Temple University",
  "Texas A&M University",
  "Texas Christian University – TCU",
  "Texas Tech University – Main Campus",
  "Texas Tech University Health Sciences Center",
  "The Citadel",
  "The College of New Jersey",
  "The New School",
  "The University of Alabama",
  "The University of Texas at Dallas",
  "The University of Texas Health Science – San Antonio",
  "The University of Texas Health Science Center at Houston",
  "The University of Texas MD Anderson Cancer Center",
  "The University of Texas Medical Branch",
  "The University of Texas Rio Grande Valley",
  "The University of Virginia College at Wise",
  "Thomas Aquinas College",
  "Thomas Jefferson University",
  "Thunderbird School of Global Management",
  "Touro University",
  "Towson University",
  "Trinity College",
  "Trinity University",
  "Truman State University",
  "Tufts University",
  "Tulane University",
  "Union College (New York)",
  "Union University",
  "United States Merchant Marine Academy",
  "University at Buffalo",
  "University of Alabama at Birmingham",
  "University of Arizona",
  "University of Arkansas Fayetteville",
  "University of Arkansas for Medical Sciences",
  "University of California – Berkeley",
  "University of California – Davis",
  "University of California – Irvine",
  "University of California – Los Angeles – UCLA",
  "University of California – Merced",
  "University of California – Riverside",
  "University of California – San Diego – UCSD",
  "University of California – San Francisco – UCSF",
  "University of California – Santa Barbara – UCSB",
  "University of California – Santa Cruz",
  "University of California College of Law",
  "University of Central Florida",
  "University of Chicago (incl. Booth)",
  "University of Cincinnati",
  "University of Colorado at Boulder",
  "University of Colorado at Colorado Springs",
  "University of Colorado Denver",
  "University of Connecticut – Uconn",
  "University of Dayton",
  "University of Delaware",
  "University of Denver",
  "University of Detroit Mercy",
  "University of Florida",
  "University of Georgia",
  "University of Hartford",
  "University of Hawaii at Manoa",
  "University of Health Sciences and Pharmacy in St Louis",
  "University of Houston",
  "University of Idaho",
  "University of Illinois at Chicago",
  "University of Illinois at Urbana-Champaign",
  "University of Iowa",
  "University of Kansas",
  "University of Kentucky",
  "University of La Verne",
  "University of Louisville",
  "University of Maine",
  "University of Maryland – Baltimore",
  "University of Maryland – Baltimore County",
  "University of Maryland – College Park",
  "University of Massachusetts – Lowell",
  "University of Massachusetts Amherst – UMass Amherst",
  "University of Massachusetts - Boston",
  "University of Massachusetts Medical School (UMMS)",
  "University of Miami",
  "University of Michigan – Ann Arbor",
  "University of Minnesota – Twin Cities",
  "University of Missouri – Columbia",
  "University of Missouri – Kansas City",
  "University of Mount Union",
  "University of Nebraska – Lincoln",
  "University of Nebraska Medical Center",
  "University of New England",
  "University of New Hampshire",
  "University of New Haven",
  "University of North Carolina – Wilmington",
  "University of North Carolina at Chapel Hill – UNC",
  "University of North Dakota",
  "University of North Texas Health Science Center at Fort Worth",
  "University of Northern Iowa",
  "University of Notre Dame",
  "University of Oklahoma",
  "University of Oregon",
  "University of Pennsylvania (including Wharton)",
  "University of Pittsburgh",
  "University of Portland",
  "University of Puerto Rico-Medical Sciences",
  "University of Rhode Island",
  "University of Richmond",
  "University of Rochester",
  "University of Saint Joseph",
  "University of San Diego – USD",
  "University of San Francisco",
  "University of Scranton",
  "University of South Carolina – Columbia",
  "University of South Dakota",
  "University of South Florida",
  "University of Southern California – USC",
  "University of St. Thomas",
  "University of Tennessee – Knoxville",
  "University of Texas at Austin – UT Austin",
  "University of Texas Southwestern Medical Center at Dallas",
  "University of the Pacific",
  "University of the Potomac",
  "University of the Sciences",
  "University of Tulsa",
  "University of Utah",
  "University of Vermont",
  "University of Virginia",
  "University of Washington- Seattle",
  "University of Wisconsin – Madison",
  "University of Wyoming",
  "Utah College of Dental Hygiene",
  "Valparaiso University",
  "Vanderbilt University",
  "Vassar College",
  "Villanova University",
  "Virginia Commonwealth University",
  "Virginia Polytechnic Institute and State University",
  "Wake Forest University",
  "Washington and Lee University",
  "Washington State University",
  "Washington University in St Louis",
  "Wellesley College",
  "Wesleyan University",
  "Western University of Health Sciences",
  "Western Washington University",
  "Whitman College",
  "Whitworth University",
  "Widener University – Main Campus",
  "William Jessup University",
  "Williams College",
  "Worcester Polytechnic Institute",
  "Yale University",
  "Yeshiva University",
];

const usPg = [
    { id: 0, name: "Air Force Institute of Technology" },
    { id: 1, name: "Alabama A&M University" },
    { id: 2, name: "Alfred University" },
    { id: 3, name: "American University" },
    { id: 4, name: "Appalachian State University" },
    { id: 5, name: "Arizona State University" },
    { id: 6, name: "Auburn University" },
    { id: 7, name: "Augusta University" },
    { id: 8, name: "Babson College" },
    { id: 9, name: "Baylor College of Medicine" },
    { id: 10, name: "Baylor University" },
    { id: 11, name: "Belmont University" },
    { id: 12, name: "Bentley University" },
    { id: 13, name: "Binghamton University - SUNY" },
    { id: 14, name: "Boise State University" },
    { id: 15, name: "Boston College" },
    { id: 16, name: "Boston University" },
    { id: 17, name: "Bowie State University" },
    { id: 18, name: "Bowling Green State University" },
    { id: 19, name: "Brandeis University" },
    { id: 20, name: "Brigham Young University" },
    { id: 21, name: "California Institute of Technology" },
    { id: 22, name: "California State University - Long Beach" },
    { id: 23, name: "California State University - Northridge" },
    { id: 24, name: "Canisius University" },
    { id: 25, name: "Carnegie Mellon University" },
    { id: 26, name: "Case Western Reserve University" },
    { id: 27, name: "Central Michigan University" },
    { id: 28, name: "Chapman University" },
    { id: 29, name: "Claremont Graduate University" },
    { id: 30, name: "Clark Atlanta University" },
    { id: 31, name: "Clark University" },
    { id: 32, name: "Clarkson University" },
    { id: 33, name: "Clemson University" },
    { id: 34, name: "Cleveland State University" },
    { id: 35, name: "College of Charleston" },
    { id: 36, name: "College of William & Mary" },
    { id: 37, name: "Colorado School of Mines" },
    { id: 38, name: "Colorado School of Public Health" },
    { id: 39, name: "Colorado State University" },
    { id: 40, name: "Columbia University" },
    { id: 41, name: "Cornell University" },
    { id: 42, name: "CUNY - Baruch College" },
    { id: 43, name: "CUNY - City College" },
    { id: 44, name: "CUNY - John Jay College of Criminal Justice" },
    { id: 45, name: "CUNY - SPH" },
    { id: 46, name: "CUNY - The Graduate Center" },
    { id: 47, name: "Dakota State University" },
    { id: 48, name: "Dartmouth College" },
    { id: 49, name: "Delaware State University" },
    { id: 50, name: "DePaul University" },
    { id: 51, name: "Drexel University" },
    { id: 52, name: "Duke University" },
    { id: 53, name: "Duquesne University" },
    { id: 54, name: "East Carolina University" },
    { id: 55, name: "East Tennessee State University" },
    { id: 56, name: "Eastern Michigan University" },
    { id: 57, name: "Eastern Virginia Medical School" },
    { id: 58, name: "Embry-Riddle Aeronautical University" },
    { id: 59, name: "Emory University" },
    { id: 60, name: "Florida A&M University" },
    { id: 61, name: "Florida Atlantic University" },
    { id: 62, name: "Florida Institute of Technology" },
    { id: 63, name: "Florida International University" },
    { id: 64, name: "Florida State University" },
    { id: 65, name: "Fordham University" },
    { id: 66, name: "George Mason University" },
    { id: 67, name: "George Washington University" },
    { id: 68, name: "Georgetown University" },
    { id: 69, name: "Georgia Institute of Technology" },
    { id: 70, name: "Georgia Southern University" },
    { id: 71, name: "Georgia State University" },
    { id: 72, name: "Governors State University - University Park" },
    { id: 73, name: "Hampton University" },
    { id: 74, name: "Harvard University" },
    { id: 75, name: "Hofstra University" },
    { id: 76, name: "Howard University" },
    { id: 77, name: "Hult International Business School" },
    { id: 78, name: "Icahn School of Medicine at Mount Sinai" },
    { id: 79, name: "Illinois Institute of Technology" },
    { id: 80, name: "Indiana State University" },
    { id: 81, name: "Indiana University" },
    { id: 82, name: "Indiana University Indianapolis" },
    { id: 83, name: "Iowa State University" },
    { id: 84, name: "Jackson State University" },
    { id: 85, name: "John Carroll University" },
    { id: 86, name: "Johns Hopkins University" },
    { id: 87, name: "Kansas State University" },
    { id: 88, name: "Keck Graduate Institute" },
    { id: 89, name: "Kent State University" },
    { id: 90, name: "La Salle University" },
    { id: 91, name: "Lake Erie College of Osteopathic Medicine" },
    { id: 92, name: "Lamar University" },
    { id: 93, name: "Lawrence Technological University" },
    { id: 94, name: "Lehigh University" },
    { id: 95, name: "Lincoln Memorial University" },
    { id: 96, name: "Lipscomb University" },
    { id: 97, name: "Loma Linda University" },
    { id: 98, name: "Long Island University - Brooklyn" },
    { id: 99, name: "Louisiana State University" },
    { id: 100, name: "Louisiana State University - Baton Rouge" },
    { id: 101, name: "Louisiana State University - Shreveport" },
    { id: 102, name: "Louisiana Tech University" },
    { id: 103, name: "Loyola Marymount University" },
    { id: 104, name: "Loyola University Chicago" },
    { id: 105, name: "Loyola University Maryland" },
    { id: 106, name: "Marquette University" },
    { id: 107, name: "Massachusetts Institute of Technology" },
    { id: 108, name: "Medical College of Wisconsin" },
    { id: 109, name: "Medical University of South Carolina" },
    { id: 110, name: "Miami University" },
    { id: 111, name: "Michigan State University" },
    { id: 112, name: "Michigan Technological University" },
    { id: 113, name: "Middle Tennessee State University" },
    { id: 114, name: "Midwestern University" },
    { id: 115, name: "Millsaps College" },
    { id: 116, name: "Mississippi State University" },
    { id: 117, name: "Missouri University of Science & Technology" },
    { id: 118, name: "Montana State University" },
    { id: 119, name: "Morehouse College" },
    { id: 120, name: "Morgan State University" },
    { id: 121, name: "New Jersey Institute of Technology" },
    { id: 122, name: "New Mexico Institute of Mining & Technology" },
    { id: 123, name: "New Mexico State University" },
    { id: 124, name: "New York Medical College" },
    { id: 125, name: "New York University" },
    { id: 126, name: "North Carolina A&T State University" },
    { id: 127, name: "North Carolina State University" },
    { id: 128, name: "North Dakota State University" },
    { id: 129, name: "Northeastern University" },
    { id: 130, name: "Northern Arizona University" },
    { id: 131, name: "Northern Illinois University" },
    { id: 132, name: "Northwestern University" },
    { id: 133, name: "Nova Southeastern University" },
    { id: 134, name: "Oakland University Rochester" },
    { id: 135, name: "Ohio State University" },
    { id: 136, name: "Ohio University" },
    { id: 137, name: "Oklahoma State University" },
    { id: 138, name: "Old Dominion University" },
    { id: 139, name: "Oregon Health and Science University" },
    { id: 140, name: "Oregon State University" },
    { id: 141, name: "Pace University" },
    { id: 142, name: "Pacific Lutheran University" },
    { id: 143, name: "Pennsylvania State University" },
    { id: 144, name: "Pepperdine University" },
    { id: 145, name: "Portland State University" },
    { id: 146, name: "Prairie View A&M University" },
    { id: 147, name: "Princeton University" },
    { id: 148, name: "Purdue University" },
    { id: 149, name: "Quinnipiac University" },
    { id: 150, name: "Rensselaer Polytechnic Institute" },
    { id: 151, name: "Rice University" },
    { id: 152, name: "Rochester Institute of Technology" },
    { id: 153, name: "Rollins College" },
    { id: 154, name: "Rosalind Franklin University of Medicine and Science" },
    { id: 155, name: "Rush University" },
    { id: 156, name: "Rutgers University/The State University of New Jersey" },
    { id: 157, name: "Saint Louis University" },
    { id: 158, name: "San Diego State University" },
    { id: 159, name: "San Francisco State University" },
    { id: 160, name: "Santa Clara University" },
    { id: 161, name: "Seton Hall University" },
    { id: 162, name: "South Dakota School of Mines and Technology" },
    { id: 163, name: "South Dakota State University" },
    { id: 164, name: "Southern Illinois University - Carbondale" },
    { id: 165, name: "Southern Methodist University" },
    { id: 166, name: "St. John's University" },
    { id: 167, name: "Stanford University" },
    { id: 168, name: "Stevens Institute of Technology" },
    { id: 169, name: "Stony Brook University" },
    { id: 170, name: "Suffolk University" },
    { id: 171, name: "SUNY College of Environmental Science and Forestry" },
    { id: 172, name: "SUNY Downstate Health Sciences University" },
    { id: 173, name: "SUNY Polytechnic Institute" },
    { id: 174, name: "SUNY Upstate Medical University" },
    { id: 175, name: "Syracuse University" },
    { id: 176, name: "Temple University" },
    { id: 177, name: "Tennessee State University" },
    { id: 178, name: "Tennessee Technological University" },
    { id: 179, name: "Texas A&M University" },
    { id: 180, name: "Texas A&M University - Corpus Christi" },
    { id: 181, name: "Texas A&M University - Kingsville" },
    { id: 182, name: "Texas Christian University" },
    { id: 183, name: "Texas State University" },
    { id: 184, name: "Texas Tech University" },
    { id: 185, name: "The Catholic University of America" },
    { id: 186, name: "The New School" },
    { id: 187, name: "Thomas Jefferson University" },
    { id: 188, name: "Touro University California" },
    { id: 189, name: "Towson University" },
    { id: 190, name: "Tufts University" },
    { id: 191, name: "Tulane University" },
    { id: 192, name: "University at Albany (SUNY)" },
    { id: 193, name: "University at Buffalo" },
    { id: 194, name: "University of Akron" },
    { id: 195, name: "University of Alabama" },
    { id: 196, name: "University of Alabama at Birmingham" },
    { id: 197, name: "University of Alabama in Huntsville" },
    { id: 198, name: "University of Alaska - Fairbanks" },
    { id: 199, name: "University of Arizona" },
    { id: 200, name: "University of Arkansas" },
    { id: 201, name: "University of Arkansas - Little Rock" },
    { id: 202, name: "University of Bridgeport" },
    { id: 203, name: "University of California - Merced" },
    { id: 204, name: "University of California Berkeley" },
    { id: 205, name: "University of California Davis" },
    { id: 206, name: "University of California Irvine" },
    { id: 207, name: "University of California Los Angeles" },
    { id: 208, name: "University of California Riverside" },
    { id: 209, name: "University of California San Diego" },
    { id: 210, name: "University of California San Francisco" },
    { id: 211, name: "University of California Santa Barbara" },
    { id: 212, name: "University of California Santa Cruz" },
    { id: 213, name: "University of Central Florida" },
    { id: 214, name: "University of Chicago" },
    { id: 215, name: "University of Cincinnati" },
    { id: 216, name: "University of Colorado" },
    { id: 217, name: "University of Colorado - Boulder" },
    { id: 218, name: "University of Colorado - Colorado Springs" },
    { id: 219, name: "University of Colorado - Denver" },
    { id: 220, name: "University of Connecticut" },
    { id: 221, name: "University of Dayton" },
    { id: 222, name: "University of Delaware" },
    { id: 223, name: "University of Denver" },
    { id: 224, name: "University of Detroit Mercy" },
    { id: 225, name: "University of Florida" },
    { id: 226, name: "University of Georgia" },
    { id: 227, name: "University of Hawaii at Manoa" },
    { id: 228, name: "University of Houston" },
    { id: 229, name: "University of Idaho" },
    { id: 230, name: "University of Illinois at Chicago" },
    { id: 231, name: "University of Illinois Urbana-Champaign" },
    { id: 232, name: "University of Iowa" },
    { id: 233, name: "University of Kansas" },
    { id: 234, name: "University of Kansas Medical Center" },
    { id: 235, name: "University of Kentucky" },
    { id: 236, name: "University of Louisiana at Lafayette" },
    { id: 237, name: "University of Louisville" },
    { id: 238, name: "University of Maine" },
    { id: 239, name: "University of Maryland" },
    { id: 240, name: "University of Maryland Baltimore County" },
    { id: 241, name: "University of Massachusetts - Amherst" },
    { id: 242, name: "University of Massachusetts - Boston" },
    { id: 243, name: "University of Massachusetts - Dartmouth" },
    { id: 244, name: "University of Massachusetts - Lowell" },
    { id: 245, name: "University of Memphis" },
    { id: 246, name: "University of Miami" },
    { id: 247, name: "University of Michigan" },
    { id: 248, name: "University of Michigan - Dearborn" },
    { id: 249, name: "University of Minnesota" },
    { id: 250, name: "University of Mississippi" },
    { id: 251, name: "University of Missouri" },
    { id: 252, name: "University of Missouri - Kansas City" },
    { id: 253, name: "University of Missouri - St. Louis" },
    { id: 254, name: "University of Montana" },
    { id: 255, name: "University of Nebraska" },
    { id: 256, name: "University of Nebraska - Lincoln" },
    { id: 257, name: "University of Nebraska - Omaha" },
    { id: 258, name: "University of Nevada - Las Vegas" },
    { id: 259, name: "University of Nevada - Reno" },
    { id: 260, name: "University of New Hampshire - Durham" },
    { id: 261, name: "University of New Haven" },
    { id: 262, name: "University of New Mexico" },
    { id: 263, name: "University of New Orleans" },
    { id: 264, name: "University of North Carolina - Chapel Hill" },
    { id: 265, name: "University of North Carolina - Charlotte" },
    { id: 266, name: "University of North Carolina - Greensboro" },
    { id: 267, name: "University of North Carolina - Wilmington" },
    { id: 268, name: "University of North Dakota" },
    { id: 269, name: "University of North Florida" },
    { id: 270, name: "University of North Texas" },
    { id: 271, name: "University of North Texas Health Science Center" },
    { id: 272, name: "University of Northern Colorado" },
    { id: 273, name: "University of Notre Dame" },
    { id: 274, name: "University of Oklahoma" },
    { id: 275, name: "University of Oklahoma Health Sciences Center" },
    { id: 276, name: "University of Oregon" },
    { id: 277, name: "University of Pennsylvania" },
    { id: 278, name: "University of Pittsburgh" },
    { id: 279, name: "University of Richmond" },
    { id: 280, name: "University of Rochester" },
    { id: 281, name: "University of San Diego" },
    { id: 282, name: "University of San Francisco" },
    { id: 283, name: "University of Scranton" },
    { id: 284, name: "University of South Alabama" },
    { id: 285, name: "University of South Carolina" },
    { id: 286, name: "University of South Dakota" },
    { id: 287, name: "University of South Florida" },
    { id: 288, name: "University of Southern California" },
    { id: 289, name: "University of Southern Mississippi" },
    { id: 290, name: "University of Tennessee - Chattanooga" },
    { id: 291, name: "University of Tennessee - Knoxville" },
    { id: 292, name: "University of Tennessee Health Science Center" },
    { id: 293, name: "University of Texas at Arlington" },
    { id: 294, name: "University of Texas at Austin" },
    { id: 295, name: "University of Texas at Dallas" },
    { id: 296, name: "University of Texas at El Paso" },
    { id: 297, name: "University of Texas at San Antonio" },
    { id: 298, name: "University of Texas Health Science Center at Houston" },
    { id: 299, name: "University of Texas Health Science Center at San Antonio" },
    { id: 300, name: "University of Texas Medical Branch" },
    { id: 301, name: "University of Texas Southwestern Medical Center" },
    { id: 302, name: "University of the Incarnate Word" },
    { id: 303, name: "University of Toledo" },
    { id: 304, name: "University of Tulsa" },
    { id: 305, name: "University of Utah" },
    { id: 306, name: "University of Virginia" },
    { id: 307, name: "University of Washington" },
    { id: 308, name: "University of Wisconsin - Milwaukee" },
    { id: 309, name: "University of Wisconsin-Madison" },
    { id: 310, name: "University of Wyoming" },
    { id: 311, name: "Utah State University" },
    { id: 312, name: "Vanderbilt University" },
    { id: 313, name: "Villanova University" },
    { id: 314, name: "Virginia Commonwealth University" },
    { id: 315, name: "Virginia Tech" },
    { id: 316, name: "Wake Forest University" },
    { id: 317, name: "Washington & Lee University" },
    { id: 318, name: "Washington State University" },
    { id: 319, name: "Washington University in St. Louis" },
    { id: 320, name: "Wayne State University" },
    { id: 321, name: "Wesleyan University" },
    { id: 322, name: "West Virginia University" },
    { id: 323, name: "Western Michigan University" },
    { id: 324, name: "Western University of Health Sciences" },
    { id: 325, name: "Wichita State University" },
    { id: 326, name: "Willamette University" },
    { id: 327, name: "Worcester Polytechnic Institute" },
    { id: 328, name: "Wright State University" },
    { id: 329, name: "Yale University" },
    { id: 330, name: "Yeshiva University" }
  ];


// Convert the array into an array of objects with "id" and "name"
const usSchoolsArray = usSchools.map((school, index) => ({
  id: 0 + index,
  name: school,
}));

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
<option value="canadaPg" className="my-4 text-black font-medium">
  PG Canada
</option>
<option value="usPg" className="my-4 text-black font-medium">
  PG United States
</option>
<option value="UK" className="my-4 text-black font-medium">
  UK Schools
</option>
<option value="France" className="my-4 text-black font-medium">
  French Schools
</option>
<option value="Netherlands" className="my-4 text-black font-medium">
  Dutch Schools
</option>
<option value="Germany" className="my-4 text-black font-medium">
  German Schools
</option>
<option value="Australia" className="my-4 text-black font-medium">
  Australian Schools
</option>
<option value="Singapore" className="my-4 text-black font-medium">
  Singaporean Schools
</option>
<option value="Portugal" className="my-4 text-black font-medium">
  Portuguese Schools
</option>
<option value="Italy" className="my-4 text-black font-medium">
  Italian Schools
</option>
<option value="Hong-Kong" className="my-4 text-black font-medium">
  Hong Kong Schools
</option>
<option value="Spain" className="my-4 text-black font-medium">
  Spanish Schools
</option>
<option value="Denmark" className="my-4 text-black font-medium">
  Danish Schools
</option>
<option value="China" className="my-4 text-black font-medium">
  Chinese Schools
</option>
<option value="Switzerland" className="my-4 text-black font-medium">
  Swiss Schools
</option>
<option value="Belgium" className="my-4 text-black font-medium">
  Belgian Schools
</option>
<option value="South-Africa" className="my-4 text-black font-medium">
  South African Schools
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
                  index !== CanadianSchools.length - 1
                    ? "border-b shadow-lg"
                    : ""
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
                    index !== NigerianSchools.length - 1
                      ? "border-b shadow-lg"
                      : ""
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
                    index !== ProfessionalBodies.length - 1
                      ? "border-b shadow-lg"
                      : ""
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
            {usSchoolsArray.map((school, index) => {
              return (
                <i
                  key={school.id}
                  className={`border-black ${
                    index !== usSchoolsArray.length - 1 ? "border-b shadow-lg" : ""
                  } px-8 py-4`}
                >
                  {school.name}
                </i>
              );
            })}
          </div>
        )}
        
        {/* PG CANADA SCHOOLS */}
        {selectedCategory === "canadaPg" && (
          <div className="flex flex-col">
            {canadaPg.map((school, index) => {
              return (
                <i
                  key={school.id}
                  className={`border-black ${
                    index !== canadaPg.length - 1 ? "border-b shadow-lg" : ""
                  } px-8 py-4`}
                >
                  {school.name}
                </i>
              );
            })}
          </div>
        )}
        
        {/* PG UNITED STATES SCHOOLS */}
        {selectedCategory === "usPg" && (
          <div className="flex flex-col">
            {usPg.map((school, index) => {
              return (
                <i
                  key={school.id}
                  className={`border-black ${
                    index !== usPg.length - 1 ? "border-b shadow-lg" : ""
                  } px-8 py-4`}
                >
                  {school.name}
                </i>
              );
            })}
          </div>
        )}

        {/* UK SCHOOLS */}
        {selectedCategory === "UK" && (
          <div className="flex flex-col">
            {ukSchools.map((school, index) => {
              return (
                <i
                  key={school.id}
                  className={`border-black ${
                    index !== ukSchools.length - 1 ? "border-b shadow-lg" : ""
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
