import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../actions';

export default class AdminPanel extends Component {
  componentWillMount() {
    console.log(this.props.admin)
  }
  
  handleNewVideoSubmit(formProps) {
    console.log("formProps", formProps);
    this.props.sendNewVideo(formProps)
  }

  render() {
    const { handleSubmit, fields: {title, wistiaId, description} } = this.props;
    
    return(
      <div>
        <h3>Admin paneli</h3>
        <div className="card card-block">
          <h4 className="card-title">Lisää uusi video</h4>
            <form onSubmit={handleSubmit(this.handleNewVideoSubmit.bind(this))}>
              <fieldset className="form-group">
                <label>Videon nimi</label>
                <input className="form-control" {...title}/>
              </fieldset>

              <fieldset className="form-group">
                <label>Wisita ID</label>
                <input className="form-control" {...wistiaId}/>
              </fieldset>

              <fieldset className="form-group">
                <label>Selitys</label>
                <textarea className="form-control" {...description}/>
              </fieldset>


              <button action="submit" className="btn btn-success">Lähetä</button>
            </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    admin: state.admin.admin
  }
}

export default reduxForm({
  form: 'addNewVideo',
  fields: ['title', 'wistiaId', 'description']
},mapStateToProps, actions)(AdminPanel);