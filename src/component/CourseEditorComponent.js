import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
import "../css/CourseEditorStyle.css"
import "../../node_modules/font-awesome/css/font-awesome.css"

const CourseEditorComponent = ({hideEditor}) =>


    <div className=" bg-white wbdv-main">
        <div className=" wbdv-page-tab">
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        <button onClick={hideEditor}
                                className="wbdv-course-editor wbdv-close"><i className="fa fa-times "></i></button>

                    </li>
                    <span className="navbar-brand wbdv-course-title">CS4550 - WebDev</span>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Build</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Pages</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Theme</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Store</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Apps</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Settings</a>
                    </li>
                </ul>
                <button><i className="fa fa-plus wbdv-new-page-btn"></i></button>
            </nav>
        </div>


        <div className="wbdv-module-list">
            <div className="list-group wbdv-module-list">
                <a type="button" className="wbdv-module-item"><b className="wbdv-module-item-title">Module 1 -
                    jQuery</b>
                    <button className="wbdv-module-item-delete-btn">X</button>
                </a>
                <a type="button" className="wbdv-module-item"><b className="wbdv-module-item-title">Module 2 - React</b>
                    <button className="wbdv-module-item-delete-btn">X</button>
                </a>
                <a type="button" className="wbdv-module-item wbdv-choose"><b className="wbdv-module-item-title">Module 3
                    - Redux</b>
                    <button className="wbdv-module-item-delete-btn">X</button>
                </a>
                <a type="button" className="wbdv-module-item"><b className="wbdv-module-item-title">Module 4 -
                    Native</b>
                    <button className="wbdv-module-item-delete-btn">X</button>
                </a>
                <a type="button" className="wbdv-module-item"><b className="wbdv-module-item-title">Module 5 -
                    Angular</b>
                    <button className="wbdv-module-item-delete-btn">X</button>
                </a>
                <a type="button" className="wbdv-module-item"><b className="wbdv-module-item-title">Module 6 - Node</b>
                    <button className="wbdv-module-item-delete-btn">X</button>
                </a>
                <a type="button" className="wbdv-module-item"><b className="wbdv-module-item-title">Module 7 - Mongo</b>
                    <button className="wbdv-module-item-delete-btn">X</button>
                </a>
                <a type="button" className="wbdv-module-item-add-btn"> + </a>

            </div>
        </div>

        <div className="wbdv-content">
            <div className="wbdv-topic-pill-list">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className="nav-link active wbdv-topic-pill" href="#">Topic 1</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link wbdv-topic-pill" href="#">Topic 2</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link wbdv-topic-pill" href="#">Topic 3</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link wbdv-topic-pill" href="#">Topic 4</a>
                    </li>

                    <button type="button" className="btn btn-primary wbdv-topic-add-btn"><i className="fa fa-plus"></i>
                    </button>
                </ul>
            </div>

            <button type="button" className="btn btn-success">Save</button>
            <a type="button" className="preview" style={{fontSize: "20px"}}>Preview <i className="fa fa-toggle-off"
                                                                                       style={{fontSize: "25px"}}></i></a>

            <div className="wbdv-boxed">
                <div>
                    <h2 className="wbdv-big-heading"> Heading widget</h2>
                    <button className="wbdv-up"><i className="fa fa-arrow-up"></i></button>
                    <button className="wbdv-down"><i className="fa fa-arrow-down"></i></button>
                    <div className="form-group col-md-2 wbdv-heading">
                        <label for="heading"></label>
                        <select id="heading" className="form-control">
                            <option> Heading</option>
                        </select>
                    </div>
                    <button className="wbdv-red-close"><i className="fa fa-times"></i></button>
                </div>

                <div className="form-group">
                    <label for="headingtext"></label>
                    <input type="text" className="form-control" id="headingtext" placeholder="Heading Text"/>
                </div>

                <div className="form-group">
                    <label for="headingnumber"></label>
                    <select className="form-control" id="headingnumber">
                        <option>Heading 1</option>
                        <option>Heading 2</option>
                        <option>Heading 3</option>
                    </select>
                </div>

                <div className="form-group">
                    <label for="widgetname"></label>
                    <input type="text" className="form-control" id="widgetname" placeholder="Widget Name"/>
                </div>
                <h4>Preview</h4>
                <h1>Heading Text</h1>

            </div>
            <button className="wbdv-red-plus"><i className="fa fa-plus"></i></button>

        </div>
    </div>


export default CourseEditorComponent;