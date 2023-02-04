const AboutMe = () => {
  return (
    <div className="flex flex-col gap-4">
      <p>
        Welcome to my portfolio project website! I&apos;m Cedric Quitor, a student at the University of Santo Tomas pursuing a degree in IT. My passion for technology and data drives me to continuously learn and expand my knowledge in the field. I am
        particularly interested in data science and have a goal of pursuing a career in this exciting field after completing my bachelor&apos;s degree.
      </p>
      <p>Aside from academics, I am also keen on developing web, data, and AI/ML applications. I believe that technology has the power to solve some of the world&apos;s biggest challenges, and I am eager to contribute my own solutions.</p>
      <p>
        As a student, I am always looking for new opportunities to learn and grow, and I am excited to see what the future holds for me in this constantly evolving field. I hope to make a difference by utilizing my technical skills and passion for
        technology to make a positive impact in the world.
      </p>
      <p>Thank you for taking the time to visit my portfolio website. If you have any questions or would like to learn more about my work, don&apos;t hesitate to get in touch!</p>
    </div>
  );
};

const Tools = () => {
  return (
    <div>
      <h1>Tools</h1>
      <div className="grid grid-cols-4 place-items-center">
        <p>Tool 1</p>
        <p>Tool 2</p>
        <p>Tool 3</p>
        <p>Tool 4</p>
        <p>Tool 5</p>
        <p>Tool 6</p>
        <p>Tool 7</p>
        <p>Tool 8</p>
        <p>Tool 9</p>
        <p>Tool 10</p>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div>
      <h1>Experience</h1>
      <div>
        <p>Experience 1</p>
        <p>Experience 2</p>
        <p>Experience 3</p>
      </div>
    </div>
  );
};

const Certifications = () => {
  return (
    <div>
      <h1>Certifications</h1>
      <div>
        <p>Certificate 1</p>
        <p>Certificate 2</p>
        <p>Certificate 3</p>
        <p>Certificate 4</p>
        <p>Certificate 5</p>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>About Me (Longer version)</h1>
      <AboutMe />
      <Tools />
      <Experience />
      <Certifications />
    </div>
  );
};

export default About;
