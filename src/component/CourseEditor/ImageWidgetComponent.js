import React from "react";

class ImageWidgetComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            widget: this.props.widget,
            isPreview: this.props.isPreview,
            update: false
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.update) {
            this.props.findWidgetForTopic(this.props.topicId);
            this.setState({update: false})
        }
    }

    update = () =>
        this.setState(prevState => ({
            update: !prevState.update
        }))

    render() {
        return (
            <div>
                {!this.props.isPreview &&
                <div>
                    <div className="form-group">
                        <input type="url" className="form-control" placeholder="Image URL"
                               onChange={(e) => {
                                   const newUrl = e.target.value;
                                   this.setState(prevState => ({
                                       widget: {
                                           ...prevState.widget,
                                           url: newUrl
                                       }
                                   }))
                               }
                               }
                               value={this.state.widget.url}/>
                    </div>
                    <div className="form-group">

                        <input type="text" className="form-control" placeholder="Widget Name"/>
                    </div>

                </div>
                }

                <h4>Preview</h4>
                <img className="wbdv-img" src={this.state.widget.url}/>


                {!this.props.isPreview &&
                <button type="button" className="btn btn-success btn-lg btn-block"
                        onClick={() => {
                            this.props.updateWidget(this.state.widget);
                            this.update();
                            alert("Successfully saved!")
                        }}>Save
                </button>}
            </div>
        )
    }
}

export default ImageWidgetComponent;
