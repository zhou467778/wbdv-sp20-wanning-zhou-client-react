import React from "react";

class ListWidgetComponent extends React.Component {
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
                <textarea class="form-control" rows="3" placeholder={"Put each \nitem in \nseparate line"}
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
                    <div className="form-group">
                        <select className="form-control"
                                onChange={(e) => {
                                    const newType = e.target.value;
                                    this.setState(prevState => ({
                                        widget: {
                                            ...prevState.widget,
                                            listType: newType
                                        }
                                    }))
                                }}
                                value={this.state.widget.listType}>
                            <option value={"unordered"}>Unordered List</option>
                            <option value={"ordered"}>Ordered List</option>
                            >
                        </select>
                    </div>

                    <div className="form-group">

                        <input type="text" className="form-control" placeholder="Widget Name"/>
                    </div>

                </div>
                }
                <div>
                    <h4>Preview</h4>

                    {this.state.widget.listType === "unordered" &&
                        <ul>
                            {this.state.widget.title.split("\n").map(item =>
                            <li>{item}</li>
                            )}
                        </ul>}

                    {this.state.widget.listType === "ordered" &&
                        <ol>
                            {this.state.widget.title.split("\n").map(item =>
                                <li>{item}</li>
                            )}

                        </ol>}

                </div>
                {!this.props.isPreview &&
                <button type="button" className="btn btn-success btn-lg btn-block"
                        onClick={() => {
                            this.props.updateWidget(this.state.widget);
                            this.update();
                            alert("Successfully saved!")
                        }}>Save
                </button>
                }

            </div>


        )
    }
}

export default ListWidgetComponent;