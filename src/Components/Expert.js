import React, { Component } from 'react';
import LinkedIn from '../img/linkedin.png';
import Github from '../img/github.png';
import Twitter from '../img/twitter.png';

class Experts extends Component {
  editExcerpt(data){
      const excerpt = data;
      const length = 240;
      return excerpt.substring(0, length) + " ...";
  }
  renderExperts(){
    return this.props.expert.map((expert, index)=>{
        return (
          <div key={index}>
              <div className="card card-space">
                  <h3 className="card-header">{expert.first} {expert.last} - {expert.position}</h3>
                  <div className="card-block">
                  <img src={expert.img} alt={expert.position} className="img-thumbnail custom-sizing"/>
                  <p className="card-text card-spacing">{this.editExcerpt(expert.bio)}</p>
                  <p className="social-section"><a href={expert.linkedin} target="_blank"><img src={LinkedIn} alt="linkedin logo"/></a> <a href={expert.github} target="_blank"><img src={Github} alt="github logo"/></a> <a href={expert.twitter} target="_blank"><img src={Twitter} alt="twitter logo"/></a></p>
                  </div>
            </div>
         </div>
       );
    });
  }
  render() {
    return (
      <div className="Expert">
          {this.renderExperts()}
      </div>
    );
  }
}

export default Experts;
