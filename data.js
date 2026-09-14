// Content data for Soft Robotics Lab website.
// Edit these arrays to update the site — no HTML editing needed for routine updates.

const RESEARCH = [
  {
    tag: "LumiR",
    title: "Assistive navigation robot",
    body: "An AI-integrated mobile robot that helps people with visual impairments move safely and independently. LumiR combines 240° LiDAR, computer vision and wireless haptic feedback — guidance reaches the user through a vibrating glove and bone-conduction audio, leaving their own senses free.",
    stats: [
      ["3", "prototype generations"],
      [">70%", "collision-free indoor navigation"],
      ["2026", "SETSM Best Paper"],
    ],
  },
  {
    tag: "Soft Grippers",
    title: "Compliant grasping mechanisms",
    body: "A family of soft gripping mechanisms — suction, finger, tendon-driven, artificial muscle — exploring how compliant structures grasp safely and adaptively. Includes ROSE (rotation-based squeezing), latch-grip (energy-efficient snap-locking), membrane-synergy-gripper, and several student-led variants (octogripper, bamboo gripper, seafood gripper, PinSkin).",
    stats: [
      ["7+", "active sub-projects"],
      ["RSS 2023", "ROSE finalist, Best System Paper"],
    ],
  },
  {
    tag: "DigitEye",
    title: "Visuotactile soft sensing",
    body: "A transparent, optical soft tactile sensor for robust multi-modal perception — giving robots a sense of touch through vision, so grasping and manipulation can react to contact the way a hand does.",
    stats: [[ "JME 2025", "peer-reviewed publication" ]],
  },
  {
    tag: "Insect Research",
    title: "Open-set pest recognition",
    body: "Pest identification under open-set and out-of-distribution conditions — building models that know what they don't know, so field deployment doesn't silently fail on species the model never saw in training.",
    stats: [[ "VNICT 2026", "survey accepted" ]],
  },
  {
    tag: "Metamaterial Design",
    title: "Interpretable inverse design",
    body: "Inverse design of 2D architected materials using interpretable linear surrogates — fast, explainable design of mechanical metamaterials without the black-box cost of deep generative models.",
    stats: [],
  },
  {
    tag: "Physical Computing",
    title: "Analog control for soft robots",
    body: "An early-stage exploration of analog computation for closed-loop control of soft robots — borrowing signal-processing ideas from automotive radar to close the loop without a full digital pipeline.",
    stats: [],
  },
];

const PROJECTS = [
  {
    id: "rose",
    title: "ROSE: Rotation-based Squeezing Robotic Gripper",
    body: "A soft gripper that embraces an object and squeezes it by buckling a funnel-like thin-walled membrane around it, through simple rotation of the base — inspired by the blooming states of a rose.",
    flagship: true,
  },
  {
    id: "tombo",
    title: "Tombo Propeller",
    body: "A bio-inspired deformable propeller for drones, modeled after dragonfly wings, enabling collision-accommodated flight control.",
  },
  {
    id: "bicycle",
    title: "Agile Bicycle-like Robot",
    body: "A compact bicycle-like robot with independently steered magnetic wheels and a reciprocating mechanism, enabling multi-directional mobility for inspecting complex ferromagnetic structures.",
  },
  {
    id: "bicycle2",
    title: "Multi-directional Bicycle Robot",
    body: "An evolved inspection robot for complex steel structures, equipped with ultrasonic sensing and adaptive shape change to traverse welds, edges, and corners.",
  },
  {
    id: "aquaband",
    title: "AquaBand",
    body: "An ongoing student-led venture incubated at the lab, with its first pitching trial completed alongside BLOCK71 NUS.",
  },
];

// Newest first.
const PUBLICATIONS = [
  { date: "2026-07-01", venue: "ICERA", title: "An On-the-Fly Threshold Learning for Deformable Part Model", authors: "S. T. Bui · D. T. Hoang · L. T. H. Lan", where: "International Conference on Engineering Research and Applications, 35–44" },
  { date: "2026-07-01", venue: "IJAMT", title: "AI-Driven Inverse Design of 3D-Printed Continuous Fiber Composites Using Multiscale Homogenization and Dual Neural Networks", authors: "T. D. Hoang · C. V. Nhat · N. T. Dang · T. S. Bui · N. B. Thuan · T. Q. Nguyen", where: "The International Journal of Advanced Manufacturing Technology, 144, 515–539" },
  { date: "2026-07-01", venue: "JSTT", title: "Design and Inverse Kinematics of Continuum Robots", authors: "D. V. Lac · C. V. Long · N. M. Hung · V. Q. Van · B. T. Son", where: "Journal of Science and Transport Technology, 6(1), 101–111" },
  { date: "2025-07-01", venue: "JME", title: "DigitEye: A Transparent Soft Tactile Sensor for Robust Multi-Modal Perception", authors: "S. T. Bui · D. N. Le · T. A. Nguyen · S. H. Nguyen · S. A. Tran · L. P. Tran · T. H. Pham", where: "Journal of Machine Engineering, 2025" },
  { date: "2025-07-01", venue: "ICISN", title: "From Gestures to Actions: Leveraging YOLO for Real-Time Hand Gesture Recognition in Human-Robot Interaction", authors: "S. T. Bui", where: "Proceedings of the Fifth International Conference on Intelligent Systems and Networks, 207–215" },
  { date: "2025-07-01", venue: "ICISN", title: "Modular and Scalable IoT Solution for Classroom Air Quality Monitoring", authors: "S. D. Nguyen · L. H. Ha · C. V. Pham · L. D. T. Nguyen · S. T. Bui", where: "Proceedings of the Fifth International Conference on Intelligent Systems and Networks, 736–745" },
  { date: "2025-07-01", venue: "Springer", title: "Toward an Open-Source Universal Controller System for Industrial Robots in Industry 4.0", authors: "S. T. Bui · L. V. Duong", where: "Proceedings in Technology Transfer, 619–628" },
  { date: "2025-07-01", venue: "ICISN", title: "A Comparative Study On Sliding Mode Control for Quadrotor with Various Reaching Laws", authors: "T. L. Tong · T. A. Hoang · K. L. Dao · M. K. Tran · T. S. Bui · M. D. Duong", where: "The International Conference on Intelligent Systems and Networks, 300–309" },
  { date: "2024-07-01", venue: "APSIPA", title: "An Isolated Vietnamese Sign Language Recognition Method Using a Fusion of Heatmap and Depth Information Based on Convolutional Neural Networks", authors: "X. P. Nguyen · T. H. Nguyen · D. T. Tran · T. S. Bui · V. T. Nguyen", where: "2024 Asia Pacific Signal and Information Processing Association Annual Summit and Conference, 1–6" },
  { date: "2024-07-01", venue: "UR", title: "Collision Dynamics of Motorized Deformable Propellers for Drones", authors: "H. T. Pham · D. Q. Nguyen · S. T. Bui · G. Loianno · V. A. Ho", where: "2024 21st International Conference on Ubiquitous Robots, 176–183" },
  { date: "2024-07-01", venue: "APSIPA", title: "A Solution for Anomaly Detection of Red Beans in a Product Processing Line", authors: "D. H. Nguyen · T. H. Do · H. L. P. Nguyen · Q. K. Nguyen · D. T. Tran · T. S. Bui · V. T. Nguyen", where: "2024 Asia Pacific Signal and Information Processing Association Annual Summit and Conference, 1–5" },
  { date: "2024-07-01", venue: "IoT", title: "Towards Interworking of Matter and oneM2M: Design and Implementation of a Matter-oneM2M Interworking Proxy Entity", authors: "D. L. Nguyen Thi · X. T. Kieu · T. S. Bui · T. L. Le · V. C. Pham", where: "Internet of Things, 27, 101313" },
  { date: "2024-07-01", venue: "EEA", title: "Developing Force Testing Equipment for Research", authors: "N. V. Dao · L. V. Duong · S. T. Bui", where: "The First National Conference on Energy, Electronics, and Automation — EEA 2024" },
  { date: "2024-07-01", venue: "EEA", title: "Development of Software and Control System for Industrial Robots Using Mitsubishi Q PLC", authors: "L. Q. Do · M. D. Bui · B. Q. Bui · P. V. Vu · L. V. Duong · S. T. Bui", where: "The First National Conference on Energy, Electronics, and Automation — EEA 2024" },
  { date: "2024-07-01", venue: "HaUI J.", title: "Development of Monitoring and Control Software for AGV", authors: "L. V. Duong · A. Q. Nguyen · D. V. Luu · S. T. Vu · S. T. Bui", where: "Hanoi University of Industry Journal of Science and Technology, 60(9), 134–140" },
  { date: "2024-07-01", venue: "HaUI J.", title: "Development of a Gripper with Force Feedback Control for Robots", authors: "N. D. Le · L. V. Duong · S. T. Bui", where: "Hanoi University of Industry Journal of Science and Technology, 60(9), 47–52" },
  { date: "2024-07-01", venue: "VN Patent", title: "Cơ cấu giảm chấn và phát hiện va chạm cho cánh quạt", authors: "S. T. Bui · H. T. Pham · V. A. Ho", where: "VN Patent 49,382" },
  { date: "2023-07-01", venue: "RSS", title: "ROSE: Rotation-based Squeezing Robotic Gripper toward Universal Handling of Objects", authors: "S. T. Bui · S. Kawano · V. A. Ho", where: "Robotics: Science and Systems XIX (RSS 2023)" },
  { date: "2022-07-01", venue: "ICRA", title: "An Agile Bicycle-like Robot for Complex Steel Structure Inspection", authors: "S. T. Nguyen · H. Nguyen · S. T. Bui · V. A. Ho · T. D. Ngo · H. M. La", where: "IEEE International Conference on Robotics and Automation (ICRA), 157–163" },
  { date: "2022-07-01", venue: "T-RO", title: "Tombo Propeller: Bio-Inspired Deformable Structure toward Collision-Accommodated Control for Drones", authors: "S. T. Bui · Q. K. Luu · D. Q. Nguyen · N. D. M. Le · G. Loianno · V. A. Ho", where: "IEEE Transactions on Robotics, 39(1), 521–538" },
  { date: "2021-07-01", venue: "arXiv", title: "Multi-directional Bicycle Robot for Steel Structure Inspection", authors: "S. T. Nguyen · H. Nguyen · S. T. Bui · V. A. Ho · H. M. La", where: "arXiv preprint arXiv:2103.11522" },
  { date: "2019-07-01", venue: "JSAP", title: "Improvement of BaTa2O6 Thin Films for TFT Gate Insulator Applications", authors: "S. T. Bui · K. Narisawa · C. D. Pham · K. Uchiyama", where: "The 66th JSAP Spring Meeting" },
  { date: "2018-07-01", venue: "VCME", title: "Studying, Designing and Manufacturing a Laboratory Equipment to Determine Coefficient of Friction and Wear Intensity for Different Materials", authors: "T. V. Nguyen · D. V. Pham · S. T. Bui", where: "The 5th National Scientific Conference on Mechanical Engineering" },
  { date: "2018-07-01", venue: "VCME", title: "Effects of Working Pressure on Structure and Composition of TiAlN Coating Fabricated by Co-Sputtering Deposition Technique", authors: "S. T. Bui · D. Q. Nguyen · K. Uchiyama · H. V. Pham · C. D. Pham", where: "The 5th National Scientific Conference on Mechanical Engineering" },
  { date: "2015-07-01", venue: "JST", title: "Deposition of TiN Hard Coating onto Alloy Steel by DC-Magnetron Sputtering Technique", authors: "D. Q. Nguyen · D. V. Pham · S. T. Bui · C. D. Pham", where: "Journal of Science and Technology" },
  { date: "2014-07-01", venue: "ISEPD", title: "Micro/nano Hierarchical Structure for Enhancing Hydrophobicity of Polymeric Surface", authors: "C. D. Pham · D. Q. Nguyen · S. T. Bui · E. Yoon", where: "The 15th International Symposium on Eco-Materials Processing and Design" },
  { date: "2013-07-01", venue: "VCME", title: "Machine Tool Intelligently Adapts to Changes in the Production Environment", authors: "H. N. Tran · N. H. Nguyen · D. T. Hoang · C. X. Nguyen · T. T. T. Pham", where: "The 3rd National Scientific Conference on Mechanical Engineering" },
  { date: "2013-07-01", venue: "JST", title: "Investigation into Water-Repellent and Tribological Properties of the Lotus and Colocasia Esculenta Leaves", authors: "C. D. Pham · C. X. Nguyen · S. T. Bui · E. Yoon", where: "Journal of Science and Technology" },
  { date: "2012-07-01", venue: "VJME", title: "Research on Abrasive Waterjet Technology", authors: "S. T. Bui · B. V. Pham · H. V. Nguyen · D. V. Tran · G. V. Hoang", where: "Vietnam Journal of Mechanical Engineering" },
];

const MEMBERS = [
  { name: "Nguyễn Đình Sơn", role: "Master of Electronic Engineering", tag: "Master", body: "Passionate about science and creativity, seeking research applicable in real life." },
  { name: "Trần Thị Giáng Tuyết", role: "Human Resource Management", tag: "Business", body: "Interested in entrepreneurship, innovation, and empowering people." },
  { name: "Trần Mạnh Hiếu", role: "Control and Automation Engineering Technology", tag: "Technical", body: "Passionate about automated machinery and intelligent automation solutions." },
  { name: "Đào Văn Thái", role: "K19 Robotics and Artificial Intelligence", tag: "Technical", body: "Strong passion for technology and machinery." },
  { name: "Trần Đăng Hưng", role: "Robotics and Artificial Intelligence", tag: "Technical", body: "Passionate about scientific research." },
  { name: "Hoàng Văn Tú", role: "K18 Control and Automation Engineering Technology", tag: "Technical", body: "Passionate about machinery." },
  { name: "Hoàng Đại Dương", role: "K19 Robotics and Artificial Intelligence", tag: "Technical", body: "Interested in robotic control systems." },
  { name: "Nguyễn Duy Mình", role: "K15 Mechanical Engineering Technology", tag: "Technical", body: "Interested in machine design and conveyor systems." },
  { name: "Lê Quang Phúc", role: "Mechanical Engineering", tag: "Technical", body: "Passionate about researching, designing, and building robots for intelligent engineering solutions." },
  { name: "Đào Đức Phúc", role: "K19 Mechatronics Engineering Technology", tag: "Technical", body: "Interested in robots and control." },
  { name: "Nguyễn Nhân Tố", role: "Mechatronics Engineering Technology", tag: "Technical", body: "Pursuing innovative ideas and creating value through science and technology." },
  { name: "Nguyễn Văn Tình", role: "Control and Automation Engineering Technology", tag: "Technical", body: "Focused on building solid projects and effective teams from the ground up." },
  { name: "Nguyễn Sỹ Thoan", role: "Mechatronics Engineering Technology (graduated)", tag: "Technical", body: "One of the first three members of the lab." },
  { name: "Vũ Thị Thu Hường", role: "Banking and Finance", tag: "Business", body: "Passionate about entrepreneurship, business, and investment." },
];

// Newest first.
const NEWS = [
  { date: "2026-06-13", tag: "Award", body: "LumiR won First Prize at the mock fundraising contest of the HaUI Innovation & Entrepreneurship Festival 2026." },
  { date: "2026-06-10", tag: "Award", body: "LumiR won First Prize at the 7th HaUI Startup Challenge 2026." },
  { date: "2026-04-16", tag: "Best Paper", body: "“LumiR: An AI-Integrated Assistive Navigation Robot for People with Visual Impairments” received the Best Paper Award at SETSM 2026." },
  { date: "2025-10-01", tag: "Exhibition", body: "LumiR was showcased at TECHFEST Vietnam 2025." },
  { date: "2025-09-28", tag: "Exhibition", body: "LumiR was introduced at NASA Space Apps Challenge 2025 in Ninh Binh." },
  { date: "2025-09-20", tag: "Award", body: "AquaBand won Second Prize at Pitching Day, part of the Innovation & Entrepreneurship Festival 2025." },
  { date: "2025-09-18", tag: "Exhibition", body: "LumiR was presented at HaUI Innovation Day 2025." },
  { date: "2025-09-12", tag: "Exhibition", body: "LumiR joined the 2025 HaUI Engineering Festival exhibition." },
  { date: "2025-09-10", tag: "Award", body: "AquaBand was named among the Top 30 of BLOCK71 × Univenture 2025." },
  { date: "2025-09-08", tag: "Incubation", body: "LumiR received a commitment of incubation support from the Hanoi Department of Science and Technology." },
  { date: "2025-09-01", tag: "Milestone", body: "AquaBand completed its first pitching trial with support from HaUI and BLOCK71 NUS." },
  { date: "2023-07-01", tag: "Award", body: "ROSE was selected as a finalist for the Best System Paper Award at Robotics: Science and Systems 2023." },
  { date: "2023-06-01", tag: "Award", body: "ROSE won the Open Category at the Soft Robotics Toolkit Competition 2023." },
  { date: "2023-04-01", tag: "Lab", body: "Soft Robotics Lab begins as a personal research initiative led by Dr. Son Tien Bui." },
  { date: "2023-03-01", tag: "PhD", body: "Dr. Son Tien Bui completed his Ph.D. at JAIST and was recognized as an Outstanding Finalist by the School of Materials Science." },
];

const HONORS = [
  "Winner of Open Category in Soft Robotics Research at the Soft Robotics Toolkit Competition 2023",
  "Finalist for the Best System Paper Award at Robotics: Science and Systems 2023",
  "Outstanding Finalist, School of Materials Science, JAIST, 2023",
  "MEXT Scholarship recipient, Government of Japan (Ph.D. funding)",
  "JASSO Scholarship, Research Assistant at NIT Tsuruoka College, 2019",
];

const SERVICE = [
  ["Journal reviewer", "IEEE T-RO · IEEE RA-L · Advanced Robotics"],
  ["Conference reviewer", "ICRA · IROS · RSS · SII"],
  ["Keynote", "RICE 2023 · RICE 2024"],
  ["Session chair", "ICISN · SETSM"],
];
