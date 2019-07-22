import React, {Component} from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loadData }  from "../data/ActionCreators";
import { DataTypes } from "../data/Types";
import { Shop } from "./Shop";