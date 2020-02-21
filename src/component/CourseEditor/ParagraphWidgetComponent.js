import React from "react";

class ParagraphWidgetComponent extends React.Component{
    constructor(props) {
        super(props);
    }

    state={
        widget : this.props.widget,
        editing: this.props.editing
    }
    render() {
        return (
            <div>


                <div className="form-group">
                    <label htmlFor="widgetname"></label>
                    <input type="text" className="form-control" id="widgetname" placeholder="Widget Name"/>
                </div>
                {!this.state.editing &&
                <div>
                    <h4>Preview</h4>
                   <p>{this.state.widget.title}</p>
                </div>
                }
            </div>
        )
    }

}
 export default ParagraphWidgetComponent;