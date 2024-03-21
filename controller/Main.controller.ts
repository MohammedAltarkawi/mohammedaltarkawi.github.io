/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import BaseController from "./BaseController";
import Theming from "sap/ui/core/Theming";
import Switch from "sap/m/Switch";
import JSONModel from "sap/ui/model/json/JSONModel";
import { aJobsData } from "../model/jobData";
import Event from "sap/ui/base/Event";
import TimelineItem from "sap/ui/webc/fiori/TimelineItem";
import { jobS } from "../model/types";
import { URLHelper } from "sap/m/library";


/**
 * @namespace mst.github.controller
 */
export default class Main extends BaseController {
	private _oSwitch: Switch;
	private _sLightTheme = "sap_horizon";
	private _sDarkTheme = "sap_horizon_dark";
	//@ts-expect-error
	private webclient = window.sap.cai.webclient ;

	onInit(): void {
		
		const oModel = new JSONModel({jobs: aJobsData});
		this.getView().setModel(oModel, 'myJobs')

		this._oSwitch = this.getView().byId('themeSwitch') as Switch;
		const sCurrentTheme = Theming.getTheme();
		if(sCurrentTheme === this._sDarkTheme){
			this._oSwitch.setState(true);
		}
	}

	/**
	 * @returns {void}
	 */
	public onCompanyName(oEvent: Event): void{
		const oTimeLineItem = oEvent.getSource() as TimelineItem
		const obj = oTimeLineItem.getBindingContext('myJobs').getObject() as jobS
		URLHelper.redirect(obj.link, true)	
	}

	/**
	 * @returns {void}
	 */
	public toggleTheme(): void {
		const sState = this._oSwitch.getState();
		if (sState) {
			Theming.setTheme(this._sDarkTheme);
			this.webclient.setTheme(this._sDarkTheme);
		} else {
			Theming.setTheme(this._sLightTheme);
			this.webclient.setTheme(this._sLightTheme);
		}
	}
	
	/**
	 * @returns {void}
	 */
	public handlePopoverPress(): void{
		this.webclient.toggle();
	}
}
