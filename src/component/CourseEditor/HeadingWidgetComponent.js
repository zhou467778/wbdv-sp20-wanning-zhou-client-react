import React from "react";

class HeadingWidgetComponent extends React.Component {
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
                    <input type="text" className="form-control"  placeholder="Heading Text"
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
                        value={this.state.widget.title}/>
                </div>

                <div className="form-group">
                    <select className="form-control"
                            onChange={(e) => {
                                const newSize = parseInt(e.target.value)
                                this.setState(prevState => ({
                                    widget: {
                                        ...prevState.widget,
                                        size: newSize
                                    }
                                }))
                            }}
                            value={this.state.widget.size}>
                        <option value={1}>Heading 1</option>
                        <option value={2}>Heading 2</option>
                        <option value={3}>Heading 3</option>
                        <option value={4}>Heading 4</option>
                        <option value={5}>Heading 5</option>
                        <option value={6}>Heading 6</option>>
                    </select>
                </div>

                <div className="form-group">

                    <input type="text" className="form-control" placeholder="Widget Name"/>
                </div>
                {!this.state.editing &&
                <div>
                    <h4>Preview</h4>
                    {this.state.widget.size === 1 && <h1>{this.state.widget.title}</h1>}
                    {this.state.widget.size === 2 && <h2>{this.state.widget.title}</h2>}
                    {this.state.widget.size === 3 && <h3>{this.state.widget.title}</h3>}
                    {this.state.widget.size === 4 && <h4>{this.state.widget.title}</h4>}
                    {this.state.widget.size === 5 && <h5>{this.state.widget.title}</h5>}
                    {this.state.widget.size === 6 && <h6>{this.state.widget.title}</h6>}
                </div>
                }
                <button type="button" className="btn btn-success btn-lg btn-block"
                onClick={()=> {
                this.props.updateWidget(this.state.widget)
                alert("Successfully saved!")}}>Save</button>

            </div>
        )
    }

}

export default HeadingWidgetComponent;