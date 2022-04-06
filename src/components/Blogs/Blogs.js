import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs">
      <div className="container">
        <h3 className="text-center text-danger mt-4 text-uppercase">
          Some Basic question and answer
        </h3>
        <hr className="w-50 mx-auto mb-4" />
        <div className="row p-2">
          <div className="col-lg-6">
            <h5 className="mb-3">What is Context API?</h5>
            <p>
              The React Context API is a way for a React app to effectively
              produce global variables that can be passed around. This is the
              alternative to "prop drilling" or moving props from grandparent to
              child to parent, and so on. Context is also touted as an easier,
              lighter approach to state management using Redux.<br></br>
              Context API is a (kind of) new feature added in version 16.3 of
              React that allows one to share state across the entire app (or
              part of it) lightly and with ease.
            </p>
          </div>
          <div className="col-lg-6">
            <h5 className="mb-3">What is semantic tag?</h5>
            <p>
              A semantic element clearly describes its meaning to both the
              browser and the developer.<br></br>
              HTML5 semantic tags define the purpose of the element. By using
              semantic markup, you help the browser understand the meaning of
              the content instead of just displaying it. By providing this extra
              level of clarity, HTML5 semantic elements also help search engines
              to read the page and find the required information faster.
            </p>
          </div>
        </div>
        <div className="my-5 p-2">
          <h5 className="mb-4">
            What is the difference between Inline, Inline-block and Block
            element ?
          </h5>
          <div className="row table-data">
            <div className="col-lg-4 blog-1">
              <h6 className="text-center">Inline element</h6>
              <ul>
                <li>
                  The element doesn’t start on a new line and only occupy just
                  the width it requires. You can’t set the width or height.
                </li>
              </ul>
            </div>
            <div className="col-lg-4 blog-2">
              <h6 className="text-center">Inline-block element</h6>
              <ul>
                <li>
                  It’s formatted just like the inline element, where it doesn’t
                  start on a new line. BUT, you can set width and height values.
                </li>
              </ul>
            </div>
            <div className="col-lg-4 blog-3">
              <h6 className="text-center">Block Element</h6>
              <ul>
                <li>
                  The element will start on a new line and occupy the full width
                  available. And you can set width and height values.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
