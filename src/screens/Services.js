import React from 'react'

function Services() {
  return (
    <div id="classes" className="myClasses">
      <div className="d-flex justify-content-center my-5">
        <h1>My Services</h1>
      </div>
      <h2 className="mx-auto py-1">Custom Upholstery</h2>
      <div className="container myClasses-wrapper">
        {/*  */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3 className="py-2">Automotive</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
              quasi aliquam illum enim maiores praesentium ducimus asperiores,
              blanditiis nostrum, nemo delectus tempora accusantium harum, earum
              iste dicta vero ut a?
            </p>
          </div>
        </div>
        {/*  */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Seat Belts</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
              quasi aliquam illum enim maiores praesentium ducimus asperiores,
              blanditiis nostrum, nemo delectus tempora accusantium harum, earum
              iste dicta vero ut a?
            </p>
          </div>
        </div>
        {/*  */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"> </div>
          <div className="timeline-content">
            <h3>Steering Wheels</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
              quasi aliquam illum enim maiores praesentium ducimus asperiores,
              blanditiis nostrum, nemo delectus tempora accusantium harum, earum
              iste dicta vero ut a?
            </p>
          </div>
        </div>
        {/*  */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"> </div>
          <div className="timeline-content">
            <h3>Custom Work</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
              quasi aliquam illum enim maiores praesentium ducimus asperiores,
              blanditiis nostrum, nemo delectus tempora accusantium harum, earum
              iste dicta vero ut a?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services