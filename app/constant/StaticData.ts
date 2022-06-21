const bookBitesDetails = {
  description:
    'Think Like a Rocket Scientist: Simple Strategies You Can Use to Make Giant Leaps in Work and Life',
  authorName: 'Ozan Varol',
  articleContent: `Hello members of the Next Big Idea Club. I'm Ozan Varol. I majored in astrophysics in college and worked on the operations team for the 2004 Mars Exploration Rovers project. I later pivoted to become a law professor and author to inspire others to level up here on Earth. My new book, Think Like a Rocket Scientist, is a culmination of that lifelong journey. Today, thinking like a rocket scientist is a necessity. We all encounter complex and unfamiliar problems in our lives. Those that can tackle these problems without clear guidelines and with the clock ticking enjoy an extraordinary advantage. I'm going to share with you five key insights from the book.
  
  The first insight is about the importance of reframing problems to generate better answers. The year was 1999. I had just started working on the operations team for what would later become the Mars Exploration Rovers mission. At the time, our mission was to send a single rover to Mars in 2003.
    
  In 1999, as we were busy designing our own rover, another lander, called the Mars Polar Lander, crashed on the Martian surface. Now this wasn't our baby, but the Polar Lander was using the same landing mechanism that we were planning to use. Our mission got put on hold, understandably, since our landing mechanism had just failed spectacularly. We were scrambling to figure out a way to fix the landing mechanism and come up with a new way of landing on Mars. I remember distinctly when my boss, the leader of the mission, walked into my office and said, "I just got off the phone with the administrator of NASA. And he asked, 'Can we send two of these rovers instead of one?'" It was such a simple question, but one that none of us had thought of asking before. The NASA administrator reframed the problem.
    
  The problem wasn't just the landing system because even if we fixed the landing system, sending a delicate robot to Mars is really risky. Any number of random things could break our spacecraft while traveling nearly 40 million miles through outer space, and landing on a Martian surface littered with scary looking rocks while getting whipped around by strong winds. Instead of putting all our eggs in one spacecraft's basket and crossing our fingers that nothing bad happens along the way, we decided to send two rovers instead of one. Even if one failed, the other might make it. What's more, with economies of scale, the cost of the second rover would be pennies on the dollar.
    
  The rovers were named Spirit and Opportunity. We had built them to last for 90 days. Spirit lasted for six years until it got stuck on soft soil. But Opportunity kept roving the Red Planet until 2018, over 14 years into its 90 day expected lifetime. This story illustrates the difference between strategy and tactics. Although the terms are often used interchangeably, they refer to different things. As strategy is a plan for achieving an objective, tactics, in contrast, are the actions you undertake to implement the strategy. To find the strategy, ask yourself, "What problem is this tactic here to solve?"
    
  Once you move from the what to the why, once you've framed the problem broadly in terms of what you're trying to accomplish, instead of your favorite solution, you'll discover other possibilities lurking in plain sight. So to go back to our Mars Rover, if you frame the problem more broadly as the risk involved in landing on Mars, not just as a defective landing mechanism, sending two rovers instead of one decreases risk and increases reward. Breakthroughs, contrary to popular wisdom, don't begin with a smart answer. They often begin with a smart question.
     
  The second insight from the book that I wanted to share with you is about first principles thinking. Now sticker shock isn't in the vocabulary of most Silicon Valley entrepreneurs, but that's what Elon Musk experienced as he shopped for rockets to spend a spacecraft to Mars. He looked to buy rockets on both the American and the Russian markets, but the rockets were way too expensive, even for his budget. He was about to give up until he realized his approach was deeply flawed. Returning home from his last shopping spree in Russia empty handed, he had an epiphany. And he arrived at this epiphany using a principle from physics called first principles thinking.
  First principles requires you to hack through existing assumptions as if you're hacking through a jungle until you're left with the fundamental components. Everything else is negotiable. Instead of letting your original vision or the visions of others shape the path forward, you abandon all allegiances to them. When you apply first principles thinking, you switch from being a cover band that plays someone else's songs to an artist that does the painstaking work of creating something new.
    
  In trying to buy rockets that other people had built, Elon Musk realized that he was playing the role of a cover band. And for him, using first principles meant starting with the laws of physics and asking himself, "What's actually required to launch a rocket?" 
    
  He stripped a rocket down to its smallest sub components, its fundamental raw materials. And it turned out that if you buy those raw materials on the market and build the rockets from scratch, it was around 2% of the typical price of a rocket, which is a crazy ratio. So Musk decided to construct his next generation rockets from scratch. If you walk through the halls of Space X's factories, you'll find people doing everything from welding titanium to building in flight computers.
    
  First principles thinking prompted Space X to question another deeply held assumption in rocket science. For decades, most rockets that launched spacecraft into outer space couldn't be reused. They would plunge into the ocean or burn up into the atmosphere after carrying their cargo to orbit, requiring an entirely new rocket to be built. Now imagine for a moment doing the same thing with commercial flights, and torching an airplane at the end of each flight. That's basically what we did for rockets. The cost of a modern rocket is about the same as a Boeing 737, but flying on a 737 is far less expensive be jets, unlike rockets, are flown over and over again.
    
  Space X and Blue Origin, which is Jeff Bezos' space company, changed that. Since then, both companies have refurbished and reused numerous recovered rocket stages, sending them back out to space like certified preowned cars. So that story illustrates the importance of questioning assumptions and applying first principles thinking. "Your assumptions are your windows on the world," said Alan Alda, "Scrub them off every once in a while, or the light won't come in." Ask yourself. What do you assume you're supposed to do simply because it's been done before, or simply because others around you are doing it? Can you question that assumption and replace it with some better? In the book, I reveal additional tactics you can use to question assumptions and apply first principles thinking in your life.
     
  That brings me to the third insight, success is a wolf in sheep's clothing. When we succeed, we assume that everything went according to plan. When we're too busy lighting cigars, we fail to recognize that we succeeded despite making a mistake or despite taking a serious risk. We ignore the warning signs, the near misses, and the necessity for change. This is why the Challenger and the Columbia space shuttles exploded. In both cases, NASA got complacent with its own success. The Challenger exploded because of a flaw in what are known as the O rings. These rings are like rubber bands that seal the joints of the solid rocket boosters that launch the shuttle and prevent hot gases from escaping. The problem with the O rings wasn't new. NASA had been flying its shuttles with damaged O rings for several years before Challenger.
    `,
};

const bookBitesData = [
  {
    id: '1',
    title: 'How we make the decisions that matter',
    timeDuration: '16 min',
    ...bookBitesDetails,
  },
  {
    id: '2',
    title: 'The surprising power of ordinary things',
    timeDuration: '13 min',
    ...bookBitesDetails,
  },
  {
    id: '3',

    title: 'How we make the decisions that matter',
    timeDuration: '14 min',
    ...bookBitesDetails,
  },
  {
    id: '4',

    title: 'How we make the decisions that matter',
    timeDuration: '16 min',
    ...bookBitesDetails,
  },
  {
    id: '5',
    title: 'How we make the decisions that matter',
    timeDuration: '16 min',
    ...bookBitesDetails,
  },
];

module.exports = {
  bookBitesData,
};
