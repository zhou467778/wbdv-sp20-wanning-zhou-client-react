import React from "react";


class ModuleItemComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            moduleTitle: this.props.module.title

        }
    }

    render() {
        let style = this.props.selecting || this.props.editing ? "module_selected" : "module_unselected";
        return (

            <div>
                <a type="button" className={style}
                   onClick={this.props.select}>
                    <b className="wbdv-module-item-title"> {this.state.moduleTitle} </b>

                    {this.props.editing &&
                    <button className="wbdv-module-item-delete-btn"
                            onClick={() => this.props.deleteModule(this.props.module._id)}> X </button>}

                    {this.props.editing &&
                    <button className="wbdv-module-item-check-btn"
                            onClick={() => {
                                const newModule = this.props.module;
                                newModule.title = this.state.moduleTitle;
                                this.props.updateModule(newModule);
                                this.props.save()
                            }
                            }><i className="fa fa-check"></i></button>
                    }


                    {!this.props.editing &&
                    <button className="wbdv-module-item-edit-btn"
                            onClick={this.props.edit}>
                        <i className="fa fa-edit"></i></button>}

                    {this.props.editing &&
                    <input value={this.state.moduleTitle}
                           onChange={(e) => this.setState({
                               moduleTitle: e.target.value
                           })}
                    />}
                </a>
            </div>
        )
    }

}


export default (ModuleItemComponent)

