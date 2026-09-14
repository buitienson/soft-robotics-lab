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
    media: { type: "video", youtube: "E1wAI09LaoY", thumb: "assets/img/projects/rose-video-thumb.jpg" },
  },
  {
    id: "digiteye",
    title: "DigitEye: transparent soft tactile sensor",
    body: "A fingertip sensor with a clear, soft silicone skin that feels touch and force through moving markers — and, because the skin is transparent, sees the object at the same time.",
    flagship: true,
    media: { type: "link", href: "https://buitienson.github.io/digiteye/", img: "assets/img/projects/digiteye-render.png" },
  },
  {
    id: "tombo",
    title: "Tombo Propeller",
    body: "A bio-inspired deformable propeller for drones, modeled after dragonfly wings, enabling collision-accommodated flight control.",
    media: { type: "video", youtube: "zjHvukgfJwc", thumb: "assets/img/projects/tombo-video-thumb.jpg" },
  },
  {
    id: "bicycle",
    title: "Agile Bicycle-like Robot",
    body: "A compact bicycle-like robot with independently steered magnetic wheels and a reciprocating mechanism, giving it multi-directional mobility to traverse welds, edges, and corners while inspecting complex ferromagnetic steel structures.",
    media: { type: "video", youtube: "Qdh1oz_oxiQ", thumb: "assets/img/projects/bicycle-video-thumb.jpg" },
  },
  {
    id: "aquaband",
    title: "AquaBand",
    body: "An ongoing student-led venture incubated at the lab, with its first pitching trial completed alongside BLOCK71 NUS.",
    media: { type: "letter", letter: "A" },
  },
];

// Newest first. tier badges follow the lab's own convention (A*/A/Q1-Q4/INTL/NATIONAL/DOMESTIC).
const PUBLICATIONS = [
  { year: 2026, tier: "INTL", highlight: "Best Paper Award", title: "Design and Experimental Validation of a Mobile Robot with Integrated Collision Avoidance and Synchronization Control for Blind Navigation Assistance", venue: "Intl. Conference on Sustainability and Emerging Technologies for Smart Manufacturing (SETSM 2026)" },
  { year: 2026, tier: "—", title: "An On-the-Fly Threshold Learning for Deformable Part Model", authors: "S. T. Bui · D. T. Hoang · L. T. H. Lan", venue: "International Conference on Engineering Research and Applications (ICERA), 35–44" },
  { year: 2026, tier: "Q1", doi: "10.1007/s00170-026-17787-2", title: "AI-Driven Inverse Design of 3D-Printed Continuous Fiber Composites Using Multiscale Homogenization and Dual Neural Networks", authors: "T. D. Hoang · C. V. Nhat · N. T. Dang · T. S. Bui · N. B. Thuan · T. Q. Nguyen", venue: "The International Journal of Advanced Manufacturing Technology (IJAMT), 144, 515–539" },
  { year: 2026, tier: "Q3", doi: "10.58845/jstt.utt.2026.en.6.1.101-111", title: "Design and Inverse Kinematics of Continuum Robots", authors: "D. V. Lac · C. V. Long · N. M. Hung · V. Q. Van · B. T. Son", venue: "Journal of Science and Transport Technology (JSTT), 6(1), 101–111" },
  { year: 2025, tier: "Q2", doi: "10.36897/jme/213851", highlight: "first author", title: "DigitEye: A Transparent Soft Tactile Sensor for Robust Multi-Modal Perception", authors: "S. T. Bui · D. N. Le · T. A. Nguyen · S. H. Nguyen · S. A. Tran · L. P. Tran · T. H. Pham", venue: "Journal of Machine Engineering (JME), 2025" },
  { year: 2025, tier: "INTL", doi: "10.1007/978-981-97-7083-0_62", highlight: "first author", title: "Toward an Open-Source Universal Controller System for Industrial Robots in Industry 4.0", authors: "S. T. Bui · L. V. Duong", venue: "Proceedings in Technology Transfer, Springer — 1st SETSM, 619–628" },
  { year: 2025, tier: "Q4", doi: "10.1007/978-981-95-1746-6_22", title: "From Gestures to Actions: Leveraging YOLO for Real-Time Hand Gesture Recognition in Human-Robot Interaction", authors: "S. T. Bui", venue: "Proceedings of the Fifth International Conference on Intelligent Systems and Networks (ICISN), 207–215" },
  { year: 2025, tier: "Q4", doi: "10.1007/978-981-95-1746-6_82", title: "Modular and Scalable IoT Solution for Classroom Air Quality Monitoring", authors: "S. D. Nguyen · L. H. Ha · C. V. Pham · L. D. T. Nguyen · S. T. Bui", venue: "Proceedings of the Fifth International Conference on Intelligent Systems and Networks (ICISN), 736–745" },
  { year: 2025, tier: "Q4", doi: "10.1007/978-981-95-1746-6_33", title: "A Comparative Study On Sliding Mode Control for Quadrotor with Various Reaching Laws", authors: "T. L. Tong · T. A. Hoang · K. L. Dao · M. K. Tran · T. S. Bui · M. D. Duong", venue: "The International Conference on Intelligent Systems and Networks (ICISN), 300–309" },
  { year: 2024, tier: "INTL", doi: "10.1109/UR61395.2024.10597535", title: "Collision Dynamics of Motorized Deformable Propellers for Drones", authors: "H. T. Pham · D. Q. Nguyen · S. T. Bui · G. Loianno · V. A. Ho", venue: "2024 21st International Conference on Ubiquitous Robots (UR), 176–183" },
  { year: 2024, tier: "INTL", doi: "10.1109/APSIPAASC63619.2025.10849036", title: "A Solution for Anomaly Detection of Red Beans in a Product Processing Line", authors: "D. H. Nguyen · T. H. Do · H. L. P. Nguyen · Q. K. Nguyen · D. T. Tran · T. S. Bui · V. T. Nguyen", venue: "2024 Asia Pacific Signal and Information Processing Association Annual Summit and Conference (APSIPA), 1–5" },
  { year: 2024, tier: "INTL", doi: "10.1109/APSIPAASC63619.2025.10848961", title: "An Isolated Vietnamese Sign Language Recognition Method Using a Fusion of Heatmap and Depth Information Based on Convolutional Neural Networks", authors: "X. P. Nguyen · T. H. Nguyen · D. T. Tran · T. S. Bui · V. T. Nguyen", venue: "2024 Asia Pacific Signal and Information Processing Association Annual Summit and Conference (APSIPA), 1–6" },
  { year: 2024, tier: "Q1", doi: "10.1016/j.iot.2024.101313", title: "Towards Interworking of Matter and oneM2M: Design and Implementation of a Matter-oneM2M Interworking Proxy Entity", authors: "D. L. Nguyen Thi · X. T. Kieu · T. S. Bui · T. L. Le · V. C. Pham", venue: "Internet of Things (Elsevier), 27, 101313" },
  { year: 2024, tier: "NATIONAL", doi: "10.57001/huih5804.2024.306", title: "Development of Monitoring and Control Software for AGV", authors: "L. V. Duong · A. Q. Nguyen · D. V. Luu · S. T. Vu · S. T. Bui", venue: "HaUI Journal of Science and Technology, 60(9), 134–140" },
  { year: 2024, tier: "NATIONAL", doi: "10.57001/huih5804.2024.292", title: "Development of a Gripper with Force Feedback Control for Robots", authors: "N. D. Le · L. V. Duong · S. T. Bui", venue: "HaUI Journal of Science and Technology, 60(9), 47–52" },
  { year: 2024, tier: "DOMESTIC", title: "Development of a Gripper with Force Feedback Control for Robots", authors: "N. D. Le · L. V. Duong · S. T. Bui", venue: "1st National Conference on Energy, Electronics and Automation (EEA 2024)" },
  { year: 2024, tier: "DOMESTIC", title: "Development of Software and Control System for Industrial Robots Using Mitsubishi Q PLC", authors: "L. Q. Do · M. D. Bui · B. Q. Bui · P. V. Vu · L. V. Duong · S. T. Bui", venue: "1st National Conference on Energy, Electronics and Automation (EEA 2024)" },
  { year: 2024, tier: "—", title: "Developing Force Testing Equipment for Research", authors: "N. V. Dao · L. V. Duong · S. T. Bui", venue: "1st National Conference on Energy, Electronics and Automation (EEA 2024)" },
  { year: 2023, tier: "A*", doi: "10.15607/RSS.2023.XIX.090", highlight: "first author · Best System Paper Finalist", title: "ROSE: Rotation-based Squeezing Robotic Gripper toward Universal Handling of Objects", authors: "S. T. Bui · S. Kawano · V. A. Ho", venue: "Robotics: Science and Systems XIX (RSS 2023)" },
  { year: 2022, tier: "A", doi: "10.1109/ICRA46639.2022.9812153", title: "An Agile Bicycle-like Robot for Complex Steel Structure Inspection", authors: "S. T. Nguyen · H. Nguyen · S. T. Bui · V. A. Ho · T. D. Ngo · H. M. La", venue: "IEEE International Conference on Robotics and Automation (ICRA), 157–163" },
  { year: 2022, tier: "Q1", doi: "10.1109/TRO.2022.3198494", highlight: "first author · flagship robotics journal", title: "Tombo Propeller: Bio-Inspired Deformable Structure toward Collision-Accommodated Control for Drones", authors: "S. T. Bui · Q. K. Luu · D. Q. Nguyen · N. D. M. Le · G. Loianno · V. A. Ho", venue: "IEEE Transactions on Robotics, 39(1), 521–538" },
  { year: 2021, tier: "—", title: "Multi-directional Bicycle Robot for Steel Structure Inspection", authors: "S. T. Nguyen · H. Nguyen · S. T. Bui · V. A. Ho · H. M. La", venue: "arXiv preprint arXiv:2103.11522" },
  { year: 2019, tier: "INTL", title: "Improvement of BaTa2O6 Thin Films for TFT Gate Insulator Applications", authors: "S. T. Bui · K. Narisawa · C. D. Pham · K. Uchiyama", venue: "The 66th JSAP Spring Meeting" },
  { year: 2018, tier: "DOMESTIC", doi: "vjol.info.vn/dhcnhn/en/article/view/41351", title: "Effects of Working Pressure on Structure and Composition of TiAlN Coating Fabricated by Co-Sputtering Deposition Technique", authors: "S. T. Bui · D. Q. Nguyen · K. Uchiyama · H. V. Pham · C. D. Pham", venue: "The 5th National Scientific Conference on Mechanical Engineering (VCME)" },
  { year: 2018, tier: "DOMESTIC", doi: "vjol.info.vn/dhcnhn/en/article/view/41513", title: "Studying, Designing and Manufacturing a Laboratory Equipment to Determine Coefficient of Friction and Wear Intensity for Different Materials", authors: "T. V. Nguyen · D. V. Pham · S. T. Bui", venue: "The 5th National Scientific Conference on Mechanical Engineering (VCME)" },
  { year: 2015, tier: "NATIONAL", title: "Deposition of TiN Hard Coating onto Alloy Steel by DC-Magnetron Sputtering Technique", authors: "D. Q. Nguyen · D. V. Pham · S. T. Bui · C. D. Pham", venue: "Journal of Science and Technology" },
  { year: 2014, tier: "INTL", title: "Micro/nano Hierarchical Structure for Enhancing Hydrophobicity of Polymeric Surface", authors: "C. D. Pham · D. Q. Nguyen · S. T. Bui · E. Yoon", venue: "The 15th International Symposium on Eco-Materials Processing and Design (ISEPD)" },
  { year: 2013, tier: "DOMESTIC", title: "Machine Tool Intelligently Adapts to Changes in the Production Environment", authors: "H. N. Tran · N. H. Nguyen · D. T. Hoang · C. X. Nguyen · T. T. T. Pham", venue: "The 3rd National Scientific Conference on Mechanical Engineering" },
  { year: 2013, tier: "NATIONAL", title: "Investigation into Water-Repellent and Tribological Properties of the Lotus and Colocasia Esculenta Leaves", authors: "C. D. Pham · C. X. Nguyen · S. T. Bui · E. Yoon", venue: "Journal of Science and Technology" },
  { year: 2012, tier: "NATIONAL", title: "Research on Abrasive Waterjet Technology", authors: "S. T. Bui · B. V. Pham · H. V. Nguyen · D. V. Tran · G. V. Hoang", venue: "Vietnam Journal of Mechanical Engineering" },
];

// Patents and utility solutions. Newest status first isn't meaningful here — kept in the
// lab's own reference order (granted first, then pending, then filed).
const PATENTS = [
  { title: "Damping and collision-detection mechanism for propellers (TomboHub)", office: "Vietnam · Intellectual Property Office", status: "Patent granted", detail: "Patent No. 49382 · granted 30/6/2025 · App. 1-2024-02456", url: "https://wipopublish.ipvietnam.gov.vn/wopublish-search/public/detail/patents?id=VN1202402456" },
  { title: "Bio-mimetic soft gripper based on rotational motion", office: "Vietnam · Intellectual Property Office", status: "Patent granted", detail: "Patent No. 58606 · granted 27/5/2026 · App. 1-2024-07293", url: "https://wipopublish.ipvietnam.gov.vn/wopublish-search/public/detail/patents?id=VN1202407293" },
  { title: "Jellyfish-inspired soft gripper based on rotational motion", office: "Vietnam · Intellectual Property Office", status: "Substantive examination passed — grant intended", detail: "App. 1-2024-07292", url: "https://wipopublish.ipvietnam.gov.vn/wopublish-search/public/detail/patents?id=VN1202407292" },
  { title: "Bio-mimetic soft gripper with adjustable finger angle and shape", office: "Vietnam · Intellectual Property Office", status: "Substantive examination passed — grant intended", detail: "App. 1-2024-07963", url: "https://wipopublish.ipvietnam.gov.vn/wopublish-search/public/detail/patents?id=VN1202407963" },
  { title: "Soft tactile mechanism with integrated vision model for object classification, collision sensing and contact force", office: "Vietnam · Intellectual Property Office", status: "Application accepted", detail: "App. 1-2024-05118", url: "https://wipopublish.ipvietnam.gov.vn/wopublish-search/public/detail/patents?id=VN1202405118" },
  { title: "Elastic propeller for unmanned aerial vehicles", office: "Vietnam · Intellectual Property Office", status: "Application accepted", detail: "App. 1-2024-05119", url: "https://wipopublish.ipvietnam.gov.vn/wopublish-search/public/detail/patents?id=VN1202405119" },
  { title: "Rose-inspired bio-mimetic soft gripper", office: "Japan · JPO", status: "Application filed", detail: "App. 特願2023-016702" },
  { title: "Bio-mimetic soft mechanism with self-aligning replaceable fingers", office: "Vietnam · Intellectual Property Office", status: "Application accepted", detail: "App. 1-2024-09018", url: "https://wipopublish.ipvietnam.gov.vn/wopublish-search/public/detail/patents?id=VN1202409018" },
  { title: "One-piece biodegradable bio-wheel, easy to replace and repair", office: "Vietnam · Intellectual Property Office", status: "Application accepted", detail: "App. 1-2025-02969", url: "https://wipopublish.ipvietnam.gov.vn/wopublish-search/public/detail/patents?id=VN1202502969" },
  { title: "Compact drowning-rescue device, automatically activated on contact with water", office: "Vietnam · Intellectual Property Office", status: "Application accepted", detail: "App. 1-2025-02968", url: "https://wipopublish.ipvietnam.gov.vn/wopublish-search/public/detail/patents?id=VN1202502968" },
  { title: "Wrist-worn drowning-rescue device", office: "Vietnam · Intellectual Property Office", status: "Application accepted", detail: "App. 1-2025-02967", url: "https://wipopublish.ipvietnam.gov.vn/wopublish-search/public/detail/patents?id=VN1202502967" },
];

const MEMBERS = [
  { name: "Nguyễn Đình Sơn", role: "Master of Electronic Engineering", tag: "Master", body: "Passionate about science and creativity, seeking research applicable in real life.", photo: "assets/img/team/nguyen-dinh-son.jpg" },
  { name: "Trần Thị Giáng Tuyết", role: "Human Resource Management", tag: "Business", body: "Interested in entrepreneurship, innovation, and empowering people.", photo: "assets/img/team/tran-thi-giang-tuyet.jpg" },
  { name: "Trần Mạnh Hiếu", role: "Control and Automation Engineering Technology", tag: "Technical", body: "Passionate about automated machinery and intelligent automation solutions.", photo: "assets/img/team/tran-manh-hieu.jpg" },
  { name: "Đào Văn Thái", role: "K19 Robotics and Artificial Intelligence", tag: "Technical", body: "Strong passion for technology and machinery." },
  { name: "Trần Đăng Hưng", role: "Robotics and Artificial Intelligence", tag: "Technical", body: "Passionate about scientific research.", photo: "assets/img/team/tran-dang-hung.jpg" },
  { name: "Hoàng Văn Tú", role: "K18 Control and Automation Engineering Technology", tag: "Technical", body: "Passionate about machinery." },
  { name: "Hoàng Đại Dương", role: "K19 Robotics and Artificial Intelligence", tag: "Technical", body: "Interested in robotic control systems." },
  { name: "Nguyễn Duy Mình", role: "K15 Mechanical Engineering Technology", tag: "Technical", body: "Interested in machine design and conveyor systems." },
  { name: "Lê Quang Phúc", role: "Mechanical Engineering", tag: "Technical", body: "Passionate about researching, designing, and building robots for intelligent engineering solutions.", photo: "assets/img/team/le-quang-phuc.jpg" },
  { name: "Đào Đức Phúc", role: "K19 Mechatronics Engineering Technology", tag: "Technical", body: "Interested in robots and control." },
  { name: "Nguyễn Nhân Tố", role: "Mechatronics Engineering Technology", tag: "Technical", body: "Pursuing innovative ideas and creating value through science and technology." },
  { name: "Nguyễn Văn Tình", role: "Control and Automation Engineering Technology", tag: "Technical", body: "Focused on building solid projects and effective teams from the ground up." },
  { name: "Nguyễn Sỹ Thoan", role: "Mechatronics Engineering Technology (graduated)", tag: "Technical", body: "One of the first three members of the lab.", photo: "assets/img/team/nguyen-sy-thoan.jpg" },
  { name: "Vũ Thị Thu Hường", role: "Banking and Finance", tag: "Business", body: "Passionate about entrepreneurship, business, and investment.", photo: "assets/img/team/vu-thi-thu-huong.jpg" },
  { name: "Nguyễn Vũ Hoàng", role: "Lab member", tag: "Technical", body: "Member of Soft Robotics Lab.", photo: "assets/img/team/nguyen-vu-hoang.jpg" },
];

// Newest first.
const NEWS = [
  { date: "2026-06-13", tag: "Award", body: "LumiR won First Prize at the mock fundraising contest of the HaUI Innovation & Entrepreneurship Festival 2026.", photo: "assets/img/news-lumir-fundraising.jpg" },
  { date: "2026-06-10", tag: "Award", body: "LumiR won First Prize at the 7th HaUI Startup Challenge 2026." },
  { date: "2026-04-16", tag: "Best Paper", body: "“LumiR: An AI-Integrated Assistive Navigation Robot for People with Visual Impairments” received the Best Paper Award at SETSM 2026.", photo: "assets/img/news-setsm-bestpaper.jpg" },
  { date: "2025-10-01", tag: "Exhibition", body: "LumiR was showcased at TECHFEST Vietnam 2025." },
  { date: "2025-09-28", tag: "Exhibition", body: "LumiR was introduced at NASA Space Apps Challenge 2025 in Ninh Binh." },
  { date: "2025-09-20", tag: "Award", body: "AquaBand won Second Prize at Pitching Day, part of the Innovation & Entrepreneurship Festival 2025." },
  { date: "2025-09-18", tag: "Exhibition", body: "LumiR was presented at HaUI Innovation Day 2025." },
  { date: "2025-09-12", tag: "Exhibition", body: "LumiR joined the 2025 HaUI Engineering Festival exhibition." },
  { date: "2025-09-10", tag: "Award", body: "AquaBand was named among the Top 30 of BLOCK71 × Univenture 2025." },
  { date: "2025-09-08", tag: "Incubation", body: "LumiR received a commitment of incubation support from the Hanoi Department of Science and Technology." },
  { date: "2025-09-01", tag: "Outreach", body: "Lab ran Touch to Robotics, a hands-on STEM event with VICEE: 60 primary/lower-secondary students explored 5 robotic mechanisms, built their own, and raced it on the spot." },
  { date: "2025-09-01", tag: "Milestone", body: "AquaBand completed its first pitching trial with support from HaUI and BLOCK71 NUS." },
  { date: "2023-07-01", tag: "Award", body: "ROSE was selected as a finalist for the Best System Paper Award at Robotics: Science and Systems 2023." },
  { date: "2023-06-01", tag: "Award", body: "ROSE won the Open Category at the Soft Robotics Toolkit Competition 2023." },
  { date: "2023-04-01", tag: "Lab", body: "Soft Robotics Lab begins as a personal research initiative led by Dr. Son Tien Bui." },
  { date: "2023-03-01", tag: "PhD", body: "Dr. Son Tien Bui completed his Ph.D. at JAIST and was recognized as an Outstanding Finalist by the School of Materials Science." },
];

// Awards & honors, newest first.
const HONORS = [
  { year: 2026, title: "Best Paper Award — “Mobile Robot for Blind Navigation Assistance”", where: "Intl. Conference on Sustainability and Emerging Technologies for Smart Manufacturing (SETSM 2026)" },
  { year: 2024, title: "Winner — Open Category, Soft Robotics Research", where: "Soft Robotics Toolkit Competition 2023", url: "https://softroboticstoolkit.com/competitions/2023" },
  { year: 2023, title: "Best System Paper Finalist", where: "Robotics: Science and Systems (RSS 2023)", url: "https://roboticsfoundation.org/awards/best-systems-paper-award/" },
  { year: 2023, title: "Outstanding Finalist, School of Materials Science", where: "Japan Advanced Institute of Science and Technology (JAIST)" },
  { year: 2019, title: "JASSO Scholarship", where: "Research Assistant, National Institute of Technology, Tsuruoka College" },
  { year: 2019, title: "MEXT Scholarship recipient", where: "Government of Japan (Ph.D. funding)" },
  { year: 2012, title: "1st Prize — 23rd Vietnam Creativity Competition, “Line-seed-sowing machine”", where: "Cuộc thi Sáng tạo Việt", url: "https://youtu.be/y1QemCX8K3Q" },
];

// Professional service, newest first.
const SERVICE = [
  { year: 2026, role: "Keynote speaker", where: "ICCIT 2026", url: "https://iccit.buv.edu.vn/" },
  { year: 2025, role: "Keynote speaker", where: "ICCIT 2025", url: "https://iccit.buv.edu.vn/2025.html" },
  { year: 2025, role: "Chair", where: "SETSM 2025", url: "https://link.springer.com/book/10.1007/978-981-95-1750-3" },
  { year: 2024, role: "Keynote speaker", where: "RICE 2024" },
  { year: 2024, role: "Chair", where: "SETSM 2024", url: "https://link.springer.com/book/10.1007/978-981-97-7083-0" },
  { year: 2024, role: "Session Chair", where: "APSIPA ASC 2024", url: "https://www.apsipa.org/asc_web/apsipa2024/index.html" },
  { year: 2023, role: "Keynote speaker", where: "RICE 2023" },
];

const REVIEWER_FOR = "IEEE Transactions on Robotics (Q1) · IEEE Robotics and Automation Letters (Q1) · Advanced Robotics (Q1) · Robotics: Science and Systems (A*) · IEEE RoboSoft · IEEE/SICE SII";
