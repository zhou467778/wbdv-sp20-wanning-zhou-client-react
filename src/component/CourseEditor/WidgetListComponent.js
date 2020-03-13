import React from "react";
import "../../css/CourseEditorStyle.css"
import "../../../node_modules/font-awesome/css/font-awesome.css"
import "bootstrap/dist/css/bootstrap.css"
import {
    createWidget_dis,
    deleteWidget_dis,
    findAllWidget_dis,
    findWidgetForTopic_dis,
    updateWidget_dis,
    upWidget_dis,
    downWidget_dis, findWidgetById_dis
} from "../../actions/WidgetAction";
import {connect} from "react-redux";
import HeadingWidgetComponent from "./HeadingWidgetComponent";
import ParagraphWidgetComponent from "./ParagraphWidgetComponent";
import WidgetService from "../../services/WidgetService";
import ListWidgetComponent from "./ListWidgetComponent";
import ImageWidgetComponent from "./ImageWidgetComponent";

class WidgetListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            widget: {},
            isPreview: false,
            update: false,
        }
    }

    componentDidMount() {
        this.props.findWidgetForTopic(this.props.topicId)


    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.topicId !== this.props.topicId || this.state.update ||
            this.props.widgets.length !== prevProps.widgets.length) {
            this.props.findWidgetForTopic(this.props.topicId)
            this.setState({
                update: false
            })
        }
    }

    update = () => {
        this.setState(prevState => ({
            update: !prevState.update
        }))
    }



    render() {
        return (
            <div className="wbdv-content">
                <div className="custom-control custom-switch wbdv-preview">
                    <input type="checkbox" className="custom-control-input" id="customSwitch1"
                           onClick={() => this.setState(prevState => ({
                               isPreview: !prevState.isPreview
                           }))}/>
                    <label className="custom-control-label" htmlFor="customSwitch1">Preview</label>
                </div>
                {
                    this.props.widgets && this.props.widgets.length > 0 && this.props.widgets.map((widget, index) =>
                    <div>


                        <div className="wbdv-boxed" key={widget.id}>

                            <div className="wbdv-big-heading">
                                {widget.type === "HEADING" &&
                                <h2>Heading Widget</h2>}
                                {widget.type === "PARAGRAPH" &&
                                <h2>Paragraph Widget</h2>}
                                {widget.type === "LIST" &&
                                <h2>List Widget</h2>}
                                {widget.type === "IMAGE" &&
                                <h2>Image Widget</h2>}
                            </div>
                            {!this.state.isPreview &&
                            <div className="wbdv-button-group col-md-2">
                                {index !== 0 &&
                                <button className="wbdv-up btn btn-warning"
                                        onClick={() => {
                                            this.props.upWidget(widget);

                                        }}>
                                    <i className="fa fa-arrow-up"></i></button>
                                }
                                {index !== this.props.widgets.length - 1 &&
                                < button className="wbdv-down btn btn-warning"
                                         onClick={() => {
                                             this.props.downWidget(widget);

                                         }}><i className="fa fa-arrow-down"></i></button>
                                }
                                <button className="wbdv-red-close"
                                        onClick={() => {
                                            this.props.deleteWidget(widget.id);
                                        }
                                        }>
                                    <i className="fa fa-times"></i></button>

                                <select className="form-control wbdv-widget-type "
                                        onChange={(e) => {
                                            const newType = e.target.value;
                                            widget.type = newType;
                                            this.props.updateWidget(widget)

                                        }}
                                        value={widget.type}>
                                    <option value={"HEADING"}>Heading</option>
                                    <option value={"PARAGRAPH"}>Paragraph</option>
                                    <option value={"LIST"}>List</option>
                                    <option value={"IMAGE"}>Image</option>
                                </select>


                            </div>
                            }

                            {widget.type === "HEADING" &&
                            <HeadingWidgetComponent
                                widget={widget}
                                isPreview={this.state.isPreview}
                                updateWidget={this.props.updateWidget}
                                topicId = {this.props.topicId}
                                findWidgetForTopic = {this.props.findWidgetForTopic}

                            />}
                            {widget.type === "PARAGRAPH" &&
                            <ParagraphWidgetComponent
                                widget={widget}
                                isPreview={this.state.isPreview}
                                updateWidget={this.props.updateWidget}
                                topicId = {this.props.topicId}
                                findWidgetForTopic = {this.props.findWidgetForTopic}

                            />}
                            {widget.type === "LIST" &&
                            <ListWidgetComponent
                                widget={widget}
                                isPreview={this.state.isPreview}
                                updateWidget={this.props.updateWidget}
                                topicId = {this.props.topicId}
                                findWidgetForTopic = {this.props.findWidgetForTopic}
                                />}
                            {widget.type === "IMAGE" &&
                            <ImageWidgetComponent
                                widget={widget}
                                isPreview={this.state.isPreview}
                                updateWidget={this.props.updateWidget}
                                topicId = {this.props.topicId}
                                findWidgetForTopic = {this.props.findWidgetForTopic}
                            />}
                        </div>
                    </div>
                )}
                <button className="wbdv-red-plus"
                        onClick={() => {
                            this.props.topicId && this.props.createWidget(this.props.topicId, {
                                id: parseInt(Math.random() * 1000 + 1),
                                title: "New Widget",
                                type: "HEADING",
                                size: 1,
                                url:"",
                                listType: "unordered"
                            })

                        }}><i className="fa fa-plus"></i></button>

            </div>

        )
    }
}


const stateToPropertyMapper = (state) => {
    return {
        widgets: state.widgets.widgets
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {
        findWidgetForTopic: (topicId) => {
            WidgetService.findWidgetForTopic(topicId)
                .then(actualWidgets => dispatch(
                    findWidgetForTopic_dis(actualWidgets)
                ))
        },

        createWidget: (topicId, widget) => {
            WidgetService.createWidget(topicId, widget)
                .then(actualWidget =>
                    dispatch(createWidget_dis(actualWidget)))
        },

        deleteWidget: (widgetId) =>
            WidgetService.deleteWidget(widgetId)
                .then(status =>
                    dispatch(deleteWidget_dis(widgetId))),

        updateWidget: (widget) =>
            WidgetService.updateWidget(widget)
                .then(newWidget =>
                    dispatch(updateWidget_dis(newWidget))),

        findAllWidget: () =>
            WidgetService.findAllWidget()
                .then(actualWidget =>
                    dispatch(findAllWidget_dis(actualWidget))),

        upWidget: (widget) =>
            WidgetService.upWidget(widget)
                .then(actualWidget =>
                    dispatch(upWidget_dis(actualWidget))),

        downWidget: (widget) =>
            WidgetService.downWidget(widget)
                .then(actualWidget =>
                    dispatch(downWidget_dis(actualWidget))),

        findWidgetById: (widget) =>
            WidgetService.findWidgetById(widget)
                .then(actualWidget =>
                    dispatch(findWidgetById_dis(actualWidget)))

    }

}

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(WidgetListComponent);