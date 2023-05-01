import React, {Component} from 'react';

class Interest extends Component {
  render(){
    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="interests">
        <div className="w-100">
          <h2 className="mb-5 text-primary">{ this.props.title }</h2>
          <p>Apart from being a web developer, I enjoy most of my time doing acrylic painting and explore the things related to different home decor art. For example craft work, quilling work, Indian Henna art work, Indian Rangoli art work. During summer I also prefer to explore new places.</p>
          <p className="mb-0"> I also spend my free time in exploring the latest technology advancements in the front-end web development world.</p>
        </div>
      </section>
    )
  }

}
export default Interest;
