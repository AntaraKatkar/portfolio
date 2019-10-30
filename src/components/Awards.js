import React, {Component} from 'react';

class Awards extends Component {
  render()
  {
    return(

      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="awards">
        <div className="w-100">
          <h2 className="mb-5 text-primary">{ this.props.title }</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Not yet but soon coming :).............. on its way </li>

          </ul>
        </div>
      </section>

    )
  }

}
export default Awards;
