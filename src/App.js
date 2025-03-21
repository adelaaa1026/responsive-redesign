import React from 'react';
import './styles.css';

function App() {
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [modalOpen, setModalOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <div className="progress-bar">
        <div 
          className="progress-fill"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      <main>
        <section id="introduction">
          <div className="container">
            <h1>Responsive Redesign</h1>
            <div className="intro-grid">
              <div>
                <p className="title-description">
                Have you ever visited a website that was poorly designed? A confusing layout, a non-clickable logo, small font sizes, and hard-to-read font colors can all contribute to a frustrating user experience. Poorly designed websites not only make navigation difficult for users but also damage the reputation of the organizations or companies behind them.
</p>
                 <p className="title-description">
                In this case study, we will analyze the poorly designed <a href="https://www.torontocupcake.com">homepage of acupcake shop</a> in Toronto and work on redesigning it. Our goal is to make it easy for users to understand the shop's services, browse the cupcake menu, and place orders online, while also enhancing the shop's marketing and popularity.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="input">
          <div className="container">
            <h2>Part I: Usability Problems</h2>
            <p className="subtitle-description">
              <strong>Before getting started, let's analyze the usability (efficiency, learnability, memorability) and accessibility of the current interface, which is shown below.</strong>
            </p>
            
            <div className="interface-section">
              <img 
                src={process.env.PUBLIC_URL + '/original_website.png'} 
                alt="Original Website" 
                className="interface-image"
              />
            </div>
            
            <div className="observation-list">
              <ul>
                <li>
                  As seen in the screenshot, an image of several <b>cupcake boxes </b>occupies most of the landing page. This is highly inefficient because it not only fails to provide any useful information about the company or the cupcakes they offer, but it also does not enhance the website's functionality or user experience.
                </li>

                <li>
                  The website also contains <b> dense blocks of text</b>  without adequate spacing or bullet points. On a laptop screen, the text spans the entire width, making it difficult to read.
                </li>

                <li>
                  Despite the long header bar, the navigation menu is <b>hidden</b> in a small hamburger menu. For first-time users, it is neither intuitive nor direct to navigate the website. In addition, the menu dropdown actually covers a large part of the website, making it difficult for users to see the text beneath it.
                </li>

                <li>
                  The top of the website is crowded with an entire row of <b>unclickable logos</b>, with the last logo even cut in half. This makes the website highly inefficient, as most users expect to to be able to click on the logo and return to the main page.
                </li>

                <li>
                  On the right side, there is a floating "Let's Chat" label, which frequently <b>blocks text</b> beneath it.
                </li>
              </ul>
              
              <p className="subtitle-description">
                <strong>In terms of accessibility, we used the WAVE Accessibility Evaluation Tool and found several issues with the website:</strong>
              </p>
              
              <ul>
                <li>
                  The font size of the text blocks is very small and gives an error in WAVE.
                </li>

                <li>
                  The website uses light pink and grey as its theme colors. The contrast is very low, failing the AA test for normal text and the AAA test for large text.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="input">
          <div className="container">
            <h2>Part II: Visual Redesign</h2>
          
            <h3>Design Guide</h3>
            <div className="observation-list">
              <p>
                The first step is to create a coherent design style guide that we can refer to when redesigning the website. Here is the new visual design style guide we came up with. We chose <b>pink</b> as our dominant color and <b>yellow</b> as our feature color because they align well with the warm and vibrant tones of cupcakes, as well as the existing color scheme of the website. I selected the font "Satisfy" for the headings to create <b>an artistic vibe</b> and "Red Hat" in a light weight for <b>better readability and a high-end feel </b> . To ensure a coherent user experience across screens, we also created <b>reusable interactive components</b> with different states, including buttons, menus, and cards.
              </p>
              
              <div className="interface-section">
                <img 
                  src={process.env.PUBLIC_URL + '/visual_design_guide.png'} 
                  alt="Design Style Guide" 
                  className="interface-image"
                />
              </div>
            </div>

            <h3>Mockups</h3>
            <div className="observation-list">
            <p>
                Based on the components and elements of our design guide, we created three mockups for desktop, tablet, and mobile. All details regarding fonts, padding, borders, and other design elements are included in the mockups, but several key changes across screen sizes are summarized below:
            </p>
              
              <ul>
                <li>
                  <strong>Nav Bar Section:</strong> On desktop and tablet, the navigation bar is expanded, displaying all three sections (Home, About, Cupcakes). On mobile, the navigation bar collapses into a hamburger menu and moves to the left side.
                </li>

                <li>
                  <strong>Hero Section:</strong> On desktop, the hero section consists of two columns (title + hero image). On tablet and mobile, it is displayed as a single column.
                </li>

                <li>
                  <strong>Cupcake Menu Section:</strong> On desktop, the menu displays three cupcakes per row. On tablet, this changes to two cupcakes per row. On mobile, it adjusts to one cupcake per row.
                </li>
              </ul>
              
              <h4>Desktop Mockup (Scrollable)</h4>
              <p>This mockup is designed for screen widths larger than 1200px. Scroll to see the full mockup.</p>
              <div className="desktop-scrollable-container">
                <img 
                  src={process.env.PUBLIC_URL + '/desktop_mockup.png'} 
                  alt="Desktop Mockup" 
                  className="scrollable-mockup-image"
                />
              </div>
              
              <h4>Tablet Mockup (Scrollable)</h4>
              <p>This mockup is designed for screen widths between 768px and 1200px. Scroll to see the full mockup.</p>
              <div className="tablet-scrollable-container">
                <img 
                  src={process.env.PUBLIC_URL + '/tablet_mockup.png'} 
                  alt="Tablet Mockup" 
                  className="scrollable-mockup-image"
                />
              </div>
              
              <h4>Mobile Mockup (Scrollable)</h4>
              <p>This mockup is designed for screen widths less than 768px. Scroll to see the full mockup.</p>
              <div className="mobile-scrollable-container">
                <img 
                  src={process.env.PUBLIC_URL + '/mobile_mockup.png'} 
                  alt="Mobile Mockup" 
                  className="scrollable-mockup-image"
                />
              </div>
            </div>

             
 
          </div>
        </section>

        <section id="state-models">
          <div className="container">
            <h2>Part III: Responsive Implementation</h2>
            

            <p>This is the final implemented version of the responsive design: <a href="https://adelaaa1026.github.io/cupcake-shop/index.html" target="_blank" rel="noopener noreferrer">https://adelaaa1026.github.io/cupcake-shop/index.html</a>. This redesign improves usability in the following three aspects:</p>
            
            <ul>
              <li><strong>Navigation:</strong> The navigation bar is expanded to clearly show all three sections of the website. This enhances efficiency, as it's easier for users to navigate to specific sections.</li>
              
              <li><strong>About Us Section:</strong> The "About Us" section succinctly presents the shop's three main features: cupcake customization, rental cupcake stands, and delivery service. This improves learnability, allowing customers to quickly understand what the shop offers.</li>
              
              <li><strong>Cupcake Menu:</strong> The website uses a grid layout to display a variety of cupcake flavors, effectively highlighting the shop's wide selection and quality service.</li>
            </ul>
            <br></br>
            <p>This new design also improves accessibility. All fonts and colors are large enough and pass the WAVE accessibility test. The layout is easy to read, and screen readers like VoiceOver can access the content smoothly.</p>

             
          </div>
        </section>

        
      </main>

      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setModalOpen(false)}>&times;</span>
            <img 
              src={process.env.PUBLIC_URL + '/desktop_mockup.png'} 
              alt="Desktop Mockup" 
              className="modal-image"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
