import React, { useState, useEffect } from "react";
import { BiRectangle, BiShapePolygon } from "react-icons/bi";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";
import { BsCircle } from "react-icons/bs";
import { GrCursor } from "react-icons/gr";
import { TbPoint } from "react-icons/tb";
import { AiOutlineClear } from "react-icons/ai";

import "./draw.css";

import ColorPicker from "./colorpicker";

export const DrawWidget = (props) => {
  const ToolTypes = {
    POINT: "point",
    POLYLINE: "polyline",
    FREEDRAW: "freehand",
    POLYGON: "polygon",
    CIRCLE: "circle",
    RECTANGLE: "rectangle",
    TEXT: "text",

    SELECT: "select",
    CLEAR: "clear"
  };

  const PointStyles = {
    CIRCLE: "circle",
    CROSS: "cross",
    DIAMOND: "diamond",
    SQUARE: "square"
  };

  const FillStyles = {
    BACKWARD_DIAGONAL: "backward-diagonal",
    FORWARD_DIAGONAL: "forward-diagonal",
    CROSS: "cross",
    DIAGONAL_CROSS: "diagonal-cross",
    HORIZONTAL: "horizontal",
    VERTICAL: "vertical",
    NONE: "none",
    SOLID: "solid"
  };

  const LineStyles = {
    DASH: "dash",
    DASH_DOT: "dash-dot",
    DOT: "dot",
    LONG_DASH: "long-dash",
    LONG_DASH_DOT: "long-dash-dot",
    LONG_DASH_DOT_DOT: "long-dash-dot-dot",
    NONE: "none",
    SHORT_DASH: "short-dash",
    SHORT_DASH_DOT: "short-dash-dot",
    SHORT_DASH_DOT_DOT: "short-dash-dot-dot",
    SHORT_DOT: "short-dot",
    SOLID: "solid"
  };

  const defaultPointSymbol = {};

  const defaultLineSymbol = {};

  const defaultPolygonSymbol = {
    type: "simple-fill",
    style: "cross",
    color: "#EFC8B1",
    outline: {
      width: 3,
      style: "solid",
      color: "#514644"
    }
  };

  const [selectedTool, setSelectedTool] = useState(ToolTypes.SELECT);

  const [pointStyle, setPointStyle] = useState(PointStyles.CIRCLE);
  const [lineStyle, setLineStyle] = useState(LineStyles.SOLID);
  const [lineColor, setLineColor] = useState("#444");
  const [lineWeight, setLineWeight] = useState(1);

  const [fillStyle, setFillStyle] = useState(FillStyles.SOLID);
  const [fillColor, setFillColor] = useState("#DDD");

  const [pointSymbol, setPointSymbol] = useState(defaultPointSymbol);
  const [lineSymbol, setLineSymbol] = useState(defaultLineSymbol);
  const [polygonSymbol, setPolygonSymbol] = useState(defaultPolygonSymbol);

  const changeTool = (_tool) => {
    setSelectedTool(_tool);
  };
  const changeFillColor = (_color) => {};
  const changeFillStyle = (_style) => {};
  const changeLineColor = (_color) => {};
  const changeLineStyle = (_style) => {};
  const changeLineWeight = (_weight) => {};
  const changePointStyle = (_style) => {};

  useEffect(() => {}, []);

  return (
    <div>
      <div className="drawing-tools-container">
        <div className="drawing-tools-title">Drawing Tools</div>
        <div className="drawing-tools-body">
          <div
            className="drawing-tool-button"
            onClick={(e) => changeTool(ToolTypes.SELECT)}
          >
            <GrCursor className="drawing-tool-button-icon" />
            &nbsp;Sec
          </div>
          <div className="drawing-tool-seperator"></div>

          <div
            className="drawing-tool-button"
            onClick={(e) => changeTool(ToolTypes.POINT)}
          >
            <TbPoint className="drawing-tool-button-icon" />
            &nbsp;Nokta
          </div>

          <div
            className="drawing-tool-button"
            onClick={(e) => changeTool(ToolTypes.POLYLINE)}
          >
            <HiOutlineArrowTrendingUp className="drawing-tool-button-icon" />
            &nbsp;Cizgi
          </div>

          <div
            className="drawing-tool-button"
            onClick={(e) => changeTool(ToolTypes.POLYGON)}
          >
            <BiShapePolygon className="drawing-tool-button-icon" />
            &nbsp;Poligon
          </div>

          <div
            className="drawing-tool-button"
            onClick={(e) => changeTool(ToolTypes.RECTANGLE)}
          >
            <BiRectangle className="drawing-tool-button-icon" />
            &nbsp;Kare
          </div>

          <div
            className="drawing-tool-button"
            onClick={(e) => changeTool(ToolTypes.CIRCLE)}
          >
            <BsCircle className="drawing-tool-button-icon" />
            &nbsp;Daire
          </div>

          <div className="drawing-tool-seperator"></div>

          <div
            className="drawing-tool-button"
            onClick={(e) => changeTool(ToolTypes.CLEAR)}
          >
            <AiOutlineClear className="drawing-tool-button-icon" />
            &nbsp;Temizle
          </div>
        </div>
      </div>
      {selectedTool !== ToolTypes.SELECT && selectedTool !== ToolTypes.CLEAR && (
        <div className="drawing-tools-container container">
          {selectedTool === ToolTypes.POINT && (
            <div className="row drawing-tools-options-row">
              <div className="col-md-3">
                <strong>Nokta Stili</strong>
              </div>
              <div className="col-md-9">
                <select className="form-control" onChange={(e) => changePointStyle(e.target.value)}>
                  <option value={PointStyles.CIRCLE}>Daire</option>
                  <option value={PointStyles.CROSS}>Carpi</option>
                  <option value={PointStyles.DIAMOND}>Diamond</option>
                  <option value={PointStyles.SQUARE}>Kare</option>
                </select>
              </div>
            </div>
          )}

          {(selectedTool === ToolTypes.POLYLINE ||
            selectedTool === ToolTypes.POLYGON ||
            selectedTool === ToolTypes.CIRCLE ||
            selectedTool === ToolTypes.RECTANGLE) && (
            <div>
              <div className="row drawing-tools-options-row">
                <div className="col-md-3">
                  <strong>Cizgi/Kenarlik Kalinligi</strong>
                </div>
                <div className="col-md-9">
                  <select onChange={(e) => changeLineWeight(e.target.value)}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((x) => {
                      return <option value={x}>{x}</option>;
                    })}
                  </select>
                </div>
              </div>

              <div className="row drawing-tools-options-row">
                <div className="col-md-3">
                  <strong>Cizgi/Kenarlik Rengi</strong>
                </div>
                <div
                  className="col-md-9"
                  onChange={(e) => changeLineColor(e.target.value)}
                >
                  <ColorPicker />
                </div>
              </div>

              <div className="row drawing-tools-options-row">
                <div className="col-md-3">
                  <strong>Cizgi/Kenarlik Stili</strong>
                </div>
                <div className="col-md-9">
                  <select onChange={(e) => changeLineStyle(e.target.value)}>
                    <option value={LineStyles.SOLID}>Normal</option>

                    <option value={LineStyles.DASH}>Cizgi</option>
                    <option value={LineStyles.DASH_DOT}>Cizgi-Nokta</option>
                    <option value={LineStyles.DOT}>Nokta</option>
                    <option value={LineStyles.LONG_DASH}>Uzun Cizgi</option>
                    <option value={LineStyles.LONG_DASH_DOT}>
                      Uzun Cizgi-Nokta
                    </option>
                    <option value={LineStyles.LONG_DASH_DOT_DOT}>
                      Uzun Cizgi-Nokta-Nokta
                    </option>
                    <option value={LineStyles.SHORT_DASH}>Kisa Cizgi</option>
                    <option value={LineStyles.SHORT_DASH_DOT}>
                      Kisa Cizgi-Nokta
                    </option>
                    <option value={LineStyles.SHORT_DASH_DOT_DOT}>
                      Kisa Cizgi-Nokta-Nokta
                    </option>
                    <option value={LineStyles.SHORT_DOT}>Kisa Nokta</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {(selectedTool === ToolTypes.POLYGON ||
            selectedTool === ToolTypes.CIRCLE ||
            selectedTool === ToolTypes.RECTANGLE) && (
            <div>
              <div className="row drawing-tools-options-row">
                <div className="col-md-3">
                  <strong>Doldurma Rengi</strong>
                </div>
                <div
                  className="col-md-9"
                  onChange={(e) => changeFillColor(e.target.value)}
                >
                  <ColorPicker />
                </div>
              </div>

              <div className="row drawing-tools-options-row">
                <div className="col-md-3">
                  <strong>Doldurma Stili</strong>
                </div>
                <div className="col-md-9">
                  <select onChange={(e) => changeFillStyle(e.target.value)}>
                    <option value={FillStyles.SOLID}>Normal</option>
                    <option value={FillStyles.HORIZONTAL}>Yatay</option>
                    <option value={FillStyles.VERTICAL}>Dikey</option>
                    <option value={FillStyles.CROSS}>Capraz</option>
                    <option value={FillStyles.FORWARD_DIAGONAL}>
                      Diagonal
                    </option>
                    <option value={FillStyles.BACKWARD_DIAGONAL}>
                      Ters Diagonal
                    </option>
                    <option value={FillStyles.DIAGONAL_CROSS}>
                      Diagonal ve Capraz
                    </option>
                    <option value={FillStyles.NONE}>Yok</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

/*
const sketchVM = new SketchViewModel({
  view: view,
  layer: graphicsLayer,
  polygonSymbol: {
    type: "simple-fill",
    style: "cross"
    color: "#EFC8B1",
    outline: {
      width: 3,
      style: "solid",
      color: "#514644"
    }
  }
});
*/
export default DrawWidget;
