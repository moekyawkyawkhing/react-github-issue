import React from 'react';
import { Form, Field } from 'react-final-form'

class NewIssue extends React.Component {
    handleCreateNewIssue = async (values) => {
        await this.props.storeNewIssue(values);
    }

    renderTitle = (fieldProps) => {
        return (
            <div className="form-group">
                <label>Title</label>
                <input type="text" className="form form-control" {...fieldProps.input} />
                {fieldProps.meta.touched && fieldProps.meta.error && <span className="text-danger">{fieldProps.meta.error}</span>}
            </div>
        );
    }

    renderBody = (fieldProps) => {
        return (
            <div className="form-group">
                <label>Body</label>
                <textarea className="form form-control" {...fieldProps.input} />
                {fieldProps.meta.touched && fieldProps.meta.error && <span className="text-danger">{fieldProps.meta.error}</span>}
            </div>
        );
    }

    renderForm = (form_props) => { 
        return (
            <form id="form" onSubmit={async event => {
                await form_props.handleSubmit(event)
                form_props.form.reset()
              }}>
                <Field
                    name="title"
                    render={this.renderTitle}
                />
                <Field
                    name="body"
                    render={this.renderBody}
                />
                <button type="submit"  disabled={form_props.submitting || !form_props.valid} className="btn btn-md btn-primary btn-block">
                    { form_props.submitting ? 'Creating issuse........' : 'Create'}
                </button>
            </form>
        );
    }

    validate = (values) => {
        const errors={};
        if(!values.title || values.title.trim().length < 1){
            errors.title= "Title is require";
        }

        if(!values.body || values.body.trim().length < 1){
            errors.body= "Body is require";
        }
        return errors;
    }

    render() {
        return (
            <div className="row my-3">
                <div className="col-md-5 mx-auto">
                    <div className="card">
                        <h5 className="card-header">New Issue</h5>
                        <div className="card-body">
                            <Form
                                onSubmit={this.handleCreateNewIssue}
                                validate={this.validate}
                                render={this.renderForm}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewIssue;