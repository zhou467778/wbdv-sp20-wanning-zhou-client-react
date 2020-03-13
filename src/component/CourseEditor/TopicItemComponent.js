import React from "react";

class TopicItemComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topicTitle: this.props.topic.title

        }
    }

    render() {
        let style = this.props.selecting || this.props.editing ? "topic-selected" : "topic-unselected";
        return (
            <li className="nav-item">
                <a type="text" className={`nav-link ${style}`} onClick={this.props.select}>
                    {!this.props.editing &&
                    <span>
                                <b> {this.state.topicTitle}</b>
                                <button className="wbdv-topic-pill-edit"
                                        onClick={this.props.edit}><i className="fa fa-edit"></i></button>
                            </span>
                    }

                    {this.props.editing &&
                    <span>
                            <input value={this.state.topicTitle}
                                   onChange={(e) => this.setState({
                                       topicTitle: e.target.value
                                   })}
                            />
                            <button className="wbdv-topic-pill-delete"
                                    onClick={() => this.props.deleteTopic(this.props.topic.id)}>X</button>
                            <button className="wbdv-topic-pill-check"
                                    onClick={() => {
                                        const newTopic = this.props.topic;
                                        newTopic.title = this.state.topicTitle;
                                        this.props.updateTopic(newTopic);
                                        this.props.save()
                                    }}><i className="fa fa-check"></i>
                                    </button>

                        </span>}
                </a>
            </li>
        )
    }
}

export default TopicItemComponent;