export default function Modules() {
  return (
    <div>
      {/* Implement Collapse All button, View Progress button, etc. */}
      <ul id="wd-modules">
        {/* Week 1 */}
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">Learn what is Web Development</li>
                <li className="wd-content-item">Understand client-server architecture</li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">READING</span>
              <ul className="wd-content">
                <li className="wd-content-item">Chapter 1: Introduction</li>
                <li className="wd-content-item">Online article: What is the Internet?</li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Lecture 1 slides (PDF)</li>
              </ul>
            </li>
          </ul>
        </li>

        {/* Week 2 */}
        <li className="wd-module">
          <div className="wd-title">Week 2</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">TOPICS</span>
              <ul className="wd-content">
                <li className="wd-content-item">HTML Basics</li>
                <li className="wd-content-item">Headings, Paragraphs, and Lists</li>
                <li className="wd-content-item">Links and Images</li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">ASSIGNMENT</span>
              <ul className="wd-content">
                <li className="wd-content-item">Build a simple HTML webpage</li>
              </ul>
            </li>
          </ul>
        </li>

        {/* Week 3 */}
        <li className="wd-module">
          <div className="wd-title">Week 3</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">TOPICS</span>
              <ul className="wd-content">
                <li className="wd-content-item">CSS Introduction</li>
                <li className="wd-content-item">Selectors and Properties</li>
                <li className="wd-content-item">Inline, Internal, External CSS</li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">ASSIGNMENT</span>
              <ul className="wd-content">
                <li className="wd-content-item">Style your HTML webpage with CSS</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
