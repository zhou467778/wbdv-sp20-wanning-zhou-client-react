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
    downWidget_dis
} from "../../actions/WidgetAction";
import {connect} from "react-redux";
import HeadingWidgetComponent from "./HeadingWidgetComponent";
import ParagraphWidgetComponent from "./ParagraphWidgetComponent";
import WidgetService from "../../services/WidgetService";

class WidgetListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            widget: {},
            isPreview: false,
            update:false
        }
    }

    componentDidMount() {
        this.props.topicId && this.props.findWidgetForTopic(this.props.topicId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.topicId !== this.props.topicId || this.state.update) {
           this.props.findWidgetForTopic(this.props.topicId)
            this.setState({
                update: false
            })
        }
    }

    update = () =>
        this.setState(prevState => ({
            update: !prevState.update
        }))


    render() {
        return (
            <div className="wbdv-content">

                <div className="custom-control custom-switch wbdv-preview">
                    <input type="checkbox" className="custom-control-input" id="customSwitch1"
                    onClick={()=> this.setState(prevState => ({
                        isPreview: !prevState.isPreview
                    }))}/>
                        <label className="custom-control-label" htmlFor="customSwitch1">Preview</label>
                    </div>

                {this.props.widgets && this.props.widgets.length > 0 && this.props.widgets.map(widget =>

                    <div className="wbdv-boxed" key={widget.id}>

                            <div className="wbdv-big-heading">
                            {widget.type === "HEADING" &&
                            <h2 >Heading Widget</h2>}
                            {widget.type === "PARAGRAPH" &&
                            <h2>Paragraph Widget</h2>}
                            </div>

                        <div className="wbdv-button-group col-md-2">
                            { widget.order !== 0 &&
                            <button className="wbdv-up btn btn-warning"
                                    onClick={() => {this.props.upWidget(widget);
                                    console.log(widget.order);
                                    this.update()}}>
                                    <i className="fa fa-arrow-up"></i></button>
                            }
                            {widget.order !== this.props.widgets.length - 1 &&
                            < button className="wbdv-down btn btn-warning"
                                onClick={() => {this.props.downWidget(widget);
                                this.update()}}><i className="fa fa-arrow-down"></i></button>
                            }

                                <select className="form-control wbdv-widget-type "
                                        onChange={(e) => {
                                            const newType = e.target.value;
                                            widget.type = newType;
                                            this.props.updateWidget(widget)
                                        }}
                                        value={widget.type}>
                                    <option value={"HEADING"}>Heading</option>
                                    <option value={"PARAGRAPH"}>Paragraph</option>
                                </select>

                            <button className="wbdv-red-close"
                            onClick={() => this.props.deleteWidget(widget.id)}>
                                <i className="fa fa-times"></i></button>
                        </div>


                        {widget.type === "HEADING" &&
                        <HeadingWidgetComponent
                        widget = {widget}
                        isPreview = {this.state.isPreview}
                        updateWidget = {this.props.updateWidget}
                        />}
                        {widget.type === "PARAGRAPH" &&
                        <ParagraphWidgetComponent
                            widget = {widget}
                            isPreview = {this.state.isPreview}
                            updateWidget = {this.props.updateWidget}
                            />}
                    </div>
                )}
                <button className="wbdv-red-plus"
                        onClick={() => {
                            this.props.topicId &&
                            this.props.createWidget({
                                id: (new Date()).getTime() + "",
                                title: "New Widget",
                                type: "HEADING",
                                size: 1,
                                topicId: this.props.topicId
                            })
                            !this.props.topicId && alert("Please select a topic first")
                        }}><i className="fa fa-plus"></i></button>

            </div>

        )
    }
}

const  stateToPropertyMapper = (state) => {
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

        createWidget: (widget) => {
            WidgetService.createWidget(widget)
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

        upWidget:(widget) =>
            WidgetService.upWidget(widget)
                .then(actualWidget =>
                dispatch(upWidget_dis(actualWidget))),

        downWidget: (widget) =>
            WidgetService.downWidget(widget)
                .then(actualWidget =>
                dispatch(downWidget_dis(actualWidget)))
    }

}

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(WidgetListComponent);