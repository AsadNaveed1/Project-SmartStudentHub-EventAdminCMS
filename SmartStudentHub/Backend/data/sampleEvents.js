const sampleEvents = [
    // Existing Events
    {
      eventId: "1",
      title: "Career Talk by XYZ Corp",
      image: "https://example.com/event5.jpg",
      summary: "Join us for an insightful career talk by XYZ Corp.",
      description: "XYZ Corp is a leading company in the tech industry, offering a variety of career opportunities ranging from software development to project management. This event provides a platform for students and professionals to learn about the company's vision, culture, and the skills required to succeed. Attendees will have the chance to engage in Q&A sessions, network with industry experts, and gain valuable insights into building a successful career path with XYZ Corp.",
      date: "15-05-2025",
      time: "11:00 AM - 12:00 PM",
      organization: "HKU",
      type: "University Event",
      location: "HKU Main Auditorium",
    },
    {
      eventId: "2",
      title: "Volunteer Opportunity with ABC NGO",
      image: "https://example.com/event5.jpg",
      summary: "Volunteer with ABC NGO to make a difference.",
      description: "ABC NGO is dedicated to making a positive impact in the community through various initiatives such as education, healthcare, and environmental conservation. This volunteer opportunity invites individuals to contribute their time and skills to meaningful projects that address pressing societal issues. Participants will work alongside passionate team members, gain hands-on experience, and help drive change in areas they care about deeply.",
      date: "05-05-2025",
      time: "02:00 PM - 04:00 PM",
      organization: "ABC NGO",
      type: "External Event",
      subtype: "Volunteer",
      location: "ABC NGO Headquarters",
    },
    {
      eventId: "3",
      title: "Tech Workshop by DEF Inc",
      image: "https://example.com/event5.jpg",
      summary: "Learn the latest in tech at our workshop.",
      description: "DEF Inc is hosting a comprehensive tech workshop aimed at enthusiasts and professionals looking to stay updated with the latest advancements in technology. The workshop will cover topics such as artificial intelligence, blockchain, cybersecurity, and cloud computing. Participants will engage in interactive sessions, hands-on projects, and gain insights from industry experts, enhancing their technical skills and knowledge base.",
      date: "20-05-2025",
      time: "01:00 PM - 02:00 PM",
      organization: "HKU",
      type: "University Event",
      location: "Tech Hall, HKU Campus",
    },
    {
      eventId: "4",
      title: "Health and Wellness Fair",
      image: "https://example.com/event5.jpg",
      summary: "Join us for a day of health and wellness activities.",
      description: "The Health and Wellness Fair is designed to promote a holistic approach to health, encompassing physical, mental, and emotional well-being. Attendees can participate in fitness classes, mindfulness workshops, nutrition seminars, and receive health screenings. Additionally, various booths will offer resources, products, and services aimed at fostering a healthier lifestyle. This event is perfect for anyone looking to enhance their well-being and connect with health professionals.",
      date: "12-05-2025",
      time: "03:00 PM - 05:00 PM",
      organization: "Health Org",
      type: "External Event",
      subtype: "Community Events",
      location: "Community Center Hall",
    },
    {
      eventId: "5",
      title: "Coding Bootcamp",
      image: "https://example.com/event5.jpg",
      summary: "Intensive coding bootcamp for beginners.",
      description: "The Coding Bootcamp is an intensive program tailored for individuals looking to break into the world of programming. Over the course of several sessions, participants will learn fundamental coding languages such as Python, JavaScript, and HTML/CSS. The bootcamp emphasizes hands-on learning through projects, enabling attendees to build their own applications and websites. By the end of the program, participants will have a solid foundation in coding and be prepared to pursue further studies or entry-level positions in the tech industry.",
      date: "25-06-2025",
      time: "11:00 AM - 12:00 PM",
      organization: "HKU",
      type: "University Event",
      location: "Computer Lab, HKU Campus",
    },
    {
      eventId: "6",
      title: "Art Exhibition",
      image: "https://example.com/event6.jpg",
      summary: "Explore the latest art from local artists.",
      description: "The Art Exhibition showcases a diverse range of artwork created by talented local artists. Visitors can expect to see various mediums including painting, sculpture, photography, and mixed media. This event provides an excellent opportunity for art enthusiasts to appreciate creative expressions, engage with artists, and even purchase unique pieces. Whether you're an avid art lover or simply curious, the exhibition promises to inspire and captivate.",
      date: "18-12-2024",
      time: "05:00 PM - 07:00 PM",
      organization: "Art Gallery",
      type: "External Event",
      subtype: "Community Events",
      location: "City Art Gallery",
    },
    {
      eventId: "7",
      title: "Music Concert",
      image: "https://example.com/event7.jpg",
      summary: "Live music concert featuring local bands.",
      description: "Experience an electrifying evening of live performances by some of the city's most talented local bands. The Music Concert offers a variety of genres, ensuring there's something for every music lover. Whether you're into rock, jazz, pop, or indie music, this event promises high-energy performances, engaging stage presence, and a vibrant atmosphere. It's the perfect opportunity to enjoy great music, meet fellow enthusiasts, and support local artists.",
      date: "22-04-2025",
      time: "06:00 PM - 07:00 PM",
      organization: "Music Club",
      type: "External Event",
      subtype: "Community Events",
      location: "City Music Hall",
    },
    {
      eventId: "8",
      title: "Startup Pitch Night",
      image: "https://example.com/event8.jpg",
      summary: "Watch startups pitch their ideas to investors.",
      description: "Startup Pitch Night is an exciting event where innovative startups present their business ideas to a panel of seasoned investors and industry experts. Entrepreneurs will have the opportunity to showcase their products or services, explain their business models, and outline their growth strategies. This event not only provides startups with valuable feedback and potential funding but also allows attendees to discover emerging businesses and network with key players in the startup ecosystem.",
      date: "10-06-2025",
      time: "12:00 PM - 01:00 PM",
      organization: "HKU",
      type: "University Event",
      location: "Entrepreneurship Center, HKU Campus",
    },
    {
      eventId: "9",
      title: "Environmental Awareness Campaign",
      image: "https://example.com/event9.jpg",
      summary: "Join us to raise awareness about environmental issues.",
      description: "The Environmental Awareness Campaign aims to educate and engage the community on critical environmental issues such as climate change, pollution, and sustainable living. Activities include workshops, informational booths, eco-friendly product demonstrations, and interactive exhibits. Participants will learn practical ways to reduce their environmental footprint, advocate for policy changes, and support conservation efforts. This campaign is a call to action for everyone to contribute towards a healthier planet.",
      date: "25-08-2025",
      time: "04:00 PM - 06:00 PM",
      organization: "Green Earth",
      type: "External Event",
      subtype: "Volunteer",
      location: "Green Earth Center",
    },
    {
      eventId: "10",
      title: "Business Networking Event",
      image: "https://example.com/event10.jpg",
      summary: "Network with professionals in your industry.",
      description: "The Business Networking Event provides a platform for professionals from various industries to connect, share insights, and explore potential collaborations. Attendees can engage in meaningful conversations, exchange business cards, and expand their professional networks. The event may also feature keynote speakers who offer valuable perspectives on industry trends and best practices. Whether you're looking to advance your career, find new business opportunities, or simply meet like-minded individuals, this networking event is an essential gathering for professionals.",
      date: "15-05-2025",
      time: "01:00 PM - 03:00 PM",
      organization: "Business Network",
      type: "External Event",
      subtype: "Networking",
      location: "Business Network Venue",
    },
    {
      eventId: "11",
      title: "Science Fair",
      image: "https://example.com/event11.jpg",
      summary: "Showcase your science projects and experiments.",
      description: "The Science Fair is an exciting event where students and enthusiasts can display their scientific projects, experiments, and innovations. Participants have the opportunity to demonstrate their work to judges, peers, and visitors, gaining recognition for their efforts and creativity. The fair covers various scientific disciplines, including biology, chemistry, physics, and engineering. It's a fantastic platform for fostering a love for science, encouraging critical thinking, and inspiring the next generation of scientists and researchers.",
      date: "30-12-2024",
      time: "11:00 AM - 12:00 PM",
      organization: "HKU",
      type: "University Event",
      location: "HKU Science Hall",
    },
    {
      eventId: "12",
      title: "Cooking Class",
      image: "https://example.com/event12.jpg",
      summary: "Learn to cook delicious meals with our chef.",
      description: "Join our Cooking Class to enhance your culinary skills and learn how to prepare a variety of delicious meals. Led by an experienced chef, this class offers hands-on instruction in techniques such as chopping, seasoning, and presentation. Participants will explore different cuisines, understand flavor combinations, and create their own dishes. Whether you're a beginner or looking to refine your cooking abilities, this class provides a fun and interactive environment to cultivate your passion for cooking.",
      date: "20-07-2025",
      time: "02:00 PM - 04:00 PM",
      organization: "Culinary School",
      type: "External Event",
      subtype: "Volunteer",
      location: "Culinary School Kitchen",
    },
  
    // Additional Events to Cover All Societies and External Event Types
  
    // Artificial Intelligence Society Events
    {
      eventId: "13",
      title: "AI Workshop: Machine Learning Basics",
      image: "https://example.com/ai_workshop.jpg",
      summary: "Dive into the basics of machine learning with hands-on projects.",
      description: "This AI Workshop is designed for individuals interested in understanding the foundational concepts of machine learning. Participants will engage in interactive sessions covering topics such as supervised and unsupervised learning, neural networks, and data preprocessing. Through hands-on projects, attendees will apply theoretical knowledge to real-world scenarios, enhancing their practical skills in building and deploying machine learning models. Whether you're a beginner or looking to deepen your AI expertise, this workshop offers valuable insights and learning opportunities.",
      date: "10-07-2025",
      time: "11:00 AM - 01:00 PM",
      organization: "HKU",
      type: "University Event",
      subtype: "Society Event",
      name: "Artificial Intelligence Society",
      location: "Tech Hall, HKU Campus",
    },
    {
      eventId: "14",
      title: "AI Hackathon",
      image: "https://example.com/ai_hackathon.jpg",
      summary: "Collaborate to build innovative AI solutions in a 24-hour hackathon.",
      description: "The AI Hackathon is a high-energy event that brings together developers, data scientists, and AI enthusiasts to collaborate on creating cutting-edge artificial intelligence solutions. Over a 24-hour period, teams will work on predefined challenges or propose their own projects, leveraging machine learning, deep learning, and other AI technologies. Mentors and industry experts will be available to provide guidance, and participants will have access to various tools and resources. The hackathon fosters creativity, teamwork, and innovation, with awards given to the most impactful and innovative projects.",
      date: "15-05-2025",
      time: "12:00 PM - 02:00 PM",
      organization: "HKU",
      type: "University Event",
      subtype: "Society Event",
      name: "Artificial Intelligence Society",
      location: "Innovation Lab, HKU Campus",
    },
  
    // Arts Association Events
    {
      eventId: "15",
      title: "Canvas Painting Workshop",
      image: "https://example.com/canvas_painting.jpg",
      summary: "Learn the art of canvas painting from experienced artists.",
      description: "The Canvas Painting Workshop offers participants the opportunity to explore their artistic talents under the guidance of seasoned artists. The workshop covers essential techniques such as color mixing, brushwork, and composition, allowing attendees to create their own masterpieces on canvas. Whether you're a novice or have some painting experience, this workshop provides a supportive environment to develop your skills, express your creativity, and gain confidence in your artistic abilities.",
      date: "20-01-2024",
      time: "02:00 PM - 04:00 PM",
      organization: "HKU",
      type: "University Event",
      subtype: "Society Event",
      name: "Arts Association",
      location: "Arts Center, HKU Campus",
    },
    {
      eventId: "16",
      title: "Sculpture Exhibition",
      image: "https://example.com/sculpture_exhibition.jpg",
      summary: "Explore stunning sculptures created by our talented members.",
      description: "The Sculpture Exhibition features an array of intricate and captivating sculptures crafted by members of the Art Collective. This exhibition showcases a diverse range of styles and materials, highlighting the creativity and technical skills of the artists. Visitors can admire the detailed craftsmanship, engage with the artists to learn about their creative processes, and gain inspiration for their own artistic endeavors. The event celebrates the vibrant artistic community and offers a platform for sculptors to display their work.",
      date: "10-05-2025",
      time: "11:00 AM - 01:00 PM",
      organization: "Art Collective",
      type: "External Event",
      subtype: "Community Events",
      location: "Main Gallery, Art Collective Studio",
    },
  
    // Chess and Board Games Club Events
    {
      eventId: "17",
      title: "Monthly Chess Tournament",
      image: "https://example.com/chess_tournament.jpg",
      summary: "Compete against fellow chess enthusiasts in our monthly tournament.",
      description: "The Monthly Chess Tournament is a competitive event open to all members and enthusiasts of the Chess and Board Games Club. Participants will engage in a series of matches, testing their strategic thinking and mastery of the game. The tournament fosters a friendly yet competitive environment, encouraging players to improve their skills, learn new strategies, and connect with like-minded individuals. Prizes will be awarded to top performers, and all participants will receive certificates of achievement.",
      date: "18-05-2025",
      time: "03:00 PM - 05:00 PM",
      organization: "HKU",
      type: "University Event",
      subtype: "Society Event",
      name: "Chess and Board Games Club",
      location: "Game Room, HKU Campus",
    },
    {
      eventId: "18",
      title: "Board Games Night",
      image: "https://example.com/board_games_night.jpg",
      summary: "Join us for a fun evening of various board games and socializing.",
      description: "Board Games Night is a relaxed and enjoyable event where participants can play a wide selection of board games, ranging from classic favorites to modern strategy games. It's an excellent opportunity to unwind, socialize with friends and new acquaintances, and engage in friendly competition. Whether you're a seasoned gamer or new to board games, this event welcomes everyone to have fun, share laughs, and experience the joy of gaming in a supportive community setting.",
      date: "22-04-2025",
      time: "06:00 PM - 08:00 PM",
      organization: "Board Game Enthusiasts",
      type: "External Event",
      subtype: "Community Events",
      location: "Community Hall",
    },
  
    // Computer Science Association Events
    {
      eventId: "19",
      title: "Programming Contest",
      image: "https://example.com/programming_contest.jpg",
      summary: "Test your coding skills in our annual programming contest.",
      description: "The Programming Contest is an annual competition that challenges participants to solve complex coding problems within a set timeframe. Open to students and coding enthusiasts of all levels, the contest assesses algorithmic thinking, problem-solving abilities, and proficiency in various programming languages. Competitors will work individually or in teams to develop efficient and effective solutions. Winners will be recognized for their technical excellence, and top performers may receive awards and opportunities for internships or collaborations with leading tech firms.",
      date: "20-05-2025",
      time: "11:00 AM - 01:00 PM",
      organization: "HKU",
      type: "University Event",
      subtype: "Society Event",
      name: "Computer Science Association",
      location: "Computer Lab, HKU Campus",
    },
    {
      eventId: "20",
      title: "Tech Talk: Emerging Technologies",
      image: "https://example.com/tech_talk.jpg",
      summary: "Join industry experts as they discuss the latest trends in technology.",
      description: "Tech Talk: Emerging Technologies is a seminar featuring esteemed professionals and thought leaders from the tech industry. The session will cover groundbreaking advancements such as artificial intelligence, blockchain, Internet of Things (IoT), and quantum computing. Attendees will gain insights into how these technologies are shaping the future, the challenges they present, and the opportunities they create. The event also includes a Q&A segment, allowing participants to engage directly with the speakers and deepen their understanding of the topics discussed.",
      date: "30-01-2024",
      time: "01:00 PM - 03:00 PM",
      organization: "Tech Innovators Inc.",
      type: "External Event",
      subtype: "Networking",
      location: "Auditorium, Tech Innovators Inc.",
    },
  
    // English Debate Society Events
    {
      eventId: "21",
      title: "Debate Workshop",
      image: "https://example.com/debate_workshop.jpg",
      summary: "Enhance your debating skills with our interactive workshop.",
      description: "The Debate Workshop is an interactive session aimed at improving participants' public speaking, critical thinking, and argumentative skills. Led by experienced debaters and coaches, the workshop covers key aspects such as constructing compelling arguments, effective rebuttal techniques, and maintaining debate etiquette. Through practice debates and constructive feedback, attendees will build confidence and proficiency in presenting their ideas persuasively. This workshop is ideal for students looking to excel in debate competitions or enhance their communication abilities.",
      date: "05-05-2025",
      time: "11:00 AM - 12:00 PM",
      organization: "HKU",
      type: "University Event",
      subtype: "Society Event",
      name: "English Debate Society",
      location: "Lecture Hall, HKU Campus",
    },
    {
      eventId: "22",
      title: "Intercollegiate Debate Competition",
      image: "https://example.com/debate_competition.jpg",
      summary: "Compete in debates against teams from other colleges.",
      description: "The Intercollegiate Debate Competition brings together debate teams from various colleges to engage in structured and spirited debates on current and pressing topics. Participants will have the opportunity to showcase their debating prowess, collaborate with teammates, and challenge their opponents in a competitive yet respectful environment. The competition emphasizes critical analysis, logical reasoning, and effective communication. Awards will be presented to the top-performing teams, recognizing their excellence in debate and teamwork.",
      date: "15-04-2025",
      time: "11:00 AM - 01:00 PM",
      organization: "Debate Masters LLC",
      type: "External Event",
      subtype: "Networking",
      location: "Conference Center",
    },
  
    // Music Society Events
    {
      eventId: "23",
      title: "Open Mic Night",
      image: "https://example.com/open_mic.jpg",
      summary: "Showcase your musical talents or enjoy performances by others.",
      description: "Open Mic Night is a vibrant event that welcomes musicians, vocalists, poets, and performers of all kinds to take the stage and share their talents. Whether you're an experienced artist or new to performing, this event provides a supportive and encouraging environment to express yourself creatively. Attendees can enjoy a diverse array of performances, connect with fellow artists, and be inspired by the unique talents within the community. It's an excellent opportunity to gain performance experience, receive feedback, and enjoy an evening of entertainment.",
      date: "15-05-2025",
      time: "07:00 PM - 09:00 PM",
      organization: "HKU",
      type: "University Event",
      subtype: "Society Event",
      name: "Music Society",
      location: "Music Hall, HKU Campus",
    },
    {
      eventId: "24",
      title: "Jazz Concert",
      image: "https://example.com/jazz_concert.jpg",
      summary: "Experience an evening of smooth jazz performances.",
      description: "The Jazz Concert features a lineup of talented jazz musicians and ensembles performing a selection of classic and contemporary jazz pieces. Attendees will enjoy the soothing sounds of saxophones, trumpets, pianos, and drums in a beautifully orchestrated setting. The concert aims to celebrate the rich history of jazz, as well as its evolution in modern times. It's a perfect evening for jazz enthusiasts and anyone looking to relax and appreciate fine musical artistry.",
      date: "20-04-2025",
      time: "08:00 PM - 09:00 PM",
      organization: "Smooth Jazz Entertainment",
      type: "External Event",
      subtype: "Community Events",
      location: "Concert Arena",
    },
  ];

module.exports = sampleEvents;