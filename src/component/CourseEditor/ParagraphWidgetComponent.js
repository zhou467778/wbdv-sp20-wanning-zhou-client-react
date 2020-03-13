import React from "react";

class ParagraphWidgetComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            widget: this.props.widget,
            update: false
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.state.update){
            this.props.findWidgetForTopic(this.props.topicId);
            this.setState({update: false} )
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
                <textarea class="form-control" rows="3" placeholder="Paragraph text"
                          onChange={(e) => {
                              const newTitle = e.target.value;
                              this.setState(prevState => ({
                                  widget: {
                                      ...prevState.widget,
                                      title: newTitle
                                  }
                              }))
                          }
                          }
                          value={this.state.widget.title}
                ></textarea>
                    </div>

                    < div className="form-group">
                        <input type="text" className="form-control" id="widgetname" placeholder="Widget Name"/>
                    </div>
                </div>

}

                    <div>
                        <h4>Preview</h4>
                        <p>{this.state.widget.title}</p>
                    </div>



                {!this.props.isPreview &&
                <button type="button" className="btn btn-success btn-lg btn-block"
                        onClick={() => {
                            this.props.updateWidget(this.state.widget)
                            this.update()
                            alert("Successfully saved!")
                        }}>Save
                </button>
                }
            </div>
        )
    }

}

export default ParagraphWidgetComponent;