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
  "Calvin College",
  "Carleton College",
  "Carnegie Mellon University",
  "Case Western Reserve University",
  "Catholic University of America",
  "Centra College of Nursing",
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
  "University of Massachusetts Medical School (UMMS)",
  "University of Miami",
  "University of Michigan – Ann Arbor",
  "University of Minnesota – Twin Cities",
  "University of Missouri – Columbia",
  "University of Mount Union",
  "University of Nebraska – Lincoln",
  "University of Nebraska Medical Center",
  "University of New England",
  "University of New Hampshire",
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

// Convert the array into an array of objects with "id" and "name"
const usSchoolsArray = usSchools.map((school, index) => ({
  id: 0 + index,
  name: school,
}));

console.log(usSchoolsArray);

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
      </div>
    </div>
  );
};

export default SupportedSchools;
