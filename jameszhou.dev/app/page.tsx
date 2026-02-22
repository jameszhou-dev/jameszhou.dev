import Tabs from "./components/Tabs";

export default function Home() {
  return (
    <div className="pb-22">
      {/* Hero / top section */}
  <section className="site-container pt-12">
        <div className="max-w-4xl hero-separator">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2">
            <h1 className="text-6xl font-bold"><strong>James Zhou</strong></h1>
            <p className="mt-6 text-2xl muted">CS Undergrad • University of Maryland</p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a href="https://www.linkedin.com/in/jameszhoudev" target="_blank" rel="noopener noreferrer" className="icon inline-flex items-center">
                <img src="/linkedin.svg" alt="LinkedIn" className="black w-6 h-6 mr-2" />
                LinkedIn
              </a>

              <a href="https://github.com/jameszhou-dev" target="_blank" rel="noopener noreferrer" className="icon inline-flex items-center">
                <img src="/github.svg" alt="GitHub" className="w-6 h-6 mr-2" />
                GitHub
              </a>

              <a href="mailto:yunchengzhou@gmail.com" className="icon inline-flex items-center">
                <img src="/mail.svg" alt="Email" className="w-6 h-6 mr-2" />
                Email
              </a>
            </div>
          </div>

          <div className="md:col-span-1 flex justify-center md:justify-end">
            <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-gray-100">
              <img src="/dog.jpg" alt="James Zhou" className="w-full h-full object-cover" />
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Top About (editable) */}
      <section id="about-top" className="site-container mt-8">
        <div className="max-w-4xl">
          <p className="mt-6 muted text-lg">
           Hi! I'm James Zhou, a freshman at the University of Maryland pursuing a B.S. in Computer Science.
          </p>
          <p className="mt-6 muted text-lg">
           I am an undergraduate researcher at the{' '}
           <a href="https://wiki.umiacs.umd.edu/clip/index.php/Main_Page" className="nav-link" target="_blank" rel="noopener noreferrer" title="CLIP lab URL">Computational Linguistics and Information Processing Lab</a>{' '}
           and the{' '}
           <a href="https://hdi.cs.umd.edu" className="nav-link" target="_blank" rel="noopener noreferrer" title="HDI group URL">Human-Data Interaction Group</a>, where I'm grateful to be working with{' '}
           <a href="https://www.cs.umd.edu/~miyyer/" className="nav-link" target="_blank" rel="noopener noreferrer" title="Professor URL">Dr. Mohit Iyyer</a>{' '}
           and{' '}
           <a href="https://zcliu.cs.umd.edu" className="nav-link" target="_blank" rel="noopener noreferrer" title="Professor URL">Dr. Leo Zhicheng Liu</a>.
          </p>
          <p className="mt-6 muted text-lg">
            I am also a software engineer for <a href="https://umd.hack4impact.org" className="nav-link" target="_blank" rel="noopener noreferrer" title="Hack4Impact-UMD URL">Hack4Impact-UMD</a> {' '}
             working with The Friends of Mount Vernon Trail and a technical lead for the {' '}
             <a href="https://gdg.community.dev/gdg-on-campus-university-of-maryland-college-park-united-states/" className="nav-link" target="_blank" rel="noopener noreferrer" title="GDSC-UMD URL">Google Developer Student Club</a>. 
          </p>
          {/* Add more paragraphs or lists as you like */}
        </div>
      </section>
      
  {/* Tabs container: Projects / Publications / Personal */}
  <Tabs />

    </div>
  );
}
